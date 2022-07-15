import { createRouter, createWebHashHistory } from 'vue-router';

const title = '可视化';

const routes = [
  {
    path: '/',
    meta: { title },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/',
        name: '首页',
        component: () => import('@/views/index.vue'),
      },
      {
        path: '/property',
        name: '资产信息',
        component: () => import('@/views/property.vue'),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
