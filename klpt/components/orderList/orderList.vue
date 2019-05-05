<template>
	<view>
	<view class="main" v-for="(item,index) in Maindata" :key='index' v-if="topStatus==100?true:topStatus==item.order_status">
		<!-- 品牌 单号 -->
		<view class="singleList">
			<view class="single">
				<view class="address">拼多多</view>
				<view class="number" style="width: 70%;">{{item.order_sn}}</view>
				<view class="copy" @click="copyNumber(item.order_sn)">复制</view>
			</view>
			<view class="status" v-if="item.order_status==1">已成团</view>
			<view class="status" v-if="item.order_status==2">确认收货</view>
			<view class="status" v-if="item.order_status==5">已经结算</view>
		</view>
		<!-- 商品 -->
		<view class="goodList">
			<image :src="item.goods_thumbnail_url" mode="widthFix" @click="againBuy(item.goods_id)"></image>
			<view class="content" @click="againBuy(item.goods_id)">
				<view class="title">{{item.goods_name}}</view>
				<view class="time">创建时间:{{ item.order_create_time}}</view>
				<view class="money">
					<view class="">返:<text>¥{{item.promotion_amount/100}}</text></view>
					<!-- <text>¥{{item.order_amount/100}}</text> -->
					<view class="buy" @click="againBuy(item.goods_id)">再次购买</view>
					<!-- <text></text> -->
				</view>
			</view>
		</view>
		<!-- 到帐时间 -->
		<view class="again">
			<!-- <view class="time">预计到账时间: {{item.endtime}}</view> -->
			<!-- <view></view>
			<view class="buy" @click="againBuy(item.goods_id)">再次购买</view> -->
		</view>
	</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				status:[
					{}
				],
				copyTklStatus:false,
				data:''
			}
		},
		props:{
			Maindata:{
				type:Object,
				default:function(){
					return {}
				}
			},
			topStatus:{
				type:String,
				default:'全部'
			}
		},
		methods:{
			copyNumber(i){
				uni.setClipboardData({
					data:i,
					success:(r=>{
						this.copyTklStatus = true;
						uni.showToast({
						    icon:'success',
							title:'复制成功'
						})
					})
				})
			},
			againBuy(n){
				uni.navigateTo({
					url:'../../pages/productmess/productmess?id='+n
				})
			}
		}
	}
</script>

<style lang="less">
		// main
.main{
	width: 94%;
	margin: 0 3%;
	// height: 354upx;
	height: 308upx;
	background-color: #ffffff;
	border-radius: 14upx;
	margin-bottom: 20upx;
	.singleList{
		width: 100%;
		box-sizing: border-box;
		padding:0 20upx;
		height: 80upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		.single{
			width: 80%;
			height: 80upx;
			line-height: 80upx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			font-size: 26upx;
			.copy{
				height: 40upx;
				width: 64upx;
				line-height: 40upx;
				text-align: center;
				border: 2upx solid #FD4739;
				border-radius: 22upx;
				color: #FD4739;
			}
		}
		.status{
			font-size: 30upx;
		}
	}
	// 商品
	.goodList{
		box-sizing: border-box;
		width: 100%;
		height: 180upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		image{
			width: 200upx;
			height: 200upx;
		}
		.content{
			width: 80%;
			font-size: 26upx;
			margin-left: 10upx;
			.title{
				height: 80upx;
				
			}
			.time{
				height: 50upx;
			}
			.money{
				height: 50upx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				box-sizing: border-box;
				padding-right: 20upx;
				>view:first-child{
					line-height: 74upx;
				}
			}
		}
	}
	// 到账时间
	.again{
		width: 100%;
		height: 90upx;
		box-sizing: border-box;
		padding: 0 20upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		font-size: 26upx;
		.time{
			width: 80%;
			height: 90upx;
			line-height: 90upx;
		}
		
	}
	.buy{
		width: 30%;
		height: 54upx;
		line-height: 54upx;
		text-align: center;
		border:2upx solid #FD4739;
		border-radius: 30upx;
		color: #FD4739;
	}
}
</style>
