(function(t){function s(s){for(var a,r,o=s[0],c=s[1],l=s[2],f=0,v=[];f<o.length;f++)r=o[f],n[r]&&v.push(n[r][0]),n[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(s);while(v.length)v.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var t,s=0;s<i.length;s++){for(var e=i[s],a=!0,o=1;o<e.length;o++){var c=e[o];0!==n[c]&&(a=!1)}a&&(i.splice(s--,1),t=r(r.s=e[0]))}return t}var a={},n={"personal-main":0},i=[];function r(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.e=function(){return Promise.resolve()},r.m=t,r.c=a,r.d=function(t,s,e){r.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,s){if(1&s&&(t=r(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)r.d(e,a,function(s){return t[s]}.bind(null,a));return e},r.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(s,"a",s),s},r.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=s,o=o.slice();for(var l=0;l<o.length;l++)s(o[l]);var u=c;i.push([13,"chunk-vendors","chunk-common"]),e()})({13:function(t,s,e){t.exports=e("9b54")},"8b1e":function(t,s,e){"use strict";var a=e("9add"),n=e.n(a);n.a},"9add":function(t,s,e){},"9b54":function(t,s,e){"use strict";e.r(s);var a=e("2b0e"),n=(e("3a10"),function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"container-fluid"},[t._m(0),t.userInfo?e("div",{staticClass:"info"},[e("div",{staticClass:"img-kuang"},[t.userInfo&&t.userInfo.userPhotoUrl?e("img",{staticClass:"img-touxiang",attrs:{src:t.userInfo.userPhotoUrl}}):t._e()]),t.userInfo&&t.userInfo.userRealname?e("div",{staticClass:"user-name"},[t._v(t._s(t.userInfo.userRealname))]):t._e(),"0"===t.userInfo.userSex?e("i",{staticClass:"iconfont icongerenshouye-nan icon-sex",staticStyle:{color:"cadetblue"}}):e("i",{staticClass:"iconfont icongerenshouye-nv icon-sex",staticStyle:{color:"pink"}}),e("div",{staticClass:"user-set",on:{click:t.setting}},[e("i",{staticClass:"iconfont icongerenshouye-shezhi"}),t._v("设置")]),e("div",{staticClass:"jifen"},[t._v("积分：488")]),e("div",{staticClass:"jifen"},[t.userInfo&&t.userInfo.facultyName?e("span",[t._v(t._s(t.userInfo.facultyName))]):t._e(),t.userInfo&&t.userInfo.userEnterYear?e("span",[t._v(" / "+t._s(t.userInfo.userEnterYear)+"级")]):t._e(),t.userInfo&&t.userInfo.majorName?e("span",[t._v(" / "+t._s(t.userInfo.majorName))]):t._e(),t.userInfo&&t.userInfo.userClassName?e("span",[t._v(" / "+t._s(t.userInfo.userClassName))]):t._e()]),t._m(1),t._m(2),t._m(3)]):t._e(),e("div",{staticClass:"school-training",on:{click:function(s){return t.checkGo("school-main.html")}}},[e("div",{staticClass:"font-square-top"},[t._v("校园实训")]),t._m(4)]),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),0!==t.taskData.length?e("div",{staticClass:"task-list"},t._l(t.taskData,function(s){return e("div",{key:s.taskCode,staticClass:"task"},[e("span",{staticClass:"daily-clock"},[t._v(t._s(s.taskName))]),e("i",{staticClass:"iconfont icongerenshouye-naozhong1 task-time"}),e("span",{staticClass:"task-time"},[t._v("12:07:34")]),e("div",{staticStyle:{height:"1px",background:"rgba(60,40,110,1)",width:"100%",float:"left","margin-top":"8px"}}),e("span",{staticClass:"task-detail"},[t._v(t._s(s.taskDescription))]),e("span",{staticClass:"task-detail"},[t._v("奖励：积分值"),e("span",{staticStyle:{color:"#FF8717"}},[t._v("+"+t._s(s.taskScore))])]),e("span",{staticClass:"to-complete",on:{click:function(e){return t.goUrl(s)}}},[t._v("去完成")])])}),0):t._e()])])}),i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-6"},[e("div",{staticClass:"text-left",staticStyle:{color:"white",height:"88px","line-height":"88px"}},[e("i",{staticClass:"iconfont iconlogo"}),e("span",{staticClass:"lying-title"},[t._v("励英网")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"info-bottom"},[e("span",{staticClass:"info-shuzi"},[t._v("86")]),e("span",{staticClass:"jifen",staticStyle:{"margin-left":"0px","margin-top":"5px"}},[t._v("能力评分")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"info-bottom"},[e("span",{staticClass:"info-shuzi"},[t._v("88")]),e("span",{staticClass:"jifen",staticStyle:{"margin-left":"0px","margin-top":"5px"}},[t._v("累计上传")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"info-bottom"},[e("span",{staticClass:"info-shuzi"},[t._v("1")]),e("span",{staticClass:"jifen",staticStyle:{"margin-left":"0px","margin-top":"5px"}},[t._v("学院排名")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"font-square-bottom"},[t._v("Web前端基础”"),e("br"),t._v("有新课程开课啦！")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"square"},[e("div",{staticClass:"font-square-top"},[t._v("企业定向")]),e("a",{staticClass:"font-square-bottom"},[t._v("Web前端基础”"),e("br"),t._v("有新课程开课啦！")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"square"},[e("div",{staticClass:"font-square-top"},[t._v("测评中心")]),e("a",{staticClass:"font-square-bottom"},[t._v("Web前端基础”"),e("br"),t._v("有新课程开课啦！")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"square"},[e("div",{staticClass:"font-square-top"},[t._v("实习兼职")]),e("a",{staticClass:"font-square-bottom"},[t._v("Web前端基础”"),e("br"),t._v("有新课程开课啦！")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"post-training"},[e("div",{staticClass:"font-square-top"},[t._v("岗位训练")]),e("a",{staticClass:"font-square-bottom"},[t._v("Web前端基础”"),e("br"),t._v("有新课程开课啦！")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"square"},[e("div",{staticClass:"font-square-top"},[t._v("砺英社区")]),e("a",{staticClass:"font-square-bottom"},[t._v("Web前端基础”"),e("br"),t._v("有新课程开课啦！")])])}],r={name:"app",mounted(){this.loadData()},data(){return{userInfo:null,taskData:[],userIsCompleted:!0}},methods:{loadData(){let t=this;this.$http.post("/user/queryuserinfo",{},s=>{s.success&&(t.userInfo=s.data)}),t.$http.post("/homepage/queryplatformtasklist",{},s=>{if(console.log(s),s.success){t.taskData=s.data;for(var e=0;e<t.taskData.length;e++)"1001"===t.taskData[e].taskCode&&(t.userIsCompleted=!1)}})},goUrl(t){if(!1===this.userIsCompleted)return this.$alert("请先完善个人信息！","提示",{confirmButtonText:"确定"}),!1;window.location=t.taskUrl},setting(){window.location="personal-set.html"},checkGo(t){if(!1===this.userIsCompleted)return this.$alert("请先完善个人信息！","提示",{confirmButtonText:"确定"}),!1;window.location=t}}},o=r,c=(e("8b1e"),e("2877")),l=Object(c["a"])(o,n,i,!1,null,"cca2f9a0",null),u=l.exports,f=e("751a");a["default"].prototype.$http=f["a"],new a["default"]({render:t=>t(u)}).$mount("#app")}});
//# sourceMappingURL=personal-main.66478e5b.js.map