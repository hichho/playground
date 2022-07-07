import axios from 'axios'

const http = axios.create({
  timeout: 1000 * 600,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

/**
 * 请求拦截
 */
http.interceptors.request.use()

/**
 * 返回拦截
 */
http.interceptors.response.use((response) => response)

export default http
