<template>
	<view class="rule">
	<!-- vip规则 -->
	<view class="navigate">
		<image src="http://img.dijiamai.net/media/catalog/category/appimg/rule/vip02.png" mode="scaleToFill"></image>
	</view>
	    <view class="titles" :class="flextop?'flexTop0':''">
	    	<view class="rule_sroll"  v-for="(item,index) in datatitle" :key='index' @click="explainT(index,item.srcoll)" :class="tIndex==index?'active':''">{{item.name}}
	    	<view class="line" v-if="tIndex==index"></view>
	    	</view>
	    </view>
		<view class="Member main">
			<view class="content">
				<view class="tabtop">
					<view style="width: 10%;text-align: center;">vip</view>
					<view style="width: 20%;text-align: center;">返利比例</view>
					<view style="width: 70%;text-align: center;">升级条件</view>
				</view>
				<view class="tabmain" v-for="(item,index) in data" :key='index'>
					<view class="right" style="width: 100%;">
						<view class="border" v-if="ruleIndex==index"></view>
						<view style="width: 10%;text-align: center;color: #333333; font-weight: bold;">LV{{item.lel}}</view>
						<view style="width: 20%;text-align: center; color: #FEC500;">{{item.pre}}</view>
						<view style="width: 70%;color: #333333;">{{item.main}}</view>
						<view class="left"><image src="../../static/shou001.png" mode="widthFix" v-if="ruleIndex==index"></image></view>
						<image src="../../static/me.png" mode="widthFix" class="me" v-if="ruleIndex==index"></image>
					</view>
				</view>
				<view class="Explain" style="padding-top: 6px;">补充说明</view>
				<view class="Explain"><text>1</text>邀请的朋友购买之后,如果产品在未发货情况下退款,将视为无效。如账号已升级之后将被降级。</view>
				<view class="Explain"><text>2</text>如果好友已经被其它人邀请过,将视为无效,好友登录小程序或APP,打开个人中心,可以查看推荐人是否是你。</view>
				<view class="Explain"><text>3</text>我可以花钱购买3级会员资格吗？我们只希望您通过分享这个实惠的应用给您的亲朋好友,不卖会员资格。</view>
			</view>
		</view>
		<view class="margin20"></view>
		<view class="Member">
			<view class="paddingl20">返利规则</view>
			<view class="content content_h">
				<view class="Explain Explain_h">(1) 有效返利金额将体现在您的个人中心 -- 可提现金额中。</view>
				<view class="Explain Explain_h">(2) 订单确认收货之后的15个工作日内拼多多会审核该笔返利。</view>
				<view class="Explain Explain_h">(3) 如果在当月15号前通过审核，在当月23日返利,15号之后审核通过的，将在下个月的23日返利。</view>
				<view class="Explain Explain_h">(4) 返利有效性、返利时间等规则不是由我们制定,是由拼多多/淘宝/京东等商家制定,我们只是将返利转交给您。</view>
			</view>
		</view>
		<view class="btnshare" v-if="uid" @click="nowIn"><text>邀请</text> <text>升级</text></view>
		 <eject-frame v-if='PopuB' :imgUrl='url' :PositionStatus="p" :imgStatus='imgStatus' :videoUrl='url'></eject-frame>
	</view>
</template>

<script>
	import {requestip } from '../api/api.js'
	export default{
		data(){
			return{
				data:[
					{lel:1,pre:'50%',main:'登录小程序或APP即免费成为一级会员。你邀请的每一位朋友都直接享有此返利权限。'},
					{lel:2,pre:'70%',main:'累积邀请2个朋友登录小程序或APP,并通过小程序或APP,各自选择任意一件商品购买成功后即可升级。'},
					{lel:3,pre:'100%',main:'累积邀请5个朋友登录小程序或APP,并通过小程序或APP,各自选择任意一件商品购买成功后即可升级。'}
				],
				ruleIndex:-1,
				tIndex:0,
				datatitle:[
					{name:'会员等级规则',srcoll:0},
					{name:'返利规则',srcoll:494}
					],
				flextop:false,
				uid:false,
				url:'https://img.dijiamai.net/media/catalog/category/appimg/invite/share1.jpg',
				p:'rightTop',
				PopuB:false,
				imgStatus:true
			}
		},
		methods:{
			//等级查询
			lookLV(){
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
						// console.log('个人数据',res.data);
						this.ruleIndex=res.data.data.user_info.rank-1>2?2:res.data.data.user_info.rank-1;
					},
					fail: () => {},
					complete: () => {}
				});
			},
			explainT(i,t){
				this.tIndex=i;
				if(this.tIndex==1){
					this.flextop=true;
				}else{
					this.flextop=false;
				}
				uni.pageScrollTo({
					duration:300,
					scrollTop:t
				})
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
		  			page_name:'share',
		  			user_id:uid
		  		},
		  		success: res => {
		  			// console.log('弹出层数据',res.data);
		  			this.url=res.data.url;
		  			this.p=res.data.position;
		  			this.imgStatus=res.data.status;
					var that=this;
					setTimeout(function(){
					that.PopuB=res.data.share_switch;
					},2000)
					uni.setStorageSync('rank',res.data.rank);
					uni.setStorageSync('peroid_status',res.data.peroid_status);
		  		},
		  		fail: () => {},
		  		complete: () => {}
		  	});
		  }
		},
		onLoad:function(){
			this.lookLV();
			this.uid=uni.getStorageSync('userId')?true:false;
			uni.hideShareMenu();
		},
		onShow() {
			this.uid=uni.getStorageSync('userId')?true:false;
			this.lookLV();
			this.Popup();
		},
		onShareAppMessage() {
			var uid=getStorageSync('userId');
				return{
					title:'底价买',
					path:'pages/index/index?oparentid='+uid+'&channel=1',
					imageUrl:'../../static/00000.jpg'
				}
			
		}
	}
</script>

<style lang="less">
	.rule{
		padding-bottom: 74upx;
		// 会员等级规则
		.paddingl20{
			margin: 20upx 38upx;
			width: 22%;
			height: 60upx;
			line-height: 60upx;
			// background:linear-gradient(to right,#F46900,#F44100);
			color:#000000;
			font-weight: bold;
			// text-align: center;
			font-size: 30upx;
			// border-radius: 14upx;
		}
		.Member{
			.title{
				font-weight: bold;
				padding-top: 8upx;
				padding-bottom: 20upx;
			}
		}
		&>.main{
			box-sizing: border-box;
			width: 100%;
			padding: 0 36upx;
			}
			.content_h{
				// background-color: #F8F8F8;
				padding-bottom: 20upx;
				}
			.content{
				&>.tabtop{
					background-color: #444444;
					height: 80upx;
					width: 100%;
					display: flex;
					flex-direction: row;
					align-items: center;
					color:#ffffff;
					font-size: 28upx;
				}
			}
			.tabmain{
				height: 120upx;
				display: flex;
				flex-direction: row;
				align-items: center;
				font-size: 26upx;
				.right{
					height: 118upx;
					display: flex;
					flex-direction: row;
					align-items: center;
					word-break: break-all;
					border-bottom: 2upx solid #444444;
					border-left: 2upx solid #444444;
					border-right: 2upx solid #444444;
					position: relative;
					.left{
						width: 40upx;
						height: 40upx;
						position: absolute;
						top: 46upx;
						left: -30upx;
						image{
							width: 40upx;
							height: 40upx;
						}
					}
					.me{
						position: absolute;
						top: 14upx;
						left: -20upx;
						width: 40upx;
						height: 40upx;
					}
					.border{
						position: absolute;
						top: 6upx;
						left: 2upx;
						width: 98%;
						height: 100upx;
						border-radius: 16upx;
						border:4upx solid #EC4E28;
					}
				}
				
			}
			.Explain{
				margin-bottom: 20upx;
				color:#999999;
				font-size: 28upx;
				>text{
					display: inline-block;
					width: 28upx;
					height: 28upx;
					line-height: 28upx;
					color: #FFFFFF;
					border-radius: 50%;
					background-color: #C6C6C6;
					text-align: center;
					font-size: 24upx;
					margin-right: 6upx;
				}
			}
			.Explain_h{
				color:#333333;
				padding: 0 34upx;
				word-break: break-all;
			}
			// 头部点击样式
			.titles{
				height: 80upx;
				width: 100%;
				border-bottom: 4upx solid #F8F8F8;
				margin-bottom: 20upx;
				.rule_sroll{
					display: inline-block;
					width: 50%;
					height: 80upx;
					line-height: 80upx;
					text-align: center;
					position: relative;
					.line{
						position: absolute;
						bottom: 0upx;
						left: 78upx;
						width: 58%;
						height: 4upx;
						background-color: #FD4739;
					}
				}
				.active{
					color: #FD4739;
				}
			}
			.flexTop0{
				position: flex;
				top: 0upx;
				width: 100%;
				height: 80upx;
				z-index: 2;
			}
	}
</style>
