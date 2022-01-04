import {defineConfig} from 'umi';
// const apiHost = 'http://192.168.3.20:8084/';
export const apiHost = 'http://committee.tmp.kepai365.ltd/';
// export const apiHost = 'http://192.168.3.123:8085/';

export default defineConfig({
    request: {dataField: ''},
    title: 'design-patterns-game',
    locale: {
        default: 'zh-CN'
    },
    nodeModulesTransform: {
        type: 'none',
    },
    publicPath: './',
    hash: true,
    history: {type: 'hash'},
    theme: {'primary-color': '#DB2400', 'font-base-size': '14px'},
    targets: {safari: 9, ios: 9, ie: 9},
    ignoreMomentLocale: true,
    proxy: {
        '/menu': {
            target: apiHost,
            changeOrigin: true,
            pathRewrite: {'^/': ''},
        },
        '/banner': {
            target: apiHost,
            changeOrigin: true,
            pathRewrite: {'^/': ''},
        },
        '/appointment': {
            target: apiHost,
            changeOrigin: true,
            pathRewrite: {'^/': ''},
        },
        '/base': {
            target: apiHost,
            changeOrigin: true,
            pathRewrite: {'^/': ''},
        },
        '/document': {
            target: apiHost,
            changeOrigin: true,
            pathRewrite: {'^/': ''},
        },
        '/link': {
            target: apiHost,
            changeOrigin: true,
            pathRewrite: {'^/': ''},
        },
        '/committee': {
            target: apiHost,
            changeOrigin: true,
            pathRewrite: {'^/': ''},
        },
        '/download': {
            target: apiHost,
            changeOrigin: true,
            pathRewrite: {'^/': ''},
        },
    },

    fastRefresh: {},
});
