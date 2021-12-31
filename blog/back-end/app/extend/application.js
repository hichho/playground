'use strict';

module.exports = {
  /**
   * 方法扩展
   */
  currentTime() {
    return getTime();
  },

  /**
   * 属性扩展
   */
  get timeProp() {
    return getTime();
  },

};

function getTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  const nowTime = year + '年' + month + '月' + date + '日' + hour + ':' + minute + ':' + second;
  return nowTime;
}
