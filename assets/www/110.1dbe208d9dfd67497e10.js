(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{"+hPx":function(e,t,o){"use strict";o.r(t),o.d(t,"CoreMainMenuHomePageModule",(function(){return E}));var n=o("fXoL"),a=o("tyNb"),i=o("vY5A"),r=o("L3Fv"),c=o("9+EE"),s=o("fjkH"),l=o("NhJP"),u=o("TkC7"),d=o("bFG1"),m=o("u7qe"),M=o("YyYz"),b=o("TEn/"),g=o("hMzs"),p=o("C1x5"),h=o("PgjG"),_=o("ofXK"),C=o("r8G5"),P=o("sYmb");function CoreMainMenuHomePage_core_empty_box_12_Template(e,t){1&e&&(n.zc(0,"core-empty-box",8),n.Pc(1,"translate")),2&e&&n.Vc("message",n.Qc(1,1,"core.courses.nocourses"))}function CoreMainMenuHomePage_core_tabs_outlet_13_Template(e,t){if(1&e){const e=n.Fc();n.Ec(0,"core-tabs-outlet",9),n.Mc("ionChange",(function CoreMainMenuHomePage_core_tabs_outlet_13_Template_core_tabs_outlet_ionChange_0_listener(){n.fd(e);return n.Oc().tabSelected()})),n.Dc()}if(2&e){const e=n.Oc();n.Vc("hideUntil",e.loaded)("tabs",e.tabs)}}let f=(()=>{class CoreMainMenuHomePage{constructor(){this.siteName="",this.tabs=[],this.loaded=!1}ngOnInit(){this.deepLinkManager=new M.a,this.loadSiteName(),this.subscription=u.a.getHandlersObservable().subscribe((e=>{e&&this.initHandlers(e)})),this.updateSiteObserver=s.b.on(s.b.SITE_UPDATED,(()=>{this.loadSiteName()}),c.b.getCurrentSiteId())}initHandlers(e){const t=u.a.areHandlersLoaded(),o=d.a.arrayToObject(e,"title"),n=e.map((e=>{const t=this.tabs.find((t=>t.title==e.title));return t||{page:`/main/${m.b.PAGE_NAME}/${e.page}`,pageParams:e.pageParams,title:e.title,class:e.class,icon:e.icon,badge:e.badge}}));n.sort(((e,t)=>(o[t.title].priority||0)-(o[e.title].priority||0))),this.tabs=n,setTimeout((()=>{this.loaded=t}),50)}loadSiteName(){this.siteName=c.b.getRequiredCurrentSite().getSiteName()||""}tabSelected(){var e;null===(e=this.deepLinkManager)||void 0===e?void 0:e.treatLink()}ionViewDidEnter(){var e;null===(e=this.tabsComponent)||void 0===e?void 0:e.ionViewDidEnter()}ionViewDidLeave(){var e;null===(e=this.tabsComponent)||void 0===e?void 0:e.ionViewDidLeave()}}return CoreMainMenuHomePage.ɵfac=function CoreMainMenuHomePage_Factory(e){return new(e||CoreMainMenuHomePage)},CoreMainMenuHomePage.ɵcmp=n.sc({type:CoreMainMenuHomePage,selectors:[["page-core-mainmenu-home"]],viewQuery:function CoreMainMenuHomePage_Query(e,t){var o;(1&e&&n.ud(l.a,!0),2&e)&&(n.dd(o=n.Nc())&&(t.tabsComponent=o.first))},decls:14,vars:9,consts:[["slot","start"],[3,"text"],["contextLevel","system",1,"core-header-sitename",3,"text","contextInstanceId"],["src","assets/img/top_logo.png",1,"core-header-logo",3,"alt"],["slot","end"],[3,"hideUntil"],["icon","fas-home",3,"message",4,"ngIf"],[3,"hideUntil","tabs","ionChange",4,"ngIf"],["icon","fas-home",3,"message"],[3,"hideUntil","tabs","ionChange"]],template:function CoreMainMenuHomePage_Template(e,t){1&e&&(n.Ec(0,"ion-header"),n.Ec(1,"ion-toolbar"),n.Ec(2,"ion-buttons",0),n.zc(3,"ion-back-button",1),n.Pc(4,"translate"),n.Dc(),n.Ec(5,"ion-title"),n.Ec(6,"h1"),n.zc(7,"core-format-text",2),n.zc(8,"img",3),n.Dc(),n.Dc(),n.Ec(9,"ion-buttons",4),n.zc(10,"core-user-menu-button"),n.Dc(),n.Dc(),n.Dc(),n.Ec(11,"core-loading",5),n.nd(12,CoreMainMenuHomePage_core_empty_box_12_Template,2,3,"core-empty-box",6),n.Dc(),n.nd(13,CoreMainMenuHomePage_core_tabs_outlet_13_Template,1,2,"core-tabs-outlet",7)),2&e&&(n.lc(3),n.Vc("text",n.Qc(4,7,"core.back")),n.lc(4),n.Vc("text",t.siteName)("contextInstanceId",0),n.lc(1),n.Vc("alt",t.siteName),n.lc(3),n.Vc("hideUntil",t.loaded),n.lc(1),n.Vc("ngIf",0==t.tabs.length),n.lc(1),n.Vc("ngIf",t.tabs.length>0))},directives:[b.C,b.Ab,b.m,b.h,b.i,b.yb,g.a,p.a,h.a,_.t,C.a,l.a],pipes:[P.d],encapsulation:2}),CoreMainMenuHomePage})();var H=o("Rqnc"),v=o("wG2S"),y=o("dQ3M");function buildRoutes(e){const t=Object(i.d)(e,H.b);return[...Object(v.b)(e,{path:"",data:{mainMenuTabRoot:m.b.PAGE_NAME},component:f,children:t.children}),...t.siblings]}let E=(()=>{class CoreMainMenuHomePageModule{}return CoreMainMenuHomePageModule.ɵmod=n.wc({type:CoreMainMenuHomePageModule}),CoreMainMenuHomePageModule.ɵinj=n.vc({factory:function CoreMainMenuHomePageModule_Factory(e){return new(e||CoreMainMenuHomePageModule)},providers:[{provide:a.g,multi:!0,useFactory:buildRoutes,deps:[n.x]}],imports:[[r.a,y.a],a.m]}),CoreMainMenuHomePageModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&n.kd(E,{declarations:[f],imports:[r.a,y.a],exports:[a.m]}))}}]);