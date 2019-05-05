<template>
	<!-- 粉丝 -->
	<view class="fans">
		
		<!-- 提示 -->
		<view class="Tips"><text>还差{{num?num:0}}个粉丝下单,可升级LV{{level}}返利(100%)</text></view>
		<!-- content -->
		<view class="content">
			<view style="border-bottom: 1px solid #F5F5F5; color: #FD6155;">粉丝:{{data?data:0}}</view>
            	<view v-for="(items,indexs) in datas" :key="indexs" v-if="datas">
               <view  class="fasList" style="border-bottom: 1px solid #F5F5F5;"> 
				   <image :src="items.avr_img" mode="widthFix"></image>
				  <view class="userSta">
					  <text class="username">{{items.name}}</text> 
					  <text class="createTime">邀请时间:{{items.created_at}}</text> 
				  </view> 
				   <button @click="recall(items.name)" class="recalls" open-type="share" type="default">联系</button>
				  <text :style="items.is_available==1?'':'color:#FD4739'">{{items.is_available==1?'已购买':'未购买'}}</text>
			   </view>
            </view>
		</view>
	</view>
</template>

<script>
	import { requestip } from '../api/api.js'
	export default{
		data(){
			return{
				data:'',
					num:0,
					level:'',
					datas:[],
					buy:true
			}
		},
		methods:{
			// 初始化数据
			Faninit(e){
				var uid=uni.getStorageSync('userId');
				uni.request({
					url: requestip()+'/v2/customer/wx/'+e.name+'?user_id='+uid,
					method: 'GET',
					header:{
						"access-token":uni.getStorageSync('access-token'),
					    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
					   },
					data: {},
					success: res => {
						// console.log('fans数据:',res.data.data.fans_list);
						this.data=res.data.data.fans_list.fan_count;
						// console.log('fans数据:',res.data.data.fans_list.fans_list);
						this.datas=res.data.data.fans_list.fans_list;
					},
					fail: () => {},
					complete: () => {}
				});
			},
			recall(n){
				
				uni.setClipboardData({
					data:n,
					success(res) {
						// console.log('复制内容成功');
					}
				})
			},
		},
		onLoad:function(e){
			uni.hideShareMenu();
			// console.log('fans页面值：',e);
			this.num=e.num;
			this.level=parseInt(e.level)+1>3?3:parseInt(e.level)+1;
			this.Faninit(e);
		},
		onShareAppMessage() {
			var uid=uni.getStorageSync('userId');
			return{
				title:'底价买一个会省钱的小程序',
				path:'pages/index/index?oparentid='+uid+'&channel=1',
				imageUrl:'https://img.dijiamai.net/media/catalog/category/appimg/invite/open.png'
			}
		}
	}
</script>

<style lang="less">
	.fans{
		height: 1200upx;
		background-color: #F5F5F5;
		.Tips{
			position: fixed;
			top: 0;
			width: 100%;
			font-size: 26upx;
			height: 60upx;
			width: 100%;
			text-align: center;
			line-height: 60upx;
			background-color: #FFF2C5;
			color:#FE4545;
			z-index: 110;
		}
		// content
		.content{
			margin-top: 60upx;
			padding: 0 20upx;
			background-color:#ffffff;
			box-sizing: border-box;
			color: #A2A2A2;
			font-size: 28upx;
			.fasList{
				display: flex;
				flex-direction: row;
				width: 100%;
				height: 96upx;
				color: #A2A2A2;
				justify-content: space-between;
				align-items: center;
				>image{
					width: 70upx;
					height: 70upx;
					border-radius: 50%;
					// margin-top: 10upx;
				}
				.userSta{
					display: flex;
					flex-direction:column;
					width: 60%;
					height: 80upx;
					padding-top: 4upx;
					color: #A2A2A2;
					justify-content:center;
					// align-items: center;
				}
				.recalls{
					width: 60upx;
					padding-left: 0upx;
					padding-right: 0upx;
					border-radius: 14upx;
					margin: 0upx;
					// position: static;
					font-size: 26upx;
					line-height: 40upx;
					height: 40upx;
					// margin-top: 20upx;
					color:#ffffff;
					background-color: #D9A800;
				}
				.username{
					display: inline-block;
					// height: 60upx;
					// line-height: 64upx;
					width: 300upx;
					font-size: 28upx;
					// margin-bottom: 10upx;
					overflow:hidden;
					text-overflow:ellipsis;
					white-space:nowrap;
				}
			}
		}
	}
</style>
