(function(t){function e(e){for(var i,s,r=e[0],c=e[1],l=e[2],p=0,u=[];p<r.length;p++)s=r[p],a[s]&&u.push(a[s][0]),a[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(u.length)u.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(i=!1)}i&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},a={"work-order":0},o=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(){return Promise.resolve()},s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;o.push([27,"chunk-vendors","chunk-common"]),n()})({"0b7a":function(t,e,n){"use strict";(function(t){var i=n("10df"),a=n("ba6c");e["a"]={name:"app",components:{Header:i["a"],HorizontalTap:a["a"]},mounted(){this.initEvent(),this.initData()},data(){return{winWidth:window.innerWidth,data2:[{name:"执行任务",url:"task-list.html"},{name:"任务单",url:""},{name:"日报任务",url:"daily-tasks.html"}],projectInfo:{},projectDate:"2019年4月19日～ 2019年4月30日",description:"\n                            通过本次生产实习，熟练掌握基于J2EE平台的企业级应用开发、熟悉并应用软件开发的各个环节：包括企业级应用软件的需求分析、设计、实现、编码、测试和软件维护\n等各个环节以及相关文档的维护。\n\n实训平台仿真IT企业项目组工作场景，该案例模拟毕业生新加入企业项目组，项目经理分配给一个功能模块开发任务，让学生掌握需求、设计、研发、测试和部署环节的工\n作流程与技术要求，达到项目组工作标准。\n\n第二章节“项目背景材料”给出项目完整信息，让学生从项目整体上有个全面的认知，熟悉项目背景、项目目标及用户整体需求，帮助学生更好理解实训案例的工作要求。第\n三章节“实训任务”是本次实训案例的全部内容，学生应依照第三部分的描述，依托实训平台完成实训内容要求的模块开发任务。\n                        ",projectBackground:"\n                            以邓小平理论、“三个代表”重要思想、科学发展观为指导，深入贯彻习近平总书记系列重要讲话精神，坚持聚天下英才而用之，遵循社会主义市场经济规律和人才成长规律\n坚持“以项目为牵引”“以能力为本位”的理念，破除束缚人才使用的传统机制障碍，将劳动关系转换为劳务关系，建立与市场经济相适应、符合“互联网+”趋势的人才培养理\n服务、交易机制，构建科学规范、开放包容、运行高效的网上人才撮合平台。\n\n                        ",teamList:[{id:1,name:"朱彦野",headPortrait:"",position:"队长",level:"初级菜鸟"},{id:2,name:"朱彦野1",headPortrait:"",position:"队员",level:"初级菜鸟"},{id:3,name:"朱彦野2",headPortrait:"",position:"队员",level:"初级菜鸟"},{id:4,name:"朱彦野3",headPortrait:"",position:"队员",level:"初级菜鸟"},{id:5,name:"朱彦野4",headPortrait:"",position:"队员",level:"初级菜鸟"}]}},methods:{initEvent:function(){let e=this;e.winWidth=t("body").width(),window.onresize=function(){e.winWidth=t("body").width()}},initData:function(){this.loadProjectinfo()},loadProjectinfo(){let t=this;this.$http.post("/doproject/projectinfo",{teamid:localStorage.getItem("teamId")},e=>{e.success&&(t.projectInfo=e.data)})},sizeChange(t){return this.winWidth*t/1920+"px"},clickStep(t){}}}}).call(this,n("1157"))},27:function(t,e,n){t.exports=n("491b")},"3f2b":function(t,e,n){},"491b":function(t,e,n){"use strict";n.r(e);var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container-fluid"},[n("Header",{attrs:{img:"",school:"Go语言实战抽奖系统"}}),n("div",{staticClass:"row tap"},[n("HorizontalTap",{staticClass:"center",staticStyle:{width:"1088px"},attrs:{data:t.data2,active:1}})],1),n("div",{staticClass:"row"},[n("div",{staticClass:"center-block"},[n("div",{staticClass:"top"},[n("div",{staticClass:"top-title"},[t._v("\n              项目日期：\n            ")]),n("div",{staticClass:"top-content"},[t._v(" "+t._s(t.projectInfo.startTime)+" ~ "+t._s(t.projectInfo.endTime)+"\n            ")]),n("div",{staticClass:"top-title"},[t._v("\n              简介：\n            ")]),n("div",{staticClass:"top-content"},[t._v("\n              "+t._s(t.projectInfo.description)+"\n            ")])]),n("div",{staticClass:"middle"},[n("div",{staticClass:"top-title"},[t._v("\n              项目背景材料：\n            ")]),n("div",{staticClass:"top-content"},[t._v("\n              "+t._s(t.projectInfo.background)+"\n            ")]),n("div",{staticClass:"top-title"},[t._v("\n              项目目标：\n            ")]),n("div",{staticClass:"top-content"},[t._v("\n              "+t._s(t.projectInfo.target)+"\n            ")])]),n("div",{staticClass:"food"},[t._m(0),n("div",{staticClass:"team-list"},t._l(t.projectInfo.members,function(e){return n("div",{key:e.userCode,staticClass:"team-list-item"},[n("img",{staticClass:"team-list-item-img",attrs:{src:e.head}}),n("div",{staticClass:"team-list-item-name"},[t._v("\n                  "+t._s(e.userName)+"\n                ")]),n("div",{staticClass:"team-list-item-position"},[t._v("\n                  "+t._s(1===e.groupLeader?"队长":"队员")+"\n                ")])])}),0)])])])],1)])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top-title"},[t._v("\n              团队：    "),n("span",{staticClass:"tip"},[n("i",{staticClass:"iconfont icongantanhao"}),t._v("当团队开启项目执行任务后，其他人员将无法加入团队。")])])}],s=n("0b7a"),r=s["a"],c=(n("c34e"),n("2877")),l=Object(c["a"])(r,a,o,!1,null,"3012706a",null),d=l.exports,p=(n("7378"),n("16b4"),n("346c"),n("1e3b"),n("3a10"),n("87c5"),n("0cb1"),n("751a"));i["default"].prototype.$http=p["a"],new i["default"]({render:t=>t(d)}).$mount("#app")},c34e:function(t,e,n){"use strict";var i=n("3f2b"),a=n.n(i);a.a}});
//# sourceMappingURL=work-order.ed32f93f.js.map