(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/appPwd/appPwd"],{5887:function(t,e,a){"use strict";a.r(e);var n=a("a812"),i=a.n(n);for(var u in n)"default"!==u&&function(t){a.d(e,t,function(){return n[t]})}(u);e["default"]=i.a},"82c5":function(t,e,a){"use strict";a.r(e);var n=a("aa7c"),i=a("5887");for(var u in i)"default"!==u&&function(t){a.d(e,t,function(){return i[t]})}(u);var o=a("2877"),r=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports},"87e8":function(t,e,a){"use strict";a("12e0");var n=u(a("b0ce")),i=u(a("82c5"));function u(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(i.default))},a812:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i(a("d772"));var n=i(a("e17f"));function i(t){return t&&t.__esModule?t:{default:t}}var u={components:{mInput:n.default},data:function(){return{email:""}},methods:{findPassword:function(){this.email.length<3||!~this.email.indexOf("@")?t.showToast({icon:"none",title:"邮箱地址不合法"}):t.showToast({icon:"none",title:"已发送重置邮件至注册邮箱，请注意查收。",duration:3e3})}}};e.default=u}).call(this,a("6e42")["default"])},aa7c:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"content"},[a("view",{staticClass:"input-group"},[a("view",{staticClass:"input-row"},[a("text",{staticClass:"title"},[t._v("邮箱：")]),a("m-input",{attrs:{type:"text",focus:"",clearable:"",placeholder:"请输入邮箱",eventid:"1ea08fba-0",mpcomid:"1ea08fba-0"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)]),a("view",{staticClass:"btn-row"},[a("button",{staticClass:"primary",attrs:{type:"primary",eventid:"1ea08fba-1"},on:{tap:t.findPassword}},[t._v("提交")])],1)])},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})}},[["87e8","common/runtime","common/vendor"]]]);