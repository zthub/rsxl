<template>
	<view class="container">
		<view class="header">
			<text class="title">弱视训练系统</text>
		</view>
		
		<view class="modules">
			<view 
				class="module-card" 
				v-for="(module, index) in modules" 
				:key="index"
				@click="goToModule(module)"
			>
				<view class="module-icon" :style="{backgroundColor: module.color}">
					<text class="icon">{{module.icon}}</text>
				</view>
				<view class="module-info">
					<text class="module-name">{{module.name}}</text>
					<text class="module-desc">{{module.desc}}</text>
				</view>
				<view class="arrow">→</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modules: [
					{
						name: '视觉刺激',
						desc: '通过色彩和光线刺激视觉神经',
						icon: '👁️',
						color: '#FF6B6B',
						path: '/pages/visual-stimulus/visual-stimulus'
					},
					{
						name: '视觉精细',
						desc: '提高视觉细节识别能力',
						icon: '🔍',
						color: '#4ECDC4',
						path: '/pages/visual-fine/visual-fine'
					},
					{
						name: '同时知觉',
						desc: '训练双眼同时感知能力',
						icon: '👀',
						color: '#45B7D1',
						path: '/pages/simultaneous-perception/simultaneous-perception'
					},
					{
						name: '融合训练',
						desc: '增强双眼融合功能',
						icon: '🔗',
						color: '#96CEB4',
						path: '/pages/fusion-training/fusion-training'
					},
					{
						name: '立体视',
						desc: '培养立体视觉感知',
						icon: '📐',
						color: '#FFEAA7',
						path: '/pages/stereo-vision/stereo-vision'
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			goToModule(module) {
				uni.navigateTo({
					url: module.path
				});
			}
		}
	}
</script>

<style>
	.container {
		min-height: 100vh;
		box-sizing: border-box;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		padding: 40rpx 30rpx;
	}

	.header {
		text-align: center;
		margin-bottom: 60rpx;
	}

	.title {
		font-size: 48rpx;
		font-weight: bold;
		color: #fff;
		display: block;
		margin-bottom: 20rpx;
	}

	.subtitle {
		font-size: 28rpx;
		color: rgba(255, 255, 255, 0.8);
		display: block;
	}

	.modules {
		display: flex;
		flex-direction: column;
		gap: 30rpx;
	}

	.module-card {
		background: rgba(255, 255, 255, 0.95);
		border-radius: 20rpx;
		padding: 30rpx;
		display: flex;
		align-items: center;
		box-shadow: 0 8rpx 32rpx rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease;
		cursor: pointer;
	}

	.module-card:active {
		transform: scale(0.98);
		box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.15);
	}

	.module-icon {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 30rpx;
		box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.1);
	}

	.icon {
		font-size: 48rpx;
	}

	.module-info {
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	.module-name {
		font-size: 32rpx;
		font-weight: bold;
		color: #333;
		margin-bottom: 10rpx;
	}

	.module-desc {
		font-size: 24rpx;
		color: #666;
		line-height: 1.4;
	}

	.arrow {
		font-size: 32rpx;
		color: #999;
		font-weight: bold;
	}
</style>
