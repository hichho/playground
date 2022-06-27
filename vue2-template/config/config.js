const autoprefixer = require('autoprefixer') // 这个依赖不用安装
const pxtorem = require('postcss-pxtorem')
const proxy = require('./proxy')

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 192,
            unitPrecision: 5,
            propList: ['*'],
            selectorBlackList: ['vant-'],
            replace: true,
            mediaQuery: false,
            minPixelValue: 0,
            exclude: /node_modules/i
          })
        ]
      }
    }
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
