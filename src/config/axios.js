import axios from 'axios';
// import router from "../router/index";

// request interceptor
axios.interceptors.request.use(
    // config => {
    //     console.log("preparing token : ");
    //     //config.url += '?date=' + new Date().getTime();
    //     // 如果是登录和注册的请求，就不需要加JWT
    //     //if (config.url.indexOf("login") == -1 && config.url.indexOf("register") == -1) {
    //     //const JWT = localStorage.getItem("token");
    //
    //     const JWT = sessionStorage.getItem("token");
    //
    //     config.headers['token'] = JWT;
    //     //}
    //     return config
    // },
    // error => {
    //     // do something with request error
    //     console.log("request interceptor error", error) // for debug
    //     return Promise.reject(error)
    // }
)

// http response 拦截器
axios.interceptors.response.use(
    // response => {
    //     if (response.data.errno !== 0) {
    //         router.replace('/');
    //         console.log("token过期");
    //     }
    //     return response;
    // },
    // error => {
    //     return Promise.reject(error);
    // }
);

export default axios;
