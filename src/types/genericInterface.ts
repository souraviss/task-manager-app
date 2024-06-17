import { publicDecrypt } from "crypto";
import { entity, responseHandler, task } from "./type";

export interface IWrite<T extends entity,Q extends responseHandler> {
    Post(item: T): Promise<Q>,
    Patch(item: T): Promise<Q>,
    Delete(item: T): Promise<Q>
}

export interface IRead<T extends entity,Q extends responseHandler> {
    GetAll(): Promise<Q>,
    FindBySingle(item: T): Promise<Q>
}

//marge the Iwrite and IRead together into baseRepository
// that class only can be extended
// abstract class BaseRepository<T extends entity> implements IWrite<T>, IRead<T> {
//     GetAll(): Promise<T[]> {
//         throw new Error("Method not implemented.");
//     }
//     FindBySingle(item: T): Promise<T> {
//         throw new Error("Method not implemented.");
//     }
//     Post(item: T): Promise<T> {
//         throw new Error("Method not implemented.");
//     }
//     Patch(item: T): Promise<T> {
//         throw new Error("Method not implemented.");
//     }
//     Delete(item: T): Promise<T> {
//         throw new Error("Method not implemented.");
//     }

// }

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

export abstract class PostingRepository<T extends entity,Q extends responseHandler> implements IWrite<T,Q> {
    public readonly _url: string;
    constructor(url: string) {
        this._url = url;
    }
    Post(item: T): Promise<Q> {
        throw new Error("Method not implemented.");
    }
    Patch(item: T): Promise<Q> {
        throw new Error("Method not implemented.");
    }
    Delete(item: T): Promise<Q> {
        throw new Error("Method not implemented.");
    }
}