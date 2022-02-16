import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Visual from '@/views/Visual';

Vue.use(VueRouter);
const _push = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return _push.call(this, location)
    .catch((err) => err);
};

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/visual',
    name: 'Visual',
    component: Visual
  }
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
});

export default router;
