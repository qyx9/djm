<template>
	<!-- 提现 -->
	<view class="withdrawal">
		<!-- 支付宝 -->
		<view class="content">
			<view class="drawal">
				<view class="zfb">
					<image src="../../static/img/weixin.png" mode="widthFix"></image>
				</view>
				<view class="describe" style="margin-left: 10px;" @click="addmess">
					<view :style="!bind?'':'line-height:44px'">微信提现</view>
					<view v-if="!bind" style="height: 40px;">您还没有添加账户，请点击添加</view>
				</view>
				<image src="../../static/tiaozhuang2x.png" mode="widthFix"></image>
			</view>
			<!-- 账户余额 -->
			<view class="money" style="margin-top: 14px; padding-bottom: 6px; border-bottom:1px solid #F0F0F0;width: 100%;height: 26px;" >
				<text style="margin-right: 16px;">账户余额</text><text style="font-size: 20px;">{{data}}</text>
			</view>
			<!-- 提现金额 -->
			<view class="drawK">
				<view style="margin: 10px 0;">提现金额</view>
				<view class="num">
					<input type="text" value="¥"  placeholder="提现" auto-focus="true" style="background-color:#F0F0F0; height:34px;border-radius: 40upx;padding-left: 14upx;"/>
				</view>
			</view>
		</view>
		<!-- 确定提取 -->
		<view class="sure" @click="addmai">
			<view>确定提取</view>
		</view>
		<!-- margin -->
		<view class="margin20"></view>
		<!-- 提现记录 -->
		<view class="recode" @click="addmai">
			<view class="title">
				<view >提现记录</view>
				<image src="../../static/tiaozhuang2x.png" mode="widthFix"></image>
			</view>
		</view>
		<!-- 提示 -->
		<view class="tips">
			<view>提现通知</view>
			<view>订单确认收货之后的15个工作日内拼多多会审核该笔返利。
如果在当月15号前通过审核，在当月23日返利,15号之后审核通过的，将在下个月的23日返利。
返利有效性、返利时间等规则不是由我们制定,是由拼多多/淘宝/京东等商家制定,我们只是将返利转交给您。</view>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				data: 0,
				bind:false,
			}
		},
		methods: {
			recodR() {
				uni.navigateTo({
					url:'../drawmoney/drawmoney'
				})
			},
			addmai(){
				uni.showModal({
					title:'提示',
					content:'该功能将于五月一号上线',
				})
			},
			addmess(){
				if(this.bind){
					
				}else{
					uni.navigateTo({
						url:'../bind/bind'
					})
				}
			}
		},
		onLoad:function(e){
			uni.hideShareMenu();
			this.data=e.n;
			var bind=uni.getStorageSync('bind');
			this.bind=e.bind?e.bind:bind;
		}
	}
</script>

<style lang="less">
	.withdrawal{
		// 支付宝
		.content{
			width: 96%;
			margin: 20upx 2% 20upx 2%;
			
		.drawal{
			width: 100%;
			height: 160upx;
			box-sizing: border-box;
			padding: 0 20upx;
			background-color: #F0F0F0;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			.describe{
				width: 80%;
				font-size: 28upx;
				>view:first-child{
					height: 40px;
					line-height: 54px;
				}
				.at{
					line-height: 40px;
				}
			}
			.zfb{
				width: 100upx;
				height: 100upx;
				background-color: #ffffff;
				border-radius: 50%;
				>image{
					width: 100upx;
					height: 100upx;
				}
			}
			>image:nth-child(3){
				width: 34upx;
				height: 34upx;
			}
		}
	 }
	 .sure{
		 height: 240upx;
		 width: 100%;
		 border-top: 2upx solid #F0F0F0;
		 view{
			 height: 96%;
			 height: 80upx;
			 margin:80upx 2%;
			 line-height: 80upx;
			 text-align: center;
			 border-radius: 40upx;
			 background-color: #FD4739;
			 color:#ffffff;
		 }
	 }
	 .margin20{
		 height: 20upx;
		 width: 100%;
		 background-color: #F0F0F0;
	 }
	 // 提现记录
	 .recode{
		 .title{
			 height: 60upx;
			 width: 100%;
			 box-sizing: border-box;
			 padding: 0 20upx;
			 display: flex;
			 flex-direction:row;
			 justify-content: space-between;
			 align-items: center;
			 >view{
				 width: 50%;
			 }
			 >image{
				 width: 34upx;
				 height: 34upx;
			 }
		 }
	 }
	 .tips{
		 padding-top: 20upx;
		 border-top: 2upx solid #F0F0F0;
		 view{
			  box-sizing: border-box;
			 padding: 0 20upx;
		 }
		 >view:first-child{
			 color:#FD4739;
		 }
		 >view:nth-child(2){
			 font-size: 28upx;
		 }
	 }
	}
</style>
