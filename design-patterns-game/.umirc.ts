import {defineConfig} from 'umi';

export default defineConfig({
    request: {dataField: ''},
    title: 'design-patterns-game',
    locale: {
        // default: 'zh-CN'
        default: 'en-US'
    },
    nodeModulesTransform: {
        type: 'none',
    },
    publicPath: './',
    hash: true,
    history: {type: 'hash'},
    theme: {'primary-color': 'rgb(111, 37, 111)', 'font-base-size': '14px'},
    targets: {safari: 9, ios: 9, ie: 9},
    ignoreMomentLocale: true,
    proxy: {},
    fastRefresh: {},
});
