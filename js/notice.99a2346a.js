(function(t){function e(e){for(var n,o,r=e[0],l=e[1],c=e[2],d=0,p=[];d<r.length;d++)o=r[d],s[o]&&p.push(s[o][0]),s[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var l=a[r];0!==s[l]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={notice:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(){return Promise.resolve()},o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;i.push([15,"chunk-vendors","chunk-common"]),a()})({15:function(t,e,a){t.exports=a("6e72")},"6e72":function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"notice"}},[a("div",{staticClass:"container-fluid",staticStyle:{padding:"0px 0px 0px 0px"}},[a("Header",{attrs:{noticeIs:t.noticeIs,img:"",school:"Go语言实战抽奖系统"}})],1),a("div",{staticClass:"col-md-10 col-md-offset-1 mt-6"},[a("el-tabs",{staticClass:"mb-4",attrs:{type:"border-card"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{name:"project"}},[a("div",{staticStyle:{"font-size":"20px","margin-top":"20px"},attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-tickets"}),t._v(" 消息列表")]),a("div",{directives:[{name:"show",rawName:"v-show",value:0===t.materialTypes.length,expression:"materialTypes.length === 0"}]},[t._v("暂无消息")]),t._l(t.materialTypes,function(e,n){return a("div",{key:n,staticClass:"row"},[a("div",{staticClass:"col-md-12 col-xs-12 pull-left",staticStyle:{"margin-top":"10px"}},[a("div",{staticClass:"java_tit mb-4"},[a("span",[t._v(t._s(e.kind))]),a("span",{staticClass:"pull-right",staticStyle:{color:"#000000",background:"#ffffff","margin-top":"1px"}},[t._v("\n                  "+t._s(e.time)+"\n")])]),a("div",{staticClass:"row pl-4 pr-5"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.status,expression:"item.status"}],staticClass:"pull-left java_color"},[t._v("["+t._s(e.status)+"]")]),a("span",{staticClass:"ml-3"},[t._v(t._s(e.content))]),a("a",{staticClass:"pull-right font-small",on:{click:function(a){return t.showStail(e)}}},[t._v("查看详情")])])])])})],2)],1)],1)])},i=[],o=a("f6f6"),r=o["a"],l=(a("b2c8"),a("807d"),a("2877")),c=Object(l["a"])(r,s,i,!1,null,"74ba5bac",null),u=c.exports,d=(a("7378"),a("16b4"),a("346c"),a("1e3b"),a("3a10"),a("87c5"),a("0cb1"),a("751a"));n["default"].prototype.$http=d["a"],new n["default"]({render:t=>t(u)}).$mount("#notice")},"764c":function(t,e,a){},"7fa7":function(t,e,a){},"807d":function(t,e,a){"use strict";var n=a("764c"),s=a.n(n);s.a},b2c8:function(t,e,a){"use strict";var n=a("7fa7"),s=a.n(n);s.a},f6f6:function(t,e,a){"use strict";(function(t){var n=a("10df");e["a"]={name:"notice",components:{Header:n["a"]},mounted(){this.initEvent(),this.initData()},data(){return{winWidth:window.innerWidth,activeName:"project",materialTypes:[],curPage:1,total:10,pageSize:20,dataChanged:!1,noticeIs:!1}},methods:{initEvent:function(){let e=this;"false"===localStorage.getItem("unreadStatus")?e.noticeIs=!1:e.noticeIs=!0,e.winWidth=t("body").width(),window.onresize=function(){e.winWidth=t("body").width()}},initData:function(){this.loadProjectinfo()},loadProjectinfo(){let t=this;t.materialTypes=[],this.$http.post("/doproject/pushMessageInfo",{},e=>{if(console.log(e),e.success){let i=0;for(let o of e.data){var a="未读";1===o.status&&(a="已读",i++);var n="",s="";1===o.messageType?(n="提交成果物",s="task-list.html"):2===o.messageType?(n="点评成果物",s="task-list.html"):3===o.messageType?(n="系统点评",s="task-list.html"):4===o.messageType&&(n="阶段报告",s="stage-report.html"),e.data.length===i&&(localStorage.setItem("unreadStatus","false"),t.noticeIs=!1),t.materialTypes.push({id:o.id,kind:n,time:o.createTime,content:o.message,url:s,status:a})}this.$http.post("/doproject/noticeInfo",{},e=>{if(console.log(e),e.success)for(let a of e.data)t.materialTypes.push({id:a.id,kind:"系统公告",time:a.createTime,content:a.notice,url:a.url,status:""})})}})},sizeChange(t){return this.winWidth*t/1920+"px"},refresh(){this.dataChanged=!0,this.$nextTick(()=>{this.dataChanged=!1})},gotoPage(t){},changeRowNum(t){},showStail(t){"系统公告"!==t.kind&&"未读"===t.status?this.$http.post("/doproject/updateMessageStatus",{id:t.id},e=>{console.log(e),window.location=t.url}):window.location=t.url}}}}).call(this,a("1157"))}});
//# sourceMappingURL=notice.99a2346a.js.map