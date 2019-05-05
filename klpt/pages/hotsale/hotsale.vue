<template>
	<view class="hostsale">
		<!-- 标题 -->
		<scroll-view scroll-x class="hotList">
			<view :class="Tabindex==index?'hotMenu active':'hotMenu'" v-for="(item,index) in data" :key="index"
			@click="TabIndex(item,index)">{{item.opt_name}}
			 <view v-if='Tabindex==index' class="activeline"></view>
			</view>
		</scroll-view>
		<!-- 距离商品菜单的距离 -->
		<view class="goodMargin"></view>
		<view class="btnshare" @click="nowIn"><text>邀请</text> <text>升级</text></view>
		<good-flex :data="Pdata" :flexblean="flexblean" :ranblean="ranblean" :Lk='Lk'></good-flex>
		<load-more v-if="showloadMore" :status="loadMoreText==='加载中...'?'loading':''" ></load-more>
		<eject-frame  v-if='PopuB' :imgUrl='url' :imgStatus='imgStatus' :videoUrl='url'></eject-frame>
		<eject-frames :imgUrl='url2' :status='false'></eject-frames>
		<guide-page></guide-page>
	</view>
</template>
<script>
	import { requestip } from '../api/api.js';
	 var uid=uni.getStorageSync('userId');
	export default {
		data() {
			return {
				Tabindex:0,
				data:'',
				flexblean:true,
				Pdata:'',
				showloadMore:false,
				loadMoreText:"加载中...",
				pages:1,
				ranblean:true,
				Lk:1,
				url:'',
				url2:'https://img.dijiamai.net/media/catalog/category/appimg/invite/share.jpg',
			    imgStatus:false,
				PopuB:false
			}
		},
		methods: {
               menuclicks(i){
				   this.Tabindex=i;
			   },
			   jiang(){
				  
			   },
			   nowIn(){
			   	uni.navigateTo({
			   		url:'../invite/invite?gblean=true'
			   	})
			   },
			   TabIndex(i,n){
				   this.Tabindex=n;
				   // 点击获取数据
				   this.pages=1;
				   this.Pdata=[];
				   this.showloadMore=true;
				   var hid=i.opt_id;
				   // 点击时存储
				   uni.setStorageSync('HotId',hid);
				   uni.request({
				   	url: requestip()+'/thirdreturn/index/classgoods?class_id='+i.opt_id+'&page=1&is_sub=0&prent_id='+i.opt_id,
				   	method: 'GET',
					header:{
						"access-token":uni.getStorageSync('access-token'),
					    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
					   },
				   	data: {},
				   	success: res => {
						// console.log("排行榜数据：",res.data);
						this.Pdata=res.data.goods_search_response.goods_list;
						this.showloadMore=false;
					},
				   	fail: () => {},
				   	complete: () => {}
				   });
				    uni.request({
				   	url: 'https://appserver.dijiamai.net/thirdreturn/index/applog',
				   	method: 'GET',
				   	data: {
						event_type:'click_opt',
						log_json:{'user_id':uid,'opt_id':i.opt_id}
					}
				   });
			   },
			   // 食品初始化数据
			   foodList(){
				   uni.setStorageSync("HotId",1)
				   uni.request({
				   	url: requestip()+'/thirdreturn/index/classgoods?class_id=1&page=1&is_sub=0&prent_id=1',
				   	method: 'GET',
					header:{
						"access-token":uni.getStorageSync('access-token'),
					    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
					   },
				   	data: {},
				   	success: res => {
						// console.log("食品初始化数据：",res.data)
						this.Pdata=res.data.goods_search_response.goods_list;
					},
				   	fail: () => {},
				   	complete: () => {}
				   });
			   },
			 // 弹出层数据请求
			 Popup(){
			  var uid=uni.getStorageSync('userId');
			 	uni.request({
			 		url: requestip()+'/thirdreturn/index/getguide',
			 		method: 'GET',
			 		data: {
			 			page_name:'list',
			 			user_id:uid
			 		},
			 		success: res => {
			 			// console.log('弹出层数据',res.data);
			 			this.url=res.data.url;
			 			this.p=res.data.position;
			 			this.imgStatus=res.data.status;
						this.imgStatus=res.data.status;
						var that=this;
						setTimeout(function(){
						that.PopuB=res.data.list_switch;
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
		onLoad() {
			 uni.hideShareMenu();
			uni.showLoading({
				title:'加载中...'
			})
			//  初始化数据
			uni.request({
				url: requestip()+'/thirdreturn/index/goodsopt',
				method: 'GET',
				header:{
					"access-token":uni.getStorageSync('access-token'),
				    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
				   },
				data: {},
				success: res => {
					// console.log("初始化数据：",res.data);
					this.data=res.data.goods_opt_get_response.goods_opt_list;
					uni.hideLoading();
				},
				fail: () => {},
				complete: () => {}
			});
			this.foodList();
		},
		// 无限加载
		onReachBottom() {
			this.pages+=1;
			var Hotid=uni.getStorageSync('HotId');
			this.showloadMore=true;
			uni.request({
				url: requestip()+'/thirdreturn/index/classgoods?class_id='+Hotid+'&page='+this.pages+'&is_sub=0&prent_id='+Hotid,
				method: 'GET',
				header:{
					"access-token":uni.getStorageSync('access-token'),
				    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
				   },
				data: {},
				success: res => {
					// console.log("hot触底数据：",res.data);
					for(var i=0;i<res.data.goods_search_response.goods_list.length;i++){
						this.Pdata.push(res.data.goods_search_response.goods_list[i])
					}
					this.showloadMore=false;
					if(res.data.goods_search_response.goods_list==0){
						this.loadMoreText='没有更多数据了';
						this.showloadMore=true;
					}
					
				},
				fail: () => {},
				complete: () => {}
			});
		},
		destroyed() {
			
		},
		onShow() {
			this.Popup();
		}
	}
</script>

<style lang="less">
	.hostsale{
		.hotList{
             width: 100%;
			 white-space: nowrap;
			 height: 90upx;
			 line-height: 90upx;
			 position: fixed;
			 top: 0;
			 background-color:#ffffff;
			 border-bottom: 2upx solid #EEEEEE;
			 z-index: 100;
			.hotMenu{
				display: inline-block;
				width: 100upx;
				height: 90upx;
				text-align: center;
				font-size: 30upx;
			}
			.active{
				color:#FD4739;
				position: relative;
				.activeline{
					position: absolute;
					top:82upx;
					right: 26upx;
					width: 50upx;
					height: 4upx;
					background-color: #F70009;
				}
			}
		}
		// 距离商品菜单的距离
		.goodMargin{
			margin: 110upx 0 0 0;
		}
		// 1 2 3 样式
	}
	
</style>

