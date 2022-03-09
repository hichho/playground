import axios from 'axios';

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
<!--todo-->
<!--axios.get('/ithil_j/activity/movie_annual2021', {-->
<!--params: {with_widgets: '1'}-->
<!--}).then(res => {-->
<!--console.log(res.res.widgets)-->
<!--if (res.status.code === 200 && Array.isArray(res?.res?.widgets)) {-->
<!--this.data = res.res.widgets;-->
<!--this.loading = false;-->
<!--}-->
<!--}).catch(error => {-->
<!--this.notify({-->
<!--message: error, center: true-->
<!--, duration: 1500-->
<!--});-->
<!--})-->
