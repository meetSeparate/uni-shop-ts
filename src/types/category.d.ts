import type { GoodsItem } from './global'

/** 一级分类项 */
export type CategoryTopItem = {
  /** 一级分类id */
  id: string
  /** 一级分类名称 */
  name: string
  /** 一级分类图片 */
  icon: string
  goods: GoodsItem[]
}
