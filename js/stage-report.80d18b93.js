(function(t){function e(e){for(var a,o,r=e[0],l=e[1],c=e[2],p=0,u=[];p<r.length;p++)o=r[p],s[o]&&u.push(s[o][0]),s[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(u.length)u.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var l=n[r];0!==s[l]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},s={"stage-report":0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(){return Promise.resolve()},o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;i.push([22,"chunk-vendors","chunk-common"]),n()})({22:function(t,e,n){t.exports=n("5b70")},5339:function(t,e,n){},"5b70":function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container-fluid",staticStyle:{padding:"0px 0px 0px 0px"}},[n("Header",{attrs:{img:"",school:"Go语言实战抽奖系统"}})],1),t._m(0)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-8 col-md-offset-2 mt-6"},[n("div",{staticClass:"reportTitle"},[n("span",[t._v("阶段学习训练反馈报告 —— ")]),n("span",{staticStyle:{color:"rgb(102, 18, 207)"}},[t._v("任务前评测")])]),n("div",{staticClass:"reportContent"},[n("div",[n("div",{staticClass:"xm-left-column-label"},[n("span"),n("h1",[t._v("效率情况")])]),n("div",{staticClass:"myChart",staticStyle:{"margin-top":"30px"},attrs:{id:"myChart"}})]),n("div",{staticClass:"reportContentItem"},[n("div",{staticClass:"xm-left-column-label"},[n("span"),n("h1",[t._v("质量情况")])]),n("div",{staticClass:"stepContent row"},[n("div",{staticClass:"col-md-2 stepContentTitle"},[t._v("任务1")]),n("div",{staticClass:"col-md-4"},[n("span",[t._v("最大相似度：")])]),n("div",{staticClass:"col-md-4"},[n("span",[t._v("平均：")])]),n("div",{staticClass:"col-xs-offset-2 col-md-4 stepContentContent"},[n("span",[t._v("提交次数：")])]),n("div",{staticClass:"col-md-4 stepContentContent"},[n("span",[t._v("平均：")])])])]),n("div",{staticClass:"reportContentItem"},[n("div",{staticClass:"xm-left-column-label"},[n("span"),n("h1",[t._v("知识与技能情况")])]),n("div",{staticClass:"myChart3",attrs:{id:"myChart3"}})]),n("div",{staticClass:"reportContentItem"},[n("div",{staticClass:"xm-left-column-label"},[n("span"),n("h1",[t._v("在线学习情况")])]),n("div",{staticClass:"stepContent row"},[n("div",{staticClass:"col-md-3 stepContentTitle"},[t._v("学习任务相关资料")]),n("div",{staticClass:"col-md-4"},[n("span",[t._v(" XX:XX")])]),n("div",{staticClass:"col-md-4"},[n("span",[t._v("超越：XX")]),t._v("人")]),n("div",{staticClass:"col-md-3 stepContentTitle stepContentContent"},[t._v(" 学习项目知识点")]),n("div",{staticClass:"col-md-4 stepContentContent"},[n("span",[t._v("  XX:XX")])]),n("div",{staticClass:"col-md-4 stepContentContent"},[n("span",[t._v("超越：XX")]),t._v("人")])])]),n("div",{staticClass:"reportContentItem"},[n("div",{staticClass:"xm-left-column-label"},[n("span"),n("h1",[t._v("沟通与交流情况")])]),n("div",{staticClass:"stepContent row"},[n("div",{staticClass:"col-md-3 stepContentTitle"},[t._v("发表评论")]),n("div",{staticClass:"col-md-4"},[n("span"),t._v("次")]),n("div",{staticClass:"col-md-4"},[n("span",[t._v("超越：")]),t._v("人")]),n("div",{staticClass:"col-md-3 stepContentTitle stepContentContent"},[t._v("回复评论")]),n("div",{staticClass:"col-md-4 stepContentContent"},[n("span"),t._v("次")]),n("div",{staticClass:"col-md-4 stepContentContent"},[n("span",[t._v("超越：")]),t._v("人")])])])])])}],o=n("907e"),r=o["a"],l=(n("fc96"),n("2877")),c=Object(l["a"])(r,s,i,!1,null,"220ba026",null),d=c.exports,p=(n("7378"),n("16b4"),n("346c"),n("1e3b"),n("3a10"),n("87c5"),n("0cb1"),n("751a")),u=n("313e"),v=n.n(u);a["default"].prototype.$echarts=v.a,a["default"].prototype.$http=p["a"],new a["default"]({render:t=>t(d)}).$mount("#app")},"907e":function(t,e,n){"use strict";(function(t){var a=n("10df");e["a"]={name:"StageReport",components:{Header:a["a"]},mounted(){this.initEvent(),this.initData()},data(){return{winWidth:window.innerWidth}},methods:{initEvent:function(){let e=this;e.winWidth=t("body").width(),window.onresize=function(){e.winWidth=t("body").width()},e.$nextTick(function(){e.document=document.getElementById("myChart"),e.document3=document.getElementById("myChart3"),e.drawLine()})},initData:function(){},drawLine(){var t=this.$echarts.init(this.document);t.setOption({title:{},tooltip:{trigger:"axis"},legend:{},toolbox:{show:!0,feature:{}},calculable:!0,xAxis:[{type:"value",boundaryGap:[0,.01]}],yAxis:[{type:"category",data:["任务1","任务2","任务3","任务4"]}],series:[{name:"完成情况",type:"bar",data:[82,48,90,100]}]});var e=this.$echarts.init(this.document3);e.setOption({title:{},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#283b56"}}},legend:{data:["平均分","得分"]},dataZoom:{show:!1,start:0,end:100},xAxis:[{type:"category",boundaryGap:!0,data:["知识点1","知识点2","知识点3","知识点4"]},{type:"category",boundaryGap:!0,data:["知识点1","知识点2","知识点3","知识点4"]}],yAxis:[{type:"value",scale:!0,name:"分数",max:100,min:0,boundaryGap:[.2,.2]},{type:"value",scale:!0,name:"分数",max:100,min:0,boundaryGap:[.2,.2]}],series:[{name:"得分",type:"bar",xAxisIndex:1,yAxisIndex:1,data:function(){var t=[],e=4;while(e--)t.push(Math.round(100*Math.random()));return t}()},{name:"平均分",type:"line",data:function(){var t=[],e=0;while(e<4)t.push((10*Math.random()+5).toFixed(1)-0),e++;return t}()}]})}}}}).call(this,n("1157"))},fc96:function(t,e,n){"use strict";var a=n("5339"),s=n.n(a);s.a}});
//# sourceMappingURL=stage-report.80d18b93.js.map