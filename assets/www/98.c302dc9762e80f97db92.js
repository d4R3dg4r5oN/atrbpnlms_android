(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{"7rPB":function(e,s,o){"use strict";o.r(s),o.d(s,"CoreCoursesListPageModule",(function(){return I}));var r=o("tyNb"),t=o("L3Fv"),a=o("oV7r"),c=o("PM4H"),i=o("mrSG"),n=o("ZSwf"),l=o("pHTc"),d=o("9+EE"),h=o("3LXp"),u=o("fjkH"),_=o("Xzvb"),C=o("fXoL"),g=o("TEn/"),b=o("ofXK"),f=o("fQ68"),m=o("8/N+"),E=o("C1x5"),p=o("nt/U"),P=o("PgjG"),w=o("xpMl"),y=o("9zps"),L=o("Y7jA"),D=o("r8G5"),M=o("sYmb");function CoreCoursesListPage_h1_6_Template(e,s){1&e&&(C.Ec(0,"h1"),C.pd(1),C.Pc(2,"translate"),C.Dc()),2&e&&(C.lc(1),C.qd(C.Qc(2,1,"core.courses.availablecourses")))}function CoreCoursesListPage_h1_7_Template(e,s){1&e&&(C.Ec(0,"h1"),C.pd(1),C.Pc(2,"translate"),C.Dc()),2&e&&(C.lc(1),C.qd(C.Qc(2,1,"core.courses.mycourses")))}function CoreCoursesListPage_core_context_menu_item_10_Template(e,s){if(1&e){const e=C.Fc();C.Ec(0,"core-context-menu-item",5),C.Mc("action",(function CoreCoursesListPage_core_context_menu_item_10_Template_core_context_menu_item_action_0_listener(){C.fd(e);return C.Oc().toggleDownload()}))("toggleChange",(function CoreCoursesListPage_core_context_menu_item_10_Template_core_context_menu_item_toggleChange_0_listener(s){C.fd(e);return C.Oc().downloadEnabled=s})),C.Pc(1,"translate"),C.Dc()}if(2&e){const e=C.Oc();C.Vc("priority",1e3)("content",C.Qc(1,3,"core.settings.showdownloadoptions"))("toggle",e.downloadEnabled)}}function CoreCoursesListPage_core_search_box_18_Template(e,s){if(1&e){const e=C.Fc();C.Ec(0,"core-search-box",15),C.Mc("onSubmit",(function CoreCoursesListPage_core_search_box_18_Template_core_search_box_onSubmit_0_listener(s){C.fd(e);return C.Oc().search(s)}))("onClear",(function CoreCoursesListPage_core_search_box_18_Template_core_search_box_onClear_0_listener(){C.fd(e);return C.Oc().clearSearch()})),C.Pc(1,"translate"),C.Pc(2,"translate"),C.Dc()}if(2&e){const e=C.Oc();C.Vc("placeholder",C.Qc(1,3,"core.courses.search"))("searchLabel",C.Qc(2,5,"core.courses.search"))("autoFocus",e.searchMode)}}const _c0=function(e){return{$a:e}};function CoreCoursesListPage_ng_container_20_Template(e,s){if(1&e&&(C.Cc(0),C.Ec(1,"ion-item-divider"),C.Ec(2,"ion-label"),C.Ec(3,"h2"),C.pd(4),C.Pc(5,"translate"),C.Dc(),C.Dc(),C.Dc(),C.Bc()),2&e){const e=C.Oc();C.lc(4),C.qd(C.Rc(5,1,"core.courses.totalcoursesearchresults",C.ad(4,_c0,e.searchTotal)))}}function CoreCoursesListPage_core_courses_course_list_item_22_Template(e,s){if(1&e&&C.zc(0,"core-courses-course-list-item",16),2&e){const e=s.$implicit,o=C.Oc();C.Vc("course",e)("showDownload",o.downloadEnabled)}}function CoreCoursesListPage_core_empty_box_24_Template(e,s){1&e&&(C.zc(0,"core-empty-box",17),C.Pc(1,"translate")),2&e&&C.Vc("message",C.Qc(1,1,"core.courses.nosearchresults"))}function CoreCoursesListPage_core_empty_box_25_Template(e,s){1&e&&(C.zc(0,"core-empty-box",18),C.Pc(1,"translate")),2&e&&C.Vc("message",C.Qc(1,1,"core.courses.nocourses"))}let T=(()=>{class CoreCoursesListPage{constructor(){this.downloadAllCoursesEnabled=!1,this.searchEnabled=!1,this.searchMode=!1,this.searchTotal=0,this.downloadEnabled=!1,this.downloadCourseEnabled=!1,this.downloadCoursesEnabled=!1,this.courses=[],this.loaded=!1,this.coursesLoaded=0,this.canLoadMore=!1,this.loadMoreError=!1,this.showOnlyEnrolled=!1,this.loadedCourses=[],this.loadCoursesPerPage=20,this.searchPage=0,this.searchText="",this.courseIds="",this.isDestroyed=!1,this.currentSiteId=d.b.getRequiredCurrentSite().getId(),this.frontpageCourseId=d.b.getRequiredCurrentSite().getSiteHomeId(),this.myCoursesObserver=u.b.on(_.b.EVENT_MY_COURSES_UPDATED,(e=>{e.action==_.b.ACTION_ENROL&&this.fetchCourses()}),this.currentSiteId),this.siteUpdatedObserver=u.b.on(u.b.SITE_UPDATED,(()=>{this.searchEnabled=!_.a.isSearchCoursesDisabledInSite(),this.downloadCourseEnabled=!_.a.isDownloadCourseDisabledInSite(),this.downloadCoursesEnabled=!_.a.isDownloadCoursesDisabledInSite(),this.downloadEnabled=(this.downloadCourseEnabled||this.downloadCoursesEnabled)&&this.downloadEnabled,!this.searchEnabled&&this.searchMode&&(this.searchMode=!1,this.fetchCourses())}),this.currentSiteId),this.downloadEnabledObserver=u.b.on(_.b.EVENT_DASHBOARD_DOWNLOAD_ENABLED_CHANGED,(e=>{this.downloadEnabled=(this.downloadCourseEnabled||this.downloadCoursesEnabled)&&e.enabled}))}ngOnInit(){this.downloadCourseEnabled=!_.a.isDownloadCourseDisabledInSite(),this.downloadCoursesEnabled=!_.a.isDownloadCoursesDisabledInSite(),this.downloadEnabled=(this.downloadCourseEnabled||this.downloadCoursesEnabled)&&_.a.getCourseDownloadOptionsEnabled();const e=l.a.getRouteParam("mode")||"my";"search"==e&&(this.searchMode=!0),"my"==e&&(this.showOnlyEnrolled=!0),this.searchEnabled=!_.a.isSearchCoursesDisabledInSite(),this.searchEnabled||(this.searchMode=!1),this.fetchCourses()}fetchCourses(){return Object(i.a)(this,void 0,void 0,(function*(){try{this.searchMode?this.searchText&&(yield this.search(this.searchText)):yield this.loadCourses(!0)}finally{this.loaded=!0}}))}loadCourses(e=!1){return Object(i.a)(this,void 0,void 0,(function*(){this.loadMoreError=!1;try{if(e){if(this.showOnlyEnrolled)this.loadedCourses=yield _.a.getUserCourses();else{const e=yield _.a.getCoursesByField();this.loadedCourses=e.filter((e=>e.id!=this.frontpageCourseId))}this.coursesLoaded=0,this.courses=[]}const s=this.loadedCourses.slice(this.coursesLoaded,this.coursesLoaded+this.loadCoursesPerPage);yield n.a.loadCoursesExtraInfo(s,!0),this.courses=this.courses.concat(s),this.courseIds=this.courses.map((e=>e.id)).join(","),this.coursesLoaded=this.courses.length,this.canLoadMore=this.loadedCourses.length>this.courses.length}catch(e){this.loadMoreError=!0,!this.isDestroyed&&h.a.showErrorModalDefault(e,"core.courses.errorloadcourses",!0)}}))}refreshCourses(e){const s=[];this.searchMode||(s.push(this.showOnlyEnrolled?_.a.invalidateUserCourses():_.a.invalidateCoursesByField()),this.courseIds&&s.push(_.a.invalidateCoursesByField("ids",this.courseIds))),Promise.all(s).finally((()=>{this.fetchCourses().finally((()=>{null==e?void 0:e.complete()}))}))}search(e){return Object(i.a)(this,void 0,void 0,(function*(){this.searchMode=!0,this.searchText=e,this.courses=[],this.searchPage=0,this.searchTotal=0;const s=yield h.a.showModalLoading("core.searching",!0);yield this.searchCourses().finally((()=>{s.dismiss()}))}))}clearSearch(){this.searchText="",this.courses=[],this.searchPage=0,this.searchTotal=0,this.searchMode=!1,this.loaded=!1,this.fetchCourses()}loadMoreCourses(e){return Object(i.a)(this,void 0,void 0,(function*(){try{this.searchMode?yield this.searchCourses():yield this.loadCourses()}finally{e&&e()}}))}searchCourses(){return Object(i.a)(this,void 0,void 0,(function*(){this.loadMoreError=!1;try{const e=yield _.a.search(this.searchText,this.searchPage,void 0,this.showOnlyEnrolled);this.courses=0===this.searchPage?e.courses:this.courses.concat(e.courses),this.searchTotal=e.total,this.searchPage++,this.canLoadMore=this.courses.length<this.searchTotal}catch(e){this.loadMoreError=!0,!this.isDestroyed&&h.a.showErrorModalDefault(e,"core.courses.errorsearching",!0)}}))}toggleEnrolled(){this.loaded=!1,this.fetchCourses()}toggleDownload(){_.a.setCourseDownloadOptionsEnabled(this.downloadEnabled)}ngOnDestroy(){this.myCoursesObserver.off(),this.siteUpdatedObserver.off(),this.downloadEnabledObserver.off(),this.isDestroyed=!0}}return CoreCoursesListPage.ɵfac=function CoreCoursesListPage_Factory(e){return new(e||CoreCoursesListPage)},CoreCoursesListPage.ɵcmp=C.sc({type:CoreCoursesListPage,selectors:[["page-core-courses-list"]],decls:26,vars:23,consts:[["slot","start"],[3,"text"],[4,"ngIf"],["slot","end"],["iconAction","toggle",3,"priority","content","toggle","action","toggleChange",4,"ngIf"],["iconAction","toggle",3,"priority","content","toggle","action","toggleChange"],["slot","fixed",3,"disabled","ionRefresh"],[3,"pullingText"],["searchArea","CoreCoursesSearch",3,"placeholder","searchLabel","autoFocus","onSubmit","onClear",4,"ngIf"],[3,"hideUntil"],[1,"list-item-limited-width"],[3,"course","showDownload",4,"ngFor","ngForOf"],[3,"enabled","error","action"],["icon","fas-search",3,"message",4,"ngIf"],["icon","fas-graduation-cap",3,"message",4,"ngIf"],["searchArea","CoreCoursesSearch",3,"placeholder","searchLabel","autoFocus","onSubmit","onClear"],[3,"course","showDownload"],["icon","fas-search",3,"message"],["icon","fas-graduation-cap",3,"message"]],template:function CoreCoursesListPage_Template(e,s){1&e&&(C.Ec(0,"ion-header"),C.Ec(1,"ion-toolbar"),C.Ec(2,"ion-buttons",0),C.zc(3,"ion-back-button",1),C.Pc(4,"translate"),C.Dc(),C.Ec(5,"ion-title"),C.nd(6,CoreCoursesListPage_h1_6_Template,3,3,"h1",2),C.nd(7,CoreCoursesListPage_h1_7_Template,3,3,"h1",2),C.Dc(),C.Ec(8,"ion-buttons",3),C.Ec(9,"core-context-menu"),C.nd(10,CoreCoursesListPage_core_context_menu_item_10_Template,2,5,"core-context-menu-item",4),C.Ec(11,"core-context-menu-item",5),C.Mc("action",(function CoreCoursesListPage_Template_core_context_menu_item_action_11_listener(){return s.toggleEnrolled()}))("toggleChange",(function CoreCoursesListPage_Template_core_context_menu_item_toggleChange_11_listener(e){return s.showOnlyEnrolled=e})),C.Pc(12,"translate"),C.Dc(),C.Dc(),C.zc(13,"core-user-menu-button"),C.Dc(),C.Dc(),C.Dc(),C.Ec(14,"ion-content"),C.Ec(15,"ion-refresher",6),C.Mc("ionRefresh",(function CoreCoursesListPage_Template_ion_refresher_ionRefresh_15_listener(e){return s.refreshCourses(e.target)})),C.zc(16,"ion-refresher-content",7),C.Pc(17,"translate"),C.Dc(),C.nd(18,CoreCoursesListPage_core_search_box_18_Template,3,7,"core-search-box",8),C.Ec(19,"core-loading",9),C.nd(20,CoreCoursesListPage_ng_container_20_Template,6,6,"ng-container",2),C.Ec(21,"ion-list",10),C.nd(22,CoreCoursesListPage_core_courses_course_list_item_22_Template,1,2,"core-courses-course-list-item",11),C.Dc(),C.Ec(23,"core-infinite-loading",12),C.Mc("action",(function CoreCoursesListPage_Template_core_infinite_loading_action_23_listener(e){return s.loadMoreCourses(e)})),C.Dc(),C.nd(24,CoreCoursesListPage_core_empty_box_24_Template,2,3,"core-empty-box",13),C.nd(25,CoreCoursesListPage_core_empty_box_25_Template,2,3,"core-empty-box",14),C.Dc(),C.Dc()),2&e&&(C.lc(3),C.Vc("text",C.Qc(4,17,"core.back")),C.lc(3),C.Vc("ngIf",!s.showOnlyEnrolled),C.lc(1),C.Vc("ngIf",s.showOnlyEnrolled),C.lc(3),C.Vc("ngIf",s.downloadCourseEnabled||s.downloadCoursesEnabled),C.lc(1),C.Vc("priority",900)("content",C.Qc(12,19,"core.courses.showonlyenrolled"))("toggle",s.showOnlyEnrolled),C.lc(4),C.Vc("disabled",!s.loaded),C.lc(1),C.Wc("pullingText",C.Qc(17,21,"core.pulltorefresh")),C.lc(2),C.Vc("ngIf",s.searchEnabled),C.lc(1),C.Vc("hideUntil",s.loaded),C.lc(1),C.Vc("ngIf",s.searchMode&&s.searchTotal>0),C.lc(2),C.Vc("ngForOf",s.courses),C.lc(1),C.Vc("enabled",s.canLoadMore)("error",s.loadMoreError),C.lc(1),C.Vc("ngIf",s.searchMode&&!s.courses.length),C.lc(1),C.Vc("ngIf",!s.searchMode&&!s.courses.length))},directives:[g.C,g.Ab,g.m,g.h,g.i,g.yb,b.t,f.a,m.a,E.a,p.a,g.v,g.bb,g.cb,P.a,g.P,b.s,w.a,y.a,g.J,g.O,L.a,D.a],pipes:[M.d],encapsulation:2}),CoreCoursesListPage})();var x=o("dQ3M");const O=[{path:"",component:T}];let I=(()=>{class CoreCoursesListPageModule{}return CoreCoursesListPageModule.ɵmod=C.wc({type:CoreCoursesListPageModule}),CoreCoursesListPageModule.ɵinj=C.vc({factory:function CoreCoursesListPageModule_Factory(e){return new(e||CoreCoursesListPageModule)},imports:[[r.m.forChild(O),t.a,a.a,c.a,x.a],r.m]}),CoreCoursesListPageModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&C.kd(I,{declarations:[T],imports:[r.m,t.a,a.a,c.a,x.a],exports:[r.m]}))}}]);