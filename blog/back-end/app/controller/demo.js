'use strict';

/**
 * @type {Controller}
 */

const Controller = require('egg').Controller;

class DemoController extends Controller {
  async index() {
    const { ctx, app } = this;
    const username = ctx.session.username;
    console.log(ctx.session.counter);
    await ctx.render('demo.html', {
      id: 2021, name: 'iphone', version: 13, description: 'newest iphone',
      appearance: [ '120', '190', '20' ], username, nowTime: app.currentTime(),
      nowTimeGetByAttribute: app.timeProp,
    });
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
   * @return {Promise<void>}
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

  async addCookie() {
    const { ctx } = this;
    // cookie的相关设置，maxAge:时效性，httpOnly:是否只允许服务器设置 encrypt是否加密
    ctx.cookies.set('user', 'hichho', {
      maxAge: 1000 * 20, httpOnly: true, encrypt: true,
    });
    ctx.session.username = 'hichho';
    ctx.body = {
      status: 200,
      data: '添加cookie成功',
    };
  }

  async getCookie() {
    const { ctx } = this;
    const user = ctx.cookies.get('user');
    console.log(user);
    ctx.body = {
      status: 200,
      data: '获取cookie成功',
    };
  }

  async deleteCookie() {
    const { ctx } = this;
    ctx.cookies.set('user', null);
    ctx.session.username = null;
    ctx.body = {
      status: 200,
      data: '删除cookie成功',
    };
  }

  async setCookie() {
    const { ctx } = this;
    ctx.cookies.set('user', 'had set');
    ctx.session.username = 'username had set';
    ctx.body = {
      status: 200,
      data: '修改cookie成功',
    };
  }

  async newContext() {
    const { ctx } = this;
    const params = ctx.params('id');
    console.log(params);
    ctx.body = 'newContext';
  }

  async newRequest() {
    const { ctx } = this;
    const token = ctx.request.token;
    ctx.body = {
      status: 200,
      body: {
        token,
      },
    };
  }

  async newResponse() {
    const { ctx } = this;
    ctx.response.token = 'hichhhooo';
    const testBase64 = ctx.helper.base64Encode('haha');
    ctx.body = testBase64;
  }


  async webPage() {
    const { ctx } = this;
    await ctx.render('index.html');
  }
}

module.exports = DemoController;
