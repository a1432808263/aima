(function(e){function t(t){for(var o,n,a=t[0],l=t[1],c=t[2],f=0,p=[];f<a.length;f++)n=a[f],s[n]&&p.push(s[n][0]),s[n]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],o=!0,a=1;a<r.length;a++){var l=r[a];0!==s[l]&&(o=!1)}o&&(i.splice(t--,1),e=n(n.s=r[0]))}return e}var o={},s={"reg-student":0},i=[];function n(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.e=function(){return Promise.resolve()},n.m=e,n.c=o,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var d=l;i.push([19,"chunk-vendors","chunk-common"]),r()})({"00ff":function(e,t,r){"use strict";r.r(t);var o=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"container-fluid"},[r("Header"),r("hr",{staticStyle:{border:"none"}}),r("div",{staticClass:"row mt-5 student-reg"},[e._m(0),r("div",{staticClass:"col-6 text-center pr-7"},[r("div",{staticClass:"main-title"},[e._v("学生注册")]),r("div",{staticClass:"row mt-5"},[r("div",{staticClass:"center-block",staticStyle:{width:"300px"}},[r("div",{staticClass:"row text-center"},[r("el-form",{ref:"form",staticClass:"mt-3",attrs:{model:e.form,rules:e.rules,"show-message":!0}},[r("el-form-item",{attrs:{prop:"phone"}},[r("el-input",{attrs:{placeholder:"请输入11位手机号",maxlength:"11"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),r("el-form-item",{attrs:{prop:"verify"}},[r("el-input",{staticStyle:{width:"210px"},attrs:{placeholder:"验证码",maxlength:"6"},model:{value:e.form.verify,callback:function(t){e.$set(e.form,"verify",t)},expression:"form.verify"}}),r("el-popover",{attrs:{placement:"right",trigger:"click"}},[e.slideflg?r("slide-verify",{attrs:{l:42,r:10,w:310,h:155,sliderText:"请向右滑动",setNum:60},on:{success:e.onSuccess,fail:e.onFail,refresh:e.onRefresh,changeNum:e.change}}):e._e(),r("div",[e._v(e._s(e.msg))]),e.canGetVerify?e._e():r("el-button",{staticClass:"verifycode el-button",attrs:{slot:"reference",disabled:""},slot:"reference"},[e._v(e._s(e.verifyCodeText))]),e.canGetVerify?r("el-button",{staticClass:"verifycode el-button",attrs:{slot:"reference",disabled:e.countdownshow},slot:"reference"},[r("span",{directives:[{name:"show",rawName:"v-show",value:!e.countdownshow,expression:"!countdownshow"}]},[e._v(e._s(e.verifyCodeText))]),r("span",{directives:[{name:"show",rawName:"v-show",value:e.countdownshow,expression:"countdownshow"}]},[e._v(e._s(e.countdown)+"s")])]):e._e()],1)],1),r("el-form-item",{attrs:{prop:"pwd"}},[r("el-input",{attrs:{placeholder:"设置密码","show-password":"",maxlength:"20"},model:{value:e.form.pwd,callback:function(t){e.$set(e.form,"pwd",t)},expression:"form.pwd"}})],1),r("div",{directives:[{name:"show",rawName:"v-show",value:""!=this.form.pwd,expression:"this.form.pwd != ''"}],staticClass:"row",staticStyle:{width:"330px",margin:"unset"}},[r("div",{staticClass:"pull-right",staticStyle:{display:"flex"}},[r("div",{class:0!=e.level?"level-color":"",staticStyle:{width:"41px",height:"5px",background:"#E8E8E8","border-radius":"3px","margin-right":"5px","margin-bottom":"16px"}}),r("div",{class:2==e.level||3==e.level?"level-color":"",staticStyle:{width:"41px",height:"5px",background:"#E8E8E8","border-radius":"3px","margin-right":"5px","margin-bottom":"16px"}}),r("div",{class:3==e.level?"level-color":"",staticStyle:{width:"41px",height:"5px",background:"#E8E8E8","border-radius":"3px","margin-bottom":"16px","margin-right":"10px"}})])]),r("el-form-item",{attrs:{prop:"pwd"}},[r("el-input",{attrs:{placeholder:"确认密码","show-password":"",maxlength:"20"},model:{value:e.form.pwd2,callback:function(t){e.$set(e.form,"pwd2",t)},expression:"form.pwd2"}})],1),r("el-form-item",{attrs:{prop:"inviteCode"}},[r("el-input",{attrs:{placeholder:"输入邀请码",maxlength:"11"},model:{value:e.form.inviteCode,callback:function(t){e.$set(e.form,"inviteCode",t)},expression:"form.inviteCode"}})],1)],1),r("el-checkbox",{model:{value:e.form.read,callback:function(t){e.$set(e.form,"read",t)},expression:"form.read"}},[r("span",{staticClass:"clause"},[e._v("我已阅读同意")])]),r("a",{staticClass:"mr-3 clause",staticStyle:{color:"#6612CF"},attrs:{target:"_blank",href:"lying-clause.html"}},[e._v("《砺英网服务条款》")])],1),r("div",{staticClass:"row mt-2 mb-3"},[r("div",{staticClass:"btn btn-block reg-btn",on:{click:function(t){return e.register("form")}}},[e._v("注册")])]),e._m(1)])])])]),r("Footer")],1)])},i=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"col-6 pl-0"},[o("img",{attrs:{src:r("9411"),height:"560"}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row"},[r("div",{staticClass:"text-center clause"},[r("span",[e._v("已有账号？")]),r("a",{staticStyle:{color:"#6612CF"},attrs:{href:"login.html"}},[e._v("去登录")])])])}],n=r("a748"),a=r("e819"),l={name:"app",components:{Header:n["a"],Footer:a["a"]},data(){var e=(e,t,r)=>{if(""===t)r(new Error("请输入手机号"));else{if(""!==this.form.phone){var o=/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;o.test(this.form.phone)||r(new Error("手机号格式不正确"))}r()}},t=(e,t,r)=>{this.form.phone=t.replace(/[^\d]/g,""),r()},r=(e,t,r)=>{this.form.inviteCode=t.replace(/[^\d]/g,""),r()},o=(e,t,r)=>{""===t?r(new Error("请输入密码")):(""!==this.form.pwd2&&this.form.pwd2!==this.form.pwd&&r(new Error("两次密码输入必须一致！")),r())},s=(e,t,r)=>{var o=/^(\w){6,20}$/;o.exec(t)||r(new Error("只能输入6-20个字母、数字、下划线 ")),r()},i=(e,t,r)=>{""===t?r(new Error("请再次输入密码")):t!==this.form.pwd?r(new Error("两次输入密码不一致!")):r()},n=(e,t,r)=>{this.form.verify=t.replace(/[^\d]/g,""),r()};return{slideflg:!0,msg:"",level:"",verifyCodeText:"获取验证码",interval:null,countdown:"",countdownshow:!1,canGetVerify:!1,form:{phone:"",verify:"",pwd:"",pwd2:"",inviteCode:"",read:!1,regValue:""},rules:{phone:[{min:11,max:11,message:"手机号长度应为11位",trigger:"blur"},{validator:e,trigger:"blur"},{validator:t,trigger:"change"}],verify:[{validator:n,trigger:"change"},{required:!0,message:"请输入短信验证码",trigger:"blur"}],pwd:[{validator:o,trigger:"blur"},{validator:s,trigger:"change"}],pwd2:[{validator:i,trigger:"blur"}],inviteCode:[{required:!0,message:"请输入邀请码",trigger:"blur"},{validator:r,trigger:"change"}],read:[{required:!0,message:"请选择",trigger:"blur"}]}}},computed:{},watch:{"form.pwd":{deep:!0,handler:function(){var e=this.form.pwd,t=/\d/,r=/[a-zA-Z]/,o=/\W/,s=0;t.test(e)&&s++,r.test(e)&&s++,o.test(e)&&s++,this.level=s}},"form.phone":{deep:!0,handler:function(){var e=/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;null!==this.form.phone&&void 0!==this.form.phone&&e.test(this.form.phone)?this.canGetVerify=!0:this.canGetVerify=!1}}},methods:{onSuccess(){let e=this;e.$alert("提示","验证成功,请注意查收短信。"),this.msg="",e.reFreshVerify(),this.countdown=60,this.countdownshow=!0,this.interval=setInterval(()=>{this.countdown--,this.countdown<=0&&(this.verifyCodeText="重新发送",this.countdownshow=!1,clearInterval(this.interval),e.reFreshVerify())},1e3),this.$http.post("/user/vcfraudprevent",{},t=>{t.success&&e.$http.post("/user/sendsmsverificationcode",{phone:e.form.phone,msgType:"register",sign:t.data.sign},t=>{t.success||(e.$alert("提示",t.errorMsg),this.verifyCodeText="重新发送",this.countdownshow=!1,clearInterval(this.interval),e.reFreshVerify())})})},reFreshVerify(){this.slideflg=!1,this.slideflg=!0},onFail(){this.msg=""},onRefresh(){console.log("ok----")},change(e){console.log("num",e)},register(e){let t=this;if(!1===this.form.read)return alert("请选择同意条款！"),!1;this.$refs[e].validate(e=>{if(!e)return console.log("error submit!!"),!1;this.$http.post("/user/register",{userCellphone:t.form.phone,userPassword:t.form.pwd,invitationCode:t.form.inviteCode,smsVerificationCode:t.form.verify,userType:"0"},e=>{e.success?t.$alert("注册成功，跳转到登录页","提示",{callback:e=>{t.$http.snspost("/member/register",{phone:t.form.phone,password:t.form.pwd,repassword:t.form.pwd2},e=>{window.location="login.html"})}}):t.$alert(e.errorMsg,"提示",{confirmButtonText:"确定"})})})}}},c=l,d=(r("3276"),r("9a19"),r("2877")),f=Object(d["a"])(c,s,i,!1,null,"c0e140f2",null),p=f.exports,u=(r("7378"),r("3a10"),r("26a0")),h=r("751a");o["default"].prototype.$http=h["a"],o["default"].use(u["a"]),new o["default"]({render:e=>e(p)}).$mount("#app")},19:function(e,t,r){e.exports=r("00ff")},3276:function(e,t,r){"use strict";var o=r("be8c"),s=r.n(o);s.a},"473f":function(e,t,r){},"9a19":function(e,t,r){"use strict";var o=r("473f"),s=r.n(o);s.a},be8c:function(e,t,r){}});
//# sourceMappingURL=reg-student.90b8dc15.js.map