<template name="skeleton">
  <view class="sk-container">
    <scroll-view scroll-y="true" class="viewport" enable-back-to-top="true">
      <view class="goods">
        <view class="preview">
          <swiper circular="true" current="0" autoplay="false">
            <swiper-item style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
              <image mode="aspectFill" class="sk-image"></image>
            </swiper-item>
          </swiper>
          <view class="indicator">
            <text class="current sk-transparent sk-opacity">1</text>
            <text class="split sk-transparent sk-opacity">/</text>
            <text class="total sk-transparent sk-opacity">5</text>
          </view>
        </view>
        <view class="meta">
          <view class="price">
            <text class="symbol sk-transparent sk-opacity">¥</text>
            <text class="number sk-transparent sk-text-14-2857-10 sk-text">166.00</text>
          </view>
          <view class="name ellipsis sk-transparent sk-text-14-2857-503 sk-text">极光限定 珠光蓝珐琅锅</view>
          <view class="desc"></view>
        </view>
        <view class="action">
          <view class="item arrow sk-pseudo sk-pseudo-circle">
            <text class="label sk-transparent sk-text-14-2857-570 sk-text">选择</text>
            <text class="text ellipsis sk-transparent sk-text-14-2857-133 sk-text"> 请选择商品规格 </text>
          </view>
          <view class="item arrow sk-pseudo sk-pseudo-circle">
            <text class="label sk-transparent sk-text-14-2857-935 sk-text">送至</text>
            <text class="text ellipsis sk-transparent sk-text-14-2857-553 sk-text"> 请选择收获地址 </text>
          </view>
          <view class="item arrow sk-pseudo sk-pseudo-circle">
            <text class="label sk-transparent sk-text-14-2857-499 sk-text">服务</text>
            <text class="text ellipsis sk-transparent sk-text-14-2857-820 sk-text"> 无忧退 快速退款 免费包邮 </text>
          </view>
        </view>
      </view>
      <view class="detail panel">
        <view class="title">
          <text class="sk-transparent sk-text-0-0000-555 sk-text">详情</text>
        </view>
        <view class="content">
          <view class="properties">
            <view class="item">
              <text class="label sk-transparent sk-text-25-0000-176 sk-text">电压可变</text>
              <text class="value sk-transparent sk-text-25-0000-172 sk-text">220V</text>
            </view>
            <view class="item">
              <text class="label"></text>
              <text class="value"></text>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<style scoped lang="scss">
.sk-transparent {
  color: transparent !important;
}
.sk-opacity {
  opacity: 0 !important;
}
.sk-text-14-2857-10 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 78.0769rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-503 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}
.sk-text-14-2857-570 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 35.0000rpx;
  position: relative !important;
}
.sk-text-14-2857-133 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 35.0000rpx;
  position: relative !important;
}
.sk-text-14-2857-935 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 35.0000rpx;
  position: relative !important;
}
.sk-text-14-2857-553 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 35.0000rpx;
  position: relative !important;
}
.sk-text-14-2857-499 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 35.0000rpx;
  position: relative !important;
}
.sk-text-14-2857-820 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 35.0000rpx;
  position: relative !important;
}
.sk-text-0-0000-555 {
  background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
  background-size: 100% 26.9231rpx;
  position: relative !important;
}
.sk-text-25-0000-176 {
  background-image: linear-gradient(transparent 25.0000%, #EEEEEE 0%, #EEEEEE 75.0000%, transparent 0%) !important;
  background-size: 100% 50.0000rpx;
  position: relative !important;
}
.sk-text-25-0000-172 {
  background-image: linear-gradient(transparent 25.0000%, #EEEEEE 0%, #EEEEEE 75.0000%, transparent 0%) !important;
  background-size: 100% 50.0000rpx;
  position: relative !important;
}
.sk-text-32-4324-418 {
  background-image: linear-gradient(transparent 32.4324%, #EEEEEE 0%, #EEEEEE 67.5676%, transparent 0%) !important;
  background-size: 100% 71.1538rpx;
  position: relative !important;
}
.sk-text-32-4324-959 {
  background-image: linear-gradient(transparent 32.4324%, #EEEEEE 0%, #EEEEEE 67.5676%, transparent 0%) !important;
  background-size: 100% 71.1538rpx;
  position: relative !important;
}
.sk-button {
  color: #EFEFEF !important;
  background: #EFEFEF !important;
  border: none !important;
  box-shadow: none !important;
}
.sk-image {
  background: #EFEFEF !important;
}
.sk-pseudo::before, .sk-pseudo::after {
  background: #EFEFEF !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before, .sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before, .sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}

</style>
