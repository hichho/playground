'use strict';

const { app } = require('egg-mock/bootstrap');

describe('demo-index', () => {
  it('demo-index-page', () => {
    return app.httpRequest()
      .get('/my')
      .expect(200)
      .expect('<h1>this is my first egg.js</h1>');
  });
  it('get apples', async () => {
    return app.httpRequest()
      .get('/getApples')
      .expect(200)
      .expect('<h1>getApples</h1>');
  });
});
