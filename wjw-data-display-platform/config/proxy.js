/**
 * 接口代理的地址
 */
const proxyHost = "https://";

/**
 * 需要代理的接口
 */
const proxyApis = ["/ithil_j"];

/**
 * 构建对象
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
