import { ReactElement, ReactPortal } from "react"

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

type ReactText = string | number;
type ReactChild = ReactElement | ReactText;
interface ReactNodeArray extends Array<ReactNode> {}
type ReactFragment = {} | ReactNodeArray;
export type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;