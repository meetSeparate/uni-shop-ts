import { request } from '@/utils/request'
import type { AddressParams, AddressItem } from '@/types/address'

export const postMemberAddressAPI = (data: AddressParams) => {
  return request({
    url: 'http://127.0.0.1:8000/api/address/',
    method: 'POST',
    data,
  })
}

// 获取收货地址列表
export const getMemberAddressAPI = () => {
  return request<AddressItem[]>({
    url: 'http://127.0.0.1:8000/api/address',
    method: 'GET',
  })
}

/**
 * 获取收货地址详情
 * @param id 地址id(路径参数)
 */
export const getMemberAddressByIdAPI = (id: string) => {
  return request<AddressItem>({
    method: 'GET',
    url: `http://127.0.0.1:8000/api/address`,
    data: { id },
  })
}

/**
 * 修改收货地址
 * @param id 地址id(路径参数)
 * @param data 表单数据(请求体参数)
 */
export const putMemberAddressByIdAPI = (data: { id: string } & AddressParams) => {
  return request({
    method: 'PUT',
    url: `http://127.0.0.1:8000/api/address/`,
    data,
  })
}

/**
 * 删除收货地址
 * @param id 地址id(路径参数)
 */
export const deleteMemberAddressByIdAPI = (id: string) => {
  return request({
    method: 'DELETE',
    url: `http://127.0.0.1:8000/api/address/`,
    data: { id },
  })
}
