webpackJsonp([1],{NHnr:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t("7+uW"),o=t("Xxa5"),a=t.n(o),i=t("exGp"),s=t.n(i),c=t("uXeI"),u=t.n(c),l=t("mtWM"),d=t.n(l),p={name:"acc",data:function(){return{email:"",pwnedSummary:"",requestPending:!1,isSubmitted:!1,includeUnverified:!1,breaches:[]}},methods:{validateEmail:function(){return!!(this.email=this.email.trim())},getURL:function(){var n="https://haveibeenpwned.com/api/v2/breachedaccount/"+this.email;return this.includeUnverified&&(n+="?includeUnverified=true"),n},getImageURL:function(n){return"https://haveibeenpwned.com/Content/Images/PwnedLogos/"+n.Name+"."+n.LogoType},toggleIncludeUnverified:function(){this.includeUnverified=!this.includeUnverified},checkAccount:function(){!this.validateEmail()&&this.requestPending||this.sendRequest()},sendRequest:function(){var n=this;return s()(a.a.mark(function e(){var t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.$glob.api.newLoadingController({content:"Fetching breach details..."});case 2:(t=e.sent).present(),n.requestPending=!0,d.a.get(n.getURL()).then(function(e){n.breaches=e.data,n.buildPwnedSummary()}).catch(function(e){n.breaches=[],404===e.response.status?n.buildPwnedSummary():n.pwnedSummary="Oops something went wrong..."}).finally(function(){n.email="",n.isSubmitted=!0,n.requestPending=!1,t.dismiss()});case 6:case"end":return e.stop()}},e,n)}))()},formatDate:function(n){return(n=new Date(n)).getDate()+" "+["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][n.getMonth()]+" "+n.getFullYear()},buildPwnedSummary:function(){this.breaches.length?this.pwnedSummary="<i>"+this.email+'</i> is\n                    <strong>\n                        <ion-badge color="danger">pwned '+this.breaches.length+" times</ion-badge>\n                    </strong>":this.pwnedSummary="<i>"+this.email+'</i> is\n                <strong>\n                    <ion-badge color="success">NOT pwned</ion-badge>\n                </strong>'}}},h={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ion-page",{staticClass:"ion-page"},[t("ion-header",[t("ion-toolbar",[t("ion-buttons",{attrs:{slot:"start"},slot:"start"},[t("ion-back-button")],1),n._v(" "),t("ion-title",[n._v("Account page")])],1)],1),n._v(" "),t("ion-content",{staticClass:"content",attrs:{padding:""}},[t("ion-list",[t("ion-item",[t("ion-icon",{attrs:{slot:"start",name:"mail"},slot:"start"}),n._v(" "),t("ion-input",{attrs:{type:"email",placehoder:"Email",value:n.email},on:{input:function(e){n.email=e.target.value}}})],1),n._v(" "),t("ion-item",[t("ion-checkbox",{attrs:{checked:n.includeUnverified},on:{change:n.toggleIncludeUnverified}}),n._v(" "),t("ion-label",[n._v("Include Unverified")])],1)],1),n._v(" "),t("ion-button",{attrs:{expand:"full",disabled:!n.validateEmail()},on:{click:n.checkAccount}},[n.requestPending?t("span",[t("ion-spinner")],1):t("span",[n._v("Have I been pwned?")])]),n._v(" "),t("div",[n.isSubmitted?t("ion-card",{attrs:{"no-margin":""}},[t("ion-card-content",[t("p",{attrs:{"text-center":""},domProps:{innerHTML:n._s(n.pwnedSummary)}})])],1):n._e(),n._v(" "),n._l(n.breaches,function(e,r){return t("ion-card",{key:r,attrs:{"no-margin":""}},[t("ion-card-content",[t("ion-card-title",[t("div",{staticClass:"breach-head"},[t("div",{staticClass:"breach-name"},[t("h1",[n._v(n._s(e.Title))])]),n._v(" "),t("div",{staticClass:"breach-image-holder"},[t("img",{attrs:{src:n.getImageURL(e)}})])])]),n._v(" "),t("ion-grid",[t("ion-row",[t("ion-col",[t("ion-item",[t("ion-badge",{attrs:{color:"light"}},[n._v("\n                                        "+n._s(n.formatDate(e.BreachDate))+"\n                                    ")])],1)],1),n._v(" "),t("ion-col",[t("ion-item",[t("ion-icon",{attrs:{name:"people",color:"primary"}}),n._v(" "),t("ion-badge",[n._v("\n                                        "+n._s(e.PwnCount)+"\n                                    ")])],1)],1)],1)],1),n._v(" "),t("p",{domProps:{innerHTML:n._s(e.Description)}})],1)],1)})],2)],1)],1)},staticRenderFns:[]};var v=t("VU/8")(p,h,!1,function(n){t("Osf/")},null,null).exports,m={name:"pwd",data:function(){return{pwd:"",showPwd:!1,requestPending:!1,pwned:!1,count:0}},computed:{pwdType:function(){return this.showPwd?"text":"password"},showPwdText:function(){return this.showPwd?"hide":"show"}},methods:{goToAcc:function(){this.$glob.nav.push(v)},validatePwd:function(){return!!(this.pwd=this.pwd.trim())},togglePwdType:function(){this.showPwd=!this.showPwd},getURL:function(n){return"https://api.pwnedpasswords.com/range/"+n},checkHash:function(){this.validatePwd()&&!this.requestPending&&this.sendRequest()},sendRequest:function(){var n=this;return s()(a.a.mark(function e(){var t,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=u()(n.pwd),e.next=3,n.$glob.api.newLoadingController({content:"Fetching breach details..."});case 3:(r=e.sent).present(),n.requestPending=!0,d.a.get(n.getURL(t.substr(0,5))).then(function(e){n.count=n.search(t.substr(5).toUpperCase(),e.data),n.pwned=n.count>0,n.notify()}).catch(function(n){console.log("Error:",n)}).finally(function(){n.pwd="",n.requestPending=!1,r.dismiss()});case 7:case"end":return e.stop()}},e,n)}))()},search:function(n,e){var t=e.indexOf(n);if(-1===t)return 0;var r=e.indexOf("\n",t);-1===r&&(r=e.substr(t).length);var o=e.substr(t,r-t).split(":");if(2!==o.length)throw new Error("Unexpected data");return o[1]},notify:function(){var n=["Yay!"],e="You are secure, for now...";this.pwned&&(n=["Doh!"],e="You've been pwned across "+this.count+" domains"),this.$glob.api.newAlertController({header:"Beep",subHeader:null,message:e,buttons:n}).then(function(n){return n.present()})}}},w={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ion-page",{staticClass:"ion-page"},[t("ion-header",[t("ion-toolbar",[t("ion-buttons",{attrs:{slot:"start"},slot:"start"},[t("ion-back-button")],1),n._v(" "),t("ion-title",[n._v("Password checking")])],1)],1),n._v(" "),t("ion-content",{staticClass:"content",attrs:{padding:""}},[t("ion-list",[t("ion-item",[t("ion-icon",{directives:[{name:"show",rawName:"v-show",value:!n.showPwd,expression:"!showPwd"}],attrs:{slot:"start",name:"lock"},slot:"start"}),n._v(" "),t("ion-icon",{directives:[{name:"show",rawName:"v-show",value:n.showPwd,expression:"showPwd"}],attrs:{slot:"start",name:"unlock"},slot:"start"}),n._v(" "),t("ion-input",{attrs:{type:n.pwdType,value:n.pwd,placeholder:"Password"},on:{input:function(e){n.pwd=e.target.value}}}),n._v(" "),t("ion-button",{directives:[{name:"show",rawName:"v-show",value:n.pwd,expression:"pwd"}],attrs:{slot:"end",fill:"clear",size:"small"},on:{click:n.togglePwdType},slot:"end"},[n._v("\n                    "+n._s(n.showPwdText)+"\n                ")])],1)],1),n._v(" "),t("ion-button",{attrs:{expand:"full",type:"submit",disabled:!n.validatePwd()},on:{click:n.checkHash}},[n.requestPending?t("span",[t("ion-spinner")],1):t("span",[n._v("Have I been pwned?")])]),n._v(" "),t("ion-button",{on:{click:n.goToAcc}},[n._v("go to account page")])],1)],1)},staticRenderFns:[]};var f=t("VU/8")(m,w,!1,function(n){t("d7nY")},null,null).exports,g={name:"home",methods:{goToAcc:function(){this.$glob.nav.push(v)},goToPwd:function(){this.$glob.nav.push(f)}}},b={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ion-page",{staticClass:"ion-page"},[t("ion-header",[t("ion-toolbar",[t("ion-buttons",{attrs:{slot:"start"},slot:"start"},[t("ion-back-button")],1),n._v(" "),t("ion-title",[n._v("home")])],1)],1),n._v(" "),t("ion-content",{staticClass:"content",attrs:{padding:""}},[t("ion-button",{attrs:{expand:"full",type:"submit"},on:{click:n.goToAcc}},[n._v("\n            Check Account\n        ")]),n._v(" "),t("ion-button",{attrs:{expand:"full",type:"submit"},on:{click:n.goToPwd}},[n._v("\n            Check Password\n        ")])],1)],1)},staticRenderFns:[]};var _=t("VU/8")(g,b,!1,function(n){t("zMlu")},null,null).exports,P=t("//Fk"),y=t.n(P),x=t("BO1k"),k=t.n(x);var C={attachViewToDom:function(n,e,t,o){var a,i=document.createElement(function(n){return n.classList.contains("modal-wrapper")}(a=n)||function(n){return"ION-NAV"===n.tagName.toUpperCase()}(a)?"ion-page":"div");n.appendChild(i);var s=(new(r.a.extend(e))).$mount(i);if(o){var c=!0,u=!1,l=void 0;try{for(var d,p=k()(o);!(c=(d=p.next()).done);c=!0){var h=d.value;s.$el.classList.add(h)}}catch(n){u=!0,l=n}finally{try{!c&&p.return&&p.return()}finally{if(u)throw l}}}return y.a.resolve(s.$el)},removeViewFromDom:function(n,e){return e.hasOwnProperty("__vue__")&&e.__vue__.$destroy(),n.removeChild(e),y.a.resolve()}};var U={newNavController:function(n){var e=this;return s()(a.a.mark(function t(){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T("ion-nav","ion-app");case 2:return(r=e.sent).root=n,e.abrupt("return",r);case 5:case"end":return e.stop()}},t,e)}))()},newAlertController:function(n){var e=this;return s()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.newAbstractController("ion-alert-controller",n));case 1:case"end":return t.stop()}},t,e)}))()},newLoadingController:function(n){var e=this;return s()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.newAbstractController("ion-loading-controller",n));case 1:case"end":return t.stop()}},t,e)}))()},newAbstractController:function(n,e){var t=this;return s()(a.a.mark(function r(){var o;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T(n);case 2:return o=t.sent,t.next=5,o.create(e);case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}},r,t)}))()}};function T(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"body",t=function(n,e){var t=void 0;if(t=document.querySelector(n))return t;return e.appendChild(document.createElement(n))}(n,document.querySelector(e));return t.delegate=C,t.componentOnReady()}var q={api:U,nav:U.newNavController(_).then(function(n){return q.nav=n}),install:function(){Object.defineProperty(r.a.prototype,"$glob",{get:function(){return q}})}};r.a.use(q),r.a.config.ignoredElements=[/^ion-/]},"Osf/":function(n,e){},d7nY:function(n,e){},zMlu:function(n,e){}},["NHnr"]);
//# sourceMappingURL=app.c12ca1f590c3dfa4a60e.js.map