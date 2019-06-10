(function(e){function t(t){for(var o,i,l=t[0],s=t[1],c=t[2],u=0,d=[];u<l.length;u++)i=l[u],r[i]&&d.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(t);while(d.length)d.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],o=!0,l=1;l<a.length;l++){var s=a[l];0!==r[s]&&(o=!1)}o&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var o={},r={"team-view":0},n=[];function i(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(){return Promise.resolve()},i.m=e,i.c=o,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(a,o,function(t){return e[t]}.bind(null,o));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var m=s;n.push([30,"chunk-vendors","chunk-common"]),a()})({30:function(e,t,a){e.exports=a("8e93")},"40e7":function(e,t,a){"use strict";var o=a("d8f6"),r=a.n(o);r.a},"8e93":function(e,t,a){"use strict";a.r(t);var o=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container-fluid"},[a("Header",{attrs:{school:"东北大学"}}),a("ProjectTitle",{attrs:{data:e.projectInfo}}),a("TeamTab",{attrs:{data:e.tabData,"active-index":1}}),a("div",{staticClass:"container"},[a("div",{staticClass:"bar"},[a("div",{staticClass:"title"},[e._v(e._s(e.teamInfo.teamName))]),a("el-form",{staticClass:"demo-form-inline pull-right",attrs:{inline:!0}},[a("el-form-item",[a("span",[e._v(" 当前人数 ")]),a("span",[e._v(e._s(e.teamInfo.currentMemberCount)+"人")]),a("span",[e._v(" 申请人数 ")]),a("span",[e._v(e._s(e.teamInfo.applyMemberCount)+"人")])]),a("el-form-item",[1!==e.teamInfo.joinStatus?a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.applyJoin(e.teamInfo.teamId)}}},[e._v("申请加入")]):a("el-button",[e._v("已申请")])],1),a("el-form-item",[a("el-button",{on:{click:e.goBack}},[e._v("返回")])],1)],1)],1),a("div",{staticClass:"main"},[a("div",{staticClass:"member-list"},e._l(e.teamInfo.memberList,function(t){return a("div",{key:t.userCode,staticClass:"box member-box"},[a("div",{staticClass:"name"},[e._v(e._s(t.userName))]),a("div",{staticClass:"position"},[e._v(e._s("leader"===t.teamRole?"队长":"队员"))]),a("div",{staticClass:"head-portrait"})])}),0)])])],1),a("el-dialog",{attrs:{title:"创建团队",visible:e.createTeamDialogVisible,width:"468px",center:""},on:{"update:visible":function(t){e.createTeamDialogVisible=t}}},[a("div",{staticClass:"content"},[a("el-form",{ref:"createTeamForm",attrs:{model:e.createTeamForm,"label-width":"90px"}},[a("div",{staticClass:"head-portrait"},[a("div",{staticClass:"model",on:{click:function(t){return e.$refs.headPortrait.click()}}},[e._v("上传头像")]),a("input",{ref:"headPortrait",staticStyle:{display:"none"},attrs:{type:"file",name:"fileUpload"},on:{change:function(t){return e.uploadPhoto(t)}}})]),a("el-form-item",{staticClass:"mt-5",attrs:{label:"团队名称："}},[a("el-input",{model:{value:e.createTeamForm.name,callback:function(t){e.$set(e.createTeamForm,"name",t)},expression:"createTeamForm.name"}})],1),a("el-form-item",{attrs:{label:"团队人数："}},[e.projectInfo.minCount&&e.projectInfo.maxCount?a("span",[e._v(e._s(e.projectInfo.minCount)+"-"+e._s(e.projectInfo.maxCount)+"人")]):e._e()])],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{staticStyle:{width:"198px"},attrs:{type:"primary"},on:{click:e.createTeamSave}},[e._v("保存")])],1)])],1)},n=[],i=a("10df"),l=a("c80e"),s=a("d148"),c={components:{Header:i["a"],ProjectTitle:l["a"],TeamTab:s["a"]},name:"app",mounted(){this.loadData()},data(){return{projectInfo:{},createTeamDialogVisible:!1,createTeamForm:{logoUrl:"",name:""},searchKey:"",tabData:[{name:"选择项目",url:"course-detail.html"},{name:"组队",url:"team-search.html"},{name:"任务裁剪",url:""},{name:"人员管理",url:""}],teamInfo:{},teamData:[]}},methods:{goBack(){history.back()},loadData(){this.loadTeamInfo()},loadTeamInfo(){let e=this,t=localStorage.getItem("teamId");this.$http.post("/teambuild/queryteaminfoformember",{teamId:t},t=>{t.success&&(e.teamInfo=t.data)})},loadProjectInfo(){let e=this,t=localStorage.getItem("projectId"),a=localStorage.getItem("courseId");this.$http.post("/teambuild/queryprojectinfo",{projectId:t,courseId:a},t=>{t.success&&(e.projectInfo=t.data,e.projectInfo.courseName=localStorage.getItem("courseName"))})},createTeam(){this.createTeamDialogVisible=!this.createTeamDialogVisible},createTeamSave(){let e=this,t=localStorage.getItem("projectId"),a=localStorage.getItem("courseId"),o=localStorage.getItem("grade");this.$http.post("/teambuild/buildteam",{logoUrl:this.createTeamForm.logoUrl,teamName:this.createTeamForm.name,courseId:a,projectId:t,grade:o},t=>{t.success&&(e.createTeamDialogVisible=!1,window.location="team-my.html")})},applyJoin(e){let t=this;this.$http.post("/teambuild/applyjointeam",{teamId:e},e=>{e.success&&(this.$message("已提交申请"),t.loadData())})},uploadPhoto(e){console.log(1);let t=this,a=e.target.files[0],o=new FormData;o.append("file",a),this.$http.uploadFile("/teambuild/uploadimgforteam",o,e=>{e.success&&(t.$message("上传成功"),t.createTeamForm.logoUrl=e.data)})},goTeam(e){localStorage.setItem("teamId",e),window.location="team-view.html"}}},m=c,u=(a("40e7"),a("2877")),d=Object(u["a"])(m,r,n,!1,null,"bb7e4730",null),p=d.exports,f=(a("7378"),a("16b4"),a("346c"),a("1e3b"),a("3a10"),a("87c5"),a("0cb1"),a("751a"));o["default"].prototype.$http=f["a"],new o["default"]({render:e=>e(p)}).$mount("#app")},d8f6:function(e,t,a){}});
//# sourceMappingURL=team-view.52e7b201.js.map