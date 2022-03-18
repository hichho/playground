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
    name: 'num',
    component: () => import('@/views/num')
  },
  {
    path: '/todolist',
    name: 'todolist',
    component: () => import('@/views/todoList'),
    meta: { title: 'todoList' }
  },
  {
    path: '/frame',
    name: 'frame',
    component: () => import('@/views/frame'),
    meta: { title: 'frame' }
  },
  {
    path: '/childFrame',
    name: 'childFrame',
    component: () => import('@/views/childFrame')
  }
];


const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
});

export default router;
