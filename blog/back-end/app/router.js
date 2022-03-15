'use strict';

// 18集

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
  router.post('/newRequest', controller.demo.newRequest);
  router.get('/newResponse', controller.demo.newResponse);
  router.get('/addAppleDb', controller.appleManage.addApple);
  router.get('/getAppleDb', controller.appleManage.getApple);
  router.get('/updateAppleDb', controller.appleManage.updateApple);
  router.get('/deleteAppleDb', controller.appleManage.deleteApple);

  router.get('/webPage', controller.demo.webPage);


};
