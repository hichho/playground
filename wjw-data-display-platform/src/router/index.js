import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const _push = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return _push.call(this, location)
    .catch((err) => err);
};


const routes = [
  {
    path: '/',
    name: '首页',
    component: () => import('../views/Index'),
    meta: { title: '健康大脑云网中心' }
  }
];


const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
});

export default router;
