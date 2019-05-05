<template>
	<!-- 支付明细 -->
	<view class="drawmoney">
		<!-- 头部 -->
		<view class="top">
			<view v-for="(item,index) in top" :key="index" :class="tabIndex==index?'active':''"
			@click="drawIndex(item,index)">{{item.name}}
			<view class="bg" v-if="tabIndex==index"></view>
			</view>
		</view>
		<view class="allStatus">
			<view class="status" v-for="(item,index) in status" :key="index">
				<view class="goodname">
					<view class="good">{{item.name}}</view>
					<view class="goodtime">{{item.time}}</view>
				</view>
				<view class="money" :style="item.money<0?'':'color:#FD4739'">{{item.money>0?'+'+item.money:item.money}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		components:{
			
		},
		data(){
			return{
				top:[
					{name:'淘宝明细'},
					{name:'拼多多明细'},
					{name:'京东明细'},
					{name:'账户明细'}
					],
					tabIndex:0,
					status:[
						{name:'春夏新款衣服女士修身流...',time:'2019-03-13  11:39:47',money:-50.00},
						{name:'返利',time:'2019-03-13  11:39:47',money:50.00},
					]
			}
		},
		methods:{
			drawIndex(i,n){
				this.tabIndex=n;
			}
		},
		onLoad:function(){
			uni.hideShareMenu();
		}
		
	}
</script>

<style lang="less">
	.drawmoney{
		height: 4000upx;
		background-color: #F5F5F5;
		// top
		.top{
			width: 100%;
			height: 80upx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			background-color: #ffffff;
			margin-bottom: 20upx;
			view{
				width: 25%;
				height: 80upx;
				line-height: 80upx;
				color:#A6A6A6;
				font-size: 24upx;
				text-align: center;
			}
			.active{
				color:#FD4739;
			}
			.bg{
				width: 100upx;
				height: 4upx;
				background-color: #FD4739;
				position: relative;
				top: -2upx;
				right: -44upx;
			}
		}
		// 返利状态
		.allStatus{
			.status{
				width: 100%;
				height: 100upx;
				box-sizing: border-box;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				background-color: #ffffff;
				font-size: 36upx;
				border-bottom: 2upx solid #F5F5F5;
				padding: 0 20upx;
				.goodname{
					width: 80%;
					height: 80upx;
					
					view:nth-child(2){
						height: 40upx;
						font-size: 26upx;
						color: #C6C6C6;
					}
				}
				// money
				.money{
				  font-weight: bold;
				}
			}
		}
	}
</style>
