(function(e){function t(t){for(var o,i,a=t[0],l=t[1],c=t[2],p=0,f=[];p<a.length;p++)i=a[p],s[i]&&f.push(s[i][0]),s[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);d&&d(t);while(f.length)f.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],o=!0,a=1;a<r.length;a++){var l=r[a];0!==s[l]&&(o=!1)}o&&(n.splice(t--,1),e=i(i.s=r[0]))}return e}var o={},s={"forget-pwd":0},n=[];function i(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(){return Promise.resolve()},i.m=e,i.c=o,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(r,o,function(t){return e[t]}.bind(null,o));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var d=l;n.push([9,"chunk-vendors","chunk-common"]),r()})({2424:function(e,t,r){"use strict";var o=r("7be5"),s=r.n(o);s.a},"547d":function(e,t,r){"use strict";r.r(t);var o=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"container-fluid"},[r("Header"),r("hr",{staticStyle:{border:"none"}}),r("div",{staticClass:"row mt-5 student-reg"},[r("div",{},[r("div",{staticClass:"main-title"},[e._v("忘记密码")]),r("div",{staticClass:"row mt-6",staticStyle:{"margin-top":"50px"}},[r("div",{staticClass:"center-block",staticStyle:{width:"300px"}},[r("div",{staticClass:"row text-center"},[r("el-form",{ref:"form",staticClass:"center-block mt-3",attrs:{model:e.form,rules:e.rules,"show-message":!0}},[r("el-form-item",{attrs:{prop:"phone"}},[r("el-input",{attrs:{placeholder:"请输入11位手机号",autocomplete:"off",maxlength:"11"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),r("el-form-item",{attrs:{prop:"verify"}},[r("el-input",{staticStyle:{width:"220px"},attrs:{placeholder:"验证码",autocomplete:"off",maxlength:"6"},model:{value:e.form.verify,callback:function(t){e.$set(e.form,"verify",t)},expression:"form.verify"}}),r("el-popover",{ref:"verifyCodePopover",attrs:{placement:"right",trigger:"click"}},[r("slide-verify",{ref:"slideVerify",attrs:{l:42,r:10,w:310,h:155,sliderText:"请向右滑动",setNum:60},on:{success:e.onSuccess,fail:e.onFail,refresh:e.onRefresh,changeNum:e.change}}),e.canGetVerify?e._e():r("el-button",{staticClass:"verifycode el-button",attrs:{slot:"reference",disabled:""},slot:"reference"},[e._v(e._s(e.verifyCodeText))]),e.canGetVerify?r("el-button",{staticClass:"verifycode el-button",attrs:{slot:"reference",disabled:e.countdownshow},slot:"reference"},[r("span",{directives:[{name:"show",rawName:"v-show",value:!e.countdownshow,expression:"!countdownshow"}]},[e._v(e._s(e.verifyCodeText))]),r("span",{directives:[{name:"show",rawName:"v-show",value:e.countdownshow,expression:"countdownshow"}]},[e._v(e._s(e.countdown)+"s")])]):e._e()],1)],1),r("el-form-item",{attrs:{prop:"pwd"}},[r("el-input",{attrs:{placeholder:"设置密码",autocomplete:"off","show-password":"",maxlength:"20"},model:{value:e.form.pwd,callback:function(t){e.$set(e.form,"pwd",t)},expression:"form.pwd"}})],1),r("div",{directives:[{name:"show",rawName:"v-show",value:""!=this.form.pwd,expression:"this.form.pwd != ''"}],staticClass:"row",staticStyle:{width:"330px",margin:"unset"}},[r("div",{staticClass:"pull-right",staticStyle:{display:"flex"}},[r("div",{class:0!=e.level?"level-color":"",staticStyle:{width:"41px",height:"5px",background:"#E8E8E8","border-radius":"3px","margin-right":"5px","margin-bottom":"16px"}}),r("div",{class:2==e.level||3==e.level?"level-color":"",staticStyle:{width:"41px",height:"5px",background:"#E8E8E8","border-radius":"3px","margin-right":"5px","margin-bottom":"16px"}}),r("div",{class:3==e.level?"level-color":"",staticStyle:{width:"41px",height:"5px",background:"#E8E8E8","border-radius":"3px","margin-bottom":"16px","margin-right":"10px"}})])]),r("el-form-item",{attrs:{prop:"pwd"}},[r("el-input",{attrs:{placeholder:"确认密码","show-password":"",maxlength:"20"},model:{value:e.form.pwd2,callback:function(t){e.$set(e.form,"pwd2",t)},expression:"form.pwd2"}})],1)],1)],1),r("div",{staticClass:"row mt-6",staticStyle:{"margin-top":"50px"}},[r("div",{staticClass:"btn btn-block reg-btn",on:{click:function(t){return e.resetPwd("form")}}},[e._v("重置密码")])])])])])]),r("Footer")],1)])},n=[],i=r("a748"),a=r("e819"),l={name:"app",components:{Header:i["a"],Footer:a["a"]},data(){var e=(e,t,r)=>{if(""===t)r(new Error("请输入手机号"));else{if(""!==this.form.phone){var o=/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;o.test(this.form.phone)||r(new Error("手机号格式不正确"))}r()}},t=(e,t,r)=>{this.form.phone=t.replace(/[^\d]/g,""),r()},r=(e,t,r)=>{this.form.verify=t.replace(/[^\d]/g,""),r()},o=(e,t,r)=>{""===t?r(new Error("请输入密码")):(""!==this.form.pwd2&&this.form.pwd2!==this.form.pwd&&r(new Error("两次密码输入必须一致！")),r())},s=(e,t,r)=>{var o=/^(\w){6,20}$/;o.exec(t)||r(new Error("只能输入6-20个字母、数字、下划线 "))};return{msg:"",level:"",canGetVerify:"",verifyCodeText:"获取验证码",interval:null,countdown:"",countdownshow:!1,form:{phone:"",verify:"",pwd:"",pwd2:""},rules:{phone:[{min:11,max:11,message:"手机号长度应为11位",trigger:"blur"},{validator:e,trigger:"blur"},{validator:t,trigger:"change"}],verify:[{validator:r,trigger:"change"},{required:!0,message:"请输入短信验证码",trigger:"blur"}],pwd:[{validator:o,trigger:"blur"},{validator:s,trigger:"change"}],pwd2:[{required:!0,message:"请输入确认密码",trigger:"blur"}]}}},computed:{},watch:{"form.pwd":{deep:!0,handler:function(){var e=this.form.pwd,t=/\d/,r=/[a-zA-Z]/,o=/\W/,s=0;t.test(e)&&s++,r.test(e)&&s++,o.test(e)&&s++,this.level=s}},"form.phone":{deep:!0,handler:function(){var e=/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;null!==this.form.phone&&void 0!==this.form.phone&&e.test(this.form.phone)?this.canGetVerify=!0:this.canGetVerify=!1}}},methods:{onSuccess(){let e=this;function t(){e.$message("验证成功,请注意查收短信。"),e.countdown=60,e.countdownshow=!0,e.interval=setInterval(()=>{e.countdown--,e.countdown<=0&&(e.verifyCodeText="重新发送",e.countdownshow=!1,clearInterval(e.interval))},1e3)}e.$refs["verifyCodePopover"].doClose(),e.$refs.slideVerify.reset(),this.$http.post("/user/vcfraudprevent",{},r=>{r.success&&e.$http.post("/user/sendsmsverificationcode",{phone:e.form.phone,msgType:"register",sign:r.data.sign},e=>{e.success&&t()})})},onFail(){this.msg=""},onRefresh(){console.log("ok----")},change(e){console.log("num",e)},resetPwd(e){let t=this;this.$refs[e].validate(e=>{if(!e)return console.log("error submit!!"),!1;t.$http.post("/user/resetpassword",{userCellphone:t.form.phone,userPassword:t.form.pwd,smsVerificationCode:t.form.verify},e=>{e.success&&(window.location="login.html")})})},checkPhone(){if(null===this.form.phone||void 0===this.form.phone)return this.$alert("提示","手机号不能为空！"),!1;var e=/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;return e.test(this.form.phone)?void 0:(this.$alert("提示","手机号格式错误！"),!1)}}},c=l,d=(r("2424"),r("76c1"),r("2877")),p=Object(d["a"])(c,s,n,!1,null,"63078f6c",null),f=p.exports,u=(r("7378"),r("3a10"),r("26a0")),h=r("751a");o["default"].prototype.$http=h["a"],o["default"].use(u["a"]),new o["default"]({render:e=>e(f)}).$mount("#app")},"76c1":function(e,t,r){"use strict";var o=r("fc82"),s=r.n(o);s.a},"7be5":function(e,t,r){},9:function(e,t,r){e.exports=r("547d")},fc82:function(e,t,r){}});
//# sourceMappingURL=forget-pwd.f4879552.js.map