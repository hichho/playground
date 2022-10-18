import * as MITO from '@zyf2e/monitor-web'
import Vue from 'vue'
import App from './App.vue'

new Vue({
  render: h => h(App),
}).$mount('#app')
Vue.config.productionTip = false
Vue.use(MITO.MitoVue)
MITO.init({
  dsn: 'http://wjw-h5/monitor/error/collect',
  apiKey: 'wjw-h5',
  debug: true,
  pageOnShow(options) {
    console.log(options, '111')
    console.log('1212121')
  },
  pageOnHide() {
    console.log('1111')
  }, triggerWxEvent(e) {
    console.log(e, '1212');
  }
})
Vue.prototype.MITO = MITO;

