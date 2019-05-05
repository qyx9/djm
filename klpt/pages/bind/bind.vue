<template>
	<!-- 绑定 -->
	<view class="bind" :style="{height:height+'px'}">
		<!-- 当前信息 -->
		<view class="Current_information" v-if="!first">
			<view class="title">当前您的信息</view>
			<view class="information">微信号:<text></text></view>
			<view class="information">名&emsp;字:<text></text></view>
			<view class="information">手机号: <text></text></view>
		</view>
		<!-- <view> <button type="primary" @click="savadata">保存信息</button></view> -->
		<view class="center">
		<form @submit="formSubmit" @reset="formReset">
			<view class="box" style="margin-bottom: 60upx;">
			<view class="mess" style="border-bottom: 1px solid #EEEEEE;">微信号: <input type="text" name='wxh' value=""  placeholder="请输入您的微信号" v-model="data1"/></view>
			<view class="mess" style="border-bottom: 1px solid #EEEEEE;">名&emsp;字: <input type="text" name='name' value="" placeholder="请输入您的名字" v-model="data2"/></view>
			<view class="mess" >手机号: <input type="text" name='phone' value="" placeholder="请输入您的手机号" v-model="data3" /></view>
			</view>
			<view class="">
				<button class="btn-submit" formType="submit" type="primary">{{cont?'保存新的信息':'保存信息' }}</button>
				<button type="default" @click="outamend" style="margin-top: 10px;" v-if="!first">不修改信息</button>
			</view>
		</form>
		</view>
		<!-- <view class=""></view> -->
	</view>
</template>

<script>
	var  graceChecker = require("../../common/graceChecker.js");
	export default{
		data() {
			return {
				data1: '',
				data2: '',
				data3: '',
				height:0,
				cont:false,
				first:true
			}
		},
		methods: {
			formSubmit: function (e) {
				//将下列代码加入到对应的检查位置
				//定义表单规则
				var that=this;
				var uid=uni.getStorageSync('userId');
				var rule = [
					{name:"wxh", checkType : "notnull", checkRule: "",errorMsg:"微信号不能为空"},
					{name:"name", checkType : "notnull", checkRule: "", errorMsg:"姓名不能为空"},
				    {name:"phone", checkType : "phoneno", checkRule: "", errorMsg:"请输入有效的手机号"},
				];
				//进行表单检查
				var formData = e.detail.value;
				var checkRes = graceChecker.check(formData, rule);
				if(checkRes){
					uni.request({
						url: 'http://appserver.dijiamai.net/v2/customer/wx/customersub',
						method: 'POST',
						data: {
							user_id:uid,
							user_name:that.data2,
							wx_name:that.data1,
							tell_phone:that.data3
						},
						success: res => {
							// if(res.data.code===200){
							// 
							// }
							// else{
							// 	 uni.showModal({
							// 		title: '错误',
							// 		content: JSON.stringify(res.data.code),
							// 		success: function (res) {
							// 			if (res.confirm) {
							// 				console.log('用户点击确定');
							// 			} else if (res.cancel) {
							// 				console.log('用户点击取消');
							// 			}
							// 		}
							// 	});
							// }\
							uni.showModal({
								title:'提示',
								content:'保存成功',
								success() {
									uni.setStorageSync('bind',true);
									uni.switchTab({
					                    url:'../personal/personal',
										success() {
											uni.navigateTo({
												url:'../withdrawal/withdrawal?bind=true'
											})
										}
									})
								}
							})
						}
					});
				}else{
					uni.showToast({ title: graceChecker.error, icon: "none" });
				}
			},
			outamend(){
				uni.switchTab({
					url:'../personal/personal'
				})
			}
		},
		onLoad:function(e){
			this.cont=e.new?e.new:false;
			this.first=e.first?e.first:true;
			var that=this;
			uni.getSystemInfo({
				success(res) {
					that.height=res.windowHeight;
				}
			})
		}
	}
</script>

<style lang="less">
	.bind{
		width: 100%;
		padding-top: 60upx;
		box-sizing: border-box;
		padding-left:20upx;
		padding-right:20upx;
		background-color: #EEE;
		.center{
			position: absolute;
			width: 100%;
			height: 600upx;
			box-sizing: border-box;
			padding-left:20upx;
			padding-right:20upx;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			margin: auto;
		}
		.box{
			box-sizing: border-box;
			padding-left:20upx;
			padding-right:20upx;
			height: 280upx;
			width: 100%;
			border-radius: 16upx;
			background-color: #fff;
		}
		.mess{
			margin-top: 20upx;
			width: 100%;
			box-sizing: border-box;
			height: 80upx;
			display: flex;
			flex-direction:row;
			justify-content: space-between;
			align-items: center;
			>input{
				width: 80%;
				height: 72upx;
				background-color: #fff;
				border: 2upx solid #fff;
				font-size: 28upx;
			}
		}
		button{
			width: 60%;
			margin: 0 auto;
		}
		.Current_information{
			width: 100%;
			height: 200upx;
			background-color: #fff;
			.title{
				text-align: center;
			}
		}
	}
</style>
