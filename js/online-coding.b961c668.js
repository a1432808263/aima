(function(t){function e(e){for(var i,a,r=e[0],l=e[1],c=e[2],u=0,p=[];u<r.length;u++)a=r[u],n[a]&&p.push(n[a][0]),n[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],i=!0,r=1;r<s.length;r++){var l=s[r];0!==n[l]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=s[0]))}return t}var i={},n={"online-coding":0},o=[];function a(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.e=function(){return Promise.resolve()},a.m=t,a.c=i,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(s,i,function(e){return t[e]}.bind(null,i));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;o.push([26,"chunk-vendors","chunk-common"]),s()})({26:function(t,e,s){t.exports=s("424b")},"424b":function(t,e,s){"use strict";s.r(e);var i=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"online-coding"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4 pl-0",class:t.menuShow?"lession-menu pr-0":"lession-menu-hide"},[s("transition",{attrs:{name:"el-zoom-in-left"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.menuShow,expression:"menuShow"}]},[s("div",{staticClass:"col-md-2 lession-no",style:{height:t.windowHeight}},t._l(t.questionList.length,function(e,i){return s("div",{key:e,staticClass:"no-dot",class:i===t.selectQIndex?"active-dot":"",on:{click:function(e){return t.changeQ(i)}}},[t._v(t._s(e))])}),0),s("div",{staticClass:"col-md-10 lession-detail",style:{height:t.windowHeight}},[t.questionInfo&&t.questionInfo.title?s("div",{staticClass:"lession-title space"},[t._v("\n            "+t._s(t.questionInfo.title)),s("i",{staticClass:"el-icon-arrow-left icon-shouqi",on:{click:function(e){return t.changeMenu(!1)}}})]):t._e(),s("div",{staticClass:"lession-content font-bold pb-2"},[t._v("【题目内容】")]),s("div",{staticClass:"code-div pb-2 space pt-2 pb-2"},[t.questionInfo?s("div",{staticClass:"code-area font-small"},[t._v(t._s(t.questionInfo.topicDetails)+"\n            ")]):t._e()]),s("div",{staticClass:"lession-content font-bold pt-2 pb-2"},[t._v("【输入形式】")]),s("div",{staticClass:"code-div pb-2"},[t.questionInfo?s("div",{staticClass:"code-area font-small"},[t._v(t._s(t.questionInfo.input)+"\n            ")]):t._e()]),s("div",{staticClass:"lession-content font-bold pt-2 pb-2"},[t._v("【输出形式】")]),s("div",{staticClass:"code-div",staticStyle:{"border-bottom":"1px solid #dddddd"}},[t.questionInfo?s("div",{staticClass:"code-area font-small"},[t._v(" "+t._s(t.questionInfo.output)+"\n            ")]):t._e()]),t._l(t.testCaseList,function(e,i){return s("div",{key:i},[s("div",{staticClass:"lession-content font-bold pb-2"},[t._v("【测试用例"+t._s(i+1)+"】")]),s("div",{staticClass:"code-div pb-2"},[s("div",{staticClass:"col-md-2 code-io pr-0  mb-3"},[t._v("输入：")]),s("div",{staticClass:"code-area font-small col-md-10 mb-3"},[t._v(t._s(e.in))]),s("div",{staticClass:"col-md-2 code-io pr-0 mb-3"},[t._v("输出：")]),s("div",{staticClass:"code-area font-small col-md-10 mb-3"},[t._v(t._s(e.out))])])])})],2)])])],1),s("div",{staticClass:"pl-0 pr-0 write-coding",class:t.menuShow?"col-md-8 col-md-offset-4":"col-md-12"},[s("div",{staticClass:"coding-header"},[s("el-button",{directives:[{name:"show",rawName:"v-show",value:!t.menuShow,expression:"!menuShow"}],staticClass:"pull-right back-btn",on:{click:function(e){return t.changeMenu(!0)}}},[t._v("编程课程菜单")]),s("span",{staticClass:"coding-task"},[t._v(t._s(t.stepName))]),s("el-button",{staticClass:"pull-right back-btn",on:{click:t.back}},[t._v("返回")])],1),t.codemirrorShow?s("div",{staticClass:"coding-area"},[s("codemirror",{ref:"myCm",staticClass:"code",staticStyle:{border:"2px solid rgb(221, 221, 221)"},attrs:{options:t.cmOptions},model:{value:t.item.content,callback:function(e){t.$set(t.item,"content",e)},expression:"item.content"}}),"monokai"===t.cmOptions.theme?s("el-tooltip",{attrs:{content:"点击切换到白天模式",placement:"top"}},["monokai"===t.cmOptions.theme?s("i",{staticClass:"iconfont iconbangzhuchuangyixiangfaideadengpaofaguang theme-icon sun",on:{click:function(e){return t.changeTheme("neat")}}}):t._e()]):t._e(),"neat"===t.cmOptions.theme?s("el-tooltip",{attrs:{content:"点击切换到黑夜模式",placement:"top"}},["neat"===t.cmOptions.theme?s("i",{staticClass:"el-icon-moon theme-icon moon",on:{click:function(e){return t.changeTheme("monokai")}}}):t._e()]):t._e(),s("div",{staticClass:"row coding-param"},[s("el-button",{staticClass:"mt-3 pull-left",attrs:{type:"success",disabled:t.canSub},on:{click:t.outputCode}},[t._v("点我运行\n            ")]),t.questionInfo&&null!==t.questionInfo.submitId?s("span",{staticClass:"font-small tip"},[t._v("*每道题限制最多提交运行"+t._s(t.submitLimit)+"次,当前已提交"+t._s(t.questionInfo.submitId)+"次")]):t._e(),s("el-button",{staticClass:"mt-3 pull-right",attrs:{type:"success"},on:{click:function(e){return t.getHistoryPrint()}}},[t._v("编程历史记录\n          ")])],1),s("div",{staticClass:"mt-3 font-bold print-title"},[t._v("程序输出：")]),s("div",{staticClass:"code-print",style:{minHeight:t.sizeHChange(135),paddingTop:t.sizeHChange(4)}},t._l(t.printList,function(e,i){return s("div",{key:i,staticClass:"pt-2 pb-3"},[e.errMsg?t._e():s("span",{staticClass:"main-color"},[t._v(t._s(e.printCase)),s("br")]),s("span",{staticClass:"font-bold"},[t._v("评判结果")]),t._v("："+t._s(e.printText)+"\n            "),s("el-tooltip",{attrs:{placement:"top"}},[s("div",{attrs:{slot:"content"},domProps:{innerHTML:t._s(e.printDescription)},slot:"content"}),s("i",{staticClass:"el-icon-question main-color"})]),s("br"),t._v("\n            输出结果："+t._s(e.outputResult)),s("br"),e.errMsg?s("span",{staticStyle:{"white-space":"pre-wrap"}},[t._v("错误信息："+t._s(e.errMsg)),s("br")]):t._e(),t._v("运行耗时："+t._s(e.timeUsed)+"ms，占用内存："+t._s(e.memoryUsed)+"kb。\n          ")],1)}),0)],1):t._e()])]),s("el-dialog",{attrs:{title:"我的编程记录",visible:t.dialogVisible,width:"50%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[t.dialogVisible?s("div",{staticClass:"history-container",style:{height:t.sizeHChange(400)}},[t._l(t.printHistoryList,function(e,i){return s("div",{key:i,staticClass:"mb-5 print-item"},[s("div",{staticClass:"font-small"},[t._v("\n          提交时间："+t._s(e.time)+"\n        ")]),s("div",{staticClass:"row"},[s("div",{staticClass:"history-code font-small col-md-6 mr-3 ml-3"},[t._v(t._s(e.code))]),s("div",{staticClass:"history-print col-md-5 font-small"},t._l(e.result,function(e,i){return s("div",{key:i},[e.errMsg?t._e():s("span",{staticClass:"main-color"},[t._v(t._s(e.printCase)),s("br")]),s("span",{staticClass:"font-bold"},[t._v("评判结果")]),t._v("："+t._s(e.printText)+"\n              "),s("br"),t._v("\n              输出结果："+t._s(e.outputResult)),s("br"),e.errMsg?s("span",[t._v("错误信息："+t._s(e.errMsg)),s("br")]):t._e(),t._v("运行耗时："+t._s(e.timeUsed)+"ms，占用内存："+t._s(e.memoryUsed)+"kb。\n            ")])}),0)])])}),0===t.printHistoryList.length?s("div",{staticClass:"text-center font-small",style:{height:t.sizeHChange(350),lineHeight:t.sizeHChange(350)}},[t._v("您暂未提交过代码。")]):t._e()],2):t._e()])],1)},o=[],a=(s("be4f"),s("450d"),s("896a")),r=s.n(a),l=s("8f94");s("a7be");s("7a7a"),s("bbca"),s("9a48"),s("8c33"),s("10b2"),s("8f0a"),s("05dd"),s("1ef7"),s("f6b6"),s("9b74"),s("991c"),s("3c98"),s("111b"),s("3c98"),s("2768"),s("92f1"),s("0b6c"),s("b933"),s("18fe"),s("2aed"),s("d72f"),s("4895"),s("aedd"),s("697eb"),s("cbc8"),s("a2c1"),s("8d70"),s("9f09"),s("164b"),s("db91"),s("f9d4"),s("7b00"),s("d5e0"),s("4ba6"),s("ffda");var c={components:{codemirror:l["codemirror"]},name:"online-coding",created(){let t=this;t.stepId=localStorage.getItem("stepId"),t.teamId=localStorage.getItem("teamId"),t.userCode=localStorage.getItem("userCode")},mounted(){this.initDoms(),this.initData(!0)},data(){return{stepName:"编码任务",canSub:!0,submitLimit:5,dialogVisible:!1,selectQIndex:0,submitId:0,stepId:"",teamId:"",userCode:"",questionList:[],questionInfo:null,item:{content:""},windowHeight:"",curCode:"",cmOptions:{tabSize:4,matchBrackets:!0,autoCloseBrackets:!0,matchTags:!0,mode:"text/x-java",theme:"neat",lineNumbers:!0,lineWrapping:!0,foldGutter:!0,gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"],extraKeys:{Ctrl:"autocomplete"},lineWiseCopyCut:!0,line:!0,scrollbarStyle:"null"},modeObj:{Java:"text/x-java",C:"text/x-csrc"},judgeObj:{Java:8,C:1},judgeId:0,menuShow:!0,codemirrorShow:!1,Jmodel:"public class Main{\n  public static void main(String[] args){\n  }\n}",Cmodel:"#include<stdio.h>\nint main()\n{\n\n}",printList:[],inputParams:"",resultStatusList:[{title:"答案正确",description:"恭喜你！所提交的代码通过了数据！这个评测结果应该是大家最喜欢见到的，也非常好理解。<br/>如果是单点测试，那么只要通过了，就会返回一个“答案正确”；<br/>如果是多点测试，那么只有当通过了所有数据时，才会返回“答案正确”。"},{title:"格式错误",description:"这应该是最接近正确答案的错误了，<br/>基本上由多输出了空格或者换行导致的，稍作修改即可。"},{title:"运行超时",description:"由于每道题都会规定程序运行时间的上限，因此当超过这个限制时就会返回“运行超时”。<br/>一般来说，这一结果可能是由算法的时间复杂度过大而导致的，当然也可能时某组数据使得代码中某处地方死循环掉了。<br/>因此，要仔细思考最坏时间复杂度是多少，或者检查代码中是否可能数显特殊数据死循环的情况。"},{title:"内存超限",description:"每道题目都有规定程序使用的空间上限，因此如果程序中使用太多的空间，<br/>则会返回MLE，例如数组太大一般最容易导致这个结果。"},{title:"答案错误",description:"“答案错误”是比较令人懊恼的结果，因为这说明代码有漏洞或者算法根本就是错误的，只是恰好能过样例而已。<br/>不过有时可能时应为输出了一些调试信息导致的，那就删除多余的输入内容再输出。<br/>当然，大部分情况下都需要认真检测代码逻辑有没有问题。"},{title:"运行错误",description:"这一结果的可能性非常多，常见的有段错误（直接的原因时非法访问了内存，例如数组越界，指针乱指），<br/>浮点错误（例如除数为0，模数为0），递归爆栈（一般由递归时层数过深导致的）等。<br/>一般来说，需要先检查数组大小是否比题目的数据范围大，然后再去检查可不可能有特殊数据可以使除数或者模数为0，有递归的情况则检查是否在大数据时递归层数太深。"},{title:"输出超限",description:"如果程序输出了过量的内容（一般是指过量非常多），那么就会返回“输出超限”。<br/>一般是由输出了大量的调试信息或者特殊数据导致的死循环输出导致的。"},{title:"编译错误",description:"很显然，如果代码没有办法通过编译，那么就会返回“编译错误”。<br/>这是要先注意时不是选错了语言，然后再看本地的编译器能不能编译通过刚刚提交的代码，修改轴再次提交即可。"},{title:"系统错误",description:"-_-!系统出现异常，请联系工作人员！"}],testCaseList:[{in:"100 50 10",out:"47977.93"},{in:"80 100 120",out:"341595.37"}],printHistoryList:[{time:"2019-10-10 12:00:22",code:'#include<stdio.h>\nint main()\n{\n int a,b,i,a1=0,b1=0;\n double c=0,c1=0,sum=0;\n scanf("%d",&a);\n scanf("%d",&b);\n scanf("%lf",&c);\n a1=((1+a)*a)/2;\n for(i=1;i<=b;i++)\n b1+=i*i;\n for(i=1;i<=c;i++)\n {\n  c1+=1.0/i;\n }\n sum=a1+b1+c1;\n printf("%0.2lf",sum);\n return 0;\n}',result:[{printCase:"测试用例1",printText:"答案正确",outputResult:"47797.93",timeUsed:"0",memoryUsed:"888"}]}]}},methods:{initDoms(){this.windowHeight=window.innerHeight+"px"},initData(t){let e=this;e.stepName=localStorage.getItem("stepName"),e.$http.post("/doproject/questionLibraryInfo",{stepId:e.stepId,teamId:e.teamId},s=>{if(s.success){e.questionList=s.data,e.questionInfo=s.data[e.selectQIndex],e.questionInfo.sampleInputArr=e.questionInfo.sampleInput.split(","),e.questionInfo.sampleOutputArr=e.questionInfo.sampleOutput.split(","),e.testCaseList=[];for(var i=0;i<e.questionInfo.sampleInputArr.length;i++){let t={in:e.questionInfo.sampleInputArr[i],out:e.questionInfo.sampleOutputArr[i]};e.testCaseList.push(t)}e.questionInfo.submitId+1>e.submitLimit?e.canSub=!0:e.canSub=!1,t&&e.setCodeMirror()}}),e.codemirrorShow=!0},changeTheme(t){this.$set(this.cmOptions,"theme",t)},outputCode(){let t=this,e={problemId:t.questionInfo.id,input:t.questionInfo.sampleInputArr,output:t.questionInfo.sampleOutputArr,timeLimit:t.questionInfo.timeLimit,memoryLimit:t.questionInfo.memoryLimit,judgeId:t.judgeId,src:t.item.content,callBack:"http://www.aimaonline.cn:8086/producer/result.do?key=111&submitId="+(t.questionInfo.submitId+1),userCode:t.userCode,teamId:t.teamId};t.$axios({method:"post",headers:{"Content-Type":"application/json"},url:"http://www.aimaonline.cn:8086/producer/judge.do",data:e,dataType:"json",processData:!1,contentType:!1,timeout:6e4}).then(e=>{if("OK"===e.data){const e=r.a.service({lock:!0,text:"程序运行中...",spinner:"el-icon-loading",background:"rgba(f, 0, 0, 0.7)",color:"#6612cf"});t.printList=[],setTimeout(function(){let s={problemId:t.questionInfo.id,teamId:t.teamId};t.$http.post("/doproject/judgeResultInfo",s,s=>{if(s.success){for(var i=0;i<s.data.length;i++)if(s.data[i].errorMessage){let e={printCase:"",printText:"运行错误",printDescription:"-_-!您的代码存在错误，请根据下方错误信息进行修改！",memoryUsed:0,timeUsed:0,outputResult:"null",errMsg:s.data[i].errorMessage};t.printList.push(e)}else{let e={printCase:"测试用例"+(i+1),printText:t.resultStatusList[s.data[i].resultStatus].title,printDescription:t.resultStatusList[s.data[i].resultStatus].description,memoryUsed:s.data[i].memoryUsed,timeUsed:s.data[i].timeUsed,outputResult:s.data[i].outputResult,errMsg:null};t.printList.push(e)}t.initData(!1),e.close()}else e.close()})},4e3)}})},getHistoryPrint(){let t=this;t.printHistoryList=[];let e={problemId:t.questionInfo.id,teamId:t.teamId};t.$http.post("/doproject/judgeResultHistoryInfo",e,e=>{if(e.success)for(var s=0;s<e.data.length;s++){let n=e.data[s].judgeResultDetail,o={result:[]};for(var i=0;i<n.length;i++)if(o.time=n[i].createTime,o.code=n[i].codeContent,n[i].errorMessage){let t={printCase:"",printText:"运行错误",printDescription:"-_-!您的代码存在错误，请根据下方错误信息进行修改！",memoryUsed:0,timeUsed:0,outputResult:"null",errMsg:n[i].errorMessage};o.result.push(t)}else{let e={printCase:"测试用例"+(i+1),printText:t.resultStatusList[n[i].resultStatus].title,printDescription:t.resultStatusList[n[i].resultStatus].description,memoryUsed:n[i].memoryUsed,timeUsed:n[i].timeUsed,outputResult:n[i].outputResult,errMsg:null};o.result.push(e)}t.printHistoryList.push(o)}}),t.dialogVisible=!0},setCodeMirror(){let t=this;t.cmOptions.mode=t.modeObj[t.questionInfo.judgeName],t.cmOptions.mode===t.modeObj.Java?(t.item.content=t.Jmodel,t.judgeId=t.judgeObj.Java):t.cmOptions.mode===t.modeObj.C&&(t.item.content=t.Cmodel,t.judgeId=t.judgeObj.C)},changeMenu(t){this.menuShow=t},changeQ(t){this.selectQIndex=t,this.initData(!0),this.printList=[]},sizeHChange(t){return window.innerHeight*t/739+"px"},back(){window.location="task-list.html"}}},d=c,u=s("2877"),p=Object(u["a"])(d,n,o,!1,null,"0528ae17",null),m=p.exports,f=(s("7378"),s("3a10"),s("16b4"),s("346c"),s("7292"),s("bc3a")),b=s.n(f),h=s("751a");i["default"].prototype.$http=h["a"],i["default"].prototype.$axios=b.a,new i["default"]({render:t=>t(m)}).$mount("#online-coding")},7292:function(t,e,s){}});
//# sourceMappingURL=online-coding.b961c668.js.map