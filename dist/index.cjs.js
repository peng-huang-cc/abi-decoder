
  /**
   * @license
   * author: peng-huang-cc
   * abi-decoder.js v1.0.0
   * Released under the MIT license.
   */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var web3Utils = require('web3-utils');

function typeToString(input) {
    if (input.type === 'tuple') {
        return '(' + input.components.map(typeToString).join(',') + ')';
    }
    return input.type;
}

const { BN } = require('web3-utils');
const abiCoder = require('web3-eth-abi');
class ABIDecoder {
    methodIDs;
    savedABIs;
    constructor() {
        this.methodIDs = {};
        this.savedABIs = [];
    }
    addABI(abiArray) {
        if (Array.isArray(abiArray)) {
            // Iterate new abi to generate method id"s
            abiArray.map((abi) => {
                if (abi.name) {
                    const signature = web3Utils.sha3(abi.name + '(' + abi?.inputs?.map(typeToString).join(',') + ')');
                    if (!signature)
                        return;
                    if (abi.type === 'event') {
                        this.methodIDs[signature.slice(2)] = abi;
                    }
                    else {
                        this.methodIDs[signature.slice(2, 10)] = abi;
                    }
                }
            });
            this.savedABIs = this.savedABIs.concat(abiArray);
        }
        else {
            throw new Error('Expected ABI array, got ' + typeof abiArray);
        }
    }
    removeABI(abiArray) {
        if (Array.isArray(abiArray)) {
            // Iterate new abi to generate method id"s
            abiArray.map((abi) => {
                if (abi.name) {
                    const signature = web3Utils.sha3(abi.name +
                        '(' +
                        abi?.inputs
                            ?.map((input) => {
                            return input.type;
                        })
                            .join(',') +
                        ')');
                    if (!signature)
                        return;
                    if (abi.type === 'event') {
                        if (this.methodIDs[signature.slice(2)]) {
                            delete this.methodIDs[signature.slice(2)];
                        }
                    }
                    else {
                        if (this.methodIDs[signature.slice(2, 10)]) {
                            delete this.methodIDs[signature.slice(2, 10)];
                        }
                    }
                }
            });
        }
        else {
            throw new Error('Expected ABI array, got ' + typeof abiArray);
        }
    }
    getABIs() {
        return this.savedABIs;
    }
    getMethodIDs() {
        return this.methodIDs;
    }
    decodeMethod(data) {
        const methodID = data.slice(2, 10);
        const abiItem = this.methodIDs[methodID];
        if (!abiItem)
            return;
        const decoded = abiCoder.decodeParameters(abiItem.inputs, data.slice(10));
        const retData = {
            name: abiItem.name,
            params: [],
        };
        for (let i = 0; i < decoded.__length__; i++) {
            const param = decoded[i];
            let parsedParam = param;
            const isUint = abiItem.inputs?.[i].type.indexOf('uint') === 0;
            const isInt = abiItem.inputs?.[i].type.indexOf('int') === 0;
            const isAddress = abiItem.inputs?.[i].type.indexOf('address') === 0;
            if (isUint || isInt) {
                const isArray = Array.isArray(param);
                if (isArray) {
                    parsedParam = param.map((val) => new BN(val).toString());
                }
                else {
                    parsedParam = new BN(param).toString();
                }
            }
            // Addresses returned by web3 are randomly cased so we need to standardize and lowercase all
            if (isAddress) {
                const isArray = Array.isArray(param);
                if (isArray) {
                    parsedParam = param.map((p) => p.toLowerCase());
                }
                else {
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
    decodeLogs(logs) {
        return logs
            .filter((log) => log.topics.length > 0)
            .map((logItem) => {
            const methodID = logItem.topics[0].slice(2);
            const method = this.methodIDs[methodID];
            if (method) {
                const logData = logItem.data;
                const decodedParams = [];
                let dataIndex = 0;
                let topicsIndex = 1;
                const dataTypes = [];
                method.inputs?.map(function (input) {
                    if (!input.indexed) {
                        dataTypes.push(input.type);
                    }
                });
                const decodedData = abiCoder.decodeParameters(dataTypes, logData.slice(2));
                // Loop topic and data to get the params
                method.inputs?.map((param) => {
                    const decodedP = {
                        name: param.name,
                        type: param.type,
                        value: '',
                    };
                    if (param.indexed) {
                        decodedP.value = logItem.topics[topicsIndex];
                        topicsIndex++;
                    }
                    else {
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
                        }
                        else {
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
const abiDecoder = new ABIDecoder();

exports.ABIDecoder = ABIDecoder;
exports.abiDecoder = abiDecoder;
Object.keys(web3Utils).forEach(function (k) {
    if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
        enumerable: true,
        get: function () { return web3Utils[k]; }
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY2pzLmpzIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMvaW5kZXgudHMiLCIuLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJuYW1lcyI6WyJzaGEzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztTQUFnQixZQUFZLENBQUMsS0FBVTtJQUNyQyxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO1FBQzFCLE9BQU8sR0FBRyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7S0FDakU7SUFDRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUM7QUFDcEI7O0FDQ0EsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNyQyxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7TUFFNUIsVUFBVTtJQUNyQixTQUFTLENBQTBCO0lBQ25DLFNBQVMsQ0FBWTtJQUVyQjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0tBQ3JCO0lBRUQsTUFBTSxDQUFDLFFBQW1CO1FBQ3hCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTs7WUFFM0IsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUc7Z0JBQ2YsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFO29CQUNaLE1BQU0sU0FBUyxHQUFHQSxjQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO29CQUN4RixJQUFJLENBQUMsU0FBUzt3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
