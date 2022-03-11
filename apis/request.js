import config from './config';

export default function ({
  url,
  method="GET",
  data={}
}) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.baseURL + url,
      method,
      data,
      success: (res) => {
        resolve(res.data);
      },
      fail: (err) => {
        reject(err);
      }
    })
  })
}
