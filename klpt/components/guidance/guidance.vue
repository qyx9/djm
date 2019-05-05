<template>
	<!-- 指导 -->
	<view class="guidance" v-if="Status && guid">
		<!-- 开始 -->
		<view class="guids" v-if="nextB==0 && OneStatus=='center'">
			<view class="main">
				<view class="next" style="color: #FFFFFF;" @click="nextimg">下一步</view>
				<view class="bg"></view>
				<view class="btn">
					<view class="btnclass" :style="{background:nextBackground[0].background,color:nextBackground[0].color,fontSize:nextBackground[0].fontSize}">不在提示</view>
					<view class="btnclass" @click="nextimg" :style="{background:nextBackground[1].background,color:nextBackground[1].color,fontSize:nextBackground[1].fontSize}">下一步</view>
				</view>
			</view>
			
		</view>
		<view class="rightBottom" v-if="nextB==0 && OneStatus=='rightBottom'">
			<view class="main">
				<view class="next" style="color: #FFFFFF;" @click="nextimg">下一步</view>
				<view class="bg"></view>
				<view class="btn">
					<view class="btnclass">不在提示</view>
					<view class="btnclass" @click="nextimg">下一步</view>
				</view>
			</view>
			
		</view>
		<view class="leftBottom" v-if="nextB==0 && OneStatus=='leftBottom'">
			<view class="main">
				<view class="next" style="color: #FFFFFF;" @click="nextimg">下一步</view>
				<view class="bg"></view>
				<view class="btn">
					<view class="btnclass">不在提示</view>
					<view class="btnclass" @click="nextimg" :style="{background:nextBackground}">下一步</view>
				</view>
			</view>
			
		</view>
		<!-- 第一个引导显示 -->
		<view class="rightBottom" v-if="nextB==1 && TwoStatus=='rightBottom'">
			<view class="main">
				<view class="next" style="color: #FFFFFF;" @click="nextimg">下一步</view>
				<view class="bg" style="background-color: red;"></view>
			</view>
		</view>
		<view class="leftBottom" v-if="nextB==1 && TwoStatus=='leftBottom'">
			<view class="main">
				<view class="next" style="color: #FFFFFF;" @click="nextimg">下一步</view>
				<view class="bg" style="background-color: red;"></view>
			</view>
		</view>
		<view class="guids" v-if="nextB==1 && TwoStatus=='center'">
			<view class="main">
				<view class="next" style="color: #FFFFFF;" @click="nextimg">下一步</view>
				<view class="bg" style="background-color: red;"></view>
			</view>
		</view>
		<!-- 最后一个引导 -->
		<view class="leftBottom" v-if="nextB==2 && ThressStatus=='leftBottom'">
			<view class="main">
			<view class="actives">
				<image class="tou" :src="news[0].url"></image>
				<view class="Article">
					<view class="name">{{news[0].name}}</view>
					<view class="" :style="{background:dialogColor[0].background,color:dialogColor[0].color,fontSize:dialogColor[0].fontSize}">{{news[0].news}}</view>
				</view>
			</view>
			<view class="active">
				<image class="tou" :src="news[1].url"></image>
				<view class="Article">
					<view class="name">{{news[1].name}}</view>
					<view class="" :style="{background:dialogColor[1].background,color:dialogColor[1].color,fontSize:dialogColor[1].fontSize}">{{news[1].news}}</view>
				</view>
			</view>
			<view class="next" style="color: #FFFFFF;" @click="nextimgs">下一步</view>
			<view class="bg" style="background-color: green;"></view>
			</view>
		</view>
		<view class="rightBottom" v-if="nextB==2 && ThressStatus=='rightBottom'">
			<view class="main">
			<image src="../../static/06.png" mode="" @click="closeimg"></image>
			<view class="bg" style="background-color: green;"></view>
			</view>
		</view>
		<view class="guids" v-if="nextB==2 && ThressStatus=='center'">
			<view class="main">
			<image src="../../static/06.png" mode="" @click="closeimg"></image>
			<view class="bg" style="background-color: green;"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				key:'',
				nextB:0,
				guid:true
			}
		},
		methods:{
			nextimg(){
				this.nextB+=1;
			},
			nextimgs(){
				this.nextB-=1;
			},
			closeimg(){
				this.guid=false;
			},
			prompt(){
				
			}
		},
		props:{
			Status:{
				type:Boolean,
				default:true
			},
			OneStatus:{
				type:String,
				default:'center'
			},
			TwoStatus:{
				type:String,
				default:'rightBottom'
			},
			ThressStatus:{
				type:String,
				default:'leftBottom'
			},
			dialogue:{
				type:Boolean,
				default:true
			},
			news:{
				type:Object,
				default:function(e){
					return [{url:'../../static/logo20.png',name:'底加买',news:'哈罗'},
					{url:'../../static/logo20.png',name:'底加买',news:'你好'}]
				}
			},
			nextBackground:{
				tyep:Object,
				default:function(e){
					return [{color:'#000000',background:'#FF0000',fontSize:'15px'},{color:'#FFFFFF',background:'#00FF00',fontSize:'15px'},]
				}
			},
			dialogColor:{
				type:Object,
				default:function(e){
					return [{color:'#FF0000',background:'#FFFFFF',fontSize:'15px'},{color:'#000000',background:'#FFFFFF',fontSize:'15px'}]
				}
			}
		}
	}
</script>

<style lang="less">
	.guidance{
		background:rgba(0, 0, 0, 0.6);
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		z-index: 1501;
		.bg{
			width: 100%;
			height: 600upx;
			background-color: #fff;
		}
		.guids{
			position: fixed;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			width: 80%;
			z-index: 1502;
		}
		.leftBottom{
			position: fixed;
			left:20upx;
			bottom:20upx;
			width: 94%;
			z-index: 1502;
			box-sizing: border-box;
			margin-right: 20upx;
		}
		.rightBottom{
			position: fixed;
			right:20upx;
			bottom:20upx;
			width: 80%;
			z-index: 1502;
		}
		.main{
			position: relative;
			// background-color: #fff;
			>image:first-child{
				position: absolute;
				top:10upx;
				right: 10upx;
				width: 120upx;
				height: 60upx;
			}
			.next{
				position: absolute;
				top:-100upx;
				right: 10upx;
				font-size: 40upx;
			}
		}
		.btn{
			position: absolute;
			bottom: 0upx;
			display: flex;
			flex-direction: row;
			width: 100%;
			height: 80upx;
			justify-content: space-around;
			.btnclass{
				width: 48%;
				height: 60upx;
				background-color: red;
				border-radius: 20upx;
				line-height: 60upx;
				text-align: center;
			}
		}
		.tou{
			display: inline-block;
			box-sizing: border-box;
			margin-bottom: 42upx;
			width: 50upx;
			height: 50upx;
			border-radius: 14upx;
			background-color: green;
		}
		.Article{
			margin-left: 20upx;
			margin-top: 20upx;
			// background-color: yellow;
			width: 400upx;
			min-height: 100upx;
			display: inline-block;
			>view:nth-child(2){
				width: 400upx;
				min-height: 100upx;
				word-break:break-all;
			}
		}
		.active{
			animation:fadeinL 2s infinite;
			animation-iteration-count:1;
		}
		.actives{
			animation:fadeinL 3s infinite;
			animation-iteration-count:1;
		}
	}
	@keyframes fadeinL{
    0%{opacity:0;transform:translateX(-100px);}
    100%{opacity:1;transform:translateX(0);}
    }
</style>
