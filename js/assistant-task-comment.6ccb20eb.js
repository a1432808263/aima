(function(t){function e(e){for(var a,i,c=e[0],l=e[1],r=e[2],m=0,u=[];m<c.length;m++)i=c[m],o[i]&&u.push(o[i][0]),o[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(u.length)u.shift()();return n.push.apply(n,r||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,i=1;i<s.length;i++){var l=s[i];0!==o[l]&&(a=!1)}a&&(n.splice(e--,1),t=c(c.s=s[0]))}return t}var a={},o={"assistant-task-comment":0},n=[];function i(t){return c.p+"js/"+({pdfjsWorker:"pdfjsWorker"}[t]||t)+"."+{pdfjsWorker:"24e2b1dd"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(t){var e=[],s=o[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise(function(e,a){s=o[t]=[e,a]});e.push(s[2]=a);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t),n=function(e){l.onerror=l.onload=null,clearTimeout(r);var s=o[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+a+": "+n+")");i.type=a,i.request=n,s[1](i)}o[t]=void 0}};var r=setTimeout(function(){n({type:"timeout",target:l})},12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(s,a,function(e){return t[e]}.bind(null,a));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var m=0;m<l.length;m++)e(l[m]);var d=r;n.push([3,"chunk-vendors","chunk-common"]),s()})({"0351":function(t,e,s){"use strict";var a=s("1b4f"),o=s.n(a);o.a},"1b4f":function(t,e,s){},3:function(t,e,s){t.exports=s("aae3")},"3bd4":function(t,e,s){"use strict";var a=s("d57d"),o=s.n(a);o.a},aae3:function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"container-fluid"},[s("Header",{attrs:{img:"",school:"Go语言实战抽奖系统"}}),s("div",{staticClass:"row top-main"},[s("div",{staticClass:"col-md-6 col-md-offset-2 mt-2",staticStyle:{height:"51px","line-height":"51px"}},[s("div",{staticClass:"col-sm-12 mt-4",staticStyle:{height:"18px","font-size":"18px","font-family":"PingFang-SC-Bold","font-weight":"bold",color:"rgba(255,255,255,1)"}},[t.baseInfo&&t.baseInfo.logoPath?s("img",{staticStyle:{"border-radius":"50%",width:"51px",height:"51px"},attrs:{src:t.baseInfo.logoPath}}):t._e(),t.baseInfo&&t.baseInfo.teamName?s("span",{staticStyle:{"margin-left":"15px"}},[t._v(t._s(t.baseInfo.teamName)+" | "+t._s(t.baseInfo.projectName))]):t._e()]),s("div",{staticClass:"col-sm-12 mt-6",staticStyle:{"font-family":"PingFang-SC-Regular","font-weight":"bold",color:"rgba(255,255,255,1)"}},[t.baseInfo&&t.baseInfo.modeName?s("span",[t._v(t._s(t.baseInfo.modeName)+" |")]):t._e(),t.baseInfo&&t.baseInfo.memberName?s("span",[t._v("成员  "+t._s(t.baseInfo.memberName)+"  |")]):t._e(),t.baseInfo&&t.baseInfo.currentStageName&&t.baseInfo.stepName?s("span",[t._v("当前进度  "+t._s(t.baseInfo.currentStageName)+"-"+t._s(t.baseInfo.stepName)+" ")]):t._e()])]),t._m(0)]),s("div",{staticClass:"row",staticStyle:{background:"rgba(255,255,255,1)","box-shadow":"0px 3px 15px 0px rgba(0, 0, 0, 0.08)",height:"59px","line-height":"59px"}},[s("div",{staticClass:"col-md-3 col-md-offset-2",staticStyle:{cursor:"pointer"}},[s("span",{on:{click:function(e){return t.goback(-3)}}},[t._v("助教中心 ")]),t._v("> "),s("span",{on:{click:function(e){return t.goback(-2)}}},[t._v("项目列表")]),t._v(" > "),s("span",{on:{click:function(e){return t.goback(-1)}}},[t._v("项目")]),t._v(" > 任务点评\n      ")])]),s("div",{staticClass:"row pt-4 mt-3"},["pdf"===t.userOutPutType?s("div",{staticClass:"col-md-5 col-md-offset-2 doc-read",attrs:{id:"pdf"}},[s("PDF",{attrs:{"pdf-url":t.pdfUrl}})],1):t._e(),"zip"===t.userOutPutType?s("div",{staticClass:"col-md-5 col-md-offset-2 doc-read"},[s("span",{staticClass:"col-md-12 text-center",staticStyle:{cursor:"pointer","font-size":"25px"},on:{click:t.downLoadOutPut}},[t._v("该成果物为zip格式，请下载后查看\n            "),s("i",{staticClass:"iconfont iconxiazai text-center",staticStyle:{"font-size":"30px",color:"#6612cf"}})])]):t._e(),s("div",{staticClass:"col-md-3 box-right ml-5 pr-0 pl-0"},[s("div",{staticClass:"comment-tab"},[t.isCommented?s("div",{staticClass:"col-md-3  pl-0 pr-0",style:{cursor:t.commentCursor}},[s("span",{staticClass:"col-sm-12 text-center ",class:"comment"==t.tabStatus?"active-font-color":"unactive-font-color"},[t._v("点评")]),s("span",{staticClass:"col-sm-4 col-sm-offset-4 text-center",class:"comment"==t.tabStatus?"active-bg-color":"unactive-bg-color",staticStyle:{height:"2px","border-radius":"1px"}})]):t._e(),t.isCommented?t._e():s("div",{staticClass:"col-md-3  pl-0 pr-0",style:{cursor:t.commentCursor},on:{click:function(e){return t.selectTab("comment")}}},[s("span",{staticClass:"col-sm-12 text-center ",class:"comment"==t.tabStatus?"active-font-color":"unactive-font-color"},[t._v("点评")]),s("span",{staticClass:"col-sm-4 col-sm-offset-4 text-center",class:"comment"==t.tabStatus?"active-bg-color":"unactive-bg-color",staticStyle:{height:"2px","border-radius":"1px"}})]),s("div",{staticClass:"col-md-3  pl-0 pr-0",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.selectTab("commentHistory")}}},[s("span",{staticClass:"col-sm-12 text-center ",class:"commentHistory"==t.tabStatus?"active-font-color":"unactive-font-color"},[t._v("历史点评")]),s("span",{staticClass:"col-sm-4 col-sm-offset-4 text-center",class:"commentHistory"==t.tabStatus?"active-bg-color":"unactive-bg-color",staticStyle:{height:"2px","border-radius":"1px"}})]),s("div",{staticClass:"col-md-3  pl-0 pr-0",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.selectTab("task")}}},[s("span",{staticClass:"col-sm-12 text-center ",class:"task"==t.tabStatus?"active-font-color":"unactive-font-color"},[t._v("任务说明")]),s("span",{staticClass:"col-sm-4 col-sm-offset-4 text-center",class:"task"==t.tabStatus?"active-bg-color":"unactive-bg-color",staticStyle:{height:"2px","border-radius":"1px"}})]),s("div",{staticClass:"col-md-3  pl-0 pr-0",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.selectTab("qa")}}},[s("span",{staticClass:"col-sm-12 text-center ",class:"qa"==t.tabStatus?"active-font-color":"unactive-font-color"},[t._v("Q&A")]),s("span",{staticClass:"col-sm-4 col-sm-offset-4 text-center",class:"qa"==t.tabStatus?"active-bg-color":"unactive-bg-color",staticStyle:{height:"2px","border-radius":"1px"}})])]),"comment"===t.tabStatus?s("div",{staticClass:"col-md-12 mt-4",staticStyle:{"padding-left":"20px"}},[s("span",{staticClass:"col-md-12 font-bold",staticStyle:{"font-size":"14px"}},[t._v("点评:")]),t._l(t.commentmodelData,function(e,a){return s("div",{key:e.modelId,staticClass:"col-md-12 comment-box mt-4 mb-2"},[s("span",{staticClass:"col-md-8 text-left font-regular",staticStyle:{color:"#666666"}},[t._v(t._s(a+1)+"."+t._s(e.modelContent)),s("i",{staticClass:"iconfont icongantanhao",staticStyle:{color:"#666666","margin-left":"5px"}})]),s("div",{staticClass:"col-md-4 text-right",staticStyle:{padding:"unset"}},[s("el-switch",{staticClass:"text-right",attrs:{"active-color":"#00AE5B","inactive-color":"#EBEBEB","inactive-text":"正确"},model:{value:t.commentmodelVal[a],callback:function(e){t.$set(t.commentmodelVal,a,e)},expression:"commentmodelVal[index]"}})],1)])}),s("span",{staticClass:"col-md-12 font-bold mt-3",staticStyle:{"font-size":"14px"}},[t._v("点评建议:")]),s("span",{staticClass:"col-md-12 font-regular",staticStyle:{"font-size":"12px",color:"#666666"}},[t._v("请针对文档，提出问题，学生会对问题进行回答")]),t._l(t.questionList,function(e,a){return s("div",{key:e.id,staticClass:"col-md-12 mt-5 mb-3",on:{mouseover:function(s){return t.changeFocusStatus(e)},mouseout:function(s){return t.changeFocusStatus(e)}}},[s("span",{staticClass:"font-regular",staticStyle:{"font-size":"12px",color:"#666666"}},[t._v("问题"+t._s(a+1))]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.isfocus,expression:"questionobj.isfocus"}],staticClass:"pull-right font-regular",staticStyle:{"font-size":"12px",color:"#FF4C55"},on:{click:function(s){return t.deleteQuestion(e)}}},[t._v("删除")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.advice,expression:"questionobj.advice"}],staticClass:"col-md-12 mt-3",class:e.isfocus?"textarea-focus":"textarea-unfocus",domProps:{value:e.advice},on:{input:function(s){s.target.composing||t.$set(e,"advice",s.target.value)}}})])}),s("div",{staticClass:"col-md-12 text-center",staticStyle:{height:"20px","line-height":"20px"}},[s("span",{staticClass:"font-regular",staticStyle:{"font-size":"12px",color:"#00AE5B","margin-left":"8px"},on:{click:t.addQuestion}},[s("i",{staticClass:"iconfont icontianjiawenjian",staticStyle:{color:"#00AE5B"}}),t._v("添加问题")])]),s("div",{staticClass:"col-md-3 col-md-offset-2 task-btn mt-5 mb-4",on:{click:function(e){return t.commentSubmit("1")}}},[t._v("任务通过")]),s("div",{staticClass:"col-md-3 col-md-offset-1 task-btn mt-5 mb-4",staticStyle:{background:"#FF9600","box-shadow":"0px 4px 15px 0px rgba(255,129,23,0.34)"},on:{click:function(e){return t.commentSubmit("-1")}}},[t._v("任务不通过")])],2):t._e(),"commentHistory"===t.tabStatus&&0!==t.commentHistoryList.length?s("div",{staticClass:"col-md-12 mt-4",staticStyle:{"padding-left":"20px"}},t._l(t.commentHistoryList,function(e){return s("div",{key:e.id,staticClass:"col-md-12 history-box mt-2 mb-3"},[s("span",{staticClass:"font-regular pull-left mt-3",staticStyle:{"font-size":"12px",color:"#333333"}},[t._v("助教点评：")]),1===e.status?s("span",{staticClass:"font-regular pull-right mt-3",staticStyle:{"font-size":"12px",color:"#02C365"}},[t._v("已通过")]):s("span",{staticClass:"font-regular pull-right mt-3",staticStyle:{"font-size":"12px",color:"#FF4C55"}},[t._v("未通过")]),t._l(e.assistantComment,function(e,a,o){return s("span",{key:a,staticClass:"font-regular col-md-12 pl-0 pr-0 mt-3",staticStyle:{color:"#666666","font-size":"12px"}},[t._v(t._s(o+1)+"."+t._s(e))])}),s("span",{staticClass:"font-regular col-md-12 pl-0 pr-0 mt-1 text-right",staticStyle:{color:"#666666","font-size":"12px"}},[t._v(t._s(e.assistantCreateTime))])],2)}),0):t._e(),"commentHistory"===t.tabStatus&&0===t.commentHistoryList.length?s("div",{staticClass:"col-md-12 mt-4",staticStyle:{"padding-left":"20px"}},[t._v("\n          暂无数据！\n        ")]):t._e(),"task"===t.tabStatus?s("div",{staticClass:"col-md-12 mt-4",staticStyle:{"padding-left":"20px"}},[s("div",{staticClass:"col-sm-12 pl-0 pr-0 mb-4"},[s("i",{staticClass:"iconfont iconrenwumingcheng "}),s("span",{staticClass:"ml-3 font-bold"},[t._v("任务名称：")]),t.taskInfo&&t.taskInfo.missionName?s("span",{staticClass:"font-regular ml-3"},[t._v(t._s(t.taskInfo.missionName))]):t._e()]),s("div",{staticClass:"col-sm-12 pl-0 pr-0 mb-4"},[s("i",{staticClass:"iconfont iconshijian "}),s("span",{staticClass:"ml-3 font-bold"},[t._v("点评截止时间：")]),t.taskInfo&&t.taskInfo.missionDeadline?s("span",{staticClass:"font-regular ml-3"},[t._v(t._s(t.taskInfo.missionDeadline))]):t._e()]),s("div",{staticClass:"col-sm-12 pl-0 pr-0 mb-4"},[s("i",{staticClass:"iconfont iconwendangmoban "}),s("span",{staticClass:"ml-3 font-bold"},[t._v("任务描述：")]),t.taskInfo&&t.taskInfo.missionDescribe?s("span",{staticClass:"font-regular col-md-12 pl-5 mt-2"},[t._v(t._s(t.taskInfo.missionDescribe))]):t._e()]),s("div",{staticClass:"col-sm-12 pl-0 pr-0 mb-4"},[s("i",{staticClass:"iconfont iconrenwuyaoqiu "}),s("span",{staticClass:"ml-3 font-bold"},[t._v("任务要求：")]),t.taskInfo&&t.taskInfo.missionRequirement?s("span",{staticClass:"font-regular col-md-12 pl-5 mt-2"},[t._v(t._s(t.taskInfo.missionRequirement))]):t._e()])]):t._e(),"qa"===t.tabStatus?s("div",{staticClass:"col-md-12 mt-4",staticStyle:{"padding-left":"20px"}},[s("span",[t._v("你好，这里是Q&A，欢迎联系")])]):t._e()])])],1)])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-2 text-center",staticStyle:{border:"1px solid #FF4C55","border-radius":"10px","margin-top":"100px",display:"none"}},[s("i",{staticClass:"iconfont icongantanhao",staticStyle:{color:"#FF4C55"}}),s("span",{staticStyle:{color:"#FF4C55"}},[t._v("即将超时任务：1项")])])}],i=(s("be4f"),s("450d"),s("896a")),c=s.n(i),l=s("8af6"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"pdfContent",attrs:{id:"container"}},[s("canvas",{staticStyle:{"border-radius":"10px"},attrs:{id:"the-canvas"}}),t.pdfDoc?s("div",[t.pageNum>1?s("icon",{staticClass:"left el-icon-caret-left pdf-icon",on:{click:t.onPrevPage}}):t._e(),t.pageNum<t.pdfDoc.numPages?s("icon",{staticClass:"right el-icon-caret-right pdf-icon",on:{click:t.onNextPage}}):t._e()],1):t._e()])},m=[],d=s("9511"),u=s.n(d),p={name:"pdf",props:{pdfUrl:String},data(){return{pdfDoc:null,pageNum:1,pageRendering:!1,pageNumPending:null,scale:1}},mounted(){this.showPDF(this.pdfUrl)},methods:{showPDF(t){let e=this;u.a.getDocument(t).then(function(t){e.pdfDoc=t,e.renderPage(1)})},renderPage(t){this.pageRendering=!0;let e=this;this.pdfDoc.getPage(t).then(function(t){var s=t.getViewport(e.scale);let a=document.getElementById("the-canvas");a.height=s.height,a.width=s.width;var o={canvasContext:a.getContext("2d"),viewport:s},n=t.render(o);n.promise.then(function(){e.pageRendering=!1,null!==e.pageNumPending&&(this.renderPage(e.pageNumPending),e.pageNumPending=null)})})},queueRenderPage(t){this.pageRendering?this.pageNumPending=t:this.renderPage(t)},onPrevPage(){this.pageNum<=1||(this.pageNum--,this.queueRenderPage(this.pageNum))},onNextPage(){this.pageNum>=this.pdfDoc.numPages||(this.pageNum++,this.queueRenderPage(this.pageNum))},hideContent(){this.$refs.pdfContent.style.display="block"},close(){this.$refs.pdfContent.style.display="none"}}},f=p,g=(s("0351"),s("2877")),v=Object(g["a"])(f,r,m,!1,null,"77c3f136",null),b=v.exports,h=s("3595"),C={name:"app",components:{Header:l["a"],PDF:b},mounted(){this.loadData()},data(){return{tabStatus:"comment",isCommented:!1,commentCursor:"pointer",value1:!0,value2:!1,value3:!1,outputId:"",outputName:"",teamId:"",currentMissionId:"",memberCode:"",pdfUrl:"",userOutPutType:"",questionList:[{id:"1",title:"问题1",advice:"",isfocus:!1},{id:"2",title:"问题2",advice:"",isfocus:!1},{id:"3",title:"问题3",advice:"",isfocus:!1}],commentHistoryList:[],commentmodelData:[],commentmodelVal:[],baseInfo:null,taskInfo:null}},methods:{loadData(){let t=this;const e=c.a.service({lock:!0,text:"加载中...",spinner:"el-icon-loading",background:"rgba(f, 0, 0, 0.7)",color:"#6612cf"});t.baseInfo=JSON.parse(localStorage.getItem("assTeamInfo")),t.outputId=Object(h["a"])("outputId"),t.outputName=localStorage.getItem("outputName"),t.teamId=Object(h["a"])("teamId"),t.currentMissionId=Object(h["a"])("currentMissionId"),t.memberCode=Object(h["a"])("memberCode"),"zip"===t.outputName.substring(t.outputName.length-3)?(t.userOutPutType="zip",e.close()):t.$http.post("/assistant/openpdf",{outputName:t.outputName},s=>{e.close(),s.success&&(s.data=JSON.parse(s.data),t.pdfUrl=s.data.fileUrl,t.userOutPutType="pdf")}),t.$http.post("/assistant/commentmodel",{outputId:t.currentMissionId},e=>{if(e.success){t.commentmodelData=e.data;for(var s=0;s<t.commentmodelData.length;s++){let e=!1;t.commentmodelVal.push(e)}}}),t.$http.post("/assistant/historicalcomment",{userCode:t.memberCode,stepId:t.currentMissionId,teamId:t.teamId},e=>{if(e.success){for(var s=0;s<e.data.length;s++)e.data[s].assistantComment=JSON.parse(e.data[s].assistantComment);t.commentHistoryList=e.data}}),t.$http.post("/assistant/misssiondetal",{missionId:t.currentMissionId,facultymatjorId:localStorage.getItem("facultyMarjorId"),projectId:localStorage.getItem("projectId")},e=>{e.success&&(t.taskInfo=e.data)})},selectTab(t){this.tabStatus=t},changeFocusStatus(t){t.isfocus=!t.isfocus},commentSubmit(t){let e=this,s={},a={};for(var o=0;o<e.questionList.length;o++){var n=parseInt(o+1),i="advice"+n.toString();s[i]=e.questionList[o].advice}for(var c=0;c<e.commentmodelVal.length;c++){i=e.commentmodelData[c].modelId;var l=0;l=!1===e.commentmodelVal[c]?0:1,a[i]=l}let r=Object.keys(a).length;0===r&&(a="");let m={outputId:e.outputId,assistantComment:JSON.stringify(s),evaluateModelResult:JSON.stringify(a),status:t,teamId:e.teamId,currentMissionId:e.currentMissionId,memberCode:e.memberCode};e.$http.post("/assistant/submitcomment",m,t=>{t.success&&e.$http.post("/assistant/historicalcomment",{userCode:e.memberCode,stepId:e.currentMissionId,teamId:e.teamId},t=>{if(t.success){for(var s=0;s<t.data.length;s++)t.data[s].assistantComment=JSON.parse(t.data[s].assistantComment);e.commentHistoryList=t.data,e.commentCursor="not-allowed",e.isCommented=!0,e.$alert("点评成功","提示",{confirmButtonText:"确定"}),e.tabStatus="commentHistory"}})})},addQuestion(){this.questionList.push({title:"",advice:"",isfocus:!1})},deleteQuestion(t){var e=this.questionList.indexOf(t);-1!==e&&this.questionList.splice(e,1)},downLoadOutPut(){let t=this;const e=c.a.service({lock:!0,text:"下载中请稍候...",spinner:"el-icon-loading",background:"rgba(f, 0, 0, 0.7)"});this.$axios({method:"post",url:"http://39.100.37.131:8085/lying-web/doproject/output/downloadFile",data:{filename:t.outputName},responseType:"blob",headers:{token:localStorage.getItem("token"),"Content-Type":"application/json; charset=UTF-8"}}).then(s=>{var a=new Blob([s.data]),o=document.createElement("a"),n=window.URL.createObjectURL(a);o.href=n,o.download=t.outputName.split("$_$")[1],document.body.appendChild(o),o.click(),document.body.removeChild(o),window.URL.revokeObjectURL(n),setTimeout(()=>{e.close()},1e3)}).catch(t=>{console.log(t),setTimeout(()=>{e.close()},1e3)})},goback(t){window.history.go(t)}}},y=C,x=(s("3bd4"),s("ee1d"),Object(g["a"])(y,o,n,!1,null,"0d336edb",null)),_=x.exports,S=(s("7378"),s("3a10"),s("49f4"),s("bc3a")),I=s.n(S),k=s("751a");a["default"].prototype.$http=k["a"],a["default"].prototype.$axios=I.a,new a["default"]({render:t=>t(_)}).$mount("#app")},d57d:function(t,e,s){},ec3a:function(t,e,s){},ee1d:function(t,e,s){"use strict";var a=s("ec3a"),o=s.n(a);o.a}});
//# sourceMappingURL=assistant-task-comment.6ccb20eb.js.map