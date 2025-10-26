<template>
  <page-meta page-style="overflow:hidden;"></page-meta>
  <view class="page">
    <view class="instruction-bar">
      <text class="game-detail">{{ instruction }}</text>
    </view>
    <view class="webview-container">
      <web-view :src="playerUrl" style="width:100%;height:100%;"></web-view>
    </view>
  </view>
</template>

<script>
import { stereoGames } from './game-config.js'
export default {
  data() {
    return {
      instruction: '',
      file: '',
      bg: '',
      playerUrl: ''
    }
  },
  onLoad(options) {
    const id = options.id ? decodeURIComponent(options.id) : ''
    const cfg = id && stereoGames[id] ? stereoGames[id] : null
    const title = cfg ? cfg.title : (options.title ? decodeURIComponent(options.title) : '立体视训练')
    this.instruction = cfg ? cfg.instruction : (options.instruction ? decodeURIComponent(options.instruction) : '')
    this.file = cfg ? cfg.file : (options.file ? decodeURIComponent(options.file) : '')
    this.bg = cfg ? cfg.bg : (options.bg ? decodeURIComponent(options.bg) : '')
    try {
      uni.setNavigationBarTitle({ title })
      uni.setNavigationBarColor({ frontColor: '#000000', backgroundColor: '#FFEAA7' })
    } catch (e) {}
    const base = '/static/swf-player/index.html'
    const q = `?file=${encodeURIComponent(this.file)}${this.bg ? `&bg=${encodeURIComponent(this.bg)}` : ''}&v=${Date.now()}`
    this.playerUrl = base + q
  },
  onBackPress() {
    uni.redirectTo({ url: '/pages/stereo-vision/stereo-vision' })
    return true
  }
}
</script>

<style>
  .page { display: flex; flex-direction: column; height: 100vh; box-sizing: border-box; overflow: hidden; }
  .instruction-bar { position: sticky; top: 0; z-index: 10; padding: 12rpx 16rpx; background: transparent; color: #333; border: none; text-align: center; }
  .game-detail { font-size: 28rpx; display: block; line-height: 1.5; }
  .webview-container { flex: 1; background: #111; }
</style>