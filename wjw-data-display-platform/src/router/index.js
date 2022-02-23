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
    path: "/",
    children: [
        {
            //默认 显示home组件
            path: "/",
            name: "定位",
            component: () => import('../views/index'),
            meta:{title:'浙江省卫健委大数据平台'}
        },
    ]
},
];


const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
});

export default router;
