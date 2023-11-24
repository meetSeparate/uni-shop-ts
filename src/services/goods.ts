import { request } from '@/utils/request'
import type { GoodsResult } from '@/types/goods'

/**
 * 商品详情
 * @param id 商品id
 */
export const getGoodsByIdAPI = (id: string) => {
  return request<GoodsResult>({
    method: 'GET',
    url: 'http://127.0.0.1:8000/api/goodsDetail',
    // url: '/goods',
    data: { id },
  })
}
