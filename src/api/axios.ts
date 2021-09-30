import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import router from "../router/index";

const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    validateStatus: function (status) {
        // 此处决定请求响应status不满足该条件时进入error分支
        return status >= 200 && status < 300;
    },
    timeout: 1000 * 5, // 超时时间
    responseType: 'json'
});

let requestInExecutionList: string[] = [];

const stopRepeatRequest = (requestList: string[], config: AxiosRequestConfig, message: string) => {
    const url = [config.method, config.url, JSON.stringify(config.params), JSON.stringify(config.data)].join('&');
    if (requestList.length) {
        let array = requestList.filter(item => item === url);
        if (array.length) {
            console.log(message);
            return true;
        }
    }
    requestInExecutionList.push(url)
    return false
}

const allowRequest = (requestList: string[], config: AxiosRequestConfig) => {
    const url = [config.method, config.url, JSON.stringify(config.params), JSON.stringify(config.data)].join('&');
    if (requestList.length) {
        requestInExecutionList = requestList.filter(item => item !== url);
    }
}

/**
 * 请求拦截器
 */
instance.interceptors.request.use((config: AxiosRequestConfig) => {
    let repeatFlag = stopRepeatRequest(requestInExecutionList, config, `${config.url} 请求重复`)
    if (repeatFlag) {
        return {
            cancelToken: new axios.CancelToken(cancel => cancel(JSON.stringify(config)))
        }
    }
    return config
}, (error) => {
    return Promise.reject(error);
})

/**
 * 响应拦截器
 */
instance.interceptors.response.use((response: AxiosResponse) => {
    allowRequest(requestInExecutionList, response.config)
    return response;
}, (error) => {
    if (axios.isCancel(error)) {
        let config = JSON.parse(error.message);
        allowRequest(requestInExecutionList, config)
    } else {
        allowRequest(requestInExecutionList, error.config)
    }
    const response = error.response;
    if (response) {
        switch (response.status) {
            case 401: {
                // 跳转登录页面
                router.push({path: 'login', replace: true})
                break;
            }
            case 403: {
                // 未授权
                break;
            }
            case 404: {
                break;
            }
            default: {

            }
        }
    } else {
        // 断网、连接超时
        console.log("请检查服务器连接是否正常")
    }

    // const config = error.config;
    // // 全局请求次数，请求的间隙
    // const [RETRY_COUNT, RETRY_DELAY] = [3, 1000];
    // if (config && RETRY_COUNT) {
    //     // 设置用于跟踪重试计数的变量
    //     config.__retryCount = config.__retryCount || 0;
    //     // 检查是否已经把重试的总数用完
    //     if (config.__retryCount >= RETRY_COUNT) {
    //         return Promise.reject(error);
    //     }
    //     // 增加重试计数
    //     config.__retryCount++;
    //     // 创造新的Promise来处理指数后退
    //     const backoff = new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve(0);
    //         }, RETRY_DELAY || 1000);
    //     });
    //     // instance 重试请求的Promise
    //     return backoff.then(() => {
    //         return instance(config);
    //     })
    // }
    // 不进行 return axios请求响应不会进入catch分支，但却会进入then分支，不过此时then分支的参数值是为空的
    // 返回后，catch分支中可以获取error信息
    // 实际上，对于未成功的请求响应，因为已在拦截器进行处理，所以实际使用时不用进行catch操作
    return Promise.reject(error);
})

export default instance;
