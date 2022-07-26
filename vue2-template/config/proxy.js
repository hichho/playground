/**
 * 接口代理的地址
 * @type {string}
 */
const proxyHost = 'https://www.bing.com'

/**
 * 需要代理的接口
 * @type {string[]}
 */
const proxyApis = ['/app']

/**
 * 构建对象
 * @type {{}}
 */
const obj = {}
proxyApis.forEach((it) => {
  obj[it] = {
    target: proxyHost,
    ws: true,
    changeOrigin: true,
    pathRewrite: { '^/': '' }
  }
})

module.exports = obj
