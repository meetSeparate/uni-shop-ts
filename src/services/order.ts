import { request } from '@/utils/request'
import type { OrderPreResult } from '@/types/order'

export const getMemberOrderPreAPI = () => {
  return request<OrderPreResult>({
    method: 'get',
    url: '/member/order/pre',
  })
}

/**
 * 填写订单-获取立即购买订单
 */
export const getMemberOrderPreNowAPI = (data: {
  skuId: string
  count: string
  addressId?: string
}) => {
  return request<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre/now',
    data,
  })
}
