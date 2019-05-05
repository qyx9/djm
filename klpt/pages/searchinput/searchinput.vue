<template>
	<view class="searchinput">
		<view class="searchBox">
			<view  class="searchgoods">
				<input type="text" value="" v-model="value" :placeholder="defaultKeyword" @input="valueDt" @confirm='searchvalue' />
				<view class="searchbox" @click="searchvalue"><text>搜索</text></view>
			</view>
			<image class="imgser" src="../../static/search.png" mode="widthFix" @click="clearDall"></image>
			<image class="imgcha" v-if="vlean" src="../../static/cha.png" mode="widthFix" @click="clearDall"></image>
		</view>
		<!-- 搜索记录 -->
		<view v-if="cleanstate" class="searchHistory" style="padding-top: 80upx;">
			<view class="title">
				<view class="history"><image src="../../static/history.png" mode="widthFix"></image> 搜索记录</view>
				<image src="../../static/shanchu.png" mode="widthFix" @click="cleanSearch"></image>
			</view>
			<view class="content">
				<text v-for="(item,index) in historyOld" :key="index" @click="textH(item)">{{item}}</text>
			</view>
		</view>
		<!-- 热搜 -->
		<view v-if="goodstate" class="searchHot" :style="cleanstate==false?'padding-top: 40px;':''">
			<view class="title">
				<view class="hot"><image src="../../static/huo000.png" mode="widthFix"></image>热门搜索</view>
				<image :src="hotstate?imgsrc:imgsrc2" mode="widthFix" @click="imgurl"></image>
			</view>
			<!-- 热搜推荐 -->
			<view v-if='hotstate' class="content">
				<text v-for="(item,index) in hotdata" :key="index" @click="textH(item)">{{item}}</text>
			</view>
			<view  v-if="!hotstate" class="tishi"><text>当前热门搜索已隐藏</text></view>
		</view>
		<!-- 说明 -->
		
		<view class="explain" v-if="goodstate">
			<view class="margin20" v-if="goodstate"></view>
			<view class="plain"><image src="../../static/heng.png" mode="widthFix"></image> 搜索提示<image src="../../static/heng.png" mode="widthFix"></image></view>
			<image src="http://img.dijiamai.net/media/catalog/category/appimg/search/5.png" mode="widthFix"></image>
		</view>
		<!-- 搜索排序 -->
		<view class="decscmenu" v-if="!goodstate">
			<scroll-view scroll-x  class="scrollmenu">
				<view class="scrollview" v-for="(item,index) in descmenu" :key="index" 
				:class="Tabindex==index?'actives':''" @click="menuclicks(riseBlean?item.num:item.num2,index)"><text >{{item.name}}</text> 
				<view v-if='Tabindex==index' class="activeline"></view>
				<view  class="scrollList"><view hover-stop-propagation v-if='!index==0' :class="riseBlean && Tabindex==index?'rises':''">∧</view>
				<view hover-stop-propagation v-if='!index==0' :class="!riseBlean && Tabindex==index?'drops':''">∨</view></view>
				</view>
				<view :class="flexblean?'iconflex':'iconflex2'" @click="flexgood">
					<image :src="flexblean?imgicon1:imgicon2" mode="aspectFill"></image>
				</view>
			</scroll-view>
		</view>
		<view class="top160"></view>
		<good-flex v-if="!goodstate" :data="data" :flexblean="flexblean" :Lk='Lk'></good-flex>
		<view class="goodNull" v-if="Null">没有相关的商品信息</view>
		<load-more v-if="showloadMore && !goodstate" :status="loadMoreText==='加载中...'?'loading':''"></load-more>
		<view class="btnshare" @click="nowIn"><text>邀请</text> <text>升级</text></view>

	</view>
</template>

<script>
	import { requestip } from '../api/api.js'
	export default{
		data(){
			return{
				value:'',
				imgsrc:'../../static/yan.png',
				imgsrc2:'../../static/biyan.png',
				data:'',
				imgblean:false,
				OldKeys:[],
				historyOld:[],
				flexblean:true,
				pages:1,
				goodstate:true,
				cleanstate:true,
				showloadMore:false,
				loadMoreText:"加载中...",
				hotdata:['苹果','梨子','西瓜','海苔'],
				hotstate:true,
				scorrllTop:false,
				defaultKeyword:'输入标题或商品关键字',
				Null:false,
				vlean:false,
				descmenu:[
					{name:"综合",num:0,num2:0},
				    {name:"价格",num:4,num2:3},
					{name:"销量",num:6,num2:5}
				],
				Tabindex:0,
				descnum:0,
				riseBlean:false,
				Lk:1
			}
		},
		methods:{
			// 请求数据
			searchvalue(){
				// 显示商品
				var that=this;
				this.goodstate=false;
				// 隐藏历史记录
				this.cleanstate=false;
				this.loadMoreText='加载中...';
				var value=this.value?this.value:this.defaultKeyword;
				var reg=/^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/;
				if(/^[0-9]+$/.test(value) || reg.test(value)){//这是用正则表达是检查
				// alert('全部是数字');
				this.Null=true;
				}else
				{
			    var str1 = value.replace(/[\'\"\\\/\b\f\n\r\t]/g, '');// 去掉转义字符 
                var str2= str1.replace(/[\-\_\,\!\|\~\`\(\)\#\$\%\^\&\*\{\}\:\;\"\L\<\>\?]/g, '');// 去掉特殊字符
				var value=str2;
				uni.getStorage({
					key: 'OldKeys',
					success: (res) => {
						// console.log(res.data);
						var OldKeys = JSON.parse(res.data);
						var findIndex = OldKeys.indexOf(value);
						if (findIndex == -1) {
							OldKeys.unshift(value);
						} else {
							OldKeys.splice(findIndex, 1);
							OldKeys.unshift(value);
						}
						//最多10个纪录
						OldKeys.length > 10 && OldKeys.pop();
						uni.setStorage({
							key: 'OldKeys',
							data: JSON.stringify(OldKeys)
						});
						this.historyOld = OldKeys; //更新历史搜索
					},
					fail: (e) => {
						var OldKeys = [value];
						uni.setStorage({
							key: 'OldKeys',
							data: JSON.stringify(OldKeys)
						});
						this.historyOld = OldKeys; //更新历史搜索
					}
				});
				// 去重
				// 加载中...
				uni.showLoading({
					title:"加载中..."
				})
				// console.log("OldKeys:",this.OldKeys);
				var Oldkey=this.OldKeys;
				this.data=[];
				// console.log('搜索内容',value);
				uni.request({
					url: requestip()+'/thirdreturn/index/searchgoods?key_word='+value+'&page=1&page=1&sort_type=0',
					method: 'GET',
					header:{
						"access-token":uni.getStorageSync('access-token'),
					    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
					   },
					data: {},
					success: res => {
						// console.log("搜索的数据：",res.data);
						this.data=res.data.goods_search_response.goods_list;
						// 隐藏showloading
						if(res.data.goods_search_response.goods_list==''){
							this.Null=true;
						}
						uni.hideLoading();
					},
					fail: () => {
						this.Null=true;
						// uni.hideLoading();
					},
					complete: () => {}
				});
				}
			},
			imgurl(){
				this.hotstate=!this.hotstate;
			},
			nowIn(){
				uni.navigateTo({
					url:'../invite/invite?gblean=true'
				})
			},
			cleanSearch(){
				var that=this;
				uni.showModal({
					title:"提示",
					content:"你确定清除所以历史记录吗",
					success:res=> {
						if(res.confirm){
						uni.removeStorageSync('OldKeys');
						// 隐藏历史记录
						that.historyOld=[];
						that.cleanstate=false;
						}
					}
				})
				
			},
			// 点击块
			textH(i){
				// 显示商品
				this.goodstate=false;
				// 隐藏历史记录
				this.cleanstate=false;
				this.value=i;
				this.vlean=true;
				var value=i;
				// top==0
				// 去重
				uni.getStorage({
					key: 'OldKeys',
					success: (res) => {
						// console.log(res.data);
						var OldKeys = JSON.parse(res.data);
						var findIndex = OldKeys.indexOf(value);
						if (findIndex == -1) {
							OldKeys.unshift(value);
						} else {
							OldKeys.splice(findIndex, 1);
							OldKeys.unshift(value);
						}
						//最多10个纪录
						OldKeys.length > 10 && OldKeys.pop();
						uni.setStorage({
							key: 'OldKeys',
							data: JSON.stringify(OldKeys)
						});
						this.historyOld = OldKeys; //更新历史搜索
					},
					fail: (e) => {
						var OldKeys = [value];
						uni.setStorage({
							key: 'OldKeys',
							data: JSON.stringify(OldKeys)
						});
						this.historyOld = OldKeys; //更新历史搜索
					}
				});
				// 去重
				uni.request({
					url: requestip()+'/thirdreturn/index/searchgoods?key_word='+this.value+'&page=1&sort_type=0',
					method: 'GET',
					header:{
						"access-token":uni.getStorageSync('access-token'),
					    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
					   },
					data: {},
					success: res => {
						// console.log("搜索的数据：",res.data);
						this.data=res.data.goods_search_response.goods_list;
						// 隐藏showloading
						uni.hideLoading();
							if(res.data.goods_search_response.goods_list==''){
							this.Null=true;
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			valueDt(){
				this.vlean=true;
			},
			clearDall(){
				this.value='';
				this.vlean=false;
			},
			// 数据排序
			menuclicks(t,i){
				this.Tabindex=i;
				this.descnum=t;
				this.showloadMore=true;
				this.pages=1;
				this.riseBlean=!this.riseBlean;
				// 排序请求数据
				this.data=[];
				var value=this.value?this.value:this.defaultKeyword;
				var reg=/^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/;
				if(/^[0-9]+$/.test(value) || reg.test(value)){//这是用正则表达是检查
				// alert('全部是数字');
				this.Null=true;
				this.showloadMore=false;
				}else
				{
				var str1 = value.replace(/[\'\"\\\/\b\f\n\r\t]/g, '');// 去掉转义字符 
				var str2= str1.replace(/[\-\_\,\!\|\~\`\(\)\#\$\%\^\&\*\{\}\:\;\"\L\<\>\?]/g, '');// 去掉特殊字符
				var value=str2;
				uni.request({
					url: requestip()+'/thirdreturn/index/searchgoods?key_word='+value+'&page=1&sort_type='+this.descnum,
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
				}
			},
			// 个人等级
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
		},
		onLoad:function(e) {
			uni.hideShareMenu();
			var oldkey=uni.getStorageSync("OldKeys");
			//继承上一次的搜索记录
			this.OldKeys=uni.getStorageSync("OldKeys");
			if(oldkey==''){
				this.cleanstate=false;
			}else{
				this.historyOld=JSON.parse(oldkey);
			}
			this.value=e.name;
			// console.log('ssss',e.name);
			if(e.name!=undefined){
				this.searchvalue();
				this.vlean=true;
			}
		},
		// 无限加载
		onReachBottom() {
			this.pages+=1;
			this.showloadMore=true;
			var value=this.value?this.value:this.defaultKeyword;
			uni.request({
				url: requestip()+'/thirdreturn/index/searchgoods?key_word='+value+'&page='+this.pages+'&sort_type='+this.descnum,
				method: 'GET',
				header:{
					"access-token":uni.getStorageSync('access-token'),
				    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
				   },
				data: {},
				success: res => {
					// console.log("wuxian:",res.data);
					for(var i=0;i<res.data.goods_search_response.goods_list.length;i++){
						this.data.push(res.data.goods_search_response.goods_list[i])
					}
					this.showloadMore=false;
					if(res.data.goods_search_response.goods_list==0){
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
		// 定位
		onPageScroll(e) {
			// console.log("gun:",e.scrollTop);
			if(e.scrollTop>=40){
				this.scorrllTop=true;
			}else{
				this.scorrllTop=false;
			}
		},
		onShow() {
			this.perLk();
		}
	}
</script>

<style lang="less">
	.searchinput{
		width: 750upx;
		.searchgoods2{
			position: fixed;
			top: 0;
		}
		.top160{
			height: 160upx;
			width: 100%;
		}
		// searchBox
		.searchBox{
			position: relative;
			>.imgcha{
				width: 40upx;
				height: 40upx;
				position: fixed;
				top: 20upx;
				right: 152upx;
				z-index: 100;
			}
			>.imgser{
				width: 32upx;
				height: 32upx;
				position: fixed;
				top: 24upx;
				left: 30upx;
				z-index: 100;
			}
		}
		// 搜索样式
		.searchgoods{
			position: fixed;
			top: 0;
			box-sizing: border-box;
			width: 100%;
			height: 80upx;
			display: flex;
			flex-direction:row;
			justify-content: center;
			align-items: center;
			background-color: #ffffff;
			z-index: 100;
			// input
			input{
				box-sizing: border-box;
				width: 79%;
				height: 56upx;
				background-color: #fff;
				border-radius: 6upx;
				font-size: 26upx;
				// text-indent: 42upx;
				padding-left: 60upx;
				padding-right: 70upx;
				background-color: #EDEDED;
			}
			.searchbox{
				width: 14%;
				height: 56upx;
				line-height: 56upx;
				background-color:#FD4739 ;
				border-radius: 6upx;
				color:#fff;
				text-align: center;
				font-size: 28upx;
				margin-left: 20upx;
			}
		}
		// 搜索记录
		.searchHistory{
			
			// 标题
			.title{
				box-sizing: border-box;
				width: 100%;
				height: 40upx;
				display: flex;
				flex-direction:row;
				justify-content: space-between;
				align-items: center;
				padding: 10upx 20upx;
				view{
					width: 40%;
					height: 40upx;
					line-height: 40upx;
					color:#C2C2C2;
					font-size: 30upx;
				    box-sizing: border-box;
					padding-left: 34upx;
				}
				image{
					padding: 18upx 0 0 0;
					width: 40upx;
					height: 40upx;
				}
				.history{
					position: relative;
					>image{
					    position: absolute;
						top: -16upx;
						left: -8upx;
						width: 40upx;
						height: 40upx;
					}
				}
			}
			// 搜索标签
			.content{
				margin-top: 20upx;
				min-height: 160upx;
				width: 100%;
				text{
					height: 36upx;
					background-color: #F2F2F2;
					color: #6B6B6B;
					display: inline-block;
					font-size: 28upx;
					margin-left: 20upx;
					border-radius: 14upx;
					padding: 10upx 20upx;
					margin-bottom: 20upx;
					max-width: 240upx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
			
		}
		
			// 搜索记录
		.searchHot{
			// 标题
			.title{
				box-sizing: border-box;
				width: 100%;
				height: 40upx;
				display: flex;
				flex-direction:row;
				justify-content: space-between;
				align-items: center;
				padding: 10upx 20upx;
				view{
					width: 40%;
					height: 40upx;
					line-height: 40upx;
					padding-left: 34upx;
					color:#C2C2C2;
					font-size: 30upx;
					box-sizing: border-box;
					padding-left: 34upx;
				}
				image{
					padding: 18upx 0 0 0;
					width: 40upx;
					height: 40upx;
				}
				.hot{
					position: relative;
					>image{
					    position: absolute;
						top: -16upx;
						left: -8upx;
						width: 40upx;
						height: 40upx;
					}
				}
			}
			// 热搜推荐
			.content{
				margin-top: 20upx;
				height: 160upx;
				width: 100%;
				text{
					width: 40upx;
					height: 20upx;
					background-color: #F2F2F2;
					color: #6B6B6B;
					font-size: 28upx;
					margin-left: 20upx;
					border-radius: 14upx;
					padding: 10upx 20upx;
				}
			}
			.tishi{
				color:#cccccc;
				width: 46%;
				height: 180upx;
				line-height: 180upx;
				text-align: cneter;
				margin: 0 auto;
			}
			
		}
		.decscmenu{
			width: 100%;
			position: fixed;
			top:80upx;
			z-index: 666;
		}
		.scrollview {
			width: 32%;
			.scrollList{
				left: 144upx;
			}
		}
		.activeline{
			right: 102upx;
		}
		// 说明
		.explain{
			margin-top: 100upx;
			.plain{
				width: 80%;
				height: 80upx;
				text-align: center;
				line-height: 80upx;
				color:#C2C2C2;
				margin-left:10%;
				position: relative;
				>image:first-child{
					position: absolute;
					top: 40upx;
					left: 50upx;
					width: 20%;
					height: 2upx;
				}
				>image:nth-child(2){
					position: absolute;
					top: 40upx;
					right: 80upx;
					width: 20%;
					height: 2upx;
				}
			}
				image{
					width: 90%;
					height: 100upx;
					margin-left: 5%;
					border-radius: 20upx;
				}
		}
	}
	.goodNull{
		width: 100%;
		height: 80upx;
		color: #6B6B6B;
		line-height: 80upx;
		text-align: center;
	}
</style>
