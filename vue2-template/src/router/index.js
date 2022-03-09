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
    component: () => import('../components/Layout/index'),
    children: [
      {
        //默认 显示home组件
        path: '/',
        name: '定位',
        component: () => import('../views/Location'),
        meta: { title: '定位' }
      },
      {
        //默认 显示home组件
        path: '/fireControl',
        name: '消防',
        component: () => import('../views/FireControl'),
        meta: { title: '消防' }
      },
      {
        //默认 显示home组件
        path: '/call',
        name: '报警',
        component: () => import('../views/Call'),
        meta: { title: '报警' }
      },
      {
        //默认 显示home组件
        path: '/video',
        name: '监控',
        component: () => import('../views/Video'),
        meta: { title: '监控' }
      },
    ]
  }, {
    path: '/visual',
    name: 'visual',
    component: () => import('../views/Visual')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../views/List')
  },
  {
    path: '/num',
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
