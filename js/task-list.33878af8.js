(function(t){function e(e){for(var s,n,r=e[0],l=e[1],c=e[2],p=0,m=[];p<r.length;p++)n=r[p],i[n]&&m.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(m.length)m.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,n=1;n<a.length;n++){var l=a[n];0!==i[l]&&(s=!1)}s&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},i={"task-list":0},o=[];function n(t){return r.p+"js/"+({pdfjsWorker:"pdfjsWorker"}[t]||t)+"."+{pdfjsWorker:"ad4dcdd9"}[t]+".js"}function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(t){var e=[],a=i[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise(function(e,s){a=i[t]=[e,s]});e.push(a[2]=s);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=n(t),o=function(e){l.onerror=l.onload=null,clearTimeout(c);var a=i[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,n=new Error("Loading chunk "+t+" failed.\n("+s+": "+o+")");n.type=s,n.request=o,a[1](n)}i[t]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:l})},12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var p=0;p<l.length;p++)e(l[p]);var d=c;o.push([27,"chunk-vendors","chunk-common"]),a()})({"0615":function(t,e,a){},"1cad":function(t,e,a){t.exports=a.p+"img/video.675ef392.jpg"},"23b4":function(t,e,a){},27:function(t,e,a){t.exports=a("ad1d")},"2e6c":function(t,e,a){"use strict";var s=a("c83e"),i=a.n(s);i.a},"565f":function(t,e,a){"use strict";var s=a("0615"),i=a.n(s);i.a},ad1d:function(t,e,a){"use strict";a.r(e);var s,i=a("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:0==t.answerShow,expression:"answerShow==false"}],staticClass:"container-fluid"},[s("Header",{attrs:{img:"",school:"Go语言实战抽奖系统"}}),s("div",{staticClass:"row tap"},[s("HorizontalTap",{staticClass:"center",staticStyle:{width:"1088px"},attrs:{data:t.data2,active:0}})],1),s("div",{staticClass:"row"},[s("div",{staticClass:"center-block"},[s("div",{staticClass:"left"},[t._m(0),s("div",{staticClass:"main"},[t.stepData?s("div",{staticClass:"main-left"},[s("TeamStepList",{attrs:{data:t.stepData,"expand-id":t.currentStageId,"active-id":t.currentStepId},on:{activeItem:t.activeItemList}})],1):t._e(),s("div",{staticClass:"main-right"},[t.stepInfo&&0===t.stepInfo.category?s("div",[s("div",{staticClass:"stepInfoTitle",staticStyle:{"margin-top":"0px!important"}},[t._v("任务说明")]),s("div",{staticClass:"stepInfoContent mt-3"},[s("span",{staticStyle:{"font-family":"inherit","font-weight":"800","line-height":"1.1",color:"inherit"}},[t._v("任务名称：")]),s("span",{staticStyle:{color:"#666666"}},[t._v(t._s(t.stepInfo.stepName))])]),s("div",{staticClass:"mt-3 stepInfoContent"},[s("span",{staticStyle:{"font-family":"inherit","font-weight":"800","line-height":"1.1",color:"inherit"}},[t._v("任务描述：")]),s("span",{staticStyle:{color:"#666666"}},[t._v("\n                      "+t._s(t.stepInfo.description)+"\n                    ")])]),s("div",{staticClass:"mt-3 stepInfoContent"},[s("span",{staticStyle:{"font-family":"inherit","font-weight":"800","line-height":"1.1",color:"inherit"}},[t._v("任务目的：")]),t.stepInfo.purpose?s("span",{staticStyle:{color:"#666666"}},[t._v("\n                      "+t._s(t.stepInfo.purpose)+"\n                    ")]):s("span",{staticStyle:{color:"#666666"}},[t._v("\n                     无\n                    ")])]),s("div",{staticClass:"mt-3 stepInfoContent"},[s("span",{staticStyle:{"font-family":"inherit","font-weight":"800","line-height":"1.1",color:"inherit"}},[t._v("任务要求：")]),t.stepInfo.required?s("span",{staticStyle:{color:"#666666"}},[t._v("\n                      "+t._s(t.stepInfo.required)+"\n                    ")]):s("span",{staticStyle:{color:"#666666"}},[t._v("\n                     无\n                    ")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.stepInfo.video||t.stepInfo.templateName,expression:"stepInfo.video || stepInfo.templateName"}],staticClass:"stepInfoTitle"},[t._v("任务相关资料")]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.stepInfo.video,expression:"stepInfo.video"}],staticClass:"mt-3 stepInfoContent"},[s("span",{staticStyle:{"font-family":"inherit","font-weight":"800","line-height":"1.1",color:"inherit"}},[t._v("视频教程：")]),s("div",{staticStyle:{color:"#666666",cursor:"pointer","margin-top":"-20px","margin-left":"80px"},on:{click:function(e){return t.playVideo(t.stepInfo.video)}}},[s("img",{staticStyle:{width:"80px","border-radius":"12px"},attrs:{src:a("1cad")}})])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.stepInfo.templateName,expression:"stepInfo.templateName"}],staticClass:"mt-3 stepInfoContent"},[s("span",{staticStyle:{"font-family":"inherit","font-weight":"800","line-height":"1.1",color:"inherit"}},[t._v("文档模板：")]),t._l(t.templateName,function(e,a){return s("div",{key:a,style:0===a?"margin-left: 65px; margin-top:-20px;":"margin-left: 65px;"},[s("span",{staticClass:"ml-2",staticStyle:{color:"#6715CE",cursor:"pointer"},on:{click:function(a){return t.downloadTemplate(e)}}},[t._v(t._s(e.split("$_$")[1]))]),s("i",{staticClass:"iconfont iconxiazai",staticStyle:{color:"#6715CE","margin-left":"5px"}})])})],2),s("div",{staticClass:"stepInfoTitle"},[t._v("成果要求及上传")]),t._m(1),s("div",{staticClass:"row mt-3 stepInfoContent"},[s("span",{staticStyle:{"font-family":"inherit","font-weight":"800","line-height":"1.1",color:"inherit"}},[t._v("成果上传：")]),s("span",{staticClass:"ml-2 el-upload__tip",staticStyle:{"font-size":"14px"},attrs:{slot:"tip"},slot:"tip"},[t._v(t._s(t.fileName))]),s("el-upload",{ref:"upload",staticClass:"upload-demo",staticStyle:{float:"right"},attrs:{action:"upLoad",limit:1,"before-upload":t.beforeUpload}},[s("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("选取文件")])],1)],1),s("div",{staticClass:"mt-15 text-center",staticStyle:{"margin-top":"30px"}},[s("el-button",{directives:[{name:"show",rawName:"v-show",value:1===t.stepInfo.status,expression:"stepInfo.status === 1"}],attrs:{type:"primary"},on:{click:t.upLoad}},[t._v("提交")]),s("el-button",{directives:[{name:"show",rawName:"v-show",value:-1===t.stepInfo.status,expression:"stepInfo.status === -1"}],attrs:{type:"primary",disabled:"disabled"}},[t._v("提交")])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:2===t.stepInfo.status||3===t.stepInfo.status,expression:"stepInfo.status === 2 || stepInfo.status === 3"}],staticClass:"mt-15 text-center",staticStyle:{"margin-top":"30px"}},[s("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.seeRightAnswer(t.stepInfo.answer)}}},[t._v("查看标准答案")])],1)]):t._e(),t.stepInfo&&1===t.stepInfo.category?s("div",{staticStyle:{"text-align":"center"}},[s("div",{staticClass:"testBox"},[s("p",{staticStyle:{"text-align":"left"}},[t._v(t._s(t.stepInfo.description))]),s("p",{staticStyle:{"text-align":"left"}},[t._v(t._s(t.stepInfo.required))]),s("div",{directives:[{name:"show",rawName:"v-show",value:2===t.stepInfo.status,expression:"stepInfo.status === 2"}],staticStyle:{margin:"auto",width:"300px",height:"300px"},attrs:{id:"myChart"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:2===t.stepInfo.status,expression:"stepInfo.status === 2"}],staticStyle:{"font-size":"20px"}},[t._v("当前排名："+t._s(t.orderNum))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:1===t.stepInfo.status,expression:"stepInfo.status === 1"}],staticClass:"mt-3 text-center"},[s("el-button",{attrs:{type:"primary"},on:{click:t.answerPage}},[t._v("调查评测")])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:-1===t.stepInfo.status,expression:"stepInfo.status === -1"}],staticClass:"mt-3 text-center"},[s("el-button",{attrs:{type:"primary",disabled:"disabled"}},[t._v("暂未开始")])],1)]):t._e(),t.stepInfo&&2===t.stepInfo.category?s("div",[t._m(2),t._m(3),s("div",{staticClass:"mt-3"},[s("i",{staticClass:"iconfont iconrenwuyaoqiu mr-2"}),s("span",{staticStyle:{"font-family":"inherit","font-weight":"800","line-height":"1.1",color:"inherit"}},[t._v("任务要求：")]),s("p",{staticClass:"ml-4"},[t._v(" "+t._s(t.stepInfo.description))])]),t._m(4),s("div",{staticClass:"mt-3 text-center"},[s("el-button",{attrs:{type:"primary"}},[t._v("去编程")])],1)]):t._e()])])]),s("div",{staticClass:"right"},[s("div",{staticClass:"bar"},[s("HorizontalTap",{attrs:{data:t.data3,active:0},on:{activeItem:t.activeItem}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:"成果物点评"===t.showTapName,expression:"showTapName === '成果物点评'"}],staticClass:"main"},[t._l(t.commentData,function(e){return s("div",{directives:[{name:"show",rawName:"v-show",value:1==t.isReviewData,expression:"isReviewData==true"}],key:e.outputId,staticClass:"box",staticStyle:{"margin-top":"5px"}},[s("div",{staticClass:"doc-box"},[s("i",{directives:[{name:"show",rawName:"v-show",value:2==e.status,expression:"obj.status==2"}],staticClass:"iconfont iconwenhao iconfontForWhy"}),s("i",{directives:[{name:"show",rawName:"v-show",value:1==e.status,expression:"obj.status==1"}],staticClass:"iconfont iconyiwancheng"}),s("i",{directives:[{name:"show",rawName:"v-show",value:-1==e.status,expression:"obj.status==-1"}],staticClass:"iconfont iconweiwancheng iconfontForNo"}),s("i",{directives:[{name:"show",rawName:"v-show",value:0==e.status,expression:"obj.status  ==0"}],staticClass:"iconfont iconweiwancheng iconfontForNo",staticStyle:{cursor:"pointer"},on:{click:function(a){return t.deleteComment(e.name)}}}),s("div",{staticClass:"photo"}),s("div",{staticClass:"name"},[t._v(t._s(e.name.split("$_$")[1]))]),s("div",{staticClass:"time"},[t._v(t._s(e.uploadDate)+" ")]),s("div",{directives:[{name:"show",rawName:"v-show",value:2==e.status,expression:"obj.status==2"}],staticClass:"stateForWhy"},[t._v("需修改")]),s("div",{directives:[{name:"show",rawName:"v-show",value:1==e.status,expression:"obj.status==1"}],staticClass:"state"},[t._v("已通过")]),s("div",{directives:[{name:"show",rawName:"v-show",value:-1==e.status,expression:"obj.status==-1"}],staticClass:"stateForNo"},[t._v("未通过")]),s("div",{directives:[{name:"show",rawName:"v-show",value:0==e.status,expression:"obj.status==0"}],staticClass:"stateForNo"},[t._v("未点评")]),s("a",{directives:[{name:"show",rawName:"v-show",value:0!=e.status,expression:"obj.status!=0"}],on:{click:function(a){return t.showCommentDetailed(e.outputId)}}},[s("span",{directives:[{name:"show",rawName:"v-show",value:"REPEAT_CHECK"==e.commentCode,expression:"obj.commentCode=='REPEAT_CHECK'"}]},[t._v("文档查重")]),s("span",{directives:[{name:"show",rawName:"v-show",value:"CODE_STYLE"==e.commentCode,expression:"obj.commentCode=='CODE_STYLE'"}]},[t._v("代码规范检查")]),s("span",{directives:[{name:"show",rawName:"v-show",value:"DOC_FORMAT"==e.commentCode,expression:"obj.commentCode=='DOC_FORMAT'"}]},[t._v("文档格式检查")]),s("span",{directives:[{name:"show",rawName:"v-show",value:"ASSISTANT_COMMENT"==e.commentCode,expression:"obj.commentCode=='ASSISTANT_COMMENT'"}]},[t._v("助教点评")]),s("i",{staticClass:"el-icon-caret-bottom"})])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.commentDetailedIsShow,expression:"obj.commentDetailedIsShow"}],staticClass:"doc-detail"},[s("span",[t._v("成果物缺陷点：")]),""!=e.evaluates?s("span",[t._v("\n                    "+t._s(e.evaluates)+"\n                  ")]):s("span",[t._v("无")]),s("span",[t._v("助教点评：")]),s("span",[t._v("\n                    "+t._s(e.message)+"\n                  ")]),s("a",{directives:[{name:"show",rawName:"v-show",value:0==t.state,expression:"state==0"}],staticClass:"link-two",on:{click:t.writeRely}},[t._v("编辑回复")]),s("div",{directives:[{name:"show",rawName:"v-show",value:0==t.state,expression:"state==0"}],staticClass:"disable"},[t._v("\n                    "+t._s(e.evaluates)+"\n                  ")]),s("el-input",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticStyle:{"margin-top":"5px"},attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:t.commentContent,callback:function(e){t.commentContent=e},expression:"commentContent"}}),s("div",{directives:[{name:"show",rawName:"v-show",value:0==t.state,expression:"state==0"}],staticClass:"row footer"},[s("el-upload",{staticStyle:{width:"60%",float:"left"},attrs:{action:t.doUpload,data:t.pppss}},[s("i",{staticClass:"iconfont icontianjiawenjian"}),s("span",[t._v("重新上传文档")])]),s("el-button",{attrs:{type:"primary"},on:{click:function(a){return t.submitFont(e.outputId)}}},[t._v("提交")])],1)],1)])}),s("div",{directives:[{name:"show",rawName:"v-show",value:0==t.isReviewData,expression:"isReviewData==false"}]},[s("div",{staticClass:"noReviewDataFont"},[t._v("暂无任何点评数据")])])],2),s("div",{directives:[{name:"show",rawName:"v-show",value:"指派任务"===t.showTapName,expression:"showTapName === '指派任务'"}]},[s("div",{staticClass:"row member-list allow-click"},t._l(t.appointListData,function(e){return s("div",{key:e.userCode,staticClass:"box member-box",class:[1===e.status?"active":""],on:{click:function(a){return t.appointMember(e)}}},[1===e.status?s("i",{staticClass:"iconfont iconyiwancheng"}):t._e(),s("div",{staticClass:"name"},[t._v(t._s(e.userName))]),s("div",{staticClass:"position"},[t._v(t._s(1===e.groupLeader?"队长":"队员"))]),s("div",{staticClass:"head-portrait"})])}),0),s("div",{staticClass:"row mt20"},[s("el-button",{staticClass:"center",attrs:{type:"primary"},on:{click:t.saveAppoint}},[t._v("保存")])],1)]),s("div",{directives:[{name:"show",rawName:"v-show",value:"队友进行状态"===t.showTapName,expression:"showTapName === '队友进行状态'"}]},[s("div",{staticClass:"row member-list"},t._l(t.memberStatusData,function(e){return s("div",{key:e.userCode,staticClass:"box member-box",class:[1===e.status?"active":""]},[1===e.status?s("i",{staticClass:"iconfont iconyiwancheng"}):t._e(),s("div",{staticClass:"name"},[t._v(t._s(e.userName))]),s("div",{staticClass:"position"},[t._v(t._s(1===e.groupLeader?"队长":"队员"))]),s("div",{staticClass:"step"},[t._v(t._s(1===e.status?"已完成":"未完成"))]),s("div",{staticClass:"head-portrait"})])}),0)])])])])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:1==t.answerShow,expression:"answerShow == true"}]},[s("Header",{attrs:{img:"",school:"Go语言实战抽奖系统"}}),s("div",{staticClass:"mt-15 text-center",staticStyle:{"margin-top":"30px"}},[t.paperInfo?s("div",{staticClass:"paperTitle"},[t._v(t._s(t.paperInfo.paperName)+" "),s("p",{staticStyle:{color:"#6612cf"}},[t._v(t._s(t.h+":"+t.m+":"+t.s))])]):t._e(),t._l(t.paperInfo.problems,function(e,a){return s("div",{key:e.problemId,staticClass:"paperContent"},[s("p",{staticClass:"paperProblem"},[t._v(t._s(a+1+"."+e.problemContent))]),t._l(e.options,function(a,i){return s("div",{key:i,staticClass:"paperOptionContent"},[0===e.type?s("el-radio",{attrs:{label:i},model:{value:e.radio,callback:function(a){t.$set(e,"radio",a)},expression:"obj.radio"}},[t._v(t._s(i+". "+a))]):t._e(),1===e.type?s("el-checkbox",{attrs:{label:i},model:{value:e.radio,callback:function(a){t.$set(e,"radio",a)},expression:"obj.radio"}},[t._v(t._s(i+". "+a))]):t._e()],1)})],2)})],2),s("div",{staticStyle:{"margin-top":"90px","text-align":"center"}},[s("el-button",{attrs:{type:"primary"},on:{click:t.commitPage}},[t._v("提交")])],1)],1)])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bar"},[a("span",[t._v("开发阶段和任务")]),a("span",{staticClass:"second"},[t._v("开发任务详情")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-3 stepInfoContent"},[a("span",{staticStyle:{"font-family":"inherit","font-weight":"800","line-height":"1.1",color:"inherit"}},[t._v("成果要求：")]),a("span",{staticClass:"ml-2",staticStyle:{color:"#666666"}},[t._v("上传规格为word或zip文件，每次只能上传一个文件")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("i",{staticClass:"iconfont iconrenwumingcheng mr-2"}),a("span",{staticStyle:{"font-family":"inherit","font-weight":"800","line-height":"1.1",color:"inherit"}},[t._v("任务名称：")]),a("span",[t._v("编码与调试")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-3"},[a("i",{staticClass:"iconfont iconrenwumiaoshu mr-2"}),a("span",{staticStyle:{"font-family":"inherit","font-weight":"800","line-height":"1.1",color:"inherit"}},[t._v("任务描述：")]),a("p",{staticClass:"ml-4"},[t._v("编码人员依据《详细设计报告》的内容，遵循编码规范的要求对设计元素进行编码实现和调试")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-3"},[a("i",{staticClass:"iconfont iconshipinjiaocheng mr-2"}),a("span",{staticStyle:{"font-family":"inherit","font-weight":"800","line-height":"1.1",color:"inherit"}},[t._v("视频教程：")]),a("h5",[t._v("编程联系")]),a("ul",{staticStyle:{"list-style-type":"decimal"}},[a("li",{staticStyle:{color:"green"}},[a("span",[t._v("全局样式")]),a("i",{staticClass:"el-icon-circle-check ml-3"})]),a("li",{staticStyle:{color:"green"}},[a("span",[t._v("强调内容")]),a("i",{staticClass:"el-icon-circle-check ml-3"})]),a("li",[a("span",[t._v("无序列表、有序列表")]),a("i",{staticClass:"el-icon-circle-check ml-3"})]),a("li",[a("span",[t._v("弹出框--弹出框增加过渡动画效果")]),a("i",{staticClass:"el-icon-circle-check ml-3"})])])])}],r=a("d72b"),l=r["a"],c=(a("d433"),a("565f"),a("2877")),p=Object(c["a"])(l,o,n,!1,null,"c02bad4a",null),d=p.exports,m=(a("7378"),a("16b4"),a("346c"),a("1e3b"),a("3a10"),a("87c5"),a("0cb1"),a("751a")),u=a("bc3a"),h=a.n(u),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"pdfContent",attrs:{id:"container"}},[a("button",{staticStyle:{position:"absolute"},on:{click:t.close}},[t._v("关闭")]),a("canvas",{attrs:{id:"the-canvas"}}),t.pdfDoc?a("div",{staticClass:"foot"},[t.pageNum>1?a("button",{staticClass:"left",on:{click:t.onPrevPage}},[t._v("上一页")]):t._e(),t.pageNum<t.pdfDoc.numPages?a("button",{staticClass:"right",on:{click:t.onNextPage}},[t._v("下一页")]):t._e()]):t._e()])},f=[],w=a("9511"),g=a.n(w),_={name:"pdf",data(){return{pdfDoc:null,pageNum:1,pageRendering:!1,pageNumPending:null,scale:1}},methods:{showPDF(t){let e=this;g.a.getDocument(t).then(function(t){e.pdfDoc=t,e.renderPage(1)})},renderPage(t){this.pageRendering=!0;let e=this;this.pdfDoc.getPage(t).then(function(t){var a=t.getViewport(e.scale);let s=document.getElementById("the-canvas");s.height=a.height,s.width=a.width;var i={canvasContext:s.getContext("2d"),viewport:a},o=t.render(i);o.promise.then(function(){e.pageRendering=!1,null!==e.pageNumPending&&(this.renderPage(e.pageNumPending),e.pageNumPending=null)})})},queueRenderPage(t){this.pageRendering?this.pageNumPending=t:this.renderPage(t)},onPrevPage(){this.pageNum<=1||(this.pageNum--,this.queueRenderPage(this.pageNum))},onNextPage(){this.pageNum>=this.pdfDoc.numPages||(this.pageNum++,this.queueRenderPage(this.pageNum))},hideContent(){this.$refs.pdfContent.style.display="block"},close(){this.$refs.pdfContent.style.display="none"}}},C=_,y=(a("2e6c"),Object(c["a"])(C,v,f,!1,null,"a75f6eba",null)),b=y.exports,I={install(t,e){if(!s){const e=t.extend(b);s=(new e).$mount(),document.body.appendChild(s.$el)}t.prototype.$showPDF=function(t){s.showPDF(t)},t.prototype.$hideContent=function(){s.hideContent()}}},S=a("313e"),x=a.n(S);i["default"].prototype.$echarts=x.a,i["default"].prototype.$axios=h.a,i["default"].use(I),i["default"].prototype.$http=m["a"],new i["default"]({el:"#app",render:t=>t(d)}).$mount("#app")},c83e:function(t,e,a){},d433:function(t,e,a){"use strict";var s=a("23b4"),i=a.n(s);i.a},d72b:function(t,e,a){"use strict";(function(t){a("be4f"),a("450d");var s=a("896a"),i=a.n(s),o=a("10df"),n=a("ba6c"),r=a("8668"),l=a("2b0e");e["a"]={name:"app",components:{Header:o["a"],HorizontalTap:n["a"],TeamStepList:r["a"]},mounted(){this.initEvent(),this.initData()},data(){return{doUpload:"/api/up/file",pppss:{srid:""},winWidth:window.innerWidth,data2:[{name:"执行任务",url:""},{name:"任务单",url:"work-order.html"},{name:"日报任务",url:"daily-tasks.html"}],data3:[{name:"成果物点评"}],currentStageId:-1,currentStepId:-1,taskData:[],stepData:null,commentContent:"",isShow:!1,showTapName:"成果物点评",isReviewData:!0,state:1,appointListData:[],isTeamLeader:0,memberStatusData:[],stepInfo:null,teamId:"",message:"",evaluates:"",commentData:[],files:{},fileName:"暂未上传文件",answerShow:!1,paperInfo:{},paperId:"",starttime:"",answer:{},answerLog:"",problemidLog:"",timeLimit:0,d:"",h:"",m:"",s:"",document:"",listTotal:[],listResult:[],orderNum:"暂无排名",templateName:[]}},methods:{initEvent:function(){let e=this;e.winWidth=t("body").width(),window.onresize=function(){e.winWidth=t("body").width()}},initData:function(){this.teamId=localStorage.getItem("teamId"),""===this.teamId||"undefined"===this.teamId||null===this.teamId?window.location="school-main.html":this.loadStepListData()},loadStepListData(){let t=this;this.$http.post("/doproject/steplist",{teamid:t.teamId},e=>{if(e.success){for(let t of e.data.stages){t.iconShow=!1;let e=0;for(let a of t.steps)if(2===a.status&&e++,3===a.status||e===t.steps.length){t.iconShow=!0;break}}t.stepData=e.data.stages,t.currentStageId=e.data.currentStageId;for(let e of t.stepData)e.stageId===t.currentStageId&&(t.currentStepId=e.steps[0].stepId);this.loadStepinfo(),this.getComment()}})},loadAppointListData(){let t=this;this.$http.post("/doproject/appointstatus",{teamid:t.teamId,stepid:t.currentStepId},e=>{e.success&&(t.appointListData=e.data.status,t.isTeamLeader=e.data.teamLeader)})},loadMemberStatusData(){let t=this;this.$http.post("/doproject/memberstatus",{teamid:t.teamId,stepid:t.currentStepId},e=>{e.success&&(t.memberStatusData=e.data)})},loadStepinfo(){let t=this;this.$http.post("/doproject/stepinfo",{teamid:t.teamId,stepid:t.currentStepId},e=>{e.success&&(t.stepInfo=e.data,t.data3=[{name:"成果物点评"}],1===t.stepInfo.category&&2===t.stepInfo.status&&t.echartShow())})},getComment(){let t=this;this.$http.post("/doproject/outputlist",{teamid:t.teamId,stepid:t.currentStepId},e=>{if(null!==e.data){t.isReviewData=!0;for(let t of e.data)t.commentDetailedIsShow=!1,t.message="";t.commentData=e.data}else t.isReviewData=!1})},sizeChange(t){return this.winWidth*t/1920+"px"},clickStep(t){},writeRely(){let t=this;t.isShow=!t.isShow},showCommentDetailed(t){let e=this;for(let a of e.commentData)a.outputId===t&&(a.commentDetailedIsShow=!a.commentDetailedIsShow);this.$http.post("/doproject/assistantcommentinfo",{outputid:t},a=>{if(a.success)for(let s of e.commentData)if(s.outputId===t){s.message="",s.evaluates="";for(let t of a.data.advices)s.message+=t;for(let t of a.data.evaluates)s.evaluates+=t}})},activeItem(t,e){let a=this;a.showTapName=e,0===t&&a.getComment()},activeItemList(t,e){let a=this;a.fileName="暂未上传文件",a.currentStepId=e,this.getComment(),this.$http.post("/doproject/stepinfo",{teamid:a.teamId,stepid:e},t=>{t.success&&(this.templateName=[],-1!==t.data.templateName.indexOf(",")?this.templateName=t.data.templateName.split(","):this.templateName.push(t.data.templateName),a.stepInfo=t.data,a.data3=[{name:"成果物点评"}]),1===t.data.type&&2===t.data.status&&a.echartShow()})},appointMember(t){t.status=1},saveAppoint(){let t=this,e=[];for(let a of this.appointListData)1===a.status&&e.push(a.userCode);e.length>0&&t.$alert("任务指派后将无法修改，是否进行保存","提示",{confirmButtonText:"确定",callback:a=>{t.$http.post("/doproject/appointstep",{teamid:t.teamId,stepid:1,users:e},e=>{e.success&&t.$message("保存成功")})}})},submitFont(t){let e=this;""===e.commentContent?e.$alert("请输入需要提问的内容后再提交","提示",{confirmButtonText:"确定"}):(e.$http.post("/doproject/submitfeedback",{outputid:t,feedbacks:e.commentContent},t=>{t.success&&e.$message("保存成功")}),e.upLoad())},playVideo(t){window.open(""+t,"_blank")},beforeUpload(t){this.file=t,this.files=t;const e="doc"===t.name.split(".")[1],a="docx"===t.name.split(".")[1],s="zip"===t.name.split(".")[1],i=t.size/1024/1024<5;if(e||a||s){if(i)return this.fileName=t.name,!1;this.$message.warning("上传模板大小不能超过 5MB!")}else this.$message.warning("上传模板只能是 doc、docx、zip格式!")},upLoad(){let t=this;if("暂未上传文件"===t.fileName)t.$alert("请上传成果物后再提交","提示",{confirmButtonText:"确定"});else{var e=new FormData;e.append("file",t.file),e.append("teamid",t.teamId),e.append("stepid",t.currentStepId),this.$http.uploadFile("/doproject/output/upload",e,e=>{e.success&&(t.$message("上传成果物成功"),t.loadStepListData())})}},downloadTemplate(t){const e=i.a.service({lock:!0,text:"下载中请稍候...",spinner:"el-icon-loading",background:"rgba(f, 0, 0, 0.7)"});this.$axios({method:"post",url:"http://39.100.37.131:8085/lying-web/doproject/output/downloadtemplate",data:{filename:t},responseType:"blob",headers:{token:localStorage.getItem("token"),"Content-Type":"application/json; charset=UTF-8"}}).then(a=>{var s=new Blob([a.data]),i=document.createElement("a"),o=window.URL.createObjectURL(s);i.href=o,i.download=t.split("$_$")[1],document.body.appendChild(i),i.click(),document.body.removeChild(i),window.URL.revokeObjectURL(o),setTimeout(()=>{e.close()},1e3)}).catch(t=>{console.log(t),setTimeout(()=>{e.close()},1e3)})},seeRightAnswer(t){let e=this;null!==t?(e.$hideContent(),e.$http.post("/assistant/openpdf",{outputName:t},t=>{t.success&&(t.data=JSON.parse(t.data),e.$showPDF(t.data.fileUrl))})):e.$message("此任务无答案")},answerPage(){let t=this;t.$http.post("/doproject/evaluating/paperinfo",{teamid:t.teamId,stepid:t.currentStepId},e=>{if(e.success){for(let a of e.data.problems)0===a.type?a.radio="":1===a.type&&(a.radio=[]),l["default"].set(t.answer,a.problemId,"");t.timeLimit=1e3*e.data.timeLimit*60,this.countTime(),t.paperInfo=e.data,t.paperId=e.data.paperId}});let e=new Date(new Date).getFullYear(),a=new Date(new Date).getMonth()+1<10?"0"+(new Date(new Date).getMonth()+1):new Date(new Date).getMonth()+1,s=new Date(new Date).getDate()<10?"0"+new Date(new Date).getDate():new Date(new Date).getDate(),i=new Date(new Date).getHours()<10?"0"+new Date(new Date).getHours():new Date(new Date).getHours(),o=new Date(new Date).getMinutes()<10?"0"+new Date(new Date).getMinutes():new Date(new Date).getMinutes(),n=new Date(new Date).getSeconds()<10?"0"+new Date(new Date).getSeconds():new Date(new Date).getSeconds();t.starttime=e+"-"+a+"-"+s+" "+i+":"+o+":"+n,t.answerShow=!0},commitPage(){let t=this;for(let s of t.paperInfo.problems)if(0===s.type)t.answer[s.problemId]=s.radio;else if(1===s.type){s.radio=s.radio.sort();for(var e="",a=0;a<s.radio.length;a++)0===a?e=s.radio[a]:e+=","+s.radio[a];s.radio=e,t.answer[s.problemId]=s.radio}t.$http.post("/doproject/evaluating/submit",{teamid:t.teamId,stepid:t.currentStepId,paperid:t.paperId,starttime:t.starttime,answer:t.answer},e=>{e.success&&(t.$message("保存成功"),t.loadStepListData(),t.answerShow=!1)})},countTime:function(){this.timeLimit>=0&&(this.d=Math.floor(this.timeLimit/1e3/60/60/24),this.h=Math.floor(this.timeLimit/1e3/60/60%24),this.m=Math.floor(this.timeLimit/1e3/60%60),this.s=Math.floor(this.timeLimit/1e3%60)),0===this.timeLimit&&(this.commitPage(),this.$message("时间已到")),this.timeLimit=this.timeLimit-1e3,setTimeout(this.countTime,1e3)},drawLine(){var t=this.$echarts.init(this.document);t.setOption({title:{text:"测评结果",x:"left"},tooltip:{},radar:{name:{textStyle:{color:"#fff",backgroundColor:"#999",borderRadius:3,padding:[3,5]}},indicator:this.listTotal},series:[{name:"各个维度题目正确数",type:"radar",data:this.listResult}]})},deleteComment(t){let e=this;e.$http.post("/doproject/output/deleteOutput",{outputName:t},t=>{t.success&&e.loadStepListData()})},echartShow(){let t=this;t.$http.post("/doproject/evaluating/evaluatingresultinfo",{teamid:t.teamId,stepid:t.currentStepId},e=>{t.orderNum=e.data.order,t.listResult=e.data.list2,t.listTotal=e.data.list1,t.$nextTick(function(){t.document=document.getElementById("myChart"),t.drawLine()})})}}}}).call(this,a("1157"))}});
//# sourceMappingURL=task-list.33878af8.js.map