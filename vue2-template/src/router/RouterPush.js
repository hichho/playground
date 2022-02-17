import router from './index';

/**
 * 命令式的路由跳转
 */
const goVisual = () => {
  console.log('123');
  router.push('/visual');
};

export default {
  goVisual
};
