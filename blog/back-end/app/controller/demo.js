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

}

module.exports = DemoController;
