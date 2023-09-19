import { request } from '@/utils/request'
import type { CategoryTopItem } from '@/types/category'

export const getCategoryAPI = () => {
  return request<CategoryTopItem[]>({
    url: '/category/top',
    method: 'GET',
  })
}
