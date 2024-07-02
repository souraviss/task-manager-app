import { publicDecrypt } from "crypto";
import { entity, responseHandler, task } from "./type";

export interface IWrite<T extends entity> {
    Post(item: T,cb?:any):void,
    Patch(item: T,cb?:any):void,
    Delete(item: T,cb?:any):void
}

export interface IRead<T extends entity,Q extends responseHandler> {
    GetAll(): Promise<Q>,
    FindBySingle(item: T): Promise<Q>
}



export abstract class ReadingRepository<T extends entity,Q extends responseHandler> implements IRead<T,Q> {
    public readonly _url: string;
    constructor(url: string) {
        this._url = url;
    }
    GetAll(): Promise<Q> {
        throw new Error("Method not implemented.");
    }
    FindBySingle(item: T): Promise<Q> {
        throw new Error("Method not implemented.");
    }
}

export abstract class PostingRepository<T extends entity> implements IWrite<T> {
    public readonly _url: string;
    constructor(url: string) {
        this._url = url;
    }
    Post(item: T,cb?:any): void {
        throw new Error("Method not implemented.");
    }
    Patch(item: T,cb?:any): void {
        throw new Error("Method not implemented.");
    }
    Delete(item: T,cb?:any): void {
        throw new Error("Method not implemented.");
    }
}