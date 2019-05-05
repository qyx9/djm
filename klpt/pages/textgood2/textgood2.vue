<template>
	<view class="modify">
		<form @submit="formSubmit" report-submit='true'>
				<button formType="submit">Submit</button>
		</form>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				src: 'https://p.pinduoduo.com/ydNimgMx'
			}
		},
		methods:{
			formSubmit: function(e) {
            console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.formId));
			var a=e.detail.formId;
			var opid=uni.getStorageSync('weixiOpenId');
			console.log('a',a);
			uni.request({
				url: 'https://appserver.dijiamai.net/thirdreturn/index/sendmessage',
				method: 'GET',
				data: {
					openid:opid,
					formid:a
				},
				success: res => {
					console.log("返会数据",res.data)
				},
				fail: () => {},
				complete: () => {}
			});
        },
		}
	}
</script>

<style>
		button{
		border-radius: 20upx;
		background-color: red;
		color:#FAE6E3;
	}
</style>
