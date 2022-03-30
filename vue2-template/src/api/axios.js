import axios from 'axios';
import {
  Message,
} from 'element-ui';
import Vue from 'vue';

const http = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '/proxy' : '/fzxf',
  timeout: 1000 * 600,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

/**
 * 请求拦截
 */
http.interceptors.request.use((axiosRequestConfig) => {
  const config = axiosRequestConfig;
  config.headers.Authorization = Vue.cookie.get('Authorization');
  return config;
}, (err) => Promise.reject(err));

/**
 * 返回拦截
 */
http.interceptors.response.use((response) => {
  const res = response.data;
  // 不校验状态码 直接返回数据
  // eslint-disable-next-line no-prototype-builtins
  if (!res.hasOwnProperty('code')) return response;
  if (res.code !== 200 && res.code !== 0) {
    return Promise.reject(new Error(res.msg || 'Error'));
  }
  return response;
}, (err) => {
  Message.error({
    message: '未登录或验证失败',
    duration: 1500,
  });
  return Promise.reject(err);
});

export default http;
