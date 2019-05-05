<template>
	<view class="">
		<web-view :src="http+data"></web-view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				http:'http://vue.dijiamai.net/',
				data: ''
			}
		},
		onLoad:function(e){
			this.data=e.page;
		}
	}
</script>

<style>
</style>
