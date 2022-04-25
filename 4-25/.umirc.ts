import { defineConfig } from 'umi';

export default defineConfig({
  publicPath:'./',
  hash:true,
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
