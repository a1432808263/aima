(function(t){function e(e){for(var s,n,r=e[0],c=e[1],l=e[2],m=0,d=[];m<r.length;m++)n=r[m],i[n]&&d.push(i[n][0]),i[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(s=!1)}s&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={"assistant-task-list":0},o=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.e=function(){return Promise.resolve()},n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var p=c;o.push([6,"chunk-vendors","chunk-common"]),a()})({4282:function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container-fluid"},[a("Header",{attrs:{img:"",school:"Go语言实战抽奖系统"}}),a("div",{staticClass:"row top-main"},[a("div",{staticClass:"col-md-6 col-md-offset-2 mt-2",staticStyle:{height:"51px","line-height":"51px"}},[t._m(0),a("div",{staticClass:"col-sm-12 mt-6",staticStyle:{"font-family":"PingFang-SC-Regular","font-weight":"bold",color:"rgba(255,255,255,1)"}},[a("span",[t._v("单人模式 |")]),a("span",[t._v("成员  "+t._s(t.memberName)+"  |")]),a("span",[t._v("当前进度  "+t._s(t.currentStageName)+"  |")]),a("span",[t._v("待点评  14 | Q&A 4  ")])])]),t._m(1)]),t._m(2),a("div",{staticClass:"row pt-4 mt-3"},[a("div",{staticClass:"col-md-2 col-md-offset-2 task-list"},[t._m(3),-1!==t.currentStageId?a("StepList",{attrs:{data:t.stepData,"expand-id":t.currentStageId,"active-id":t.currentStepId},on:{activeItem:t.activeItemList}}):t._e()],1),a("div",{staticClass:"col-md-6 ml-5"},[t._m(4),a("div",{staticClass:"col-md-12 pt-4 task-detail"},[a("div",{staticClass:"col-sm-12 pl-0 pr-0 mb-4"},[a("i",{staticClass:"iconfont iconshijian "}),a("span",{staticClass:"ml-3 font-bold"},[t._v("任务名称：")]),t.taskInfo&&t.taskInfo.missionName?a("span",{staticClass:"font-regular ml-3"},[t._v(t._s(t.taskInfo.missionName))]):t._e()]),a("div",{staticClass:"col-sm-12 pl-0 pr-0 mb-4"},[a("i",{staticClass:"iconfont iconshijian "}),a("span",{staticClass:"ml-3 font-bold"},[t._v("点评截止时间：")]),t.taskInfo&&t.taskInfo.missionDeadline?a("span",{staticClass:"font-regular ml-3"},[t._v(t._s(t.taskInfo.missionDeadline))]):t._e()]),a("div",{staticClass:"col-sm-12 pl-0 pr-0 mb-4"},[a("i",{staticClass:"iconfont iconshijian "}),a("span",{staticClass:"ml-3 font-bold"},[t._v("任务描述：")]),t.taskInfo&&t.taskInfo.missionDescribe?a("span",{staticClass:"font-regular col-md-12 pl-5 mt-2"},[t._v(t._s(t.taskInfo.missionDescribe))]):t._e()]),a("div",{staticClass:"col-sm-12 pl-0 pr-0 mb-4"},[a("i",{staticClass:"iconfont iconshijian "}),a("span",{staticClass:"ml-3 font-bold"},[t._v("任务要求：")]),t.taskInfo&&t.taskInfo.missionRequirement?a("span",{staticClass:"font-regular col-md-12 pl-5 mt-2"},[t._v(t._s(t.taskInfo.missionRequirement))]):t._e()])]),a("div",{staticClass:"col-md-12 mt-4 history"},[t._m(5),a("div",{staticClass:"col-md-12"},t._l(t.docData,function(e){return a("div",{key:e.outputId,staticClass:"col-md-12 text-center doc mt-3 mb-5"},[t._m(6,!0),a("div",{staticClass:"col-md-8 text-left"},[a("span",{staticClass:"col-md-12 font-regular",staticStyle:{"font-size":"12px","margin-top":"12px"}},[t._v(t._s(e.outputName))]),a("span",{staticClass:"col-md-5 font-regular",staticStyle:{"font-size":"12px"}},[t._v("上传时间："+t._s(e.uploadTime)+" ")]),a("span",{staticClass:"col-md-4 font-regular",staticStyle:{"font-size":"12px"}},[t._v("操作："+t._s(e.realName)+" ")])]),a("div",{staticClass:"col-md-3 text-left mt-5"},[a("span",{directives:[{name:"show",rawName:"v-show",value:"-1"==e.commentStatus,expression:"obj.commentStatus == '-1'"}],staticClass:"font-regular",staticStyle:{color:"#FC4E54","font-size":"12px","margin-top":"36px"}},[t._v("未通过")]),a("span",{directives:[{name:"show",rawName:"v-show",value:"0"==e.commentStatus,expression:"obj.commentStatus == '0'"}],staticClass:"font-regular",staticStyle:{color:"rgb(252, 151, 1)","font-size":"12px","margin-top":"36px"}},[t._v("待点评")]),a("span",{directives:[{name:"show",rawName:"v-show",value:"1"==e.commentStatus,expression:"obj.commentStatus == '1'"}],staticClass:"font-regular",staticStyle:{color:"#02C365","font-size":"12px","margin-top":"36px"}},[t._v("已通过")]),a("span",{directives:[{name:"show",rawName:"v-show",value:"0"==e.commentStatus,expression:"obj.commentStatus == '0'"}],staticClass:"font-regular",staticStyle:{"font-size":"12px","margin-top":"36px","margin-left":"20px",cursor:"pointer"},on:{click:function(a){return t.gotoComment(e)}}},[t._v("去点评")])])])}),0)])])])],1)])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-sm-12 mt-4",staticStyle:{height:"18px","font-size":"18px","font-family":"PingFang-SC-Bold","font-weight":"bold",color:"rgba(255,255,255,1)"}},[s("img",{staticStyle:{"border-radius":"50%",width:"51px",height:"51px"},attrs:{src:a("f070")}}),s("span",{staticStyle:{"margin-left":"15px"}},[t._v("用户姓名 | Go语言实战抽奖")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-2 text-center",staticStyle:{border:"1px solid #FF4C55","border-radius":"10px","margin-top":"100px"}},[a("i",{staticClass:"iconfont icongantanhao",staticStyle:{color:"#FF4C55"}}),a("span",{staticStyle:{color:"#FF4C55"}},[t._v("即将超时任务：1项")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row",staticStyle:{background:"rgba(255,255,255,1)","box-shadow":"0px 3px 15px 0px rgba(0, 0, 0, 0.08)",height:"59px","line-height":"59px"}},[a("div",{staticClass:"col-md-3 col-md-offset-2",staticStyle:{cursor:"pointer"}},[a("span",[t._v("助教中心 > 项目列表 > 项目")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bar"},[a("span",[t._v("阶段与任务列表")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bar"},[a("span",[t._v("任务详情")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-12 pl-0 pr-0",staticStyle:{height:"55px","line-height":"50px","border-bottom":"1px solid #EBEBEB"}},[a("div",{staticClass:"col-md-2",staticStyle:{cursor:"pointer"}},[a("span",{staticClass:"col-sm-12 text-center font-tab active-font-color"},[t._v("点评历程")]),a("span",{staticClass:"col-sm-4 col-sm-offset-4 text-center active-bg-color",staticStyle:{height:"2px","border-radius":"1px"}})]),a("div",{staticClass:"col-md-2",staticStyle:{cursor:"pointer"}},[a("span",{staticClass:"col-sm-12 text-center font-tab unactive-font-color"},[t._v("Q&A")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-1"},[s("img",{staticStyle:{width:"36px",height:"42px","margin-top":"9px"},attrs:{src:a("e85a")}})])}],n=a("8af6"),r=a("8668"),c=a("3595"),l={name:"app",components:{Header:n["a"],StepList:r["a"]},mounted(){this.loadData()},data(){return{stepData:[],docData:[{id:"1",outputName:"《软件需求调研提纲1》.docx",status:"0",time:"2019-12-12",do:"于子博"},{id:"2",outputName:"《软件需求调研提纲2》.docx",status:"1",time:"2019-12-12",do:"子博"},{id:"3",outputName:"《软件需求调研提纲3》.docx",status:"0",time:"2019-12-12",do:"于子"},{id:"4",outputName:"《软件需求调研提纲4》.docx",status:"1",time:"2019-12-12",do:"于博"}],teamId:"",projectId:"",currentStepId:-1,currentStageId:-1,stepInfo:[],taskInfo:null,currentStageName:"",memberName:""}},methods:{loadData(){let t=this;t.teamId=parseInt(Object(c["a"])("teamId")),t.projectId=parseInt(Object(c["a"])("projectId")),t.currentStepId=parseInt(Object(c["a"])("currentStepId")),t.$http.post("/doproject/steplist",{teamid:this.teamId},e=>{if(e.success){t.stepData=e.data.stages,t.currentStageId=e.data.currentStageId;for(let e of t.stepData)e.stageId===t.currentStageId&&(t.currentStepId=e.steps[0].stepId,t.currentStageName=e.stageName);t.$http.post("/assistant/teammissionlist",{teamId:t.teamId,currentStepId:t.currentStepId,projectId:t.projectId},e=>{if(console.log(e.data),e.success){for(var a=0;a<e.data.initproject.length;a++){e.data.initproject[a].uploadTime=e.data.initproject[a].uploadTime.substr(0,10),e.data.initproject[a].outputNameReal=e.data.initproject[a].outputName;var s=e.data.initproject[a].outputName.split("$_$");e.data.initproject[a].outputName=s[1]}t.docData=e.data.initproject,t.taskInfo=e.data.initmsg[0],t.memberName=e.data.initmsg[0].memberName}})}})},activeItemList(t,e){let a=this;a.currentStepId=e,a.$http.post("/assistant/teammissionlist",{teamId:a.teamId,currentStepId:a.currentStepId,projectId:a.projectId},t=>{if(t.success){for(var e=0;e<t.data.initproject.length;e++){t.data.initproject[e].uploadTime=t.data.initproject[e].uploadTime.substr(0,10);var s=t.data.initproject[e].outputName.split("$_$");t.data.initproject[e].outputName=s[1]}a.docData=t.data.initproject,a.taskInfo=t.data.initmsg[0]}})},gotoComment(t){localStorage.setItem("outputName",t.outputNameReal),window.location="assistant-task-comment.html?outputId="+t.outputId+"&teamId="+this.teamId+"&currentMissionId="+this.currentStepId+"&memberCode="+t.uploadUserId}}},p=l,m=(a("f67f"),a("a599"),a("2877")),d=Object(m["a"])(p,i,o,!1,null,"1ffb8c2b",null),u=d.exports,f=(a("7378"),a("3a10"),a("49f4"),a("751a"));s["default"].prototype.$http=f["a"],new s["default"]({render:t=>t(u)}).$mount("#app")},6:function(t,e,a){t.exports=a("4282")},"8e04":function(t,e,a){},a599:function(t,e,a){"use strict";var s=a("8e04"),i=a.n(s);i.a},cb67:function(t,e,a){},f67f:function(t,e,a){"use strict";var s=a("cb67"),i=a.n(s);i.a}});
//# sourceMappingURL=assistant-task-list.64d28145.js.map