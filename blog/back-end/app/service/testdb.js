'use strict';
const Service = require('egg').Service;

class TestDbService extends Service {
  async addApple(params) {
    try {
      const { app } = this;
      const res = await app.mysql.insert('apples', params);
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async updateApple(params) {
    try {
      const { app } = this;
      const res = await app.mysql.update('apples', params);
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async deleteApple(id) {
    try {
      const { app } = this;
      const res = await app.mysql.delete('apples', id);
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getApples() {
    try {
      const { app } = this.app;
      const res = await app.mysql.select('apples');
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

module.exports = TestDbService;
