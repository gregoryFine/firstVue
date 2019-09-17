const axios = require('axios');
const qs = require('qs');

let RequestPlugin = {};

RequestPlugin.install = Vue => {

    //axios.defaults.baseURL = API_HOST;
    axios.defaults.timeout = 20000;
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.defaults.withCredentials = false;  // ***********************此项设为false 为解决跨域访问的关键***************************

    // 数据请求前统一的拦截处理，详见axios文档
    axios.interceptors.request.use(
        config => {
            return config;
        },
        error =>{
            return error;
        }
    );

    // 数据响应后统一的拦截处理，详见axios文档
    axios.interceptors.response.use(
        response => {
            let d = response.data;
            if(d.type == 'error' && d.resultHint == '请先登录'){
                let vue = response.config._this;
                vue.$Message.error('请先登录');
            }
            return d;
        },
        error => {

        }
    );

    Vue.prototype.$httpGet = (url, params) => {
        params = params || {};
        return axios.get(url + '?' + qs.stringify(params, {arrayFormat : 'repeat', allowDots : true}), {_this : this});
    };

    Vue.prototype.$httpPost = (url, params) => {
        params = params || {};
        return axios.post(url, qs.stringify(params, {arrayFormat : 'repeat', allowDots : true}), {_this : this});
    };

    Vue.prototype.$fileUpload = (url, formData) => {
        return axios.post(url, formData, {headers : {'Content-Type' : 'multipart/form-data'}});
    };

    Vue.prototype.$httpPostForArray = (url, params) => {
        params = params || {};
        return axios.post(url, qs.stringify(params, {arrayFormat : 'indices', allowDots : true}), {_this : this});
    };

    Vue.prototype.$httpPut = (url, params) => {
        params = params || {};
        return axios.put(url, qs.stringify(params, {arrayFormat : 'repeat', allowDots : true}), {_this : this});
    };

    Vue.prototype.$httpDelete = (url, params) => {
        params = params || {};
        return axios.delete(url + '?' + qs.stringify(params, {arrayFormat : 'repeat', allowDots : true}), {_this : this});
    };

    // 文件流下载
    Vue.prototype.$fileDownload = (url, params) => {
        params = params || {};
        return axios.post(url, qs.stringify(params, {arrayFormat : 'repeat', allowDots : true}), {responseType : 'blob'});
    }

    // 文件流下载
    Vue.prototype.$fileDownload = (url, params) => {
        params = params || {};
        return axios.post(url, qs.stringify(params, {arrayFormat : 'indices', allowDots : true}), {responseType : 'blob'});
    }

};

export default RequestPlugin;