<template>
	<view class="share" @click="canvasbtn">
		<view class="shareContent" v-for="(item,index) in data" :key='index'>
			<view class="content">
				<view class="author">
					<!-- 头像 -->
					<view class="touxiang"></view>
					<view><text>小编推荐</text></view>
				</view>
				<view class="shareBtn" @click="shareapp">
					<view>一键分享</view>
					<image src="../../static/share.png" mode="widthFix"></image>
				</view>
			</view>
			<!-- 商品评价 -->
			<view class="goodAssess">
				<view>宝贝收到很不错宝贝收到很不错宝贝收到很不错</view>
				<view>宝贝收到很不错宝贝收到很不错宝贝收到很不错</view>
			</view>
			<!-- 商品图展 -->
			<view class="goodChart">
				<image :src="item%2==0?imgsrc:imgsrc2" mode="widthFix"></image>
				<image :src="item%2==0?imgsrc:imgsrc2" mode="widthFix"></image>
				<image :src="item%2==0?imgsrc:imgsrc2" mode="widthFix"></image>
				<image :src="item%2==0?imgsrc:imgsrc2" mode="widthFix"></image>
				<image :src="item%2==0?imgsrc:imgsrc2" mode="widthFix"></image>
				<image :src="item%2==0?imgsrc:imgsrc2" mode="widthFix"></image>
			</view>
			<view class="goodTime">2019-03-08</view>
		</view>
		<load-more v-if="showloadMore" :status="loadMoreText==='加载中...'?'loading':''"></load-more>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				data:[1,2],
				imgsrc:'../../static/0000006.jpg',
				imgsrc2:'../../static/99999.gif',
				num:3,
				showloadMore:false,
				loadMoreText:'加载中...'
			}
		},
		methods:{
			canvasbtn(){
				
			},
			shareapp(){
				uni.navigateTo({
					url:'../invite/invite'
				})
			}
		},
		onLoad() {
			uni.hideShareMenu();
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
	.share{
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
						width: 160upx;
						height: 80upx;
					}
				}
				// shareBtn
				.shareBtn{
					margin-top: 12upx;
					width: 34%;
					position: relative;
					image{
						width: 46upx;
						height: 46upx;
						position:absolute;
						top: 8upx;
						left: 14upx;
					}
					view{
						box-sizing: border-box;
						width: 240upx;
						height: 60upx;
						line-height: 60upx;
						border-radius: 42upx;
						text-align: center;
						background-color: #ffffff;
						border:2upx solid #E6E6E6;
						padding-left: 20upx;
					}
				}
			}
			// 商品评价
			.goodAssess{
				width: 80%;
				margin: 0 auto;
			}
			// 时间
			.goodTime{
				width: 90%;
				margin: 0 auto;
			}
			// 商品图展
			.goodChart{
				width: 90%;
				margin: 0 auto;
				image{
					width: 200upx;
					height: 200upx;
					margin: 10upx 10upx 10upx 0upx;
				}
			}
		}
	}
</style>
