(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{j1Gh:function(t,o,e){"use strict";e.r(o),e.d(o,"AddonModBookContentsPageModule",(function(){return R}));var n=e("tyNb"),a=e("L3Fv"),i=e("mrSG"),d=e("BaYo"),s=e("93ts"),r=e("kBKO"),c=e("qwWh"),l=e("MpCO"),u=e("ULAo"),h=e("zbKZ"),g=e("kWmn"),m=e("nvXB"),p=e("pHTc"),v=e("3LXp"),_=e("vuGA"),f=e("bFG1"),M=e("j3ag"),b=e("Fb4V"),I=e("7ZBW"),C=e("fXoL"),k=e("TEn/"),B=e("hMzs"),P=e("ofXK"),y=e("nt/U"),A=e("PgjG"),w=e("ACYt"),E=e("3CSS"),D=e("vSVd"),O=e("/BoF"),T=e("3jOR"),x=e("sYmb");function AddonModBookContentsPage_ion_button_9_Template(t,o){if(1&t){const t=C.Fc();C.Ec(0,"ion-button",12),C.Mc("click",(function AddonModBookContentsPage_ion_button_9_Template_ion_button_click_0_listener(){C.fd(t);return C.Oc().showToc()})),C.Pc(1,"translate"),C.zc(2,"ion-icon",13),C.Dc()}2&t&&C.mc("aria-label",C.Qc(1,1,"addon.mod_book.toc"))}function AddonModBookContentsPage_ion_card_16_Template(t,o){if(1&t&&(C.Ec(0,"ion-card",14),C.Ec(1,"ion-item"),C.zc(2,"ion-icon",15),C.Ec(3,"ion-label"),C.zc(4,"span",16),C.Dc(),C.Dc(),C.Dc()),2&t){const t=C.Oc();C.lc(4),C.Vc("innerHTML",t.warning,C.gd)}}function AddonModBookContentsPage_ng_template_18_div_2_Template(t,o){if(1&t&&(C.Ec(0,"div",20),C.Ec(1,"strong"),C.pd(2),C.Pc(3,"translate"),C.Dc(),C.zc(4,"core-tag-list",21),C.Dc()),2&t){const t=C.Oc().item;C.lc(2),C.rd("",C.Qc(3,2,"core.tag.tags"),": "),C.lc(2),C.Vc("tags",t.tags)}}function AddonModBookContentsPage_ng_template_18_Template(t,o){if(1&t&&(C.Ec(0,"div",17),C.zc(1,"core-format-text",18),C.nd(2,AddonModBookContentsPage_ng_template_18_div_2_Template,5,4,"div",19),C.Dc()),2&t){const t=o.item,e=C.Oc();C.lc(1),C.Vc("component",e.component)("componentId",e.cmId)("text",t.content)("contextInstanceId",e.cmId)("courseId",e.courseId),C.lc(1),C.Vc("ngIf",(null==t.tags?null:t.tags.length)>0)}}function AddonModBookContentsPage_core_navigation_bar_19_Template(t,o){if(1&t){const t=C.Fc();C.Ec(0,"core-navigation-bar",22),C.Mc("action",(function AddonModBookContentsPage_core_navigation_bar_19_Template_core_navigation_bar_action_0_listener(o){C.fd(t);return C.Oc().changeChapter(o.id)})),C.Dc()}if(2&t){const t=C.Oc();C.Vc("items",t.navigationItems)}}let S=(()=>{class AddonModBookContentsPage{constructor(){this.title="",this.component=I.b.COMPONENT,this.warning="",this.displayNavBar=!0,this.navigationItems=[],this.slidesOpts={autoHeight:!0,scrollOnChange:"top"},this.loaded=!1}ngOnInit(){try{this.cmId=p.a.getRequiredRouteNumberParam("cmId"),this.courseId=p.a.getRequiredRouteNumberParam("courseId"),this.initialChapterId=p.a.getRouteNumberParam("chapterId")}catch(t){return v.a.showErrorModal(t),p.a.back(),void 0}const t=new contents_AddonModBookSlidesItemsManagerSource(this.courseId,this.cmId,g.a.areTagsAvailableInSite(),this.initialChapterId);this.manager=new r.a(t),this.managerUnsubscribe=this.manager.addListener({onSelectedItemUpdated:t=>{this.onChapterViewed(t.id)}}),this.fetchContent()}get module(){var t;return null===(t=this.manager)||void 0===t?void 0:t.getSource().module}get book(){var t;return null===(t=this.manager)||void 0===t?void 0:t.getSource().book}get chapters(){var t;return(null===(t=this.manager)||void 0===t?void 0:t.getSource().chapters)||[]}fetchContent(t=!1){var o;return Object(i.a)(this,void 0,void 0,(function*(){try{const e=null===(o=this.manager)||void 0===o?void 0:o.getSource();if(!e)return;const{module:n,book:a}=yield e.loadBookData(),i=yield this.downloadResourceIfNeeded(n,t);if(this.displayNavBar=0!=a.navstyle,this.title=a.name,yield e.loadContents(),yield e.load(),null==i?void 0:i.failed){const t=_.a.getErrorMessageFromError(i.error)||i.error;this.warning=M.M.instant("core.errordownloadingsomefiles")+(t?" "+t:"")}else this.warning=""}catch(t){v.a.showErrorModalDefault(t,"core.course.errorgetmodule",!0)}finally{this.loaded=!0}}))}downloadResourceIfNeeded(t,o=!1){var e;return Object(i.a)(this,void 0,void 0,(function*(){const n={failed:!1};let a=!1;if((yield h.a.getModuleStatus(t,this.courseId,void 0,o))!==d.a.DOWNLOADED)try{yield h.a.downloadModule(t,this.courseId),a=!0}catch(t){n.failed=!0,n.error=t}if(!(null===(e=t.contents)||void 0===e?void 0:e.length)||o&&!a){const e=o&&m.a.isOnline();try{yield u.a.loadModuleContents(t,void 0,void 0,!1,e)}catch(o){if(e&&!t.contents)yield u.a.loadModuleContents(t);else if(!t.contents)throw o}}return n}))}changeChapter(t){var o;t&&(null===(o=this.slides)||void 0===o?void 0:o.slideToItem({id:t}))}doRefresh(t){return Object(i.a)(this,void 0,void 0,(function*(){this.manager&&(yield f.a.ignoreErrors(Promise.all([this.manager.getSource().invalidateContent(),h.a.invalidateCourseUpdates(this.courseId)]))),yield f.a.ignoreErrors(this.fetchContent(!0)),null==t||t.complete()}))}showToc(){var t;return Object(i.a)(this,void 0,void 0,(function*(){const o=null===(t=this.manager)||void 0===t?void 0:t.getSelectedItem(),e=yield v.a.openSideModal({component:b.a,componentProps:{moduleId:this.cmId,chapters:this.chapters,selected:null==o?void 0:o.id,courseId:this.courseId,book:this.book}});e&&this.changeChapter(e)}))}onChapterViewed(t){return Object(i.a)(this,void 0,void 0,(function*(){if(this.displayNavBar&&(this.navigationItems=this.getNavigationItems(t)),this.book&&I.a.storeLastChapterViewed(this.book.id,t,this.courseId),!this.module)return;yield f.a.ignoreErrors(I.a.logView(this.module.instance,t,this.module.name));const o=this.chapters.findIndex((o=>o.id==t));(o<0||void 0===this.chapters[o+1])&&u.a.checkModuleCompletion(this.courseId,this.module.completiondata)}))}getNavigationItems(t){return this.chapters.map((o=>({item:o,title:o.title,current:o.id==t,enabled:!0})))}ngOnDestroy(){var t;this.managerUnsubscribe&&this.managerUnsubscribe(),null===(t=this.manager)||void 0===t||t.destroy()}}return AddonModBookContentsPage.ɵfac=function AddonModBookContentsPage_Factory(t){return new(t||AddonModBookContentsPage)},AddonModBookContentsPage.ɵcmp=C.sc({type:AddonModBookContentsPage,selectors:[["page-addon-mod-book-contents"]],viewQuery:function AddonModBookContentsPage_Query(t,o){var e;(1&t&&C.ud(l.a,!0),2&t)&&(C.dd(e=C.Nc())&&(o.slides=e.first))},decls:20,vars:16,consts:[["slot","start"],[3,"text"],["contextLevel","module",3,"text","contextInstanceId","courseId"],["slot","end"],["aria-haspopup","true",3,"click",4,"ngIf"],["slot","fixed",3,"disabled","ionRefresh"],[3,"pullingText"],[3,"hideUntil"],[1,"safe-area-padding-horizontal","core-swipe-slides-container"],["class","core-warning-card",4,"ngIf"],[3,"manager","options"],["collapsible-footer","","appearOnBottom","","previousTranslate","addon.mod_book.navprevtitle","nextTranslate","addon.mod_book.navnexttitle","slot","fixed",3,"items","action",4,"ngIf"],["aria-haspopup","true",3,"click"],["name","fas-bookmark","slot","icon-only","aria-hidden","true"],[1,"core-warning-card"],["name","fas-exclamation-triangle","slot","start","aria-hidden","true"],[3,"innerHTML"],[1,"ion-padding"],["contextLevel","module",3,"component","componentId","text","contextInstanceId","courseId"],["class","ion-margin-top",4,"ngIf"],[1,"ion-margin-top"],[3,"tags"],["collapsible-footer","","appearOnBottom","","previousTranslate","addon.mod_book.navprevtitle","nextTranslate","addon.mod_book.navnexttitle","slot","fixed",3,"items","action"]],template:function AddonModBookContentsPage_Template(t,o){1&t&&(C.Ec(0,"ion-header"),C.Ec(1,"ion-toolbar"),C.Ec(2,"ion-buttons",0),C.zc(3,"ion-back-button",1),C.Pc(4,"translate"),C.Dc(),C.Ec(5,"ion-title"),C.Ec(6,"h1"),C.zc(7,"core-format-text",2),C.Dc(),C.Dc(),C.Ec(8,"ion-buttons",3),C.nd(9,AddonModBookContentsPage_ion_button_9_Template,3,3,"ion-button",4),C.Dc(),C.Dc(),C.Dc(),C.Ec(10,"ion-content"),C.Ec(11,"ion-refresher",5),C.Mc("ionRefresh",(function AddonModBookContentsPage_Template_ion_refresher_ionRefresh_11_listener(t){return o.doRefresh(t.target)})),C.zc(12,"ion-refresher-content",6),C.Pc(13,"translate"),C.Dc(),C.Ec(14,"core-loading",7),C.Ec(15,"div",8),C.nd(16,AddonModBookContentsPage_ion_card_16_Template,5,1,"ion-card",9),C.Ec(17,"core-swipe-slides",10),C.nd(18,AddonModBookContentsPage_ng_template_18_Template,3,6,"ng-template"),C.Dc(),C.Dc(),C.Dc(),C.nd(19,AddonModBookContentsPage_core_navigation_bar_19_Template,1,1,"core-navigation-bar",11),C.Dc()),2&t&&(C.lc(3),C.Vc("text",C.Qc(4,12,"core.back")),C.lc(4),C.Vc("text",o.title)("contextInstanceId",o.cmId)("courseId",o.courseId),C.lc(2),C.Vc("ngIf",o.loaded),C.lc(2),C.Vc("disabled",!o.loaded),C.lc(1),C.Wc("pullingText",C.Qc(13,14,"core.pulltorefresh")),C.lc(2),C.Vc("hideUntil",o.loaded),C.lc(2),C.Vc("ngIf",o.warning),C.lc(1),C.Vc("manager",o.manager)("options",o.slidesOpts),C.lc(2),C.Vc("ngIf",o.loaded&&o.displayNavBar&&o.navigationItems.length>1))},directives:[k.C,k.Ab,k.m,k.h,k.i,k.yb,B.a,P.t,y.a,k.v,k.bb,k.cb,A.a,l.a,w.a,k.l,k.D,E.a,k.n,k.I,k.O,D.a,O.a,T.a],pipes:[x.d],styles:["[_nghost-%COMP%]   .core-swipe-slides-container[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{flex:none}"]}),AddonModBookContentsPage})();class contents_AddonModBookSlidesItemsManagerSource extends c.a{constructor(t,o,e,n){super(n?{id:n}:void 0),this.chapters=[],this.contentsMap={},this.COURSE_ID=t,this.CM_ID=o,this.TAGS_ENABLED=e}getItemId(t){return t.id}loadBookData(){return Object(i.a)(this,void 0,void 0,(function*(){if(this.module=yield u.a.getModule(this.CM_ID,this.COURSE_ID),this.book=yield I.a.getBook(this.COURSE_ID,this.CM_ID),!this.initialItem){const t=yield I.a.getLastChapterViewed(this.book.id);t&&(this.initialItem={id:t})}return{module:this.module,book:this.book}}))}loadContents(){return Object(i.a)(this,void 0,void 0,(function*(){if(!this.module)return;const t=yield u.a.getModuleContents(this.module,this.COURSE_ID);this.contentsMap=I.a.getContentsMap(t),this.chapters=I.a.getTocList(t)}))}loadItems(){return Object(i.a)(this,void 0,void 0,(function*(){try{return yield Promise.all(this.chapters.map((t=>Object(i.a)(this,void 0,void 0,(function*(){const o=yield I.a.getChapterContent(this.contentsMap,t.id,this.CM_ID);return{id:t.id,content:o,tags:this.TAGS_ENABLED?this.contentsMap[t.id].tags:[]}})))))}catch(t){if(!_.a.getErrorMessageFromError(t))throw new s.a(M.M.instant("addon.mod_book.errorchapter"));throw t}}))}invalidateContent(){return I.a.invalidateContent(this.CM_ID,this.COURSE_ID)}}var V=e("yQkb");const N=[{path:"",component:S}];let R=(()=>{class AddonModBookContentsPageModule{}return AddonModBookContentsPageModule.ɵmod=C.wc({type:AddonModBookContentsPageModule}),AddonModBookContentsPageModule.ɵinj=C.vc({factory:function AddonModBookContentsPageModule_Factory(t){return new(t||AddonModBookContentsPageModule)},imports:[[n.m.forChild(N),a.a,V.a],n.m]}),AddonModBookContentsPageModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&C.kd(R,{declarations:[S],imports:[n.m,a.a,V.a],exports:[n.m]}))}}]);