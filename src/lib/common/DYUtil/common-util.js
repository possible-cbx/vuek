function formatNum (num, tofixed = 2) {
  let newNum = parseInt(num, 10);

  if (newNum >= 10000 && newNum < 100000000) {
    newNum = (newNum / 10000).toFixed(tofixed) + '万';
  } else if (newNum >= 100000000) {
    newNum = (newNum / 100000000).toFixed(tofixed) + '亿';
  }

  return newNum;
};

function getParams (name) {
  // 构造一个含有目标参数的正则表达式对象
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  // 匹配目标参数
  const returnData = window.location.search.substr(1).match(reg);
  // 返回参数值
  if (returnData != null) return unescape(returnData[2]);
  return null;
};

export default {
  formatNum,
  getParams
};
