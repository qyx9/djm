(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/fans/fans"],{"43a2":function(t,a,e){"use strict";e.r(a);var n=e("c241"),s=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(a,t,function(){return n[t]})}(i);a["default"]=s.a},"5bfd":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"fans"},[e("view",{staticClass:"Tips"},[e("text",[t._v("还差"+t._s(t.num)+"个粉丝下单,可升级LV"+t._s(t.level)+"返利(100%)")])]),e("view",{staticClass:"content"},[e("view",{staticStyle:{"border-bottom":"1px solid #F5F5F5",color:"#FD6155"}},[t._v("粉丝:"+t._s(t.data?t.data:0))]),t._l(t.datas,function(a,n){return t.datas?e("view",{key:n},[e("view",{staticClass:"fasList",staticStyle:{"border-bottom":"1px solid #F5F5F5"}},[e("image",{attrs:{src:a.avr_img,mode:"widthFix"}}),e("text",[t._v(t._s(a.name))]),e("text",[t._v(t._s(a.created_at))]),e("button",{staticClass:"recalls",attrs:{"open-type":"share",eventid:"0f287963-0-"+n},on:{click:function(e){t.recall(a.name)}}},[t._v("召回")]),e("text",{style:1==a.is_available?"":"color:#FD4739"},[t._v(t._s(1==a.is_available?"已购买":"未购买"))])],1)]):t._e()})],2)])},s=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return s})},"60b2":function(t,a,e){},"9bc9":function(t,a,e){"use strict";var n=e("60b2"),s=e.n(n);s.a},c241:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e("340c"),s={data:function(){return{data:"",num:0,level:"",datas:[]}},methods:{Faninit:function(a){var e=this,s=t.getStorageSync("userId");t.request({url:(0,n.requestip)()+"/v2/customer/wx/"+a.name+"?user_id="+s,method:"GET",data:{},success:function(t){console.log("fans数据:",t.data.data.fans_list),e.data=t.data.data.fans_list.fan_count,console.log("fans数据:",t.data.data.fans_list.fans_list),e.datas=t.data.data.fans_list.fans_list},fail:function(){},complete:function(){}})},recall:function(a){t.setClipboardData({data:a,success:function(t){console.log("复制内容成功")}})}},onLoad:function(t){console.log("fans页面值：",t),this.num=t.num,this.level=parseInt(t.level)+1,this.Faninit(t)},onShareAppMessage:function(){return{title:"邀请链接",path:"pages/index/index?oparentid="+this.UserId+"&channel=1",imageUrl:"../../static/banner.png"}}};a.default=s}).call(this,e("6e42")["default"])},e61b:function(t,a,e){"use strict";e("12e0");var n=i(e("b0ce")),s=i(e("ee48"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(s.default))},ee48:function(t,a,e){"use strict";e.r(a);var n=e("5bfd"),s=e("43a2");for(var i in s)"default"!==i&&function(t){e.d(a,t,function(){return s[t]})}(i);e("9bc9");var o=e("2877"),l=Object(o["a"])(s["default"],n["a"],n["b"],!1,null,null,null);a["default"]=l.exports}},[["e61b","common/runtime","common/vendor"]]]);