<template>
	<view class="goodListMess">
		<view class="yedou">
		<scroll-view scroll-x class="uni-swiper-tab" v-if="topIDF">
			<view :class="topIndex==index?'active goodListMenu':'goodListMenu'" v-for="(item,index) in Catalog" :key="index" @click="catalog(item,index)"><text>{{item.opt_name}}</text></view>
		</scroll-view>
		<!-- 排序 -->
		<view :class="topIDF?'topPosition decscmenu':'NonePosition decscmenu'">
		    <view class="descName" v-for="(item,index) in descmenu" :key="index" @click="descMenu(riseBlean?item.num:item.num2,index,index)" 
			 :class="tabIndex==index?'activedesc':''"><text>{{item.name}}</text>
			 <view v-if='tabIndex==index' class="activeline"></view>
			 <view  class="scrollList"><view  v-if='index!=0 && index!=2' :class="riseBlean && tabIndex==index?'rises':''" class="fnt">∧</view>
			 <view v-if='index!=0 && index!=2' :class="!riseBlean && tabIndex==index?'drops':''" class="fnt">∨</view></view>
			 </view>  
			<view :class="flexblean?'iconflex':'iconflex2' " @click="flexgoods">
				<image :src="flexblean?imgicon1:imgicon2" mode="aspectFill"></image>
			</view>				 
		</view>
		</view>
		<!-- 距离排序的加价格距离 -->
		<view :class="topIDF?'allTopMargin':'topMargin'"></view>
		 <good-flex :data='data' :flexblean="flexblean" :Lk='Lk'></good-flex>
	<view class="showmore">
		<load-more v-if="showloadMore" :status="loadMoreText==='加载中...'?'loading':''" ></load-more>
	</view>
   <view class="btnshare" @click="nowIn"><text>邀请</text> <text>升级</text></view>
</view>
</template>

<script>
	import { requestip } from '../api/api.js';
	export default{
		data(){
			return{
				descmenu:[
					{name:"综合",num:0,num2:0},
					{name:"价格",num:4,num2:3},
					{name:"销量",num:6,num2:6}
				],
				propsdata:'',
				data:[],
				tabIndex:0,
				topIndex:0,
				topdata:'',
				topIDF:false,
				Catalog:'',
				datalog:'',
				pages:1,
				opt_id:'',
				showloadMore:false,
				loadMoreText:"加载中...",
				descnum:0,
				flexblean:true,
				imgicon1:"../../static/hengx2.png",
				imgicon2:"../../static/shu2x.png",
				riseBlean:false,
				Lk:1
			}
		},
		methods:{
			descMenu(t,i){
				this.tabIndex=i;
				this.descnum=t;
				this.opt_id=uni.getStorageSync('optId');
				this.showloadMore=true;
				this.pages=1;
				this.riseBlean=!this.riseBlean;
				// 排序请求数据
				this.data=[];
				// http://appserver.wujie520.cn/thirdreturn/index/classgoodsbysort?page=1&class_id=667&is_sub=0&prent_id=667&sort_type=0
                // 距离top为0
				uni.pageScrollTo({
					duration:100,
					scrollTop:0
				})
				uni.request({
					url: requestip()+'/thirdreturn/index/classgoodsbysort?class_id='+this.opt_id+'&page='+this.pages+'&is_sub=0&prent_id='+this.opt_id+'&sort_type='+this.descnum,
					method: 'GET',
					header:{
						"access-token":uni.getStorageSync('access-token'),
					    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
					   },
					data: {},
					success: res => {
						// console.log("desc数据:",res.data);
						this.data=res.data.goods_search_response.goods_list;
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
			goodLm(i){
				uni.navigateTo({
					url: '../productmess/productmess?id='+i.goods_id
				});
			},
			catalog(i,n){
				this.topIndex=n;
				// 储存页面opt_id
				uni.setStorageSync('optId',i.opt_id);
				// 回到顶部
				uni.pageScrollTo({
					duration:100,
					scrollTop:0
				})
				// 顶部点击请求数据
				uni.request({
					url: requestip()+'/thirdreturn/index/classgoods?class_id='+i.opt_id+'&page='+this.pages+'&is_sub=0&prent_id='+i.opt_id+'&sort_type='+this.descnum,
					method: 'GET',
					header:{
						"access-token":uni.getStorageSync('access-token'),
					    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
					   },
					data: {},
					success: res => {
						// console.log("点击返回数据",res.data);
						this.data=res.data.goods_search_response.goods_list;
					},
					fail: (errmsg) => {
						console.log("错误信息:",errmsg)
					},
					complete: () => {}
				});
			},
			// 切换页面样式
			flexgoods(){
				this.flexblean=!this.flexblean;
			},
			// goodid有值
			goodidInit(e){
				uni.request({
					url: requestip()+'/thirdreturn/index/classgoods?class_id='+e.id+'&page=1&is_sub='+e.num+'&prent_id='+e.id+'&sort_type='+this.descnum,
					method: 'GET',
					header:{
						"access-token":uni.getStorageSync('access-token'),
					    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
					   },
					data: {},
					success: res => {
						if(e.num==0){
							// console.log("下面数据:",res.data);
							this.data=res.data.goods_search_response.goods_list;
							// console.log(this.data);
							uni.hideLoading()
						}else{
							// console.log('头部数据',res.data);
							this.data=res.data[1].goods_search_response.goods_list;
							this.Catalog=res.data[0].goods_opt_get_response.goods_opt_list;
							this.topIDF=!this.topIDF;
							uni.hideLoading();
						}
						
					}
				});
			},
			// goodid 没有值
			freeshiping(){
				
			}
		},
		onLoad:function(e) {
			uni.hideShareMenu();
			// console.log(e);
			this.datalog=e.name;
			    // console.log("opid:",e);
				this.topdata=e.opid;
				var eid=e.id;
				uni.setNavigationBarTitle({
					title:e.name
				})
				// 跳转页面请求数据
				uni.showLoading({
					title:'加载中..'
				})
					this.goodidInit(e);
				// this.topdatas();
					this.topIDF=false;
					
				    // console.log(this.topIDF)
		},
		//触底
		onReachBottom() {
			this.pages+=1;
			this.opt_id=uni.getStorageSync('optId');
			this.showloadMore=true;
			uni.request({
				url: requestip()+'/thirdreturn/index/classgoodsbysort?class_id='+this.opt_id+'&page='+this.pages+'&is_sub=0&prent_id='+this.opt_id+'&sort_type='+this.descnum,
				method: 'GET',
				header:{
					"access-token":uni.getStorageSync('access-token'),
				    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
				   },
				data: {},
				success: res => {
					// console.log("触底数据:",res.data);
					for(var i=0;i<res.data.goods_search_response.goods_list.length;i++){
						this.data.push(res.data.goods_search_response.goods_list[i])
					}
					this.showloadMore=false;
				},
				fail: (errmsg) => {
					console.log("errmsg",errmsg);
				},
				complete: () => {}
			});
		},
		onBackPress() {
			var backopid=uni.getStorageSync('backoptId');
			uni.setStorageSync('optId',backopid);
			// console.log("onBackPress");
		},
		onShow() {
			var uid=uni.getStorageSync('userId');
			uni.request({
				url: requestip()+'/v2/customer/wx/user?user_id='+uid,
				method: 'GET',
				header:{
					"access-token":uni.getStorageSync('access-token'),
				    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
				   },
				data: {},
				success: res => {
					// this.userData=res.data.data.user_info;
					console.log("个人数据:",res.data);
					uni.setStorageSync('rank',res.data.data.user_info.rank);
					uni.setStorageSync('peroid_status',res.data.data.user_info.peroid_status);
					this.Lk=res.data.data.user_info.rank;
				}
			});
		}
	}
</script>

<style lang="less">
	.goodListMess{
		// -webkit-overflow-scrolling: touch;
		.activedesc{
			 position: relative;
			 color: #FD4739;
		}
		.active{
			color:#FD4739;
		}
		// 与scroll-x 有关
		.uni-swiper-tab {
			width: 100%;
			white-space: nowrap;
			height: 100upx;
			position: fixed;
			top: 0;
			z-index: 100;
			background-color: #FFFFFF;
		}
		.yedou{
			// 防止页面抖动
			height:2%;
			overflow:auto;
			margin: 0;
		}
		.goodListMenu{
			width: 160upx;
			line-height: 100upx;
			height: 100upx;
			display: inline-block;
			text-align: center;
			font-size:32upx;
			
		}
		height: 2000upx;
		.topMargin{
			margin-top: 60upx;
		}
		.allTopMargin{
			margin-top: 160upx;
		}
		.topPosition{
			position: fixed;
			top: 100upx;
		}
		.NonePosition{
			position: fixed;
			top: 0;
		}
		.decscmenu{
			box-sizing: border-box;
			width: 100%;
			height: 100upx;
			line-height: 100upx;
			align-items:center;
			background-color:#FFFFFF;
			padding: 0 8upx;
			z-index: 100;
			.active{
				color:#FFCB00;
			}
			.descName{
				width: 27%;
				height:60upx;
				display: inline-block;
				line-height:88upx;
				text-align: center;
				font-size:30upx;
			}
		 .scrollList{
				position: relative;
				display: flex;
				flex-direction: column;
				height: 50upx;
				width: 40upx;
				top: -94upx;
				left: 130upx;
			}
			/* text */
		   .scrollList view{
				height: 12upx;
				font-size: 14upx;
				color:#A6A6A6;
				margin-top: 2upx;
			}
			.activeline{
				position: absolute;
				top:94upx;
				right: 81upx;
				width: 46upx;
				height: 4upx;
				background-color: #F70009;
			}
		}
}
.decscmenu .iconflex{
	position: relative;
	width: 19%;
	height: 60upx;
	display: inline-block;
}
.decscmenu .iconflex>image{
	position: absolute;
	top: -56upx;
	left: 20upx;
	width: 50upx;
	height: 50upx;
}
.decscmenu .iconflex2>image{
	position: absolute;
	top: 20upx;
	right: 84upx;
	width: 50upx;
	height: 50upx;
}
.showmore{
	position: relative;
	top:40upx;
}
.fnt{
	font-size: 14upx;
}
</style>
