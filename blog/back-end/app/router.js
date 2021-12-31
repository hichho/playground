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
  router.get('/getQuery', controller.demo.getQuery);
  router.get('/getStrictQuery/:name/:age', controller.demo.getStrictQuery);
  router.post('/add', controller.demo.add);
  router.get('/testGetQuery', controller.home.testApple);
};
