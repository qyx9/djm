<template>
	<!-- cavans 测试 -->
	<view class="">
		 <canvas canvas-id="contactImg" style="width:375px;height:606px"></canvas>
		 <view :hidden='canImg' class='preview'>
		  <image :src='preurl' mode='widthFix' class='previewImg'></image>
		  <button type='primary' @click="save">保存分享图</button>
		</view>
		 <swiper :indicator-dots="true"  :interval="3000" :duration="1000" :current="drawIndex" @change="change">
		 	<swiper-item v-for="(item,index) in data" :key='index'>
		 		<image :src="drawIndex==index?imgdata:imgdatas" mode="widthFix"></image>
		 	</swiper-item>
		 </swiper>
		 <view class="" @click="saves">画图</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				imgdatas:'https://img.dijiamai.net/media/catalog/category/appimg/invite/open.png',
				imgdata:'',
				drawIndex:0,
				data:[0,1,2],
				canImg:true,
				preurl:'',
				name:'hello word'
			}
		},
		methods: {
			// 画步绘图
			drawinvit(){
				var that=this;
				var opId=uni.getStorageSync('weixiOpenId');
				var that=this;
				uni.request({
					url: 'https://appserver.dijiamai.net/thirdreturn/index/getsyimage',
					method: 'GET',
					data: {
						openid:opId
					},
					success: res => {
						console.log('地址',res.data);
					    uni.getImageInfo({
					    	src:res.data,
							success(res) {
								 console.log(res);
								 that.imgdata=res.path;
								 uni.request({
								 	url: 'https://appserver.dijiamai.net/thirdreturn/index/getwxascodeunlimit?parent_id=2&channel=test4&customer_id=2',
								 	method: 'GET',
								 	data: {},
								 	success: res => {
										console.log('22222',res.data)
										 uni.getImageInfo({
											src:res.data,
											success(res) {
												console.log('er',res);
												const ctd=uni.createCanvasContext('contactImg');
												ctd.drawImage(that.imgdata,0,0,375,606);
												ctd.drawImage(res.path,50,20,100,100);
												ctd.setFillStyle('green');
												ctd.fillRect(10, 10, 150, 75,);
												ctd.closePath();
												ctd.beginPath();
												ctd.setFillStyle('red');
												ctd.setFontSize(40);
												ctd.fillText(that.name,30,50)
												ctd.stroke();
												ctd.draw();
											}
										})
									}
								 });
							}
					    })
					}
				});
			},
			change(e){
				console.log('滑',e);
				this.drawIndex=e.detail.current;
			},
			saves(){
				var that=this;
				uni.showLoading({
					title:'努力生成中...'
				})
			uni.canvasToTempFilePath({
				  x: 0,
				  y: 0,
				  width: 375,
				  height: 606,
				  destWidth: 375,
				  destHeight: 606,
				  canvasId: 'contactImg',
				  success: function (res) {
				    // console.log(res.tempFilePath);
									// 得到图片的网络地址
				    that.preurl=res.tempFilePath;
				    that.canImg=false;
					// uni.setStorageSync('filePath',that.preurl);
				    uni.hideLoading()
				  },
				  fail: function (res) {
				    // console.log(res)
				  }
				})
			}
		},
		onLoad() {
			this.drawinvit();
		},
		onShow() {
			this.drawinvit();
		}
	}
</script>

<style lang="less">
	/* canvas的初始位置 */
		canvas{
			position: fixed;
			top: 0;
			left: 400px;
			}
			swiper{
				height: 800px;
				.image{
					width: 100%;
				}
			}
	.preview {
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.8);
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
		// border: 1px dashed #fff;
		}
	.preview button{
		width: 40%;
		position: absolute;
		bottom: 100rpx;
		left: 30%;
		}
</style>
