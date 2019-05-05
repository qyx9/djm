<template>
	<!-- 弹出 -->
	<view class="elastic" v-if="status && elas">
		<!-- 图片 -->
		<view v-if="PositionStatus=='center'" class="content" @click.stop="elaMove">
			<view class="main">
				<image src="../../static/cha.png" mode="" @click="closeElas"></image>
				<image v-if="imgStatus" :src="imgUrl" mode="widthFix"></image>
				<video v-if="!imgStatus" :src="videoUrl" autoplay loop></video>
				<!-- <view v-if="imgStatus" class="btn">
					<view class="btnclass">我已经知道了</view>
					<view class="btnclass">不在提示</view>
				</view> -->
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
				default:true
			},
			imgUrl: {
				type: String,
				default: null
			},
			videoUrl: {
				type: String,
				default: null
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
				default:true
			},
			PositionStatus:{
				type:String,
				default:'center'
			},
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
	.elastic{
		.uni-mask{
			background:rgba(0, 0, 0, 0.6);
			position: fixed;
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;
			z-index: 1201;
		}
		z-index: 1200;
		.content{
			position: fixed;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			width: 80%;
			z-index: 1202;
		}
		.leftBottom{
			position: fixed;
			left:20upx;
			bottom:20upx;
			width: 80%;
			z-index: 1202;
		}
		.rightBottom{
			position: fixed;
			right:20upx;
			bottom:20upx;
			width: 80%;
			z-index: 1202;
		}
		.rightTop{
			position: fixed;
			right:20upx;
			top:20upx;
			width: 80%;
			z-index: 1202;
		}
		.leftTop{
			position: fixed;
			right:20upx;
			top:20upx;
			width: 80%;
			z-index: 1202;
		}
		.main{
			width: 100%;
			margin: 0 auto;
			position: relative;
			>image:first-child{
				position: absolute;
				top: 0;
				right: 0upx;
				width: 60upx;
				height: 60upx;
				border-radius: 50%;
				z-index: 1266;
			}
			>image:nth-child(2){
				width: 100%;
				margin: 0 auto;
			}
		}
		.btn{
			display: flex;
			flex-direction: row;
			width: 100%;
			height: 80upx;
			justify-content: space-around;
			.btnclass{
				width: 48%;
				height: 60upx;
				background-color: #fff;
				border-radius: 20upx;
				line-height: 60upx;
				text-align: center;
			}
		}
	}
</style>
