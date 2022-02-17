/**
 * 接口代理的地址
 * @type {string}
 */
const proxyHost = "http://localhost:8000";

/**
 * 需要代理的接口
 * @type {string[]}
 */
const proxyApis = ["/five_colours",];

/**
 * 构建对象
 * @type {{}}
 */
let obj = {};
proxyApis.forEach(it => {
  obj[it] = {
    target: proxyHost,
    ws: true, changeOrigin: true,
    pathRewrite: {"^/": ""}
  }
});

module.exports = obj;
