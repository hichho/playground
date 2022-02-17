import axios from "axios";

const $axios = axios.create({
    timeout: 7000,
});
// 拦截器请求
$axios.interceptors.request.use((config) => {
    return config;
});

// 拦截响应
$axios.interceptors.response.use((response) => {
    return response.data;
});

export default $axios;
