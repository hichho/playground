const proxy = require('./proxy');

module.exports = {
  publicPath: './',
  // 禁用 eslint
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true,
    open: true,
    proxy,
  },
};
