(function(t){function s(s){for(var e,n,r=s[0],c=s[1],l=s[2],d=0,m=[];d<r.length;d++)n=r[d],i[n]&&m.push(i[n][0]),i[n]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);p&&p(s);while(m.length)m.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,s=0;s<o.length;s++){for(var a=o[s],e=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(e=!1)}e&&(o.splice(s--,1),t=n(n.s=a[0]))}return t}var e={},i={"assistant-task-list":0},o=[];function n(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,s,a){n.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,s){if(1&s&&(t=n(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)n.d(a,e,function(s){return t[s]}.bind(null,e));return a},n.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(s,"a",s),s},n.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=s,r=r.slice();for(var l=0;l<r.length;l++)s(r[l]);var p=c;o.push([2,"chunk-vendors","chunk-common"]),a()})({2:function(t,s,a){t.exports=a("4282")},4282:function(t,s,a){"use strict";a.r(s);var e=a("2b0e"),i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container-fluid"},[a("Header",{attrs:{img:"",school:"Go语言实战抽奖系统"}}),t._m(0),t._m(1),a("div",{staticClass:"row pt-4 mt-3"},[a("div",{staticClass:"col-md-2 col-md-offset-2 task-list"},[t._m(2),a("StepList",{attrs:{data:t.stepData,"expand-id":t.currentStageId,"active-id":t.currentStepId},on:{activeItem:t.activeItemList}})],1),a("div",{staticClass:"col-md-6 ml-5"},[t._m(3),a("div",{staticClass:"col-md-12 pt-4 task-detail"},[a("div",{staticClass:"col-sm-12 pl-0 pr-0 mb-4"},[a("i",{staticClass:"iconfont iconshijian "}),a("span",{staticClass:"ml-3 font-bold"},[t._v("任务名称：")]),a("span",{staticClass:"font-regular ml-3"},[t._v(t._s(t.taskInfo.missionName))])]),a("div",{staticClass:"col-sm-12 pl-0 pr-0 mb-4"},[a("i",{staticClass:"iconfont iconshijian "}),a("span",{staticClass:"ml-3 font-bold"},[t._v("点评截止时间：")]),a("span",{staticClass:"font-regular ml-3"},[t._v(t._s(t.taskInfo.missionDeadline))])]),a("div",{staticClass:"col-sm-12 pl-0 pr-0 mb-4"},[a("i",{staticClass:"iconfont iconshijian "}),a("span",{staticClass:"ml-3 font-bold"},[t._v("任务描述：")]),a("span",{staticClass:"font-regular col-md-12 pl-5 mt-2"},[t._v(t._s(t.taskInfo.missionDescribe))])]),a("div",{staticClass:"col-sm-12 pl-0 pr-0 mb-4"},[a("i",{staticClass:"iconfont iconshijian "}),a("span",{staticClass:"ml-3 font-bold"},[t._v("任务要求：")]),a("span",{staticClass:"font-regular col-md-12 pl-5 mt-2"},[t._v(t._s(t.taskInfo.missionRequirement))])])]),a("div",{staticClass:"col-md-12 mt-4 history"},[t._m(4),a("div",{staticClass:"col-md-12"},t._l(t.docData,function(s){return a("div",{key:s.outputId,staticClass:"col-md-12 text-center doc mt-3 mb-5"},[t._m(5,!0),a("div",{staticClass:"col-md-8 text-left"},[a("span",{staticClass:"col-md-12 font-regular",staticStyle:{"font-size":"12px","margin-top":"12px"}},[t._v(t._s(s.outputName))]),a("span",{staticClass:"col-md-5 font-regular",staticStyle:{"font-size":"12px"}},[t._v("上传时间："+t._s(s.uploadTime)+" ")]),a("span",{staticClass:"col-md-4 font-regular",staticStyle:{"font-size":"12px"}},[t._v("操作："+t._s(s.realName)+" ")])]),a("div",{staticClass:"col-md-3 text-left mt-5"},[a("span",{directives:[{name:"show",rawName:"v-show",value:"-1"==s.commentStatus,expression:"obj.commentStatus == '-1'"}],staticClass:"font-regular",staticStyle:{color:"#FC4E54","font-size":"12px","margin-top":"36px"}},[t._v("未通过")]),a("span",{directives:[{name:"show",rawName:"v-show",value:"0"==s.commentStatus,expression:"obj.commentStatus == '0'"}],staticClass:"font-regular",staticStyle:{color:"rgb(252, 151, 1)","font-size":"12px","margin-top":"36px"}},[t._v("待点评")]),a("span",{directives:[{name:"show",rawName:"v-show",value:"1"==s.commentStatus,expression:"obj.commentStatus == '1'"}],staticClass:"font-regular",staticStyle:{color:"#02C365","font-size":"12px","margin-top":"36px"}},[t._v("已通过")]),a("span",{directives:[{name:"show",rawName:"v-show",value:"0"==s.commentStatus,expression:"obj.commentStatus == '0'"}],staticClass:"font-regular",staticStyle:{"font-size":"12px","margin-top":"36px","margin-left":"20px",cursor:"pointer"},on:{click:function(a){return t.gotoComment(s)}}},[t._v("去点评")])])])}),0)])])])],1)])},o=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row top-main"},[e("div",{staticClass:"col-md-6 col-md-offset-2 mt-2",staticStyle:{height:"51px","line-height":"51px"}},[e("div",{staticClass:"col-sm-12 mt-4",staticStyle:{height:"18px","font-size":"18px","font-family":"PingFang-SC-Bold","font-weight":"bold",color:"rgba(255,255,255,1)"}},[e("img",{staticStyle:{"border-radius":"50%",width:"51px",height:"51px"},attrs:{src:a("f070")}}),e("span",{staticStyle:{"margin-left":"15px"}},[t._v("用户姓名 | Go语言实战抽奖")])]),e("div",{staticClass:"col-sm-12 mt-6",staticStyle:{"font-family":"PingFang-SC-Regular","font-weight":"bold",color:"rgba(255,255,255,1)"}},[e("span",[t._v("单人模式 |")]),e("span",[t._v("成员  张三  |")]),e("span",[t._v("当前进度  需求分析-更嗯呢该理解  |")]),e("span",[t._v("待点评  14 | Q&A 4  ")])])]),e("div",{staticClass:"col-md-2 text-center",staticStyle:{border:"1px solid #FF4C55","border-radius":"10px","margin-top":"100px"}},[e("i",{staticClass:"iconfont icongantanhao",staticStyle:{color:"#FF4C55"}}),e("span",{staticStyle:{color:"#FF4C55"}},[t._v("即将超时任务：1项")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row",staticStyle:{background:"rgba(255,255,255,1)","box-shadow":"0px 3px 15px 0px rgba(0, 0, 0, 0.08)",height:"59px","line-height":"59px"}},[a("div",{staticClass:"col-md-3 col-md-offset-2",staticStyle:{cursor:"pointer"}},[a("span",[t._v("助教中心 > 项目列表 > 项目")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"bar"},[a("span",[t._v("阶段与任务列表")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"bar"},[a("span",[t._v("任务详情")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-md-12 pl-0 pr-0",staticStyle:{height:"55px","line-height":"50px","border-bottom":"1px solid #EBEBEB"}},[a("div",{staticClass:"col-md-2",staticStyle:{cursor:"pointer"}},[a("span",{staticClass:"col-sm-12 text-center font-tab active-font-color"},[t._v("点评历程")]),a("span",{staticClass:"col-sm-4 col-sm-offset-4 text-center active-bg-color",staticStyle:{height:"2px","border-radius":"1px"}})]),a("div",{staticClass:"col-md-2",staticStyle:{cursor:"pointer"}},[a("span",{staticClass:"col-sm-12 text-center font-tab unactive-font-color"},[t._v("Q&A")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-md-1"},[e("img",{staticStyle:{width:"36px",height:"42px","margin-top":"9px"},attrs:{src:a("e85a")}})])}],n=a("8af6"),r=a("8668"),c=a("3595"),l={name:"app",components:{Header:n["a"],StepList:r["a"]},mounted(){this.loadData()},data(){return{stepData:[],docData:[{id:"1",name:"《软件需求调研提纲1》.docx",status:"0",time:"2019-12-12",do:"于子博"},{id:"2",name:"《软件需求调研提纲2》.docx",status:"1",time:"2019-12-12",do:"子博"},{id:"3",name:"《软件需求调研提纲3》.docx",status:"0",time:"2019-12-12",do:"于子"},{id:"4",name:"《软件需求调研提纲4》.docx",status:"1",time:"2019-12-12",do:"于博"}],teamId:"",projectId:"",currentStepId:"",currentStageId:"",stepInfo:[],taskInfo:null}},methods:{loadData(){let t=this;t.teamId=parseInt(Object(c["a"])("teamId")),t.projectId=parseInt(Object(c["a"])("projectId")),t.currentStepId=parseInt(Object(c["a"])("currentStepId")),t.$http.post("/assistant/teammissionlist",{teamId:t.teamId,currentStepId:t.currentStepId,projectId:t.projectId},s=>{if(console.log(s),s.success){t.stepData=s.data.stagesteplist;for(var a=0;a<s.data.initproject.length;a++)s.data.initproject[a].uploadTime=s.data.initproject[a].uploadTime.substr(0,10);t.docData=s.data.initproject,t.taskInfo=s.data.initmsg[0]}})},activeItemList(t,s){let a=this;a.currentStepId=s},gotoComment(t){window.location="assistant-task-comment.html?outputId="+t.outputId+"&outputName="+t.outputName+"&teamId="+this.teamId+"&currentMissionId="+this.currentStepId+"&memberCode="+t.uploadUserId}}},p=l,d=(a("944a"),a("a599"),a("2877")),m=Object(d["a"])(p,i,o,!1,null,"509fe97a",null),u=m.exports,f=(a("7378"),a("3a10"),a("49f4"),a("751a"));e["default"].prototype.$http=f["a"],new e["default"]({render:t=>t(u)}).$mount("#app")},"8e04":function(t,s,a){},"944a":function(t,s,a){"use strict";var e=a("d8d3"),i=a.n(e);i.a},a599:function(t,s,a){"use strict";var e=a("8e04"),i=a.n(e);i.a},d8d3:function(t,s,a){}});
//# sourceMappingURL=assistant-task-list.f603c63b.js.map