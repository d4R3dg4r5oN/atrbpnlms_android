(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{jnyO:function(e,t,n){"use strict";n.r(t),n.d(t,"CoreLoginCredentialsPageModule",(function(){return D}));var o=n("tyNb"),i=n("L3Fv"),r=n("mrSG"),s=n("3Pt+"),c=n("7o/Q"),a=n("D0XW");class DebounceTimeOperator{constructor(e,t){this.dueTime=e,this.scheduler=t}call(e,t){return t.subscribe(new debounceTime_DebounceTimeSubscriber(e,this.dueTime,this.scheduler))}}class debounceTime_DebounceTimeSubscriber extends c.a{constructor(e,t,n){super(e),this.dueTime=t,this.scheduler=n,this.debouncedSubscription=null,this.lastValue=null,this.hasValue=!1}_next(e){this.clearDebounce(),this.lastValue=e,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(dispatchNext,this.dueTime,this))}_complete(){this.debouncedNext(),this.destination.complete()}debouncedNext(){if(this.clearDebounce(),this.hasValue){const{lastValue:e}=this;this.lastValue=null,this.hasValue=!1,this.destination.next(e)}}clearDebounce(){const e=this.debouncedSubscription;null!==e&&(this.remove(e),e.unsubscribe(),this.debouncedSubscription=null)}}function dispatchNext(e){e.debouncedNext()}var l=n("nvXB"),g=n("9+EE"),d=n("3LXp"),u=n("mv9v"),h=n("BaYo"),m=n("j3ag"),_=n("fjkH"),p=n("pHTc"),C=n("4reR"),f=n("fXoL"),P=n("TEn/"),b=n("ACYt"),O=n("3CSS"),M=n("nt/U"),v=n("PgjG"),w=n("ofXK"),k=n("hMzs"),S=n("lqoc"),E=n("sYmb");const L=["credentialsForm"];function CoreLoginCredentialsPage_img_17_Template(e,t){if(1&e&&f.zc(0,"img",22),2&e){const e=f.Oc();f.Vc("src",e.logoUrl,f.id)}}function CoreLoginCredentialsPage_img_18_Template(e,t){1&e&&f.zc(0,"img",23)}function CoreLoginCredentialsPage_h3_19_Template(e,t){if(1&e&&(f.Ec(0,"h3",24),f.zc(1,"core-format-text",25),f.Dc()),2&e){const e=f.Oc();f.lc(1),f.Vc("text",e.siteName)("filter",!1)}}function CoreLoginCredentialsPage_ion_item_24_Template(e,t){1&e&&(f.Ec(0,"ion-item"),f.Ec(1,"ion-label",26),f.pd(2),f.Pc(3,"translate"),f.Dc(),f.zc(4,"ion-input",27),f.Pc(5,"translate"),f.Dc()),2&e&&(f.lc(2),f.qd(f.Qc(3,2,"core.login.username")),f.lc(2),f.Wc("placeholder",f.Qc(5,4,"core.login.username")))}function CoreLoginCredentialsPage_ion_item_25_Template(e,t){1&e&&(f.Ec(0,"ion-item",28),f.Ec(1,"ion-label",26),f.pd(2),f.Pc(3,"translate"),f.Dc(),f.Ec(4,"core-show-password",29),f.zc(5,"ion-input",30),f.Pc(6,"translate"),f.Dc(),f.Dc()),2&e&&(f.lc(2),f.qd(f.Qc(3,3,"core.login.password")),f.lc(3),f.Wc("placeholder",f.Qc(6,5,"core.login.password")),f.Vc("clearOnEdit",!1))}function CoreLoginCredentialsPage_ng_container_30_Template(e,t){if(1&e){const e=f.Fc();f.Cc(0),f.Ec(1,"div",31),f.pd(2),f.Pc(3,"translate"),f.Dc(),f.Ec(4,"ion-button",32),f.Mc("click",(function CoreLoginCredentialsPage_ng_container_30_Template_ion_button_click_4_listener(){f.fd(e);return f.Oc().showInstructionsAndScanQR()})),f.zc(5,"ion-icon",33),f.pd(6),f.Pc(7,"translate"),f.Dc(),f.Bc()}2&e&&(f.lc(2),f.qd(f.Qc(3,2,"core.login.or")),f.lc(4),f.rd(" ",f.Qc(7,4,"core.scanqr")," "))}function CoreLoginCredentialsPage_ion_button_31_Template(e,t){if(1&e){const e=f.Fc();f.Ec(0,"ion-button",34),f.Mc("click",(function CoreLoginCredentialsPage_ion_button_31_Template_ion_button_click_0_listener(){f.fd(e);return f.Oc().forgottenPassword()})),f.pd(1),f.Pc(2,"translate"),f.Dc()}2&e&&(f.lc(1),f.rd(" ",f.Qc(2,1,"core.login.forgotten")," "))}function CoreLoginCredentialsPage_ion_list_32_ion_button_6_Template(e,t){if(1&e){const e=f.Fc();f.Ec(0,"ion-button",39),f.Mc("click",(function CoreLoginCredentialsPage_ion_list_32_ion_button_6_Template_ion_button_click_0_listener(){f.fd(e);const n=t.$implicit;return f.Oc(2).oauthClicked(n)})),f.zc(1,"img",40),f.Ec(2,"ion-label"),f.pd(3),f.Dc(),f.Dc()}if(2&e){const e=t.$implicit;f.mc("aria-label",e.name),f.lc(1),f.Vc("src",e.iconurl,f.id),f.lc(2),f.qd(e.name)}}function CoreLoginCredentialsPage_ion_list_32_Template(e,t){if(1&e&&(f.Ec(0,"ion-list",35),f.Ec(1,"ion-item",36),f.Ec(2,"ion-label"),f.Ec(3,"h3",37),f.pd(4),f.Pc(5,"translate"),f.Dc(),f.Dc(),f.Dc(),f.nd(6,CoreLoginCredentialsPage_ion_list_32_ion_button_6_Template,4,3,"ion-button",38),f.Dc()),2&e){const e=f.Oc();f.lc(4),f.qd(f.Qc(5,2,"core.login.potentialidps")),f.lc(2),f.Vc("ngForOf",e.identityProviders)}}function CoreLoginCredentialsPage_ion_list_33_ion_item_6_Template(e,t){if(1&e&&(f.Ec(0,"ion-item",36),f.Ec(1,"ion-label"),f.Ec(2,"p"),f.zc(3,"core-format-text",25),f.Dc(),f.Dc(),f.Dc()),2&e){const e=f.Oc(2);f.lc(3),f.Vc("text",e.authInstructions)("filter",!1)}}function CoreLoginCredentialsPage_ion_list_33_Template(e,t){if(1&e){const e=f.Fc();f.Ec(0,"ion-list",41),f.Ec(1,"ion-item",36),f.Ec(2,"ion-label"),f.Ec(3,"h3",37),f.pd(4),f.Pc(5,"translate"),f.Dc(),f.Dc(),f.Dc(),f.nd(6,CoreLoginCredentialsPage_ion_list_33_ion_item_6_Template,4,2,"ion-item",42),f.Ec(7,"ion-button",43),f.Mc("click",(function CoreLoginCredentialsPage_ion_list_33_Template_ion_button_click_7_listener(){f.fd(e);return f.Oc().openEmailSignup()})),f.pd(8),f.Pc(9,"translate"),f.Dc(),f.Dc()}if(2&e){const e=f.Oc();f.lc(4),f.qd(f.Qc(5,3,"core.login.firsttime")),f.lc(2),f.Vc("ngIf",e.authInstructions),f.lc(2),f.rd(" ",f.Qc(9,5,"core.login.startsignup")," ")}}let x=(()=>{class CoreLoginCredentialsPage{constructor(e){this.fb=e,this.siteChecked=!1,this.pageLoaded=!1,this.isBrowserSSO=!1,this.isFixedUrlSet=!1,this.showForgottenPassword=!0,this.showScanQR=!1,this.eventThrown=!1,this.viewLeft=!1}ngOnInit(){return Object(r.a)(this,void 0,void 0,(function*(){try{this.siteUrl=p.a.getRequiredRouteParam("siteUrl"),this.siteName=p.a.getRouteParam("siteName"),this.logoUrl=!h.a.CONFIG.forceLoginLogo&&p.a.getRouteParam("logoUrl")||void 0,this.siteConfig=p.a.getRouteParam("siteConfig"),this.urlToOpen=p.a.getRouteParam("urlToOpen")}catch(e){return d.a.showErrorModal(e),p.a.back()}this.credForm=this.fb.group({username:[p.a.getRouteParam("username")||"",s.F.required],password:["",s.F.required]}),this.siteConfig&&this.treatSiteConfig(),this.isFixedUrlSet=u.a.isFixedUrlSet(),this.isFixedUrlSet||!this.siteConfig?this.checkSite(this.siteUrl,!0):(this.siteChecked=!0,this.pageLoaded=!0),l.a.isIOS()&&(this.valueChangeSubscription=this.credForm.valueChanges.pipe(function debounceTime(e,t=a.a){return n=>n.lift(new DebounceTimeOperator(e,t))}(1e3)).subscribe((e=>{var t,n;if(!this.formElement||!this.formElement.nativeElement)return;const o=this.formElement.nativeElement.querySelector('input[name="username"]'),i=this.formElement.nativeElement.querySelector('input[name="password"]'),r=null==o?void 0:o.value,s=null==i?void 0:i.value;void 0!==r&&r!==e.username&&(null===(t=this.credForm.get("username"))||void 0===t?void 0:t.setValue(r)),void 0!==s&&s!==e.password&&(null===(n=this.credForm.get("password"))||void 0===n||n.setValue(s))})))}))}checkSite(e,t=!1){var n;return Object(r.a)(this,void 0,void 0,(function*(){this.pageLoaded=!1;const o=0===e.indexOf("http://")?"http://":void 0;try{const i=yield g.b.checkSite(e,o);if(this.siteChecked=!0,this.siteUrl=i.siteUrl,this.siteConfig=i.config,this.treatSiteConfig(),u.a.isSSOLoginNeeded(i.code)){if(this.isBrowserSSO=!0,this.showScanQR&&t)return;l.a.isSSOAuthenticationOngoing()||this.viewLeft||u.a.confirmAndOpenBrowserForSSOLogin(i.siteUrl,i.code,i.service,null===(n=i.config)||void 0===n?void 0:n.launchurl)}else this.isBrowserSSO=!1}catch(e){d.a.showErrorModal(e)}finally{this.pageLoaded=!0}}))}treatSiteConfig(){if(this.siteConfig){this.siteName=h.a.CONFIG.sitename?h.a.CONFIG.sitename:this.siteConfig.sitename,this.logoUrl=u.a.getLogoUrl(this.siteConfig),this.authInstructions=this.siteConfig.authinstructions||m.M.instant("core.login.loginsteps"),this.showScanQR=u.a.displayQRInCredentialsScreen(this.siteConfig.tool_mobile_qrcodetype);const e=u.a.getDisabledFeatures(this.siteConfig);this.identityProviders=u.a.getValidIdentityProviders(this.siteConfig,e),this.canSignup="email"==this.siteConfig.registerauth&&!u.a.isEmailSignupDisabled(this.siteConfig,e),this.showForgottenPassword=!u.a.isForgottenPasswordDisabled(this.siteConfig,e),this.eventThrown||this.viewLeft||(this.eventThrown=!0,_.b.trigger(_.b.LOGIN_SITE_CHECKED,{config:this.siteConfig}))}else this.authInstructions=void 0,this.canSignup=!1,this.identityProviders=[]}login(e){return Object(r.a)(this,void 0,void 0,(function*(){e&&(e.preventDefault(),e.stopPropagation()),l.a.closeKeyboard();const t=this.siteUrl,n=this.credForm.value.username,o=this.credForm.value.password;if(!this.siteChecked||this.isBrowserSSO)return yield this.checkSite(t),this.isBrowserSSO?void 0:this.login();if(!n)return d.a.showErrorModal("core.login.usernamerequired",!0),void 0;if(!o)return d.a.showErrorModal("core.login.passwordrequired",!0),void 0;if(!l.a.isOnline())return d.a.showErrorModal("core.networkerrormsg",!0),void 0;const i=yield d.a.showModalLoading();try{const e=yield g.b.getUserToken(t,n,o),r=yield g.b.newSite(e.siteUrl,e.token,e.privateToken);this.credForm.controls.username.reset(),this.credForm.controls.password.reset(),this.siteId=r,yield p.a.navigateToSiteHome({params:{urlToOpen:this.urlToOpen}})}catch(e){u.a.treatUserTokenError(t,e,n,o),e.loggedout?p.a.navigate("/login/sites",{reset:!0}):"forcepasswordchangenotice"==e.errorcode&&this.credForm.controls.password.reset()}finally{i.dismiss(),C.a.triggerFormSubmittedEvent(this.formElement,!0)}}))}forgottenPassword(){u.a.forgottenPasswordClicked(this.siteUrl,this.credForm.value.username,this.siteConfig)}oauthClicked(e){var t;u.a.openBrowserForOAuthLogin(this.siteUrl,e,null===(t=this.siteConfig)||void 0===t?void 0:t.launchurl)||d.a.showErrorModal("Invalid data.")}showInstructionsAndScanQR(){return Object(r.a)(this,void 0,void 0,(function*(){try{yield u.a.showScanQRInstructions(),yield u.a.scanQR()}catch(e){}}))}openEmailSignup(){p.a.navigate("/login/emailsignup",{params:{siteUrl:this.siteUrl}})}openSettings(){p.a.navigate("/settings")}ngOnDestroy(){var e;this.viewLeft=!0,_.b.trigger(_.b.LOGIN_SITE_UNCHECKED,{config:this.siteConfig,loginSuccessful:!!this.siteId},this.siteId),null===(e=this.valueChangeSubscription)||void 0===e||e.unsubscribe()}}return CoreLoginCredentialsPage.ɵfac=function CoreLoginCredentialsPage_Factory(e){return new(e||CoreLoginCredentialsPage)(f.yc(s.f))},CoreLoginCredentialsPage.ɵcmp=f.sc({type:CoreLoginCredentialsPage,selectors:[["page-core-login-credentials"]],viewQuery:function CoreLoginCredentialsPage_Query(e,t){var n;(1&e&&f.ud(L,!0),2&e)&&(f.dd(n=f.Nc())&&(t.formElement=n.first))},decls:34,vars:25,consts:[["slot","start"],[3,"text"],["slot","end"],["fill","clear",3,"click"],["slot","icon-only","name","fas-cog","aria-hidden","true"],[1,"ion-padding","limited-width"],[3,"hideUntil"],[1,"ion-text-wrap","ion-text-center","ion-margin-bottom"],[1,"core-login-site-logo"],["role","presentation","alt","","onError","this.src='assets/img/login_logo.png'",3,"src",4,"ngIf"],["src","assets/img/login_logo.png","role","presentation","alt","",4,"ngIf"],["class","ion-padding core-sitename",4,"ngIf"],[1,"core-siteurl"],[1,"core-login-form",3,"formGroup","ngSubmit"],["credentialsForm",""],[4,"ngIf"],["class","ion-margin-bottom",4,"ngIf"],["expand","block","type","submit",1,"ion-margin","core-login-login-button","ion-text-wrap",3,"disabled"],["type","submit",1,"core-submit-hidden-enter"],["expand","block","fill","clear","class","core-login-forgotten-password core-button-as-link ion-text-wrap",3,"click",4,"ngIf"],["class","ion-padding-top core-login-identity-providers",4,"ngIf"],["class","ion-padding-top core-login-sign-up",4,"ngIf"],["role","presentation","alt","","onError","this.src='assets/img/login_logo.png'",3,"src"],["src","assets/img/login_logo.png","role","presentation","alt",""],[1,"ion-padding","core-sitename"],[3,"text","filter"],[1,"sr-only"],["type","text","name","username","formControlName","username","autocapitalize","none","autocorrect","off","autocomplete","username","enterkeyhint","next","required","true",3,"placeholder"],[1,"ion-margin-bottom"],["name","password"],["name","password","type","password","formControlName","password","autocomplete","current-password","enterkeyhint","go","required","true",3,"placeholder","clearOnEdit"],[1,"ion-text-center","ion-padding"],["expand","block","fill","outline",1,"ion-margin",3,"click"],["slot","start","name","fas-qrcode","aria-hidden","true"],["expand","block","fill","clear",1,"core-login-forgotten-password","core-button-as-link","ion-text-wrap",3,"click"],[1,"ion-padding-top","core-login-identity-providers"],[1,"ion-text-wrap"],[1,"item-heading"],["fill","outline","class","ion-text-wrap ion-margin core-oauth-provider","expand","block",3,"click",4,"ngFor","ngForOf"],["fill","outline","expand","block",1,"ion-text-wrap","ion-margin","core-oauth-provider",3,"click"],["alt","","width","32","height","32","slot","start",3,"src"],[1,"ion-padding-top","core-login-sign-up"],["class","ion-text-wrap",4,"ngIf"],["expand","block","fill","outline",1,"ion-margin","ion-text-wrap",3,"click"]],template:function CoreLoginCredentialsPage_Template(e,t){1&e&&(f.Ec(0,"ion-header"),f.Ec(1,"ion-toolbar"),f.Ec(2,"ion-buttons",0),f.zc(3,"ion-back-button",1),f.Pc(4,"translate"),f.Dc(),f.Ec(5,"ion-title"),f.Ec(6,"h1"),f.pd(7),f.Pc(8,"translate"),f.Dc(),f.Dc(),f.Ec(9,"ion-buttons",2),f.Ec(10,"ion-button",3),f.Mc("click",(function CoreLoginCredentialsPage_Template_ion_button_click_10_listener(){return t.openSettings()})),f.Pc(11,"translate"),f.zc(12,"ion-icon",4),f.Dc(),f.Dc(),f.Dc(),f.Dc(),f.Ec(13,"ion-content",5),f.Ec(14,"core-loading",6),f.Ec(15,"div",7),f.Ec(16,"div",8),f.nd(17,CoreLoginCredentialsPage_img_17_Template,1,1,"img",9),f.nd(18,CoreLoginCredentialsPage_img_18_Template,1,0,"img",10),f.Dc(),f.nd(19,CoreLoginCredentialsPage_h3_19_Template,2,2,"h3",11),f.Ec(20,"p",12),f.pd(21),f.Dc(),f.Dc(),f.Ec(22,"form",13,14),f.Mc("ngSubmit",(function CoreLoginCredentialsPage_Template_form_ngSubmit_22_listener(e){return t.login(e)})),f.nd(24,CoreLoginCredentialsPage_ion_item_24_Template,6,6,"ion-item",15),f.nd(25,CoreLoginCredentialsPage_ion_item_25_Template,7,7,"ion-item",16),f.Ec(26,"ion-button",17),f.pd(27),f.Pc(28,"translate"),f.Dc(),f.zc(29,"input",18),f.nd(30,CoreLoginCredentialsPage_ng_container_30_Template,8,6,"ng-container",15),f.Dc(),f.nd(31,CoreLoginCredentialsPage_ion_button_31_Template,3,3,"ion-button",19),f.nd(32,CoreLoginCredentialsPage_ion_list_32_Template,7,4,"ion-list",20),f.nd(33,CoreLoginCredentialsPage_ion_list_33_Template,10,7,"ion-list",21),f.Dc(),f.Dc()),2&e&&(f.lc(3),f.Vc("text",f.Qc(4,17,"core.back")),f.lc(4),f.qd(f.Qc(8,19,"core.login.login")),f.lc(3),f.mc("aria-label",f.Qc(11,21,"core.settings.appsettings")),f.lc(4),f.Vc("hideUntil",t.pageLoaded),f.lc(3),f.Vc("ngIf",t.logoUrl),f.lc(1),f.Vc("ngIf",!t.logoUrl),f.lc(1),f.Vc("ngIf",t.siteName),f.lc(2),f.qd(t.siteUrl),f.lc(1),f.Vc("formGroup",t.credForm),f.lc(2),f.Vc("ngIf",t.siteChecked&&!t.isBrowserSSO),f.lc(1),f.Vc("ngIf",t.siteChecked&&!t.isBrowserSSO),f.lc(1),f.Vc("disabled",t.siteChecked&&!t.isBrowserSSO&&!t.credForm.valid),f.lc(1),f.rd(" ",f.Qc(28,23,"core.login.loginbutton")," "),f.lc(3),f.Vc("ngIf",t.showScanQR),f.lc(1),f.Vc("ngIf",t.showForgottenPassword),f.lc(1),f.Vc("ngIf",t.identityProviders&&t.identityProviders.length),f.lc(1),f.Vc("ngIf",t.canSignup))},directives:[P.C,P.Ab,P.m,P.h,P.i,P.yb,b.a,P.l,P.D,O.a,M.a,P.v,v.a,w.t,s.H,s.s,s.k,k.a,P.I,P.O,P.H,P.Pb,s.r,s.i,s.C,S.a,P.P,w.s],pipes:[E.d],styles:["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-list[_ngcontent-%COMP%]{--background:var(--core-login-background);--ion-item-background:var(--core-login-background)}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-list[_ngcontent-%COMP%]{--color:var(--core-login-text-color)}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .core-oauth-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--color)}[_nghost-%COMP%]   ion-button.core-button-as-link[_ngcontent-%COMP%]{--color:var(--core-login-text-color);-webkit-text-decoration-color:var(--core-login-text-color);text-decoration-color:var(--core-login-text-color)}[_nghost-%COMP%]   ion-button.core-button-as-link[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:var(--core-login-text-color)}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.item[_ngcontent-%COMP%], [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .item.item-input[_ngcontent-%COMP%]{margin-bottom:16px}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.ios[_ngcontent-%COMP%]{--inner-border-width:0 0 1px 0}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%], [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{--background:var(--core-login-input-background);--color:var(--core-login-input-color)}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.item.md[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-left:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.item.md[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-left:unset;-webkit-padding-start:8px;padding-inline-start:8px}}[_nghost-%COMP%]   .core-login-site-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}[_nghost-%COMP%]   .core-sitename[_ngcontent-%COMP%] + .core-siteurl[_ngcontent-%COMP%]{margin-top:0}[_nghost-%COMP%]   .core-sitename[_ngcontent-%COMP%]{font-size:1.2rem;margin-bottom:0}[_nghost-%COMP%]   .core-login-site-logo[_ngcontent-%COMP%]{width:90%;max-width:300px;margin:5px auto}[_nghost-%COMP%]   .core-login-forgotten-password[_ngcontent-%COMP%]{text-decoration:underline}body.dark[_nghost-%COMP%]   core-loading[_ngcontent-%COMP%], body.dark   [_nghost-%COMP%]   core-loading[_ngcontent-%COMP%]{--loading-background:var(--core-login-background-dark);--loading-text-color:#fff;--loading-spinner:#fff}"]}),CoreLoginCredentialsPage})();const T=[{path:"",component:x}];let D=(()=>{class CoreLoginCredentialsPageModule{}return CoreLoginCredentialsPageModule.ɵmod=f.wc({type:CoreLoginCredentialsPageModule}),CoreLoginCredentialsPageModule.ɵinj=f.vc({factory:function CoreLoginCredentialsPageModule_Factory(e){return new(e||CoreLoginCredentialsPageModule)},imports:[[o.m.forChild(T),i.a],o.m]}),CoreLoginCredentialsPageModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&f.kd(D,{declarations:[x],imports:[o.m,i.a],exports:[o.m]}))}}]);