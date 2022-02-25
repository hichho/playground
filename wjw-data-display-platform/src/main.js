import Vue from 'vue';
import App from './App.vue';
import router from './router';
import dataV from '@jiaminghi/data-view';
import ElementUI, { Notification } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import scroll from 'vue-seamless-scroll';
import less from 'less';
import echarts from 'echarts';

Vue.config.productionTip = false;
Vue.use(dataV);
Vue.use(ElementUI);
Vue.use(scroll);
// Vue.use(echarts);
Vue.use(less);
Vue.prototype.notify = Notification;
Vue.prototype.echarts = echarts;

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
