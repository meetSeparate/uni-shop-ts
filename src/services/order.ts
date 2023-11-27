import { request } from '@/utils/request'
import type { OrderPreResult, OrderCreateParams, OrderResult } from '@/types/order'

export const getMemberOrderPreAPI = () => {
  return request<OrderPreResult>({
    method: 'GET',
    url: 'http://127.0.0.1:8000/api/order_pre',
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
    url: 'http://127.0.0.1:8000/api/order_pre',
    data,
  })
}

/**
 * 提交订单
 * @param data 请求参数
 */
export const postMemberOrderAPI = (data: OrderCreateParams) => {
  return request<{ id: string }>({
    method: 'POST',
    url: 'http://127.0.0.1:8000/api/order/',
    data,
  })
}

export const deleteOrderPreAPI = () => {
  return request({
    url: 'http://127.0.0.1:8000/api/order_pre/',
    method: 'DELETE',
  })
}

/**
 * 获取订单详情
 * @param id 订单id
 */
export const getMemberOrderByIdAPI = (id: string) => {
  return request<OrderResult>({
    method: 'GET',
    url: `http://127.0.0.1:8000/api/order`,
    data: { id },
  })
}

// 修改订单状态
export const changeOrderStatusAPI = (id: string, status: string) => {
  return request({
    url: 'http://127.0.0.1:8000/api/order/',
    method: 'PUT',
    data: { id, status },
  })
}

// 获取订单列表
export const getOrderListAPI = (status: number) => {
  return request<OrderResult[]>({
    url: 'http://127.0.0.1:8000/api/order',
    method: 'GET',
    data: { status },
  })
}

// 删除订单
export const delOrderAPI = (id: string) => {
  return request({
    url: 'http://127.0.0.1:8000/api/order/',
    method: 'DELETE',
    data: { id },
  })
}
