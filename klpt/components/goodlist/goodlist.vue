<template>
	<view class="food">
		<view class="foodlist" v-if='propMu'>
			<view class="menumsg" v-for="(item,index) in propsdata==''?data:propsdata" :key="index"
			@click="goodfoodList(item,index)">
			<image :src="item.img" mode="aspectFit"></image>
			<text>{{item.name}}</text> 
			</view>
		</view>
		<view class="margin20" v-if='propMu'></view>
	 <load-mores v-if="showloadMore" :status="loadMoreText==='加载中...'?'loading':''" ></load-mores>
	</view>
</template>

<script>
	import LoadMores from '../../components/uni-load-more/uni-load-more.vue'
	import { requestip } from '../../pages/api/api.js'
	export default {
		components:{
			LoadMores
		},
		data(){
			return{
				// Tabindex:0,
				descmenu:[
					{name:"综合",num:0,num2:0},
				    {name:"价格",num:4,num2:3},
				    {name:"销量",num:6,num2:5}
				],
				product:[1,2,3,4,5],
				// fixmenu:false,
				moneydata:'',
				opt_id:'',
				descnum:0,
				propsData:'',
				propsData2:[],
				propsDatas2:[],
				pages:1,
				flexblean:true,
				imgicon1:"../../static/hengx2.png",
				imgicon2:"../../static/shu2x.png",
				propsDb:true,
				showloadMore:false,
				loadMoreText:"加载中...",
				// riseBlean:false,
				Lk:1,
				rebte:0.5
			}
		},
		props:{
			propsdata:{
				type:Object,
				defualt:function(e){
					return {}
				}
			},
			propsdata2:{
				type:Object,
				defualt:function(e){
					return {}
				}
			},
			propsDatas2:{
				type:Object,
				defualt:function(e){
					return {}
				}
			},
			propMu:{
				type:Boolean,
				defualt:true
			},
			router:{
				type:String,
				default:null
			}
		},
		computed: {
			scrollHeight() {
				var sr=0;
				uni.getSystemInfo({
					success(res) {
					 sr=res.windowHeight;
					}
				})
				return sr 
			}
		},
		filters: {
		  numFilter(value) {
		  // 截取当前数据到小数点后两位
			let realVal = parseFloat(value).toFixed(1)
			return realVal
		  }
		},
		methods:{
			// 排序点击获取数据
			// menuclicks(i,n){
			// 	this.Tabindex=n;
			// 	// 排序方式
			// 	this.descnum=i;
			// 	uni.setStorageSync('descnum',i);
			// 	// this.propsDb=false;
			// 	this.riseBlean=!this.riseBlean;
			// 	// 获取opt_id;
			// 	this.opt_id=uni.getStorageSync('optId');
			// 	this.propsDatas2=[];
			// 	this.propsData2=[];
			// 	this.showloadMore=true;
			// 	uni.request({
			// 		url: requestip()+'/thirdreturn/index/classgoodsbysort?class_id='+this.opt_id+'&page='+this.pages+'&is_sub=0&prent_id='+this.opt_id+'&sort_type='+this.descnum,
			// 		method: 'GET',
			// 		header:{
			// 			"access-token":uni.getStorageSync('access-token'),
			// 		    "fecshop-uuid":uni.getStorageSync('Fecshop-Uuid')
			// 		   },
			// 		data: {},
			// 		success: res => {
			// 			// console.log("主页的排序数据2：",res.data);
			// 			this.propsDatas2=res.data.goods_search_response.goods_list;
			// 			this.showloadMore=false;
			// 		},
			// 		fail: () => {},
			// 		complete: () => {}
			// 	});
			// },
			// 小菜单跳转数据
			goodfoodList(t,i){
				var allId=uni.getStorageSync('optId');
				uni.setStorageSync('goodLike',t.opt_id);
				var uid=uni.getStorageSync('userId');
				if(t.topTid){
					
					uni.navigateTo({
						url:"../../pages/gooList/gooList?id="+allId+'&num=1&name='+t.name
					})
				}else{
					uni.navigateTo({
						url:"../../pages/gooList/gooList?id="+t.opt_id+'&num=0&name='+t.name,
						success() {
							// 菜单日志发送
							uni.request({
								url: 'https://appserver.dijiamai.net/thirdreturn/index/applog',
								method: 'GET',
								data: {
									event_type:'click_opt',
									log_json:{'user_id':uid,'opt_id':t.opt_id}
								}
							});
						}
					})
				}
			},
			goodLm(i){
				getApp().mtj.trackEvent('djm_test', { goods_id: i.goods_id,  url_form: this.router, });
				uni.navigateTo({
					url:'../../pages/productmess/productmess?id='+i.goods_id+'&sheng='+i.upgrade_rebate+'&ling='+i.now_rebate
				})
			},
			
		    rules(){
				uni.navigateTo({
					url:'../../pages/rules/rule'
				})
			}
		},
		// 在微信和app中可以用h5无效果
		onPageScroll(e) {
			// console.log(e);
			if(e.scrollTop>=240){
				 this.fixmenu=true;
			}else{
				this.fixmenu=false;
			}
		},
		onLoad() {
			
		},
		onShow() {
			this.propsDatas2=[]
			var i=uni.getStorageSync('rank');
			this.Lk=i;
			// console.log('当前等级',i);
			if(this.Lk==1){
			   this.rebte=0.5;
			}else if(this.Lk==2){
				this.rebte=0.7;
			}else{
				this.rebte=1;
			}
		}
	}
</script>

<style lang="less">
.descposit{
	position: fixed;
	top:298upx;
	width: 100%;
	z-index: 50;
}
.boxgood{
	width: 100%;
	box-sizing: border-box;
    display:flex;
	flex-direction: row;
	flex-wrap: wrap;
	padding-left: 20upx;
	background-color: #F5F5F5;
}
.boxgood2{
	width: 100%;
    display:flex;
	flex-direction: row;
	flex-wrap: wrap;
	padding-top: 16upx;
}
.goodBL .goodLmdesc .juan{
    width: 328upx;
    height: 40upx;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    padding: 18upx 10upx 0 6upx;
}

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
.margin20{
	height: 20upx;
	width: 100%;
	background-color: #F5F5F5;
}
</style>
