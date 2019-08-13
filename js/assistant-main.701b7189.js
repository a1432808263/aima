(function(t){function s(s){for(var e,o,i=s[0],r=s[1],l=s[2],p=0,u=[];p<i.length;p++)o=i[p],c[o]&&u.push(c[o][0]),c[o]=0;for(e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e]);m&&m(s);while(u.length)u.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,s=0;s<n.length;s++){for(var a=n[s],e=!0,i=1;i<a.length;i++){var r=a[i];0!==c[r]&&(e=!1)}e&&(n.splice(s--,1),t=o(o.s=a[0]))}return t}var e={},c={"assistant-main":0},n=[];function o(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(){return Promise.resolve()},o.m=t,o.c=e,o.d=function(t,s,a){o.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,s){if(1&s&&(t=o(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)o.d(a,e,function(s){return t[s]}.bind(null,e));return a},o.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(s,"a",s),s},o.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=s,i=i.slice();for(var l=0;l<i.length;l++)s(i[l]);var m=r;n.push([0,"chunk-vendors","chunk-common"]),a()})({0:function(t,s,a){t.exports=a("c2ba")},"0b35":function(t,s,a){"use strict";var e=a("ddcd"),c=a.n(e);c.a},b157:function(t,s,a){},c2ba:function(t,s,a){"use strict";a.r(s);var e=a("2b0e"),c=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container-fluid",staticStyle:{padding:"unset"}},[a("Header",{attrs:{img:"",school:"Go语言实战抽奖系统"}}),t._m(0),a("div",{staticClass:"row",staticStyle:{background:"rgba(255,255,255,1)","box-shadow":"0px 3px 15px 0px rgba(0, 0, 0, 0.08)",height:"59px","line-height":"59px"}},[a("div",{staticClass:"col-md-1 col-md-offset-2",staticStyle:{cursor:"pointer"},on:{click:function(s){return t.changePractical("school")}}},[a("span",{staticClass:"col-sm-12 text-center font-tab",class:"school"==t.practicalSelect?"active-font-color":""},[t._v("校园实训")]),a("span",{staticClass:"col-sm-4 col-sm-offset-4 text-center",class:"school"==t.practicalSelect?"active-bg-color":"",staticStyle:{height:"2px","border-radius":"1px"}})]),a("div",{staticClass:"col-md-1",staticStyle:{cursor:"pointer"},on:{click:function(s){return t.changePractical("company")}}},[a("span",{staticClass:"col-sm-12 text-center font-tab",class:"company"==t.practicalSelect?"active-font-color":""},[t._v("企业实训")]),a("span",{staticClass:"col-sm-4 col-sm-offset-4 text-center",class:"company"==t.practicalSelect?"active-bg-color":"",staticStyle:{height:"2px","border-radius":"1px"}})])]),a("div",{staticClass:"row pt-4 mt-3"},[a("div",{staticClass:"col-md-6 col-md-offset-2 "},t._l(t.projectList,function(s){return a("div",{key:s.facultyId,staticClass:"col-md-12 pl-0 pr-0 project-info mt-2 mb-3",class:[s.isfocus?"active-tip":"unactive-tip"],on:{mouseover:function(a){return t.changeFocusStatus(s)},mouseout:function(a){return t.changeFocusStatus(s)}}},[a("div",{staticClass:"col-md-3 text-center"},[a("img",{staticStyle:{"margin-top":"28px",width:"90px",height:"90px","border-radius":"50%"},attrs:{src:s.logoPath}})]),a("div",{staticClass:"col-md-9",on:{click:function(a){return t.gotoProjectList(s.schoolId,s.facultyId)}}},[a("span",{staticClass:"col-sm-12",staticStyle:{height:"18px","font-size":"18px","font-family":"PingFang-SC-Bold","font-weight":"bold",color:"rgba(51,51,51,1)","margin-top":"28px"}},[t._v(t._s(s.schoolName)+"/"+t._s(s.facultyName))]),0!==s.overtimeTask?a("span",{staticClass:"tip text-center",staticStyle:{border:"1px solid #FF4C55","border-radius":"10px"}},[a("i",{staticClass:"iconfont icongantanhao",staticStyle:{color:"#FF4C55"}}),a("span",{staticStyle:{color:"#FF4C55","font-size":"12px","margin-left":"8px"}},[t._v("即将超时任务："+t._s(s.overtimeTask)+"项")])]):t._e(),a("span",{staticClass:"col-sm-2 text-left practical-number"},[t._v(t._s(s.studentNum))]),a("span",{staticClass:"col-sm-2 text-left practical-number"},[t._v(t._s(s.projectNum))]),a("span",{staticClass:"col-sm-2 text-left practical-number"},[t._v(t._s(s.noncommentNum))]),a("span",{staticClass:"col-sm-6 text-left practical-number"},[t._v(t._s(s.answerquestionNum))]),a("span",{staticClass:"col-sm-2 text-left practical-name"},[t._v("学生数")]),a("span",{staticClass:"col-sm-2 text-left practical-name"},[t._v("项目数")]),a("span",{staticClass:"col-sm-2 text-left practical-name"},[t._v("待点评")]),a("span",{staticClass:"col-sm-6 text-left practical-name",staticStyle:{border:"none"}},[t._v("Q&A")])])])}),0),a("div",{staticClass:"col-md-2 assistant-info ml-4 pl-0 pr-0"},[t._m(1),a("div",{staticClass:"col-md-12  pl-0 pr-0 text-center"},[a("img",{staticStyle:{width:"91px",height:"91px","border-radius":"50%","margin-top":"27px"},attrs:{src:t.assistantImg}})]),a("span",{staticClass:"col-md-12 text-center mt-4"},[t._v(t._s(t.assistantName))]),t._m(2),a("span",{staticClass:"col-md-10 col-md-offset-1 text-center mt-4",staticStyle:{"font-size":"14px","font-family":"PingFang-SC-Medium","font-weight":"500",color:"rgba(102,102,102,1)"}},[t._v("累计积分：3950")]),a("span",{staticClass:"col-md-12 text-center mt-5 practical-name",staticStyle:{border:"none"}},[t._v("截止上次登录时间：2019-02-08  09:09:16")]),a("span",{staticClass:"col-md-12 mt-3",staticStyle:{height:"1px",background:"rgba(235,235,235,1)"}}),a("div",{staticClass:"col-md-12 mt-2"},[a("div",{staticClass:"col-md-4 mt-3"},[a("span",{staticClass:" practical-name col-md-12 pr-0 ",staticStyle:{border:"none"}},[t._v("项目点评")]),a("span",{staticClass:" ass-number col-md-12 text-center"},[t._v(t._s(t.commentProjectNum))])]),a("div",{staticClass:"col-md-4 mt-3"},[a("span",{staticClass:" practical-name col-md-12 pr-0 ",staticStyle:{border:"none"}},[t._v("答疑人数")]),a("span",{staticClass:" ass-number col-md-12 text-center"},[t._v(t._s(t.answerNum))])]),a("div",{staticClass:"col-md-4 mt-3"},[a("span",{staticClass:" practical-name col-md-12 pr-0 ",staticStyle:{border:"none"}},[t._v("任务点评")]),a("span",{staticClass:" ass-number col-md-12 text-center"},[t._v(t._s(t.commentMissonNum))])])])])])],1)])},n=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row top-main"},[a("div",{staticClass:"col-md-8 col-md-offset-2 mt-2"},[a("i",{staticClass:"iconfont iconxuexirenshu",staticStyle:{color:"white"}}),a("span",{staticStyle:{color:"white","font-size":"18px","font-family":"PingFang-SC-Medium","font-weight":"500","margin-left":"10px"}},[t._v("助教中心")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"ass-set"},[a("a",{attrs:{href:"assistant-set.html"}},[t._v("个人设置")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"col-md-4 col-md-offset-4 text-center mt-4",staticStyle:{height:"17px","line-height":"17px",background:"rgba(255,150,0,1)","border-radius":"9px"}},[a("i",{staticClass:"iconfont iconjinpai",staticStyle:{color:"yellow",float:"left","margin-left":"-8px"}}),a("span",{staticStyle:{"font-size":"6px","font-family":"PingFang-SC-Medium","font-weight":"500",color:"rgba(255,255,255,1)"}},[t._v("金牌助教")])])}],o=a("8af6"),i={name:"app",components:{Header:o["a"]},mounted(){this.loadData()},data(){return{assistantName:"",commentProjectNum:"",assistantImg:"../../../assets/img/assistant_bg.png",answerNum:"",commentMissonNum:"",practicalSelect:"school",projectList:[{isfocus:!1}]}},methods:{loadData(){let t=this;t.$http.post("/assistant/firstpage",{token:localStorage.getItem("token")},s=>{if(s.success){for(var a=0;a<s.data.initproject.length;a++)s.data.initproject[a].isfocus=!1;t.projectList=s.data.initproject,t.assistantName=s.data.initmsg.assistantName,t.commentProjectNum=s.data.initmsg.commentProjectNum,t.answerNum=s.data.initmsg.answerNum,t.commentMissonNum=s.data.initmsg.commentMissionNum,t.assistantImg=s.data.initmsg.assistantNamePhotoUrl}})},changePractical(t){if("company"===t)return this.$alert("暂未开放！"),!1;this.practicalSelect=t},gotoProjectList(t,s){window.location="project-list.html?schoolId="+t+"&facultId="+s},changeFocusStatus(t){t.isfocus=!t.isfocus},personalSet(){window.location="assistant-set.html"}}},r=i,l=(a("0b35"),a("da29"),a("2877")),m=Object(l["a"])(r,c,n,!1,null,"3143b4dc",null),p=m.exports,u=(a("7378"),a("3a10"),a("751a"));a("4dcb");e["default"].prototype.$http=u["a"],new e["default"]({render:t=>t(p)}).$mount("#app")},da29:function(t,s,a){"use strict";var e=a("b157"),c=a.n(e);c.a},ddcd:function(t,s,a){}});
//# sourceMappingURL=assistant-main.701b7189.js.map