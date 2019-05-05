<template>
	<!-- 弹出 -->
	<view class="elastics" v-if="status && elas">
		<!-- 图片 -->
		<view v-if="PositionStatus=='center'" class="content" @click.stop="elaMove">
			<view class="main" :style="!imgStatus?{backgroundImage:'url'+'('+background+')' ,backgroundSize:'cover',height:'400px'}:''">
				<image src="../../static/cha.png" mode="" @click="closeElas"></image>
				<image v-if="imgStatus" :src="imgUrl" mode="widthFix"></image>
				<video v-if="!imgStatus" :src="videoUrl" autoplay loop :style="!imgStatus?{marginTop:'88px'}:''"></video>
			</view>
		</view>
		<!-- 左下显示 -->
		<view v-if="PositionStatus=='leftBottom'" class="leftBottom">
			<view class="main">
				<image src="../../static/cha.png" mode="" @click="closeElas"></image>
				<image v-if="imgStatus" :src="imgUrl" mode="widthFix"></image>
				<video v-if="!imgStatus" :src="videoUrl" autoplay loop ></video>
			</view>
		</view>
		<!-- 右下显示 -->
		<view v-if="PositionStatus=='rightBottom'" class="rightBottom">
			<view class="main">
				<image src="../../static/cha.png" mode="" @click="closeElas"></image>
				<image v-if="imgStatus" :src="imgUrl" mode="widthFix"></image>
				<video v-if="!imgStatus" :src="videoUrl" autoplay loop ></video>
			</view>
		</view>
		<!-- 右上显示 -->
		<view v-if="PositionStatus=='rightTop'" class="rightTop">
			<view class="main">
				<image src="../../static/cha.png" mode="" @click="closeElas"></image>
				<image v-if="imgStatus" :src="imgUrl" mode="widthFix"></image>
				<video v-if="!imgStatus" :src="videoUrl" autoplay loop ></video>
			</view>
		</view>
		<!-- 左上下显示 -->
		<view v-if="PositionStatus=='leftTop'" class="leftTop">
			<view class="main">
				<image src="../../static/cha.png" mode="" @click="closeElas"></image>
				<image v-if="imgStatus" :src="imgUrl" mode="widthFix"></image>
				<video v-if="!imgStatus" :src="videoUrl" autoplay loop ></video>
			</view>
		</view>
		<!-- 蒙层 -->
		<view class="uni-mask" @click="closeElas" @touchmove.stop.prevent="elaMove"></view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				elas: true
			}
		},
		props: {
			status:{
				type:Boolean,
				default:false
			},
			imgUrl: {
				type: String,
				default: null
			},
			videoUrl: {
				type: String,
				default: 'https://www.56.com/w27/play_album-aid-14496247_vid-MTU2NjcxNjY5.html'
			},
			Pagewidth:{
				type:Number,
				default:80
			},
			PageData:{
				type:Object,
				default:function(e){
					return {}
				}
			},
			imgStatus:{
				type:Boolean,
				default:false
			},
			PositionStatus:{
				type:String,
				default:'center'
			},
			background:{
				type:String,
				default:'../../static/99999.gif'
			}
		},
		methods: {
			elaMove() {
				
			},
			closeElas(){
				this.elas=false;
			}
		},
	}
</script>

<style lang="less">
	.elastics{
		.uni-mask{
			background:rgba(0, 0, 0, 0.6);
			position: fixed;
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;
			z-index: 1301;
		}
		z-index: 1200;
		.content{
			position: fixed;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			width: 80%;
			// width: 320upx;
			// height: 800upx;
			z-index: 1302;
		}
		.leftBottom{
			position: fixed;
			left:20upx;
			bottom:20upx;
			// transform: translate(-50%, -50%);
			width: 80%;
			// width: 320upx;
			// height: 800upx;
			z-index: 1302;
		}
		.rightBottom{
			position: fixed;
			right:20upx;
			bottom:20upx;
			// transform: translate(-50%, -50%);
			width: 80%;
			// width: 320upx;
			// height: 800upx;
			z-index: 1302;
		}
		.rightTop{
			position: fixed;
			right:20upx;
			top:20upx;
			// transform: translate(-50%, -50%);
			width: 80%;
			// width: 320upx;
			// height: 800upx;
			z-index: 1302;
		}
		.leftTop{
			position: fixed;
			right:20upx;
			top:20upx;
			// transform: translate(-50%, -50%);
			width: 80%;
			// width: 320upx;
			// height: 800upx;
			z-index: 1302;
		}
		.main{
			width: 100%;
			// width: 320upx;
			margin: 0 auto;
			height: 800upx;
			position: relative;
			>image:first-child{
				position: absolute;
				top: 0;
				right: 0upx;
				width: 60upx;
				height: 60upx;
				border-radius: 50%;
				z-index: 1366;
			}
			>image:nth-child(2){
				width: 100%;
				// width: 320upx;
				margin: 0 auto;
				// height: 860upx;
			}
			// >video{
			// 	margin-top: 175upx;
			// }
		}
		// .main{
		// 	width: 100%;
		// 	// width: 320upx;
		// 	margin: 0 auto;
		// 	// height: 860upx;
		// 	z-index: 1397;
		// 	position: relative;
		// 	>image:first-child{
		// 		position: absolute;
		// 		top: 0;
		// 		right: 0upx;
		// 		width: 60upx;
		// 		height: 60upx;
		// 		border-radius: 50%;
		// 		z-index: 1398;
		// 	}
		// 	>image:nth-child(2){
		// 		width: 100%;
		// 		// width: 320upx;
		// 		margin: 0 auto;
		// 		// height: 860upx;
		// 	}
		// }
	}
</style>
