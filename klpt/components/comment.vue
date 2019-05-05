<template>
	<view class="comment" @click="canvasbtn">
		<view class="title" v-if="istitle">所有评论</view>
		<view class="shareContent" v-for="(item,index) in array" :key='index'>
			<view class="content">
				<view class="author">
					<!-- 头像 -->
					<image class="touxiang" :src="item.avatar"></image>
					<view><text>{{item.name}}</text></view>
				</view>
				<view class="shareBtn" @click="shareapp">
					<view>{{item.time | timeBuy}}</view>
				</view>
			</view>
			<!-- 商品评价 -->
			<view class="goodAssess">
				<view>{{item.comment}}</view>
			</view>
			<!-- 商品图展 -->
			<view class="goodChart" >
				<view class="imgList" v-for="(imgs,icon) in item.pictures" :key='icon'>
					<image :src="imgs.url" mode="aspectFill" @click="preimg(item.pictures,imgs.url)" ></image>
				</view>
			</view>
			<view class="goodTime"><text></text><text></text></view>
		</view>
		<!-- <load-more v-if="showloadMore" :status="loadMoreText==='加载中...'?'loading':''"></load-more> -->
	</view>
</template>

<script>
	function timestampToTime(timestamp) {
	    var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
	    var Y = date.getFullYear() + '-';
	    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
	    var D = date.getDate() + ' ';
	    var h = date.getHours() + ':';
	    var m = date.getMinutes() + ':';
	    var s = date.getSeconds();
	    return Y+M+D+h+m+s;
	};
	export default{
		data(){
			return{
				data:[1,2],
				imgsrc:'../../static/0000006.jpg',
				imgsrc2:'../../static/99999.gif',
				num:3,
				showloadMore:false,
				loadMoreText:'加载中...',
				times:0
			}
		},
		props:{
			array:{
				type:Object,
				default:function(e){
					return{}
				}
			},
			istitle:{
				type:Boolean,
				default:true
			}
		},
		computed: {
			timeBuy(value) {
				return timestampToTime(value) 
			}
		},
		filters: {
			timestamps(value){
				return timestampToTime(value)
			},
			josns(value){
				
				return value
			}
		},
		methods:{
			canvasbtn(){
				
			},
			shareapp(){
				uni.navigateTo({
					url:'../invite/invite'
				})
			},
			preimg(arr,i){
				var urlimg=i;
				var arrdata=arr;
				// console.log(urlimg);
				// console.log(arrdata);
				// 
				uni.previewImage({
					urls:arrdata,
					current:urlimg
				})
			},
		},
		onLoad() {
			uni.hideShareMenu();
			var a
			this.times=timestampToTime()
		},
		// 无限加载
		onReachBottom() {
			this.num+=1;
			this.showloadMore=true;
			this.data.push(this.num);
		}
	}
</script>

<style lang="less">
	.comment{
		width: 100%;
		box-sizing: border-box;
		// main样式
		.shareContent{
			box-sizing: border-box;
			margin-top: 40upx;
			padding: 0 20upx;
			
			.content{
				width: 100%;
				display: flex;
				flex-direction:row;
				justify-content: space-between;
				.author{
                    width: 50%;
                    position: relative;
					.touxiang{
						display: inline-block;
						width: 80upx;
						height: 80upx;
						border-radius: 50%;
						background-color: #cccccc;
					}
					>view:nth-child(2){
						box-sizing: border-box;
						position: absolute;
						top:20upx;
						left: 92upx;
						width: 500upx;
						height: 80upx;
						>text{
							font-size: 26upx;
						}
					}
				}
				// shareBtn
				.shareBtn{
					margin-top: 12upx;
					width: 34%;
					position: relative;
					view{
						box-sizing: border-box;
						width: 240upx;
						height: 60upx;
						line-height: 60upx;
						text-align: right;
						background-color: #ffffff;
						padding-right: 10upx;
						font-size: 26upx;
						color: #666666;
					}
				}
			}
			// 商品评价
			.goodAssess{
				width: 100%;
				margin: 0 auto;
				font-size: 28upx;
				color: #666666;
			}
			// 时间
			.goodTime{
				width: 96%;
				height: 10upx;
				margin: 0 auto;
				font-size: 28upx;
				color: #666666;
				border-bottom:2upx solid #CCCCCC;
				// padding-bottom: 20upx;
				>text:first-child{
					margin-right: 30upx;
				}
			}
			// 商品图展
			.goodChart{
				width: 100%;
				margin: 0 auto;
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				// min-height: 220upx;
				.imgList{
					margin: 10upx 26upx 14upx 0upx;
					width: 200upx;
					// height: 264upx;
					min-height: 200upx;
				}
				image{
					width: 200upx;
					height: 200upx;
				}
			}
		}
		.title{
			width: 80%;
			margin-left: 4%;
			margin-bottom: 10upx;
			font-weight: bold;
			margin-top: 20upx;
		}
	}
</style>
