(function(t){function e(e){for(var s,i,c=e[0],o=e[1],l=e[2],u=0,p=[];u<c.length;u++)i=c[u],n[i]&&p.push(n[i][0]),n[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,c=1;c<a.length;c++){var o=a[c];0!==n[o]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={"course-detail":0},r=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(){return Promise.resolve()},i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=o;r.push([19,"chunk-vendors","chunk-common"]),a()})({19:function(t,e,a){t.exports=a("7bb2")},"2acb":function(t,e,a){},"70b4":function(t,e,a){"use strict";var s=a("dcc1"),n=a.n(s);n.a},"7bb2":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container-fluid"},[a("Header",{attrs:{school:"东北大学"}}),a("ProjectTitle",{attrs:{data:t.baseInfo}}),t._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"center-block"},[a("div",{staticClass:"col",staticStyle:{width:"739px"}},[a("div",{staticClass:"summary"},[a("span",[t._v("简介：")]),a("p",[t._v("\n              "+t._s(t.baseInfo.background)+"\n            ")])]),a("TaskList",{attrs:{data:t.taskData,"active-id":1}})],1),a("div",{staticClass:"col",staticStyle:{width:"329px","margin-top":"-150px"}},[a("div",{staticClass:"sideBar"},[a("el-button",{staticClass:"center-block",attrs:{type:"primary"},on:{click:t.beginProject}},[t._v("开始立项")]),a("div",{staticClass:"main"},[a("span",[t._v("项目概要")]),a("p",[t._v("\n                "+t._s(t.baseInfo.background)+"\n              ")])]),a("div",{staticClass:"main"},[a("span",[t._v("课前必学")]),a("p",[t._v("\n                "+t._s(t.baseInfo.preCourse)+"\n              ")])]),a("div",{staticClass:"main"},[a("span",[t._v("老师告诉你能学到什么？")]),a("p",[t._v("\n                "+t._s(t.baseInfo.target)+"\n              ")])])],1)])])])],1)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row title"},[a("div",{staticClass:"center-block"},[a("span",[t._v("案例介绍")])])])}],i=a("10df"),c=a("c80e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"task-list"},[t._m(0),t.data?a("div",t._l(t.data,function(e){return a("div",{key:e.stageId},[a("div",{staticClass:"item",class:[e.stageId==t.currentId?"active":""],on:{click:function(a){return t.activeItem(e.stageId)}}},[e.stageId==t.currentId?a("i",{staticClass:"el-icon-caret-bottom"}):a("i",{staticClass:"el-icon-caret-right"}),a("span",{style:{fontWeight:e.stageId==t.currentId?"bold":400,color:e.stageId==t.currentId?"#333333":"#666666"}},[t._v(t._s(e.stageName))]),a("span",{staticClass:"pull-right"},[a("i",{staticClass:"iconfont iconshijian"}),a("span",[t._v("至"+t._s(e.stageEndTime))])])]),e.stageId==t.currentId?a("div",{staticClass:"itemContent"},t._l(e.stepList,function(e){return a("div",{key:e.stepId,staticClass:"content"},[a("div",{staticClass:"title"},[t._v(t._s(e.stepName))]),a("div",{staticClass:"main"},[t._v("\n            "+t._s(e.stepDescription)+"\n          ")])])}),0):t._e()])}),0):t._e()])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("span",[t._v("任务列表：")])])}],d={name:"TaskList",props:{activeId:Number,data:Array},data(){return{currentId:this.activeId}},methods:{activeItem(t){this.currentId===t?this.currentId=-1:this.currentId=t}}},u=d,p=(a("a4be"),a("2877")),m=Object(p["a"])(u,o,l,!1,null,"4857ce95",null),v=m.exports,f={name:"app",components:{Header:i["a"],TaskList:v,ProjectTitle:c["a"]},mounted(){this.loadData()},data(){return{baseInfo:{},tabData:[{name:"选择项目",url:"course-detail.html"},{name:"组队",url:"team-search.html"},{name:"任务裁剪",url:""},{name:"人员管理",url:""}],taskData:[{id:1,name:"任务前测评",time:"2018.12.19",children:[{id:1,name:"功能需求理解",content:"针对给出的业务功能模块功能特性，理解模块的功能需求和非功能需求（质量属性和设计约束）。"}]},{id:2,name:"项目策划",time:"2018.12.19",children:[{id:1,name:"功能需求理解",content:"针对给出的业务功能模块功能特性，理解模块的功能需求和非功能需求（质量属性和设计约束）。"}]},{id:3,name:"需求分析",time:"2018.12.19",children:[{id:1,name:"功能需求理解",content:"针对给出的业务功能模块功能特性，理解模块的功能需求和非功能需求（质量属性和设计约束）。"}]}]}},methods:{loadData(){let t=this,e=localStorage.getItem("projectId"),a=localStorage.getItem("courseId");this.$http.post("/teambuild/queryprojectinfo",{projectId:e,courseId:a},e=>{e.success&&(t.baseInfo=e.data,console.log(t.baseInfo),t.baseInfo.courseName=localStorage.getItem("courseName"))}),this.$http.post("/teambuild/querystagetasklist",{projectId:e},e=>{e.success&&(t.taskData=e.data)})},beginProject(){let t=this,e=localStorage.getItem("projectId"),a=localStorage.getItem("courseId"),s=localStorage.getItem("grade");t.$http.post("/teambuild/buildteam",{teamName:"个人团队",courseId:a,projectId:e,grade:s,logoUrl:""},t=>{t.success&&(window.location="project-task-review.html")})}}},b=f,h=(a("70b4"),Object(p["a"])(b,n,r,!1,null,"3dc80b96",null)),g=h.exports,I=(a("7378"),a("16b4"),a("346c"),a("1e3b"),a("3a10"),a("87c5"),a("0cb1"),a("751a"));s["default"].prototype.$http=I["a"],new s["default"]({render:t=>t(g)}).$mount("#app")},a4be:function(t,e,a){"use strict";var s=a("2acb"),n=a.n(s);n.a},dcc1:function(t,e,a){}});
//# sourceMappingURL=course-detail.930bc71c.js.map