<template>
	<view class="browse">
		<!-- 时间段 -->
		<view class="timeline" v-for="(item,index) in data" :key='index'>
			<view class="time">{{item.record_day}}</view>
			<good-flex :data="item.goods_info" :flexblean="flexblean"></good-flex>
		</view>
		<!-- 加载更多 -->
		<load-more v-if="showloadMore" :status="loadMoreText==='加载中...'?'loading':''"></load-more>
	</view>
</template>

<script>
	import {requestip,headerList } from '../api/api.js'
	export default{
		 data(){
			 return{
				 data:'',
				 flexblean:true,
				 showloadMore:false,
				 loadMoreText:'加载中...',
				 browse:false,
				 browseList:false,
				 page:1,
				 uid:''
			 }
		 },
		 methods:{
			
		 },
		 onLoad:function(){
			 uni.hideShareMenu();
			 uni.showLoading({
			 	title:'加载中...'
			 })
		   this.uid=uni.getStorageSync('userId');
			uni.request({
				url: requestip()+'/v2/customer/wx/getrecord?user_id='+this.uid+'&page='+this.page,
				method: 'GET',
				header:headerList(),
				data: {
				},
				success: res => {
					// console.log("浏览列表：",res.data);
					this.data=res.data.data.record_list;
					// console.log(res.data.data.record_list);
					// console.log(res.data.data.record_list[0]);
					uni.hideLoading();
				}
			});
		 },
		 onReachBottom() {
		 	this.page+=1;
			this.showloadMore=true;
		 	uni.request({
		 		url: requestip()+'/v2/customer/wx/getrecord?user_id='+this.uid+'&page='+this.page,
		 		method: 'GET',
		 		header:headerList(),
		 		data: {
		 		},
		 		success: res => {
		 			// console.log("更多浏览数据",res.data);
					if(res.data.data.record_list.length>0){
						for(var i=0;i<res.data.data.record_list.length;i++){
						  this.data.push(res.data.data.record_list[i]);
						}
						this.showloadMore=false;
					}else{
						this.showloadMore=true;
						this.loadMoreText='没有更多的浏览记录了';
					}
					
		 		}
		 	});
		 }
	}
</script>

<style lang="less">
	.browse{
		height:100%;
		// background-color: #F5F5F5;
		.timeline{
			.time{
				height: 60upx;
				width: 100%;
				line-height: 60upx;
				text-align: center;
				background-color: #F5F5F5;
			}
		}
	}
</style>
