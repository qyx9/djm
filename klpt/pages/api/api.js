// 请求地址
var server_IP='https://appserver.dijiamai.net';
// 请求头数据
var headerData={"Content-Type":"application/x-www-form-urlencoded","access-token":uni.getStorageSync('access-token'),
"fecshop-uuid":uni.getStorageSync('Fecshop-Uuid'),}
// 暴露函数
export function requestip(){
	return server_IP;
}
export function headerList(){
	return headerData;
}
var uuid=uni.getStorageSync('Fecshop-Uuid');
export function inspects(options){
	if(uuid!==options){
		uni.setStorageSync('Fecshop-Uuid',options);
	}
}

