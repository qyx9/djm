<template>
	<view class="jiantou" @click="topzero" v-show="topblean">
		<image :src="src" mode="widthFix"></image>
	</view>
</template>

<script>
	export default{
		props:{
			topblean:{
				type:Boolean,
				default:false
			}
		},
		data(){
			return{
				src:'../../static/jiantou.png'
			}
		},
		methods:{
			// 返回顶部
			 topzero(){
				   uni.pageScrollTo({
					scrollTop:0,
					duration:300
				   })
			},
		}
	}
</script>

<style>
.jiantou{
	width: 60upx;
	height: 60upx;
	position: fixed;
	bottom: 16upx;
	right: 20upx;
}
.jiantou>image{
	width: 60upx;
	height: 60upx;
	border-radius: 50%;
	border: 2upx solid #CCCCCC;
	background-color: #FFFFFF;
}
</style>
