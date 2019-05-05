<template>
	<view class="guide">
		<view class="join" @click="goIndex"><text v-if="time>0?true:false">{{time}}</text> 跳过</view>
		<image :src="imgdata" mode="widthFix" :style="{heigth:heigth+'px'}"></image>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				imgdata: '',
				heigth:0,
				time:6,
				indexBo:true,
				launchFlag:false
			}
		},
		onLoad:function() {
			this.posterstatus();
			this.scrllH();
			uni.setStorageSync('launchFlag',this.launchFlag);
			
			// uni.showLoading({
			// 	title:'加载中...'
			// })
			// uni.hideLoading()
			
			this.backtime();
			
		},
		methods: {
			// 状态请求
			posterstatus(){
				uni.request({
					url: 'https://appserver.dijiamai.net/v2/customer/wx/indexstatus',
					method: 'GET',
					data: {},
					success: res => {
						// console.log(res.data);
						this.imgdata=res.data.data.content.url_url;
						if(res.data.data.content.index_status==0){
							this.launchFlag=false;
						}else{
							this.launchFlag=true;
						}
						if(!this.launchFlag){
							uni.switchTab({
								url:'../index/index'
							})
						}
					}
				});
			},
			scrllH() {
				var that=this;
				
				uni.getSystemInfo({
					success(res) {
						// console.log(res);
						that.heigth=res.windowHeight;
					}
				})
			},
			goIndex(){
				this.indexBo=false;
				uni.switchTab({
					url:'../index/index'
				})
			},
			// 倒计时
			backtime(){
				 var num=6;
				 var that=this;
				var time=setInterval( function(){
					if(num>0){
						num--;
						that.time=num;
						that.timedown();
						// console.log(that.time);
					}else{
						clearInterval(time);
					}
				},1000)
			},
			timedown(){
				this.time=this.time;
				if(this.time==0 && this.indexBo){
					uni.switchTab({
						url:'../index/index'
					})
				}
			}
		},
	}
</script>

<style lang="less">
	.guide{
		position:relative;
		>image{
			width: 100%;
		}
		.join{
			position: fixed;
			top: 20upx;
			right: 20upx;
			width: 150upx;
			height: 60upx;
			border: 2upx solid #000;
			border-radius: 14upx;
			text-align: center;
			line-height: 60upx;
		}
	}
</style>
