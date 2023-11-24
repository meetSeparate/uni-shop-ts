<script setup lang="ts">
// 热门推荐页 标题和url
import { ref } from 'vue'
import { useGuessList } from '@/composables'
import CommonGuess from '@/components/CommonGuess.vue'

// 触底加载猜你喜欢
const { guessRef, onScrollToLower } = useGuessList()
const urlMap = [
  { type: '1', title: '特惠推荐', url: '/hot/preference' },
  { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
  { type: '3', title: '一站买全', url: '/hot/oneStop' },
  { type: '4', title: '新鲜好物', url: '/hot/new' },
]

// uniapp 获取页面参数
const query = defineProps<{
  type: string
}>()

const currUrlMap = urlMap.find((v) => v.type === query.type)

// 动态设置标题
uni.setNavigationBarTitle({ title: currUrlMap!.title })

// 推荐封面图
const bannerPicture = ref('')
// 保存封面
bannerPicture.value =
  'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-20/658defeb-6df2-4fe3-9440-0be40ad9f65f.jpg'
</script>

<template>
  <view class="viewport">
    <!-- 推荐封面图 -->
    <view class="cover">
      <image :src="bannerPicture"></image>
    </view>
    <view class="middle"></view>
    <!-- 推荐列表 -->
    <scroll-view scroll-y class="scroll-view" @scrolltolower="onScrollToLower">
      <common-guess ref="guessRef" :title="false" />
    </scroll-view>
  </view>
</template>

<style lang="scss">
.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 180rpx 0 0;
  position: relative;
}
.cover {
  width: 750rpx;
  height: 225rpx;
  border-radius: 0 0 40rpx 40rpx;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
}
.middle {
  line-height: 90rpx;
  position: relative;
  height: 90rpx;
}

.scroll-view {
  flex: 1;
}
</style>
