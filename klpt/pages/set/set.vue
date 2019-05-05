<template>
	<view class="set">
		<view class="margin20"></view>
		<view class="setList" v-if="false">
			<view class="">推送设置</view>
			<switch :checked='checked' @change="switch1Change"  color="#F84638"/>
		</view>
		<view class="setList">
			<view class="">搜索弹窗</view>
			<switch :checked='checked2' @change="switch2Change" color="#F84638"/>
		</view>
		<!-- #ifndef MP-WEIXIN -->
		<view class="setList" @click="clearData">
			<view class="" >清除缓存</view>
			<view><text class="spans">{{appdata}}</text><text>></text></view>
		</view>
		<!-- #endif -->
		<view class="margin20" ></view>
		<view class="setList" @click="hleps" hover-class="hoverBg" v-if="false">
			<view class="" >帮助中心</view>
			<view>></view>
		</view>
		<!-- #ifdef APP-PLUS -->
		<view class="setList" @click="shareApp" hover-class="hoverBg">
			<view class="" >分享应用</view>
			<view>></view>
		</view>
		<!-- #endif -->
		<view class="setList" @click="amend">
			<view class="">修改信息</view>
			<view>></view>
		</view>
		<view class="setList">
			<view class="">应用版本</view>
			<view>1.3.0</view>
		</view>
		<view class="retreat">
			<view class="signout" @click="singout">退出登录</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				data:'',
				switchBlean:true,
				checked2:true,
				checked:false,
				appdata:''
			}
		},
		methods:{
			switch1Change: function (e) {
				// console.log('switch1 发生 change 事件，携带值为', e.target.value)
				this.checked=!this.checked;
				uni.setStorageSync('swich2',this.checked);
				if(e.target.value){
					uni.showToast({
						title:'开启了推送',
						icon:'none'
					})
				}else{
					uni.showToast({
						title:'关闭了推送',
						icon:'none'
					})
				}
			},
			switch2Change: function (e) {
				// console.log('switch2 发生 change 事件，携带值为', e.target.value)
				this.checked2=e.target.value;
				uni.setStorageSync('switch2',e.target.value);
				if(e.target.value){
					uni.showToast({
						title:'开启了弹窗',
						icon:'none'
					})
				}else{
					uni.showToast({
						title:'关闭了弹窗',
						icon:'none'
					})
				}
			},
			clearData(){
             var that=this;
             plus.cache.calculate( function ( size ) {
				 if(size<1024){
					 that.appdata=size+'b';
				 }  
				 else if(size/1024>=1 && size/1024/1024<1){
					  that.appdata= Math.floor(size/1024*100)/100+'kB';
				 }
				else if(size/1024/1024>=1){
		             that.appdata=Math.floor(size/1024/1024*100)/100+'M';
				}
             	  uni.showModal({
             	  	title:'提示',
             	  	content:'确定清除缓存吗?',
             	  	success(res) {
						if(res.confirm){
							plus.cache.clear( function () {
								uni.showToast({
									title:'清除成功',
									icon:'none',
									success() {
										that.appdata=0+'b';
									}
								})
							});	
						}
             	  	}
             	  })
             });
			},
			singout(){
				uni.showModal({
					title:'提示',
					showCancel:true,
					content:'你确定要退出当前账号吗',
					success(res) {
						if(res.confirm){
							// console.log('点击了确定');
							uni.clearStorage();
							uni.switchTab({
								url:'../index/index'
							})
						}
					}
				})
			},
			appdatas(){
				var that=this;
				plus.cache.calculate( function ( size ) {
								 if(size<1024){
									 that.appdata=size+'b';
								 }  
								 else if(size/1024>=1 && size/1024/1024<1){
									  that.appdata= Math.floor(size/1024*100)/100+'kB';
								 }
								 else if(size/1024/1024>=1){
									 that.appdata=Math.floor(size/1024/1024*100)/100+'M';
								 }
							});		 
			},
			hleps(){
				uni.navigateTo({
					url:'../help/help'
				})
			},
			shareApp(){
				uni.navigateTo({
					url:'../shareapp/shareapp'
				})
			},
			amend(){
				uni.navigateTo({
					url: '../bind/bind?first=true&new=true'
				});
			}
		},
		onLoad() {
			uni.hideShareMenu();
			this.checked2=uni.getStorageSync('switch2');
			this.checked=uni.getStorageSync('swich2');
			// #ifdef APP-PLUS
			this.appdatas()
			// #endif
			this.checked2=uni.getStorageSync('switch2')===''?true:uni.getStorageSync('switch2')
		},
		
	}
</script>

<style lang="less">
	.set{
		background-color:  #ffffff;
		height: 1000px;
		.setList{
			box-sizing: border-box;
			height: 80upx;
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			padding: 0 20upx;
			// background-color: #ffffff;
			border-bottom: 2upx solid #F5F5F5;
		}
		.margin20{
			height: 20upx;
			width: 100%;
			background-color: #F5F5F5;
		}
		.retreat{
			box-sizing: border-box;
			height: 120upx;
			width: 100%;
			background-color: #ffffff;
			// text-align: center;
			padding-top: 20upx;
			.signout{
				width: 80%;
				height:80upx;
				line-height: 80upx;
				text-align: center;
				color:#ffffff;
				margin: 0 10%;
				background-color: #FD4739;
				border-radius: 40upx;
			}
		}
		.spans{
			display: inline-block;
			width: 100upx;
			height: 40upx;
			line-height: 40upx;
			text-align: center;
			background-color: #F5F5F5;
			border-radius: 14upx;
			font-size: 26upx;
			margin-right: 10upx;
		}
	}
	.hoverBg{
		background-color: #eee;
	}
</style>
