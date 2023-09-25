import type { LoginResult } from '@/types/member'
import { request } from '@/utils/request'

type LoginParams = {
  code: string
  encryptedData: string
  iv: string
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
