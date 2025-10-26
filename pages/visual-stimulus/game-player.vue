<template>
  
  <view class="page">
    <view class="instruction-bar" v-if="hasInstruction">
      <view class="toggle-btn" @click="toggleInstruction">{{ showInstruction ? '隐藏说明' : '查看说明' }}</view>
      <text class="game-detail" v-show="showInstruction">{{ instruction }}</text>
    </view>
    <view class="webview-container">
      <web-view :src="playerUrl" style="width:100%;height:100%;"></web-view>
    </view>
  </view>
</template>

<script>
import { visualStimulusGames } from './game-config.js'
export default {
  data() {
    return {
      instruction: '',
      file: '',
      bg: '',
      playerUrl: '',
      showInstruction: true,
      toggleEnabled: false,
      hasInstruction: false
    }
  },
  onLoad(options) {
    const id = options.id ? decodeURIComponent(options.id) : ''
    const cfg = id && visualStimulusGames[id] ? visualStimulusGames[id] : null

    // 优先使用 longInstruction，其次使用 instruction
    const title = cfg ? cfg.title : (options.title ? decodeURIComponent(options.title) : '视觉刺激训练')
    const longInstruction = cfg && cfg.longInstruction ? cfg.longInstruction : ''
    this.instruction = longInstruction || (cfg ? cfg.instruction : (options.instruction ? decodeURIComponent(options.instruction) : ''))
    this.file = cfg ? cfg.file : (options.file ? decodeURIComponent(options.file) : '')
    this.bg = cfg ? cfg.bg : (options.bg ? decodeURIComponent(options.bg) : '')

    // 根据规则控制默认显示/隐藏
    this.toggleEnabled = !!(cfg && (cfg.instructionToggle || cfg.toggleInstruction))
    this.hasInstruction = !!this.instruction
    this.showInstruction = this.toggleEnabled ? false : !!this.instruction

    try {
      uni.setNavigationBarTitle({ title })
      uni.setNavigationBarColor({ frontColor: '#ffffff', backgroundColor: '#FF6B6B' })
    } catch (e) {}

    const base = '/static/swf-player/index.html'
    const q = `?file=${encodeURIComponent(this.file)}${this.bg ? `&bg=${encodeURIComponent(this.bg)}` : ''}&v=${Date.now()}`
    this.playerUrl = base + q
  },
  methods: {
    toggleInstruction() {
      // 仅当启用规则且有说明内容时切换
      if (!this.toggleEnabled || !this.hasInstruction) return
      this.showInstruction = !this.showInstruction
    }
  },
  onBackPress() {
    uni.redirectTo({ url: '/pages/visual-stimulus/visual-stimulus' })
    return true
  }
}
</script>

<style>
  .page { display: flex; flex-direction: column; height: 100vh; box-sizing: border-box; overflow: hidden; }
  .instruction-bar { position: sticky; top: 0; z-index: 10; padding: 12rpx 16rpx; background: #000; color: #fff; border: none; text-align: center; }
  .toggle-btn { display: inline-block; margin-bottom: 8rpx; padding: 10rpx 16rpx; border-radius: 24rpx; background: rgba(255,255,255,0.2); color: #fff; cursor: pointer; }
  .toggle-btn:active { background: rgba(255,255,255,0.3); }
  .game-detail { font-size: 28rpx; display: block; line-height: 1.5; }
  .webview-container { flex: 1; background: #111; }
</style>

