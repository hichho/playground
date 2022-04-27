import {defineConfig} from 'umi';
const apiHost = 'http://mmb.cnywinfo.com/';

export default defineConfig({
    antd: {mobile: false},
    request: {dataField: ''},
    title: '监管密码宝',
    locale: {
        default: 'zh-CN'
    },
    nodeModulesTransform: {
        type: 'none',
    },
    publicPath: './',
    hash: true,
    history: {type: 'hash'},
    theme: {'primary-color': '#004199', 'font-base-size': '14px'},
    targets: {safari: 9, ios: 9, ie: 9},
    ignoreMomentLocale: true,
    proxy: {
        '/wxController': {
            target: apiHost,
            changeOrigin: true,
            pathRewrite: {'^/': ''},
        },
    },

    fastRefresh: {},
});
