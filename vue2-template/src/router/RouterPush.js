import router from './index';

/**
 * 命令式的路由跳转
 */
const goVisual = () => {
  router.push('/visual');
};

export default {
  goVisual,
};
