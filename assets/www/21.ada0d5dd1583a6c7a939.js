(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"4vxA":function(e,t,n){"use strict";n.r(t),n.d(t,"CoreSitePluginsPluginPageModule",(function(){return f}));var i=n("tyNb"),o=n("L3Fv"),l=n("MLi9"),a=n("mrSG"),r=n("pHTc"),c=n("bFG1"),s=n("BTA1"),u=n("fXoL"),g=n("TEn/"),d=n("ofXK"),P=n("nt/U"),p=n("sYmb");function CoreSitePluginsPluginPage_h1_6_Template(e,t){if(1&e&&(u.Ec(0,"h1"),u.pd(1),u.Pc(2,"translate"),u.Dc()),2&e){const e=u.Oc();u.lc(1),u.qd(u.Qc(2,1,e.title))}}let h=(()=>{class CoreSitePluginsPluginPage{constructor(){this.ptrEnabled=!1}ngOnInit(){this.title=r.a.getRouteParam("title"),this.component=r.a.getRouteParam("component"),this.method=r.a.getRouteParam("method"),this.args=r.a.getRouteParam("args"),this.initResult=r.a.getRouteParam("initResult"),this.jsData=r.a.getRouteParam("jsData"),this.preSets=r.a.getRouteParam("preSets"),this.ptrEnabled=!c.a.isFalseOrZero(r.a.getRouteBooleanParam("ptrEnabled"))}refreshData(e){var t;null===(t=this.content)||void 0===t?void 0:t.refreshContent(!1).finally((()=>{e.complete()}))}ionViewWillEnter(){var e;null===(e=this.content)||void 0===e?void 0:e.callComponentFunction("ionViewWillEnter")}ionViewDidEnter(){var e;null===(e=this.content)||void 0===e?void 0:e.callComponentFunction("ionViewDidEnter")}ionViewWillLeave(){var e;null===(e=this.content)||void 0===e?void 0:e.callComponentFunction("ionViewWillLeave")}ionViewDidLeave(){var e;null===(e=this.content)||void 0===e?void 0:e.callComponentFunction("ionViewDidLeave")}ionViewWillUnload(){var e;null===(e=this.content)||void 0===e?void 0:e.callComponentFunction("ionViewWillUnload")}canLeave(){return Object(a.a)(this,void 0,void 0,(function*(){if(!this.content)return!0;const e=yield this.content.callComponentFunction("canLeave");return null==e||!!e}))}}return CoreSitePluginsPluginPage.ɵfac=function CoreSitePluginsPluginPage_Factory(e){return new(e||CoreSitePluginsPluginPage)},CoreSitePluginsPluginPage.ɵcmp=u.sc({type:CoreSitePluginsPluginPage,selectors:[["page-core-site-plugins-plugin"]],viewQuery:function CoreSitePluginsPluginPage_Query(e,t){var n;(1&e&&u.ud(s.a,!0),2&e)&&(u.dd(n=u.Nc())&&(t.content=n.first))},decls:13,vars:15,consts:[["slot","start"],[3,"text"],[4,"ngIf"],["slot","end"],["slot","fixed",3,"disabled","ionRefresh"],[3,"pullingText"],[3,"component","method","args","preSets","initResult","data","pageTitle"]],template:function CoreSitePluginsPluginPage_Template(e,t){1&e&&(u.Ec(0,"ion-header"),u.Ec(1,"ion-toolbar"),u.Ec(2,"ion-buttons",0),u.zc(3,"ion-back-button",1),u.Pc(4,"translate"),u.Dc(),u.Ec(5,"ion-title"),u.nd(6,CoreSitePluginsPluginPage_h1_6_Template,3,3,"h1",2),u.Dc(),u.zc(7,"ion-buttons",3),u.Dc(),u.Dc(),u.Ec(8,"ion-content"),u.Ec(9,"ion-refresher",4),u.Mc("ionRefresh",(function CoreSitePluginsPluginPage_Template_ion_refresher_ionRefresh_9_listener(e){return t.refreshData(e.target)})),u.zc(10,"ion-refresher-content",5),u.Pc(11,"translate"),u.Dc(),u.zc(12,"core-site-plugins-plugin-content",6),u.Dc()),2&e&&(u.lc(3),u.Vc("text",u.Qc(4,11,"core.back")),u.lc(3),u.Vc("ngIf",t.title),u.lc(3),u.Vc("disabled",!t.ptrEnabled||!t.content||!t.content.dataLoaded),u.lc(1),u.Wc("pullingText",u.Qc(11,13,"core.pulltorefresh")),u.lc(2),u.Vc("component",t.component)("method",t.method)("args",t.args)("preSets",t.preSets)("initResult",t.initResult)("data",t.jsData)("pageTitle",t.title))},directives:[g.C,g.Ab,g.m,g.h,g.i,g.yb,d.t,P.a,g.v,g.bb,g.cb,s.a],pipes:[p.d],encapsulation:2}),CoreSitePluginsPluginPage})();var m=n("w9Bf");const v=[{path:"",component:h,canDeactivate:[l.a]}];let f=(()=>{class CoreSitePluginsPluginPageModule{}return CoreSitePluginsPluginPageModule.ɵmod=u.wc({type:CoreSitePluginsPluginPageModule}),CoreSitePluginsPluginPageModule.ɵinj=u.vc({factory:function CoreSitePluginsPluginPageModule_Factory(e){return new(e||CoreSitePluginsPluginPageModule)},imports:[[i.m.forChild(v),o.a,m.a],i.m]}),CoreSitePluginsPluginPageModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&u.kd(f,{declarations:[h],imports:[i.m,o.a,m.a],exports:[i.m]}))}}]);