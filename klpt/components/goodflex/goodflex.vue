<template>
	<scroll-view scroll-y>
		<!-- 样式 -->
	  <view :class="flexblean?'boxgood2':'boxgood'">
		<view :class="flexblean?'goodLM':'goodBL'" v-for="(item,index) in data" :key='index'>
		<view class="ranking" hover-stop-propagation>
			<radio-group v-if="!browse && browseList" @change='radioblean'>
				<radio :value="item.goods_name" :checked="radio" color="#FD4739"></radio>
			</radio-group>
			<image :src="item.goods_thumbnail_url" mode="widthFix" lazy-load :class="!browse?'imgWidth':''" @click="goodLm(item)"></image>
			<view :class="'ran'+index" class="ran" v-if="index+1<4 && ranblean==true">{{index+1}}</view>
		</view>
		<view class="goodLmdesc" :class="!browse?'goodHeight':''" :style="!browseList?'width:242px;border-bottom:none':'230px'" >
			<!-- 商品名字 -->
			<view class="title" @click="goodLm(item)"><text>拼多多</text>{{item.goods_name}}</view>
			<!-- 领劵 拼的人数 -->
			<view class="juan" v-if="browse">
				<view class="tiao" v-if="flexblean" :style="item.coupon_min_order_amount/100>9?'padding-right:2px':''">
				  <text class="amout" :style="item.coupon_min_order_amount/100>99? 'right:3px':''">{{item.coupon_min_order_amount/100}}</text>  
				 </view>
				<text v-if="Lk==1">返{{item.now_rebate/100}}</text>
				<text v-if="Lk==2">返{{item.now_rebate_rank_two/100}}</text>
				<text v-if="Lk==3">返{{item.now_rebate_rank_three/100}}</text>
				<text @click="ruleB">升级返{{item.upgrade_rebate/100}}</text>
				<image src="../../static/wenhao.png" mode="widthFix" ></image>
			</view>
			<!-- 原价格  打折后的价格及跳转-->
			<view class="ling">
				<view class="yuan">
					<view v-if="flexblean" :style="(item.min_group_price-item.coupon_min_order_amount)/100>1000?'line-height:28px':''">到手价
					<text v-if="Lk==1" :style="(item.min_group_price-item.coupon_min_order_amount)/100>1000?'font-size:12px;':''">{{(item.min_group_price-item.coupon_min_order_amount-item.now_rebate)/100}}</text>
					<text v-if="Lk==2" :style="(item.min_group_price-item.coupon_min_order_amount)/100>1000?'font-size:12px;':''">{{(item.min_group_price-item.coupon_min_order_amount-item.now_rebate_rank_two)/100}}</text>
					<text v-if="Lk==3" :style="(item.min_group_price-item.coupon_min_order_amount)/100>1000?'font-size:12px;':''">{{(item.min_group_price-item.coupon_min_order_amount-item.now_rebate_rank_three)/100}}</text>
					</view>
					<view>拼团价{{item.min_group_price/100}}</view>
					<view v-if="flexblean">{{item.sold_quantity< 10000?item.sold_quantity:item.sold_quantity/10000 | numFilter }}{{item.sold_quantity< 10000?'':'万' }}人付款</view>
					<view class="tiao" v-if="!flexblean" :style="item.coupon_min_order_amount/100>9?'padding-right:17px':''">
					  <text class="aumouts">{{item.coupon_min_order_amount/100}}</text>  
					 </view>
				</view>
				<view class="tuflextiao">
					<view v-if="!flexblean" :style="(item.min_group_price-item.coupon_min_order_amount)/100>1000?'line-height:34px':''">到手价
					<text v-if="Lk==1" :style="(item.min_group_price-item.coupon_min_order_amount)/100>1000?'font-size:12px;':''">{{(item.min_group_price-item.coupon_min_order_amount-item.now_rebate)/100}}</text>
					<text v-if="Lk==2" :style="(item.min_group_price-item.coupon_min_order_amount)/100>1000?'font-size:12px;':''">{{(item.min_group_price-item.coupon_min_order_amount-item.now_rebate_rank_two)/100}}</text>
					<text v-if="Lk==3" :style="(item.min_group_price-item.coupon_min_order_amount)/100>1000?'font-size:12px;':''">{{(item.min_group_price-item.coupon_min_order_amount-item.now_rebate_rank_three)/100}}</text>
					</view>
					<text v-if="!flexblean">{{item.sold_quantity< 10000?item.sold_quantity:item.sold_quantity/10000 | numFilter }}{{item.sold_quantity< 10000?'':'万' }}人付款</text>
				</view>
			</view>
		</view>
	</view>
	</view>
	</scroll-view>
</template>

<script>
	var pages = getCurrentPages();
     var page = pages[pages.length - 1];
	 var uid=uni.getStorageSync('userId');
	export default{
		data(){
			return{
				// Lk:1
			}
		},
		props:{
			data:{
				type:Object,
				default:function(e){
					return {}
				}
			},
			flexblean:{
				type:Boolean,
				default:true
			},
			ranblean:{
				type:Boolean,
				default:false
			},
			browse:{
				type:Boolean,
				default:true
			},
			radio:{
				type:Boolean,
				default:false
			},
			browseList:{
				type:Boolean,
				default:true
			},
			router:{
				type:String,
				default:null
			},
			Lk:{
				type:Number,
				default:1
			}
		},
		filters: {
		  numFilter(value) {
		  // 截取当前数据到小数点后两位
			let realVal = parseFloat(value).toFixed(1)
			return realVal
		  }
		},
		methods:{
			goodLm(i){
				// console.log("页面路径",page);
				getApp().mtj.trackEvent('djm_test', { goods_id: i.goods_id,  url_form: this.router, });
				
				uni.navigateTo({
					url:'../../pages/productmess/productmess?id='+i.goods_id+'&sheng='+i.upgrade_rebate+'&ling='+i.now_rebate,
					success() {
					// 菜单日志发送
					uni.request({
						url: 'https://appserver.dijiamai.net/thirdreturn/index/applog',
						method: 'GET',
						data: {
							event_type:'click_product',
							log_json:{'user_id':uid,'goods_id':i.goods_id}
						}
					});
					}
				})
				
			},
			radioblean(e){
				// console.log(e);
			},
			 ruleB(){
				uni.navigateTo({
					url:'../../pages/rules/rule'
				})
			}
		},
		onShow() {
			// var i=uni.getStorageSync('rank');
			// this.Lk=i;
			// console.log('当前等级',i);
		}
		
	}
</script>

<style lang="less">
 .boxgood{
 	width: 100%;
 	display:flex;
 	flex-direction: row;
 	flex-wrap: wrap;
 	padding-left: 20upx;
 	background-color: #F5F5F5;
 }
 .boxgood2{
 	width: 100%;
     display:flex;
 	flex-direction: row;
 	flex-wrap: wrap;
	padding-top: 16upx;
 }

.ranking{
		position: relative;
		display: flex;
		flex-direction: row;
		align-items: center;
		// 排名
		.ran{
			position: absolute;
			top: 0upx;
			left: -2upx;
			width: 50upx;
			height: 62upx;
			line-height: 62upx;
			text-align: center;
			border-radius: 0upx 0upx 32upx 32upx;
			color: #ffffff;
		}
		.ran0{
			background:linear-gradient(#FD4739,#F55C18);
		}
		.ran1{
			background:linear-gradient(#FF9E3F,#FEBB8C);
		}
		.ran2{
			background:linear-gradient(#D8D8D8,#E3E3E3);
		}
	}
.goodLM>.ranking>image{
		width: 230upx;
		height: 230upx;
		margin-right: 20upx;
	}
	.ranking .imgWidth{
		width: 170upx ;
	}
.goodHeight{
		height: 170upx;
	}
	.goodDesc{
		width: 170upx;
	}
</style>
