import request from './request';

export function fetchDetail({
  iid
}) {
  return request({
    url: '/detail',
    data: {
      iid
    }
  })
}