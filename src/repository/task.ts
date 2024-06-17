import { IRead, IWrite, PostingRepository, ReadingRepository } from "@/types/genericInterface";
import { task } from "@/types/type";
import { getAPI, postAPI } from "@/utils/api";

export interface taskReading extends IRead<task> {
}

export interface taskPosting extends IWrite<task> {
}

//Get the task that is currently executing this task from the base repository
export class GetTaskRepository extends ReadingRepository<task> implements taskReading {
    GetAll(): Promise<task[]> {
        return getAPI(this._url);
    }
    FindBySingle(item: task): Promise<task> {
        return getAPI(this._url,item._id);
    }
} 

//Post the task that is currently executing this task from the base repository

export class PostTaskRepository extends PostingRepository<task> implements taskPosting{
    Post(item: task): Promise<task> {
        return postAPI(this._url,item);
    }
    Patch(item: task): Promise<task> {
        return postAPI(this._url,item);
    }
    Delete(item: task): Promise<task> {
        return postAPI(this._url,item);
    }
}
