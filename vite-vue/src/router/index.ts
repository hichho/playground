import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';


const title = "浙江特殊教育职业学院";

const routes: Array<RouteRecordRaw> = [{
    path: "/", meta: {title},
    component: () => import("@/components/Layout"),
    children: [
        {
            path: "/", name: "首页", component: () => import("@/views")
        },
        {
            path: "/list", name: "信息列表", component: () => import("@/views/list")
        },
        {
            path: '/detail', name: "详情", component: () => import("@/views/detail")
        }
    ]
}];
const router = createRouter({
    // history: createWebHistory('/test/'),
    history: createWebHistory(),
    routes
})
export default router;
