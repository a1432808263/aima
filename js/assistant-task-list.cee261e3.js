(function(t){function e(e){for(var s,i,r=e[0],c=e[1],l=e[2],p=0,d=[];p<r.length;p++)i=r[p],o[i]&&d.push(o[i][0]),o[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);m&&m(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,r=1;r<a.length;r++){var c=a[r];0!==o[c]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},o={"assistant-task-list":0},n=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(){return Promise.resolve()},i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var m=c;n.push([6,"chunk-vendors","chunk-common"]),a()})({"0cd3":function(t,e,a){},4282:function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container-fluid"},[a("Header",{attrs:{img:"",school:"Go语言实战抽奖系统"}}),a("div",{staticClass:"row top-main"},[a("div",{staticClass:"col-md-6 col-md-offset-2 mt-2",staticStyle:{height:"51px","line-height":"51px"}},[a("div",{staticClass:"col-sm-12 mt-4",staticStyle:{height:"18px","font-size":"18px","font-family":"PingFang-SC-Bold","font-weight":"bold",color:"rgba(255,255,255,1)"}},[t.baseInfo&&t.baseInfo.logoPath?a("img",{staticStyle:{"border-radius":"50%",width:"51px",height:"51px"},attrs:{src:t.baseInfo.logoPath}}):t._e(),t.baseInfo&&t.baseInfo.teamName?a("span",{staticStyle:{"margin-left":"15px"}},[t._v(t._s(t.baseInfo.teamName)+" | "+t._s(t.baseInfo.projectName))]):t._e()]),a("div",{staticClass:"col-sm-12 mt-6",staticStyle:{"font-family":"PingFang-SC-Regular","font-weight":"bold",color:"rgba(255,255,255,1)"}},[t.baseInfo&&t.baseInfo.modeName?a("span",[t._v(t._s(t.baseInfo.modeName)+" |")]):t._e(),t.baseInfo&&t.baseInfo.memberName?a("span",[t._v("成员  "+t._s(t.baseInfo.memberName)+"  |")]):t._e(),t.baseInfo&&t.baseInfo.currentStageName&&t.baseInfo.stepName?a("span",[t._v("当前进度  "+t._s(t.baseInfo.currentStageName)+"-"+t._s(t.baseInfo.stepName)+" ")]):t._e()])]),t._m(0)]),t._m(1),a("div",{staticClass:"row pt-4 mt-3"},[a("div",{staticClass:"col-md-2 col-md-offset-2 task-list"},[t._m(2),-1!==t.currentStageId?a("StepList",{attrs:{data:t.stepData,"expand-id":t.currentStageId,"active-id":t.currentStepId},on:{activeItem:t.activeItemList}}):t._e()],1),a("div",{staticClass:"col-md-6 ml-5"},[t._m(3),a("div",{staticClass:"col-md-12 pt-4 task-detail"},[a("div",{staticClass:"col-sm-12 pl-0 pr-0 mb-4"},[a("i",{staticClass:"iconfont iconrenwumingcheng "}),a("span",{staticClass:"ml-3 font-bold"},[t._v("任务名称：")]),t.taskInfo&&t.taskInfo.missionName?a("span",{staticClass:"font-regular ml-3"},[t._v(t._s(t.taskInfo.missionName))]):t._e()]),a("div",{staticClass:"col-sm-12 pl-0 pr-0 mb-4"},[a("i",{staticClass:"iconfont iconshijian "}),a("span",{staticClass:"ml-3 font-bold"},[t._v("点评截止时间：")]),t.taskInfo&&t.taskInfo.missionDeadline?a("span",{staticClass:"font-regular ml-3"},[t._v(t._s(t.taskInfo.missionDeadline))]):t._e()]),a("div",{staticClass:"col-sm-12 pl-0 pr-0 mb-4"},[a("i",{staticClass:"iconfont iconwendangmoban "}),a("span",{staticClass:"ml-3 font-bold"},[t._v("任务描述：")]),t.taskInfo&&t.taskInfo.missionDescribe?a("span",{staticClass:"font-regular col-md-12 pl-5 mt-2"},[t._v(t._s(t.taskInfo.missionDescribe))]):t._e()]),a("div",{staticClass:"col-sm-12 pl-0 pr-0 mb-4"},[a("i",{staticClass:"iconfont iconrenwuyaoqiu "}),a("span",{staticClass:"ml-3 font-bold"},[t._v("任务要求：")]),t.taskInfo&&t.taskInfo.missionRequirement?a("span",{staticClass:"font-regular col-md-12 pl-5 mt-2"},[t._v(t._s(t.taskInfo.missionRequirement))]):t._e()])]),a("div",{staticClass:"col-md-12 mt-4 history"},[t._m(4),a("div",{staticClass:"col-md-12"},t._l(t.docData,function(e){return a("div",{key:e.outputId,staticClass:"col-md-12 text-center doc mt-3 mb-5"},[t._m(5,!0),a("div",{staticClass:"col-md-8 text-left"},[a("span",{staticClass:"col-md-12 font-regular",staticStyle:{"font-size":"12px","margin-top":"12px"}},[t._v(t._s(e.outputName))]),a("span",{staticClass:"col-md-5 font-regular",staticStyle:{"font-size":"12px"}},[t._v("上传时间："+t._s(e.uploadTime)+" ")]),a("span",{staticClass:"col-md-4 font-regular",staticStyle:{"font-size":"12px"}},[t._v("操作："+t._s(e.realName)+" ")])]),a("div",{staticClass:"col-md-3 text-left mt-5"},[a("span",{directives:[{name:"show",rawName:"v-show",value:"-1"==e.commentStatus,expression:"obj.commentStatus == '-1'"}],staticClass:"font-regular",staticStyle:{color:"#FC4E54","font-size":"12px","margin-top":"36px"}},[t._v("未通过")]),a("span",{directives:[{name:"show",rawName:"v-show",value:"0"==e.commentStatus,expression:"obj.commentStatus == '0'"}],staticClass:"font-regular",staticStyle:{color:"rgb(252, 151, 1)","font-size":"12px","margin-top":"36px"}},[t._v("待点评")]),a("span",{directives:[{name:"show",rawName:"v-show",value:"1"==e.commentStatus,expression:"obj.commentStatus == '1'"}],staticClass:"font-regular",staticStyle:{color:"#02C365","font-size":"12px","margin-top":"36px"}},[t._v("已通过")]),a("span",{directives:[{name:"show",rawName:"v-show",value:"0"==e.commentStatus,expression:"obj.commentStatus == '0'"}],staticClass:"font-regular",staticStyle:{"font-size":"12px","margin-top":"36px","margin-left":"20px",cursor:"pointer"},on:{click:function(a){return t.gotoComment(e)}}},[t._v("去点评")])])])}),0)])])])],1)])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-2 text-center",staticStyle:{border:"1px solid #FF4C55","border-radius":"10px","margin-top":"100px",display:"none"}},[a("i",{staticClass:"iconfont icongantanhao",staticStyle:{color:"#FF4C55"}}),a("span",{staticStyle:{color:"#FF4C55"}},[t._v("即将超时任务：1项")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row",staticStyle:{background:"rgba(255,255,255,1)","box-shadow":"0px 3px 15px 0px rgba(0, 0, 0, 0.08)",height:"59px","line-height":"59px"}},[a("div",{staticClass:"col-md-3 col-md-offset-2",staticStyle:{cursor:"pointer"}},[a("span",[t._v("助教中心 > 项目列表 > 项目")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bar"},[a("span",[t._v("阶段与任务列表")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bar"},[a("span",[t._v("任务详情")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-12 pl-0 pr-0",staticStyle:{height:"55px","line-height":"50px","border-bottom":"1px solid #EBEBEB"}},[a("div",{staticClass:"col-md-2",staticStyle:{cursor:"pointer"}},[a("span",{staticClass:"col-sm-12 text-center font-tab active-font-color"},[t._v("点评历程")]),a("span",{staticClass:"col-sm-4 col-sm-offset-4 text-center active-bg-color",staticStyle:{height:"2px","border-radius":"1px"}})]),a("div",{staticClass:"col-md-2",staticStyle:{cursor:"pointer"}},[a("span",{staticClass:"col-sm-12 text-center font-tab unactive-font-color"},[t._v("Q&A")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-1"},[s("img",{staticStyle:{width:"36px",height:"42px","margin-top":"9px"},attrs:{src:a("e85a")}})])}],i=a("8af6"),r=a("8668"),c=a("3595"),l={name:"app",components:{Header:i["a"],StepList:r["a"]},mounted(){this.loadData()},data(){return{baseInfo:null,stepData:[],docData:[],teamId:"",projectId:"",currentStepId:-1,currentStageId:-1,stepInfo:[],taskInfo:null,currentStageName:"",memberName:""}},methods:{loadData(){let t=this;t.teamId=parseInt(Object(c["a"])("teamId")),t.projectId=parseInt(Object(c["a"])("projectId")),t.currentStepId=parseInt(Object(c["a"])("currentStepId")),t.$http.post("/doproject/steplist",{teamid:this.teamId},e=>{if(e.success){t.stepData=e.data.stages,t.currentStageId=e.data.currentStageId;for(let e of t.stepData)e.stageId===t.currentStageId&&(t.currentStepId=e.steps[0].stepId,t.currentStageName=e.stageName);t.$http.post("/assistant/teammissionlist",{teamId:t.teamId,currentStepId:t.currentStepId,projectId:t.projectId},e=>{if(console.log(e.data),e.success){for(var a=0;a<e.data.initproject.length;a++){e.data.initproject[a].uploadTime=e.data.initproject[a].uploadTime.substr(0,10),e.data.initproject[a].outputNameReal=e.data.initproject[a].outputName;var s=e.data.initproject[a].outputName.split("$_$");e.data.initproject[a].outputName=s[1]}t.docData=e.data.initproject,t.taskInfo=e.data.initmsg[0],t.memberName=e.data.initmsg[0].memberName,t.facultyMarjorId=t.taskInfo.facultyMarjorId}})}}),t.$http.post("/assistant/selectTeamProgressInfo",{teamId:t.teamId,currentStepId:t.currentStepId,projectId:t.projectId},e=>{console.log(e.data),e.success&&(0===e.data.mode?e.data.modeName="单人模式":e.data.modeName="团队模式",t.baseInfo=e.data,localStorage.setItem("assTeamInfo",JSON.stringify(e.data)))})},activeItemList(t,e){let a=this;a.currentStepId=e,a.$http.post("/assistant/teammissionlist",{teamId:a.teamId,currentStepId:a.currentStepId,projectId:a.projectId},t=>{if(t.success){for(var e=0;e<t.data.initproject.length;e++){t.data.initproject[e].uploadTime=t.data.initproject[e].uploadTime.substr(0,10),t.data.initproject[e].outputNameReal=t.data.initproject[e].outputName;var s=t.data.initproject[e].outputName.split("$_$");t.data.initproject[e].outputName=s[1]}a.docData=t.data.initproject,a.taskInfo=t.data.initmsg[0],a.facultyMarjorId=a.taskInfo.facultyMarjorId}})},gotoComment(t){localStorage.setItem("outputName",t.outputNameReal),localStorage.setItem("facultyMarjorId",this.facultyMarjorId),localStorage.setItem("projectId",this.projectId),window.location="assistant-task-comment.html?outputId="+t.outputId+"&teamId="+this.teamId+"&currentMissionId="+this.currentStepId+"&memberCode="+t.uploadUserId}}},m=l,p=(a("7993"),a("a599"),a("2877")),d=Object(p["a"])(m,o,n,!1,null,"193db200",null),u=d.exports,f=(a("7378"),a("3a10"),a("49f4"),a("751a"));s["default"].prototype.$http=f["a"],new s["default"]({render:t=>t(u)}).$mount("#app")},6:function(t,e,a){t.exports=a("4282")},7993:function(t,e,a){"use strict";var s=a("0cd3"),o=a.n(s);o.a},"8e04":function(t,e,a){},a599:function(t,e,a){"use strict";var s=a("8e04"),o=a.n(s);o.a},e85a:function(t,e){t.exports="data:image/png;base64,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"}});
//# sourceMappingURL=assistant-task-list.cee261e3.js.map