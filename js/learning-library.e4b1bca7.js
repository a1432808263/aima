(function(t){function a(a){for(var r,i,o=a[0],n=a[1],c=a[2],d=0,u=[];d<o.length;d++)i=o[d],s[i]&&u.push(s[i][0]),s[i]=0;for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);p&&p(a);while(u.length)u.shift()();return l.push.apply(l,c||[]),e()}function e(){for(var t,a=0;a<l.length;a++){for(var e=l[a],r=!0,i=1;i<e.length;i++){var n=e[i];0!==s[n]&&(r=!1)}r&&(l.splice(a--,1),t=o(o.s=e[0]))}return t}var r={},s={"learning-library":0},l=[];function i(t){return o.p+"js/"+({pdfjsWorker:"pdfjsWorker"}[t]||t)+"."+{pdfjsWorker:"24e2b1dd"}[t]+".js"}function o(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.e=function(t){var a=[],e=s[t];if(0!==e)if(e)a.push(e[2]);else{var r=new Promise(function(a,r){e=s[t]=[a,r]});a.push(e[2]=r);var l,n=document.createElement("script");n.charset="utf-8",n.timeout=120,o.nc&&n.setAttribute("nonce",o.nc),n.src=i(t),l=function(a){n.onerror=n.onload=null,clearTimeout(c);var e=s[t];if(0!==e){if(e){var r=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+l+")");i.type=r,i.request=l,e[1](i)}s[t]=void 0}};var c=setTimeout(function(){l({type:"timeout",target:n})},12e4);n.onerror=n.onload=l,document.head.appendChild(n)}return Promise.all(a)},o.m=t,o.c=r,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)o.d(e,r,function(a){return t[a]}.bind(null,r));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/",o.oe=function(t){throw console.error(t),t};var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=a,n=n.slice();for(var d=0;d<n.length;d++)a(n[d]);var p=c;l.push([30,"chunk-vendors","chunk-common"]),e()})({30:function(t,a,e){t.exports=e("cfcd")},"3b84":function(t,a,e){t.exports=e.p+"img/word.bc120942.png"},"9a4d":function(t,a,e){"use strict";var r=e("f1fe"),s=e.n(r);s.a},"9ec7":function(t,a,e){"use strict";var r=e("c77d"),s=e.n(r);s.a},c77d:function(t,a,e){},cfcd:function(t,a,e){"use strict";e.r(a);var r=e("2b0e"),s=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"container-fluid",staticStyle:{padding:"unset"}},[r("Header",{attrs:{img:"",school:"Go语言实战抽奖系统"}})],1),r("div",{staticClass:"tap"},[r("HorizontalTap",{staticClass:"center",staticStyle:{"padding-left":"100px"},attrs:{data:t.data2,active:3}})],1),t.pdfFlg?r("PDF",{attrs:{"pdf-url":t.pdfUrl}}):t._e(),r("div",{staticClass:"col-md-10 col-md-offset-1 mt-6"},[r("el-tabs",{staticClass:"mb-4",attrs:{type:"border-card"},model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[r("el-tab-pane",{attrs:{name:"project"}},[r("span",{attrs:{slot:"label"},slot:"label"},[r("i",{staticClass:"el-icon-connection"}),t._v(" 项目相关指导材料")]),r("div",{staticClass:"row mb-5"},[r("div",{staticClass:"col-md-12 col-xs-12 pl-6 mt-4"},[r("div",{staticClass:"row"},[r("span",{staticClass:"line"}),r("span",[t._v("学习视频")])]),r("div",{staticClass:"row mt-4"},t._l(t.videoList,function(a,s){return r("div",{key:s,staticClass:"col-md-2 text-center",on:{click:function(e){return t.gotoVideo(a)}}},[r("img",{staticClass:"video-img",attrs:{src:e("bee5")}}),r("a",{staticClass:"font-small"},[t._v(t._s(a.materialName))])])}),0),r("div",{staticClass:"row mt-6"},[r("span",{staticClass:"line"}),r("span",[t._v("文档模板")])]),r("div",{staticClass:"row mt-4"},t._l(t.docList,function(a,s){return r("div",{key:s,staticClass:"col-md-2 text-center",on:{click:function(e){return t.gotoPDF(a)}}},[r("img",{staticClass:"video-img",attrs:{src:e("3b84")}}),r("a",{staticClass:"font-small"},[t._v(t._s(a.materialName))])])}),0)])])]),r("el-tab-pane",{attrs:{name:"all"}},[r("span",{attrs:{slot:"label"},slot:"label"},[r("i",{staticClass:"el-icon-tickets"}),t._v(" 知识点学习材料")]),t._l(t.materialTypes,function(a,e){return r("div",{key:e,staticClass:"row mt-3 mb-3"},[r("div",{staticClass:"col-md-4 col-sm-6 col-xs-12 pull-left pl-4 pr-4"},[r("div",{staticClass:"swiper-container",class:[{java_bg:"Java"==a.name}],staticStyle:{height:"296px"}},[r("div",{staticClass:"pic_left pl-6"},[r("h3",{staticClass:"font-bold"},[t._v(t._s(a.name))]),r("p",[t._v(t._s(a.describes))])]),r("img",{attrs:{src:a.imageUrl}})])]),r("div",{staticClass:"col-md-8 col-xs-12 pull-left"},[r("div",{staticClass:"java_tit mb-4"},[r("span",[t._v(t._s(a.name)+"教程")]),r("span",{staticClass:"pull-right",staticStyle:{color:"#000000",background:"#ffffff","margin-top":"1px"}},[t._v("More"),r("i",{staticClass:"el-icon-caret-right"})])]),t._l(a.materialsDetail,function(e,s){return r("div",{key:s,staticClass:"row pl-4 pr-5"},[r("span",{staticClass:"pull-left java_color"},[t._v("["+t._s(a.name)+"]")]),r("a",{staticClass:"ml-3",attrs:{href:e.materialUrl,target:"_blank"}},[t._v(t._s(e.materialName))]),r("a",{staticClass:"pull-right font-small",attrs:{href:e.materialUrl,target:"_blank"}},[t._v("查看详情")])])})],2)])})],2)],1)],1)],1)},l=[],i=e("10df"),o=e("ba6c"),n=e("3a2d"),c={name:"app",components:{Header:i["a"],HorizontalTap:o["a"],PDF:n["a"]},mounted(){this.loadData()},methods:{loadData(){let t=this;t.projectId=localStorage.getItem("projectId"),t.$http.post("/doproject/materialsInfoByProject",{sourceType:0,projectId:t.projectId},a=>{if(a.success){for(var e=0;e<a.data.length;e++)1===a.data[e].materialType?t.videoList.push(a.data[e]):0===a.data[e].materialType&&t.docList.push(a.data[e]);t.$http.post("/doproject/materialsInfoByCommunity",{sourceType:1},a=>{console.log(a),t.materialTypes=a.data})}})},gotoVideo(t){localStorage.setItem("materialVideo",t.materialUrl),localStorage.setItem("materialId",t.id),localStorage.setItem("materialName",t.materialName),window.open("video-player.html","_blank")},gotoPDF(t){this.pdfFlg=!1,this.$nextTick(()=>{this.pdfUrl=t.materialUrl,this.pdfFlg=!0})}},data(){return{activeName:"project",projectId:"",hotSearch:["VUE","SpringMVC","Jquery","SpringBoot"],materialSearch:"",materialTypes:["Java","Web/H5","C++"],videoList:[],docList:[],data2:[{name:"执行任务",url:"task-list.html",type:"_self"},{name:"任务单",url:"work-order.html",type:"_self"},{name:"日报任务",url:"daily-tasks.html",type:"_self"},{name:"相关资料",url:"learning-library.html",type:"_blank"},{name:"成长轨迹",url:"growth-locus.html",type:"_self"}],pdfFlg:!1,pdfUrl:""}}},d=c,p=(e("9a4d"),e("9ec7"),e("2877")),u=Object(p["a"])(d,s,l,!1,null,"789a697a",null),f=u.exports,m=(e("7378"),e("3a10"),e("16b4"),e("346c"),e("1e3b"),e("87c5"),e("4dcb"),e("751a"));r["default"].prototype.$http=m["a"],new r["default"]({render:t=>t(f)}).$mount("#app")},f1fe:function(t,a,e){}});
//# sourceMappingURL=learning-library.e4b1bca7.js.map