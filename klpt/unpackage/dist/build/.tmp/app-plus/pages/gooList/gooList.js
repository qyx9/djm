(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/gooList/gooList"],{"442af":function(t,e,o){"use strict";var s=o("6c3c"),a=o.n(s);a.a},"67a9":function(t,e,o){"use strict";o.r(e);var s=o("e644"),a=o("d6fe");for(var n in a)"default"!==n&&function(t){o.d(e,t,function(){return a[t]})}(n);o("442af");var i=o("2877"),d=Object(i["a"])(a["default"],s["a"],s["b"],!1,null,null,null);e["default"]=d.exports},"6c3c":function(t,e,o){},cbd2:function(t,e,o){"use strict";o("12e0");var s=n(o("b0ce")),a=n(o("67a9"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(a.default))},d6fe:function(t,e,o){"use strict";o.r(e);var s=o("da32"),a=o.n(s);for(var n in s)"default"!==n&&function(t){o.d(e,t,function(){return s[t]})}(n);e["default"]=a.a},da32:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(o("a8c4")),a=o("340c"),n=i(o("504f"));function i(t){return t&&t.__esModule?t:{default:t}}var d={components:{LoadMoresg:s.default,GoodFlex:n.default},data:function(){return{descmenu:[{name:"综合",num:0,num2:0},{name:"价格",num:4,num2:5},{name:"销量",num:6,num2:7}],propsdata:"",data:"",tabIndex:0,topIndex:0,topdata:"",topIDF:!1,Catalog:"",datalog:"",pages:1,opt_id:"",showloadMore:!1,loadMoreText:"加载中...",descnum:0,flexblean:!0,imgicon1:"../../static/hengx2.png",imgicon2:"../../static/shu2x.png",riseBlean:!1}},methods:{descMenu:function(e,o){var s=this;this.tabIndex=o,this.descnum=e,this.opt_id=t.getStorageSync("optId"),this.showloadMore=!0,this.pages=1,this.riseBlean=!this.riseBlean,this.data="",t.pageScrollTo({duration:100,scrollTop:0}),t.request({url:(0,a.requestip)()+"/thirdreturn/index/classgoodsbysort?class_id="+this.opt_id+"&page="+this.pages+"&is_sub=0&prent_id="+this.opt_id+"&sort_type="+this.descnum,method:"GET",data:{},success:function(t){console.log("desc数据:",t.data),s.data=t.data.goods_search_response.goods_list,s.showloadMore=!1},fail:function(){},complete:function(){}})},goodLm:function(e){t.navigateTo({url:"../productmess/productmess?id="+e.goods_id})},catalog:function(e,o){var s=this;this.topIndex=o,t.setStorageSync("optId",e.opt_id),t.pageScrollTo({duration:100,scrollTop:0}),t.request({url:(0,a.requestip)()+"/thirdreturn/index/classgoods?class_id="+e.opt_id+"&page="+this.pages+"&is_sub=0&prent_id="+e.opt_id+"&sort_type="+this.descnum,method:"GET",data:{},success:function(t){console.log("点击返回数据",t.data),s.data=t.data.goods_search_response.goods_list},fail:function(t){console.log("错误信息:",t)},complete:function(){}})},flexgoods:function(){this.flexblean=!this.flexblean},goodidInit:function(e){var o=this;t.request({url:(0,a.requestip)()+"/thirdreturn/index/classgoods?class_id="+e.id+"&page=1&is_sub="+e.num+"&prent_id="+e.id+"&sort_type="+this.descnum,method:"GET",data:{},success:function(s){0==e.num?(console.log("下面数据:",s.data),o.data=s.data.goods_search_response.goods_list,console.log(o.data),t.hideLoading()):(console.log("头部数据",s.data),o.data=s.data[1].goods_search_response.goods_list,o.Catalog=s.data[0].goods_opt_get_response.goods_opt_list,o.topIDF=!o.topIDF,t.hideLoading())}})},freeshiping:function(){}},onLoad:function(e){console.log(e),this.datalog=e.name,console.log("opid:",e),this.topdata=e.opid;e.id;t.setNavigationBarTitle({title:e.name}),t.showLoading({title:"加载中.."}),this.goodidInit(e),this.topIDF=!1,console.log(this.topIDF)},onReachBottom:function(){var e=this;this.pages+=1,this.opt_id=t.getStorageSync("optId"),this.showloadMore=!0,t.request({url:(0,a.requestip)()+"/thirdreturn/index/classgoods?class_id="+this.opt_id+"&page="+this.pages+"&is_sub=0&prent_id="+this.opt_id+"&sort_type="+this.descnum,method:"GET",data:{},success:function(t){console.log("触底数据:",t.data);for(var o=0;o<t.data.goods_search_response.goods_list.length;o++)e.data.push(t.data.goods_search_response.goods_list[o]);e.showloadMore=!1},fail:function(t){console.log("errmsg",t)},complete:function(){}})},onBackPress:function(){var e=t.getStorageSync("backoptId");t.setStorageSync("optId",e),console.log("onBackPress")}};e.default=d}).call(this,o("6e42")["default"])},e644:function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view",{staticClass:"goodListMess"},[o("view",{staticClass:"yedou"},[t.topIDF?o("scroll-view",{staticClass:"uni-swiper-tab",attrs:{"scroll-x":""}},t._l(t.Catalog,function(e,s){return o("view",{key:s,class:t.topIndex==s?"active goodListMenu":"goodListMenu",attrs:{eventid:"a89255a2-0-"+s},on:{click:function(o){t.catalog(e,s)}}},[o("text",[t._v(t._s(e.opt_name))])])})):t._e(),o("view",{class:t.topIDF?"topPosition decscmenu":"NonePosition decscmenu"},[t._l(t.descmenu,function(e,s){return o("view",{key:s,staticClass:"descName",class:t.tabIndex==s?"activedesc":"",attrs:{eventid:"a89255a2-1-"+s},on:{click:function(o){t.descMenu(t.riseBlean?e.num:e.num2,s,s)}}},[o("text",[t._v(t._s(e.name))]),t.tabIndex==s?o("view",{staticClass:"activeline"}):t._e(),o("view",{staticClass:"scrollList"},[0==!s?o("view",{staticClass:"fnt",class:t.riseBlean&&t.tabIndex==s?"rises":""},[t._v("∧")]):t._e(),0==!s?o("view",{staticClass:"fnt",class:t.riseBlean||t.tabIndex!=s?"":"drops"},[t._v("∨")]):t._e()])])}),o("view",{class:t.flexblean?"iconflex":"iconflex2",attrs:{eventid:"a89255a2-2"},on:{click:t.flexgoods}},[o("image",{attrs:{src:t.flexblean?t.imgicon1:t.imgicon2,mode:"aspectFill"}})])],2)],1),o("view",{class:t.topIDF?"allTopMargin":"topMargin"}),o("good-flex",{attrs:{data:t.data,flexblean:t.flexblean,mpcomid:"a89255a2-0"}}),o("view",{staticClass:"showmore"},[t.showloadMore?o("load-moresg",{attrs:{status:"加载中..."===t.loadMoreText?"loading":"",mpcomid:"a89255a2-1"}}):t._e()],1)],1)},a=[];o.d(e,"a",function(){return s}),o.d(e,"b",function(){return a})}},[["cbd2","common/runtime","common/vendor"]]]);