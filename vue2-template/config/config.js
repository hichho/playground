const proxy = require('./proxy')
const config = require('../package.json')

const addTime2Name = (name) => {
  const now = new Date()
  return `${name}--${
    now.getMonth() + 1
  }月${now.getDate()}日${now.getHours()}时${now.getMinutes()}分`
}

const fileName = addTime2Name(config.name)

module.exports = {
  css: {
    loaderOptions: {}
  },
  outputDir: fileName,
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
