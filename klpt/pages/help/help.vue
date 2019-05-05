<template>
	<view style="margin-top: 4upx;">
		<view>
			<view class="topNav_content">
				<navigator url="" class="topNav_type first" v-for="(item,index) in data" :key='index'>
					<image :src="item.src"></image>
					<text>{{item.name}}</text>
				</navigator>
			</view>
		</view>
		<view>
			<view class="hot_issuesTle">
				<text>热门问题</text>
			</view>
			<view class="hotIssues_href" v-for="(msgs,index) in msgdata" :key="index">
                <navigator url="/pages/index/index" hover-class="navigator-hover">{{msgs}}</navigator>
			</view>
		</view>
		<view class="placeholder_bg"></view>
		
 		<view>
			<view class="workingDay">
				<text class="workingDay_lt">工作时间</text>
				<text class="workingDay_rt">工作日 9:00-20:00</text>
			</view>
			<view class="service_href">
				<text class="service_lt">点击联系在线客服</text>
				<text class="service_rt">123456789</text>
			</view>
			<view class="service_href">
				<text class="service_lt">点击联系在线客服</text>
				<text class="service_rt">快来拼团</text>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				data:[
					{name:'优惠券相关',src:'../../static/0.png'},
					{name:'体现相关',src:'../../static/0.png'},
					{name:'订单相关',src:'../../static/0.png'},
					{name:'邀请好友',src:'../../static/0.png'},
					{name:'商城返利',src:'../../static/0.png'},
					{name:'账户问题',src:'../../static/0.png'},
					{name:'完善中...',src:'../../static/0.png'},
					{name:'完善中...',src:'../../static/0.png'}
					],
				msgdata:['在花生联盟我能做什么？','集分宝是什么？','淘宝订单跟踪及返利到账时间？','如何使用购物车购买商品？']
			}
		}
	}
</script>

<style>
	.topNav_content{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 100%;
	}
	.topNav_type{
		width: 25%;
		box-sizing: border-box;
		float: left;
		text-align: center;
		font-size: 24upx;
		border-right: 4upx solid #F0F0F0;
		border-top: 2upx solid #F0F0F0;
		padding: 10upx 24upx;
	}
	.topNav_type.last{
		border-right: 0px solid;
	}
	.topNav_type text {
		padding-top: 10upx;
		padding-bottom: 10upx;
		display: inline-block;
	}	
	.topNav_type image{
		margin: 0 auto;
		width: 100upx;
		height: 100upx;
		display: block;
	}
	.hot_issuesTle{
		background: #F0F0F0;
		border-bottom: 4upx solid #D0D0D0;
		width: 100%;
		height: 110upx;
		line-height: 140upx;
		font-size: 30upx;
		font-weight: bold;
	}
	.hot_issuesTle text {
		padding-left: 26upx;
	}	
	.hotIssues_href{
		width: 100%;
		height: 100upx;
		line-height: 100upx;
		font-size: 28upx;
		font-weight: bold;
		border-bottom: 2upx solid #D0D0D0;
	}
	.hotIssues_href.last{
		border-bottom: 4upx solid #D0D0D0;
	}
	.hotIssues_href image{
		width: 62upx;
		height: 62upx;
		vertical-align: middle;
	}
	.hotIssues_href navigator{
		text-indent: 16px;
		display: inline-block;
		width: 100%;
		background-image: url(../../static/jiantou.png);
		background-repeat: no-repeat;
		background-position: center right;
	}
	.placeholder_bg{
		width: 100%;
		height: 20upx;
		background: #EEEEEE;
	}	
	.workingDay{
		width: 100%;
		height: 100upx;
		line-height: 100upx;
		border-bottom: 2upx solid #D0D0D0;
		font-size: 30upx;
	}
	.workingDay_lt{
		color: #cc3065;
		display: inline-block;
		width: 50%;
		float: left;
		padding-left: 26upx;
	}
	.workingDay_rt{
		color: #969696;
		display: inline-block;
		width: 42%;
		text-align: right;
	}	
	.service_href{
		width: 100%;
		height: 90upx;
		line-height: 90upx;
		font-size: 30upx;
	}
	.service_lt{
		display: inline-block;
		width: 50%;
		float: left;
		padding-left: 26upx;
	}
	.service_rt{
		color: #969696;
		display: inline-block;
		width: 42%;
		text-align: right;
	}
</style>
