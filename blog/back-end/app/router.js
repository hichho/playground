'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/demo', controller.home.demo);
  router.get('/my', controller.demo.index);
  router.get('/getApples', controller.demo.getApples);
};
