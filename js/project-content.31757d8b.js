(function(e){function t(t){for(var i,n,o=t[0],u=t[1],l=t[2],m=0,d=[];m<o.length;m++)n=o[m],a[n]&&d.push(a[n][0]),a[n]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);c&&c(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],i=!0,o=1;o<s.length;o++){var u=s[o];0!==a[u]&&(i=!1)}i&&(r.splice(t--,1),e=n(n.s=s[0]))}return e}var i={},a={"project-content":0},r=[];function n(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=i,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var c=u;r.push([16,"chunk-vendors","chunk-common"]),s()})({16:function(e,t,s){e.exports=s("3243")},3243:function(e,t,s){"use strict";s.r(t);var i=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"container-fluid"},[e._m(0),s("div",{staticClass:"row"},[s("div",{staticClass:"row mt-5 mb-5"},[s("el-steps",{attrs:{active:1,"align-center":""}},[s("el-step",{attrs:{title:"Step 1",description:"选择项目"}}),s("el-step",{attrs:{title:"Step 2",description:"组队"},nativeOn:{click:function(t){return e.goPage("project-group.html")}}}),s("el-step",{attrs:{title:"Step 3",description:"任务裁剪"}}),s("el-step",{attrs:{title:"Step 4",description:"人员管理"}})],1)],1),e._m(1),e._m(2)])])])},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-6"},[s("div",{staticClass:"text-left"},[s("h3",[e._v("项目立项")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-md-8 col-md-offset-2",staticStyle:{"z-index":"101"}},[s("div",{staticClass:"mt-5 p-5",staticStyle:{"border-radius":"45px","box-shadow":"4px 4px 10px #8c8c8c","background-color":"white"}},[s("h4",[e._v("Go语言实战抽奖系统")]),s("p",[e._v("功课业务、技术重点难点，开发设计高性能、高并发、灵活、可靠的服务系统。")]),s("span",[e._v("难度 中级 ")]),s("span",{staticClass:"ml-3 mr-3"},[e._v("|")]),s("span",[e._v(" 时长120小时 ")]),s("span",{staticClass:"ml-3 mr-3"},[e._v("|")]),s("span",[e._v(" 学习人数 120人")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-md-10 col-md-offset-1 mr-5 p-5",staticStyle:{"background-color":"#F2F2F2","z-index":"100","margin-top":"-70px"}},[s("div",{staticClass:"row",staticStyle:{"margin-top":"90px"}},[s("div",{staticClass:"col-xs-6 text-right"},[s("a",{staticStyle:{color:"red"},attrs:{href:""}},[e._v("案例介绍")])]),s("div",{staticClass:"col-xs-6 text-left"},[s("a",{attrs:{href:""}},[e._v("任务目录")])])]),s("div",{staticClass:"mt-5",staticStyle:{border:"15px solid #CCCCCC",height:"300px"}}),s("p",{staticClass:"mt-5"},[e._v("\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.\n        ")]),s("p",[e._v("\n          orem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget\n        ")]),s("p",[e._v("\n          orem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget\n        ")])])}],n={name:"app",methods:{goPage(e){window.location=e}}},o=n,u=(s("b313"),s("2877")),l=Object(u["a"])(o,a,r,!1,null,"5476acb4",null),c=l.exports;s("7378"),s("49f4");new i["default"]({render:e=>e(c)}).$mount("#app")},a975:function(e,t,s){},b313:function(e,t,s){"use strict";var i=s("a975"),a=s.n(i);a.a}});
//# sourceMappingURL=project-content.31757d8b.js.map