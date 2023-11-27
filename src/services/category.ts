import { request } from '@/utils/request'
import type { CategoryTopItem } from '@/types/category'

export const getCategoryAPI = () => {
  return request<CategoryTopItem[]>({
    url: 'http://127.0.0.1:8000/api/category',
    method: 'GET',
  })
}
