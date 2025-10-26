<template>
	<view class="container">
		<view class="header">
			<view class="icon-wrapper">
				<text class="icon">🔗</text>
			</view>
			<text class="title">融合训练</text>
			<text class="subtitle">增强双眼融合功能</text>
		</view>
		
		<view class="home-btn" @click="goHome">
			<text class="btn-text">返回首页</text>
			<text class="btn-icon">🏠</text>
		</view>
		<view class="description">
			<view class="desc-title">训练说明</view>
			<text class="desc-content">
				视觉中枢为能把两眼所见的物像变成一个，必须通过融合功能，此项分为分开和辐辏训练，是针对眼肌的一项训练，从而增大眼的融合范围，避免视疲劳的产生，例如：外斜分开过度，集合功能不足应进行辐辏训练，内斜集合过度，分开不足应进行分开训练。训练时须戴用红绿眼镜！
			</text>
		</view>
		
		<view class="games">
			<view class="games-title">训练游戏</view>
			<view class="game-list">
				<view 
					class="game-item" 
					v-for="(game, index) in games" 
					:key="index"
					@click="goToGame(game)"
				>
					<view class="game-icon">
						<text class="game-emoji">{{game.emoji}}</text>
					</view>
					<view class="game-info">
						<text class="game-name">{{game.name}}</text>
						<text class="game-desc">{{game.desc}}</text>
					</view>
					<view class="play-btn">▶</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { fusionGamesList } from './game-config.js'
	export default {
		data() {
			return {
				games: fusionGamesList
			}
		},
		methods: {
			goToGame(game) {
				const url = `/pages/fusion-training/game-player?id=${encodeURIComponent(game.id)}`;
				uni.navigateTo({ url });
			},
			goHome() {
				uni.redirectTo({ url: '/pages/index/index' });
			}
		}
	}
</script>

<style scoped>
	.container {
		min-height: 100vh;
		box-sizing: border-box;
		background-color: #96CEB4;
		padding: 40rpx 30rpx;
	}

	.header {
		text-align: center;
		margin-bottom: 60rpx;
	}

	.icon-wrapper {
		width: 120rpx;
		height: 120rpx;
		background: rgba(255, 255, 255, 0.2);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 30rpx;
		backdrop-filter: blur(10rpx);
	}

	.icon {
		font-size: 60rpx;
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
		color: rgba(255, 255, 255, 0.9);
		display: block;
	}

	.home-btn {
		cursor: pointer;
	}

	.description {
		background: rgba(255, 255, 255, 0.95);
		border-radius: 20rpx;
		padding: 40rpx;
		margin-bottom: 40rpx;
		box-shadow: 0 8rpx 32rpx rgba(0, 0, 0, 0.1);
	}

	.desc-title {
		font-size: 32rpx;
		font-weight: bold;
		color: #333;
		margin-bottom: 20rpx;
	}

	.desc-content {
		font-size: 28rpx;
		color: #666;
		line-height: 1.6;
	}

	.games {
		background: rgba(255, 255, 255, 0.95);
		border-radius: 20rpx;
		padding: 40rpx;
		box-shadow: 0 8rpx 32rpx rgba(0, 0, 0, 0.1);
	}

	.games-title {
		font-size: 32rpx;
		font-weight: bold;
		color: #333;
		margin-bottom: 30rpx;
	}

	.game-list {
		display: flex;
		flex-direction: column;
		gap: 20rpx;
	}

	.game-item {
		background: #f8f9fa;
		border-radius: 15rpx;
		padding: 30rpx;
		display: flex;
		align-items: center;
		transition: all 0.3s ease;
		cursor: pointer;
	}

	.game-item:active {
		background: #e9ecef;
		transform: scale(0.98);
	}

	.game-icon {
		width: 80rpx;
		height: 80rpx;
		background: linear-gradient(135deg, #96CEB4, #A8D5C0);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 30rpx;
	}

	.game-emoji {
		font-size: 36rpx;
	}

	.game-info {
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	.game-name {
		font-size: 30rpx;
		font-weight: bold;
		color: #333;
		margin-bottom: 10rpx;
	}

	.game-desc {
		font-size: 24rpx;
		color: #666;
		line-height: 1.4;
	}

	.play-btn {
		font-size: 32rpx;
		color: #96CEB4;
		font-weight: bold;
	}
	.home-btn { margin-bottom: 30rpx; align-self: flex-end; display: inline-flex; align-items: center; gap: 12rpx; background: rgba(255,255,255,0.95); color: #333; border-radius: 999rpx; padding: 12rpx 20rpx; box-shadow: 0 4rpx 16rpx rgba(0,0,0,0.08); }
	.home-btn:active { transform: scale(0.98); }
	.btn-text { font-size: 26rpx; }
	.btn-icon { font-size: 26rpx; }
</style>
