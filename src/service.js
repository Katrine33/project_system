// 对axios二次封装
import axios from 'axios'
import { getToken } from './utils/setToken'  //因为在请求中需要添加token
import { Message } from 'element-ui'

const service = axios.create({
    baseURL:'/api',  //baseURL会自动加载请求地址上
    timeout:3000   //指定请求的超时毫秒数，如果请求超过这个时间，请求会中断
})

// 添加请求拦截器
service.interceptors.request.use((config) => {
    // 再请求之前做些什么（获取并设置token）
    config.headers['token'] = getToken('token') 
    //14行代码与在postman写的KV token是一样。目的是为了在每次请求前把token携带上去（因为接口数据需要登录了才可以拿到）
    return config
},(error) => {
    return Promise.reject(error)
})

// 添加相应拦截器
service.interceptors.response.use((response) => {
    // 对响应数据做些什么（通过响应的状态码给出不同提示）
    let { status,message } = response.data   //因为是看状态，所以这里是status
    if(status !== 200) {   //!==200 需要给一些提示，可以从el-ui导入
        Message({message:message || 'error',type:'warning'}) //有提示就给提示，没有就报错
    }
    return response
},(error) => {
    return Promise.reject(error)
})

export default service