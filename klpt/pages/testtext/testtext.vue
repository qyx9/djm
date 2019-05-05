<template>
		<view class="">{{dataArry}}</view>
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
				loadMoreText:'加载中...',
				dataArry:''
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
		methods:{
			canvasbtn(){
				console('gaoaslsosfsofgsdag');
			},
			shareapp(){
				uni.navigateTo({
					url:'../invite/invite'
				})
			}
		},
		onLoad() {
			uni.hideShareMenu();
			uni.request({
				url: 'https://appserver.dijiamai.net/thirdreturn/index/getms',
				method: 'GET',
				data: {},
				success: res => {
					console.log('testtext',res.data);
					this.dataArry=res.data;
					
				},
				fail: () => {},
				complete: () => {}
			});
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
						width: 160upx;
						height: 80upx;
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
						padding-left: 20upx;
						font-size: 26upx;
						color: #666666;
					}
				}
			}
			// 商品评价
			.goodAssess{
				width: 96%;
				margin: 0 auto;
				font-size: 28upx;
				color: #666666;
			}
			// 时间
			.goodTime{
				width: 96%;
				margin: 0 auto;
				font-size: 28upx;
				color: #666666;
				border-bottom:2upx solid #CCCCCC;
				padding-bottom: 20upx;
				>text:first-child{
					margin-right: 30upx;
				}
			}
			// 商品图展
			.goodChart{
				width: 96%;
				margin: 0 auto;
				image{
					width: 200upx;
					height: 200upx;
					margin: 10upx 26upx 14upx 0upx;
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