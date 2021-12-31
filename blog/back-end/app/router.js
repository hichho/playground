'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const counter = app.middleware.counter();
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/demo', controller.home.demo);
  router.get('/my', counter, controller.demo.index);// 中间件作为第二个参数
  router.get('/getApples', controller.demo.getApples);
  router.get('/getQuery', controller.demo.getQuery);
  router.get('/getStrictQuery/:name/:age', controller.demo.getStrictQuery);
  router.post('/add', controller.demo.add);
  router.get('/testGetQuery', controller.home.testApple);
  router.post('/addCookie', controller.demo.addCookie);
  router.post('/deleteCookie', controller.demo.deleteCookie);
  router.post('/getCookie', controller.demo.getCookie);
  router.post('/setCookie', controller.demo.setCookie);
  router.post('/newContext', controller.demo.newContext);
};
