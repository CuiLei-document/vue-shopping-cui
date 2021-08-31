import {request} from './request'

export const getHomeMultiData = ()=>{
    return request({
        url:'/home/multidata'
    })
}