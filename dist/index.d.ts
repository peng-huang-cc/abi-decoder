import { LogEntry } from 'ethereum-types';
import { AbiItem } from 'web3-utils';
import { DecodeMethod, DecodeParams } from './types';
export declare class ABIDecoder {
    methodIDs: Record<string, AbiItem>;
    savedABIs: AbiItem[];
    constructor();
    addABI(abiArray: AbiItem[]): void;
    removeABI(abiArray: AbiItem[]): void;
    getABIs(): AbiItem[];
    getMethodIDs(): Record<string, AbiItem>;
    decodeMethod(data: string): DecodeMethod | undefined;
    decodeLogs(logs: LogEntry[]): ({
        name: string | undefined;
        events: DecodeParams[];
        address: string;
    } | undefined)[];
}
export * from 'web3-utils';
export declare const abiDecoder: ABIDecoder;
