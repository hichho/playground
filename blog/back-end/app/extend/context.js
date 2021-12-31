'use strict';

module.exports = {
  params(key) {
    const { method } = this.request;
    if (method === 'GET') {
      return key ? this.query[key] : this.query;
    }
    return key ? this.request.body[key] : this.request.body;
  },
};
