(function(t){function e(e){for(var s,o,l=e[0],r=e[1],c=e[2],d=0,m=[];d<l.length;d++)o=l[d],i[o]&&m.push(i[o][0]),i[o]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);p&&p(e);while(m.length)m.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var r=a[o];0!==i[r]&&(s=!1)}s&&(n.splice(e--,1),t=l(l.s=a[0]))}return t}var s={},i={"task-list":0},n=[];function o(t){return l.p+"js/"+({pdfjsWorker:"pdfjsWorker"}[t]||t)+"."+{pdfjsWorker:"ad4dcdd9"}[t]+".js"}function l(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a=i[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise(function(e,s){a=i[t]=[e,s]});e.push(a[2]=s);var n,r=document.createElement("script");r.charset="utf-8",r.timeout=120,l.nc&&r.setAttribute("nonce",l.nc),r.src=o(t),n=function(e){r.onerror=r.onload=null,clearTimeout(c);var a=i[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+s+": "+n+")");o.type=s,o.request=n,a[1](o)}i[t]=void 0}};var c=setTimeout(function(){n({type:"timeout",target:r})},12e4);r.onerror=r.onload=n,document.head.appendChild(r)}return Promise.all(e)},l.m=t,l.c=s,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)l.d(a,s,function(e){return t[e]}.bind(null,s));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var p=c;n.push([31,"chunk-vendors","chunk-common"]),a()})({"0615":function(t,e,a){},"1fde":function(t,e,a){t.exports=a.p+"img/banner1.da986a96.png"},"2e6c":function(t,e,a){"use strict";var s=a("c83e"),i=a.n(s);i.a},31:function(t,e,a){t.exports=a("ad1d")},"4db7":function(t,e,a){"use strict";var s=a("d785"),i=a.n(s);i.a},"565f":function(t,e,a){"use strict";var s=a("0615"),i=a.n(s);i.a},"78ec":function(t,e,a){t.exports=a.p+"img/top.71eaa15c.jpg"},"888e":function(t,e,a){},ad1d:function(t,e,a){"use strict";a.r(e);var s,i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"background-color":"#f8f8f8"},attrs:{id:"app"}},[a("div",{staticClass:"container-fluid",staticStyle:{padding:"0px 0px 0px 0px"}},[a("Header",{attrs:{img:"",school:"Go语言实战抽奖系统"}}),a("div",{staticClass:"tap"},[a("HorizontalTap",{staticClass:"center",staticStyle:{"padding-left":"100px"},attrs:{data:t.data2,active:0}})],1)],1),a("div",{staticClass:"container1 col-md-offset-1 col-md-2",staticStyle:{"margin-top":"40px"}},[a("div",{staticClass:"fontStep"},[t._v("开发阶段和任务")]),a("transition",{attrs:{name:"fade"}},[t.show?a("TeamStepList",{attrs:{data:t.stepData,"expand-id":t.currentStageId,"active-id":t.currentStepId},on:{activeItem:t.activeItemList}}):t._e()],1)],1),a("div",{staticClass:"container1 col-md-8",staticStyle:{"margin-top":"40px","margin-left":"15px","margin-right":"15px"}},[a("div",{staticStyle:{height:"300px"}},[a("div",{staticClass:"container-fluid"},[t._m(0),t.stepInfo&&0===t.stepInfo.category?a("div",{staticClass:"left col-lg-5",staticStyle:{width:"50%"}},[a("p",{staticClass:"xmname"},[t._v(" 行业调查问卷管理系统")]),a("div",{staticStyle:{border:"1px dashed rgba(182, 195, 214, .6)","min-height":"250px"}},[a("div",{staticClass:"stepInfoContent",staticStyle:{"margin-top":"10px"}},[t._m(1),a("span",{directives:[{name:"show",rawName:"v-show",value:t.stepInfo.description,expression:"stepInfo.description"}],staticStyle:{color:"#666666"}},[t._v("\n              "+t._s(t.stepInfo.description)+"\n            ")])]),a("div",{staticClass:"stepInfoContent"},[t._m(2),a("span",{directives:[{name:"show",rawName:"v-show",value:t.stepInfo.purpose,expression:"stepInfo.purpose"}],staticStyle:{color:"#666666"}},[t._v("\n              "+t._s(t.stepInfo.purpose)+"\n            ")])]),a("div",{staticClass:"stepInfoContent"},[t._m(3),a("span",{directives:[{name:"show",rawName:"v-show",value:t.stepInfo.required,expression:"stepInfo.required"}],staticStyle:{color:"#666666"}},[t._v("\n              "+t._s(t.stepInfo.required)+"\n                "),a("span",{directives:[{name:"show",rawName:"v-show",value:""!==t.templateName[0],expression:"templateName[0]!==''"}]},[t._v("请根据\n                  "),t._l(t.templateName,function(e,s){return a("a",{key:s,staticClass:"ml-2",staticStyle:{color:"#6715CE",cursor:"pointer"},on:{click:function(a){return t.downloadTemplate(e)}}},[t._v(t._s(e.split("$_$")[1]))])}),t._v("上传成果物\n                ")],2)])])])]):t._e(),t.stepInfo&&1===t.stepInfo.category?a("div",{staticClass:"left col-lg-5",staticStyle:{width:"50%","text-align":"center"}},[a("div",{staticClass:"testBox"},[a("p",{staticStyle:{"text-align":"left"}},[t._v(t._s(t.stepInfo.description))]),a("p",{staticStyle:{"text-align":"left"}},[t._v(t._s(t.stepInfo.required))]),a("div",{directives:[{name:"show",rawName:"v-show",value:2===t.stepInfo.status,expression:"stepInfo.status === 2"}],staticStyle:{margin:"auto",width:"300px",height:"300px"},attrs:{id:"myChart"}}),a("span",{directives:[{name:"show",rawName:"v-show",value:2===t.stepInfo.status,expression:"stepInfo.status === 2"}],staticStyle:{"font-size":"20px"}},[t._v("当前排名："+t._s(t.orderNum))])]),a("div",{directives:[{name:"show",rawName:"v-show",value:1===t.stepInfo.status,expression:"stepInfo.status === 1"}],staticClass:"mt-3 text-center"},[a("el-button",{attrs:{type:"primary"},on:{click:t.answerPage}},[t._v("调查评测")])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:-1===t.stepInfo.status,expression:"stepInfo.status === -1"}],staticClass:"mt-3 text-center"},[a("el-button",{attrs:{type:"primary",disabled:"disabled"}},[t._v("暂未开始")])],1)]):t._e(),t.stepInfo&&2===t.stepInfo.category?a("div",{staticClass:"left col-lg-5",staticStyle:{width:"50%"}},[t._m(4),t._m(5),a("div",{staticClass:"mt-3"},[a("i",{staticClass:"iconfont iconrenwuyaoqiu mr-2"}),a("span",{staticStyle:{"font-family":"inherit","font-weight":"800","line-height":"1.1",color:"inherit"}},[t._v("任务要求：")]),a("p",{staticClass:"ml-4"},[t._v(" "+t._s(t.stepInfo.description))])]),t._m(6),a("div",{staticClass:"mt-3 text-center"},[a("el-button",{attrs:{type:"primary"}},[t._v("去编程")])],1)]):t._e(),t._m(7),a("div",{staticClass:"left col-lg-1 col-sm-1 col-md-1",staticStyle:{width:"10%","text-align":"center","margin-top":"115px"}},[a("a",{staticStyle:{"font-size":"16px",color:"red"},attrs:{title:"联系助教",href:t.href,target:"_blank",SRC:"http://wpa.qq.com/pa?p=1:303238703:6",alt:"有事Q我"}},[a("i",{staticClass:"iconfont iconzaixiankefu mr-2"}),t._v("联系助教")])])])])]),a("div",{staticClass:"container1",class:!0===t.showEditor?"col-md-8":"col-md-5",staticStyle:{"margin-left":"15px","margin-right":"5px"}},[a("div",{staticStyle:{height:"600px"}},[a("div",{staticClass:"container-fluid box"},[t._m(8),t.stepInfo?a("div",{staticClass:"commentAll"},[a("div",{directives:[{name:"show",rawName:"v-show",value:1===t.stepInfo.status,expression:"stepInfo.status === 1"}],staticClass:"reviewArea clearfix",style:0!==t.fileList.length?"height:0px":""},[a("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-change":t.handleChange,limit:1,"before-remove":t.beforeRemove,"before-upload":t.beforeAvatarUpload,"on-exceed":t.handleExceed,"file-list":t.fileList}},[a("el-button",{staticStyle:{float:"right","margin-right":"-610px","margin-top":"-50px"},attrs:{disabled:0!==t.fileList.length,size:"small",type:"primary"}},[t._v("选择文件\n                ")])],1),0!==t.fileList.length?a("a",{staticClass:"plBtn",on:{click:t.upLoad}},[t._v("上传成果物")]):t._e()],1),a("div",{directives:[{name:"show",rawName:"v-show",value:2===t.stepInfo.status||3===t.stepInfo.status,expression:"stepInfo.status === 2 || stepInfo.status === 3"}],staticClass:"mt-15 xzwj"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.seeRightAnswer(t.stepInfo.answer)}}},[t._v("查看优秀答案")])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:-1===t.stepInfo.status,expression:"stepInfo.status === -1"}],staticClass:"mt-15 xzwj"},[a("el-button",{attrs:{type:"primary",disabled:"disabled"}},[t._v("阶段未开始")])],1),a("div",{staticClass:"comment-show"},[a("div",{staticClass:"comment-show-con clearfix"},[a("div",{staticClass:"comment-show-con-img pull-left"}),t._l(t.commentData,function(e){return a("div",{directives:[{name:"show",rawName:"v-show",value:1==t.isReviewData,expression:"isReviewData==true"}],key:e.outputId,staticClass:"comment-show-con-list pull-left clearfix"},[a("div",{staticClass:"commentItem",staticStyle:{overflow:"auto","overflow-x":"hidden",height:"500px"}},[a("div",{staticClass:"pl-text clearfix",staticStyle:{"padding-top":"10px"}},[a("span",{staticClass:"my-pl-con",staticStyle:{"font-size":"16px",color:"#6612CF"}},[t._v(" 上传成果物名称: ")]),a("a",{staticClass:"comment-size-name",staticStyle:{"font-size":"16px"}},[t._v(t._s(e.name.split("$_$")[1]))]),a("span",{staticClass:"date-dz-left pull-right comment-time"},[t._v(t._s(e.uploadDate))])]),t._m(9,!0),a("div",{directives:[{name:"show",rawName:"v-show",value:0!==e.status,expression:"obj.status!==0"}],staticClass:"hf-list-con"},[t._m(10,!0),t._m(11,!0),t._m(12,!0)]),a("div",{staticClass:"pl-text clearfix",staticStyle:{"padding-top":"10px"}},[a("span",{staticClass:"my-pl-con",staticStyle:{"font-size":"16px",color:"#6612CF"}},[t._v(" 上传成果物名称: ")]),a("a",{staticClass:"comment-size-name",staticStyle:{"font-size":"16px"}},[t._v(t._s(e.name.split("$_$")[1]))]),a("span",{staticClass:"date-dz-left pull-right comment-time"},[t._v(t._s(e.uploadDate))])]),t._m(13,!0),a("div",{directives:[{name:"show",rawName:"v-show",value:0!==e.status,expression:"obj.status!==0"}],staticClass:"hf-list-con"},[t._m(14,!0),t._m(15,!0),t._m(16,!0)]),a("div",{staticClass:"pl-text clearfix",staticStyle:{"padding-top":"10px"}},[a("span",{staticClass:"my-pl-con",staticStyle:{"font-size":"16px",color:"#6612CF"}},[t._v(" 上传成果物名称: ")]),a("a",{staticClass:"comment-size-name",staticStyle:{"font-size":"16px"}},[t._v(t._s(e.name.split("$_$")[1]))]),a("span",{staticClass:"date-dz-left pull-right comment-time"},[t._v(t._s(e.uploadDate))])]),t._m(17,!0),a("div",{directives:[{name:"show",rawName:"v-show",value:0!==e.status,expression:"obj.status!==0"}],staticClass:"hf-list-con"},[t._m(18,!0),t._m(19,!0),t._m(20,!0)])])])}),a("div",{directives:[{name:"show",rawName:"v-show",value:0===t.commentData.length,expression:"commentData.length === 0"}],staticStyle:{"text-align":"center"}},[a("span",[t._v("暂无上传的成果物")])])],2)])]):t._e()])])]),a("div",{staticClass:"container1",class:!0===t.showEditor?"col-md-10 col-md-offset-1":"col-md-3",style:!0===t.showEditor?"":"margin-left: 5px",attrs:{id:"commentAdd"}},[a("div",{staticStyle:{"min-height":"600px"}},[a("div",{staticClass:"container-fluid"},[a("h4",{staticClass:"xm-left-column-label"},[a("span"),t._v("问答&讨论"),a("i",{class:!0===t.showEditor?"el-icon-remove":"el-icon-circle-plus",staticStyle:{"margin-left":"20px",color:"#6612cf"},on:{click:t.showEditorComment}})]),a("a",{staticStyle:{"font-size":"14px",color:"rgb(102, 18, 207)","margin-top":"-35px",float:"right"}},[t._v("查看项目的更多评论！")]),a("div",{staticClass:"commentAll",staticStyle:{margin:"10px",padding:"10px"}},[0==t.comment.length?a("p",[t._v("暂无评论，我来发表第一篇评论！")]):a("div",{staticClass:"commentContent"},t._l(t.comment,function(e,s){return a("div",{key:s,staticClass:"comment"},[a("b",[t._v(t._s(e.name)),a("span",[t._v(t._s(e.time))])]),a("p",{on:{click:function(a){return t.changeCommenter(e.name,s)}}},[t._v(t._s(e.content))]),e.reply.length>0?a("div",t._l(e.reply,function(e,i){return a("div",{key:i,staticClass:"reply"},[a("b",[t._v(t._s(e.responder)+"  回复  "+t._s(e.reviewers)),a("span",[t._v(t._s(e.time))])]),a("p",{on:{click:function(a){return t.changeCommenter(e.responder,s)}}},[t._v(t._s(e.content))])])}),0):t._e()])}),0)]),a("div",{staticStyle:{"text-align":"right"}},[a("textarea",{directives:[{name:"show",rawName:"v-show",value:!t.showEditor,expression:"!showEditor"},{name:"model",rawName:"v-model",value:t.commentAddData,expression:"commentAddData"}],staticClass:"content comment-input",attrs:{placeholder:"请输入要发表的内容"},domProps:{value:t.commentAddData},on:{input:function(e){e.target.composing||(t.commentAddData=e.target.value)}}}),a("Editor",{directives:[{name:"show",rawName:"v-show",value:t.showEditor,expression:"showEditor"}],model:{value:t.article.content,callback:function(e){t.$set(t.article,"content",e)},expression:"article.content"}}),a("el-button",{style:!0===t.showEditor?"margin-top: 65px":"margin-top: 5px",attrs:{type:"primary"},on:{click:t.addCommentArea}},[t._v("发表")])],1)])])])])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"left col-lg-5",staticStyle:{width:"40%"}},[s("img",{staticStyle:{height:"300px",width:"100%"},attrs:{src:a("1fde")}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h4",{staticClass:"xm-left-column-label"},[a("span"),t._v("任务描述：")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h4",{staticClass:"xm-left-column-label"},[a("span"),t._v("任务目的：")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h4",{staticClass:"xm-left-column-label"},[a("span"),t._v("任务要求：")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("i",{staticClass:"iconfont iconrenwumingcheng mr-2"}),a("span",{staticStyle:{"font-family":"inherit","font-weight":"800","line-height":"1.1",color:"inherit"}},[t._v("任务名称：")]),a("span",[t._v("编码与调试")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-3"},[a("i",{staticClass:"iconfont iconrenwumiaoshu mr-2"}),a("span",{staticStyle:{"font-family":"inherit","font-weight":"800","line-height":"1.1",color:"inherit"}},[t._v("任务描述：")]),a("p",{staticClass:"ml-4"},[t._v("编码人员依据《详细设计报告》的内容，遵循编码规范的要求对设计元素进行编码实现和调试")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-3"},[a("i",{staticClass:"iconfont iconshipinjiaocheng mr-2"}),a("span",{staticStyle:{"font-family":"inherit","font-weight":"800","line-height":"1.1",color:"inherit"}},[t._v("视频教程：")]),a("h5",[t._v("编程联系")]),a("ul",{staticStyle:{"list-style-type":"decimal"}},[a("li",{staticStyle:{color:"green"}},[a("span",[t._v("全局样式")]),a("i",{staticClass:"el-icon-circle-check ml-3"})]),a("li",{staticStyle:{color:"green"}},[a("span",[t._v("强调内容")]),a("i",{staticClass:"el-icon-circle-check ml-3"})]),a("li",[a("span",[t._v("无序列表、有序列表")]),a("i",{staticClass:"el-icon-circle-check ml-3"})]),a("li",[a("span",[t._v("弹出框--弹出框增加过渡动画效果")]),a("i",{staticClass:"el-icon-circle-check ml-3"})])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"left col-lg-1 col-sm-1 col-md-1",staticStyle:{width:"10%","text-align":"center"}},[s("img",{staticStyle:{height:"60px",width:"60px"},attrs:{src:a("78ec")}}),s("p",{staticStyle:{"font-size":"40px",color:"#95aac9"}},[t._v("1")]),s("p",{staticStyle:{"font-size":"16px",color:"#6715CE"}},[t._v("已击败59人")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h4",{staticClass:"xm-left-column-label"},[a("span"),t._v("成果物及点评")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"date-dz"},[a("div",{staticClass:"date-dz-right pull-right comment-pl-block"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"all-pl-con"},[a("div",{staticClass:"pl-text hfpl-text clearfix"},[a("a",{staticClass:"comment-size-name",attrs:{href:"#"}},[t._v(" 系统点评 : ")]),a("span",{staticClass:"my-pl-con"},[t._v("自动化测试")]),a("a",{staticClass:"date-dz-pl pl-hf hf-con-block pull-right",staticStyle:{color:"#fe0000"}},[t._v("未通过")])]),a("div",{staticClass:"date-dz"},[a("span",{staticClass:"date-dz-left pull-left comment-time"},[t._v("1.XXXXXXXX")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"all-pl-con"},[a("div",{staticClass:"pl-text hfpl-text clearfix"},[a("a",{staticClass:"comment-size-name",attrs:{href:"#"}},[t._v(" 系统点评 : ")]),a("span",{staticClass:"my-pl-con"},[t._v("查重")]),a("a",{staticClass:"date-dz-pl pl-hf hf-con-block pull-right",staticStyle:{color:"#2f904d"}},[t._v("已通过")])]),a("div",{staticClass:"date-dz"},[a("span",{staticClass:"date-dz-left pull-left comment-time"},[t._v("1.XXXXXXXX")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"all-pl-con"},[a("div",{staticClass:"pl-text hfpl-text clearfix"},[a("a",{staticClass:"comment-size-name",attrs:{href:"#"}},[t._v(" 助教点评 : ")]),a("a",{staticClass:"date-dz-pl pl-hf hf-con-block pull-right",staticStyle:{color:"#2f904d"}},[t._v("已通过")])]),a("div",{staticClass:"date-dz"},[a("span",{staticClass:"date-dz-left pull-left comment-time"},[t._v("1.XXXXXXXX")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"date-dz"},[a("div",{staticClass:"date-dz-right pull-right comment-pl-block"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"all-pl-con"},[a("div",{staticClass:"pl-text hfpl-text clearfix"},[a("a",{staticClass:"comment-size-name",attrs:{href:"#"}},[t._v(" 系统点评 : ")]),a("span",{staticClass:"my-pl-con"},[t._v("自动化测试")]),a("a",{staticClass:"date-dz-pl pl-hf hf-con-block pull-right",staticStyle:{color:"#fe0000"}},[t._v("未通过")])]),a("div",{staticClass:"date-dz"},[a("span",{staticClass:"date-dz-left pull-left comment-time"},[t._v("1.XXXXXXXX")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"all-pl-con"},[a("div",{staticClass:"pl-text hfpl-text clearfix"},[a("a",{staticClass:"comment-size-name",attrs:{href:"#"}},[t._v(" 系统点评 : ")]),a("span",{staticClass:"my-pl-con"},[t._v("查重")]),a("a",{staticClass:"date-dz-pl pl-hf hf-con-block pull-right",staticStyle:{color:"#2f904d"}},[t._v("已通过")])]),a("div",{staticClass:"date-dz"},[a("span",{staticClass:"date-dz-left pull-left comment-time"},[t._v("1.XXXXXXXX")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"all-pl-con"},[a("div",{staticClass:"pl-text hfpl-text clearfix"},[a("a",{staticClass:"comment-size-name",attrs:{href:"#"}},[t._v(" 助教点评 : ")]),a("a",{staticClass:"date-dz-pl pl-hf hf-con-block pull-right",staticStyle:{color:"#2f904d"}},[t._v("已通过")])]),a("div",{staticClass:"date-dz"},[a("span",{staticClass:"date-dz-left pull-left comment-time"},[t._v("1.XXXXXXXX")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"date-dz"},[a("div",{staticClass:"date-dz-right pull-right comment-pl-block"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"all-pl-con"},[a("div",{staticClass:"pl-text hfpl-text clearfix"},[a("a",{staticClass:"comment-size-name",attrs:{href:"#"}},[t._v(" 系统点评 : ")]),a("span",{staticClass:"my-pl-con"},[t._v("自动化测试")]),a("a",{staticClass:"date-dz-pl pl-hf hf-con-block pull-right",staticStyle:{color:"#fe0000"}},[t._v("未通过")])]),a("div",{staticClass:"date-dz"},[a("span",{staticClass:"date-dz-left pull-left comment-time"},[t._v("1.XXXXXXXX")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"all-pl-con"},[a("div",{staticClass:"pl-text hfpl-text clearfix"},[a("a",{staticClass:"comment-size-name",attrs:{href:"#"}},[t._v(" 系统点评 : ")]),a("span",{staticClass:"my-pl-con"},[t._v("查重")]),a("a",{staticClass:"date-dz-pl pl-hf hf-con-block pull-right",staticStyle:{color:"#2f904d"}},[t._v("已通过")])]),a("div",{staticClass:"date-dz"},[a("span",{staticClass:"date-dz-left pull-left comment-time"},[t._v("1.XXXXXXXX")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"all-pl-con"},[a("div",{staticClass:"pl-text hfpl-text clearfix"},[a("a",{staticClass:"comment-size-name",attrs:{href:"#"}},[t._v(" 助教点评 : ")]),a("a",{staticClass:"date-dz-pl pl-hf hf-con-block pull-right",staticStyle:{color:"#2f904d"}},[t._v("已通过")])]),a("div",{staticClass:"date-dz"},[a("span",{staticClass:"date-dz-left pull-left comment-time"},[t._v("1.XXXXXXXX")])])])}],l=a("d72b"),r=l["a"],c=(a("b4ea"),a("565f"),a("b6e4"),a("2877")),d=Object(c["a"])(r,n,o,!1,null,"5cf041e4",null),p=d.exports,m=(a("7378"),a("16b4"),a("346c"),a("1e3b"),a("3a10"),a("87c5"),a("0cb1"),a("751a")),u=a("bc3a"),h=a.n(u),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"pdfContent",attrs:{id:"container"}},[a("button",{staticStyle:{position:"absolute"},on:{click:t.close}},[t._v("关闭")]),a("canvas",{attrs:{id:"the-canvas"}}),t.pdfDoc?a("div",{staticClass:"foot"},[t.pageNum>1?a("button",{staticClass:"left",on:{click:t.onPrevPage}},[t._v("上一页")]):t._e(),t.pageNum<t.pdfDoc.numPages?a("button",{staticClass:"right",on:{click:t.onNextPage}},[t._v("下一页")]):t._e()]):t._e()])},v=[],g=a("9511"),w=a.n(g),_={name:"pdf",data(){return{pdfDoc:null,pageNum:1,pageRendering:!1,pageNumPending:null,scale:1}},methods:{showPDF(t){let e=this;w.a.getDocument(t).then(function(t){e.pdfDoc=t,e.renderPage(1)})},renderPage(t){this.pageRendering=!0;let e=this;this.pdfDoc.getPage(t).then(function(t){var a=t.getViewport(e.scale);let s=document.getElementById("the-canvas");s.height=a.height,s.width=a.width;var i={canvasContext:s.getContext("2d"),viewport:a},n=t.render(i);n.promise.then(function(){e.pageRendering=!1,null!==e.pageNumPending&&(this.renderPage(e.pageNumPending),e.pageNumPending=null)})})},queueRenderPage(t){this.pageRendering?this.pageNumPending=t:this.renderPage(t)},onPrevPage(){this.pageNum<=1||(this.pageNum--,this.queueRenderPage(this.pageNum))},onNextPage(){this.pageNum>=this.pdfDoc.numPages||(this.pageNum++,this.queueRenderPage(this.pageNum))},hideContent(){this.$refs.pdfContent.style.display="block"},close(){this.$refs.pdfContent.style.display="none"}}},C=_,y=(a("2e6c"),Object(c["a"])(C,f,v,!1,null,"a75f6eba",null)),x=y.exports,b={install(t,e){if(!s){const e=t.extend(x);s=(new e).$mount(),document.body.appendChild(s.$el)}t.prototype.$showPDF=function(t){s.showPDF(t)},t.prototype.$hideContent=function(){s.hideContent()}}},S=a("313e"),I=a.n(S);i["default"].prototype.$echarts=I.a,i["default"].prototype.$axios=h.a,i["default"].use(b),i["default"].prototype.$http=m["a"],new i["default"]({el:"#app",render:t=>t(p)}).$mount("#app")},b4ea:function(t,e,a){"use strict";var s=a("fc03"),i=a.n(s);i.a},b6e4:function(t,e,a){"use strict";var s=a("888e"),i=a.n(s);i.a},c83e:function(t,e,a){},d72b:function(t,e,a){"use strict";(function(t){a("be4f"),a("450d");var s=a("896a"),i=a.n(s),n=a("10df"),o=a("ba6c"),l=a("8668"),r=a("e112"),c=a("2b0e");e["a"]={name:"app",components:{Header:n["a"],HorizontalTap:o["a"],Editor:r["a"],TeamStepList:l["a"]},mounted(){this.initEvent(),this.initData()},data(){return{doUpload:"/api/up/file",pppss:{srid:""},winWidth:window.innerWidth,data2:[{name:"执行任务",url:"",type:"_self"},{name:"任务单",url:"work-order.html",type:"_self"},{name:"日报任务",url:"daily-tasks.html",type:"_self"},{name:"相关资料",url:"learning-library.html",type:"_self"},{name:"成长轨迹",url:"growth-locus.html",type:"_self"}],data3:[{name:"成果物点评"}],currentStageId:-1,currentStepId:-1,taskData:[],stepData:null,commentContent:"",isShow:!1,showTapName:"成果物点评",isReviewData:!0,state:1,appointListData:[],isTeamLeader:0,memberStatusData:[],stepInfo:null,teamId:"",message:"",evaluates:"",commentData:[],files:{},fileName:"暂未上传文件",answerShow:!1,paperInfo:{},paperId:"",starttime:"",answer:{},answerLog:"",problemidLog:"",timeLimit:0,d:"",h:"",m:"",s:"",document:"",listTotal:[],listResult:[],orderNum:"暂无排名",templateName:[],show:!0,uploadprogress:0,contEnclosure:{},fileList:[],comment:[{name:"有毒的黄同学",time:"2016-08-17",content:"好,讲得非常好，good",reply:[{responder:"有毒的黄同学",reviewers:"傲娇的",time:"2016-09-05",content:"你说得对"},{responder:"傲娇的",reviewers:"有毒的黄同学",time:"2016-09-05",content:"很强"}]},{name:"有毒的黄同学",time:"2016-08-17",content:"好,讲得非常好，good",reply:[{responder:"有毒的黄同学",reviewers:"傲娇的",time:"2016-09-05",content:"你说得对"},{responder:"傲娇的",reviewers:"有毒的黄同学",time:"2016-09-05",content:"很强"}]},{name:"Freedom小黄",time:"2016-08-17",content:"好,讲得非常好，good",reply:[]}],commentAddData:"",article:{content:""},showEditor:!1,href:""}},methods:{initEvent:function(){let e=this;e.winWidth=t("body").width(),window.onresize=function(){e.winWidth=t("body").width()}},initData:function(){this.teamId=localStorage.getItem("teamId"),""===this.teamId||"undefined"===this.teamId||null===this.teamId?window.location="school-main.html":this.loadStepListData()},loadStepListData(){let t=this;this.$http.post("/doproject/steplist",{teamid:t.teamId},e=>{if(e.success){console.log(e),e.data.assistantQQ&&(t.href="tencent://message/?Menu=yes&uin="+e.data.assistantQQ+"&Site=1111&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45");for(let t of e.data.stages){t.iconShow=!1;let e=0;for(let a of t.steps)if(2===a.status&&e++,3===a.status||e===t.steps.length){t.iconShow=!0;break}}t.stepData=e.data.stages,t.currentStageId=e.data.currentStageId;for(let e of t.stepData)e.stageId===t.currentStageId&&(t.currentStepId=e.steps[0].stepId);this.loadStepinfo(),this.getComment()}})},loadAppointListData(){let t=this;this.$http.post("/doproject/appointstatus",{teamid:t.teamId,stepid:t.currentStepId},e=>{e.success&&(t.appointListData=e.data.status,t.isTeamLeader=e.data.teamLeader)})},loadMemberStatusData(){let t=this;this.$http.post("/doproject/memberstatus",{teamid:t.teamId,stepid:t.currentStepId},e=>{e.success&&(t.memberStatusData=e.data)})},loadStepinfo(){let t=this;this.$http.post("/doproject/stepinfo",{teamid:t.teamId,stepid:t.currentStepId},e=>{e.success&&(t.stepInfo=e.data,t.data3=[{name:"成果物点评"}],this.templateName=[],-1!==e.data.templateName.indexOf(",")?this.templateName=e.data.templateName.split(","):this.templateName.push(e.data.templateName),1===t.stepInfo.category&&2===t.stepInfo.status&&t.echartShow())})},getComment(){let t=this;this.$http.post("/doproject/outputlist",{teamid:t.teamId,stepid:t.currentStepId},e=>{if(null!==e.data){t.isReviewData=!0;for(let t of e.data)t.commentDetailedIsShow=!1,t.message="";t.commentData=e.data}else t.isReviewData=!1,t.commentData=[];console.log(t.commentData)})},sizeChange(t){return this.winWidth*t/1920+"px"},clickStep(t){},writeRely(){let t=this;t.isShow=!t.isShow},showCommentDetailed(t){let e=this;for(let a of e.commentData)a.outputId===t&&(a.commentDetailedIsShow=!a.commentDetailedIsShow);this.$http.post("/doproject/assistantcommentinfo",{outputid:t},a=>{if(a.success)for(let s of e.commentData)if(s.outputId===t){s.message="",s.evaluates="";for(let t of a.data.advices)s.message+=t;for(let t of a.data.evaluates)s.evaluates+=t}})},activeItem(t,e){let a=this;a.showTapName=e,0===t&&a.getComment()},activeItemList(t,e){let a=this;a.fileName="暂未上传文件",a.currentStepId=e,this.getComment(),this.$http.post("/doproject/stepinfo",{teamid:a.teamId,stepid:e},t=>{t.success&&(this.templateName=[],-1!==t.data.templateName.indexOf(",")?this.templateName=t.data.templateName.split(","):this.templateName.push(t.data.templateName),a.stepInfo=t.data,a.data3=[{name:"成果物点评"}]),1===t.data.type&&2===t.data.status&&a.echartShow()})},appointMember(t){t.status=1},saveAppoint(){let t=this,e=[];for(let a of this.appointListData)1===a.status&&e.push(a.userCode);e.length>0&&t.$alert("任务指派后将无法修改，是否进行保存","提示",{confirmButtonText:"确定",callback:a=>{t.$http.post("/doproject/appointstep",{teamid:t.teamId,stepid:1,users:e},e=>{e.success&&t.$message("保存成功")})}})},submitFont(t){let e=this;""===e.commentContent?e.$alert("请输入需要提问的内容后再提交","提示",{confirmButtonText:"确定"}):(e.$http.post("/doproject/submitfeedback",{outputid:t,feedbacks:e.commentContent},t=>{t.success&&e.$message("保存成功")}),e.upLoad())},playVideo(t){window.open(""+t,"_blank")},downloadTemplate(t){const e=i.a.service({lock:!0,text:"下载中请稍候...",spinner:"el-icon-loading",background:"rgba(f, 0, 0, 0.7)"});this.$axios({method:"post",url:"http://39.100.37.131:8085/lying-web/doproject/output/downloadtemplate",data:{filename:t},responseType:"blob",headers:{token:localStorage.getItem("token"),"Content-Type":"application/json; charset=UTF-8"}}).then(a=>{var s=new Blob([a.data]),i=document.createElement("a"),n=window.URL.createObjectURL(s);i.href=n,i.download=t.split("$_$")[1],document.body.appendChild(i),i.click(),document.body.removeChild(i),window.URL.revokeObjectURL(n),setTimeout(()=>{e.close()},1e3)}).catch(t=>{console.log(t),setTimeout(()=>{e.close()},1e3)})},seeRightAnswer(t){let e=this;null!==t?(e.$hideContent(),e.$http.post("/assistant/openpdf",{outputName:t},t=>{t.success&&(t.data=JSON.parse(t.data),console.log(t.data.fileUrl),e.$showPDF(t.data.fileUrl))})):e.$message("此任务无答案")},answerPage(){let t=this;t.$http.post("/doproject/evaluating/paperinfo",{teamid:t.teamId,stepid:t.currentStepId},e=>{if(e.success){for(let a of e.data.problems)0===a.type?a.radio="":1===a.type&&(a.radio=[]),c["default"].set(t.answer,a.problemId,"");t.timeLimit=1e3*e.data.timeLimit*60,this.countTime(),t.paperInfo=e.data,t.paperId=e.data.paperId}});let e=new Date(new Date).getFullYear(),a=new Date(new Date).getMonth()+1<10?"0"+(new Date(new Date).getMonth()+1):new Date(new Date).getMonth()+1,s=new Date(new Date).getDate()<10?"0"+new Date(new Date).getDate():new Date(new Date).getDate(),i=new Date(new Date).getHours()<10?"0"+new Date(new Date).getHours():new Date(new Date).getHours(),n=new Date(new Date).getMinutes()<10?"0"+new Date(new Date).getMinutes():new Date(new Date).getMinutes(),o=new Date(new Date).getSeconds()<10?"0"+new Date(new Date).getSeconds():new Date(new Date).getSeconds();t.starttime=e+"-"+a+"-"+s+" "+i+":"+n+":"+o,t.answerShow=!0},commitPage(){let t=this;for(let s of t.paperInfo.problems)if(0===s.type)t.answer[s.problemId]=s.radio;else if(1===s.type){s.radio=s.radio.sort();for(var e="",a=0;a<s.radio.length;a++)0===a?e=s.radio[a]:e+=","+s.radio[a];s.radio=e,t.answer[s.problemId]=s.radio}t.$http.post("/doproject/evaluating/submit",{teamid:t.teamId,stepid:t.currentStepId,paperid:t.paperId,starttime:t.starttime,answer:t.answer},e=>{e.success&&(t.$message("保存成功"),t.loadStepListData(),t.answerShow=!1)})},countTime:function(){this.timeLimit>=0&&(this.d=Math.floor(this.timeLimit/1e3/60/60/24),this.h=Math.floor(this.timeLimit/1e3/60/60%24),this.m=Math.floor(this.timeLimit/1e3/60%60),this.s=Math.floor(this.timeLimit/1e3%60)),0===this.timeLimit&&(this.commitPage(),this.$message("时间已到")),this.timeLimit=this.timeLimit-1e3,setTimeout(this.countTime,1e3)},drawLine(){var t=this.$echarts.init(this.document);t.setOption({title:{text:"测评结果",x:"left"},tooltip:{},radar:{name:{textStyle:{color:"#fff",backgroundColor:"#999",borderRadius:3,padding:[3,5]}},indicator:this.listTotal},series:[{name:"各个维度题目正确数",type:"radar",data:this.listResult}]})},deleteComment(t){let e=this;e.$http.post("/doproject/output/deleteOutput",{outputName:t},t=>{t.success&&e.loadStepListData()})},echartShow(){let t=this;t.$http.post("/doproject/evaluating/evaluatingresultinfo",{teamid:t.teamId,stepid:t.currentStepId},e=>{t.orderNum=e.data.order,t.listResult=e.data.list2,t.listTotal=e.data.list1,t.$nextTick(function(){t.document=document.getElementById("myChart"),t.drawLine()})})},beforeAvatarUpload(t){this.file=t,this.files=t;const e="doc"===t.name.split(".")[1],a="docx"===t.name.split(".")[1],s="zip"===t.name.split(".")[1],i=t.size/1024/1024<20;return e||a||s?i?(this.fileName=t.name,!0):(this.$message.error("上传模板大小不能超过 20MB!"),!1):(this.$message.error("上传模板只能是 doc、docx、zip格式!"),!1)},handleChange(t,e){this.fileList=e.slice(-3)},handleExceed(t,e){this.$message.warning("当前限制选择 1 个文件，已经上传一个文件，如需修改，请删除已上传的文件后再重新上传")},beforeRemove(){this.fileList=[]},upLoad(){let t=this;var e=new FormData;e.append("file",t.file),e.append("teamid",t.teamId),e.append("stepid",t.currentStepId),this.$http.uploadFile("/doproject/output/upload",e,e=>{this.fileList=[],e.success&&(t.$message("上传成果物成功"),t.loadStepListData())})},changeCommenter(){},addCommentArea(){console.log(this.article.content),console.log(this.commentAddData),this.showEditor=!1},showEditorComment(){this.showEditor=!this.showEditor,this.$nextTick(()=>{document.querySelector("#commentAdd").scrollIntoView(!0)})}}}}).call(this,a("1157"))},d785:function(t,e,a){},e112:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.serverUrl,name:"file",headers:t.header,"show-file-list":!1,"list-type":"picture",multiple:!1,"on-success":t.uploadSuccess,"on-error":t.uploadError,"before-upload":t.beforeUpload}}),a("quill-editor",{ref:"myQuillEditor",staticClass:"editor",attrs:{options:t.editorOption},on:{blur:function(e){return t.onEditorBlur(e)},focus:function(e){return t.onEditorFocus(e)},change:function(e){return t.onEditorChange(e)}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)},i=[],n=a("953d");a("a7539"),a("8096"),a("14e1");const o=[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image","video"]];var l={props:{value:{type:String},maxSize:{type:Number,default:4e3}},components:{quillEditor:n["quillEditor"]},data(){return{content:this.value,quillUpdateImg:!1,editorOption:{theme:"snow",placeholder:"您想说点什么？",modules:{toolbar:{container:o,handlers:{image:function(t){t?document.querySelector(".avatar-uploader input").click():this.quill.format("image",!1)}}}}},serverUrl:"https://testihospitalapi.ebaiyihui.com/oss/api/file/store/v1/saveFile",header:{}}},methods:{onEditorBlur(){},onEditorFocus(){},onEditorChange(){this.$emit("input",this.content)},beforeUpload(){this.quillUpdateImg=!0},uploadSuccess(t,e){let a=this.$refs.myQuillEditor.quill;if(200==t.code){let e=a.getSelection().index;a.insertEmbed(e,"image",t.result.url),a.setSelection(e+1)}else this.$message.error("图片插入失败");this.quillUpdateImg=!1},uploadError(){this.quillUpdateImg=!1,this.$message.error("图片插入失败")}}},r=l,c=(a("4db7"),a("2877")),d=Object(c["a"])(r,s,i,!1,null,null,null);e["a"]=d.exports},fc03:function(t,e,a){}});
//# sourceMappingURL=task-list.b53ddc74.js.map