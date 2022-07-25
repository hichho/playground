import { createRouter, createWebHashHistory } from 'vue-router';

const title = "可视化";

const routes = [{
    path: "/", meta: { title },
    component: () => import("@/layout/index.vue"),
    children: [
        {
            path: "/", name: "首页", component: () => import("@/pages/index.vue")
        },
        {
            path: "/property", name: "资产信息", component: () => import("@/pages/property.vue")
        },
        {
            path: "/scale", name: "缩放", component: () => import("@/pages/scale.vue")
        },
        {
            path: "/demo", name: "demo", component: () => import("@/pages/demo.vue")
        },
    ]
}];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router;
