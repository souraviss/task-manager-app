import { publicDecrypt } from "crypto";
import { entity, task } from "./type";

export interface IWrite<T extends entity> {
    Post(item: T): Promise<T>,
    Patch(item: T): Promise<T>,
    Delete(item: T): Promise<T>
}

export interface IRead<T extends entity> {
    GetAll(): Promise<T[]>,
    FindBySingle(item: T): Promise<T>
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

export abstract class ReadingRepository<T extends entity> implements IRead<T> {
    public readonly _url: string;
    constructor(url: string) {
        this._url = url;
    }
    GetAll(): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    FindBySingle(item: T): Promise<T> {
        throw new Error("Method not implemented.");
    }
}

export abstract class PostingRepository<T extends entity> implements IWrite<T> {
    public readonly _url: string;
    constructor(url: string) {
        this._url = url;
    }
    Post(item: T): Promise<T> {
        throw new Error("Method not implemented.");
    }
    Patch(item: T): Promise<T> {
        throw new Error("Method not implemented.");
    }
    Delete(item: T): Promise<T> {
        throw new Error("Method not implemented.");
    }
}