<template>
	<!-- 邀请好友 -->
	<view class="invite" v-show="ban">
		 <canvas canvas-id="shareImg" style="width:375px;height:606px"></canvas>
		 <!-- 预览区域  图片有地址后预览-->
		 <view :hidden='previewHidden' class='preview'>
		   <image :src='preurl' mode='widthFix' class='previewImg'></image>
		   <button type='primary' @click="save ,imgUrl('share_save')"  @tap.stop='save'>保存分享图</button>
		  <view class="toast" v-if="false">
			<view class="content">
				<view class="ui-content">
					<view class="cell">温馨提示</view>
					<view class="cell">去设置允许访问相册</view>
				</view>
				<view class="">
					<button open-type="openSetting" @tap.stop='handleSetting' class="btn">确定</button>
				</view>
			</view>
		</view>
		 </view>
		<view class="title">分享专属海报，新用户可免邀请码登录，关系自动绑定</view>
		<view class="swiper">
			<swiper :style="{height:fullHeight}" class="swiper-tall" :indicator-dots="indicatorDots" :autoplay="autoplay" :previous-margin="previousMargin"
			 :next-margin="nextMargin" :circular="circular" @change="change" :current="swiperCurrentIndex">
				<swiper-item class="swiper-container" v-for="(img,index) in imgs" :key="index"
				 :item-id="index" :data-year="index">
				<view class="swiper-item"
				  :style="{background:img?('url('+ img.img_url +') center no-repeat'):'',backgroundSize:'cover'}" 
				   :animation="animationData[index]">
				</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 指士点 -->
		<view class="dian">
			<view class="c" v-for="(item,index) in imgs" :key='index' :class="title==index?'active':''"></view>
		</view>
		<!-- 说明 -->
		<view class="explain">
			<view><text>新用户扫二维码</text><image src="../../static/06.png" mode="widthFix"></image><text>关注微信公总众号</text></view>
			<view><text>微信登录小程序(粉丝关系绑定)</text><image src="../../static/06.png" mode="widthFix"></image><text>购买商品(成功粉丝)</text></view>
		</view>
		<!-- 分享 -->
		<view class="share">
			<view class="sharelist">
				<view class="" style="background-color: #FBC131;" v-if="!gblean"><button type="primary" open-type="share" plain="true" style="color: #FFFFFF;">分享产品链接</button></view>
				<view class="" style="background-color: #FBC131;" v-if="gblean" @click="imgUrl('share_index')"><button type="primary" open-type="share" plain="true" style="color: #FFFFFF;">分享给朋友</button></view>
				<view class="" style="background-color: #FD4739;" @click="share">分享海报到朋友圈</view>
			</view>
		</view>
	</view>
</template>

<script>
	 var qrcode;
	 var clickNick=true;
	export default{
		data(){
			return{
				previewHidden: true,
				preurl:'',
				userid:'',
				goodname:'',
                goodprice:0,
                goodsrc:'',
                goodid:'',
				back:0,
				tuan:0,
				dao:0,
				gblean:false,
				ban:false,
				screenHeight: 0,
				animationData: {
					0:{},
					1:{},
					2:{}
				},
				title: '0',
				indicatorDots: false,
				autoplay: false,
				previousMargin: uni.upx2px(82)+'px',
				nextMargin: uni.upx2px(82)+'px',
				circular: true,
				zoomParam: 1.10,
				swiperCurrentIndex: 0,
				data: [],
				max: 0,
				imgs:[],
				diandata:[1,2,3],
				qrcode:'',
				shareimg:'',
				channels:1,
				openSettingBtnHidden: true
			}
		},
		onLoad:function(options){
			 var that=this;
			 // this.perInit();
			this.animation = uni.createAnimation();
			this.animation.scale(this.zoomParam).step();
			this.animationData[0] = this.animation.export();
			// this.perInit();
			qrcode=this.qrcode;
			uni.showLoading({
				title:'努力加载中...'
			})
			var that=this;
			// console.log('详情页面带值',options);
			this.goodname=options.name;
			this.goodprice=options.price;
			this.goodsrc=options.imgsrc;
			this.goodid=options.id;
			this.back=options.fan;
			this.tuan=options.tuan;
			this.dao=options.dao;
			this.gblean=options.gblean?true:false;
			uni.hideShareMenu();
		    this.banimg();
		},
		methods:{
			imgUrl(e){
				var uid=uni.getStorageSync('userId')
				if(clickNick){
					// console.log('66666');
					uni.request({
						url: 'https://appserver.dijiamai.net/thirdreturn/index/applog',
						method: 'GET',
						data: {
							event_type:e,
							log_json:{'user_id':uid,'img_img':this.channels}
						},
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
					clickNick=false;
				}
				setTimeout(function(){
					clickNick=true;
				},6000)
			},
			// 轮播请求
			banimg(){
				uni.request({
					url:'https://appserver.dijiamai.net/thirdreturn/index/getappimg?image_name=share',
					method: 'GET',
					data: {},
					success: res => {
						// console.log('轮播',res.data);
						uni.hideLoading();
						this.ban=true;
						this.imgs=res.data;
						this.shareimg=res.data[0].img_url;
					}
				});
			},
		  share: function () {
				var that = this
				uni.showLoading({
				  title: '努力生成中...'
				})
				
				this.perInit()
			},
			 /**
			 * 保存到相册
			*/
			save: function () {
			  var that = this
			  uni.getSetting({
			    success(res) {
					that.openSettingBtnHidden=false;
					 // console.log(res.authSetting)
				  if (!res.authSetting['scope.writePhotosAlbum']) {
			        uni.authorize({
			          scope: 'scope.writePhotosAlbum',
			          success(res) {
			            that.startSaveImage();
			          }
			        })
			      }else{
					that.openSettingBtnHidden=false;
			        that.startSaveImage()
			      }
			    },
				fail() {
					 uni.authorize({
					  scope: 'scope.writePhotosAlbum',
					  success(res) {
					  that.startSaveImage();
					  }
					})
				}
			  })
			},
			startSaveImage: function () {
			  let that = this; 
				// 保存图片到系统相册
			  uni.saveImageToPhotosAlbum({
			    filePath: that.preurl,
			    success(res) {
			      uni.showModal({
			        content: '图片已保存到相册，赶紧晒一下吧~',
			        showCancel: false,
			        confirmText: '好哒',
			        confirmColor: '#72B9C3',
			        success: function (res) {
			          if (res.confirm) {
			            // console.log('用户点击确定');
			            that.previewHidden=true;
			          }
			        }
			      })
			    }
			  })
			},
			change(e) {
				this.shareimg=this.imgs[e.detail.current].img_url;
				this.channels=this.imgs[e.detail.current].channel;
				this.swiperCurrentIndex = e.detail.current;
				this.title = e.detail.currentItemId;
				for (let key in this.animationData) {
					if (e.detail.currentItemId == key) {
						this.animation.scale(this.zoomParam).step();
						this.animationData[key] = this.animation.export();
					} else {
						this.animation.scale(1.0).step();
						this.animationData[key] = this.animation.export();
					}
				}
			},
			// 个人二维码获取
			perInit(){
				var that=this;
				var opId=uni.getStorageSync('weixiOpenId');
				uni.request({
					url: 'https://appserver.dijiamai.net/thirdreturn/index/getsyimage?openid='+opId,
					method: 'GET',
					header:{
						"access-token":uni.getStorageSync('access-token'),
					    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
					   },
					data: {},
					success: res => {
						
						// console.log("二维码",res.data);
						this.qrcode=res.data;
						// console.log(this.qrcode);
						qrcode=this.qrcode;
						 uni.downloadFile({
							url:qrcode,
							success(res) {
								const ctx=uni.createCanvasContext('shareImg');
								ctx.drawImage(res.tempFilePath,0,0,375,610);
								ctx.draw();
								ctx.stroke()
// 								ctx.save();
// 								ctx.beginPath()
                           uni.hideLoading();
                          var bata=res.tempFilePath;
						 uni.canvasToTempFilePath({
						   x: 0,
						   y: 0,
						   width: 375,
						   height: 606,
						   destWidth: 375,
						   destHeight: 606,
						   canvasId: 'shareImg',
						   success: function (res) {
						     // console.log(res.tempFilePath);
						 	// 得到图片的网络地址
						     that.preurl=bata;
						     that.previewHidden=false;
						 	 uni.setStorageSync('filePath',that.preurl);
						     // uni.hideLoading()
						   },
						   fail: function (res) {
						     // console.log(res)
						   }
						 })
							}
						})
					},
					fail: () => {},
					complete: () => {}
				});
			},
			handleSetting: function(e){
				let that = this;
				// 对用户的设置进行判断，如果没有授权，即使用户返回到保存页面，显示的也是“去授权”按钮；同意授权之后才显示保存按钮
				if (!e.detail.authSetting['scope.writePhotosAlbum']) {
				  uni.showModal({
					title: '警告',
					content: '若不打开授权，则无法将图片保存在相册中！',
					showCancel: false
				  })
				  that.openSettingBtnHidden=true;
				}else{
				  uni.showModal({
					title: '提示',
					content: '您已授权，赶紧将图片保存在相册中吧！',
					showCancel: false
				  })
				 that.openSettingBtnHidden=false;
				}
			  },
		},
		onShareAppMessage:function(res){ 
			var uid=uni.getStorageSync('userId');
				return{
					title:this.gblean?'【拼多多-终身30%返利】限时！免费！领取！':'【拼多多】原价'+this.tuan+'，券'+this.goodprice+'，返'+this.back+'元，到手价'+this.dao,
					path:this.gblean?'pages/index/index?oparentid='+uid+'&channel=1&from_tag=index&from_data='+this.channels:'pages/index/index?id='+this.goodid+'&oparentid='+uid+'&share=index&from_tag=good_detail&from_data='+this.goodid,
					imageUrl:this.gblean?this.shareimg:this.goodsrc
				}
		},
		onShow() {
			// this.perInit();
			
		}
	}
</script>

<style lang="less">
	.invite{
		height: 100%;
		background-color: #F5F5F5;
		.title{
			width: 100%;
			color: #A2A2A2;
			height: 80upx;
			line-height: 80upx;
			text-align: center;
			font-size: 28upx;
		}
		// bg
		swiper{
			height: 422px;
			swiper-item{
				box-sizing: border-box;
				padding-left: 0upx;
			}
			.imgs{
				width: 320px;
				height: 748upx;
			}
		}
		// 说明
		.explain{
			margin-top: 20upx;
			view{
				width: 100%;
				height: 60upx;
				font-size: 26upx;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				color: #A2A2A2;
				image{
					width: 60upx;
					height: 20upx;
				}
			}
		}
		// 分享
		.share{
			height: 120upx;
			width: 100%;
			background-color: #ffffff;
			position: fixed;
			bottom:0;
			.sharelist{
				height: 120upx;
				width: 100%;
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				align-items: center;
				font-size: 30upx;
				view{
					width: 280upx;
					height: 80upx;
					color:#ffffff;
					line-height: 80upx;
					text-align: center;
					border-radius: 40upx;
					>button{
						width: 240upx;
						height: 80upx;
						line-height: 80upx;
						border-radius: 40upx;
						border:2upx solid #FBC131;
						font-size: 30upx;
					}
				}
			}
		}
		swiper{
			height: 800upx;
		}
		.dian{
			height: 60upx;
			width: 100%;
			text-align: center;
			>view{
				display: inline-block;
				width: 20upx;
				height: 20upx;
				background-color: #ffffff;
				border-radius: 50%;
				margin-left: 20upx;
			}
			.active{
				background-color: #FD4739;
			}
		}
	}
/* canvas的初始位置 */
	canvas{
		position: fixed;
		top: 0;
		left: 400px;
		}
	.preview {
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.9);
		position: absolute;
		z-index: 2;
		}
		/* 预览图图片样式 */
	.previewImg{
		width: 70%;
		position: absolute;
		top: 10%;
		left: 15%;
		z-index: 3;
		border: 1px dashed #fff;
		height: 70% !important;
		}
	.preview button{
		width: 40%;
		position: absolute;
		bottom: 100rpx;
		left: 30%;
		z-index: 10;
		}
	.swiper-container {
		display: flex;
		align-items: center;
	}
	
	.swiper-item {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-left: auto;
		margin-right: auto;
		height: 902upx;
		width: 530upx;
		line-height: 300upx;
		text-align: center;
		broder-radius: 6upx;
		margin-bottom: -190upx;
	}
	
	.swiper-tall {
		display: flex;
		align-items: center;
	}
	
	.swiper-title {
		width: 750upx;
		text-align: center;
	}
	.toast{
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		z-index: 100;
		width: 50%;
		height: 240upx;
		font-size: 30upx;
		background-color: #ffffff;
		border-radius: 20upx;
		.content{
			display: flex;
			height: 240upx;
			flex-direction: column;
			justify-content: space-between;
			position: relative;
		}
		.cell{
			margin-top: 20upx;
			text-align: center;
		}
		.btn{
			position: absolute;
			bottom: 0upx;
			right: 0upx;
			width: 40%;
			margin: 0upx;
			background-color: #ffffff;
		}
	}
</style>
