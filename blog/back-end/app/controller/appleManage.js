'use strict';
const Controller = require('egg').Controller;

class AppleManage extends Controller {
  async addApple() {
    const { ctx } = this;
    const params = {
      name: 'apple', age: 18, skill: 'test',
    };
    const res = await ctx.service.testdb.addApple(params);
    ctx.body = '添加apple:' + JSON.stringify(res);
  }

  async deleteApple() {
    const { ctx } = this;
    const id = { id: 3 };
    const res = await ctx.service.testdb.deleteApple(id);
    if (res) {
      ctx.body = '删除apple成功' + res;
    }
  }

  async updateApple() {
    const { ctx } = this;
    const params = {
      id: 3, name: 'huawei', age: 20, skill: '123',
    };
    const res = await ctx.service.testdb.addApple(params);
    if (res) {
      ctx.body = '更新apple' + JSON.stringify(res);
    } else {
      ctx.body = 'fail';
    }
  }

  async getApple() {
    const { ctx } = this;
    const res = await ctx.service.testdb.getApples();
    ctx.body = '查询结果：' + JSON.stringify(res);
  }
}

module.exports = AppleManage;
