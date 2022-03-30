/**
 * 接口代理的地址
 * @type {string}
 */
const proxyHost = 'https://movie.douban.com/';

/**
 * 需要代理的接口
 * @type {string[]}
 */
const proxyApis = ['/ithil_j'];

/**
 * 构建对象
 * @type {{}}
 */
const obj = {};
proxyApis.forEach((it) => {
  obj[it] = {
    target: proxyHost,
    ws: true,
    changeOrigin: true,
    pathRewrite: { '^/': '' },
  };
});

module.exports = obj;
