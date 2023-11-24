import type { LoginResult } from '@/types/member'
import { request } from '@/utils/request'

type LoginParams = {
  username: string
  password: string
}
/**
 * 小程序登录
 * @param data 请求参数
 */
export const postLoginWxMinAPI = (data: LoginParams) => {
  return request<LoginResult>({
    method: 'POST',
    url: '/login/wxMin',
    data,
  })
}

// 小程序模拟登录
export const wxLoginSimpleAPI = (phoneNumber: string) => {
  return request<LoginResult>({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: {
      phoneNumber,
    },
  })
}

// 小程序表单登录
export const loginAPI = (data: LoginParams) => {
  return request({
    url: 'http://127.0.0.1:8000/api/login/',
    method: 'POST',
    data,
  })
}
