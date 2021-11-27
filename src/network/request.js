import axios from "axios"
export function request(config) {
    //1.创建axios实例

    const instance = axios.create({
        baseURL: "http://152.136.185.210:7878/api/m5",
        timeout: 5000
    })
    instance.interceptors.request.use(config => {
        return config //不返回的话就直接拦截掉了，就没有配置信息了
    }, err => {
    })
    instance.interceptors.response.use(res => {
        return res.data.data
    }, err => {
    })
    return instance(config) //本身就是一个promise



}