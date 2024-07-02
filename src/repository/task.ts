import { IRead, IWrite, PostingRepository, ReadingRepository } from "@/types/genericInterface";
import { responseHandler, task } from "@/types/type";
import { getAPI, postAPI } from "@/utils/api";

export interface taskReading extends IRead<task,responseHandler> {
}

export interface taskPosting extends IWrite<task> {
}

//Get the task that is currently executing this task from the base repository
export class GetTaskRepository extends ReadingRepository<task,responseHandler> implements taskReading {
    GetAll(): Promise<responseHandler> {
        return getAPI(this._url);
    }
    FindBySingle(item: task): Promise<responseHandler> {
        return getAPI(this._url,item._id);
    }
} 

//Post the task that is currently executing this task from the base repository

export class PostTaskRepository extends PostingRepository<task> implements taskPosting{
    Post(item: task,cb?:any): void {
        postAPI(this._url,item,cb);
    }
    Patch(item: task,cb?:any): void {
         postAPI(this._url,item,cb);
    }
    Delete(item: task,cb?:any): void{
         postAPI(this._url,item,cb);
    }
}
