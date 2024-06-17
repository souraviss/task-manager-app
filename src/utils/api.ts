import { entity } from '@/types/type'
import axios from 'axios'

interface Params {
    baseUrl: string
    headers: any
    method: string
}
const getConfig: Params = {
    baseUrl: "http://localhost:3000/api/v1",
    headers: {
                "Content-Type": "application/json"
            },
    method: 'get'
}
const postConfig: Params = {
    baseUrl: "http://localhost:3000/api/v1",
    headers: {
                "Content-Type": "application/json"
            },
    method: 'post'
}
export const getAPI = async (url: string, data?: any): Promise<any> =>{
    return await axios({
        ...getConfig,
        url: `${getConfig.baseUrl}/${url}`,
        data
    }).then ( (response) => {
        return {
            status: response.status,
            data: response.data
        }
    }).catch((error) =>{
        console.log(error)
        return {
            status: error.status,
            data: error.response
        }
    })
}
export const postAPI = async (url: string, data?: any): Promise<any> =>{
    return await axios({
        ...postConfig,
        url: `${postConfig.baseUrl}/${url}/${data?._id}`,
        data
    }).then ( (response) => {
        return {
            status: response.status,
            data: response.data
        }
    }).catch((error) =>{
        console.log(error)
        return {
            status: error.status,
            data: error.response
        }
    })
}