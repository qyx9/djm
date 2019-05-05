<template>
	<view class="productmess" v-show="loding">
		<view class="goodlists">
			<swiper  :interval="3000" :duration="500" circular indicator-dots >
				<swiper-item v-for="(item,index) in bannerdata" :key="index">
					<image :src="item" mode="widthFix" class="imgsty" @click="preimg(item)"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="jiage">
			<view class="jflex">
				<view class="jia" v-if="Lk==1"><text>到手价</text><text>￥{{(data.min_group_price-data.coupon_discount-dataPra.now_rebate)/100}}</text>(用劵+返利后价格)<text></text></view>
				<view class="jia" v-if="Lk==2"><text>到手价</text><text>￥{{(data.min_group_price-data.coupon_discount-dataPra.now_rebate_rank_two)/100}}</text>(用劵+返利后价格)<text></text></view>
				<view class="jia" v-if="Lk==3"><text>到手价</text><text>￥{{(data.min_group_price-data.coupon_discount-dataPra.now_rebate_rank_three)/100}}</text>(用劵+返利后价格)<text></text></view>
				<!-- <view class="jiaee"><text>拼多多</text></view> -->
			</view>
			<view class="jflexs">
				<view style="width: 80%; display: flex; flex-direction: row;">
					<text>拼团价￥{{data.min_group_price/100}}</text>
					<view class="img" :style="data.coupon_discount/100>99?'padding-right:2px':''">{{data.coupon_discount/100}}</view>
					<text v-if="Lk==1">返{{dataPra.now_rebate/100}}</text>
					<text v-if="Lk==2">返{{dataPra.now_rebate_rank_two/100}}</text>
					<text v-if="Lk==3">返{{dataPra.now_rebate_rank_three/100}}</text>
					<view @click="rules"> <image src="../../static/wenhao.png" mode="widthFix" class="imgs" style="width: 20upx;height: 20upx;"></image>升级返{{sheng/100?sheng/100:dataPra.upgrade_rebate/100}}
					   
					</view>
				</view>
				<text>销量{{data.sold_quantity<10000?data.sold_quantity:data.sold_quantity/10000 | numFilter}}{{data.sold_quantity<10000?'':'万+' }}</text>
			</view>
		</view>
		<view class="goodname">
			<text>拼多多</text><text>{{data.goods_name}}</text>
		</view>
		<view class="roll" @click="roll">
			<view class="rollnum">
				<text><text>￥</text>{{data.coupon_discount/100}}</text>
				<view class="rolldata">
					<view class="">有效期</view>
					<view class="font22"><text>{{startTime}}- {{endTime}}</text></view>
				</view>
			</view>
			<view class="rollnow">
				立即领卷
			</view>
		</view>
		<view class="rollCount" v-if="true">
		   <!-- 距离颜色 -->
		</view>
		<!-- 商品评价信息 -->
		<view class="goodscore" v-if="true">
			<view class="top">
				<view class="house" style="width: 80%;">
					<view :class="true?'':imgbg" style="width: 20%;"></view>
					<view class="housename" style="width: 80%;" :class="true?'nameactive':''">{{data.mall_name}}
						<view class="housemess" style="color: #9C9C9C;">
							<!-- <text style="margin-right: 20upx;">商品数量:0</text> -->
							<text>已拼:{{data.sold_quantity<10000?data.sold_quantity:data.sold_quantity/10000 | numFilter}}{{data.sold_quantity<10000?'':'万+' }}件</text>
						</view>
					</view>
				</view>
				<view class="enter" style="width: 20%;" v-if="false">进店逛逛</view>
			</view>
			<view class="bottom">
				<view style="width: 33.3%;">描述评分<text>{{data.avg_desc/100>4.8?'高':'中'}}</text></view> 
				<view style="width: 33.3%;">服务评分<text>{{data.avg_serv/100>4.8?'高':'中'}}</text></view>
				<view style="width: 33.3%;">物流评分<text>{{data.avg_lgst/100>4.8?'高':'中'}}</text></view>
			</view>
		</view>
		<view class="rollCount" v-if='false'>
		   <!-- 距离颜色 -->
		</view>
		<!-- 商品评价 -->
		<view class="reviews" style="margin-bottom: 0px;">
			<text>商品评价</text>
			<view class="allmsg" @click="lookall"><text>查看全部</text></view>
		</view>
		<!-- 信息 -->
		<view class="userReviews" >
			<ment-list :array="arraydata" :istitle="false"></ment-list>
		</view>
		<!-- 商品详情 -->
		<view class="rollCount">
		   <!-- 距离颜色 -->
		</view>
		<view class="reviews">
			<text>商品详情</text>
		</view>
		<!-- 商品信息 -->
		<view class="gooddesc">
			<!-- 商品描述 -->
			<view class="goods_desc"><text>{{data.goods_desc}}</text></view>
			<view class="descimg" v-for="(item,index) in bannerdata" :key="index">
				<image :src="item" mode="widthFix" @click="preimg(item)"></image>
			</view>
		</view>
		<!-- bottombar -->
		<view class="bottombar">
			<view class="indexbar">
				<view class="enjoy" @click="indexurl">
					<image src="../../static/shoumess.png" mode="widthFix"></image>
					<text>首页</text>
				</view>
				<view class="enjoy" @click="enjoyList">
					<image  :src="enjoyBlean?shouchang2:shouchang" mode="widthFix"></image>
					<text>收藏</text>
				</view>
			</view>
			<view class="sharemess" @click="sharefriend">
			     <button class="buttonfriend" open-type="share" id="3" @click="imgpro">
					 <text v-if="Lk!=3">分享升级</text>
					 <text v-if="Lk==3">分享好友</text>
					 <text v-if="Lk!=3">返利:￥{{sheng/100?sheng/100:dataPra.upgrade_rebate/100}}</text>
				</button>
			</view>
			<view class="sharemess" @click="roll(data.goods_name,data.coupon_discount/100,bannerdata[0],data.goods_id,dataPra.now_rebate/100,data.min_group_price/100,dataPra.upgrade_rebate/100)">
				<text>领￥{{data.coupon_discount/100}}劵购买</text>
				<text v-if="Lk==1">返利:￥{{dataPra.now_rebate/100}}</text>
				<text v-if="Lk==2">返利:￥{{dataPra.now_rebate_rank_two/100}}</text>
				<text v-if="Lk==3">返利:￥{{dataPra.now_rebate_rank_three/100}}</text>
			</view>
		</view>
		<view class="rollCount">
		   <!-- 距离颜色 -->
		</view>
		<!-- 弹出层 -->
		<view class="uni-banner" v-if="expired">
		<!-- 3D轮播 -->
		<view class="">
			<swiper class="imageContainer" @change="handleChange" previous-margin="50rpx" next-margin="50rpx" circular>
				<block v-for="(item,index) in imgList" :key="index">
					<swiper-item class="swiperitem">
						<image class="itemImg" :class="currentIndex == index ? 'swiperactive': ''" :src="item" lazy-load mode="scaleToFill"></image>
					</swiper-item>
				</block>
			</swiper>
		</view>
		<view class="btnshare">
			<button open-type="share" type="primary" id="1">分享产品链接</button>
			<button open-type="share" type="primary" id="2">分享首页链接</button>
		</view>
		</view>
		<view class="uni-mask" v-if="expired">
		</view>
		<!-- 弹出层 -->
		<!-- 相似商品 -->
		<view class="likeGood">
			<view class="titles"><text>推荐商品</text></view>
			<good-flex :data="dataState" :flexblean="flexblean"></good-flex>
		</view>
		<load-more v-if="showloadMore" :status="loadMoreText==='加载中...'?'loading':''" ></load-more>
	</view>
</template>

<script>
	import { requestip,headerList } from '../api/api.js';
	import MentList from '../../components/comment.vue';
	function timestampToTime(timestamp) {
        var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = date.getDate() + ' ';
        var h = date.getHours() + ':';
        var m = date.getMinutes() + ':';
        var s = date.getSeconds();
        return Y+M+D+h+m+s;
    }
	export default{
		components:{
			MentList
		},
		data(){
			return {
				imgList:[
					'https://img.dijiamai.net/media/catalog/category/appimg/invite/open.png',
					'https://img.dijiamai.net/media/catalog/category/appimg/invite/share.jpg',
					'https://img.dijiamai.net/media/catalog/category/appimg/invite/share.png'
					],
				data:[],
				bannerdata:[],
				dataurl:'',
				appid:'',
				pathges:'',
				loding:false,
				zongscore:'',
				look:false,
				serpct:'',
				descpct:'',
				lgstpct:'',
				bannerShow:false,
				prGoodId:'',
				UserId:'',
				messopid:'',
				dataState:'',
				flexblean:false,
				pages:1,
				showloadMore:false,
				loadMoreText:"加载中...",
				shouchang:'../../static/aixin008.png',
				shouchang2:'../../static/aixin.png',
				enjoyBlean:false,
				sheng:'',
				ling:'',
				startTime:0,
				endTime:0,
				dataPra:0,
				arraydata:[1,2,3],
				expired:false,
				eximgs:'',
				currentIndex:0,
				// 会员等级过期
				Lk:1,
				peroid_status:1
			}
		},
		onLoad:function(e){
			uni.showLoading({
				title:"加载中..."
			})
			this.Lk=uni.getStorageSync('rank');
			this.peroid_status=uni.getStorageSync('peroid_status');
			this.eximgs=this.imgList[0];
			// console.log('tu0',this.eximgs);
			uni.hideShareMenu();
			this.sheng=e.sheng;
			this.ling=e.ling;
			var pages = getCurrentPages();
            var page = pages[pages.length - 1];
			var router=page.route;
			// console.log('router:',router);
			// console.log("所以值：",e);
			// 第一次数据使用
			uni.setStorageSync("prGoodId",e.id);
			let goodId=e.id;
			this.UserId=e.oparid;
			// uni.setStorageSync("friendId",e.oparid);
			// console.log("好友分享的parentid:",this.UserId);
			// var fId=uni.getStorageSync("friendId");
			// console.log("好友分享的parentid2:",fId);
			// console.log('UserId',this.UserId)
			// 存储goodId
			uni.setStorageSync('goodId',goodId);
			// 存储分享Pareid
			var shareparentid=e.userid;
			uni.setStorageSync("shareparentid",shareparentid);
			// console.log('分享的parentid:',shareparentid);
			let openid=uni.getStorageSync('weixiOpenId');
			if(openid==''){
				uni.setStorageSync('optId',1);
				uni.hideLoading();
				// #ifdef MP-WEIXIN
				uni.showModal({
					title: '提示',
					content: '微信未登录小程序,请先登录后继续操作',
					showCancel: false,
					success: res => {
						if(res.confirm){
							uni.navigateTo({
								url:'../login/login'
							})
						}
					}
				});
				// #endif
				// #ifdef APP-PLUS
				uni.showModal({
					title: '提示',
					content: '用户不存在或用户没有登录',
					showCancel: false,
					success: res => {
						if(res.confirm){
							uni.navigateTo({
								url:'../applogin/applogin'
							})
						}
					}
				});
				// #endif
			}
		else{
			this.prGoodId=e.id;
			var userid2=uni.getStorageSync('userId');
			// 首页返详情
			this.UserId=e.userid?e.userid:userid2;
			// console.log('UserId',this.UserId)
			// 初始化index 
			 uni.setStorageSync('optId',1);
			 this.likegoodList();
			uni.request({
				url: requestip()+'/thirdreturn/index/getgoodsdetail?goods_id='+e.id+'&openid='+openid,
				method: 'GET',
				header:{
					"access-token":uni.getStorageSync('access-token'),
				    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
				   },
				data: {},
				success: res => {
					// console.log(res.data)
					this.dataPra=res.data;
					this.arraydata=res.data.yangkeduo.data;
					
					this.data=res.data.goods_detail.goods_detail_response.goods_details[0];
					this.bannerdata=res.data.goods_detail.goods_detail_response.goods_details[0].goods_gallery_urls;
					this.dataurl=res.data.goods_url.goods_promotion_url_generate_response.goods_promotion_url_list[0].short_url;
					this.appid=res.data.goods_url.goods_promotion_url_generate_response.goods_promotion_url_list[0].we_app_info.app_id;
					this.pathges=res.data.goods_url.goods_promotion_url_generate_response.goods_promotion_url_list[0].we_app_info.page_path;
					
					this.zongscore=(this.data.avg_desc+this.data.avg_serv+this.data.avg_lgst)/300;
					this.zongscore=Math.floor(this.zongscore*100)/100;
					this.serpct=Math.floor(this.data.serv_pct*100*100)/100;
					this.descpct=Math.floor(this.data.desc_pct*100*100)/100;
					this.lgstpct=Math.floor(this.data.lgst_pct*100*100)/100;
					this.startTime=res.data.goods_detail.goods_detail_response.goods_details[0].coupon_start_time;
					this.endTime=res.data.goods_detail.goods_detail_response.goods_details[0].coupon_end_time;
					this.TimeDate();
					if(res.data.is_favorite===1){
						this.enjoyBlean=true;
					}
					uni.hideLoading();
					this.loding=true;
				}
			});
			}
			this.borwer(e);
		},
		filters: {
		  numFilter(value) {
		  // 截取当前数据到小数点后两位
			let realVal = parseFloat(value).toFixed(1)
			return realVal
		  }
		},
		methods:{
			// 记录分享
			imgpro(){
				var uid=uni.getStorageSync('userId')
				uni.request({
					url: 'https://appserver.dijiamai.net/thirdreturn/index/applog',
					method: 'GET',
					data: {
						event_type:'productmess',
						log_json:{'user_id':uid,'good_id':this.prGoodId}
					},
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			// 记录跳转
			imgpros(){
				var uid=uni.getStorageSync('userId')
				uni.request({
					url: 'https://appserver.dijiamai.net/thirdreturn/index/applog',
					method: 'GET',
					data: {
						event_type:'buy',
						log_json:{'user_id':uid,'buy_id':this.prGoodId}
					},
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			preimg(i){
				let urlimg=i;
				// console.log(urlimg);
				uni.previewImage({
					urls:this.bannerdata,
					current:urlimg
				})
			},
			roll(n,p,g,i,f,t){
				var that=this;
				var userid2=uni.getStorageSync('userId');
				if(this.peroid_status==1){
				// 小程序跳转
				uni.navigateToMiniProgram({
					  appId: this.appid,
					  path: this.pathges,
					  success(res) {
						// 打开成功
						// console.log('success');
						uni.request({
							url: requestip()+'/thirdreturn/index/getcustomergoods?goods_id='+that.prGoodId+'&customer_id='+userid2,
							method: 'GET',
							header:{
								"access-token":uni.getStorageSync('access-token'),
							    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
							   },
							data: {},
							success: res => {}
						});
						that.imgpros();
					  }
					})
				}else{
					that.imgpros();
					uni.showModal({
						title:'提示',
						content:'请您在完成分享任务后继续购买',
						success(res) {
							if(res.confirm){
								var k=t-f-p;
								uni.navigateTo({
									url:'../invite/invite?name='+n+'&price='+p+'&imgsrc='+g+'&id='+i+'&fan='+f+'&tuan='+t+'&dao='+k
								})
							}
						}
					})
				}
			},
			lookall(){
				this.look=!this.look
				if(this.arraydata==undefined){
					console.log(this.arraydata);
				}else{
					uni.navigateTo({
						url: '../comment/comment?id='+this.prGoodId
					});
				}
			},
			sharefriend(){
				// console.log("sharefriend:",e);
			},
			indexurl(){
				uni.switchTab({
					url: '../index/index'
				});
				// console.log('1');
			},
			// 浏览记录
			borwer(e){
				var uid=uni.getStorageSync('userId');
				uni.request({
					url: requestip()+'/v2/customer/wx/setrecord',
					method: 'GET',
					header:{
						"access-token":uni.getStorageSync('access-token'),
					    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
					   },
					data: {
						user_id:uid,product_id:e.id
					},
					success: res => {
						// console.log("浏览状态：",res);
					}
				});
			},
			// 相似商品初始化数据
			likegoodList(){
				this.messopid=uni.getStorageSync('goodLike');
				uni.request({
					url: requestip()+'/thirdreturn/index/classgoods?class_id='+this.messopid+'&page=1&is_sub=0&prent_id='+this.messopid,
					method: 'GET',
					header:{
						"access-token":uni.getStorageSync('access-token'),
					    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
					   },
					data: {},
					success: res => {
						// console.log("相似商品数据：",res.data);
						this.dataState=res.data.goods_search_response.goods_list;
					},
					fail: () => {},
					complete: () => {}
				});
			},
			// enjoyList
			enjoyList(){
				this.enjoyBlean=!this.enjoyBlean;
				if(this.enjoyBlean==true){
					this.addgood();
				}
				else{
					this.removegood();
				}
				// this.addgood();
			},
			// 添加收藏
			addgood(){
				var uid=uni.getStorageSync('userId');
				uni.request({
					url: requestip()+'/v2/duoduoke/product/favorite?user_id='+uid+'&product_id='+this.prGoodId,
					method: 'GET',
					header:{
						"Content-Type":"application/x-www-form-urlencoded",
						"access-token":uni.getStorageSync('access-token'),
					    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
					    },
					data: {},
					success: res => {
						// console.log('收藏结果:',res.data);
					},
					fail: () => {},
					complete: () => {}
				});
			},
			// 取消收藏
			removegood(){
				var that=this;
				this.enjoyBlean=true;
				var uid=uni.getStorageSync('userId');
				uni.showModal({
					title:'提示',
					content:'您确定删除收藏商品吗',
					success(res) {
						if(res.confirm){
							uni.request({
								url: requestip()+'/v2/duoduoke/product/removefavorite?product_id='+that.prGoodId+'&user_id='+uid,
								method: 'GET',
								header:{
									"Content-Type":"application/x-www-form-urlencoded",
									"access-token":uni.getStorageSync('access-token'),
                                    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
                                    },
								data: {},
								success: res => {
									// console.log('取消收藏结果:',res.data);
									that.enjoyBlean=false;
								},
								fail: () => {},
								complete: () => {}
							});
						}
						else{
							that.enjoyBlean=true;
						}
					}
				})
			},
			// 时间毫秒换算
			TimeDate(){
				this.startTime=timestampToTime(this.startTime).substr(0,10);
				this.endTime=timestampToTime(this.endTime).substr(0,10);
			},
			//跳转邀请页
			inintShare(n,p,g,i,f,t){
				var k=t-f-p;
				uni.navigateTo({
					url:'../invite/invite?name='+n+'&price='+p+'&imgsrc='+g+'&id='+i+'&fan='+f+'&tuan='+t+'&dao='+k
				})
			},
			// 升级跳
			rules(){
				uni.navigateTo({
					url:'../rules/rule'
				})
			},
			handleChange(e){
				// console.log(e);
				this.currentIndex=e.detail.current;
				this.eximgs=this.imgList[e.detail.current];
				// console.log('tu',this.eximgs);
			}
		},
		destroyed() {
			
		},
		onShow() {
			let openid=uni.getStorageSync('weixiOpenId');
			let e=uni.getStorageSync('goodId');
			// console.log("UserId",this.UserId);
			uni.request({
				url: requestip()+'/thirdreturn/index/getgoodsdetail?goods_id='+e+'&openid='+openid,
				method: 'GET',
				header:{
					"access-token":uni.getStorageSync('access-token'),
				    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
				   },
				data: {},
				success: res => {
					uni.hideLoading();
					console.log(res.data)
					this.data=res.data.goods_detail.goods_detail_response.goods_details[0];
					this.bannerdata=res.data.goods_detail.goods_detail_response.goods_details[0].goods_gallery_urls;
					this.dataurl=res.data.goods_url.goods_promotion_url_generate_response.goods_promotion_url_list[0].short_url;
					this.appid=res.data.goods_url.goods_promotion_url_generate_response.goods_promotion_url_list[0].we_app_info.app_id;
					this.pathges=res.data.goods_url.goods_promotion_url_generate_response.goods_promotion_url_list[0].we_app_info.page_path;
					this.loding=true;
					this.zongscore=(this.data.avg_desc+this.data.avg_serv+this.data.avg_lgst)/300;
					this.zongscore=Math.floor(this.zongscore*100)/100;
					this.serpct=Math.floor(this.data.serv_pct*100*100)/100;
					this.descpct=Math.floor(this.data.desc_pct*100*100)/100;
					this.lgstpct=Math.floor(this.data.lgst_pct*100*100)/100;
				}
			});
			 this.Lk=uni.getStorageSync('rank');
			 this.peroid_status=uni.getStorageSync('peroid_status');
			 // console.log(this.Lk);
			},
			// 相似商品无限加载
			onReachBottom() {
				this.pages+=1;
				this.showloadMore=true;
				uni.request({
					url: requestip()+'/thirdreturn/index/classgoods?class_id='+this.messopid+'&page='+this.pages+'&is_sub=0&prent_id='+this.messopid,
					method: 'GET',
					header:{
						"access-token":uni.getStorageSync('access-token'),
					    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
					   },
					data: {},
					success: res => {
						// console.log("相似商品无限加载:",res.data);
						for(var i=0;i<res.data.goods_search_response.goods_list.length;i++){
							this.dataState.push(res.data.goods_search_response.goods_list[i]);
						}
						this.showloadMore=false;
					},
					fail: () => {},
					complete: () => {}
				});
			},
			onBackPress(){
				// console.log(onBackPress);
			},
			 onShareAppMessage: function (res) {
				 var that=this;
				 var uid=uni.getStorageSync('userId');
				if (res.from === 'button') {
				  // 来自页面内转发按钮
				  if (res.target.id == 3) {
					return {
					  title: '【拼多多】原价'+that.data.min_group_price/100+'卷'+that.data.coupon_discount/100+'元，返'+that.dataPra.upgrade_rebate/100+'元，到手价'+(that.data.min_group_price-that.data.coupon_discount-that.dataPra.upgrade_rebate)/100,
					  path: 'pages/index/index?id='+that.prGoodId+'&oparentid='+uid+'&share=index&from_tag=good_detail&from_data='+that.prGoodId,
					  imageUrl:that.bannerdata[0]
					}
				  }
				  if (res.target.id == 2) {
					return {
					  title: '首页',
					  path: 'pages/index/index?oparentid='+uid+'&channel=1',
					  imageUrl:that.eximgs,
					  success(){
					  	console.log('分享回调数据',res)
					  }
					}
				  }
				}
              }
	}
</script>

<style lang="less">
	.productmess{
		width: 100%;
		overflow-x:hidden;
		padding-bottom: 120upx;
		background-color: #FFFFFF;
		swiper{
			height: 800upx;
		}
		// 相似商品
		.likeGood{
			background-color: #E1E1E1;
			.titles{
				width: 100%;
				height: 88upx;
				line-height: 88upx;
				background-color: #FFFFFF;
				border-left: 8upx solid #FD4739;
				font-size: 30upx;
				text-indent: 20upx;
				font-weight: bold;
				margin-bottom: 20upx;
			}
		}
	}
	.jiage,.goodscore,.goodname,.mallnum,.gooddesc,.bottombar{
		background-color: #FFFFFF;
	}
	.imgsty{
		width: 100%;
		height: 320upx;
	}
	.jiage{
		width: 100%;
	}
	.jflex{
		height: 30upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		color:#A6A6A6;
		font-size: 22upx;
		padding:40upx 22upx 20upx 22upx;
		.jia{
			>text:first-child{
				display: inline-block;
				background: linear-gradient(45deg,#FF9834,#FD4739);
				color:#fff;
				font-weight: bold;
				border-radius: 10upx;
				padding: 2upx 2upx;
			}
			>text:nth-child(2){
				font-size: 50upx;
				color:#FD4739;
			}
		}
		.jiaee{
		
			color:#FD4739;
			>text{
				display: inline-block;
				padding: 4upx;
				background-color: #E2423A;
				font-size: 20upx;
				border-radius: 6upx;
				color: #FFFFFF;
			}
		}
	}
	.jflexs{
		height: 40upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		color:#A6A6A6;
		font-size: 22upx;
		padding:0upx 22upx 20upx 22upx;
		view{
		text:first-child{
			display: inline-block;
			text-decoration: line-through;
			height: 40upx;
			line-height: 40upx;
		}
		.img{
			height: 40upx;
			background: url(../../static/juan0.png) no-repeat center;
			background-size: 80upx;
			width: 80upx;
			text-align: right;
			padding-right: 12upx;
			box-sizing: border-box;
			color:#FD4739;
			line-height: 40upx;
			margin: 0upx 20upx 0upx 20upx;
		}
		text:nth-child(3){
		   display: inline-block;
		   width: 100upx;
		   height: 40upx;
		   line-height: 40upx;
		   background-color:#FBEDE2;
           color:#F8611E;
		   text-align: center;
		   margin-right: 20upx;
		}
		view{
			display: block;
			width: 160upx;
			height: 40upx;
			line-height: 40upx;
			text-align: center;
			background-color:#FEF0EF;
            color:#E64B4A;
			position: relative;
			.imgs{
				position: absolute;
				top: 10upx;
				right: 4upx;
			}
		}
		}
	}
	.roll{
		box-sizing: border-box;
		width: 700upx;
		color:#FAE6E3;
		height: 130upx;
		background: url('../../static/bglingjuan.png') no-repeat center;
		background-size: 700upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin: 30upx 22upx 40upx 22upx;
		.rollnow{
			display: inline-block;
			margin-right: 38upx;
		}
	}
	.rollnum{
		width: 60%;
		box-sizing: border-box;
		height: 110upx;
		display: flex;
		flex-direction: row;
		// background-color: #FFFFFF;
		font-size: 28upx;
		color:#A6A6A6;
		margin-left: 40upx;
		>text{
			font-size: 70upx;
			color: #FFFFFF;
			line-height: 110upx;
			text{
				font-size: 30upx;
			}
		}
		.rolldata{
			width: 400upx;
			height: 80upx;
			line-height: 30upx;
			margin-top: 30upx;
			margin-left: 6upx;
			color:#FFFFFF;
		}
	}
	/* 物流 */
	.goodscore{
		font-size: 32upx;
		// margin-bottom: 20upx;
		box-sizing: border-box;
		padding: 0 20upx;
		.top{
			width: 100%;
			height: 120upx;
			display: flex;
			flex-direction: row;
			align-items: center;
			.house{
				width: 100%;
				height: 80upx;
				display: flex;
				flex-direction: row;
				align-items: center;
				.imgbg{
					// width: 60upx;
					height: 80upx;
					background-color: #A6A6A6;
				}
				.nameactive{
					text-align: center;
				}
			}
			.enter{
				border: 2upx solid #A6A6A6;
				width: 100%;
				height: 60upx;
				line-height: 60upx;
				text-align: center;
				border-radius: 14upx;
			}
		}
		.bottom{
			width: 100%;
			height: 80upx;
			display: flex;
			flex-direction: row;
			align-items: center;
			>view{
				text-align: center;
				font-size: 30upx;
				color: #636466;
				>text{
					display: inline-block;
					font-size: 26upx;
					background-color: #FCE5E5;
					color:#E2423A;
					width: 30upx;
					height: 32upx;
					line-height: 32upx;
				}
			}
		}
	}
	.scoretitle{
		padding: 48upx 0;
		text-align: center;
		font-size: 38upx;
		font-weight: bold;
		>text{
			color:#FD675B;
		}
	}
	.score{
		width: 100%;
		height: 200upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0 14upx;
		font-size: 26upx;
	}
	.scoremsg{
		width: 26%;
		height: 180upx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		view{
			text{
				color:#FD675B;
			}
		}
	}
	.scoremsg2{
		width: 50%;
		font-size: 26upx;
		height: 180upx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.scoremsg3{
		width: 18%;
        height: 180upx;
		font-size: 26upx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	// margin颜色
	.rollCount{
		width: 750upx;
		height: 20upx;
		background-color: #F3F3F3;
	}
	.beat{
		display: flex;
		flex-direction: row;
		margin-left: 10upx;
	}
	.beat>text{
		width: 20%;
		font-size: 26upx;
	}
	.beatbg{
		width: 60%;
		height: 22upx;
		margin-top:8upx;
		background-color: #EFF2F7;
		border-radius: 14upx;
	}
	// 商品名字
	.goodname{
		width: 700upx;
		margin: 0 auto;
		>text:first-child{
			display: inline-block;
			padding: 2upx;
			background-color: #E2423A;
			font-size: 26upx;
			border-radius: 6upx;
			color: #FFFFFF;
			// margin-right: 20upx;
		}
		>text{
			word-break: break-all;
		}
	}
	/* 商品评价 */
	.reviews{
		box-sizing: border-box;
		width: 100%;
		height: 90upx;
		line-height: 90upx;
		padding-left: 20upx;
		font-weight: bold;
		margin-bottom: 20upx;
		border-left:8upx solid #FD4739;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.reviews .allmsg{
		width: 50%;
		height: 90upx;
		height: 90upx;
		text-align: right;
		box-sizing: border-box;
		padding-right: 60upx;
		font-size: 30upx;
	}
	/* 商品信息 */
	.gooddesc .goods_desc{
		width: 700upx;
		margin: 0 20upx;
		font-size: 30upx;
		line-height: 54upx;
		>text{
			word-break: break-all;
			text-align: left;
		}
	}
	.gooddesc .descimg>image{
		width: 100%;
		height: 600upx;
		margin-top: 20upx;
	}
	/* bottombar */
	.productmess .bottombar{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 120upx;
		color:#666666;
		display: flex;
		flex-direction: row;
		background-color: #FBFBFB;
		z-index: 100;
		padding-bottom: 28upx;
		border-radius: 0upx;
	}
	.productmess .bottombar .indexbar{
		width: 28%;
		height: 120upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		.indexjoy{
			width: 50%;
			height: 120upx;
		}
		.enjoy{
			box-sizing: border-box;
			width: 50%;
			height: 120upx;
			padding:22upx 0;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			font-size:24upx;
			>image{
				width: 40upx;
				height:40upx;
				z-index: 100;
			}
		}
	}
	.productmess .bottombar .sharemess:nth-child(2){
		width: 40%;
		background-color: #FEB04C;
		line-height: 120upx;
		color: #FFFFFF;
		text-align: center;
	}
	.productmess .bottombar .sharemess:nth-child(2)>button{
		border: none;
		background-color: #FEB04C;
		height: 120upx;
		color: #FFFFFF;
		display: flex;
		flex-direction: column;
		border-radius: 0upx;
	}
	.buttonfriend>text:first-child{
		font-size: 36upx;
		height: 40upx;
		line-height: 106upx;
	}
	.buttonfriend>text:nth-child(2){
		font-size: 22upx;
		height: 40upx;
		// text-align: top;
		line-height: 110upx;
	}
	.productmess .bottombar .sharemess:nth-child(3){
		width: 32%;
		background-color: #FD4F42;
		height: 120upx;
		color: #FFFFFF;
		text-align: center;
		display: flex;
		flex-direction: column;
		
	}
	.productmess .bottombar .sharemess:nth-child(3)>text:first-child{
		font-size: 36upx;
		height: 80upx;
		line-height: 106upx;
	}
	.productmess .bottombar .sharemess:nth-child(3)>text:nth-child(2){
		font-size: 22upx;
		height: 40upx;
	}
	.font22{
		font-size: 0.6rem;
		color:#FFFFFF;
	}
	/* 遮罩层 */
	.uni-mask {
	    background: rgba(0, 0, 0, 0.6);
	    position: fixed;
	    width: 100%;
	    height: 100%;
	    left: 0;
	    top: 0;
	    z-index: 666;
	}
	.uni-banner {
	    width: 70%;
	    position: fixed;
	    left: 50%;
	    top: 50%;
	    background: #FFF;
	    border-radius: 26upx;
	    z-index: 999;
	    transform: translate(-50%, -50%);
		swiper{
			height: 330px;
		}
		.btnshare{
			display: flex;
			height: 80upx;
			width: 100%;
			box-sizing: border-box;
			padding: 0 20upx;
			margin-bottom: 20upx;
			button{
				width: 46%;
				height: 80upx;
				font-size: 30upx;
				padding: 0;
			}
		}
	}
	// 3D轮播样式
	.imageContainer {
		width: 100%;
		/* height: 500rpx; */
		/* background: #000; */
		height: 325upx;
		background-color: #fff;
	}
	
	.swiperitem {
		/* height: 500rpx; */
		height: 255upx;
		padding: 0upx 10upx;
		box-sizing: border-box;
		position: relative;
		.swiperText {
			display: flex;
			flex-direction: column;
			align-items: center;
			position: absolute;
			top: 56upx;
			left: 51upx;
			z-index: 998;
			width:162upx;
			height:163upx;
			background:rgba(255,255,255,1);
			border-radius:8upx;
			padding:10upx;
			.name {
				font-size:26upx;
				font-weight:500;
				color:rgba(253,57,91,1);
				line-height:37upx;
				margin-bottom: 10upx;
			}
			.zq,.cz {
				font-size:20upx;
				color:rgba(253,57,91,1);
				line-height:35upx;
			}
			.addNl {
				width:120upx;
				height:26upx;
				background:rgba(253,57,91,1);
				border-radius:13upx;
				font-size:20upx;
				font-weight:500;
				color:rgba(255,255,255,1);
				text-align: center;
				line-height: 26upx;
				margin-top: 10upx;
			}
			
		}
	}
	
	.itemImg {
		position: absolute;
		width: 95%;
		/* height: 380rpx; */
		height: 550upx;
		border-radius: 15rpx;
		z-index: 5;
		opacity: 0.7;
		top: 5%;
		box-shadow:0px 4upx 15upx 0px rgba(153,153,153,0.24);
	}
	
	.swiperactive {
		width: 95%;
		opacity: 1;
		z-index: 10;
		/* height: 430rpx; */
		height: 600upx;
		top: 1%;
		transition: all .2s ease-in 0s;
	}
	
	.zhankai{
		text-align: center;
		.iconfont{
			margin-left: 10upx;
		}
	}
</style>
