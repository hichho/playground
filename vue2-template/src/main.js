import Vue from 'vue';
import App from './App.vue';
import router from './router';
import dataV from '@jiaminghi/data-view';

Vue.config.productionTip = false
Vue.use(dataV);

router.beforeEach((to,from,next)=>{
  if(to.meta.title){
    document.title=to.meta.title
  }
  next();
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
