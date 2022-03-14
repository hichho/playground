import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import {resolve} from 'path';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(),vueJsx(),Components({
        resolvers:[AntDesignVueResolver()]
    })],
    resolve: {
        alias: [
            {
                find: "@",
                replacement: resolve(__dirname, "./src"),
            },
        ],
    },
    server:{
        proxy:{
            "/app": "http://zcse-index.tmp.kepai365.ltd/",
            "/upload": "http://zcse-index.tmp.kepai365.ltd/"
        }
    },
    base:'./'
})
