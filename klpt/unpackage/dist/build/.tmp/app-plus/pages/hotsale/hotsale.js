(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/hotsale/hotsale"],{"04bf":function(t,e,o){},"287f":function(t,e,o){"use strict";var a=o("04bf"),n=o.n(a);n.a},"727f":function(t,e,o){"use strict";o.r(e);var a=o("b7ba"),n=o("a44e");for(var s in n)"default"!==s&&function(t){o.d(e,t,function(){return n[t]})}(s);o("287f");var i=o("2877"),d=Object(i["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=d.exports},"843a":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,n=d(o("504f")),s=d(o("a8c4")),i=o("340c");function d(t){return t&&t.__esModule?t:{default:t}}function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var c=(a={components:{GoodFlex:n.default,LoadMore:s.default},data:function(){return{Tabindex:0,data:"",flexblean:!0,Pdata:"",showloadMore:!1,loadMoreText:"加载中...",pages:1,ranblean:!0}},onLoad:function(){},methods:{menuclicks:function(t){this.Tabindex=t},jiang:function(){},TabIndex:function(e,o){var a=this;this.Tabindex=o,this.pages=1,this.Pdata=[],this.showloadMore=!0;var n=e.opt_id;t.setStorageSync("HotId",n),t.request({url:(0,i.requestip)()+"/thirdreturn/index/classgoods?class_id="+e.opt_id+"&page=1&is_sub=0&prent_id="+e.opt_id,method:"GET",data:{},success:function(t){console.log("排行榜数据：",t.data),a.Pdata=t.data.goods_search_response.goods_list,a.showloadMore=!1},fail:function(){},complete:function(){}})},foodList:function(){var e=this;t.setStorageSync("HotId",1),t.request({url:(0,i.requestip)()+"/thirdreturn/index/classgoods?class_id=1&page=1&is_sub=0&prent_id=1",method:"GET",data:{},success:function(t){console.log("食品初始化数据：",t.data),e.Pdata=t.data.goods_search_response.goods_list},fail:function(){},complete:function(){}})}}},r(a,"onLoad",function(){var e=this;t.showLoading({title:"加载中..."}),t.request({url:(0,i.requestip)()+"/thirdreturn/index/goodsopt",method:"GET",data:{},success:function(o){console.log("初始化数据：",o.data),e.data=o.data.goods_opt_get_response.goods_opt_list,t.hideLoading()},fail:function(){},complete:function(){}}),this.foodList()}),r(a,"onReachBottom",function(){var e=this;this.pages+=1;var o=t.getStorageSync("HotId");this.showloadMore=!0,t.request({url:(0,i.requestip)()+"/thirdreturn/index/classgoods?class_id="+o+"&page="+this.pages+"&is_sub=0&prent_id="+o,method:"GET",data:{},success:function(t){console.log("hot触底数据：",t.data);for(var o=0;o<t.data.goods_search_response.goods_list.length;o++)e.Pdata.push(t.data.goods_search_response.goods_list[o]);e.showloadMore=!1,0==t.data.goods_search_response.goods_list&&(e.loadMoreText="没有更多数据了",e.showloadMore=!0)},fail:function(){},complete:function(){}})}),r(a,"destroyed",function(){}),a);e.default=c}).call(this,o("6e42")["default"])},a438:function(t,e,o){"use strict";o("12e0");var a=s(o("b0ce")),n=s(o("727f"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(n.default))},a44e:function(t,e,o){"use strict";o.r(e);var a=o("843a"),n=o.n(a);for(var s in a)"default"!==s&&function(t){o.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},b7ba:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view",{staticClass:"hostsale"},[o("scroll-view",{staticClass:"hotList",attrs:{"scroll-x":""}},t._l(t.data,function(e,a){return o("view",{key:a,class:t.Tabindex==a?"hotMenu active":"hotMenu",attrs:{eventid:"0a45aecd-0-"+a},on:{click:function(o){t.TabIndex(e,a)}}},[t._v(t._s(e.opt_name)),t.Tabindex==a?o("view",{staticClass:"activeline"}):t._e()])})),o("view",{staticClass:"goodMargin"}),o("good-flex",{attrs:{data:t.Pdata,flexblean:t.flexblean,ranblean:t.ranblean,mpcomid:"0a45aecd-0"}}),t.showloadMore?o("load-more",{attrs:{status:"加载中..."===t.loadMoreText?"loading":"",mpcomid:"0a45aecd-1"}}):t._e()],1)},n=[];o.d(e,"a",function(){return a}),o.d(e,"b",function(){return n})}},[["a438","common/runtime","common/vendor"]]]);