//对于axios进行二次封装
import axios from "axios"
//引入进度条
import nProgress from "nprogress";
//引入进度条的样式
import "nprogress/nprogress.css"
//star:进度条开始 done:进度条借书

//1:利用axios对象的方法create 去创建一个axios实例
//request就是axios 只不过可以稍微配置一下
const requests = axios.create({
    //配置一下
    //基础路径 发生请求的时候 路径当中会出现/api
    baseURL: "/api",
    //代表请求超市的时间 5s
    timeout: 5000,

})
//请求拦截器：在发生请求之前，请求拦截器恶意检测到，可以在请求发生之前去做一些事情
requests.interceptors.request.use((config) => {
    //config:配置对象 对象里面有一个header请求头
    //进度条开始动
    nProgress.start()
    return config;
})
//响应拦截器
requests.interceptors.response.use((res) => {
    //成功的回调函数：服务器响应数据回来后，响应拦截器可以检测到，可以做一些事情
    //进度条结束
    nProgress.done()
    return res.data
}, (error) => {
    //响应失败的回调函数
    return Promise.reject(new Error('faile'))
})




//对外暴露
export default requests;