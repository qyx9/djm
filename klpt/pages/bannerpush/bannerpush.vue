<template>
	<view class="bannerpush">
		<view class="name">活动主题商品</view>
		<!-- <view class="banner">
			<view class="title">店铺名:</view>
		</view> -->
		<!-- 商品列表 -->
		<good-flex :data='data' :flexblean='flexblean'></good-flex>
		<load-more v-if="showloadMore" :status="loadMoreText==='加载中...'?'loading':''" ></load-more>
	</view>
</template>

<script>
	import { requestip } from '../api/api.js'
	export default{
		data(){
			return{
				data:[],
				flexblean:false,
				showloadMore:false,
				loadMoreText:"加载中..."
			}
		},
		methods:{
			// 初始化数据
			banpushInit(e){
				uni.request({
					url: requestip()+'/thirdreturn/index/themegoods?theme_id='+e.id,
					method: 'GET',
					data: {},
					success: res => {
						// console.log('banpust数据;',res.data)
						this.data=res.data.theme_list_get_response.goods_list;
						uni.hideLoading();
					},
					fail: () => {},
					complete: () => {}
				});
			}
		},
		onLoad:function(e) {
			uni.hideShareMenu();
			uni.showLoading({
				title:'加载中...'
			})
			// 导航栏的标题
			uni.setNavigationBarTitle({
				title:e.name
			})
			// console.log('bpush',e);
			this.banpushInit(e);
		},
		onReachBottom() {
			this.showloadMore=true;
			this.loadMoreText='没有更多数据了';
		}
	}
</script>

<style lang="less">
	.bannerpush{
		background-color: #F5F5F5;
		.banner{
			width: 100%;
			height: 300upx;
			// background: argb()
		}
		.name{
			width: 100%;
			font-size: 40upx;
			font-weight: bold;
			text-align: center;
		}
	}
</style>
