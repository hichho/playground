import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import {resolve} from 'path';
import Components from 'unplugin-vue-components/vite';
import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), Components({
        resolvers: [AntDesignVueResolver({importStyle: 'less'})]
    })],
    resolve: {
        alias: [
            {
                find: "@",
                replacement: resolve(__dirname, "./src"),
            },
        ],
    },
    server: {
        proxy: {
            "/ithil_j": "https://movie.douban.com/",
        }
    },
    base: './',
    css: {
        // css预处理器
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
                charset: false,
                modifyVars: {
                    "@primary-color": "red",
                    "@text-color": "green"
                },
            },
        },
    },
})
