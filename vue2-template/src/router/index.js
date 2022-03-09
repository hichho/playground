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
    component: () => import('../views/Num')
  },
  {
    path: '/todolist',
    name: 'todolist',
    component: () => import('../views/TodoList'),
    meta: { title: 'todoList' }
  }
];


const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
});

export default router;
