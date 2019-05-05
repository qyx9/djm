<template>
	<view class="feilei">
		<view  class="searchgoods" @click="Nato">
			<view class="inputs">
			输入标题或商品关键字
			<image :src="src" mode="widthFix"></image>
			</view>
		</view>
		<view class="content">
			<view class="left" :style="{height:leftH-40+'px'}">
				<scroll-view scroll-y class="leftView">
					<view v-for="(item,index) in data" :key="index" :class="Tabindex==index?'active':''"
					:data-current="index" @click="tabindexs(item,index)">{{item.name}}</view>
				</scroll-view>
			</view>
			<swiper class="swiper-box" :interval="3000" :duration="0" :current='Tabindex' @change="changeTab" vertical>
				<swiper-item v-for="(item,index) in data" :key='index'>
					<scroll-view scroll-y>
						<view class="top"><text>{{item.name}}</text> <text @click="looKall">查看全部</text></view>
						<view v-for="(items,indexs) in item.child" :key="indexs" class="right" @click="gooDitems(items)">
							<image :src="items.img" mode="aspectFit"></image>
							<view class="title"><text>{{items.name}}</text></view>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import {requestip} from '../api/api.js'
	export default{
		data(){
			return{
				data:'',
				Tabindex:0,
				rightData:'',
				datas:[],
				src:'../../static/search.png',
				gooDid:1,
				leftH:0
			}
		},
		methods:{
			Nato(){
				uni.navigateTo({
					url:'../searchinput/searchinput'
				})
			},
			// 左边点击
			tabindexs(i,n){
				this.Tabindex=n;
				// 点击数据
				this.gooDid=i.id;
				
			},
			changeTab(e){
				this.Tabindex=e.detail.current
			},
			// 右边点击
			gooDitems(i){
				uni.navigateTo({
					url:'../gooList/gooList?id='+i.opt_id+'&num=0&name='+i.name
				})
			},
			// 查看全部
			looKall(){
				var allId=this.gooDid;
				uni.navigateTo({
					url:'../gooList/gooList?id='+allId+'&num=1&name=查看全部'
				})
			}
			
				
		},
		onLoad() {
			uni.hideShareMenu();
			this.gooDid=1;
			uni.showLoading({
				title:"加载中..."
			})
			//  初始化数据
			uni.request({
				url: requestip()+'/product/index/class',
				method: 'GET',
				header:{
					"access-token":uni.getStorageSync('access-token'),
				    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
				   },
				data: {},
				success: res => {
					// console.log("初始化数据：",res.data);
					this.data=res.data;
					this.datas=res.data;
					uni.hideLoading();
				},
				fail: () => {},
				complete: () => {}
			});
			var that=this;
			uni.getSystemInfo({
				success(res){
					console.log('设备信息',res);
					that.leftH=res.windowHeight;
				}
			})
		}
	}
</script>

<style lang="less">
	.feilei{
		height: 100%;
		display: flex;
		flex: 1;
		flex-direction: column;
		overflow: hidden;
		.searchgoods{
			box-sizing: border-box;
			padding: 20upx 0 0 0;
			position: relative;
			box-sizing: border-box;
			width: 100%;
			height: 80upx;
			background-color: #FD4739;
			color:#CFCFCF;
			.inputs{
				width: 90%;
				height: 50upx;
				line-height: 50upx;
				background-color: #fff;
				border-radius: 24upx;
				font-size: 26upx;
				text-align: center;
			    margin: 0 auto;
				position: relative;
			}
			image{
				position: absolute;
				width: 34upx;
				height: 34upx;
				top: 8upx;
				left: 160upx;
				z-index: 100;
				
			}
		}
		// main
		.content{
			box-sizing: border-box;
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction:row;
			justify-content: space-between;
			.left{
				width: 25%;
				background-color:#F6F6F6;
				height: 1150upx;
				.leftView{
					height: 100%;
					view{
						width: 100%;
						height: 110upx;
						line-height: 110upx;
						text-align: center;
					}
				}
				.active{
					background-color: #fff;
					color:#FD4739;
				}
			}
				.swiper-box {
					flex: 1;
					width: 100%;
					height:1150upx;
					overflow: visible;
					.top{
						box-sizing: border-box;
						display: flex;
						flex-direction:row;
						justify-content: space-between;
						padding: 10upx 20upx;
						color:#333333;
						>text:nth-child(2){
							color: #ccc;
						}
					}
					.right{
						display: inline-block;
						width: 33%;
						text-align: center;
						margin-bottom:36upx;
						>image{
							width: 110upx;
							height: 140upx;
						}
						.title{
							width: 140upx;
							font-size: 24upx;
							padding-left: 20upx;
						}
						
					}
				}
		}
	}
</style>
