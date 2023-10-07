import { request } from '@/utils/request'
import type { ProfileDetail, ProfileParams } from '@/types/member'

// 获取个人信息
export const getMemberProfileAPI = () => {
  return request<ProfileDetail>({
    url: '/member/profile',
    method: 'GET',
  })
}

/**
 * 修改个人信息
 * @param data 请求体参数
 */
export const putMemberProfileAPI = (data: ProfileParams) => {
  return request<ProfileDetail>({
    method: 'PUT',
    url: '/member/profile',
    data,
  })
}
