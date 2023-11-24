// src/services/home.ts
import type { GoodsItem } from '@/types/global'

/** 首页-广告区域数据类型 */
export type BannerItem = {
  /** 跳转链接 */
  hrefUrl: string
  /** id */
  id: string
  /** 图片链接 */
  imgUrl: string
  /** 跳转类型 */
  type: number
}

// 首页前台分类数据类型
export type CategoryItem = {
  // 图标路径
  icon: string
  // id
  id: string
  // 分类名称
  name: string
}

/** 首页-热门推荐数据类型 */
export type HotItem = {
  /** 说明 */
  alt: string
  /** id */
  id: string
  /** 图片集合[ 图片路径 ] */
  pictures: string
  /** 标题 */
  title: string
}

// GuessItem 和 GoodsItem 类型相同
export type GuessItem = GoodsItem
