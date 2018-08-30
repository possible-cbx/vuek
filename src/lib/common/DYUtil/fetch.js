import Vue from 'vue';

function fetchGet (config = {}) {
  return new Promise((resolve, reject) => {
    Vue.http.get(config.url).then((res) => {
      const data = (res && res.body) || {};
      resolve(data);
    }, (res) => {
      reject(res);
    });
  });
}

function fetchPost (config = {}) {
  return new Promise((resolve, reject) => {
    Vue.http.post(config.url, (config.data || {}), { emulateJSON: true }).then((res) => {
      const data = (res && res.body) || {};
      resolve(data);
    }, (res) => {
      reject(res);
    });
  });
}

function fetchJsonp (config = {}) {
  return new Promise((resolve, reject) => {
    Vue.http.jsonp(config.url, {params: (config.data || {}), jsonp: (config.callbackName || {})}).then((res) => {
      const data = (res && res.body) || {};
      resolve(data);
    }, (res) => {
      reject(res);
    });
  });
}

export {
  fetchGet,
  fetchPost,
  fetchJsonp
};
