<template>
	<!-- 收藏夹 -->
	<view class="collection" :style="{height:height+'px'}">
		<!-- 收藏列表 -->
		
		<view class="tlist" v-for="(item,index) in data" :key="index">
			<!-- <checkbox-group @change="goodcheck">
			<label class="checkbox">
				<checkbox :value="item.favorite_id" :checked='rean' @click="goodCT(item.favorite_id)"/>
			</label>
			</checkbox-group> -->
			<view class="del"><image src="../../static/shanchu.png" mode="" @click="delgood(item.favorite_id)"></image></view>
			<image :src="item.image.main.image" mode="aspectFill" @click="mess(item.goods_id)"></image>
			<view class="right" @click="mess(item.goods_id)">
				<view class="goodname"><text>拼多多</text>{{item.name}}</view>
				<view class="price"><text>¥{{item.price/100}}</text><text>创建{{item.updated_at}}</text></view>
			</view>
		</view>
		
		<view class="positionBtm" v-if="false">
			<view class="allradio">
				<view class="radiolist">
					<radio :checked="radioBlean" @click="radiochech"></radio>
					<view>全选</view>
				</view>
				<!-- <view class="btn" style="background-color:#FBC131"> 一键分享</view> -->
				<view class=""></view>
				<view class="btn" style="background-color:#FD4739" @click="removeAdd" >删除</view>
			</view>
		</view>
	 <load-more v-if="showloadMore" :status="loadMoreText==='加载中...'?'loading':''"></load-more>
	</view>
</template>

<script>
	import LoadMore from '../../components/uni-load-more/uni-load-more.vue'
    import { requestip,headerList } from '@/pages/api/api.js'
	var clears;
	export default{
		components:{
			LoadMore
		},
		data(){
			return{
				data:'',
				flexblean:false,
				showloadMore:false,
				loadMoreText:'加载中...',
				browse:false,
				browseList:false,
				radioBlean:false,
				rean:false,
				crurrent:0,
				pages:1,
				addgoods:[],
				allgoods:[],
				height:0
			}
		},
		methods:{
			// 全选
			radiochech(){
				this.radioBlean=!this.radioBlean;
				this.rean=!this.rean;
				if(this.rean==true){
					for(var i=0;i<this.data.length;i++){
						this.allgoods.push(this.data[i].favorite_id);
					}
					// console.log('所有数据',this.allgoods);
				}else{
					this.allgoods=[];
					// console.log('所有数据',this.allgoods);
				}
				
			},
			// 初始化数据
			colletionInit(){
				var uid=uni.getStorageSync('userId');
				uni.request({
					url: requestip()+'/v2/duoduoke/product/getfavorite?user_id='+uid+'&page=1',
					method: 'GET',
					header:{
						"access-token":uni.getStorageSync('access-token'),
					    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
					   },
					data: {},
					success: res => {
						// console.log('收藏数据：',res.data);
						this.data=res.data.data.productList;
						// console.log('收藏',this.data)
					},
					fail: () => {},
					complete: () => {}
				});
			},
			goodCT(i){
				var a=[i];
				var that=this;
				uni.showModal({
					title:'提示',
					content:'你确定删除商品吗',
					success(res) {
						if(res.confirm){
							uni.request({
								url: 'https://appserver.dijiamai.net/v2/duoduoke/product/removefavoritenew',
								method: 'GET',
								header:{
									"access-token":uni.getStorageSync('access-token'),
								    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
								   },
								data: {
									favorite_id:a
								},
								success: res => {
									that.colletionInit();
									that.radiochech();
									that.radiochech();
								},
								fail: () => {},
								complete: () => {}
							});
						}else{
							that.rean=false;
							that.radiochech();
							that.radiochech();
						}
					}
				})
				
			},
			goodcheck(e){
				// console.log('选择',e);
				this.addgoods.push(e.detail.value[0]);
				// console.log("数据组8989",this.addgoods);
				if(e.detail.value[0]){
					var addgood=[]
					for(var i=0;i<this.addgoods.length;i++){
						if(addgood.indexOf(this.addgoods[i])==-1 && this.addgoods[i]!=undefined){
							addgood.push(this.addgoods[i]);
						}
					}
					// console.log("数据组：",addgood);
					this.addgoods=addgood;
					// console.log("数据组8888",this.addgoods);
				}else{
					
				}
				
				clears=this.addgoods;
				
			},
			removeAdd(){
				// console.log("数据组2：",this.addgoods);
				uni.request({
					url: 'https://appserver.dijiamai.net/v2/duoduoke/product/removefavoritenew',
					method: 'GET',
					header:{
						"access-token":uni.getStorageSync('access-token'),
					    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
					   },
					data: {
						favorite_id:this.allgoods
					},
					success: res => {
						this.colletionInit();
						this.addgoods=[];
						this.rean=false;
					},
					fail: () => {},
					complete: () => {}
				});
			},
			// 手机信息
			phoneInfo(){
				var that=this;
				uni.getSystemInfo({
					success(res) {
						// console.log(res);
						that.height=res.windowHeight;
					}
				})
			},
			// 删除商品
			delgood(e){
				var that=this;
				uni.showModal({
					title:'提示',
					content:'你确定删除商品吗',
				success(res) {
					if(res.confirm){
				uni.request({
					url: 'https://appserver.dijiamai.net/v2/duoduoke/product/removefavoritenew',
					method: 'GET',
					header:{
						"access-token":uni.getStorageSync('access-token'),
					    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
					   },
					data: {
						favorite_id:[e]
					},
					success: res => {
						that.colletionInit();
					},
					fail: () => {},
					complete: () => {},
					});
					}
					}
				});
			},
			mess(i){
				uni.navigateTo({
					url:'../productmess/productmess?id='+i
				})
			}
		},
		onLoad:function(){
			this.colletionInit();
			uni.hideShareMenu();
		},
		onReachBottom() {
			this.pages+=1;
			this.showloadMore=true;
			var uid=uni.getStorageSync('userId');
			uni.request({
				url: requestip()+'/v2/duoduoke/product/getfavorite?user_id='+uid+'&page='+this.pages,
				method: 'GET',
				header:{
					"access-token":uni.getStorageSync('access-token'),
				    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
				   },
				data: {},
				success: res => {
					// console.log('收藏数据：',res.data);
					// this.data=res.data.data.productList;
					for(var i=0;i<res.data.data.productList.length;i++){
						this.data.push(res.data.data.productList[i])
					}
						this.showloadMore=false;
					if(res.data.data.productList==''){
						this.loadMoreText='没有更多数据了';
						this.showloadMore=true;
					}else{
						this.loadMoreText='加载中...';
						this.showloadMore=false;
					}
				},
				fail: () => {},
				complete: () => {}
			});
		},
		onShow() {
			this.phoneInfo();
		}
	}
</script>

<style lang="less">
	.collection{
		background-color: #F5F5F5;
		padding-top: 20upx;
		padding-bottom: 120upx;
		.positionBtm{
			position: fixed;
			bottom: 0;
			box-sizing: border-box;
			width: 100%;
			z-index: 100;
		}
		.allradio{
			box-sizing: border-box;
			padding: 0  0 0 20upx;
			width: 100%;
			height: 120upx;
			background-color: #ffffff;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			.radiolist{
				width: 40%;
				height: 60upx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				
				radio{
					width: 30%;
					text-align: right;
					display: inline-block;
				}
				view{
					width: 70%;
					text-align: left;
					display: inline-block;
				}
			}
			// btn
			.btn{
				width: 28%;
				height: 60upx;
				background-color: aqua;
				display: inline-block;
				border-radius: 30upx;
				margin-right: 20upx;
				text-align: center;
				line-height: 60upx;
				color: #ffffff;
			}
		}
		// 收藏列表
		.tlist{
			box-sizing: border-box;
			margin-bottom: 20upx;
			padding: 0 20upx;
			height:200upx;
			display: flex;
			flex-direction:row;
			justify-content: space-between;
			align-items: center;
			background-color: #ffffff;
			.del{
				>image{
					width: 60upx;
					height: 60upx;
				}
			}
			// 图片
			>image{
				width: 160upx;
				height: 160upx;
			}
			.right{
				width: 60%;
				height: 160upx;
			}
			.goodname{
				width: 100%;
				height: 72upx;
				font-size:28upx;
				color: #333333;
				font-weight: 500;
				// 超出部分隐藏
				text-align: left;
				word-break:break-all;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				>text{
					position: relative;
					top: -2upx;
					background-color: #F70009;
					font-size: 18upx;
					height: 25upx;
					line-height: 25upx;
					font-weight: normal;
					display: inline-block;
					color: #ffffff;
					border-radius: 6upx;
				}
				}
				.price{
					height: 100upx;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					>text:first-child{
						display: inline-block;
						font-size: 28upx;
						color:#FD4739;
					}
					>text:nth-child(2){
						font-size: 26upx;
						color: #BEBEBE;
					}
		  }
		}
	}
</style>
