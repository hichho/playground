'use strict';

/**
 * restful(提供api)、html、中间件（代理）
 * @type {Controller}
 */

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hello world';
  }

  async demo() {
    const { ctx } = this;
    ctx.body = '<h1>hello , this is my Demo</h1>';
  }
}

module.exports = HomeController;
