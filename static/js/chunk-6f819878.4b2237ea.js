/*!
 *  build: vue-admin-beautiful 
 *  copyright: chuzhixin 1204505056@qq.com 
 *  time: 2020-8-22 13:52:33
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f819878"],{"2ddf":function(e,t,s){"use strict";var r=s("c89e"),o=s.n(r);o.a},"9ed6":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login-container"},["development"!==e.nodeEnv?s("el-alert",{staticStyle:{position:"fixed"},attrs:{title:"beautiful boys and girls欢迎加入vue-admin-beautifulQQ群：972435319",type:"success",closable:!1}}):e._e(),s("el-row",[s("el-col",{attrs:{xs:24,sm:24,md:12,lg:16,xl:16}},[s("div",{staticStyle:{color:"transparent"}},[e._v("占位符")])]),s("el-col",{attrs:{xs:24,sm:24,md:12,lg:8,xl:8}},[s("el-form",{ref:"form",staticClass:"login-form",attrs:{model:e.form,rules:e.rules,"label-position":"left"}},[s("div",{staticClass:"title"},[e._v(" hello ! ")]),s("div",{staticClass:"title-tips"},[e._v("欢迎来到"+e._s(e.title)+"！")]),s("el-form-item",{staticStyle:{"margin-top":"40px"},attrs:{prop:"username"}},[s("span",{staticClass:"svg-container svg-container-admin"},[s("vab-icon",{attrs:{icon:["fas","user"]}})],1),s("el-input",{directives:[{name:"focus",rawName:"v-focus"}],attrs:{placeholder:"请输入用户名",tabindex:"1",type:"text"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username","string"===typeof t?t.trim():t)},expression:"form.username"}})],1),s("el-form-item",{attrs:{prop:"password"}},[s("span",{staticClass:"svg-container"},[s("vab-icon",{attrs:{icon:["fas","lock"]}})],1),s("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,tabindex:"2",placeholder:"请输入密码"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password","string"===typeof t?t.trim():t)},expression:"form.password"}}),"password"===e.passwordType?s("span",{staticClass:"show-password",on:{click:e.handlePassword}},[s("vab-icon",{attrs:{icon:["fas","eye-slash"]}})],1):s("span",{staticClass:"show-password",on:{click:e.handlePassword}},[s("vab-icon",{attrs:{icon:["fas","eye"]}})],1)],1),s("el-button",{staticClass:"login-btn",attrs:{loading:e.loading,type:"primary"},on:{click:e.handleLogin}},[e._v(" 登录 ")]),s("router-link",{attrs:{to:"/register"}},[s("div",{staticStyle:{"margin-top":"20px"}},[e._v("注册")])])],1)],1)],1)],1)},o=[],a=s("61f7"),n={name:"Login",directives:{focus:{inserted:function(e){e.querySelector("input").focus()}}},data:function(){var e=function(e,t,s){""==t?s(new Error("用户名不能为空")):s()},t=function(e,t,s){Object(a["isPassword"])(t)?s():s(new Error("密码不能少于6位"))};return{nodeEnv:"production",title:this.$baseTitle,form:{username:"",password:""},rules:{username:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:t}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect||"/"},immediate:!0}},created:function(){document.body.style.overflow="hidden"},beforeDestroy:function(){document.body.style.overflow="auto"},mounted:function(){var e=this;this.form.username="admin",this.form.password="123456",setTimeout((function(){e.handleLogin()}),3e3)},methods:{handlePassword:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this;this.$refs.form.validate((function(t){if(!t)return!1;e.loading=!0,e.$store.dispatch("user/login",e.form).then((function(){var t="/404"===e.redirect||"/401"===e.redirect?"/":e.redirect;e.$router.push(t).catch((function(){})),e.loading=!1})).catch((function(){e.loading=!1}))})),setTimeout((function(){window.open("https://github.com/chuzhixin/vue-admin-beautiful")}),1e5)}}},i=n,l=(s("2ddf"),s("9ca4")),c=Object(l["a"])(i,r,o,!1,null,"2afb1e6a",null);t["default"]=c.exports},c89e:function(e,t,s){}}]);