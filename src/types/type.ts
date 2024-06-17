export interface task extends entity{
    name:string,
    completed?: boolean,
}

export type entity={
    _id?:any,
    __v?:number
}
