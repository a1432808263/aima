(function(t){function e(e){for(var i,n,c=e[0],r=e[1],o=e[2],p=0,u=[];p<c.length;p++)n=c[p],l[n]&&u.push(l[n][0]),l[n]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);d&&d(e);while(u.length)u.shift()();return s.push.apply(s,o||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,c=1;c<a.length;c++){var r=a[c];0!==l[r]&&(i=!1)}i&&(s.splice(e--,1),t=n(n.s=a[0]))}return t}var i={},l={"task-execute":0},s=[];function n(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=i,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var d=r;s.push([21,"chunk-vendors","chunk-common"]),a()})({21:function(t,e,a){t.exports=a("5769")},5769:function(t,e,a){"use strict";a.r(e);var i=a("2b0e"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container-fluid"},[t._m(0),t._m(1),a("div",{staticClass:"row mt-5"},[a("div",{staticClass:"col-md-3"},[t._m(2),a("el-tree",{staticClass:"p-2",staticStyle:{"background-color":"#FCFCFC"},attrs:{data:t.stepData,accordion:""},on:{"node-click":t.clickStep},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.node,l=e.data;return a("span",{staticClass:"custom-tree-node"},[a("span",{staticClass:"custom-label"},[t._v(t._s(i.label))]),a("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-warning"},on:{click:function(){return t.append(l)}}})],1)}}])})],1),t._m(3),a("div",{staticClass:"col-md-4"},[t._m(4),a("div",{staticClass:"row"},t._l(t.teamData,function(e){return a("div",{key:e.id,staticClass:"m-5",staticStyle:{float:"left"}},[a("div",{staticClass:"text-center",staticStyle:{width:"100px",height:"150px","border-radius":"5px","background-color":"#F2F2F2"}},[a("img",{staticStyle:{height:"50px"}}),a("p",[t._v(t._s(e.name))]),a("p",[t._v(t._s(1===e.type?"队长":"队员"))]),a("p",{style:{color:1===e.state?"green":""}},[t._v(t._s(1===e.state?"已完成":"未完成"))])])])}),0)])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-6"},[a("div",{staticClass:"text-left"},[a("h3",[t._v("项目执行")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8 col-md-offset-2"},[a("div",{staticClass:"row p-5",staticStyle:{"box-shadow":"4px 4px 10px #8c8c8c","background-color":"white"}},[a("div",{staticStyle:{float:"left",width:"20%","text-align":"center"}},[a("a",{attrs:{href:"task-execute.html"}},[t._v("执行任务")])]),a("div",{staticStyle:{float:"left",width:"20%","text-align":"center"}},[a("a",{attrs:{href:"project-task-review.html"}},[t._v("任务单")])]),a("div",{staticStyle:{float:"left",width:"20%","text-align":"center"}},[a("a",[t._v("日报任务")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{padding:"8px","background-color":"#DDDDDD"}},[a("h4",[t._v("开发阶段和任务")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-5"},[a("div",{staticStyle:{padding:"8px","background-color":"#393C49",color:"white"}},[a("h4",[t._v("开发任务详情")])]),a("div",{staticClass:"p-5",staticStyle:{"background-color":"#FCFCFC"}},[a("div",[a("i",{staticClass:"el-icon-house mr-2"}),a("span",{staticStyle:{"font-family":"inherit","font-weight":"800","line-height":"1.1",color:"inherit"}},[t._v("任务名称：")]),a("span",[t._v("编码与调试")])]),a("div",{staticClass:"mt-3"},[a("i",{staticClass:"el-icon-house mr-2"}),a("span",{staticStyle:{"font-family":"inherit","font-weight":"800","line-height":"1.1",color:"inherit"}},[t._v("任务描述：")]),a("p",{staticClass:"ml-4"},[t._v("编码人员依据《详细设计报告》的内容，遵循编码规范的要求对设计元素进行编码实现和调试")])]),a("div",{staticClass:"mt-3"},[a("i",{staticClass:"el-icon-house mr-2"}),a("span",{staticStyle:{"font-family":"inherit","font-weight":"800","line-height":"1.1",color:"inherit"}},[t._v("任务要求：")]),a("p",{staticClass:"ml-4"},[t._v("按照详细设计要求完成编码、调试工作。调试代码中的调试代码应在调试后删除")])]),a("div",{staticClass:"mt-3"},[a("i",{staticClass:"el-icon-house mr-2"}),a("span",{staticStyle:{"font-family":"inherit","font-weight":"800","line-height":"1.1",color:"inherit"}},[t._v("视频教程：")]),a("h5",[t._v("编程联系")]),a("ul",{staticStyle:{"list-style-type":"decimal"}},[a("li",{staticStyle:{color:"green"}},[a("span",[t._v("全局样式")]),a("i",{staticClass:"el-icon-circle-check ml-3"})]),a("li",{staticStyle:{color:"green"}},[a("span",[t._v("强调内容")]),a("i",{staticClass:"el-icon-circle-check ml-3"})]),a("li",[a("span",[t._v("无序列表、有序列表")]),a("i",{staticClass:"el-icon-circle-check ml-3"})]),a("li",[a("span",[t._v("弹出框--弹出框增加过渡动画效果")]),a("i",{staticClass:"el-icon-circle-check ml-3"})])])]),a("div",{staticClass:"mt-3 text-center"},[a("a",{staticClass:"btn btn-primary"},[t._v("去编程")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row",staticStyle:{padding:"8px 8px 0 8px","background-color":"#EEEEEE"}},[a("div",{staticStyle:{float:"left"}},[a("h4",{staticStyle:{"padding-bottom":"8px",color:"green"}},[t._v("队友进行状态")]),a("div",{staticStyle:{"margin-left":"-8px","margin-right":"-8px","border-bottom":"2px solid green"}})]),a("div",{staticStyle:{float:"left"}},[a("h4",{staticClass:"ml-5",staticStyle:{"padding-bottom":"8px"}},[t._v("咨询助教")])])])}],n={name:"app",data(){return{teamData:[{id:1,name:"张三",type:1,state:1},{id:2,name:"张三",type:0,state:1},{id:3,name:"张三",type:0,state:1},{id:4,name:"张三",type:0,state:0}],stepData:[{label:"任务前评测",children:[{label:"能力调查评测"}]},{label:"项目策划"},{label:"需求分析"},{label:"架构设计"},{label:"模块概要设计"},{label:"模块详细设计"},{label:"阶段评审"},{label:"编码",children:[{label:"编码准备"},{label:"编码与调试"}]},{label:"单元测试"},{label:"系统验收"},{label:"项目进阶"},{label:"附加阶段"},{label:"任务后评测"}]}},methods:{clickStep(t){console.log(t),console.log(t)}}},c=n,r=(a("a3a2"),a("2877")),o=Object(r["a"])(c,l,s,!1,null,"e11654b6",null),d=o.exports;a("7378"),a("16b4"),a("346c"),a("1e3b"),a("3a10"),a("87c5"),a("0cb1");new i["default"]({render:t=>t(d)}).$mount("#app")},a1bb:function(t,e,a){},a3a2:function(t,e,a){"use strict";var i=a("a1bb"),l=a.n(i);l.a}});
//# sourceMappingURL=task-execute.af9685ec.js.map