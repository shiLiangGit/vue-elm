import axios from 'axios';
import qs from 'qs';
import { baseUrl }  from '../config/env';

axios.defaults.timeout = 5000;              //超市默认值
axios.defaults.baseURL = baseUrl;    //默认baseUrl
axios.defaults.responseType = 'json';       //默认数据相应类型
axios.defaults.headers.common['Content-type'] = 'application/json;charset=UTF-8';
axios.defaults.withCredentials = true;      //表示跨域请求时是否需要使用凭证


// http request 拦截器
// 在ajax发送之前拦截 比如对所有请求统一添加header token
axios.interceptors.request.use(
    config => {
        let token;
        if (token) {
            config.headers.Authorization = `token ${token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

// http response 拦截器
// ajax请求回调之前拦截 对请求返回的信息做统一处理 比如error为401无权限则跳转到登陆界面
axios.interceptors.response.use(
    response => {
        switch (response.data.error) {
            case 401:
                response.data.msg = '未授权，请登录';
                break;
            default:
                break;
        }
        return response;
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
);

export default axios;  // 这句千万不能漏下！！！

/**
 * post 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post (url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(data))
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            });
    });
}
/**
 * get 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function get (url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {params: data})
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            });
    });
}
