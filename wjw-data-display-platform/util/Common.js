const getRandomNum = (value) => {
  if (!isNaN(Number(value))) {
    return Number(value) + Math.random();
  }
  return 0;
};
export {
  getRandomNum
};
