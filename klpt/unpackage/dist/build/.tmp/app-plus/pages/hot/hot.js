(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/hot/hot"],{"1a33":function(t,e,o){"use strict";o.r(e);var s=o("56df"),n=o("aac9");for(var a in n)"default"!==a&&function(t){o.d(e,t,function(){return n[t]})}(a);o("c838");var l=o("2877"),i=Object(l["a"])(n["default"],s["a"],s["b"],!1,null,null,null);e["default"]=i.exports},4517:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=o("340c"),n=l(o("504f")),a=l(o("a8c4"));function l(t){return t&&t.__esModule?t:{default:t}}var i={components:{GoodFlex:n.default,LoadMores:a.default},data:function(){return{descmenu:[{name:"时实热销榜",num:1},{name:"时实收益榜",num:2},{name:"今日销售榜",num:3}],Tabindex:0,flexblean:!0,data:[],hotclicknum:1,hotpages:0,showloadMore:!1,loadMoreText:"加载中...",bannnerimgs:"",scrollTopBlean:!1}},onLoad:function(){var e=this;this.showloadMore=!0,t.request({url:(0,s.requestip)()+"/thirdreturn/index/explosiongoods?offset=0&sort_type=1",method:"GET",header:{"Cache-Control":"public,max-age=600"},data:{},success:function(t){console.log("热销初始化数据：",t.data),e.data=t.data.top_goods_list_get_response.list,e.showloadMore=!1},fail:function(){},complete:function(){}})},methods:{menuclicks:function(e,o){var n=this;this.Tabindex=o,this.hotclicknum=e.num,this.showloadMore=!0,this.hotpages=o,this.data="",t.request({url:(0,s.requestip)()+"/thirdreturn/index/explosiongoods?offset=0&sort_type="+this.hotclicknum,method:"GET",data:{},success:function(t){console.log("点击热销数据:",t.data),n.data=t.data.top_goods_list_get_response.list,n.showloadMore=!1},fail:function(){},complete:function(){}})}},onReachBottom:function(){var e=this;this.showloadMore=!0,this.hotpages=this.hotpages+10+this.hotclicknum,t.request({url:(0,s.requestip)()+"/thirdreturn/index/explosiongoods?offset="+this.hotpages+"&sort_type="+this.hotclicknum,method:"GET",data:{},success:function(t){console.log("热销触底数据：",t.data);for(var o=0;o<t.data.top_goods_list_get_response.list.length;o++)e.data.push(t.data.top_goods_list_get_response.list[o]);e.showloadMore=!1,0==t.data.top_goods_list_get_response.list&&(e.loadMoreText="没有更多数据了",e.showloadMore=!0)},fail:function(){},complete:function(){}})},onPageScroll:function(t){t.scrollTop>150?this.scrollTopBlean=!0:this.scrollTopBlean=!1},destroyed:function(){}};e.default=i}).call(this,o("6e42")["default"])},"56df":function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view",{staticClass:"hostsale"},[o("navigator",{attrs:{url:"../bannerpush/bannerpush"}},[o("image",{attrs:{src:"../../static/banner.png",mode:"widthFix"}})]),o("view",{class:t.scrollTopBlean?"decscmenu2":"decscmenu"},[o("scroll-view",{staticClass:"scrollmenu",attrs:{"scroll-x":""}},t._l(t.descmenu,function(e,s){return o("view",{key:s,staticClass:"scrollview",class:t.Tabindex==s?"actives":"",attrs:{eventid:"be5cf582-0-"+s},on:{click:function(o){t.menuclicks(e,s)}}},[t._v(t._s(e.name))])}))],1),o("good-flex",{attrs:{data:t.data,flexblean:t.flexblean,mpcomid:"be5cf582-0"}}),t.showloadMore?o("load-mores",{attrs:{status:"加载中..."===t.loadMoreText?"loading":"",mpcomid:"be5cf582-1"}}):t._e()],1)},n=[];o.d(e,"a",function(){return s}),o.d(e,"b",function(){return n})},aac9:function(t,e,o){"use strict";o.r(e);var s=o("4517"),n=o.n(s);for(var a in s)"default"!==a&&function(t){o.d(e,t,function(){return s[t]})}(a);e["default"]=n.a},b86b:function(t,e,o){"use strict";o("12e0");var s=a(o("b0ce")),n=a(o("1a33"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(n.default))},c838:function(t,e,o){"use strict";var s=o("e03e"),n=o.n(s);n.a},e03e:function(t,e,o){}},[["b86b","common/runtime","common/vendor"]]]);