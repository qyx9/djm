<template>
	<view class="login">
		<image src="../../static/logo20.png" mode="widthFix"></image>
		<button class='testbutton' type="primary" open-type="getUserInfo" @getuserinfo="mpGetUserInfo" withCredentials="true" v-if="userName==''">登录到小程序</button>
	</view>
</template>

<script>
	import { requestip } from '../api/api.js'
	export default{
		data(){
			return{
				userImg:'',
				userName:'',
				parentid:'',
				accesstoken:'',
				FecshopUuid:''
			}
		},
		onLoad() {
			uni.hideShareMenu();
		   this.parentid=uni.getStorageSync('partId');
		 },
		methods:{
			logins(){
				uni.switchTab({
					url:'../personal/personal'
				})
			},
			mpGetUserInfo(result) {
			let that=this;
			// console.log('mpGetUserInfo', result);
			this.userName=result.mp.detail.userInfo.nickName;
			let userimgUrl=result.mp.detail.userInfo.avatarUrl;
			// 存储用户头像
			uni.setStorageSync('userimgUrl',userimgUrl)
			this.userImg=uni.getStorageSync('userimgUrl');
			// 存储用户昵称
			uni.setStorageSync('userName',result.mp.detail.userInfo.nickName);
			if (result.detail.errMsg !== 'getUserInfo:ok') {
				uni.showModal({
					title: '获取用户信息失败',
					content: '错误原因' + result.detail.errMsg,
					showCancel: false
				});
				return;
			}else{
				uni.login({
				  provider: 'weixin',
				  success: function (loginRes) {
					// console.log('weixin:',loginRes);
					let weixiCode=loginRes.code;
					// 存储微信code
					uni.setStorageSync('weixiCode',weixiCode);
					uni.request({
						url: requestip()+'/thirdreturn/index/getopenid?code='+weixiCode,
						method: 'GET',
						success: res => {
							// console.log("有weixiCode",JSON.parse(res.data))
							let weixiOpenId=JSON.parse(res.data).openid;
							// 存储openid
							// console.log('请求到openid',weixiOpenId);
							uni.setStorageSync('weixiOpenId',weixiOpenId);
							let name=uni.getStorageSync('userName');
							// console.log('请求到name',name);
							// share的 parentid
							that.parentid=uni.getStorageSync('friendId');
							// console.log('请求到partId',that.parentid);
							// 渠道
							var frt = uni.getStorageSync('from_tag');
							var frd = uni.getStorageSync('from_data');
							var channel=uni.getStorageSync('channel');
							var uimg=uni.getStorageSync('userimgUrl');
							uni.request({
								url: requestip()+'/v2/customer/wx/login',
								method: 'POST',
								data:{
									openid:weixiOpenId,
									name:name,
									parent_id:that.parentid?that.parentid:0,
									// parent_id:0,
									channel:channel?channel:1,
									company_id:0,
									avr_img:uimg,
									from_tag:frt?frt:0,
									from_data:frd?frd:0
								},
								header:{
									"Content-Type":"application/x-www-form-urlencoded"
								},
								success: res => {
									that.accesstoken=res.header["Access-Token"];
									that.FecshopUuid=res.header["Fecshop-Uuid"];
									uni.setStorageSync('access-token', that.accesstoken);
									uni.setStorageSync('Fecshop-Uuid', that.FecshopUuid);
									// console.log("登录返回的数据:",res.data)
									// 如果userid 为空
									uni.setStorageSync("userId",res.data.data.data.user_id);
									// console.log("userId:",res.data.data.user_id);
									that.userId=res.data.data.data.user_id;
									var pid= uni.getStorageSync('parentId');
									uni.setStorageSync("parentId",pid!=''?pid:res.data.data.data.parent_id);
									// 返回原页面
									var proGoodId=uni.getStorageSync('prGoodId');
									uni.showModal({
										confirmText:'确定',
										showCancel:false,
										content:'登录成功',
										success: (res) => {
											if(res.confirm){
												if(proGoodId==''){
													uni.switchTab({
														url:'../index/index'
													})
												}else{
													uni.switchTab({
														url:'../index/index',
														success() {
															// console.log('productmess?');
															uni.navigateTo({
																url:'../productmess/productmess?id='+proGoodId+'&userid='+that.userId
															})
														}
													})
												}
												
											}
										}
									})
								}
							});
						}
					});
				  }
				});
			}
			this.hasUserInfo = true;
			this.userInfo = result.detail.userInfo;
			// console.log(this.userInfo)
		}
	},
	onShow() {
		this.parentid=uni.getStorageSync('partId');
	}
	// #ifdef MP-WEIXIN
	,
	onTabItemTap(t) {
		console.log(t.pagePath);
	}
	// #endif
	}
</script>

<style>
	.login{
		width: 320upx;
		height: 320upx;
		text-align: center;
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		margin: auto;
	}
	.login>image{
		width: 160upx;
		height: 160upx;
		border-radius: 50%;
		background-color: black;
		margin-bottom: 30upx;
	}
</style>
