(function(t){function e(e){for(var a,i,l=e[0],s=e[1],c=e[2],p=0,d=[];p<l.length;p++)i=l[p],r[i]&&d.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={example:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(){return Promise.resolve()},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=s;o.push([10,"chunk-vendors","chunk-common"]),n()})({"083e":function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"six"}),n("div",{staticStyle:{"margin-top":"100px","font-weight":"bold","margin-bottom":"100px"}},[t._v("\n      >>>>>>>>>>>>>>>>>>>>>>>>>>>>上传文件到服务器: "),n("input",{ref:"inputFile",attrs:{type:"file",name:"fileUpload",id:"fileUp"},on:{change:function(e){return t.changeFile(e)}}})]),n("VerticalTap",{staticStyle:{width:"200px"},attrs:{data:t.data1}}),n("HorizontalTap",{staticStyle:{"margin-top":"20px"},attrs:{data:t.data2}}),t._m(0),n("button",{on:{click:t.looklook}},[t._v("查看视频")]),t._m(1),n("div",{staticClass:"kkk"})],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"test"},[t._v("123"),n("div",{staticClass:"test-in"},[t._v("456")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("video",{attrs:{width:"320",height:"240",id:"video1",controls:"",controlsList:"nodownload"}},[n("source",{attrs:{src:"http://139.129.119.220/video/ProjectBackground.mp4",type:"video/mp4"}})])}],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vertical-tap"},[n("ul",t._l(t.data,function(e){return n("li",{key:e.name,class:e.active?"active":""},[n("a",{directives:[{name:"href",rawName:"v-href",value:e.url,expression:"obj.url"}]},[t._v(t._s(e.name))]),e.active?n("span",{staticClass:"current"}):t._e()])}),0)])},l=[],s={name:"VerticalTap",props:{data:Array}},c=s,u=(n("e242"),n("2877")),p=Object(u["a"])(c,i,l,!1,null,"451ddf4b",null),d=p.exports,f=n("ba6c"),v={name:"app",components:{VerticalTap:d,HorizontalTap:f["a"]},mounted(){},data(){return{data1:[{name:"个人资料",url:"",active:!0},{name:"账户管理",url:""}],data2:[{name:"等级",url:""},{name:"编程积分",url:"",active:!0},{name:"实战积分",url:""}]}},methods:{looklook(){window.open("http://139.129.119.220/video/ProjectBackground.mp4","_blank","height=300, width=400, top=200,left=200 toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no")},changeFile(t){let e=this,n=t.target.files[0],a=new FormData;a.append("file",n),a.append("teamid","0"),a.append("stepid","0"),e.$prompt("请输入限制级密码口令","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^111\d{3}$/,inputErrorMessage:"口令不正确"}).then(({value:t})=>{e.$http.uploadFile("/doproject/output/upload",a,t=>{t.success&&(console.log(t.data),alert("上传成功了奥"))})}).catch(()=>{this.$message({type:"info",message:"取消输入"})})}}},m=v,h=(n("db1d"),Object(u["a"])(m,r,o,!1,null,"07bd452b",null)),b=h.exports,g=(n("7378"),n("49f4"),n("3a10"),n("751a")),y=n("bc3a"),_=n.n(y);a["default"].prototype.$axios=_.a,a["default"].prototype.$http=g["a"],new a["default"]({render:t=>t(b)}).$mount("#app")},10:function(t,e,n){t.exports=n("083e")},ba72:function(t,e,n){},db1d:function(t,e,n){"use strict";var a=n("ba72"),r=n.n(a);r.a},e242:function(t,e,n){"use strict";var a=n("e454"),r=n.n(a);r.a},e454:function(t,e,n){}});
//# sourceMappingURL=example.31e15551.js.map