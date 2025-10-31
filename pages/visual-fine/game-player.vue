<template>
  
  <view class="page">
    <view class="instruction-bar">
      <text class="game-detail">{{ instruction }}</text>
    </view>
    <view class="webview-container">
      <web-view :src="playerUrl" style="width:100%;height:100%"></web-view>
    </view>
  </view>
</template>

<script>
import { visualFineGames } from './game-config.js'
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
    const cfg = id && visualFineGames[id] ? visualFineGames[id] : null

    // 从配置加载，否则回退到旧的查询参数
    const title = cfg ? cfg.title : (options.title ? decodeURIComponent(options.title) : '视觉精细训练')
    this.instruction = cfg ? cfg.instruction : (options.instruction ? decodeURIComponent(options.instruction) : '')
    this.file = cfg ? cfg.file : (options.file ? decodeURIComponent(options.file) : '')
    this.bg = cfg ? cfg.bg : (options.bg ? decodeURIComponent(options.bg) : '')

    try {
      uni.setNavigationBarTitle({ title })
      uni.setNavigationBarColor({ frontColor: '#ffffff', backgroundColor: '#4ECDC4' })
    } catch (e) {}

    const base = '/static/swf-player/index.html'
    // 简易 PC 检测：默认 PC 端隐藏虚拟键盘；可通过 cfg.padAllowOnPc 例外显示
    const ua = (typeof navigator !== 'undefined' && navigator.userAgent) ? navigator.userAgent : ''
    const isPc = !(/Android|iPhone|iPad|iPod|Mobile|Tablet/i.test(ua))
    const allowPcPad = !!(cfg && cfg.padAllowOnPc)
    const shouldPassPad = (!isPc) || allowPcPad

    const pad = (shouldPassPad && cfg && cfg.padRule) ? `&pad=${encodeURIComponent(cfg.padRule)}` : ''
    const padShow = (shouldPassPad && cfg && typeof cfg.padDefaultVisible !== 'undefined') ? `&padShow=${cfg.padDefaultVisible ? 1 : 0}` : ''
    const q = `?file=${encodeURIComponent(this.file)}${this.bg ? `&bg=${encodeURIComponent(this.bg)}` : ''}${pad}${padShow}&v=${Date.now()}`
    this.playerUrl = base + q
  },
  onBackPress() {
    uni.redirectTo({ url: '/pages/visual-fine/visual-fine' })
    return true
  }
}
</script>

<style>
  .page { display: flex; flex-direction: column; height: 100vh; box-sizing: border-box; overflow: hidden; }
  .instruction-bar { position: sticky; top: 0; z-index: 10; padding: 12rpx 16rpx; background: transparent; color: #fff; border: none; text-align: center; }
  .game-detail { font-size: 28rpx; display: block; line-height: 1.5; }
  .webview-container { flex: 1; background: #111; }
</style>