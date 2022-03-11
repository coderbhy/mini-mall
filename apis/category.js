import request from './request';

export function fetchCategory() {
  return request({
    url: '/category'
  })
}

export function fetchSubCategory({
  maitKey
}) {
  return request({
    url: '/subcategory',
    data: {
      maitKey
    }
  })
}
