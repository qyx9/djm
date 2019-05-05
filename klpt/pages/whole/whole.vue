<template>
	<!-- 全部返利 -->
	<view class="whole">
		<!-- 头部 -->
		<view class="top">
			<view>全部返利(元)</view>
			<view class="topserver">
				<text>{{data.all_integral/100?data.all_integral/100:0}}</text>
				<!-- 提现 -->
				<view class="server" @click="drawal" v-if="false">
					<image src="../../static/m.png" mode="aspectFill"></image>
					<text>提现</text>
					<image src="../../static/99.png" mode="aspectFill"></image>
				</view>
			</view>
			<view class="toplist">
				<view v-for="(item,index) in top" :key="index" :class="tabIndex==index?'active':''"
				@click="wholeIndex(item,index)">{{item.name}}
				<view class="bg" v-if="tabIndex==index"></view>
				</view>
			</view>
		</view>
		<!-- 本月结算 -->
		<view class="month">
			<view class="total">
				<view class="monthlist">
					<view class="Estimate" @click="months('本月结算收入','本月内确认收货的订单收益')">
						<text>本月结算预估</text>
						<image src="../../static/wenhao.png" mode="aspectFill" ></image>
					</view>
					<view style="text-align: center;">￥{{data.now_month_integral/100?data.now_month_integral/100:0}}</view>
				</view>
				<view class="monthbg"></view>
				<view class="monthlist">
					<view class="Estimate" @click="months('上月结算收入','上月内确认收货的订单收益')">
						<text>上月结算预估</text>
						<image src="../../static/wenhao.png" mode="aspectFill" ></image>
					</view>
					<view style="text-align: center;">￥{{data.last_month_integral/100?data.last_month_integral/100:0}}</view>
				</view>
			</view>
			<view class="total">
					<view class="monthlist">
					<view class="Estimate" @click="months('本月付款收入','本月内已付款的订单收益')">
						<text>本月付款预估</text>
						<image src="../../static/wenhao.png" mode="aspectFill" ></image>
					</view>
					<view style="text-align: center;">￥{{data.now_month_pay/100?data.now_month_pay/100:0}}</view>
				</view>
				<view class="monthbg"></view>
				<view class="monthlist">
					<view class="Estimate" @click="months('上月付款收入','上个月已付款的订单收益')">
						<text>上月付款预估</text>
						<image src="../../static/wenhao.png" mode="aspectFill" ></image>
					</view>
					<view style="text-align: center;">￥{{data.last_month_pay/100?data.last_month_pay/100:0}}</view>
				</view>
			</view>
		</view>
		<!-- day -->
		<view class="day">
			<view class="daysum">
				<image src="../../static/day.png" mode="aspectFill"></image>今日
			</view>
			<view class="total">
				<view class="monthlist">
					<view class="Estimate" @click="months('付款笔数','所有付款的订单数量,只包含有效订单')">
						<text>付款笔数</text>
						<image src="../../static/wenhao.png" mode="aspectFill" ></image>
					</view>
					<view style="text-align: center;">￥{{data.now_day_count?data.now_day_count:0}}</view>
				</view>
				<view class="monthbg"></view>
				<view class="monthlist">
					<view class="Estimate" @click="months('今日预估佣金','今日内创建的有效订单的预估佣金')">
						<text>预估佣金(元)</text>
						<image src="../../static/wenhao.png" mode="aspectFill" ></image>
					</view>
					<view style="text-align: center;">￥{{data.now_day_integral/100?data.now_day_integral/100:0}}</view>
				</view>
			</view>
		</view>
		<!-- tomorrow -->
		<view class="day">
			<view class="daysum">
				<image src="../../static/tomorrow.png" mode="aspectFill"></image>昨日
			</view>
			<view class="total">
				<view class="monthlist">
					<view class="Estimate" @click="months('付款笔数','所有付款的订单数量,只包含有效订单')">
						<text>付款笔数</text>
						<image src="../../static/wenhao.png" mode="aspectFill" ></image>
					</view>
					<view style="text-align: center;">￥{{data.last_day_count?data.last_day_count:0}}</view>
				</view>
				<view class="monthbg"></view>
				<view class="monthlist">
					<view class="Estimate" @click="months('今日预估佣金','今日内创建的有效订单的预估佣金')">
						<text>预估佣金(元)</text>
						<image src="../../static/wenhao.png" mode="aspectFill" ></image>
					</view>
					<view style="text-align: center;">￥{{data.last_day_integral/100?data.last_day_integral/100:0}}</view>
				</view>
			</view>
		</view>
		<!-- 订单明细 -->
		<view class="orderDetailed" v-if="false">
			<view @click="Settlement"><text>结算订单明细</text><text>></text></view>
			<view @click="Settlement"><text>提现记录</text><text>></text></view>
		</view>
	</view>
</template>

<script>
	import UniIcon from '../../components/uni-icon/uni-icon.vue';
	import { requestip } from '@/pages/api/api.js'
	export default{
		compoents:{
			UniIcon
		},
		data(){
			return{
				top:[
					// {name:'淘宝'},
					{},
					{name:'拼多多'},
					{}
					// {name:'京东'}
				],
				tabIndex:1,
				data:''
			}
		},
		methods: {
			wholeIndex(i,n){
				// this.tabIndex=n;
			},
			months(i,n){
				uni.showModal({
					title:i,
					showCancel:false,
					content:n
				})
			},
			drawal(){
				uni.navigateTo({
					url:'../withdrawal/withdrawal'
				})
			},
			// 数据初始化
			wholeInit(){
				var uid=uni.getStorageSync('userId');
				uni.request({
					url: requestip()+'/v2/customer/wx/userintegraldetail?user_id='+uid,
					method: 'GET',
					header:{
						"access-token":uni.getStorageSync('access-token'),
					    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
					   },
					data: {},
					success: res => {
						// console.log("whole:",res.data);
						this.data=res.data.data.fans_list;
					},
					fail: () => {},
					complete: () => {}
				});
			},
			Settlement(){
				uni.navigateTo({
					url:'../drawmoney/drawmoney'
				})
			},
			// 关闭下拉
			sotpres(){
				setTimeout(()=>{
					this.wholeInit();
					uni.stopPullDownRefresh();
				},300)
			},
		},
		onLoad:function(){
			this.wholeInit();
			uni.hideShareMenu();
		},
		// 下拉刷新监听函数
		onPullDownRefresh() {
			// console.log("onPullDownRefresh")
			this.sotpres();
		}
	}
</script>

<style lang="less">
	.whole{
		height:100%;
		background-color: #F5F5F5;
		.top{
			box-sizing: border-box;
			padding: 20upx 20upx 20upx 40upx;
			width: 100%;
			height: 230upx;
			background-color: #FD4739;
			font-size: 28upx;
			color: #ffffff;
			margin-bottom: 20upx;
			.topserver{
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				>text{
					font-size: 56upx;
				}
				// 客服
				.server{
					margin-top: 20upx;
					width: 190upx;
					height: 58upx;
					border-radius: 26upx;
					background-color: #FE7F75;
					display: flex;
					flex-direction:row;
					justify-content: space-around;
					align-items: center;
					font-size: 28upx;
					color: #ffffff;
					>image:nth-child(1){
						width: 40upx;
						height: 40upx;
					}
					>image:nth-child(3){
						width: 14upx;
						height: 22upx;
					}
				}
			}
		 // top
			.toplist{
				width: 100%;
				height: 80upx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				background-color: #FD4739;
				view{
					width: 33%;
					height: 80upx;
					line-height: 80upx;
					color: #ffffff;
					font-size: 28upx;
					text-align: center;
				}
				.active{
					color:#ffffff;
					font-weight: bold;
					font-size: 34upx;
				}
				.bg{
					width: 44upx;
					height: 6upx;
					background-color: #ffffff;
					position: relative;
					top: 8upx;
					right: -88upx;
				}
			}
		}
		// month
		.month{
			height: 300upx;
			width: 100%;
			background-color: #ffffff;
			margin-bottom: 20upx;
		}
	  .total{
			height: 140upx;
			border-top: 2upx solid #F5F5F5;
			display: flex;
			flex-direction: row;
			align-items: center;
			.monthlist{
				width: 48%;
				height: 140upx;
				display: flex;
				flex-direction: column;
				.Estimate{
					width: 100%;
					height: 60upx;
					display: flex;
					flex-direction: row;
					justify-content: center;
					font-size: 28upx;
					align-items: center;
					>image{
						width: 30upx;
						height: 30upx;
						margin-left: 10upx;
					}
					
				}
			}
			.monthbg{
				width: 2upx;
				height: 110upx;
				background-color: #F5F5F5;
			}
		}
		// day
		.day{
			width: 100%;
			background-color: #ffffff;
			height: 210upx;
			margin-bottom: 20upx;
		}
		.daysum{
			box-sizing: border-box;
			padding: 0 20upx;
			width: 100%;
			height: 60upx;
			display: flex;
			flex-direction: row;
			align-items: center;
			>image{
				width: 40upx;
				height: 40upx;
				margin-right: 14upx;
			}
		}
		// 订单明细
		.orderDetailed{
			padding:0 20upx;
			box-sizing: border-box;
			width: 100%;
			height: 180upx;
			background-color: #ffffff;
			color: #919191;
			view{
				width: 100%;
				height: 90upx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
			}
			view:first-child{
				border-bottom: 2upx solid #F5F5F5
			}
		}
	}
</style>
