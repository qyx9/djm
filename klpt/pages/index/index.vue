<template>
	<view class="contents">
		<!-- 导航栏样式 -->
		<home-item></home-item>
		<view class="Navigation" :style="{height:windowHeight*0.12+'px'}">
			<image src="../../static/logos.png" mode="widthFix" :style="{top:windowHeight*0.062+'px'}"></image>
		</view>
		<!-- 搜索 -->
        <view class="index" :style="{top:windowHeight*0.12+'px'}">
        	<view class="inputs" >
				<!-- <input type="text" value="输入标题或商品关键字" /> -->
				<view class="imgsearch" @click="searchbox"><image src="../../static/search.png" mode=""></image><text>输入标题或商品关键字</text></view>
				<image src="../../static/msg.png" @click="lookmess"></image>
				<view class="dian" v-if="looks"></view>
        	</view>
        </view>
		<!-- 菜单开始 -->
		<scroll-view  class="uni-swiper-tab" scroll-x  :style="{top:windowHeight*0.12+40+'px'}">
			<view v-for="(tab,index) in tabmenus" :key="index" :class="tabIndex==index ?'swiper-tab-list activees' : 'swiper-tab-list'"
			 :data-current="index" @click="tapTab(tab,index)">{{tab.opt_name}}
			 <view v-if='tabIndex==index' class="activeline"></view>
			 </view>
		</scroll-view>
		<!-- 分类跳转 -->
		<view class="feleNa" @click="feleNas" :style="{top:windowHeight*0.12+45+'px'}">
			<image src="../../static/menu.png" mode="widthFix"></image>
		</view>
		<!-- 距离菜单margin -->
		<view class="tabmargin" :style="{marginTop:windowHeight*0.12+85+'px'}"></view>
		  <view v-for="(item,index) in tabmenus" v-if="tabIndex==index && allList==true" :key="index" v-show="tabIndex!=0">
			  <good-list :propsdata="propsdata" :propsdata2="propsdata2" :propsDatas2='propsData2' :propMu='mainmuen' :router='routers'></good-list>
		  </view>
		   <view v-if="tabIndex!=0" class="indexMain">
			  <view :class="fixmenu?'decscmenu descposit':'decscmenu'" :style="{top:windowHeight*0.12+82+'px'}">
				<scroll-view scroll-x  class="scrollmenu">
					<view class="scrollview" v-for="(item,index) in descmenu" :key="index" 
					:class="Tabindex==index?'actives':''" @click="menuclicks(riseBlean?item.num:item.num2,index)"><text >{{item.name}}</text> 
					<view v-if='Tabindex==index' class="activeline"></view>
					<view  class="scrollList"><view hover-stop-propagation v-if='index!=0 && index!=2' :class="riseBlean && Tabindex==index?'rises':''">∧</view>
					<view hover-stop-propagation v-if='index!=0 && index!=2' :class="!riseBlean && Tabindex==index?'drops':''">∨</view></view>
					</view>
					<view :class="flexblean?'iconflex':'iconflex2'" @click="flexgood">
						<image :src="flexblean?imgicon1:imgicon2" mode="aspectFill"></image>
					</view>
				</scroll-view>
			  </view>
			  <good-flex :data='propsData2' :flexblean='flexblean' :Lk='Lk'></good-flex>
		  </view>
		  <!-- 精选部分 -->
		  <view class="selects" v-if="tabIndex==0 && allList==true">
		  <swiper :autoplay="true" :interval='5000'  :duration="300" circular class="banerimg" indicator-dots indicator-active-color="#FD4739">
		  	<swiper-item v-for="(imgs,index) in banimgs" :key="index">
		  		<view class="navigate" @click="navgator(imgs.id,imgs.name)"><image :src="imgs.image_url" mode="widthFix"></image></view>
		  	</swiper-item>
		  </swiper>
		  <!-- fei -->
		  <view class="shop" @click="adban">
		  	<image src="https://img.dijiamai.net/media/catalog/category/appimg/index/index991.png" mode="widthFix"></image>
		  </view>
		  <view class="relist">
		  	<view class="relistFirst" @click="freeships('超级省',1)">
		  		<text>超级省</text>
				<text>劵后价更划算</text>
				<image src="https://img.dijiamai.net/media/catalog/category/appimg/index/index2.jpg" mode="widthFix"></image>
		  	</view>
		  	<view class="relistTi">
		  		<view class="market" @click="freeships('品牌清仓',2)">
					<view class="title">
						<view >品牌清仓</view>
						<view>好货超高性价比</view>
					</view>
					<image src="https://img.dijiamai.net/media/catalog/category/appimg/index/index1.jpg" mode="aspectFill"></image>
				</view>
		  		<view class="market" @click="freeships('9块9包邮',3)">
					<view class="title">
						<view  class="">9块9包邮</view>
						<view >低价抢好货</view>
					</view>
					<image src="https://img.dijiamai.net/media/catalog/category/appimg/index/index3.jpg" mode="aspectFill"></image>
				</view>
		  	</view>
		  </view>
		  <view class="bg"></view>
		  <!-- 活动倒计时 -->
		  <view class="timeBack">
			  <view><image src="../../static/xianshimai.png" mode="widthFix"></image></view>
             <uni-countdown :show-day="false" :second="3000" @timeup="timeup" backgroundColor="#000000" color="#ffffff"></uni-countdown>
		  </view>
		  <!-- 排序 -->
		  <view :class="topIDF?'topPosition decscmenujs':'NonePosition decscmenujs'">
		      <view class="descName" v-for="(item,index) in descmenu" :key="index"  @click="descMenujs(riseBleanjs && tabIndexjs==index?item.num:item.num2,index,index)" 
		  	 :class="tabIndexjs==index?'activedesc':''"><text>{{item.name}}</text>
		  	 <view v-if='tabIndexjs==index' class="activeline"></view>
		  	 <view  class="scrollList"><view  v-if='index!=0 && index!=2' :class="riseBleanjs && tabIndexjs==index?'rises':''" class="fnt">∧</view>
		  	 <view v-if='index!=0 && index!=2' :class="!riseBleanjs && tabIndexjs==index?'drops':''" class="fnt">∨</view></view>
		  	 </view>  
		  	<view :class="flexblean?'iconflex':'iconflex2' " @click="flexgoodjs">
		  		<image :src="flexbleanjs?imgicon1:imgicon2" mode="aspectFill"></image>
		  	</view>				 
		  </view>
		  <good-flex :data='choiceData' :flexblean="flexbleanjs" ranblean="true" :router='routers' :Lk='Lk'></good-flex>
		  </view>
		  <!-- 弹出层 -->
		  <view class="uni-banner" style="background:#FFFFFF;" v-if="bannerShow" @click.stop="copyMove">
		      <view style="justify-content:flex-end;" @tap="closeBanner">
		      </view>
		      <view>
		          <image src="../../static/s0001.png" style="width:100%;" mode="widthFix"></image>
		      </view>
			  <view style="font-size: 0.8rem;width: 100%; text-align: center;">{{copydatas}}</view>
		      <view style="padding:20upx 0; padding-bottom:68upx;">
		          <button type='warn' class="mini-btn" style="background:#F6644D; margin:0 80upx;" @click="sNavto(copydatas)">搜拼多多</button>
		      </view>
			  <!-- 其他搜索 -->
			<view class="searchContent">
				<!-- #ifndef MP-WEIXIN -->
				<view class="boxO">
					<image src="../../static/taobao.png" mode="widthFix"></image>
					<view >淘宝</view>
				</view>
				
				<view class="boxO">
					<image src="../../static/jidong.png" mode="widthFix"></image>
					<view >京东</view>
				</view>
				<!-- #endif -->
			</view>
		  </view>
		  <view class="uni-mask" v-if="bannerShow" @click="closeCopy" @touchmove.stop.prevent="copyMove">
			    <view class="closesearn" @click="closeCopy"><image src="../../static/cha.png" mode="widthFix"></image></view>
		  </view>
		  <!-- 弹出层 -->
		<load-more v-if="showloadMore" :status="loadMoreText==='加载中...'?'loading':''" ></load-more>
		<back-top :topblean="topblean"></back-top>
		 <eject-frame v-if='PopuB' :imgUrl='url' :PositionStatus="p" :imgStatus='imgStatus' :videoUrl='url'></eject-frame>
		 <view class="btnshare" @click="nowIn" style="bottom: 84upx;right: 20upx;"><text>邀请</text> <text>升级</text></view>
	</view>
</template>

<script>
	import BackTop from '../../components/backtop/backTop.vue';
	import uniCountdown from '@/components/uni-countdown/uni-countdown.vue';
	// 引入api接口
	import {requestip,headerList,inspects} from '../api/api.js';
	var uid=uni.getStorageSync('userId');
	export default {
		components:{
			BackTop,
			uniCountdown
		},
		data() {
			return {
				Tabindex:0,
				fixmenu:false,
				riseBlean:false,
				descmenu:[
					{name:"综合",num:0,num2:0},
					{name:"价格",num:4,num2:3},
					{name:"销量",num:6,num2:6}
				],
				tabIndexjs:0,
				riseBleanjs:false,
				riseBleanjs2:true,
				imgicon1:"../../static/hengx2.png",
				imgicon2:"../../static/shu2x.png",
				flexbleanjs:true,
				flexblean:true,
				tabmenus:'',
				propsdata:'',
				propsdata2:'',
				propsData2:[],
				tabIndex:0,
				pages:1,
				showloadMore:false,
				loadMoreText:"加载中...",
				allList:false,
				topblean:false,
				descblean:false,
				banimgs:'',
				bannerShow:false,
				copydatas:'',
				muen:false,
				mainmuen:true,
				choiceData:[],
				descnumjs:0,
				descnum:0,
				iphones:false,
				routers:'',
				windowHeight:0,
				T:false,
				Lk:1,
				looks:false,
				url:'',
				p:'leftBottom',
				imgStatus:true,
				PopuB:false
			}
		},
		onLoad:function(e) {
		    this.phoneInfo();
			uni.setStorageSync('e',e);
			this.choiceInit();
			this.perLk();
			uni.hideShareMenu()
			uni.setStorageSync('from_tag',e.from_tag);
			uni.setStorageSync('from_data',e.from_data);
			const scene = decodeURIComponent(e.scene);
		   if(e.share=='index'){
				var get=uni.setStorageSync('friendId');
				var opId1=uni.getStorageSync('parentId');
				var PiP=JSON.parse(e.oparentid?e.oparentid:-1);
				var oparentid=opId1!=''?opId1:PiP;
				var opId1=uni.getStorageSync('parentId');
				var channel=e.channel?e.channel:1;
				uni.setStorageSync('channel',channel);
				// 设置页面传的值
				if(PiP!=-1){
					uni.setStorageSync('parentId',oparentid);
					uni.setStorageSync('friendId',oparentid);
				}
				uni.navigateTo({
					url: '../productmess/productmess?id='+e.id+'&oparid='+e.oparentid
				});
			}else if(scene!=='undefined'){
				// const scene = decodeURIComponent(e.scene);
				var p=scene;
				// console.log('p',p);
				var a=p.split(',')[0]//获取的值是：
                var b=p.split(',')[1]//获取的值是：
				// console.log('a',a);
				// console.log('b',b);
				uni.setStorageSync('parentId',JSON.parse(a));
				uni.setStorageSync('friendId',JSON.parse(a));
				uni.setStorageSync('channel',b);
				this.indexInit(e);
				var openid=uni.getStorageSync('weixiOpenId');
				// #ifdef MP-WEIXIN
			    if(openid==''){
			    	uni.reLaunch({
			    		url:'../login/login'
			    	})
			    }
				// #endif
			}else{
				var opId1=uni.getStorageSync('parentId');
				var PiP=JSON.parse(e.oparentid?e.oparentid:-1);
				var oparentid=opId1!=''?opId1:PiP;
				var opId1=uni.getStorageSync('parentId');
				var channel=e.channel?e.channel:1;
				uni.setStorageSync('channel',channel);
				// 设置页面传的值
				if(PiP!=-1){
					uni.setStorageSync('parentId',oparentid);
					uni.setStorageSync('friendId',oparentid);
				}
				var openid=uni.getStorageSync('weixiOpenId');
				// #ifdef MP-WEIXIN
				if(openid==''){
					uni.reLaunch({
						url:'../login/login'
					})
				}
				// #endif 
			}
			 this.indexInit(e);
			 this.choiceInit();
			 this.userId();
		},
		methods: {
			indexInit(e){
			// #ifndef APP-PLUS
			 uni.showLoading({
				title:'加载中...'
			})
			// #endif
			this.selections();
			// 初始化数据
			this.propszero();
			// 排序初始化
			uni.setStorageSync('descnum',0);
			// console.log('页面的数据传递',e);
			// 邀请页面传值
			// 扫二维码传值
// 			var opId1=uni.getStorageSync('parentId');
			var io=uni.getStorageSync('parentId1');
			// console.log("io:",io)
			// var oparentid=opId1?opId1:e.oparentid;
			// 渠道
			// var channel=e.channel?e.channel:1;
			// uni.setStorageSync('channel',channel);
			// 设置页面传的值
			// uni.setStorageSync('parentId',oparentid);
			// console.log('邀请页面值:',friendId);
			// 目录请求
			
			this.tabmenuList();
			// 初始化数据
			
			uni.setStorageSync('optId',1)
			// 返回Id
			var backId=uni.getStorageSync('optId');
			uni.setStorageSync('backoptId',backId);
			uni.request({
				url: requestip()+'/product/index/class',
				method: 'GET',
				header:{
					"access-token":uni.getStorageSync('access-token'),
				    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
				   },
				data: {},
				success: res => {
					// console.log("初始化数据：",res.data)
					this.propsdata=res.data[0].child.splice(0,9);
					this.propsdata.push({name:'查看更多',topTid:true,img:'../../static/more.png'});
					this.propsdata2=res.data;
					this.allList=true;
					uni.hideLoading();
				}
			});
			},
            // 菜单目录
            tabmenuList(){
				   uni.request({
					url: requestip()+'/thirdreturn/index/goodsopt',
					method: 'GET',
					header:{
						"access-token":uni.getStorageSync('access-token'),
					    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
					   },
					data: {},
					success: res => {
						// console.log("菜单目录:",res.data);
						this.tabmenus=res.data.goods_opt_get_response.goods_opt_list;
						var unOne={opt_name:'精选',opt_id:1}
						this.tabmenus.unshift(unOne);
						var unEnd={opt_name:'000',opt_id:1}
						this.tabmenus.push(unEnd);
					}
				   });
            },
			// 点击菜单获取数据
		   tapTab(t,i){
				   this.tabIndex=i;
				   var optId=t.opt_id;
				   this.propsdata='';
				   this.propsdata2='';
				   uni.showLoading({
				   	title:'加载中...'
				   })
				   uni.setStorageSync('optId',optId);
				   // 排序初始化
				   uni.setStorageSync('descnum',0);
				   // 返回Id
				   uni.setStorageSync('backoptId',optId);
				   // console.log(this.tabIndex);
				   // console.log("商品的opId:",optId);
				   this.propsData2='';
				   this.pages=1;
				   this.Tabindex=0;
				   // 初始化数据
				   this.propszero();
				   uni.request({
					url: requestip()+'/product/index/class',
					method: 'GET',
					header:{
						"access-token":uni.getStorageSync('access-token'),
					    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
					   },
					data: {},
					success: res => {
						// console.log(res.data)
						if(i>0){
							this.propsdata=res.data[i-1].child.splice(0,9);
							this.propsdata.push({name:'查看全部',topTid:true,img:'../../static/more.png'});
						}
						else if(i==1){
							this.propsdata=res.data[1].child.splice(0,9);
							this.propsdata.push({name:'查看全部',topTid:true,img:'../../static/more.png'});
						}
						this.propsdata2=res.data;
						uni.hideLoading();
					},
					fail: () => {},
					complete: () => {}
				   });
				   // 菜单日志发送
				   var uid=uni.getStorageSync('userId');
				   uni.request({
				   	url: 'https://appserver.dijiamai.net/thirdreturn/index/applog',
				   	method: 'GET',
				   	data: {
						event_type:'click_opt',
						log_json:{'user_id':uid,'opt_id':t.opt_id}
					}
				   });
				  uni.pageScrollTo({
						scrollTop: 0,
						duration: 10
					});
	      },
		  nowIn(){
		  	uni.navigateTo({
		  		url:'../invite/invite?gblean=true'
		  	})
		  },
		  // 滚动
		  changeTab(e){
			  // console.log("滚动;",e);
		  },
		  // input 聚焦跳转
		  searchbox(){
			  uni.navigateTo({
			  	url:'../searchinput/searchinput'
			  })
		  },
		  // 分类跳转
		  feleNas(){
			  uni.navigateTo({
			  	url:'../feilei/feilei'
			  })
		  },
		  // 精选请求
		  selections(){
			  uni.request({
			  	url: requestip()+'/thirdreturn/index/themelist?page=1',
			  	method: 'GET',
				header:{
					"access-token":uni.getStorageSync('access-token'),
				    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
				   },
			  	data: {},
			  	success: res => {
					var FecshopUuid=res.header["Fecshop-Uuid"];
					inspects(FecshopUuid);
			  		// console.log('初始化banner数据:',res.data.theme_list_get_response.theme_list)
			  		this.banimgs=res.data.theme_list_get_response.theme_list
			  	}
			  });
		  },
		  // 初始化数据
		  propszero(){
		  	this.opt_id=uni.getStorageSync('optId');
		  	uni.request({
		  		url: requestip()+'/thirdreturn/index/classgoods?class_id='+this.opt_id+'&page=1&is_sub=1&prent_id='+this.opt_id,
		  		method: 'GET',
				header:{
					"access-token":uni.getStorageSync('access-token'),
				    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
				   },
		  		data: {},
		  		success: res => {
		  			// console.log("zy初始化数据",res.data);
		  			this.propsData2=res.data[1].goods_search_response.goods_list;
		  		}
		  	});
		  },
		  // 精选数据初始化
		  choiceInit(){
			  uni.request({
			  	url: requestip()+'/thirdreturn/index/getduoduogoods?page=1&sort_type=0',
			  	method: 'GET',
				header:{
					"access-token":uni.getStorageSync('access-token'),
				    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
				   },
			  	data: {},
			  	success: res => {
					// console.log('精选数据初始化',res.data);
					this.choiceData=res.data.goods_search_response.goods_list;
				},
			  	fail: () => {},
			  	complete: () => {}
			  });
		  }, 
		  // free
		  freeships(m,n){
			  uni.navigateTo({
			  	url:'../freeship/freeship?name='+m+'&num='+n
			  })
		  },
		  // 首页数据下拉classgoodsbysort
		  indexbottom(otp_id,descnum){
			  uni.request({
			  	url: requestip()+'/thirdreturn/index/classgoodsbysort?class_id='+otp_id+'&page='+this.pages+'&is_sub=0&prent_id='+otp_id+'&sort_type='+descnum,
			  	method: 'GET',
				header:{
					"access-token":uni.getStorageSync('access-token'),
				    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
				   },
			  	data: {},
			  	success: res => {
			  		// console.log("触底数据：",res.data);
			  		for(var i=0;i<res.data.goods_search_response.goods_list.length;i++)
			  		{
			  			this.propsData2.push(res.data.goods_search_response.goods_list[i]);
			  		}
			         this.showloadMore=false;
			  	},
			  	fail: () => {},
			  	complete: () => {}
			  });
		  },
		  // 精选下拉
		  choicebottom(pages,descnumjs){
			  uni.request({
			  	url: requestip()+'/thirdreturn/index/getduoduogoods?page='+pages+'&sort_type='+descnumjs,
			  	method: 'GET',
				header:{
					"access-token":uni.getStorageSync('access-token'),
				    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
				   },
			  	data: {},
			  	success: res => {
			  			// console.log('精选下拉',res.data);
						for(var i=0;i<res.data.goods_search_response.goods_list.length;i++)
						{
							this.choiceData.push(res.data.goods_search_response.goods_list[i]);
						}
						 this.showloadMore=false;
			  			},
			  	fail: () => {},
			  	complete: () => {}
			  });
		  },
		  // 关闭剪切搜索
		  closeCopy(){
			  this.bannerShow=false;
			},
			sNavto(n){
				uni.navigateTo({
					url:'../searchinput/searchinput?name='+n
				})
			},
			// 关闭下拉
			sotpre(){
				setTimeout(()=>{
					var e=uni.getStorageSync('e');
					this.indexInit(e);
					uni.stopPullDownRefresh();
				},300)
			},
			// 精选轮播跳转
			navgator(i,n){
				uni.navigateTo({
					url:'../bannerpush/bannerpush?id='+i+'&name='+n
				})
			},
			// 精选点击
			descMenujs(t,i){
				this.tabIndexjs=i;
				this.riseBleanjs=!this.riseBleanjs;
				this.riseBleanjs2=!this.riseBleanjs2;
				// this.choiceData=[];
				this.descnumjs=t;
				this.pages=1;
				uni.request({
					url: requestip()+'/thirdreturn/index/getduoduogoods?page=1&sort_type='+this.descnumjs,
					method: 'GET',
					header:{
						"access-token":uni.getStorageSync('access-token'),
					    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
					   },
					data: {},
					success: res => {
						// console.log("descjs数据:",res.data);
						this.data=res.data.goods_search_response.goods_list;
						this.choiceData=res.data.goods_search_response.goods_list;
						this.showloadMore=false;
					},
					fail: () => {},
					complete: () => {}
				});
			},
			// 精选切换页面样式
			flexgoodjs(){
				this.flexbleanjs=!this.flexbleanjs;
			},
			// 广告跳转
			adban(){
				uni.switchTab({
					url:'../rule/rule'
				})
			},
			// 手机型号获取
			phoneInfo(){
				var that=this;
				uni.getSystemInfo({
					success(res) {
						that.windowHeight=res.windowHeight;
					}
				})
			},
			// 路径
			routerInit(){
				var pages = getCurrentPages();
				var page = pages[pages.length - 1];
				var router=page.route;
				// console.log('router:',router);
				this.routers=router;
			},
			copyMove(){},
			menuclicks(i,n){
				this.Tabindex=n;
				// 排序方式
				this.descnum=i;
				uni.setStorageSync('descnum',i);
				// this.propsDb=false;
				this.riseBlean=!this.riseBlean;
				// 获取opt_id;
				this.opt_id=uni.getStorageSync('optId');
				this.propsDatas2=[];
				this.propsData2=[];
				this.showloadMore=true;
				this.pages=1;
				uni.request({
					url: requestip()+'/thirdreturn/index/classgoodsbysort?class_id='+this.opt_id+'&page='+this.pages+'&is_sub=0&prent_id='+this.opt_id+'&sort_type='+this.descnum,
					method: 'GET',
					header:{
						"access-token":uni.getStorageSync('access-token'),
					    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
					   },
					data: {},
					success: res => {
						// console.log("主页的排序数据2：",res.data);
						this.propsData2=res.data.goods_search_response.goods_list;
						this.showloadMore=false;
					},
					fail: () => {},
					complete: () => {}
				});
			},
			// 布局切换
			flexgood(){
				this.flexblean=!this.flexblean;
			},
			// 个人信息
			perLk(){
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
						// console.log("个人数据:",res.data);
						uni.setStorageSync('rank',res.data.data.user_info.rank);
						uni.setStorageSync('peroid_status',res.data.data.user_info.peroid_status);
						this.Lk=res.data.data.user_info.rank;
					}
				});
			},
			//消息推送
			lookmess(){
				this.looks=false;
			},
			// 弹出层数据请求
			Popup(){
				var that=this;
				uni.request({
					url: requestip()+'/thirdreturn/index/getguide',
					method: 'GET',
					data: {
						page_name:'index',
						user_id:uid
					},
					success: res => {
						// console.log('弹出层数据',res.data);
						this.url=res.data.url;
						this.p=res.data.position;
						this.imgStatus=res.data.status;
						setTimeout(function(){
						 that.PopuB=res.data.index_switch;
						},2000)
						uni.setStorageSync('rank',res.data.rank);
						uni.setStorageSync('peroid_status',res.data.peroid_status);
					},
					fail: () => {},
					complete: () => {}
				});
			},
			// userId发送
			userId(){
				uni.request({
					url: requestip()+'/thirdreturn/index/onload?user_id='+uid,
					method: 'GET'
				});
			}
		},
		onShow() {
			var that=this;
			var backopid=uni.getStorageSync('backoptId');
			uni.setStorageSync('optId',backopid);
			uni.getClipboardData({
				success: function (res) {
					// console.log(res.data);
					if(res.data==uni.getStorageSync('copyData')){
						that.bannerShow=false;
					}
					else if(/^[0-9]+$/.test(res.data)){
						that.bannerShow=false
					}
					else if(res.data!='' && res.data!=null && res.data.length<61){
						that.bannerShow=true;//开关
						var sw=uni.getStorageSync('switch2')===''?true:uni.getStorageSync('switch2')
						that.bannerShow=sw;
						uni.setStorageSync('copyData',res.data);
						that.copydatas=res.data;
					}
					else{
						that.bannerShow=false;
					}
				}
			});
			this.routerInit();
			var openid=uni.getStorageSync('weixiOpenId');
			this.phoneInfo();
			this.Popup();
		},
		onPageScroll(e) {
			var that=this;
			// console.log(e.scrollTop);
			if(e.scrollTop>200){
				that.topblean=true;
				 this.fixmenu=true;
			}else{
				that.topblean=false;
				 this.fixmenu=false;
			}
			// console.log(e.scrollTop);
		},
		// 触底
		onReachBottom() {
			this.pages+=1;
			this.showloadMore=true;
			var otp_id=uni.getStorageSync('optId');
			var descnum=uni.getStorageSync('descnum');
			if(this.tabIndex==0){
				this.choicebottom(this.pages,this.descnumjs);
			}else{
				this.indexbottom(otp_id,descnum);
			}
			
		},
		// 下拉刷新监听函数
		onPullDownRefresh() {
			// console.log("onPullDownRefresh")
			this.sotpre();
		}
	}
</script>

<style lang="less">
	// 分类
	.feleNa{
		position: fixed;
		top:220upx;
		right: 0upx;
		width: 110upx;
		height: 80upx;
		background-color: #FFFFFF;
		z-index: 666;
		text-align: center;
		line-height: 80upx;
		image{
			width: 40upx;
			height: 40upx;
		}
	}
	.contents{
		// 防止页面抖动
		height:100%;
		overflow:auto;
		margin: 0;
		// padding-bottom: 60upx;
		// -webkit-overflow-scrolling: touch;
		.Navigation{
			height: 132upx;
			width: 100%;
			background-color: #FD4739;
			position: fixed;
			top:0;
			z-index: 10000;
			>image{
				position: relative;
				top: 60upx;
				left: 20upx;
				width: 270upx;
				height: 100upx;
			}
		}
		.tabmargin{
			margin-top: 300upx;
		}
		.activees {
			position: relative;
			color: #FD4739;
			.activeline{
				position: absolute;
				top:82upx;
				right: 30upx;
				width: 44upx;
				height: 4upx;
				background-color: #F70009;
			}
		}
	}
	.index{
		height: 84upx;
		display: flex;
		flex-direction:row;
		justify-content: space-between;
		align-items: center;
		background-color: #FD4739;
		position: fixed;
		top:130upx;
		z-index: 200;
		width: 100%;
		.imgicon{
			width: 15%;
			text-align: center;
			>image{
				width: 68upx;
				height: 80upx;
				margin-top: 12upx;
			}
		}
		.imgicons{
			width: 15%;
			text-align: center;
			>image{
				width: 48upx;
				height: 80upx;
			}
		}
		.inputs{
			width: 84%;
			position: relative;
			height: 56upx;
			line-height: 48upx;
			border-radius: 16upx;
			margin-left: 3%;
			background-color: #FFFFFF;
			.imgsearch{
				>image{
					position: absolute;
					top: 12upx;
					left: 22upx;
					width: 30upx;
					height: 30upx;
				}
				>text{
					font-size: 24upx;
					color:#CFCFCF;
					margin-left: 68upx;
					height: 30upx;
				}
			}
			>image{
				position: absolute;
				top: 10upx;
				right: -66upx;
				width: 40upx;
				height: 40upx;
				z-index: 100;
			}
			.dian{
				position: absolute;
				top: 10upx;
				right: -68upx;
				width: 16upx;
				height: 16upx;
				border-radius: 50%;
				background-color: red;
				z-index: 101;
			}
// 			input{
// 				width: 84%;
// 				background-color: #FFFFFF;
// 				padding-left: 60upx;
// 				height: 56upx;
// 				color:#CFCFCF;
// 				font-size: 24upx;
// 			}
		}
		//搜索框
		.inputbox{
			box-sizing: border-box;
			height: 16upx;
			font-size: 24upx;
			border-radius: 28upx;
			text-indent: 10upx;
			background-color: #FFFFFF;
			padding-left:50upx;
		}
	}
	// 菜单
	.uni-swiper-tab {
		width: 100%;
		white-space: nowrap;
		line-height: 90upx;
		height: 90upx;
		position: fixed;
		top: 210upx;
		/* #ifdef H5 */
		   top:88px;
		/* #endif  */
		z-index: 200;
		background-color: #FFFFFF;
		// 菜单数据格式
		.swiper-tab-list {
			font-size: 30upx;
			width: 100upx;
			display: inline-block;
			text-align: center;
			border-bottom: 4upx solid #FD4739;
		}
	}
		.relist{
		box-sizing: border-box;
		width: 100%;
		height: 290upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		border-top:2upx #EEEEEE solid;
	}
	.relistFirst{
		width: 50%;
		border-right: 2upx #EEEEEE solid;
		border-bottom: 2upx #EEEEEE solid;
		text-align: center;
		>text:first-child{
			font-size: 34upx;
			font-weight: bold;
			display: block;
			margin-top: 30upx;
			background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(rgba(234, 70, 108, 1)), to(rgba(254, 127, 70, 1)));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
		}
		>text:nth-child(2){
			color: #CFCFCF;
			font-size: 20upx;
			display: block;
			margin-top: 14upx;
		}
		>image{
			margin-top: 30upx;
			width: 60%;
			height: 60upx;
			
		}
	}
	.relistTi{
		width: 50%;
		height: 288upx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.market{
		height: 50%;
		border-bottom: 2upx #EEEEEE solid;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0 10%;
		.title{
			width: 50%;
			>view:first-child{
				font-size: 34upx;
				font-weight: bold;
				text-align: center;
				background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(rgba(234, 70, 108, 1)), to(rgba(254, 127, 70, 1)));
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}
			>view:nth-child(2){
				color: #CFCFCF;
				font-size: 20upx;
				margin-top: 14upx;
				text-align: center;
			}
		}
		>image{
			width: 30%;
			height: 80upx;
		}
	}
	.bg{
		width: 100%;
		height: 28upx;
		background-color: #EEEEEE;
	}
	.selects{
		width: 100%;
		.timeBack{
			width: 100%;
			height: 90upx;
            box-sizing: border-box;
			padding-left: 230upx;
			padding-top: 18upx;
			border-bottom:2upx solid #CFCFCF;
			position: relative;
			>view:first-child{
				position: absolute;
				top: 26upx;
				left: 20upx;
				width: 200upx;
				>image{
					width: 200upx;
					height: 60upx;
				}
			}
			uni-countdown{
				width: 40%;
			}
		}
	}
	.shop{
		height: 224upx;
		width: 100%;
		>image{
			height:100%;
			width: 100%;
		}
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
	
	/* 弹出层形式的广告 */
	.uni-banner {
	    width: 70%;
	    position: fixed;
	    left: 50%;
	    top: 50%;
	    background: #FFF;
	    border-radius: 26upx;
	    z-index: 999;
	    transform: translate(-50%, -50%);
	}
	.closesearn{
		position: relative;
		top: 250upx;
		left: 630upx;
		width: 100upx;
		>image{
			width: 60upx;
			height: 60upx;
		}
	}
	.searchContent{
		margin: 0 auto;
		width: 70%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		/* #ifndef MP-WEIXIN */
		justify-content:space-between;
		/* #endif */
		
		margin-bottom: 16upx;
		.boxO{
			width: 120upx;
			display: flex;
			height: 100upx;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			>image{
				width: 60upx;
				height: 60upx;
				border-radius: 50%;
			}
			>view{
				width: 120upx;
				text-align: center;
				font-size: 0.8rem;
			}
		}
	}
			.decscmenujs{
				box-sizing: border-box;
				width: 100%;
				height: 80upx;
				line-height: 90upx;
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
					top:82upx;
					right: 76upx;
					width: 46upx;
					height: 4upx;
					background-color: #F70009;
				}
	}
	.activedesc{
		 position: relative;
		 color: #FD4739;
	}
	.decscmenujs .iconflex,.decscmenujs .iconflex2{
		position: relative;
		width: 19%;
		height: 60upx;
		display: inline-block;
	}
	.decscmenujs .iconflex>image{
		position: absolute;
		top: -56upx;
		left: 20upx;
		width: 50upx;
		height: 50upx;
		z-index: 6;
	}
	.decscmenujs .iconflex2>image{
		position: absolute;
		top: -58upx;
		right: 22upx;
		width: 50upx;
		height: 50upx;
		z-index: 6;
	}
	.indexMain{
		.scrollmenu{
			position: relative;
		}
		.scrollmenu .iconflex{
			position: absolute;
			top: 0;
			right: 0;
			width: 19%;
			height: 112upx;
		}
		.scrollmenu .iconflex>image{
			width: 50upx;
			height: 50upx;
			margin: 20upx 0 0 64upx;
		}
		.scrollmenu .iconflex2{
			position: absolute;
			top: 0;
			right: 0;
			width: 19%;
			height: 112upx;
		}
		.scrollmenu .iconflex2>image{
			width: 50upx;
			height: 50upx;
			margin: 20upx 0 0 64upx;
		}
		.activeline{
			position: absolute;
			top:72upx;
			right: 81upx;
			width: 46upx;
			height: 4upx;
			background-color: #F70009;
		}
	}
</style>
