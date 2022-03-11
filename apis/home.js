import request from './request';

export function fetchBannersAndRecommends() {
  return request({
    url: '/home/multidata'
  })
}

export function fetchGoodsInfo({
  type,
  page
}) {
  return request({
    url: '/home/data',
    data: {
      type,
      page
    }
  })
}
