export interface task extends entity {
    name: string,
    completed?: boolean,
}
export interface responseHandler {
    data: any[],
    status: any
}
export type entity = {
    _id?: any,
    __v?: number
}
export type datatype = {
    data: any,
    status: any
}