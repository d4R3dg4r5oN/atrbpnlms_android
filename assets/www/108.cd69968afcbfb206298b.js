(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{Pgjy:function(e,t,i){"use strict";i.r(t),i.d(t,"CoreLoginSitesPageModule",(function(){return y}));var o=i("tyNb"),n=i("L3Fv"),c=i("mrSG"),a=i("3LXp"),r=i("9+EE"),l=i("mv9v"),s=i("pHTc"),d=i("tS8V"),_=i("MUy3"),g=i("fXoL"),u=i("TEn/"),m=i("ofXK"),f=i("ACYt"),p=i("3CSS"),b=i("nt/U"),h=i("PgjG"),P=i("yNDK"),S=i("hMzs"),L=i("iSJP"),D=i("NcPy"),C=i("sYmb");function CoreLoginSitesPage_ion_button_10_Template(e,t){if(1&e){const e=g.Fc();g.Ec(0,"ion-button",13),g.Mc("click",(function CoreLoginSitesPage_ion_button_10_Template_ion_button_click_0_listener(){g.fd(e);return g.Oc().toggleDelete()})),g.Pc(1,"translate"),g.zc(2,"ion-icon",14),g.Dc()}2&e&&g.mc("aria-label",g.Qc(1,1,"core.login.toggleremove"))}function CoreLoginSitesPage_ion_card_17_ion_item_divider_1_Template(e,t){if(1&e&&(g.Ec(0,"ion-item-divider",17),g.Ec(1,"ion-label"),g.Ec(2,"h2"),g.zc(3,"core-format-text",18),g.Dc(),g.Ec(4,"p"),g.Ec(5,"a",19),g.pd(6),g.Dc(),g.Dc(),g.Dc(),g.Dc()),2&e){const e=g.Oc().$implicit;g.lc(3),g.Vc("text",e[0].siteName)("siteId",e[0].id),g.lc(2),g.Vc("href",e[0].siteUrl,g.id),g.lc(1),g.qd(e[0].siteUrlWithoutProtocol)}}const _c0=function(e){return{count:e}};function CoreLoginSitesPage_ion_card_17_ion_item_2_ion_badge_7_Template(e,t){if(1&e&&(g.Ec(0,"ion-badge",2),g.Ec(1,"span",25),g.pd(2),g.Dc(),g.Ec(3,"span",12),g.pd(4),g.Pc(5,"translate"),g.Dc(),g.Dc()),2&e){const e=g.Oc().$implicit;g.Vc("@coreShowHideAnimation",void 0),g.lc(2),g.qd(e.badge),g.lc(2),g.qd(g.Rc(5,3,"core.login.sitebadgedescription",g.ad(6,_c0,e.badge)))}}function CoreLoginSitesPage_ion_card_17_ion_item_2_ion_button_8_Template(e,t){if(1&e){const e=g.Fc();g.Ec(0,"ion-button",26),g.Mc("click",(function CoreLoginSitesPage_ion_card_17_ion_item_2_ion_button_8_Template_ion_button_click_0_listener(t){g.fd(e);const i=g.Oc().$implicit;return g.Oc(2).deleteSite(t,i)})),g.Pc(1,"translate"),g.zc(2,"ion-icon",27),g.Dc()}2&e&&(g.Vc("@coreSlideInOut","fromRight"),g.mc("aria-label",g.Qc(1,2,"core.login.removeaccount")))}const _c1=function(e){return{$a:e}};function CoreLoginSitesPage_ion_card_17_ion_item_2_Template(e,t){if(1&e){const e=g.Fc();g.Ec(0,"ion-item",20),g.Mc("click",(function CoreLoginSitesPage_ion_card_17_ion_item_2_Template_ion_item_click_0_listener(i){g.fd(e);const o=t.$implicit;return g.Oc(2).login(i,o.id)})),g.Ec(1,"ion-avatar",0),g.zc(2,"img",21),g.Pc(3,"translate"),g.Dc(),g.Ec(4,"ion-label"),g.Ec(5,"p",22),g.pd(6),g.Dc(),g.Dc(),g.nd(7,CoreLoginSitesPage_ion_card_17_ion_item_2_ion_badge_7_Template,6,8,"ion-badge",23),g.nd(8,CoreLoginSitesPage_ion_card_17_ion_item_2_ion_button_8_Template,3,4,"ion-button",24),g.Dc()}if(2&e){const e=t.$implicit,i=g.Oc(2);g.lc(2),g.Wc("alt",g.Rc(3,6,"core.pictureof",g.ad(9,_c1,e.fullName))),g.Vc("src",e.avatar,g.id)("siteId",e.id),g.lc(4),g.qd(e.fullName),g.lc(1),g.Vc("ngIf",!i.showDelete&&e.badge),g.lc(1),g.Vc("ngIf",i.showDelete)}}function CoreLoginSitesPage_ion_card_17_Template(e,t){if(1&e&&(g.Ec(0,"ion-card"),g.nd(1,CoreLoginSitesPage_ion_card_17_ion_item_divider_1_Template,7,4,"ion-item-divider",15),g.nd(2,CoreLoginSitesPage_ion_card_17_ion_item_2_Template,9,11,"ion-item",16),g.Dc()),2&e){const e=t.$implicit;g.lc(1),g.Vc("ngIf",e[0]),g.lc(1),g.Vc("ngForOf",e)}}let E=(()=>{class CoreLoginSitesPage{constructor(){this.accountsList={sameSite:[],otherSites:[],count:0},this.showDelete=!1,this.loaded=!1}ngOnInit(){return Object(c.a)(this,void 0,void 0,(function*(){s.a.getRouteBooleanParam("openAddSite")&&this.add(),this.accountsList=yield l.a.getAccountsList(),this.loaded=!0,0==this.accountsList.count&&this.add()}))}add(){l.a.goToAddSite(!1,!0)}deleteSite(e,t){return Object(c.a)(this,void 0,void 0,(function*(){e.stopPropagation();let i=t.siteName||"";i=yield d.a.formatText(i,{clean:!0,singleLine:!0,filter:!1},[],t.id);try{yield a.a.showDeleteConfirm("core.login.confirmdeletesite",{sitename:i})}catch(e){return}try{yield l.a.deleteAccountFromList(this.accountsList,t),this.showDelete=!1,0==this.accountsList.count&&l.a.goToAddSite(!0,!0)}catch(e){a.a.showErrorModalDefault(e,"core.login.errordeletesite",!0)}}))}login(e,t){return Object(c.a)(this,void 0,void 0,(function*(){e.preventDefault(),e.stopPropagation();const i=yield a.a.showModalLoading();try{if(yield r.b.loadSite(t))return yield s.a.navigateToSiteHome(),void 0}catch(e){a.a.showErrorModalDefault(e,"Error loading site.")}finally{i.dismiss()}}))}toggleDelete(){this.showDelete=!this.showDelete}openSettings(){s.a.navigate("/settings")}}return CoreLoginSitesPage.ɵfac=function CoreLoginSitesPage_Factory(e){return new(e||CoreLoginSitesPage)},CoreLoginSitesPage.ɵcmp=g.sc({type:CoreLoginSitesPage,selectors:[["page-core-login-sites"]],decls:25,vars:18,consts:[["slot","start"],[3,"text"],["slot","end"],["fill","clear",3,"click",4,"ngIf"],[3,"click"],["slot","icon-only","name","fas-cog","aria-hidden","true"],[1,"limited-width"],[3,"hideUntil"],[1,"core-sitelist"],[4,"ngFor","ngForOf"],["slot","fixed","core-fab","","vertical","bottom","horizontal","end"],["name","fas-plus","aria-hidden","true"],[1,"sr-only"],["fill","clear",3,"click"],["slot","icon-only","name","fas-pen","aria-hidden","true"],["sticky","true","class","core-sitelist-sitename",4,"ngIf"],["button","","detail","true",3,"click",4,"ngFor","ngForOf"],["sticky","true",1,"core-sitelist-sitename"],["clean","true",3,"text","siteId"],["core-link","","autoLogin","no",3,"href"],["button","","detail","true",3,"click"],["core-external-content","","onError","this.src='assets/img/user-avatar.png'",3,"src","siteId","alt"],[1,"item-heading"],["slot","end",4,"ngIf"],["slot","end","fill","clear","color","danger",3,"click",4,"ngIf"],["aria-hidden","true"],["slot","end","fill","clear","color","danger",3,"click"],["name","fas-trash","slot","icon-only","aria-hidden","true"]],template:function CoreLoginSitesPage_Template(e,t){1&e&&(g.Ec(0,"ion-header"),g.Ec(1,"ion-toolbar"),g.Ec(2,"ion-buttons",0),g.zc(3,"ion-back-button",1),g.Pc(4,"translate"),g.Dc(),g.Ec(5,"ion-title"),g.Ec(6,"h1"),g.pd(7),g.Pc(8,"translate"),g.Dc(),g.Dc(),g.Ec(9,"ion-buttons",2),g.nd(10,CoreLoginSitesPage_ion_button_10_Template,3,3,"ion-button",3),g.Ec(11,"ion-button",4),g.Mc("click",(function CoreLoginSitesPage_Template_ion_button_click_11_listener(){return t.openSettings()})),g.Pc(12,"translate"),g.zc(13,"ion-icon",5),g.Dc(),g.Dc(),g.Dc(),g.Dc(),g.Ec(14,"ion-content",6),g.Ec(15,"core-loading",7),g.Ec(16,"ion-list",8),g.nd(17,CoreLoginSitesPage_ion_card_17_Template,3,2,"ion-card",9),g.Dc(),g.Dc(),g.Ec(18,"ion-fab",10),g.Ec(19,"ion-fab-button",4),g.Mc("click",(function CoreLoginSitesPage_Template_ion_fab_button_click_19_listener(){return t.add()})),g.Pc(20,"translate"),g.zc(21,"ion-icon",11),g.Ec(22,"span",12),g.pd(23),g.Pc(24,"translate"),g.Dc(),g.Dc(),g.Dc(),g.Dc()),2&e&&(g.lc(3),g.Vc("text",g.Qc(4,8,"core.back")),g.lc(4),g.qd(g.Qc(8,10,"core.login.accounts")),g.lc(3),g.Vc("ngIf",t.accountsList.count>0),g.lc(1),g.mc("aria-label",g.Qc(12,12,"core.settings.appsettings")),g.lc(4),g.Vc("hideUntil",t.loaded),g.lc(2),g.Vc("ngForOf",t.accountsList.otherSites),g.lc(2),g.mc("aria-label",g.Qc(20,14,"core.login.add")),g.lc(4),g.qd(g.Qc(24,16,"core.login.add")))},directives:[u.C,u.Ab,u.m,u.h,u.i,u.yb,m.t,f.a,u.l,u.D,p.a,b.a,u.v,h.a,u.P,m.s,u.x,P.a,u.y,u.n,u.J,u.O,S.a,L.a,u.I,u.g,D.a,u.k],pipes:[C.d],styles:["ion-list.core-sitelist[_ngcontent-%COMP%]   .core-sitelist-sitename[_ngcontent-%COMP%]{border-bottom:1px solid var(--stroke)}ion-list.core-sitelist[_ngcontent-%COMP%]   .core-sitelist-sitename[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-top:8px;margin-bottom:8px}"],data:{animation:[_.a.SLIDE_IN_OUT,_.a.SHOW_HIDE]}}),CoreLoginSitesPage})();const v=[{path:"",component:E}];let y=(()=>{class CoreLoginSitesPageModule{}return CoreLoginSitesPageModule.ɵmod=g.wc({type:CoreLoginSitesPageModule}),CoreLoginSitesPageModule.ɵinj=g.vc({factory:function CoreLoginSitesPageModule_Factory(e){return new(e||CoreLoginSitesPageModule)},imports:[[o.m.forChild(v),n.a],o.m]}),CoreLoginSitesPageModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&g.kd(y,{declarations:[E],imports:[o.m,n.a],exports:[o.m]}))}}]);