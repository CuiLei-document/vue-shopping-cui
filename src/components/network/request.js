import axios from 'axios'

export const request = (config) => {
    const instance = axios.create({
        baseURL: "http://152.136.185.210:7878/api/m5",
        timeout: 5000
    })
    instance.interceptors.request.use(config => {
        return config
    }, error => {
        return error
    })

    instance.interceptors.response.use(response => {
        return response.data
    }, error => {
        return error
    })

    return instance(config)
}