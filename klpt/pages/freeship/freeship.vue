<template>
	<view class="freeships">
	 <!-- 标题 -->
	 <scroll-view scroll-x class="hotList" v-if="false">
	 	<view :class="Tabindex==index?'hotMenu active':'hotMenu'" v-for="(item,index) in datas" :key="index"
	 	@click="TabIndex(item,index)">{{item.opt_name}}
	 	 <view v-if='Tabindex==index' class="activeline"></view>
	 	</view>
	 </scroll-view>
	<view class="freeship">
		<good-flex :data="data" :flexblean="flexblean" :Lk='Lk'></good-flex>
		<load-more v-if="showloadMore" :status="loadMoreText==='加载中...'?'loading':''"></load-more>
	</view>
	<view class="btnshare" @click="nowIn"><text>邀请</text> <text>升级</text></view>
	</view>
</template>

<script>
	import { requestip } from '@/pages/api/api.js';
	export default{
		data(){
			return{
				pages:1,
				data:[],
				flexblean:false,
				showloadMore:false,
				loadMoreText:"加载中...",
				num:0,
				datas:[1,2,3,4,5,6,7,9,9],
				Lk:1
			}
		},
		onLoad:function(e){
			uni.hideShareMenu();
			// console.log("freeship",e);
			uni.showLoading({
				title:'加载中...'
			});
			uni.setNavigationBarTitle({
				title:e.name
			});
			this.data=[];
			if(e.num==1){
				this.bigInit();
				this.num=e.num;
			}else if(e.num==3){
				this.freeInit();
				this.num=e.num;
			}else if(e.num==2){
				this.clearInit();
				this.num=e.num;
			}
		},
		methods:{
			// 数据初始化
			freeInit(){
				uni.request({
					url: requestip()+'/thirdreturn/index/getchannel?channel=0&page=1',
					method: 'GET',
					header:{
						"access-token":uni.getStorageSync('access-token'),
					    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
					   },
					data: {},
					success: res => {
						// console.log('1.9初始化',res.data);
						this.data=res.data.goods_basic_detail_response.list;
						uni.hideLoading();
					},
					fail: () => {},
					complete: () => {}
				});
			},
			NineInit(pages){
				uni.request({
					url: requestip()+'/thirdreturn/index/getchannel?channel=0&page='+pages,
					method: 'GET',
					header:{
						"access-token":uni.getStorageSync('access-token'),
					    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
					   },
					data: {},
					success: res => {
						// console.log('1.9clear',res.data);
						for(var i=0 ;i<res.data.goods_basic_detail_response.list.length;i++){
							this.data.push(res.data.goods_basic_detail_response.list[i]);
						}
						this.showloadMore=false;
								},
					fail: () => {},
					complete: () => {}
				})
			},
			bigInit(){
				uni.request({
					url: requestip()+'/thirdreturn/index/superreturn?page=1',
					method: 'GET',
					header:{
						"access-token":uni.getStorageSync('access-token'),
					    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
					   },
					data: {},
					success: res => {
						// console.log('大额数据初始化',res.data);
						this.data=res.data.goods_search_response.goods_list;
						uni.hideLoading();
							},
					fail: () => {},
					complete: () => {}
				});
			},
			// 品牌清仓
			clearInit(){
				uni.request({
					url: requestip()+'/thirdreturn/index/getchannel?channel=2&page=1',
					method: 'GET',
					header:{
						"access-token":uni.getStorageSync('access-token'),
					    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
					   },
					data: {},
					success: res => {
						// console.log('品牌初始化',res.data);
						this.data=res.data.goods_basic_detail_response.list;
						uni.hideLoading();
					},
					fail: () => {},
					complete: () => {}
				});
			},
			bigbottom(pages){
				uni.request({
					url: requestip()+'/thirdreturn/index/superreturn?page='+pages,
					method: 'GET',
					header:{
						"access-token":uni.getStorageSync('access-token'),
					    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
					   },
					data: {},
					success: res => {
						for(var i=0 ;i<res.data.goods_search_response.goods_list.length;i++){
							this.data.push(res.data.goods_search_response.goods_list[i]);
						}
						this.showloadMore=false;
								},
					fail: () => {},
					complete: () => {}
				});
			},
			clearbottom(pages){
				uni.request({
				url: requestip()+'/thirdreturn/index/getchannel?channel=2&page='+pages,
				method: 'GET',
				header:{
					"access-token":uni.getStorageSync('access-token'),
				    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
				   },
				data: {},
				success: res => {
					// console.log('clear',res.data);
					for(var i=0 ;i<res.data.goods_basic_detail_response.list.length;i++){
						this.data.push(res.data.goods_basic_detail_response.list[i]);
					}
					this.showloadMore=false;
							},
				fail: () => {},
				complete: () => {}
			})
			},
			MumeInit(){
				uni.request({
					url: 'https://appserver.dijiamai.net/thirdreturn/index/getchannelclass?channel=2&page=1&is_sub=1&opt_id=1',
					method: 'GET',
					header:{
						"access-token":uni.getStorageSync('access-token'),
					    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
					   },
					data: {},
					success: res => {
						// console.log('菜单',res.data);
						this.datas=res.data
					},
					fail: () => {},
					complete: () => {}
				});
			},
			nowIn(){
				uni.navigateTo({
					url:'../invite/invite?gblean=true'
				})
			}
		},
		onReachBottom() {
			this.pages+=1;
			this.showloadMore=true;
			if(this.num==1){
				this.bigbottom(this.pages);
			}else if(this.num==3){
				this.NineInit(this.pages);
			}else if(this.num==2){
				this.clearbottom(this.pages);
			}
		},
		onShow() {
			var uid=uni.getStorageSync('userId');
			uni.request({
				url: requestip()+'/v2/customer/wx/user?user_id='+uid,
				method: 'GET',
				header:{
					"access-token":uni.getStorageSync('access-token'),
				    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
				   },
				data: {},
				success: res => {
					// this.userData=res.data.data.user_info;
					// console.log("个人数据:",res.data);
					uni.setStorageSync('rank',res.data.data.user_info.rank);
					uni.setStorageSync('peroid_status',res.data.data.user_info.peroid_status);
					this.Lk=res.data.data.user_info.rank;
				}
			});
		}
	}
</script>

<style lang="less">
	.hotList{
	     width: 100%;
		 white-space: nowrap;
		 height: 90upx;
		 line-height: 90upx;
		 position: fixed;
		 top: 0;
		 background-color:#ffffff;
		 border-bottom: 2upx solid #EEEEEE;
		 z-index: 100;
		.hotMenu{
			display: inline-block;
			width: 100upx;
			height: 90upx;
			text-align: center;
			font-size: 30upx;
		}
		.active{
			color:#FD4739;
			position: relative;
			.activeline{
				position: absolute;
				top:82upx;
				right: 26upx;
				width: 50upx;
				height: 4upx;
				background-color: #F70009;
			}
		}
	}
</style>
