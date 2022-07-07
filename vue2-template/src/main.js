import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import dataV from '@jiaminghi/data-view'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import scroll from 'vue-seamless-scroll'
import '@/mock'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import 'amfe-flexible/index'

Vue.config.productionTip = false
Vue.use(Antd)
Vue.use(dataV)
Vue.use(ElementUI)
Vue.use(scroll)

router.beforeEach((route, from, next) => {
  const { title } = route.meta
  if (title) {
    document.title = title
  }
  next()
})

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
