import request from '@/utils/request'

export function login(params) {
  return request({
    url: '/melon-admin/user/login',
    method: 'post',
    params
  })
}