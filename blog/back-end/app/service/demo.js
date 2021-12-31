'use strict';

const Service = require('egg').Service;

class DemoService extends Service {
  async getApple(id) {
    return {
      id,
      name: 'apple',
      age: 18,
    };
  }
}

module.exports = DemoService;
