(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{OQUD:function(t,n,e){"use strict";e.r(n),e.d(n,"CoreSettingsSynchronizationPageModule",(function(){return M}));var i=e("tyNb"),o=e("L3Fv"),c=e("mrSG"),s=e("BaYo"),r=e("fjkH"),a=e("9+EE"),l=e("3LXp"),d=e("BBqZ"),g=e("1gmh"),h=e("j3ag"),y=e("fXoL"),S=e("TEn/"),u=e("ACV2"),f=e("ACYt"),m=e("3CSS"),_=e("nt/U"),p=e("PgjG"),z=e("3Pt+"),b=e("ofXK"),C=e("hMzs"),D=e("3zv0"),E=e("sYmb");function CoreSettingsSynchronizationPage_ion_item_32_Template(t,n){if(1&t){const t=y.Fc();y.Ec(0,"ion-item",7),y.Ec(1,"ion-label"),y.Ec(2,"p",10),y.zc(3,"core-format-text",11),y.Dc(),y.Ec(4,"p"),y.pd(5),y.Dc(),y.Ec(6,"p"),y.pd(7),y.Dc(),y.Dc(),y.Ec(8,"core-button-with-spinner",12),y.Ec(9,"ion-button",13),y.Mc("click",(function CoreSettingsSynchronizationPage_ion_item_32_Template_ion_button_click_9_listener(){y.fd(t);const e=n.$implicit;return y.Oc().synchronize(e.id)})),y.Pc(10,"translate"),y.zc(11,"ion-icon",14),y.Dc(),y.Dc(),y.Dc()}if(2&t){const t=n.$implicit,e=y.Oc();y.qc("item-current",t.id==e.currentSiteId),y.lc(3),y.Vc("text",t.siteName)("siteId",t.id),y.lc(2),y.qd(t.fullName),y.lc(2),y.qd(t.siteUrlWithoutProtocol),y.lc(1),y.Vc("loading",e.isSynchronizing(t.id)),y.lc(1),y.Vc("title",t.siteName),y.mc("aria-label",y.Qc(10,9,"core.settings.synchronizenow"))}}let P=(()=>{class CoreSettingsSynchronizationPage{constructor(){this.sites=[],this.sitesLoaded=!1,this.currentSiteId="",this.syncOnlyOnWifi=!1,this.isDestroyed=!1,this.currentSiteId=a.b.getCurrentSiteId(),this.sitesObserver=r.b.on(r.b.SITE_UPDATED,(t=>Object(c.a)(this,void 0,void 0,(function*(){const n=yield a.b.getSite(t.siteId),e=this.sites.find((t=>t.id==n.id));if(e){const t=n.getInfo();e.siteName=n.getSiteName(),t&&(e.siteUrl=t.siteurl,e.fullName=t.fullname)}}))))}ngOnInit(){return Object(c.a)(this,void 0,void 0,(function*(){try{this.sites=yield a.b.getSortedSites()}catch(t){}this.sitesLoaded=!0,this.syncOnlyOnWifi=yield d.a.get(s.a.SETTINGS_SYNC_ONLY_ON_WIFI,!0)}))}syncOnlyOnWifiChanged(){d.a.set(s.a.SETTINGS_SYNC_ONLY_ON_WIFI,this.syncOnlyOnWifi?1:0)}synchronize(t){return Object(c.a)(this,void 0,void 0,(function*(){try{yield g.a.synchronizeSite(!1,t)}catch(t){if(this.isDestroyed)return;l.a.showErrorModalDefault(t,"core.settings.errorsyncsite",!0)}}))}isSynchronizing(t){return!!g.a.getSiteSyncPromise(t)}showInfo(){l.a.showAlert(h.M.instant("core.help"),h.M.instant("core.settings.synchronizenowhelp"))}ngOnDestroy(){var t;this.isDestroyed=!0,null===(t=this.sitesObserver)||void 0===t||t.off()}}return CoreSettingsSynchronizationPage.ɵfac=function CoreSettingsSynchronizationPage_Factory(t){return new(t||CoreSettingsSynchronizationPage)},CoreSettingsSynchronizationPage.ɵcmp=y.sc({type:CoreSettingsSynchronizationPage,selectors:[["page-core-app-settings-synchronization"]],decls:33,vars:21,consts:[["slot","start"],[3,"text"],["slot","end"],[3,"click"],["name","fas-info-circle","slot","icon-only","aria-hidden","true"],[1,"limited-width"],[3,"hideUntil"],[1,"ion-text-wrap"],["slot","end",3,"ngModel","ngModelChange"],["class","ion-text-wrap",3,"item-current",4,"ngFor","ngForOf"],[1,"item-heading"],["clean","true",3,"text","siteId"],["slot","end",3,"loading"],["fill","clear",3,"title","click"],["name","fas-sync-alt","slot","icon-only","aria-hidden","true"]],template:function CoreSettingsSynchronizationPage_Template(t,n){1&t&&(y.Ec(0,"ion-header"),y.Ec(1,"ion-toolbar"),y.Ec(2,"ion-buttons",0),y.zc(3,"ion-back-button",1),y.Pc(4,"translate"),y.Dc(),y.Ec(5,"ion-title"),y.Ec(6,"h1"),y.pd(7),y.Pc(8,"translate"),y.Dc(),y.Dc(),y.Ec(9,"ion-buttons",2),y.Ec(10,"core-navbar-buttons"),y.Ec(11,"ion-button",3),y.Mc("click",(function CoreSettingsSynchronizationPage_Template_ion_button_click_11_listener(){return n.showInfo()})),y.Pc(12,"translate"),y.zc(13,"ion-icon",4),y.Dc(),y.Dc(),y.Dc(),y.Dc(),y.Dc(),y.Ec(14,"ion-content",5),y.Ec(15,"core-loading",6),y.Ec(16,"ion-list"),y.Ec(17,"ion-item-divider"),y.Ec(18,"ion-label"),y.Ec(19,"h2"),y.pd(20),y.Pc(21,"translate"),y.Dc(),y.Dc(),y.Dc(),y.Ec(22,"ion-item",7),y.Ec(23,"ion-label"),y.pd(24),y.Pc(25,"translate"),y.Dc(),y.Ec(26,"ion-toggle",8),y.Mc("ngModelChange",(function CoreSettingsSynchronizationPage_Template_ion_toggle_ngModelChange_26_listener(t){return n.syncOnlyOnWifi=t}))("ngModelChange",(function CoreSettingsSynchronizationPage_Template_ion_toggle_ngModelChange_26_listener(){return n.syncOnlyOnWifiChanged()})),y.Dc(),y.Dc(),y.Ec(27,"ion-item-divider"),y.Ec(28,"ion-label"),y.Ec(29,"h2"),y.pd(30),y.Pc(31,"translate"),y.Dc(),y.Dc(),y.Dc(),y.nd(32,CoreSettingsSynchronizationPage_ion_item_32_Template,12,11,"ion-item",9),y.Dc(),y.Dc(),y.Dc()),2&t&&(y.lc(3),y.Vc("text",y.Qc(4,9,"core.back")),y.lc(4),y.qd(y.Qc(8,11,"core.settings.synchronization")),y.lc(4),y.mc("aria-label",y.Qc(12,13,"core.info")),y.lc(4),y.Vc("hideUntil",n.sitesLoaded),y.lc(5),y.qd(y.Qc(21,15,"core.settings.syncsettings")),y.lc(4),y.qd(y.Qc(25,17,"core.settings.enablesyncwifi")),y.lc(2),y.Vc("ngModel",n.syncOnlyOnWifi),y.lc(4),y.qd(y.Qc(31,19,"core.settings.sites")),y.lc(2),y.Vc("ngForOf",n.sites))},directives:[S.C,S.Ab,S.m,S.h,S.i,S.yb,u.a,f.a,S.l,S.D,m.a,_.a,S.v,p.a,S.P,S.J,S.O,S.I,S.zb,S.d,z.r,z.u,b.s,C.a,D.a],pipes:[E.d],encapsulation:2}),CoreSettingsSynchronizationPage})();const O=[{path:"",component:P}];let M=(()=>{class CoreSettingsSynchronizationPageModule{}return CoreSettingsSynchronizationPageModule.ɵmod=y.wc({type:CoreSettingsSynchronizationPageModule}),CoreSettingsSynchronizationPageModule.ɵinj=y.vc({factory:function CoreSettingsSynchronizationPageModule_Factory(t){return new(t||CoreSettingsSynchronizationPageModule)},imports:[[i.m.forChild(O),o.a],i.m]}),CoreSettingsSynchronizationPageModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&y.kd(M,{declarations:[P],imports:[i.m,o.a],exports:[i.m]}))}}]);