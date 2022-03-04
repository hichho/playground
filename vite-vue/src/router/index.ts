import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';

const routes: Array<RouteRecordRaw> = [{
    path: "/", meta: {title: '浙江特殊教育职业学院'},
    component: () => import("@/components/Layout/index.vue"),
    children: [
        {
            path: "/", name: "首页", component: () => import("@/views/index.vue")
            , meta: {title: "首页"}
        },
    ]
}];
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;
