import router from '@/router/index';

const goProperty = () => {
  router.push('/property');
};

const goIndex = () => {
  router.push('/');
};

export default { goProperty, goIndex };
