<template>
	<!-- 订单 -->
	<view class="order">
		<!-- 头部 -->
		<view class="top">
			<view v-for="(item,index) in top" :key="index" :class="tabIndex==index?'active':''"
			@click="orderIndex(item,index)">{{item.name}}
			<view class="bg" v-if="tabIndex==index"></view>
			</view>
		</view>
		<!-- 提现提示 -->
		<view class="tixian">每月23号以后结算上月预估收入,本月预估收入则在下月23结算</view>
		<view class="martop"></view>
	  <order-list :Maindata='Maindata' :topStatus='topStatus'></order-list>
	  
	</view>
</template>

<script>
	import OrderList from '../../components/orderList/orderList.vue'
	export default{
		components:{
			OrderList
		},
		data(){
			return{
				top:[
					{name:'全部',status:100},
					{name:'已成团',status:1},
					{name:'确认收货',status:2},
					{name:'已经结算',status:5}
					],
					tabIndex:0,
					Maindata:[
					],
					tomName:'全部',
					topStatus:100
			}
		},
		methods:{
			orderIndex(i,n){
				this.tabIndex=n;
				this.topStatus=i.status;
			}
		},
		onLoad:function(e){
			// console.log("页面传值:",e);
			uni.showLoading({
				title:'努力加载中...'
			})
			uni.setNavigationBarTitle({
				title:e.name
			})
			uni.hideShareMenu();
			// 商品请求
			uni.request({
				url: e.quest,
				method: 'GET',
				data: {
					openid:e.get
				},
				success: res => {
					// console.log("order数据状态:",res);
					this.Maindata=res.data.data.my_order;
					uni.hideLoading();
				},
				fail: () => {},
				complete: () => {}
			});
		}
	}
</script>

<style lang="less">
	.order{
		height: 1200upx;
		background-color: #F5F5F5;
		.martop{
			width: 100%;
			height: 180upx;
		}
		// top
		.top{
			position: fixed;
			top: 0upx;
			width: 100%;
			height: 80upx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			background-color: #ffffff;
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
		.tixian{
			position: fixed;
			top: 80upx;
			width:100%;
			font-size:24upx;
			text-align:center;
			background-color: #FFF2C5;
			height: 60upx;
			line-height: 60upx;
			margin-bottom: 20upx;
		}
	}
</style>
