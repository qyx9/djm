<template>
	<!-- 分享APP -->
	<view class="shareapp">
		<view class="shareXCenter">
			<view class="weixind weixin" @click="ShareWx('weixin')"><image src="../../static/img/weixin.png" mode="widthFix"></image>
			 <view>
			 	微信
			 </view>
			</view>
			<view class="wxqyc weixin" @click="ShareWx('weixin')"><image src="../../static/img/wxpyq.png" mode="widthFix"></image>
			  <view>
			 	朋友圈
			 </view>
			</view>
			<view class="qq weixin" @click="ShareWx('qq')"><image src="../../static/img/qq.png" mode="widthFix"></image>
			   <view>
			  	 QQ
			  </view>
			</view>
			<view class="weibo weixin" @click="ShareWx('sinaweibo')"><image src="../../static/img/weibo.png" mode="widthFix"></image>
			   <view>
			  	微博
			  </view>
			</view>
		</view>
		<view class="closeN" @click="closeB">x</view>
	</view>
</template>

<script>
	export default{
		methods:{
			ShareWx(e){
				uni.share({
				provider: e,
				// scene: "WXSceneSession",
				type: 0,
				href: "https://sj.qq.com/",
				title: "快来拼团",
				summary: "体验不一样的购物体验",
				imageUrl: "../../static/zuji.png",
				success: function (res) {
					console.log("success:" + JSON.stringify(res));
				},
				fail: function (err) {
					console.log("fail:" + JSON.stringify(err));
				}
			});
			},
			closeB(){
				uni.navigateBack();
			}
		}
	}
</script>

<style lang="less">
	.shareapp{
		height: 100%;
		width: 100%;
		background: rgba(0,0,0,0.8);
		.shareXCenter{
			width: 100%;
			height:140upx;
			position: absolute;
			text-align: center;
			top: 50%;
			left: 50%;
			right: 0;
			bottom: 0;
			transform: translate(-50%, -50%);
		}
		.weixin{
			width: 140upx;
			height:140upx;
			display: inline-block;
			margin-right: 20upx;
			border-radius: 50%;
			background-color: #ffffff;
			color: #000;
			image{
				width: 140upx;
				height:140upx;
			}
		}
	}
	.weixind{
		animation:bounceinL 3s infinite;
		animation-iteration-count:1;
	}
	.wxqyc{
		animation:bounceinB 3s infinite;
		animation-iteration-count:1;
	}
	.qq{
		animation:bounceinT 3s infinite;
		animation-iteration-count:1;
	}
	.weibo{
		animation:bounceinR 3s infinite;
		animation-iteration-count:1;
	}
	/* 从上弹入 */
	@keyframes bounceinT{
    0%{opacity:0;transform:translateY(-100px);}
    60%{opacity:1;transform:translateY(30px);}
    80%{transform:translateY(-10px);}
    100%{transform:translateY(0);}
}
/* 从右弹入 */
@keyframes bounceinR{
    0%{opacity:0;transform:translateX(100px);}
    60%{opacity:1;transform:translateX(-30px);}
    80%{transform:translateX(10px);}
    100%{transform:translateX(0);}
}
/* 从下弹入 */
@keyframes bounceinB{
    0%{opacity:0;transform:translateY(100px);}
    60%{opacity:1;transform:translateY(-30px);}
    80%{transform:translateY(10px);}
    100%{transform:translateY(0);}
}
/* 从左弹入 */
@keyframes bounceinL{
    0%{opacity:0;transform:translateX(-100px);}
    60%{opacity:1;transform:translateX(30px);}
    80%{transform:translateX(-10px);}
    100%{transform:translateX(0);}
}
.closeN{
	position: absolute;
	bottom: 60upx;
	left: 50%;
	background-color: #cfcfcf;
	color:#FFFFFF;
	font-size: 50upx;
	text-align: center;
	line-height: 60upx;
	height: 60upx;
	width: 60upx;
	border-radius: 46%;
	}
</style>
