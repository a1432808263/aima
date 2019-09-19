(function(t){function e(e){for(var o,i,n=e[0],s=e[1],c=e[2],u=0,p=[];u<n.length;u++)i=n[u],r[i]&&p.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);m&&m(e);while(p.length)p.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var t,e=0;e<l.length;e++){for(var a=l[e],o=!0,n=1;n<a.length;n++){var s=a[n];0!==r[s]&&(o=!1)}o&&(l.splice(e--,1),t=i(i.s=a[0]))}return t}var o={},r={"team-search":0},l=[];function i(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(){return Promise.resolve()},i.m=t,i.c=o,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(a,o,function(e){return t[e]}.bind(null,o));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],s=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var m=s;l.push([37,"chunk-vendors","chunk-common"]),a()})({"0b0b":function(t,e,a){},"2e40":function(t,e,a){"use strict";var o=a("0b0b"),r=a.n(o);r.a},37:function(t,e,a){t.exports=a("75a4")},"75a4":function(t,e,a){"use strict";a.r(e);var o=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container-fluid",staticStyle:{padding:"unset"}},[a("Header",{attrs:{school:"东北大学"}}),a("ProjectTitle",{attrs:{data:t.projectInfo}}),a("TeamTab",{staticStyle:{display:"none"},attrs:{data:t.tabData,"active-index":1}}),a("div",{staticClass:"container"},[a("div",{staticClass:"bar"},[a("div",{staticClass:"title"},[t._v("加入团队")]),a("el-form",{staticClass:"demo-form-inline pull-right",attrs:{inline:!0}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"团队名称或队长姓名"},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}},[a("i",{staticClass:"iconfont iconqitasousuo",attrs:{slot:"suffix"},on:{click:t.loadData},slot:"suffix"})])],1),a("el-form-item",{staticStyle:{display:"none"}},[a("el-button",{staticClass:"pull-left",attrs:{type:"primary"},on:{click:t.ifOwnTeam}},[t._v("我的团队")])],1),!0===t.canCompeleteTeam?a("el-form-item",[a("el-button",{staticClass:"pull-left",attrs:{type:"primary"},on:{click:t.createTeam}},[t._v("我要组队")])],1):a("el-form-item",[a("a",{attrs:{title:"您目前有申请的团队或被其他团队邀请，不能创建组队！"}},[a("el-button",{staticClass:"pull-left",attrs:{type:"primary",disabled:""}},[t._v("我要组队")])],1)])],1)],1),t.teamData.length>0?a("div",{staticClass:"main"},t._l(t.teamData,function(e){return a("div",{key:e.id,staticClass:"team-box"},[a("div",{staticClass:"logo",style:{backgroundImage:"url("+e.logoPath+")"}}),a("div",{staticClass:"name"},[t._v(t._s(e.teamName))]),a("div",{staticClass:"count"},[t._v("当前人数 "+t._s(e.currentMemberCount)+"人")]),1===e.joinStatus?a("el-button",{on:{click:function(a){return t.goTeam(e)}}},[t._v("已加入")]):t._e(),0===e.joinType&&0===e.joinStatus?a("el-button",{attrs:{type:"primary"},on:{click:function(a){return t.goTeam(e)}}},[t._v("已被邀请")]):t._e(),1===e.joinType&&0===e.joinStatus?a("el-button",{on:{click:function(a){return t.goTeam(e)}}},[t._v("已申请")]):t._e(),0===e.joinType&&0===e.applicableTeamStatus&&-1===e.joinStatus?a("el-button",{on:{click:function(a){return t.goTeam(e)}}},[t._v("已拒绝")]):t._e(),1===e.joinType&&0===e.applicableTeamStatus&&-1===e.joinStatus?a("el-button",{on:{click:function(a){return t.goTeam(e)}}},[t._v("已被拒绝")]):t._e(),-1===e.joinType&&1!==e.applicableTeamStatus?a("el-button",{attrs:{type:"primary"},on:{click:function(a){return t.goTeam(e)}}},[t._v("申请加入")]):t._e()],1)}),0):t._e(),0===t.teamData.length?a("div",{staticClass:"main",staticStyle:{overflow:"auto"}},[a("div",{staticStyle:{width:"100%",height:"200px","line-height":"200px","text-align":"center","text-decoration":"underline"}},[t._v("暂无可加入的团队")])]):t._e()])],1),a("el-dialog",{attrs:{title:"创建团队",visible:t.createTeamDialogVisible,width:"468px",center:""},on:{"update:visible":function(e){t.createTeamDialogVisible=e}}},[a("div",{staticClass:"content"},[a("el-form",{ref:"createTeamForm",attrs:{model:t.createTeamForm,"label-width":"90px"}},[a("div",{staticClass:"head-portrait",style:{backgroundImage:"url("+t.createTeamForm.logoUrl+")"}},[a("div",{staticClass:"model",on:{click:function(e){return t.$refs.headPortrait.click()}}},[t._v("上传头像")]),a("input",{ref:"headPortrait",staticStyle:{display:"none"},attrs:{type:"file",name:"fileUpload"},on:{change:function(e){return t.uploadPhoto(e)}}})]),a("el-form-item",{staticClass:"mt-5",attrs:{label:"团队名称："}},[a("el-input",{model:{value:t.createTeamForm.name,callback:function(e){t.$set(t.createTeamForm,"name",e)},expression:"createTeamForm.name"}})],1),a("el-form-item",{attrs:{label:"团队人数："}},[t.projectInfo.minCount&&t.projectInfo.maxCount?a("span",[t._v(t._s(t.projectInfo.minCount)+"-"+t._s(t.projectInfo.maxCount)+"人")]):t._e()])],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{staticStyle:{width:"198px"},attrs:{type:"primary"},on:{click:t.createTeamSave}},[t._v("保存")])],1)])],1)},l=[],i=a("10df"),n=a("c80e"),s=a("d148"),c={components:{Header:i["a"],ProjectTitle:n["a"],TeamTab:s["a"]},name:"app",mounted(){this.loadData()},data(){return{projectInfo:{},createTeamDialogVisible:!1,createTeamForm:{logoUrl:"/img/default-head.a8298c57.png",name:""},searchKey:"",canCompeleteTeam:!0,tabData:[{name:"选择项目",url:"course-detail.html"},{name:"组队",url:"team-search.html"},{name:"任务裁剪",url:""},{name:"人员管理",url:""}],teamData:[]}},methods:{loadData(){this.loadProjectInfo(),this.loadTeamList()},loadTeamList(){let t=this,e=localStorage.getItem("projectId"),a=localStorage.getItem("courseId"),o=localStorage.getItem("grade");this.$http.post("/teambuild/queryapplicableteamlist",{courseId:a,grade:o,projectId:e,teamOrLeaderName:t.searchKey.trim()},e=>{if(e.success){t.teamData=e.data;for(var a=0;a<t.teamData.length;a++)if(-1!==t.teamData[a].joinType&&0===t.teamData[a].joinStatus){t.canCompeleteTeam=!1;break}}})},loadProjectInfo(){let t=this,e=localStorage.getItem("projectId"),a=localStorage.getItem("courseId");this.$http.post("/teambuild/queryprojectinfo",{projectId:e,courseId:a},e=>{e.success&&(t.projectInfo=e.data,t.projectInfo.courseName=localStorage.getItem("courseName"))})},ifOwnTeam(){this.$http.post("/teambuild/queryteaminfoforleader",{},t=>{t.success&&(window.location="team-my.html")})},createTeam(){this.createTeamDialogVisible=!this.createTeamDialogVisible},createTeamSave(){let t=this,e=localStorage.getItem("projectId"),a=localStorage.getItem("courseId"),o=localStorage.getItem("grade"),r=this.createTeamForm.name.trim();if(null==r||""===r||void 0===r)return this.$alert("团队名称不能为空","提示",{confirmButtonText:"确定"}),!1;this.$http.post("/teambuild/buildteam",{logoUrl:this.createTeamForm.logoUrl,teamName:this.createTeamForm.name,courseId:a,projectId:e,grade:o},e=>{e.success&&(t.createTeamDialogVisible=!1,window.location="team-my.html")})},applyJoin(t){localStorage.setItem("teamId",t),window.location="team-view.html"},uploadPhoto(t){let e=this,a=t.target.files[0],o=new FormData;o.append("file",a),this.$http.uploadFile("/teambuild/uploadimgforteam",o,t=>{t.success&&(e.$alert("上传成功！","提示",{confirmButtonText:"确定"}),e.createTeamForm.logoUrl=t.data)})},goTeam(t){localStorage.setItem("teamId",t.teamId),localStorage.setItem("myJoinType",t.joinType),localStorage.setItem("myJoinStatus",t.joinStatus),window.location="team-view.html"}}},m=c,u=(a("2e40"),a("2877")),p=Object(u["a"])(m,r,l,!1,null,"74bd76be",null),d=p.exports,f=(a("7378"),a("16b4"),a("346c"),a("1e3b"),a("3a10"),a("87c5"),a("0cb1"),a("4dcb"),a("751a")),h=a("52f1"),g=a("bc3a"),b=a.n(g);o["default"].prototype.$http=f["a"],o["default"].prototype.$axios=b.a,o["default"].prototype.$baseUrl=h["a"],new o["default"]({render:t=>t(d)}).$mount("#app")}});
//# sourceMappingURL=team-search.ba7b4a82.js.map