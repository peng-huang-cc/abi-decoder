import { LogEntry } from 'ethereum-types';
import { AbiItem, sha3 } from 'web3-utils';

import { DecodeMethod, DecodeParams } from './types';
import { typeToString } from './utils';

const { BN } = require('web3-utils');
const abiCoder = require('web3-eth-abi');

export class ABIDecoder {
  methodIDs: Record<string, AbiItem>;
  savedABIs: AbiItem[];

  constructor() {
    this.methodIDs = {};
    this.savedABIs = [];
  }

  addABI(abiArray: AbiItem[]) {
    if (Array.isArray(abiArray)) {
      // Iterate new abi to generate method id"s
      abiArray.map((abi) => {
        if (abi.name) {
          const signature = sha3(abi.name + '(' + abi?.inputs?.map(typeToString).join(',') + ')');
          if (!signature) return;

          if (abi.type === 'event') {
            this.methodIDs[signature.slice(2)] = abi;
          } else {
            this.methodIDs[signature.slice(2, 10)] = abi;
          }
        }
      });

      this.savedABIs = this.savedABIs.concat(abiArray);
    } else {
      throw new Error('Expected ABI array, got ' + typeof abiArray);
    }
  }

  removeABI(abiArray: AbiItem[]) {
    if (Array.isArray(abiArray)) {
      // Iterate new abi to generate method id"s
      abiArray.map((abi) => {
        if (abi.name) {
          const signature = sha3(
            abi.name +
              '(' +
              abi?.inputs
                ?.map((input: any) => {
                  return input.type;
                })
                .join(',') +
              ')',
          );
          if (!signature) return;
          if (abi.type === 'event') {
            if (this.methodIDs[signature.slice(2)]) {
              delete this.methodIDs[signature.slice(2)];
            }
          } else {
            if (this.methodIDs[signature.slice(2, 10)]) {
              delete this.methodIDs[signature.slice(2, 10)];
            }
          }
        }
      });
    } else {
      throw new Error('Expected ABI array, got ' + typeof abiArray);
    }
  }

  getABIs() {
    return this.savedABIs;
  }

  getMethodIDs() {
    return this.methodIDs;
  }

  decodeMethod(data: string): DecodeMethod | undefined {
    const methodID = data.slice(2, 10);
    const abiItem = this.methodIDs[methodID];
    if (!abiItem) return;
    const decoded = abiCoder.decodeParameters(abiItem.inputs, data.slice(10));

    const retData: DecodeMethod = {
      name: abiItem.name,
      params: [],
    };

    for (let i = 0; i < decoded.__length__; i++) {
      const param = decoded[i];
      let parsedParam: string | string[] = param;
      const isUint = abiItem.inputs?.[i].type.indexOf('uint') === 0;
      const isInt = abiItem.inputs?.[i].type.indexOf('int') === 0;
      const isAddress = abiItem.inputs?.[i].type.indexOf('address') === 0;

      if (isUint || isInt) {
        const isArray = Array.isArray(param);
        if (isArray) {
          parsedParam = param.map((val: any) => new BN(val).toString());
        } else {
          parsedParam = new BN(param).toString();
        }
      }

      // Addresses returned by web3 are randomly cased so we need to standardize and lowercase all
      if (isAddress) {
        const isArray = Array.isArray(param);

        if (isArray) {
          parsedParam = param.map((p: string) => p.toLowerCase());
        } else {
          parsedParam = param.toLowerCase();
        }
      }

      retData.params.push({
        name: abiItem.inputs?.[i].name,
        value: parsedParam,
        type: abiItem.inputs?.[i].type,
      });
    }

    return retData;
  }

  decodeLogs(logs: LogEntry[]) {
    return logs
      .filter((log) => log.topics.length > 0)
      .map((logItem) => {
        const methodID = logItem.topics[0].slice(2);
        const method = this.methodIDs[methodID];
        if (method) {
          const logData = logItem.data;
          const decodedParams: DecodeParams[] = [];
          let dataIndex = 0;
          let topicsIndex = 1;

          const dataTypes: any[] = [];
          method.inputs?.map(function (input) {
            if (!input.indexed) {
              dataTypes.push(input.type);
            }
          });

          const decodedData = abiCoder.decodeParameters(dataTypes, logData.slice(2));

          // Loop topic and data to get the params
          method.inputs?.map((param) => {
            const decodedP: Omit<DecodeParams, 'value'> & {
              value: string;
            } = {
              name: param.name,
              type: param.type,
              value: '',
            };

            if (param.indexed) {
              decodedP.value = logItem.topics[topicsIndex];
              topicsIndex++;
            } else {
              decodedP.value = decodedData[dataIndex];
              dataIndex++;
            }

            if (param.type === 'address') {
              decodedP.value = decodedP.value.toLowerCase();
              // 42 because len(0x) + 40
              if (decodedP.value.length > 42) {
                const toRemove = decodedP.value.length - 42;
                const temp = decodedP.value.split('');
                temp.splice(2, toRemove);
                decodedP.value = temp.join('');
              }
            }

            if (param.type === 'uint256' || param.type === 'uint8' || param.type === 'int') {
              // ensure to remove leading 0x for hex numbers
              if (typeof decodedP.value === 'string' && decodedP.value.startsWith('0x')) {
                decodedP.value = new BN(decodedP.value.slice(2), 16).toString(10);
              } else {
                decodedP.value = new BN(decodedP.value).toString(10);
              }
            }

            decodedParams.push(decodedP);
          });

          return {
            name: method.name,
            events: decodedParams,
            address: logItem.address,
          };
        }
      });
  }
}

export * from 'web3-utils';
export const abiDecoder = new ABIDecoder();
