<template>
	<view class="comments">
		<ment-list :array="data"></ment-list>
		 <load-more v-if="showloadMore" :status="loadMoreText==='加载中...'?'loading':''" ></load-more>
	</view>
</template>

<script>
	import MentList from '../../components/comment.vue'
	export default{
		components: {
			MentList
		},
		data() {
			return {
				data:[],
				num:5,
				pages:1,
				id:0,
				showloadMore:false,
				loadMoreText:"加载中...",
			}
		},
		methods: {
			commentInit() {
				uni.request({
					url: 'https://appserver.dijiamai.net/thirdreturn/index/getreviews?goods_id='+this.id+'&page='+this.pages,
					method: 'GET',
					data: {},
					success: res => {
						console.log('所有评论',res.data);
						this.data=res.data.data;
					},
					fail: () => {},
					complete: () => {}
				});
			}
		},
		onLoad:function(e){
			this.id=e.id;
			this.commentInit();
		},
		onReachBottom() {
			this.pages+=1;
			this.showloadMore=true;
		    uni.request({
		    	url: 'https://appserver.dijiamai.net/thirdreturn/index/getreviews?goods_id='+this.id+'&page='+this.pages,
		    	method: 'GET',
		    	data: {},
		    	success: res => {
		    		console.log('所有评论1',res.data);
		    		// this.data=res.data.data;
					if(res.data.data.length!=0){
						for(var i=0;i<res.data.data.length;i++){
							this.data.push(res.data.data[i])
						}
						this.showloadMore=false;
					}else{
						this.loadMoreText='',
						this.showloadMore=true;
					}
					
		    	},
		    	fail: () => {},
		    	complete: () => {}
		    });
		}
	}
</script>

<style>
	
</style>
