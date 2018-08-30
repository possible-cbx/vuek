// 设置localstorage
const setLocalStorage = (name, value = '') => {
  const values = (Object.prototype.toString.call(value) === '[object Object]') ? JSON.stringify(value) : value;

  window.localStorage && window.localStorage.setItem(name, values);
};

// 读取localstore
const getLocalStorage = (name) => {
  return (window.localStorage && window.localStorage.getItem(name));
};

// 设置cookie自定义时间函数
const getsec = (str) => {
  const str1 = str.substring(0, str.length - 1) * 1;
  const str2 = str.substring(str.length - 1, str.length);
  if (str2 === 's') {
    return str1 * 1000;
  } else if (str2 === 'h') {
    return str1 * 60 * 60 * 1000;
  } else if (str2 === 'd') {
    return str1 * 24 * 60 * 60 * 1000;
  }
  return false;
};

const continueSetCookie = (name, value, times) => {
  const time = times || '7d';
  const strsec = getsec(time);
  const exp = new Date();
  exp.setTime(exp.getTime() + strsec * 1);
  document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString();
};

// 设置cookie
const setCookie = (configjson) => { // 设置cookie的time示例 如要使cookie保存7天,则设置time = '7d'
  const setCookieJson = Object.assign({
    name: '',
    value: '',
    time: ''
  }, configjson);

  continueSetCookie(setCookieJson.name, setCookieJson.value, setCookieJson.time);
};

// 读取cookie
const getCookie = (name) => {
  const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
  const arr = document.cookie.match(reg);
  if (arr) {
    return unescape(arr[2]);
  }
  return '';
};

export default {
  setLocalStorage,
  getLocalStorage,
  setCookie,
  getCookie
};
