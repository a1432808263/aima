(function(t){function e(e){for(var a,n,c=e[0],l=e[1],r=e[2],d=0,m=[];d<c.length;d++)n=c[d],i[n]&&m.push(i[n][0]),i[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(e);while(m.length)m.shift()();return o.push.apply(o,r||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,c=1;c<s.length;c++){var l=s[c];0!==i[l]&&(a=!1)}a&&(o.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},i={"task-list":0},o=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var r=0;r<c.length;r++)e(c[r]);var p=l;o.push([22,"chunk-vendors","chunk-common"]),s()})({"0615":function(t,e,s){},22:function(t,e,s){t.exports=s("ad1d")},"565f":function(t,e,s){"use strict";var a=s("0615"),i=s.n(a);i.a},"8c88":function(t,e,s){"use strict";var a=s("f492"),i=s.n(a);i.a},ad1d:function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"container-fluid"},[s("Header",{attrs:{img:"",school:"Go语言实战抽奖系统"}}),s("div",{staticClass:"row tap"},[s("HorizontalTap",{staticClass:"center",staticStyle:{width:"1088px"},attrs:{data:t.data2,active:0}})],1),s("div",{staticClass:"row"},[s("div",{staticClass:"center-block"},[s("div",{staticClass:"left"},[t._m(0),s("div",{staticClass:"main"},[t.stepData?s("div",{staticClass:"main-left"},[s("TeamStepList",{attrs:{data:t.stepData,"expand-id":t.currentStageId,"active-id":t.currentStepId},on:{activeItem:t.activeItemList}})],1):t._e(),s("div",{staticClass:"main-right"},[t.stepInfo&&0===t.stepInfo.category?s("div",[s("div",[s("i",{staticClass:"iconfont iconrenwumingcheng mr-2"}),s("span",{staticStyle:{"font-family":"inherit","font-weight":"800","line-height":"1.1",color:"inherit"}},[t._v("任务名称：")]),s("span",{staticStyle:{color:"#666666"}},[t._v(t._s(t.stepInfo.stepName))])]),s("div",{staticClass:"mt-3"},[s("i",{staticClass:"iconfont iconrenwumiaoshu mr-2"}),s("span",{staticStyle:{"font-family":"inherit","font-weight":"800","line-height":"1.1",color:"inherit"}},[t._v("任务描述：")]),s("p",{staticClass:"ml-4",staticStyle:{color:"#666666"}},[t._v("\n                      "+t._s(t.stepInfo.description)+"\n                    ")])]),s("div",{staticClass:"mt-3"},[s("i",{staticClass:"iconfont iconrenwuyaoqiu mr-2"}),s("span",{staticStyle:{"font-family":"inherit","font-weight":"800","line-height":"1.1",color:"inherit"}},[t._v("任务要求：")]),s("p",{staticClass:"ml-4",staticStyle:{color:"#666666"}},[t._v("\n                      "+t._s(t.stepInfo.required)+"\n                    ")])]),s("div",{staticClass:"mt-3"},[s("i",{staticClass:"iconfont iconshipinjiaocheng mr-2"}),s("span",{staticStyle:{"font-family":"inherit","font-weight":"800","line-height":"1.1",color:"inherit"}},[t._v("视频教程：")]),s("span",{staticClass:"ml-2",staticStyle:{color:"#666666",cursor:"pointer"},on:{click:function(e){return t.playVideo(t.stepInfo.video)}}},[t._v(t._s(t.stepInfo.video))])]),s("div",{staticClass:"mt-3"},[s("i",{staticClass:"iconfont iconwendangmoban mr-2"}),s("span",{staticStyle:{"font-family":"inherit","font-weight":"800","line-height":"1.1",color:"inherit"}},[t._v("文档模板：")]),s("span",{staticClass:"ml-2",staticStyle:{color:"#6715CE",cursor:"pointer"},on:{click:function(e){return t.downloadTemplate(t.stepInfo.templateName)}}},[t._v(t._s(t.stepInfo.templateName))]),s("i",{staticClass:"iconfont iconxiazai",staticStyle:{color:"#6715CE"}})]),t._m(1),s("div",{staticClass:"mt-3"},[s("i",{staticClass:"iconfont iconchengguoshangchuan mr-2"}),s("span",{staticStyle:{"font-family":"inherit","font-weight":"800","line-height":"1.1",color:"inherit"}},[t._v("成果上传：")]),s("span",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("上传规格为word或zip文件，每次只能上传一个文件")]),s("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"upLoad",limit:1,"before-upload":t.beforeUpload}},[s("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("选取文件")])],1)],1),s("div",{directives:[{name:"show",rawName:"v-show",value:1!==t.stepInfo.status,expression:"stepInfo.status !== 1"}],staticClass:"complete"},[s("i",{staticClass:"iconfont iconduihao"}),-1===t.stepInfo.status?s("span",[t._v("步骤未开始")]):t._e(),0===t.stepInfo.status?s("span",[t._v("步骤未指派")]):t._e(),3===t.stepInfo.status?s("span",[t._v("步骤已截止")]):t._e(),2===t.stepInfo.status?s("span",[t._v("步骤已完成")]):t._e()]),s("div",{directives:[{name:"show",rawName:"v-show",value:1===t.stepInfo.status,expression:"stepInfo.status === 1"}],staticClass:"mt-3 text-center"},[s("el-button",{attrs:{type:"primary"},on:{click:t.upLoad}},[t._v("提交")])],1)]):t._e(),t.stepInfo&&1===t.stepInfo.category?s("div",[s("div",{staticClass:"testBox"},[t._v("\n                    "+t._s(t.stepInfo.description)+"\n                  ")]),s("div",{staticClass:"mt-3 text-center"},[s("el-button",{attrs:{type:"primary"}},[t._v("调查评测")])],1)]):t._e(),t.stepInfo&&2===t.stepInfo.category?s("div",[t._m(2),t._m(3),s("div",{staticClass:"mt-3"},[s("i",{staticClass:"iconfont iconrenwuyaoqiu mr-2"}),s("span",{staticStyle:{"font-family":"inherit","font-weight":"800","line-height":"1.1",color:"inherit"}},[t._v("任务要求：")]),s("p",{staticClass:"ml-4"},[t._v(" "+t._s(t.stepInfo.description))])]),t._m(4),s("div",{staticClass:"mt-3 text-center"},[s("el-button",{attrs:{type:"primary"}},[t._v("去编程")])],1)]):t._e()])])]),s("div",{staticClass:"right"},[s("div",{staticClass:"bar"},[s("HorizontalTap",{attrs:{data:t.data3,active:0},on:{activeItem:t.activeItem}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:"成果物点评"===t.showTapName,expression:"showTapName === '成果物点评'"}],staticClass:"main"},[t._l(t.commentData,function(e){return s("div",{directives:[{name:"show",rawName:"v-show",value:1==t.isReviewData,expression:"isReviewData==true"}],key:e.outputId,staticClass:"box"},[s("div",{staticClass:"doc-box"},[s("i",{directives:[{name:"show",rawName:"v-show",value:2==e.status,expression:"obj.status==2"}],staticClass:"iconfont iconwenhao iconfontForWhy"}),s("i",{directives:[{name:"show",rawName:"v-show",value:1==e.status,expression:"obj.status==1"}],staticClass:"iconfont iconyiwancheng"}),s("i",{directives:[{name:"show",rawName:"v-show",value:-1==e.status||0==e.status,expression:"obj.status==-1||obj.status  ==0"}],staticClass:"iconfont iconweiwancheng iconfontForNo"}),s("div",{staticClass:"photo"}),s("div",{staticClass:"name"},[t._v(t._s(e.name))]),s("div",{staticClass:"time"},[t._v(t._s(e.uploadDate)+" ")]),s("div",{directives:[{name:"show",rawName:"v-show",value:2==e.status,expression:"obj.status==2"}],staticClass:"stateForWhy"},[t._v("需修改")]),s("div",{directives:[{name:"show",rawName:"v-show",value:1==e.status,expression:"obj.status==1"}],staticClass:"state"},[t._v("已通过")]),s("div",{directives:[{name:"show",rawName:"v-show",value:-1==e.status,expression:"obj.status==-1"}],staticClass:"stateForNo"},[t._v("未通过")]),s("div",{directives:[{name:"show",rawName:"v-show",value:0==e.status,expression:"obj.status==0"}],staticClass:"stateForNo"},[t._v("未点评")]),s("a",{directives:[{name:"show",rawName:"v-show",value:0!=e.status,expression:"obj.status!=0"}],on:{click:function(s){return t.showCommentDetailed(e.outputId)}}},[s("span",{directives:[{name:"show",rawName:"v-show",value:"REPEAT_CHECK"==e.commentCode,expression:"obj.commentCode=='REPEAT_CHECK'"}]},[t._v("文档查重")]),s("span",{directives:[{name:"show",rawName:"v-show",value:"CODE_STYLE"==e.commentCode,expression:"obj.commentCode=='CODE_STYLE'"}]},[t._v("代码规范检查")]),s("span",{directives:[{name:"show",rawName:"v-show",value:"DOC_FORMAT"==e.commentCode,expression:"obj.commentCode=='DOC_FORMAT'"}]},[t._v("文档格式检查")]),s("span",{directives:[{name:"show",rawName:"v-show",value:"ASSISTANT_COMMENT"==e.commentCode,expression:"obj.commentCode=='ASSISTANT_COMMENT'"}]},[t._v("助教点评")]),s("i",{staticClass:"el-icon-caret-bottom"})])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.commentDetailedIsShow,expression:"commentDetailedIsShow"}],staticClass:"doc-detail"},[s("span",[t._v("助教点评：")]),s("span",[t._v("\n                    "+t._s(t.message)+"\n                  ")]),s("a",{directives:[{name:"show",rawName:"v-show",value:0==t.state,expression:"state==0"}],staticClass:"link-two",on:{click:t.writeRely}},[t._v("编辑回复")]),s("div",{directives:[{name:"show",rawName:"v-show",value:0==t.state,expression:"state==0"}],staticClass:"disable"},[t._v("\n                    "+t._s(t.evaluates)+"\n                  ")]),s("el-input",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticStyle:{"margin-top":"5px"},attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:t.commentContent,callback:function(e){t.commentContent=e},expression:"commentContent"}}),s("div",{directives:[{name:"show",rawName:"v-show",value:0==t.state,expression:"state==0"}],staticClass:"row footer"},[s("el-upload",{staticStyle:{width:"60%",float:"left"},attrs:{action:t.doUpload,data:t.pppss}},[s("i",{staticClass:"iconfont icontianjiawenjian"}),s("span",[t._v("重新上传文档")])]),s("el-button",{attrs:{type:"primary"},on:{click:function(s){return t.submitFont(e.outputId)}}},[t._v("提交")])],1)],1)])}),s("div",{directives:[{name:"show",rawName:"v-show",value:0==t.isReviewData,expression:"isReviewData==false"}]},[s("div",{staticClass:"noReviewData"}),s("div",{staticClass:"noReviewDataFont"},[t._v("暂无任何点评数据")])])],2),s("div",{directives:[{name:"show",rawName:"v-show",value:"指派任务"===t.showTapName,expression:"showTapName === '指派任务'"}]},[s("div",{staticClass:"row member-list allow-click"},t._l(t.appointListData,function(e){return s("div",{key:e.userCode,staticClass:"box member-box",class:[1===e.status?"active":""],on:{click:function(s){return t.appointMember(e)}}},[1===e.status?s("i",{staticClass:"iconfont iconyiwancheng"}):t._e(),s("div",{staticClass:"name"},[t._v(t._s(e.userName))]),s("div",{staticClass:"position"},[t._v(t._s(1===e.groupLeader?"队长":"队员"))]),s("div",{staticClass:"head-portrait"})])}),0),s("div",{staticClass:"row mt20"},[s("el-button",{staticClass:"center",attrs:{type:"primary"},on:{click:t.saveAppoint}},[t._v("保存")])],1)]),s("div",{directives:[{name:"show",rawName:"v-show",value:"队友进行状态"===t.showTapName,expression:"showTapName === '队友进行状态'"}]},[s("div",{staticClass:"row member-list"},t._l(t.memberStatusData,function(e){return s("div",{key:e.userCode,staticClass:"box member-box",class:[1===e.status?"active":""]},[1===e.status?s("i",{staticClass:"iconfont iconyiwancheng"}):t._e(),s("div",{staticClass:"name"},[t._v(t._s(e.userName))]),s("div",{staticClass:"position"},[t._v(t._s(1===e.groupLeader?"队长":"队员"))]),s("div",{staticClass:"step"},[t._v(t._s(1===e.status?"已完成":"未完成"))]),s("div",{staticClass:"head-portrait"})])}),0)])])])])],1)])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bar"},[s("span",[t._v("开发阶段和任务")]),s("span",{staticClass:"second"},[t._v("开发任务详情")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mt-3"},[s("i",{staticClass:"iconfont iconchengguoyaoqiu mr-2"}),s("span",{staticStyle:{"font-family":"inherit","font-weight":"800","line-height":"1.1",color:"inherit"}},[t._v("成果要求：")]),s("span",{staticClass:"ml-2",staticStyle:{color:"#666666"}},[t._v("源代码（ZIP压缩包）")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("i",{staticClass:"iconfont iconrenwumingcheng mr-2"}),s("span",{staticStyle:{"font-family":"inherit","font-weight":"800","line-height":"1.1",color:"inherit"}},[t._v("任务名称：")]),s("span",[t._v("编码与调试")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mt-3"},[s("i",{staticClass:"iconfont iconrenwumiaoshu mr-2"}),s("span",{staticStyle:{"font-family":"inherit","font-weight":"800","line-height":"1.1",color:"inherit"}},[t._v("任务描述：")]),s("p",{staticClass:"ml-4"},[t._v("编码人员依据《详细设计报告》的内容，遵循编码规范的要求对设计元素进行编码实现和调试")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mt-3"},[s("i",{staticClass:"iconfont iconshipinjiaocheng mr-2"}),s("span",{staticStyle:{"font-family":"inherit","font-weight":"800","line-height":"1.1",color:"inherit"}},[t._v("视频教程：")]),s("h5",[t._v("编程联系")]),s("ul",{staticStyle:{"list-style-type":"decimal"}},[s("li",{staticStyle:{color:"green"}},[s("span",[t._v("全局样式")]),s("i",{staticClass:"el-icon-circle-check ml-3"})]),s("li",{staticStyle:{color:"green"}},[s("span",[t._v("强调内容")]),s("i",{staticClass:"el-icon-circle-check ml-3"})]),s("li",[s("span",[t._v("无序列表、有序列表")]),s("i",{staticClass:"el-icon-circle-check ml-3"})]),s("li",[s("span",[t._v("弹出框--弹出框增加过渡动画效果")]),s("i",{staticClass:"el-icon-circle-check ml-3"})])])])}],n=s("d72b"),c=n["a"],l=(s("8c88"),s("565f"),s("2877")),r=Object(l["a"])(c,i,o,!1,null,"8fdac990",null),p=r.exports,d=(s("7378"),s("16b4"),s("346c"),s("1e3b"),s("3a10"),s("87c5"),s("0cb1"),s("751a"));a["default"].prototype.$http=d["a"],new a["default"]({render:t=>t(p)}).$mount("#app")},d72b:function(t,e,s){"use strict";(function(t){var a=s("10df"),i=s("ba6c"),o=s("8668");e["a"]={name:"app",components:{Header:a["a"],HorizontalTap:i["a"],TeamStepList:o["a"]},mounted(){this.initEvent(),this.initData()},data(){return{doUpload:"/api/up/file",pppss:{srid:""},winWidth:window.innerWidth,data2:[{name:"执行任务",url:""},{name:"任务单",url:"work-order.html"},{name:"日报任务",url:"daily-tasks.html"},{name:"竞速排名",url:""},{name:"励英社区",url:""}],data3:[{name:"成果物点评"},{name:"指派任务"},{name:"队友进行状态"}],currentStageId:-1,currentStepId:-1,taskData:[],stepData:null,commentContent:"",isShow:!1,commentDetailedIsShow:!1,showTapName:"成果物点评",isReviewData:!0,state:1,appointListData:[],isTeamLeader:0,memberStatusData:[],stepInfo:null,teamId:"",message:"",evaluates:"",commentData:[],files:{}}},methods:{initEvent:function(){let e=this;e.winWidth=t("body").width(),window.onresize=function(){e.winWidth=t("body").width()}},initData:function(){this.teamId=localStorage.getItem("teamId"),this.loadStepListData()},loadStepListData(){let t=this;this.$http.post("/doproject/steplist",{teamid:t.teamId},e=>{if(console.log(e),e.success){t.stepData=e.data.stages,t.currentStageId=e.data.currentStageId;for(let e of t.stepData)e.stageId===t.currentStageId&&(t.currentStepId=e.steps[0].stepId);console.log(t.currentStepId),this.loadStepinfo(),this.getComment()}})},loadAppointListData(){let t=this;this.$http.post("/doproject/appointstatus",{teamid:t.teamId,stepid:t.currentStepId},e=>{console.log(e),e.success&&(t.appointListData=e.data.status,t.isTeamLeader=e.data.teamLeader)})},loadMemberStatusData(){let t=this;this.$http.post("/doproject/memberstatus",{teamid:t.teamId,stepid:t.currentStepId},e=>{console.log(e),e.success&&(t.memberStatusData=e.data)})},loadStepinfo(){let t=this;console.log(t.teamId),console.log(t.currentStepId),this.$http.post("/doproject/stepinfo",{teamid:t.teamId,stepid:t.currentStepId},e=>{console.log(e),e.success&&(t.stepInfo=e.data,t.data3=[{name:"成果物点评"}])})},getComment(){let t=this;this.$http.post("/doproject/outputlist",{teamid:t.teamId,stepid:t.currentStepId},e=>{console.log(e),null!==e.data?(t.isReviewData=!0,t.commentData=e.data):t.isReviewData=!1})},sizeChange(t){return this.winWidth*t/1920+"px"},clickStep(t){console.log(t)},writeRely(){let t=this;t.isShow=!t.isShow},showCommentDetailed(t){let e=this;e.commentDetailedIsShow=!e.commentDetailedIsShow,this.$http.post("/doproject/assistantcommentinfo",{outputid:t},t=>{if(console.log(t),t.success){e.message="";for(let s of t.data.advices)e.message+=s}})},activeItem(t,e){let s=this;s.showTapName=e,0===t&&s.getComment()},activeItemList(t,e){let s=this;console.log(s.teamId),console.log(t),console.log(e),s.currentStepId=e,this.getComment(),this.$http.post("/doproject/stepinfo",{teamid:s.teamId,stepid:e},t=>{console.log(t),t.success&&(s.stepInfo=t.data,s.data3=[{name:"成果物点评"}])})},appointMember(t){t.status=1},saveAppoint(){let t=this,e=[];for(let s of this.appointListData)1===s.status&&e.push(s.userCode);e.length>0&&t.$alert("任务指派后将无法修改，是否进行保存","提示",{confirmButtonText:"确定",callback:s=>{t.$http.post("/doproject/appointstep",{teamid:t.teamId,stepid:1,users:e},e=>{console.log(e),e.success&&t.$message("保存成功")})}})},submitFont(t){let e=this;""===e.commentContent?e.$alert("请输入需要提问的内容后再提交","提示",{confirmButtonText:"确定"}):(e.$http.post("/doproject/submitfeedback",{outputid:t,feedbacks:e.commentContent},t=>{console.log(t),t.success&&e.$message("保存成功")}),e.upLoad())},playVideo(t){window.open("video-player.html?video="+t,"video-player")},beforeUpload(t){this.file=t,this.files=t;const e="doc"===t.name.split(".")[1],s="docx"===t.name.split(".")[1],a="zip"===t.name.split(".")[1],i=t.size/1024/1024<5;if(e||s||a){if(i)return this.fileName=t.name,!1;this.$message.warning("上传模板大小不能超过 5MB!")}else this.$message.warning("上传模板只能是 doc、docx、zip格式!")},upLoad(){let t=this;console.log(t.file),console.log({teamid:t.teamId,stepid:t.currentStepId,file:t.file});var e=new FormData;e.append("file",t.file),e.append("teamid",t.teamId),e.append("stepid",t.currentStepId),console.log(e),this.$http.uploadFile("/doproject/output/upload",e,e=>{console.log(e),e.success&&t.$message("上传成果物成功")})},downloadTemplate(t){this.$http.post("/doproject/output/downloadtemplate",{filename:t},t=>{console.log(t),t.success&&console.log(t.data)})}}}}).call(this,s("1157"))},f492:function(t,e,s){}});
//# sourceMappingURL=task-list.cf9bcceb.js.map