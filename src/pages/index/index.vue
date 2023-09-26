<script setup lang="ts">
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import CustomNavbar from '@/pages/index/components/CustomNavbar.vue'
import CategoryPanel from '@/pages/index/components/CategoryPanel.vue'
import PageSkeleton from '@/pages/index/components/PageSkeleton.vue'
import HotPanel from '@/pages/index/components/HotPanel.vue'
import { useGuessList } from '@/composables'

// 轮播图数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

// 首页分类
const categoryList = ref<CategoryItem[]>([])

const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

// 首页热门推荐
const hotList = ref<HotItem[]>([])

const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}
// 触底加载猜你喜欢
const { guessRef, onScrollToLower } = useGuessList()

// 下拉刷新
const isTriggered = ref(false)

const onRefresherRefresh = async () => {
  isTriggered.value = true
  guessRef.value.resetData()
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHomeHotData(),
    guessRef.value.getMore(),
  ])
  isTriggered.value = false
}

// 首屏加载骨架屏
const isLoading = ref(false)

onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
  isLoading.value = false
})
</script>

<template>
  <CustomNavbar />
  <scroll-view
    scroll-y
    class="scroll-view"
    @scrolltolower="onScrollToLower"
    refresher-enabled
    @refresherrefresh="onRefresherRefresh"
    :refresher-triggered="isTriggered"
  >
    <page-skeleton v-if="isLoading" />
    <template v-else>
      <CommonSwiper :list="bannerList" />
      <CategoryPanel :list="categoryList" />
      <HotPanel :list="hotList" />
      <CommonGuess ref="guessRef" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  flex: 1;
}
</style>
