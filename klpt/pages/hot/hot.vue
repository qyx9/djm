<template>
	<view class="hostsale">
		<navigator url="#"><image src="https://img.dijiamai.net/media/catalog/category/appimg/hot/banner.png" mode="widthFix"></image></navigator>
		<view :class="scrollTopBlean?'decscmenu2':'decscmenu'">
			<scroll-view scroll-x  class="scrollmenu">
				<view class="scrollview" v-for="(item,index) in descmenu" :key="index" @click="menuclicks(item,index)" 
				:class="Tabindex==index?'actives':''">{{item.name}}
				</view>
			</scroll-view>
		</view>
		<!-- 商品 -->
	   <good-flex :data='data' :flexblean="flexblean" :Lk='Lk'></good-flex>
	   <load-more v-if="showloadMore" :status="loadMoreText==='加载中...'?'loading':''" ></load-more>
	   <eject-frame v-if='PopuB' :imgUrl='url' :PositionStatus="p" :imgStatus='imgStatus' :videoUrl='url'></eject-frame>
	   <view class="btnshare" @click="nowIn"><text>邀请</text> <text>升级</text></view>
       <eject-frames></eject-frames>
	</view>
</template>

<script>
	import { requestip } from '../api/api.js';
	export default {
		data() {
			return {
				descmenu:[
					{name:"时实热销榜",num:1},
					{name:"时实收益榜",num:2},
					{name:"今日销售榜",num:3}
				],
				Tabindex:0,
				flexblean:true,
				data:[],
				hotclicknum:1,
				hotpages:0,
				showloadMore:false,
				loadMoreText:"加载中...",
				bannnerimgs:'',
				scrollTopBlean:false,
				Lk:1,
				url:'',
				p:'leftBottom',
				imgStatus:true,
				PopuB:false
			}
		},
		onLoad() {
			uni.hideShareMenu();
			this.showloadMore=true;
           // 初始化数据
		   uni.request({
		   	url: requestip()+'/thirdreturn/index/explosiongoods?offset=0&sort_type=1',
		   	method: 'GET',
			header:{
				"Cache-Control":"public,max-age=600",
				"access-token":uni.getStorageSync('access-token'),
			    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
			   },
		   	data: {},
		   	success: res => {
				// console.log("热销初始化数据：",res.data);
				this.data=res.data.top_goods_list_get_response.list;
				this.showloadMore=false;
			},
		   	fail: () => {},
		   	complete: () => {}
		   });
		},
		methods: {
               menuclicks(i,n){
				   this.Tabindex=n;
				   this.hotclicknum=i.num;
				   this.showloadMore=true;
				   this.hotpages=n;
				   this.data='';
				   uni.request({
				   	url: requestip()+'/thirdreturn/index/explosiongoods?offset=0&sort_type='+this.hotclicknum,
				   	method: 'GET',
					header:{
						"access-token":uni.getStorageSync('access-token'),
					    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
					   },
				   	data: {},
				   	success: res => {
						// console.log("点击热销数据:",res.data);
						this.data=res.data.top_goods_list_get_response.list;
						this.showloadMore=false;
					},
				   	fail: () => {},
				   	complete: () => {}
				   });
				   
			   },
			   nowIn(){
			   	uni.navigateTo({
			   		url:'../invite/invite?gblean=true'
			   	})
			   },
			  // 弹出层数据请求
			  Popup(){
				var uid=uni.getStorageSync('userId');
			  	uni.request({
			  		url: requestip()+'/thirdreturn/index/getguide',
			  		method: 'GET',
			  		data: {
			  			page_name:'hot',
			  			user_id:uid
			  		},
			  		success: res => {
			  			// console.log('弹出层数据',res.data);
			  			this.url=res.data.url;
			  			this.p=res.data.position;
			  			this.imgStatus=res.data.status;
						var that=this;
						setTimeout(function(){
						that.PopuB=res.data.hot_switch;
						},2000)
						this.Lk=res.data.rank;
						uni.setStorageSync('rank',res.data.rank);
						uni.setStorageSync('peroid_status',res.data.peroid_status);
			  		},
			  		fail: () => {},
			  		complete: () => {}
			  	});
			  }
		},
		// 无限加载
		onReachBottom() {
			this.showloadMore=true;
			this.hotpages=this.hotpages+10+this.hotclicknum;
			uni.request({
				url: requestip()+'/thirdreturn/index/explosiongoods?offset='+this.hotpages+'&sort_type='+this.hotclicknum,
				method: 'GET',
				header:{
					"access-token":uni.getStorageSync('access-token'),
				    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
				   },
				data: {},
				success: res => {
					// console.log("热销触底数据：",res.data);
					for(var i=0;i<res.data.top_goods_list_get_response.list.length;i++){
						this.data.push(res.data.top_goods_list_get_response.list[i]);
					}
					this.showloadMore=false;
					if(res.data.top_goods_list_get_response.list==0){
						this.loadMoreText='没有更多数据了';
						this.showloadMore=true;
					}
				},
				fail: () => {},
				complete: () => {}
			});
		},
		onPageScroll:function(e) {
			if(e.scrollTop>150){
				this.scrollTopBlean=true;
			}else{
				this.scrollTopBlean=false;
			}
		},
		destroyed() {
			
		},
		onShow() {
			this.Popup();
		}
	}
</script>

<style lang="less">
	.banner{
		width: 100%;
	}
	.banner>image{
		width: 100%;
	}
	.decscmenu{
		color:#ACACAC;
	}
	
	.scrollview{
		font-size: 36upx;
	}
	.hostsale .scrollview{
	 	width: 33%;
		height: 80upx;
		line-height: 80upx;
		font-size: 28upx;
		text-align: center;
		display: inline-block;
	}
	.hostsale .actives{
		color:#F70009;
	}
	.hostsale {
		.decscmenu2{
			width: 100%;
			position: fixed;
			top:0upx;
			z-index: 100;
		}
	}
</style>

