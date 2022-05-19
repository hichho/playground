import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const insidePush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return insidePush.call(this, location).catch((err) => err)
}

const routes = [
  {
    path: '/num',
    name: 'num',
    component: () => import('@/views/num.vue')
  },
  {
    path: '/todolist',
    name: 'todolist',
    component: () => import('@/views/todoList.vue'),
    meta: { title: 'todoList' }
  },
  {
    path: '/frame',
    name: 'frame',
    component: () => import('@/views/frame.vue'),
    meta: { title: 'frame' }
  },
  {
    path: '/childFrame',
    name: 'childFrame',
    component: () => import('@/views/childFrame.vue')
  },
  {
    path: '/',
    name: 'demo',
    component: () => import('@/views/index.vue'),
    meta: { title: 'demo' }
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
