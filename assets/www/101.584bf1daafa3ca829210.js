(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{EOZX:function(n,o,e){"use strict";e.r(o),e.d(o,"CoreLoginChangePasswordPageModule",(function(){return b}));var c=e("tyNb"),a=e("L3Fv"),t=e("9+EE"),i=e("3LXp"),r=e("mv9v"),s=e("j3ag"),g=e("pHTc"),l=e("fXoL"),d=e("TEn/"),p=e("ACYt"),P=e("3CSS"),h=e("nt/U"),u=e("ofXK"),w=e("sYmb");function CoreLoginChangePasswordPage_ng_container_15_Template(n,o){if(1&n){const n=l.Fc();l.Cc(0),l.Ec(1,"ion-item",7),l.Ec(2,"ion-label"),l.Ec(3,"h2"),l.pd(4),l.Pc(5,"translate"),l.Dc(),l.Ec(6,"p",9),l.pd(7),l.Pc(8,"translate"),l.Dc(),l.Dc(),l.Dc(),l.Ec(9,"ion-button",10),l.Mc("click",(function CoreLoginChangePasswordPage_ng_container_15_Template_ion_button_click_9_listener(){l.fd(n);return l.Oc().openChangePasswordPage()})),l.pd(10),l.Pc(11,"translate"),l.Dc(),l.Bc()}2&n&&(l.lc(4),l.qd(l.Qc(5,3,"core.login.forcepasswordchangenotice")),l.lc(3),l.qd(l.Qc(8,5,"core.login.changepasswordinstructions")),l.lc(3),l.rd(" ",l.Qc(11,7,"core.login.changepasswordbutton")," "))}function CoreLoginChangePasswordPage_ng_container_16_Template(n,o){if(1&n){const n=l.Fc();l.Cc(0),l.Ec(1,"ion-item",7),l.Ec(2,"ion-label"),l.Ec(3,"p"),l.pd(4),l.Pc(5,"translate"),l.Dc(),l.Dc(),l.Dc(),l.Ec(6,"ion-button",10),l.Mc("click",(function CoreLoginChangePasswordPage_ng_container_16_Template_ion_button_click_6_listener(){l.fd(n);return l.Oc().login()})),l.pd(7),l.Pc(8,"translate"),l.Dc(),l.Bc()}2&n&&(l.lc(4),l.qd(l.Qc(5,2,"core.login.changepasswordreconnectinstructions")),l.lc(3),l.rd(" ",l.Qc(8,4,"core.login.reconnect")," "))}let C=(()=>{class CoreLoginChangePasswordPage{constructor(){this.changingPassword=!1,this.logoutLabel=r.a.getLogoutLabel()}showHelp(){i.a.showAlert(s.M.instant("core.help"),s.M.instant("core.login.changepasswordhelp"))}openChangePasswordPage(){r.a.openInAppForEdit(t.b.getCurrentSiteId(),"/login/change_password.php",void 0,!0),this.changingPassword=!0}login(){g.a.navigateToSiteHome(),this.changingPassword=!1}logout(){t.b.logout(),this.changingPassword=!1}}return CoreLoginChangePasswordPage.ɵfac=function CoreLoginChangePasswordPage_Factory(n){return new(n||CoreLoginChangePasswordPage)},CoreLoginChangePasswordPage.ɵcmp=l.sc({type:CoreLoginChangePasswordPage,selectors:[["page-core-login-change-password"]],decls:25,vars:17,consts:[["slot","start"],[3,"text"],["slot","end"],["fill","clear",3,"click"],["slot","icon-only","name","far-question-circle","aria-hidden","true"],[1,"list-item-limited-width"],[4,"ngIf"],[1,"ion-text-wrap"],["expand","block","fill","outline",1,"ion-text-wrap","ion-margin",3,"click"],[1,"ion-padding-top"],["expand","block",1,"ion-text-wrap","ion-margin",3,"click"]],template:function CoreLoginChangePasswordPage_Template(n,o){1&n&&(l.Ec(0,"ion-header"),l.Ec(1,"ion-toolbar"),l.Ec(2,"ion-buttons",0),l.zc(3,"ion-back-button",1),l.Pc(4,"translate"),l.Dc(),l.Ec(5,"ion-title"),l.Ec(6,"h1"),l.pd(7),l.Pc(8,"translate"),l.Dc(),l.Dc(),l.Ec(9,"ion-buttons",2),l.Ec(10,"ion-button",3),l.Mc("click",(function CoreLoginChangePasswordPage_Template_ion_button_click_10_listener(){return o.showHelp()})),l.Pc(11,"translate"),l.zc(12,"ion-icon",4),l.Dc(),l.Dc(),l.Dc(),l.Dc(),l.Ec(13,"ion-content"),l.Ec(14,"ion-list",5),l.nd(15,CoreLoginChangePasswordPage_ng_container_15_Template,12,9,"ng-container",6),l.nd(16,CoreLoginChangePasswordPage_ng_container_16_Template,9,6,"ng-container",6),l.Ec(17,"ion-item",7),l.Ec(18,"ion-label"),l.Ec(19,"p"),l.pd(20),l.Pc(21,"translate"),l.Dc(),l.Dc(),l.Dc(),l.Ec(22,"ion-button",8),l.Mc("click",(function CoreLoginChangePasswordPage_Template_ion_button_click_22_listener(){return o.logout()})),l.pd(23),l.Pc(24,"translate"),l.Dc(),l.Dc(),l.Dc()),2&n&&(l.lc(3),l.Vc("text",l.Qc(4,7,"core.back")),l.lc(4),l.qd(l.Qc(8,9,"core.login.changepassword")),l.lc(3),l.mc("aria-label",l.Qc(11,11,"core.help")),l.lc(5),l.Vc("ngIf",!o.changingPassword),l.lc(1),l.Vc("ngIf",o.changingPassword),l.lc(4),l.qd(l.Qc(21,13,"core.login.changepasswordlogoutinstructions")),l.lc(3),l.rd(" ",l.Qc(24,15,o.logoutLabel)," "))},directives:[d.C,d.Ab,d.m,d.h,d.i,d.yb,p.a,d.l,d.D,P.a,h.a,d.v,d.P,u.t,d.I,d.O],pipes:[w.d],encapsulation:2}),CoreLoginChangePasswordPage})();const _=[{path:"",component:C}];let b=(()=>{class CoreLoginChangePasswordPageModule{}return CoreLoginChangePasswordPageModule.ɵmod=l.wc({type:CoreLoginChangePasswordPageModule}),CoreLoginChangePasswordPageModule.ɵinj=l.vc({factory:function CoreLoginChangePasswordPageModule_Factory(n){return new(n||CoreLoginChangePasswordPageModule)},imports:[[c.m.forChild(_),a.a],c.m]}),CoreLoginChangePasswordPageModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&l.kd(b,{declarations:[C],imports:[c.m,a.a],exports:[c.m]}))}}]);