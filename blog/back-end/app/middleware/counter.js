'use strict';
/**
 * 页面埋点、获取访问ip
 */

module.exports = () => {
  return async (ctx, next) => {
    if (ctx.session.counter) {
      ctx.session.counter++;
    } else {
      ctx.session.counter = 1;
    }
    await next();
  };
};
