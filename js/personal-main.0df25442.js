(function(t){function s(s){for(var a,o,r=s[0],l=s[1],c=s[2],f=0,p=[];f<r.length;f++)o=r[f],i[o]&&p.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(s);while(p.length)p.shift()();return n.push.apply(n,c||[]),e()}function e(){for(var t,s=0;s<n.length;s++){for(var e=n[s],a=!0,r=1;r<e.length;r++){var l=e[r];0!==i[l]&&(a=!1)}a&&(n.splice(s--,1),t=o(o.s=e[0]))}return t}var a={},i={"personal-main":0},n=[];function o(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.e=function(){return Promise.resolve()},o.m=t,o.c=a,o.d=function(t,s,e){o.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,s){if(1&s&&(t=o(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)o.d(e,a,function(s){return t[s]}.bind(null,a));return e},o.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(s,"a",s),s},o.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=s,r=r.slice();for(var c=0;c<r.length;c++)s(r[c]);var u=l;n.push([16,"chunk-vendors","chunk-common"]),e()})({16:function(t,s,e){t.exports=e("9b54")},"5a0c":function(t,s,e){"use strict";var a=e("de20"),i=e.n(a);i.a},"84d8":function(t,s,e){},"9b54":function(t,s,e){"use strict";e.r(s);var a=e("2b0e"),i=(e("3a10"),function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"container-fluid",staticStyle:{padding:"unset"}},[t._m(0),e("div",{staticClass:"row",staticStyle:{"margin-left":"5%",width:"95%"}},[t.userInfo?e("div",{staticClass:"col-xs-3 info"},[e("div",{staticClass:"img-kuang"},[t.userInfo&&t.userInfo.userPhotoUrl?e("img",{staticClass:"img-touxiang",attrs:{src:t.userInfo.userPhotoUrl}}):t._e()]),t.userInfo&&t.userInfo.userRealname?e("div",{staticClass:"user-name"},[t._v(t._s(t.userInfo.userRealname))]):t._e(),"0"===t.userInfo.userSex?e("i",{staticClass:"iconfont icongerenshouye-nan icon-sex",staticStyle:{color:"cadetblue"}}):e("i",{staticClass:"iconfont icongerenshouye-nv icon-sex",staticStyle:{color:"pink"}}),e("div",{staticClass:"user-set",on:{click:t.setting}},[e("i",{staticClass:"iconfont icongerenshouye-shezhi"}),t._v("设置")]),e("div",{staticClass:"jifen",staticStyle:{"margin-left":"5%"}},[t.userInfo&&t.userInfo.facultyName?e("span",[t._v(t._s(t.userInfo.facultyName))]):t._e(),t.userInfo&&t.userInfo.userEnterYear?e("span",[t._v(" / "+t._s(t.userInfo.userEnterYear)+"级")]):t._e(),t.userInfo&&t.userInfo.majorName?e("span",[t._v(" / "+t._s(t.userInfo.majorName))]):t._e(),t.userInfo&&t.userInfo.userClassName?e("span",[t._v(" / "+t._s(t.userInfo.userClassName))]):t._e()]),t._m(1),t._m(2),t._m(3)]):t._e(),e("div",{staticClass:"echart col-xs-3",attrs:{id:"echart"}}),e("div",{staticClass:"col-xs-3 school-training",on:{click:function(s){return t.checkGo("school-main.html","_self")}}},[e("div",{staticClass:"font-square-top"},[t._v("校园实训")]),t._m(4)]),t._m(5),t._m(6),t._m(7),t._m(8),e("div",{staticClass:"col-xs-1 square",on:{click:function(s){return t.checkGo("/member/login","_blank")}}},[e("div",{staticClass:"font-square-top"},[t._v("砺英社区")]),t._m(9)])]),e("div",{staticClass:"row",staticStyle:{"margin-left":"5%",width:"95%"}},[0!==t.taskData.length?e("div",{staticClass:"task-list col-xs-8"},[t._l(t.taskData,function(s){return e("div",{key:s.taskCode},[e("div",{staticClass:"task"},[e("span",{staticClass:"daily-clock"},[t._v(t._s(s.taskName))]),e("i",{staticClass:"iconfont icongerenshouye-naozhong1 task-time"}),e("span",{staticClass:"task-time"},[t._v("12:07:34")]),e("div",{staticStyle:{height:"1px",background:"rgba(60,40,110,1)",width:"100%",float:"left","margin-top":"8px"}}),e("span",{staticClass:"task-detail"},[t._v(t._s(s.taskDescription))]),e("span",{staticClass:"task-detail"},[t._v("奖砺：积分值"),e("span",{staticStyle:{color:"#FF8717"}},[t._v("+"+t._s(s.taskScore))])]),e("span",{staticClass:"to-complete",on:{click:function(e){return t.goUrl(s)}}},[t._v("去完成")]),e("span",{staticClass:"divcss5"})]),t._l(t.taskData1,function(s,a){return e("div",{directives:[{name:"show",rawName:"v-show",value:a<4-t.taskData.length,expression:"index < 4 - taskData.length"}],key:a,staticClass:"task1"},[e("span",{staticClass:"daily-clock"}),e("span",{staticClass:"task-time"}),e("div",{staticStyle:{height:"1px",width:"100%",float:"left","margin-top":"8px"}}),e("span",{staticClass:"task-detail"}),e("span",{staticClass:"task-detail"}),e("span",{staticClass:"to-complete1"}),e("span",{staticClass:"divcss51"})])})],2)}),e("div",{staticClass:"divcss5-2"})],2):t._e(),t._m(10),e("div",{staticClass:"message col-xs-4"},[e("div",{staticClass:"font-square-top today-integral",staticStyle:{"margin-top":"0","font-size":"16px","font-family":"PingFang-SC-Medium","font-weight":"500",color:"#A6CBFE",width:"85%","line-height":"62px","text-align":"left",height:"62px","margin-left":"55px"}},[t._v("系统公告")]),e("div",{staticStyle:{"margin-top":"60px","margin-left":"10%",width:"85%",padding:"2px 0px","max-height":"186px",overflow:"auto","overflow-x":"hidden"}},t._l(t.materialTypes,function(s,a){return e("div",{key:a,staticClass:"row",staticStyle:{"margin-top":"16px",cursor:"pointer"},on:{click:function(e){return t.showStail(s)}}},[e("div",{staticClass:"col-xs-8 font-small",staticStyle:{color:"#729EFF"}},[t._v(t._s(s.content))]),e("div",{staticClass:"col-xs-4",staticStyle:{color:"#e6e6e6","font-size":"10px"}},[t._v("2019-08-10 12:07:34"+t._s(s.time))])])}),0)])])])])}),n=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row",staticStyle:{"margin-left":"5%","margin-top":"25px"}},[e("div",{staticClass:"col-xs-6"},[e("div",{staticClass:"text-left",staticStyle:{color:"white",height:"88px","line-height":"88px"}},[e("i",{staticClass:"iconfont iconlogo"}),e("span",{staticClass:"lying-title"},[t._v("砺英网")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"info-bottom"},[e("span",{staticClass:"info-shuzi"},[t._v("暂无")]),e("span",{staticClass:"jifen",staticStyle:{"margin-left":"0px","margin-top":"5px"}},[t._v("能力评分")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"info-bottom"},[e("span",{staticClass:"info-shuzi"},[t._v("暂无")]),e("span",{staticClass:"jifen",staticStyle:{"margin-left":"0px","margin-top":"5px"}},[t._v("累计上传")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"info-bottom"},[e("span",{staticClass:"info-shuzi"},[t._v("暂无")]),e("span",{staticClass:"jifen",staticStyle:{"margin-left":"0px","margin-top":"5px"}},[t._v("学院排名")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"font-square-bottom"},[t._v("Web前端基础”"),e("br"),t._v("有新课程开课啦！")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-xs-1 square"},[e("div",{staticClass:"font-square-top"},[t._v("企业定向")]),e("a",{staticClass:"font-square-bottom"},[t._v("此功能模块"),e("br"),t._v("正在维护中！")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-xs-1 square"},[e("div",{staticClass:"font-square-top"},[t._v("测评中心")]),e("a",{staticClass:"font-square-bottom"},[t._v("此功能模块"),e("br"),t._v("正在维护中！")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-xs-1 square"},[e("div",{staticClass:"font-square-top"},[t._v("实习兼职")]),e("a",{staticClass:"font-square-bottom"},[t._v("此功能模块"),e("br"),t._v("正在维护中！")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-xs-3 post-training"},[e("div",{staticClass:"font-square-top"},[t._v("岗位训练")]),e("a",{staticClass:"font-square-bottom"},[t._v("此功能模块"),e("br"),t._v("正在维护中！")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"font-square-bottom"},[t._v("点击进入"),e("br"),t._v("砺英社区！")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"today-integral col-xs-4"},[e("span",{staticClass:"today-integral-text"},[t._v("今日累计积分")]),e("span",{staticClass:"today-integral-number"},[t._v("暂无")]),e("span",{staticClass:"today-integral-tishi"},[t._v("完成每日任务既可以提升能力又能获得积分")])])}],o={name:"app",mounted(){this.loadData()},data(){return{userInfo:null,taskData:[],userIsCompleted:!0,materialTypes:[],taskData1:[{},{},{},{},{},{}]}},methods:{loadData(){let t=this;t.$nextTick(function(){t.document=document.getElementById("echart"),t.drawLine()}),this.$http.post("/user/queryuserinfo",{},s=>{s.success&&(t.userInfo=s.data)}),t.$http.post("/homepage/queryplatformtasklist",{},s=>{if(s.success){t.taskData=s.data;for(var e=0;e<t.taskData.length;e++)"1001"===t.taskData[e].taskCode&&(t.userIsCompleted=!1)}}),t.$http.post("/doproject/noticeInfo",{},s=>{if(console.log(s),s.success)for(let e of s.data)t.materialTypes.push({id:e.id,kind:"系统公告",time:e.createTime,content:e.notice,url:e.url,status:""})})},goUrl(t){if(!1===this.userIsCompleted&&"1001"!==t.taskCode)return this.$alert("请先完善个人信息！","提示",{confirmButtonText:"确定"}),!1;if("1002"===t.taskCode){let t=localStorage.getItem("teamId");window.location=""===t||"undefined"===t||"null"===t||null===t?"school-main.html":"task-list.html"}else window.location=t.taskUrl},setting(){window.location="personal-set.html"},checkGo(t,s){if(!1===this.userIsCompleted)return this.$alert("请先完善个人信息！","提示",{confirmButtonText:"确定"}),!1;if("_blank"===s){if("1"===localStorage.getItem("canLoginSns"))return this.$alert("社区服务维护中！请联系管理员！","提示",{confirmButtonText:"确定"}),!1;window.open(this.$http.snsUrl+t+"?snsNo="+window.btoa(window.encodeURIComponent(localStorage.getItem("snsNo"))),s)}else window.open(t,s)},drawLine(){var t=this.$echarts.init(this.document);t.setOption({title:{},tooltip:{trigger:"axis"},grid:{x:0,y:0,x2:0,y2:0},radar:[{indicator:[{text:"Java",max:100},{text:"前端",max:100},{text:"测试",max:100},{text:"部署",max:100},{text:"软件工程技术",max:100}],center:["50%","45%"],radius:80,name:{textStyle:{color:"white"}},splitLine:{lineStyle:{color:["rgba(53,71,248,1)","rgba(53,71,248,0.8)","rgba(53,71,248,0.6)","rgba(53,71,248,0.4)","rgba(53,71,248,0.2)","rgba(53,71,248,0.1)"].reverse()}},splitArea:{show:!1},axisLine:{lineStyle:{color:"#781CEE"}}}],series:[{type:"radar",tooltip:{trigger:"item"},data:[{value:[60,73,85,40,90],name:"第一次",areaStyle:{normal:{color:"#0D5EF3"}},lineStyle:{color:"rgba(53,71,248,0.8)"}}]}]})},showStail(t){window.location=t.url}}},r=o,l=(e("5a0c"),e("b1e8"),e("2877")),c=Object(l["a"])(r,i,n,!1,null,"36376561",null),u=c.exports,f=e("751a"),p=e("bc3a"),d=e.n(p),m=e("313e"),v=e.n(m);a["default"].prototype.$echarts=v.a,a["default"].prototype.$axios=d.a,a["default"].prototype.$http=f["a"],new a["default"]({render:t=>t(u)}).$mount("#app")},b1e8:function(t,s,e){"use strict";var a=e("84d8"),i=e.n(a);i.a},de20:function(t,s,e){}});
//# sourceMappingURL=personal-main.0df25442.js.map