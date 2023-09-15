// 存放路径: src/services/home.ts
import type { BannerItem, CategoryItem } from '@/types/home'
import { request } from '@/utils/request'

/**
 * 首页-广告区域-小程序
 * @param distributionSite 广告区域展示位置（投放位置 投放位置，1为首页，2为分类商品页） 默认是1
 */
export const getHomeBannerAPI = (distributionSite = 1) => {
  return request<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}

// 获取首页分类数据
export const getHomeCategoryAPI = () => {
  return request<CategoryItem[]>({
    url: '/home/category/mutli',
    method: 'GET',
  })
}
