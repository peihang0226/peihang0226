import { service } from './axios';

export const request = (config) => {
  return new Promise((resolve, reject) => {
    service
      .request(config)
      .then((res) => {
        // 一些业务处理
        resolve(res.data);
      })
      .catch((err) => {
        console.log('request fail:', err);
      });
  });
};

const http = {
  get(url, params = {}, config) {
    return request({ url, params, ...config, method: 'GET' });
  },
  post(url, data = {}, config) {
    return request({ url, data, ...config, method: 'POST' });
  },
  // 上传文件，指定 'Content-Type': 'multipart/form-data'
  upload(url, data = {}, config) {
    return request({
      url,
      data,
      ...config,
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
};

export default http;