import {defineConfig} from 'umi';
const apiHost = 'http://192.168.3.20:8084/';

export default defineConfig({
    request: {dataField: ''},
    title: '人社网络安全首页',
    locale: {
        default: 'zh-CN'
    },
    nodeModulesTransform: {
        type: 'none',
    },
    publicPath: '/',
    hash: true,
    history: {type: 'hash'},
    theme: {'primary-color': '#004199', 'font-base-size': '14px'},
    targets: {safari: 9, ios: 9, ie: 9},
    ignoreMomentLocale: true,
    proxy: {
        '/app': {
            target: apiHost,
            changeOrigin: true,
            pathRewrite: {'^/': ''},
        },
    },

    fastRefresh: {},
});
