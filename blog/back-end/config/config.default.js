/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1640872416279_4377';


  // session
  config.session = {
    key: 'HICHHO',
    httpOnly: false,
    maxAge: 1000 * 60,
    renew: true,
  };

  config.mysql = {
    app: true,
    agent: false,
    // client: {
    //   host: '192.168.0.101',
    //   port: '3306',
    //   user: 'root',
    //   password: 'root',
    //   database: 'test-egg',
    // },
  };

  // add your middleware config here 'counter'
  config.middleware = [];

  // forbidden csrf 跨域请求伪造
  config.security = {
    csrf: {
      enable: false,
    },
  };

  // view & ejs
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };

  config.ejs = {
    delimiter: '%',
  };

  // 静态资源目录
  config.static = {
    // prefix: '/assets',
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };


  return {
    ...config,
    ...userConfig,
  };
};
