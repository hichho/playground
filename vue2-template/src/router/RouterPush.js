import router from './index';

/**
 * 命令式的路由跳转
 */
const goHome = () => {
  console.log('123');
  router.push('/visual');
};

export default {
  goHome
};
