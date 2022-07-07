import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from "path";


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        preprocessorOptions: {
            less: {
                //配置全局less
                additionalData: `@import "${resolve(__dirname, 'src/style/theme.module.less')}";`,
            }
        }
    },
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
            "/app": "",
            "/upload": ""
        }
    },
    base: './',
})
