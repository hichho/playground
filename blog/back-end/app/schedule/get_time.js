'use strict';
const Subscription = require('egg').Subscription;

class GetTime extends Subscription {
  static get schedule() {
    return {
      interval: '3s',
      // cron: '*/3*****',
      type: 'worker',
    };
  }

  async subscribe() {
    // console.log(Date.now());
  }
}

module.exports = GetTime;

