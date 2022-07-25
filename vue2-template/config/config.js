const proxy = require('./proxy')

module.exports = {
  css: {
    loaderOptions: {}
  },
  publicPath: './',
  // 禁用 eslint
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true,
    open: true,
    proxy
  }
}
