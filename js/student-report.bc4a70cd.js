(function(t){function e(e){for(var i,r,l=e[0],o=e[1],c=e[2],d=0,v=[];d<l.length;d++)r=l[d],a[r]&&v.push(a[r][0]),a[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);p&&p(e);while(v.length)v.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,l=1;l<n.length;l++){var o=n[l];0!==a[o]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},a={"student-report":0},s=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(){return Promise.resolve()},r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var p=o;s.push([24,"chunk-vendors","chunk-common"]),n()})({24:function(t,e,n){t.exports=n("7dcb")},2921:function(t,e,n){},"7dcb":function(t,e,n){"use strict";n.r(e);var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container-fluid",staticStyle:{padding:"0px 0px 0px 0px"}},[n("Header",{attrs:{img:"",school:"Go语言实战抽奖系统"}})],1),n("div",{staticStyle:{color:"#6715CE",float:"right","margin-top":"50px","margin-right":"20%",cursor:"pointer"},on:{click:t.downloadReport}},[n("i",{staticClass:"iconfont iconxiazai",staticStyle:{color:"#6715CE","margin-left":"5px"}}),t._v("下载报告\r\n  ")]),n("div",{staticStyle:{"margin-left":"25%"},attrs:{id:"pdfDom"}},[t._m(0),n("div",{staticClass:"page-content"},[t._m(1),t._m(2),n("div",{staticStyle:{"margin-top":"20px","min-height":"500px"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-offset-1 col-xs-4 reportContent",staticStyle:{"min-height":"300px","font-size":"20px"}},[t._m(3),t._l(t.cpResult,function(e,i){return n("div",{key:i,staticClass:"row",staticStyle:{"background-color":"#EEEEEE","text-align":"center",padding:"20px 0"}},[n("div",{staticClass:"col-7",staticStyle:{padding:"5px 0"}},[t._v("\r\n                 "+t._s(e.content)+"\r\n               ")]),n("div",{staticClass:"col-5",staticStyle:{padding:"5px 0"}},[t._v("\r\n                 "+t._s(e.result)+"\r\n               ")])])})],2),t._m(4)]),t._m(5),t._m(6)])]),t._m(7),n("div",{staticClass:"page-content"},[t._m(8),n("div",{staticStyle:{"margin-left":"5%",width:"90%","font-size":"24px","margin-top":"30px","text-align":"center"}},[n("table",{staticStyle:{width:"100%"},attrs:{border:"1"}},[t._m(9),t._l(t.taskList,function(e,i){return n("tr",{key:i},[n("td",{staticStyle:{"line-height":"50px"}},[t._v("客观题测试")]),n("td",{staticStyle:{"line-height":"50px"}},[t._v("2019-08-01")]),n("td",{staticStyle:{"line-height":"50px"}},[t._v("2019-08-01")]),n("td",{staticStyle:{"line-height":"50px"}},[t._v("10")])])})],2)])]),t._m(10)])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-content"},[n("div",{staticClass:"reportTitle"},[n("span",{staticStyle:{color:"rgb(102, 18, 207)"}},[t._v("生产实习")]),n("span",[t._v("总结报告 ")])]),n("div",{staticClass:"title-content"},[n("div",{staticClass:"title-info"},[n("span",[t._v("姓    名")]),t._v("："),n("span",[t._v("杨思琦")])]),n("div",{staticClass:"title-info"},[n("span",[t._v("学    号")]),t._v("："),n("span",[t._v("201602010102")])]),n("div",{staticClass:"title-info"},[n("span",[t._v("年    级")]),t._v("："),n("span",[t._v("大二")])]),n("div",{staticClass:"title-info"},[n("span",[t._v("班    级")]),t._v("："),n("span",[t._v("1602")])]),n("div",{staticClass:"title-info"},[n("span",[t._v("专    业")]),t._v("："),n("span",[t._v("计算机科学与技术")])]),n("div",{staticClass:"title-info"},[n("span",[t._v("学    院")]),t._v("："),n("span",[t._v("计算机学院")])]),n("div",{staticClass:"title-info"},[n("span",[t._v("学    校")]),t._v("："),n("span",[t._v("沈阳航空航天大学")])])]),n("div",{staticClass:"footer-content"},[n("div",{staticStyle:{"margin-left":"35%","font-weight":"bold"}},[t._v("沈阳哲航信息科技有限公司")]),n("div",{staticStyle:{"margin-top":"20px","text-align":"center"}},[n("span",[t._v("2019年8月10日")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"total-content",staticStyle:{"margin-left":"15%","font-size":"24px","margin-top":"30px","font-weight":"bold"}},[n("div",{staticStyle:{"margin-top":"20px"}},[n("span",[t._v("行业调查问卷管理系统  ")]),t._v("( 2019-06-17 ~ 2019-06-30 )")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"margin-left":"5%","font-size":"24px","margin-top":"30px"}},[n("span",{staticStyle:{color:"#999999"}},[t._v("评测结果")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row",staticStyle:{"background-color":"#AAAAAA","text-align":"center"}},[n("div",{staticClass:"col-7",staticStyle:{padding:"15px 0"}},[t._v("\r\n                 分类\r\n               ")]),n("div",{staticClass:"col-5",staticStyle:{padding:"15px 0"}},[t._v("\r\n                 变化\r\n               ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-xs-6",staticStyle:{"min-height":"300px",height:"100%"}},[n("div",{staticStyle:{"margin-left":"5%","font-size":"20px"}},[n("p",[t._v("纵向对比")]),n("span",{staticStyle:{"font-size":"16px"}},[t._v("根据两次评测的成绩，得出知识点掌握情况。雷达图表示的是两次测评后对比的结果，是自身测评前后的纵向对比")])]),n("div",{staticClass:"col-xs-12",staticStyle:{"min-height":"300px"},attrs:{id:"myChart"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-6",staticStyle:{"margin-top":"50px","margin-left":"5%","font-size":"20px"}},[n("p",[t._v("横向对比")]),n("span",{staticStyle:{"font-size":"16px"}},[t._v("根据两次评测的成绩，得出知识点掌握情况。雷达图表示的是两次测评后对比的结果，是自身测评前后的纵向对比")])]),n("div",{staticClass:"col-xs-4 reportContent",staticStyle:{"margin-top":"50px","font-size":"20px","margin-left":"30px"}},[n("div",{staticClass:"row",staticStyle:{"background-color":"#AAAAAA","text-align":"center"}},[n("div",{staticClass:"col-6",staticStyle:{padding:"15px 0"}},[t._v("\r\n                 第一次评测\r\n               ")]),n("div",{staticClass:"col-6",staticStyle:{padding:"15px 0"}},[t._v("\r\n                 第二次评测\r\n               ")])]),n("div",{staticClass:"row",staticStyle:{"background-color":"#EEEEEE","text-align":"center"}},[n("div",{staticClass:"col-6",staticStyle:{padding:"10px 0"}},[t._v("\r\n                 第17名\r\n               ")]),n("div",{staticClass:"col-6",staticStyle:{padding:"10px 0"}},[t._v("\r\n                 第1名\r\n               ")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"margin-top":"20px","text-align":"center"}},[n("div",{staticClass:"myChart",staticStyle:{"margin-top":"30px"},attrs:{id:"myChart3"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-content"},[n("div",{staticStyle:{"margin-left":"5%","font-size":"24px","margin-top":"30px"}},[n("span",{staticStyle:{color:"#999999"}},[t._v("编程能力评价")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"margin-left":"5%","font-size":"24px","margin-top":"30px"}},[n("span",{staticStyle:{color:"#999999"}},[t._v("各项任务执行情况清单")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",{staticStyle:{width:"25%","text-align":"center","line-height":"50px"}},[t._v("任务名")]),n("th",{staticStyle:{width:"30%","text-align":"center","line-height":"50px"}},[t._v("开始时间")]),n("th",{staticStyle:{width:"30%","text-align":"center","line-height":"50px"}},[t._v("结束时间")]),n("th",{staticStyle:{width:"15%","text-align":"center","line-height":"50px"}},[t._v("排名")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-content"},[n("div",{staticStyle:{"margin-left":"5%","font-size":"24px","margin-top":"30px"}},[n("span",{staticStyle:{color:"#999999"}},[t._v("评价汇总")])]),n("div",{staticStyle:{"margin-left":"5%",width:"90%","font-size":"24px","margin-top":"30px"}},[n("div",{staticStyle:{"margin-left":"5%","font-size":"20px"}},[n("p",[t._v("系统学习情况：")]),n("span",{staticStyle:{"font-size":"16px"}},[t._v("完成本次项目共登录10次，在同学中排名第10；在线时长为10小时，在同学中排名1。")])]),n("div",{staticStyle:{"margin-left":"5%","font-size":"20px","margin-top":"30px"}},[n("p",[t._v("助教点评情况：")]),n("span",{staticStyle:{"font-size":"16px"}},[t._v("根据两次评测的成绩，得出知识点掌握情况。雷达图表示的是两次测评后对比的结果，是自身测评前后的纵向对比")])])])])}],r=n("f874"),l=r["a"],o=(n("ce90"),n("2877")),c=Object(o["a"])(l,a,s,!1,null,"41cdfd82",null),p=c.exports,d=(n("7378"),n("16b4"),n("346c"),n("1e3b"),n("3a10"),n("87c5"),n("0cb1"),n("751a")),v=n("313e"),u=n.n(v);i["default"].prototype.$echarts=u.a,i["default"].prototype.$http=d["a"],new i["default"]({render:t=>t(p)}).$mount("#app")},ce90:function(t,e,n){"use strict";var i=n("2921"),a=n.n(i);a.a},f874:function(t,e,n){"use strict";(function(t){var i=n("10df"),a=n("c0e9"),s=n.n(a),r=n("e511"),l=n.n(r);e["a"]={name:"StageReport",components:{Header:i["a"]},mounted(){this.initEvent(),this.initData()},data(){return{winWidth:window.innerWidth,cpResult:[{content:"编程语言",result:"3% ⬆"},{content:"测试技术",result:"3% ⬆"},{content:"计算机网络基础",result:"3% ⬆"},{content:"面向对象技术",result:"3% ⬆"},{content:"软件工程技术",result:"3% ⬆"}],taskList:[{content:"编程语言",result:"3% ⬆"},{content:"测试技术",result:"3% ⬆"},{content:"计算机网络基础",result:"3% ⬆"},{content:"面向对象技术",result:"3% ⬆"},{content:"软件工程技术",result:"3% ⬆"}]}},methods:{initEvent:function(){let e=this;e.winWidth=t("body").width(),window.onresize=function(){e.winWidth=t("body").width()},e.$nextTick(function(){e.document=document.getElementById("myChart"),e.document3=document.getElementById("myChart3"),e.drawLine()})},initData:function(){this.$http.post("/doReport/summarizeReportInfo",{teamId:"271"},t=>{console.log(t),t.success})},drawLine(){var t=this.$echarts.init(this.document);t.setOption({title:{},tooltip:{trigger:"axis"},legend:{x:"center",y:"90%",data:["第一次","第二次"]},radar:[{indicator:[{text:"Java",max:100},{text:"前端",max:100},{text:"测试",max:100},{text:"部署",max:100},{text:"软件工程技术",max:100}],center:["50%","45%"],radius:80}],series:[{type:"radar",tooltip:{trigger:"item"},itemStyle:{normal:{areaStyle:{type:"default"}}},data:[{value:[60,73,85,40,90],name:"第一次"},{value:[70,63,65,60,100],name:"第二次"}]}]});var e=this.$echarts.init(this.document3);e.setOption({title:{},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#283b56"}}},legend:{data:["第一次排名","第二次排名"]},dataZoom:{show:!1,start:0,end:100},xAxis:[{type:"category",boundaryGap:!0,data:["java","前端","测试","部署"]},{type:"category",boundaryGap:!0,data:["java","前端","测试","部署"]}],yAxis:[{type:"value",scale:!0,name:"第一次排名",max:100,min:0,boundaryGap:[.2,.2]},{type:"value",scale:!0,name:"第二次排名",max:100,min:0,boundaryGap:[.2,.2]}],series:[{name:"第一次排名",type:"bar",data:function(){var t=[],e=4;while(e--)t.push(Math.round(100*Math.random()));return t}()},{name:"第二次排名",type:"bar",data:function(){var t=[],e=0;while(e<4)t.push((10*Math.random()+5).toFixed(1)-0),e++;return t}()}]})},downloadReport(){var e="总结报告";let n=new l.a("","pt","a4");var i=document.querySelectorAll(".page-content");for(let a=0;a<i.length;a++)t(function(){console.log(i[a]),s()(i[a],{allowTaint:!0}).then(function(t){console.log(t);let s=t.width,r=t.height,l=595.28,o=592.28/s*r,c=t.toDataURL("image/jpeg",1);n.addImage(c,"JPEG",0,0,l,o),n.addPage(),a===i.length-1&&n.save(e+".pdf")})},500)}}}}).call(this,n("1157"))}});
//# sourceMappingURL=student-report.bc4a70cd.js.map