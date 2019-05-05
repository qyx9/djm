<template>
	<view class="">
		<good-flex :data='data'></good-flex>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				data:[]
			}
		},
	  methods: {
	  	textInit(e) {
	  		uni.request({
	  			url: 'https://appserver.dijiamai.net/thirdreturn/index/getchannel?channel='+e+'&page=1',
	  			method: 'GET',
	  			data: {},
	  			success: res => {
					console.log('textlist',res.data);
					this.data=res.data.goods_basic_detail_response.list;
				},
	  			fail: () => {},
	  			complete: () => {}
	  		});
	  	}
	  },
	  onLoad:function(e){
		  this.textInit(e.channel)
	  }
	}
</script>

<style>
</style>
