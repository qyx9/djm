<template>
	<view class="personal">
	 <view class="pflex">
		 <view class="flexed">
		<view class="userList">
			<!-- 用户信息 -->
			<view class="usermess">
				<!-- 头像 -->
				<image :src="img==''?userImg:img" mode="widthFix"></image>
				<!-- 用户昵称、等级 -->
				<view class="username">
					<view>{{username?username:'未登录'}}</view>
					<view class="start" >
						<text>等级:</text><text> LV{{userData.rank?userData.rank:0}}</text> 
					</view>
					<view>邀请人:<text style="margin-left: 6upx;">{{userData.parent_name==''?'自己':userData.parent_name}}</text></view>
				</view>
			</view>
			<!-- 客服 -->
			<view class="server" v-if='false'>
				<image src="../../static/e.png" mode="widthFix"></image>
				<text>客服中心</text>
				<image src="../../static/fan2x.png" mode="widthFix"></image>
			</view>
			
		</view>
		<!-- 省钱 -->
		<view class="save_money" v-if="false">
			<view class="">
				<view style="font-weight: bold;">累计返利和升级返利{{userData.soon_integral?userData.soon_integral/100:0}}元</view>
				<view class="">底价买为您节省了{{userData.soon_integral?userData.soon_integral/100:0}}元</view>
			</view>
			<view class="">
				<image src="../../static/fan2x.png" mode="widthFix"></image>
			</view>
		</view>
		<!-- 提现 -->
		<view class="take">
			<!-- 全部返现 -->
			<view class="all" @click="whole">
				<view>{{(userData.available_integral+userData.soon_integral)?(userData.available_integral+userData.soon_integral)/100:0}}</view>
				<view class="takeall">全部返现<image src="../../static/tiaozhuang2x.png" mode="widthFix"></image></view>
			</view>
			<!-- 即将到账 -->
			<view class="all" @click="whole">
				<view>{{userData.soon_integral?userData.soon_integral/100:0}}</view>
				<view class="takeall">即将到账<image src="../../static/tiaozhuang2x.png" mode="widthFix"></image></view>
			</view>
			<!-- 账号余额 -->
			<view class="balance" style="border-left:2upx dotted #9F9F9F;" @click="whole" :style="tixian?'':'width:40%'">
				<view class="">{{userData.available_integra?userData.available_integra/100:0}}</view>
				<view class="">可提余额<image src="../../static/tiaozhuang2x.png" mode="widthFix"></image></view>
			</view>
			<!-- 提现按钮 -->
			<view class="balances" v-if='tixian'>
				<view @click="drawal(userData.available_integra?userData.available_integra/100:0)">提现</view>
			</view>
		</view>
		   <!-- 省钱2 -->
		<view class="reduce">（已为您节省<text>¥{{userData.save_money?userData.save_money/100:0}}</text>）</view>
		</view>
		</view>
		<view class="position20">
		<!-- shezhi -->
		<view class="set">
			<view class="setList" v-for="(item,index) in data" :key="index" :class="index<4?'':''"
			@click="setlist(item,index)">
				<image :src="item.src" mode="widthFix"></image>
				<view>{{item.name}}</view>
			</view>
		</view>
		<!-- 邀请图 -->
		<view class="Invitation" @click="shareinvate">
			<image src="https://img.dijiamai.net/media/catalog/category/appimg/personal/in22.png" mode="widthFix"></image>
		</view>
		<view class="margin20"></view>
		<!-- 粉丝 -->
		<view class="fan">
			<view class="title" style="padding-bottom: 20upx; border-bottom: 1px solid #EAEAEA;">我的粉丝</view>
			<view class="fanList">
				<view class="list" style="width:28%" @click="fans('fanslist',userData.up_rank_count,userData.rank)">
					<view class="listimg"><text style="font-size: 40upx;">{{userData.fan_count?userData.fan_count:0}}</text> 人</view>
					<view ><text>粉丝</text></view>
				</view>
				<view class="list" style="width:28%" @click="fans('availablefans',userData.up_rank_count,userData.rank)">
					<view class="listimg"><text style="font-size: 40upx;">{{userData.available_fans?userData.available_fans:0}}</text> 人</view>
					<view >
						<text>粉丝购买</text>
					</view>
				</view>
				<view class="list" style="width:44%" @click="levels(userData.up_rank_count?userData.up_rank_count:0)">
					<view class="listimg" >
						<!-- <image src="../../static/dengji2.png" mode="widthFix"></image> -->
						差<text style="font-size: 40upx;">{{userData.up_rank_count?userData.up_rank_count:0}}</text>人
						<!-- <image src="../../static/wenhao.png" mode="widthFix" style="width: 14px;height: 14px;margin-left:4px;" ></image> -->
					</view>
					<view  style="position: relative;">当前LV{{userData.rank?userData.rank:0}}级<image src="../../static/wenhao.png" mode="widthFix" style=" width: 14px;height: 14px;margin-left:4px;position: absolute; top:1px;right: 32px;" ></image></view>
				</view>
			</view>
		</view>
		<view class="margin20"></view>
		<view class="user_set" @click="userset()">
			<view class="set">设置</view>
			<view class=""><image src="../../static/setback.png" mode="widthFix"></image></view>
		</view>
	</view>
	<view class="btnshare" @click="nowIn"><text>邀请</text> <text>升级</text></view>
	 <eject-frame v-if='PopuB' :imgUrl='url' :PositionStatus="p" :imgStatus="imgStatus" :videoUrl='url'></eject-frame>
	</view>
	
</template>

<script>
	import {requestip} from '@/pages/api/api.js'
	export default{
		data(){
			return{
				data:[
					// {name:'淘宝订单',src:'../../static/taobao.png',url:'order'},
					{name:'拼多多订单',src:'../../static/pdd.png',url:'order',http:'https://appserver.dijiamai.net/v2/customer/wx/order',get:'5frewr43fer43'},
					// {name:'京东订单',src:'../../static/jidong.png',url:'order'},
					{name:'浏览记录',src:'../../static/zuji.png',url:'browse'},
					// {name:'账号明细',src:'../../static/0.png',url:'drawmoney'},
					{name:'收藏夹',src:'../../static/shouchang.png',url:'collection'},
					// {name:'设置',src:'../../static/set.png',url:'set'},
					{name:'测试入口',src:'../../static/set.png',url:'testgood'},
					// {name:'测试入口2',src:'../../static/set.png',url:'testfeilei'},
					// {name:'测试入口2',src:'../../static/set.png',url:'shareapp'}
					// {}
				],
				img:'',
				username:'',
				userData:'',
				userImg:'',
				tixian:true,
				all_rebate_status:0,
				cash_out_status:0,
				order_status:0,
				browse_record_status:0,
				collection_status:0,
				url:'',
				p:'',
				imgStatus:false,
				PopuB:false
			}
		},
		methods:{
			setlist(i,n){
				var opid=uni.getStorageSync('weixiOpenId');
				if(i.url!=undefined){
					if(i.url=='order'){
						if(this.order_status==0){
							uni.navigateTo({
								url:'../'+i.url+'/'+i.url+'?name='+i.name+'&quest='+i.http+'&get='+opid
							})
						}else{
							uni.navigateTo({
								url:'../weburl/weburl?page='+'orderPage.html'
							})
						}
						
					}
					else if(i.url=='browse'){
						if(this.browse_record_status==0){
							uni.navigateTo({
								url:'../'+i.url+'/'+i.url+'?name='+i.name+'&quest='+i.http+'&get='+opid
							})
						}else{
							uni.navigateTo({
								url:'../weburl/weburl?page='+'browserPage.html'
							})
						}
					}
				  else	if(i.url=='collection'){
						if(this.collection_status==0){
							uni.navigateTo({
								url:'../'+i.url+'/'+i.url+'?name='+i.name+'&quest='+i.http+'&get='+opid
							})
						}else{
							uni.navigateTo({
								url:'../weburl/weburl?page='+'collectionPage.html'
							})
						}
					}
					 else if(i.url=='testgood'){
							uni.navigateTo({
								url:'../'+i.url+'/'+i.url+'?name='+i.name+'&quest='+i.http+'&get='+opid
							})
					}
					}
			},
			whole(){
				if(this.all_rebate_status==0){
					uni.navigateTo({
						url:'../whole/whole'
					})
				}else{
					
				}
				
			},
			fans(i,n,lel){
				uni.navigateTo({
					url:'../fans/fans?name='+i+'&num='+n+'&level='+lel
				})
			},
			drawal(i){
				if(this.cash_out_status==0){
					uni.navigateTo({
						url:'../withdrawal/withdrawal?n='+i
					})
				}else{
					
				}
				
			},
			shareinvate(){
				uni.switchTab({
					url:'../../pages/rule/rule'
				})
			},
			level(n){
				uni.showModal({
					title:'提示',
					showCancel:false,
					content:'距离下一级还差'+n+'人'
				})
			},
			levels(){
				uni.switchTab({
					url:'../rule/rule'
				})
			},
			personalInit(){
			this.userImg=uni.getStorageSync('userimgUrl');
			var openid=uni.getStorageSync('weixiOpenId');
			// #ifdef MP-WEIXIN
			if(openid==''){
				this.userImg='';
				this.userData='';
				this.username='';
				uni.showModal({
					title:"提示",
					content:'请先登录到小程序',
					success(res) {
						if(res.confirm){
							uni.navigateTo({
								url:'../login/login'
							})
						}
						else if(res.cancel){
							uni.switchTab({
								url:'../index/index'
							})
						}
					}
				})
				
			}else{
				this.userImg=uni.getStorageSync('userimgUrl');
				this.username=uni.getStorageSync('userName');
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
						this.userData=res.data.data.user_info;
						this.all_rebate_status=res.data.data.user_info.all_rebate_status;
						this.browse_record_status=res.data.data.user_info.browse_record_status;
						this.cash_out_status=res.data.data.user_info.cash_out_status;
						this.collection_status=res.data.data.user_info.collection_status;
						this.order_status=res.data.data.user_info.order_status;
						// console.log("个人数据:",res.data);
						uni.setStorageSync('rank',this.userData.rank);
						uni.setStorageSync('peroid_status',res.data.data.user_info.peroid_status);
					},
					fail: (errMsg) => {
						console.log('个人数据页面错误信息:',errMsg);
					},
					complete: () => {}
				});
			}
			// #endif
			// #ifdef APP-PLUS
			 if(this.$store.state.hasLogin==false){
				uni.showModal({
					title:"提示",
					content:'您还没有登录请先登录',
					success(res) {
						if(res.confirm){
							uni.navigateTo({
								url:'../applogin/applogin'
							})
						}
						else if(res.cancel){
							uni.switchTab({
								url:'../index/index'
							})
						}
					}
				})
			 }
			// #endif
			},
			// 关闭下拉
			sotper(){
				setTimeout(()=>{
					this.personalInit();
					uni.stopPullDownRefresh();
				},300)
			},
			userset(){
				uni.navigateTo({
					url: '../set/set'
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
						page_name:'user_info',
						user_id:uid
					},
					success: res => {
						// console.log('弹出层数据',res.data);
						this.url=res.data.url;
						this.p=res.data.position;
						this.imgStatus=res.data.status;
						var that=this;
						setTimeout(function(){
						that.PopuB=res.data.user_info_switch;
						},2000)
					},
					fail: () => {},
					complete: () => {}
				});
			}
		},
		onLoad() {
		this.userImg=uni.getStorageSync('userimgUrl');
		uni.hideShareMenu();
		var openid=uni.getStorageSync('weixiOpenId');
           
		},
		onShow() {
	       this.personalInit();
		   this.Popup();
		},
		onPullDownRefresh() {
			// console.log("onPullDownRefresh")
			this.sotper();
		}
	}
</script>

<style lang="less">
	.personal{
		// 设置
		.user_set{
			width: 100%;
			height: 80upx;
			box-sizing: border-box;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			padding: 0 20upx;
			align-items: center;
			border-bottom: 2upx solid #F5F5F5;
			>view:first-child{
				font-size: 36upx;
				font-weight: 500;
				padding-left: 10upx;
			}
			>view{
				image{
					width: 22upx;
					height: 22upx;
				}
			}
		}
		div{
			font-size: 40upx;
			font-weight: bold;
		}
		.position20{
           padding-top: 330upx;
		}
		.flexed{
			position: relative;
			.reduce{
				position: absolute;
				bottom: 116upx;
				right: 20upx;
				font-size: 26upx;
				color: #FFFFFF;
				>text{
					color:#FDEB7D;
				}
			}
		}
		.pflex{
			position: fixed;
			top: 0;
			width: 100%;
		}
		// 用户信息列表
		.userList{
			box-sizing: border-box;
			padding: 20upx 20upx 20upx 40upx;
			width: 100%;
			height: 262upx;
			background-color: #FD4739;
			display: flex;
			flex-direction:row;
			justify-content: space-between;
			// 用户信息
			.usermess{
				width: 490upx;
				height:122upx;
				// background-color: #ccc;
				display: flex;
				flex-direction:row;
				justify-content: space-between;
				// 头像
				>image{
					margin-top: 4upx;
					width: 122upx;
					height: 122upx;
					border-radius: 50%;
				}
				.username{
					width: 350upx;
					height: 40upx;
					color: #ffffff;
					font-size: 30upx;
					>view:first-child{
						width: 350upx;
						font-size: 32upx;
						overflow:hidden;
						text-overflow:ellipsis;
						white-space:nowrap;
					}
					>view:nth-child(3){
						width: 300upx;
						overflow:hidden;
						text-overflow:ellipsis;
						white-space:nowrap;
					}
					.start{
						width: 60%;
						display: flex;
						height: 30upx;
						margin-top: 14upx;
						flex-direction: row;
						justify-content: left;
						align-items: center;
						border-radius: 14upx;
						font-size: 28upx;
						// background:linear-gradient(to right,#FF837B,#FD493B);
// 						>image{
// 							width: 30upx;
// 							height: 30upx;
// 							margin-right: 10upx;
// 						}
                        >text:nth-child(2){
							color: #FDC170;
							margin-left: 6upx;
						}
					}
				}
			}
			// 客服
			.server{
				box-sizing: border-box;
				margin-top: 20upx;
				padding:0upx 10upx;
				width: 210upx;
				height: 58upx;
				border-radius: 26upx;
				background-color: #FE7F75;
				display: flex;
				flex-direction:row;
				justify-content: space-around;
				align-items: center;
				font-size: 28upx;
				color: #ffffff;
				image:first-child{
					width: 40upx;
					height: 40upx;
				}
				image:nth-child(3){
					width: 12upx;
					height: 12upx;
				}
			}
		}
		// 省钱
		.save_money{
			position: absolute;
			top: 158upx;
			height: 104upx;
			width: 92%;
			margin: 0 4%;
			border-radius: 14upx 14upx 0 0;
			background: linear-gradient(to right,#FFF7EC,#F7DB9D);
			>view:first-child{
				color: #3B2E10;
				font-size: 28upx;
				width: 90%;
				height: 80upx;
				padding-top: 10upx;
				box-sizing: border-box;
				padding-left: 20upx;
				display: inline-block;
			}
			>view:nth-child(2){
				width: 10%;
				height: 80upx;
				display: inline-block;
				>image{
					width: 20upx;
					height: 20upx;
				}
			}
		}
		// 提现
		.take{
			position: absolute;
			top: 158upx;
			width: 94%;
			height: 136upx;
			display: flex;
			flex-direction:row;
			margin:10upx 3%;
			background-color:#ffffff;
			border-radius: 14upx;
			box-shadow: 0upx 6upx 10upx #FCF3F2;
			// 全部提现
			.all{
				
				width: 28%;
				height: 136upx;
				font-size: 26upx;
				
				view:first-child{
					height: 78upx;
					line-height: 100upx;
					color:#FD4739;
					text-align: center;
					font-size: 44upx;
				}
				view:nth-child(2){
					box-sizing: border-box;
					text-align: center;
					height: 66upx;
					line-height: 46upx;
					color:#9F9F9F;
					padding-bottom: 20upx;
					image{
						width: 20upx;
						height: 20upx;
					}
				}
			}
			// 账号余额
			.balance{
				box-sizing: border-box;
				width: 24%;
				height: 100upx;
				font-size: 26upx;
				margin-top:20upx;
				padding-left: 40upx;
				view:first-child{
					height: 60upx;
					line-height: 60upx;
					color:#3B2E10;
					text-align: center;
					font-size: 44upx;
				}
				view:nth-child(2){
					text-align: center;
					height: 40upx;
					line-height: 40upx;
					color:#9F9F9F;
					image{
						width: 20upx;
						height: 20upx;
					}
				}
			}
			.balances{
				box-sizing: border-box;
				width: 18%;
				height: 100upx;
				font-size: 26upx;
				margin-top:20upx; 
				
				view{
					margin: 20upx 0upx 0 30upx;
					font-size: 28upx;
					width: 100upx;
					height: 60upx;
					line-height: 60upx;
					text-align: center;
					background:linear-gradient(45deg,#FF9834,#FD4739);
					border-radius: 14upx;
					color:#ffffff;
					
				}
			}
		}
		// 粉丝
		.fan{
			box-sizing: border-box;
			width: 100%;
			height: 220upx;
			background-color: #ffffff;
			padding: 0 20upx;
			// border-bottom: 2upx solid #F5F5F5;
			.title{
				font-size: 36upx;
				font-weight: 500;
				padding-left: 10upx;
				padding-top: 20upx;
			}
			.fanList{
				width: 100%;
				height: 100upx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				// padding-top: 20upx;
				.list{
					.listimg{
						height: 80upx;
						text-align: center;
						line-height: 80upx;
// 						display: flex;
// 						flex-direction: row;
// 						justify-content: center;
						// align-items: center;
						font-size: 24upx;
						 >image{
							  width: 40upx;
							  height: 40upx;
							  margin-right: 10upx;
						}
						 
					}
					view:nth-child(2){
						text-align: center;
						font-size: 24upx;
						color: #C8C8C8;
					}
				 
				}
			}
		}
		// 邀请图
		.Invitation{
			padding: 12upx 20upx 0 20upx;
			>image{
				width: 100%;
			}
		}
		// 设置
		.set{
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			flex-wrap: wrap;
			.setList{
				width: 25%;
				text-align: center;
				font-size: 24upx;
				padding: 30upx 0;
				>image{
					width: 60upx;
					height: 60upx;
				}
			}
			.borderbottom{
				border-bottom: 1upx solid #F5F5F5;
			}
			
		}
		.margin20{
			background-color: #F5F5F5;
			width: 100%;
			height: 20upx;
		}
	}
</style>
