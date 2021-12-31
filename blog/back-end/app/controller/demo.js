'use strict';

/**
 * 05集
 * @type {Controller}
 */

const Controller = require('egg').Controller;

class DemoController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '<h1>this is my first egg.js</h1>';
  }

  async getApples() {
    const { ctx } = this;
    await new Promise(resolve => {
      setTimeout(() => {
        resolve(ctx.body = '<h1>getApples</h1>');
      }, 2000);
    });
  }

  /**
   * get,自由传递参数模式
   * @returns {Promise<void>}
   */
  async getQuery() {
    const { ctx } = this;
    const res = await ctx.service.demo.getApple('16');
    ctx.body = res;
  }

  /**
   * get,严格传参模式,推荐使用
   */
  async getStrictQuery() {
    const { ctx } = this;
    ctx.body = 'getQuery params:' + ctx.params.name + '-' + ctx.params.age;
  }

  /**
   * post
   */
  async add() {
    const { ctx } = this;
    ctx.body = {
      status: 200,
      data: ctx.request.body,
    };
  }

}

module.exports = DemoController;
