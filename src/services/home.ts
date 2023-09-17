// 存放路径: src/services/home.ts
import type { BannerItem, CategoryItem, HotItem, GuessItem } from '@/types/home'
import type { PageResult, PageParams } from '@/types/global'
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

// 获取首页热门推荐数据
export const getHomeHotAPI = () => {
  return request<HotItem[]>({
    url: '/home/hot/mutli',
    method: 'GET',
  })
}

// 猜你喜欢
export const getHomeGoodsGuessAPI = (data?: PageParams) => {
  return request<PageResult<GuessItem>>({
    url: '/home/goods/guessLike',
    method: 'GET',
    data,
  })
}
