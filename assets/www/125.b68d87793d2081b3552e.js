(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{us9w:function(e,n,o){"use strict";o.r(n),o.d(n,"CoreTagSearchPageModule",(function(){return E}));var t=o("tyNb"),c=o("L3Fv"),a=o("PM4H"),i=o("mrSG"),g=o("nvXB"),r=o("3LXp"),s=o("bFG1"),l=o("vuGA"),_=o("kWmn"),d=o("j3ag"),h=o("vnm2"),C=o("pHTc"),P=o("YyYz"),u=o("fXoL"),M=o("TEn/"),f=o("C1x5"),O=o("nt/U"),m=o("9zps"),p=o("ofXK"),b=o("PgjG"),T=o("rf3J"),z=o("r8G5"),S=o("sYmb");function CoreTagSearchPage_ion_col_19_ion_select_option_5_Template(e,n){if(1&e&&(u.Ec(0,"ion-select-option",14),u.pd(1),u.Dc()),2&e){const e=n.$implicit;u.Vc("value",e.id),u.lc(1),u.rd(" ",e.name,"")}}function CoreTagSearchPage_ion_col_19_Template(e,n){if(1&e){const e=u.Fc();u.Ec(0,"ion-col",7),u.Ec(1,"core-combobox",13),u.Mc("onChange",(function CoreTagSearchPage_ion_col_19_Template_core_combobox_onChange_1_listener(n){u.fd(e);return u.Oc().searchTags(n)})),u.Ec(2,"ion-select-option",14),u.pd(3),u.Pc(4,"translate"),u.Dc(),u.nd(5,CoreTagSearchPage_ion_col_19_ion_select_option_5_Template,2,2,"ion-select-option",15),u.Dc(),u.Dc()}if(2&e){const e=u.Oc();u.lc(1),u.Vc("selection",e.collectionId)("disabled",e.searching),u.lc(1),u.Vc("value",0),u.lc(1),u.rd(" ",u.Qc(4,5,"core.tag.inalltagcoll")," "),u.lc(2),u.Vc("ngForOf",e.collections)}}const _c0=function(e){return{$a:e}};function CoreTagSearchPage_core_empty_box_21_Template(e,n){if(1&e&&(u.zc(0,"core-empty-box",16),u.Pc(1,"translate")),2&e){const e=u.Oc();u.Vc("message",u.Rc(1,1,"core.tag.notagsfound",u.ad(4,_c0,e.query)))}}function CoreTagSearchPage_ng_container_22_ion_badge_2_Template(e,n){if(1&e){const e=u.Fc();u.Ec(0,"ion-badge",20),u.Mc("click",(function CoreTagSearchPage_ng_container_22_ion_badge_2_Template_ion_badge_click_0_listener(){u.fd(e);const o=n.$implicit;return u.Oc(2).openTag(o)})),u.Ec(1,"span"),u.pd(2),u.Dc(),u.Dc()}if(2&e){const e=n.$implicit;u.lc(1),u.nc("size"+e.size),u.lc(1),u.qd(e.name)}}function CoreTagSearchPage_ng_container_22_p_3_Template(e,n){if(1&e&&(u.Ec(0,"p",21),u.pd(1),u.Pc(2,"translate"),u.Dc()),2&e){const e=u.Oc(2);u.lc(1),u.rd(" ",u.Rc(2,1,"core.tag.showingfirsttags",u.ad(4,_c0,e.cloud.tags.length))," ")}}function CoreTagSearchPage_ng_container_22_Template(e,n){if(1&e&&(u.Cc(0),u.Ec(1,"div",17),u.nd(2,CoreTagSearchPage_ng_container_22_ion_badge_2_Template,3,3,"ion-badge",18),u.Dc(),u.nd(3,CoreTagSearchPage_ng_container_22_p_3_Template,3,6,"p",19),u.Bc()),2&e){const e=u.Oc();u.lc(2),u.Vc("ngForOf",e.cloud.tags),u.lc(1),u.Vc("ngIf",e.cloud.tags.length<e.cloud.totalcount)}}let v=(()=>{class CoreTagSearchPage{constructor(){this.collections=[],this.loaded=!1,this.searching=!1}ngOnInit(){this.collectionId=C.a.getRouteNumberParam("collectionId")||0,this.query=C.a.getRouteParam("query")||"";(new P.a).treatLink(),this.fetchData().finally((()=>{this.loaded=!0}))}fetchData(){return Object(i.a)(this,void 0,void 0,(function*(){try{yield Promise.all([this.fetchCollections(),this.fetchTags()])}catch(e){r.a.showErrorModalDefault(e,"Error loading tags.")}}))}fetchCollections(){return Object(i.a)(this,void 0,void 0,(function*(){const e=yield _.a.getTagCollections();e.forEach((e=>{!e.name&&e.isdefault&&(e.name=d.M.instant("core.tag.defautltagcoll"))})),this.collections=e}))}fetchTags(){return Object(i.a)(this,void 0,void 0,(function*(){this.cloud=yield _.a.getTagCloud(this.collectionId,void 0,void 0,this.query)}))}openTag(e){const n=l.a.decodeURI(e.viewurl);h.a.handleLink(n)}refreshData(e){s.a.allPromises([_.a.invalidateTagCollections(),_.a.invalidateTagCloud(this.collectionId,void 0,void 0,this.query)]).finally((()=>this.fetchData().finally((()=>{null==e?void 0:e.complete()}))))}searchTags(e){return this.searching=!0,this.query=e,g.a.closeKeyboard(),this.fetchTags().catch((e=>{r.a.showErrorModalDefault(e,"Error loading tags.")})).finally((()=>{this.searching=!1}))}}return CoreTagSearchPage.ɵfac=function CoreTagSearchPage_Factory(e){return new(e||CoreTagSearchPage)},CoreTagSearchPage.ɵcmp=u.sc({type:CoreTagSearchPage,selectors:[["page-core-tag-search"]],decls:23,vars:20,consts:[["slot","start"],[3,"text"],["slot","end"],["slot","fixed",3,"disabled","ionRefresh"],[3,"pullingText"],[1,"safe-area-padding"],[1,"ion-no-padding","ion-wrap"],["size","12","size-sm","6",1,"ion-no-padding"],["autocorrect","off","searchArea","CoreTag",3,"initialSearch","disabled","spellcheck","autoFocus","lengthCheck","onSubmit","onClear"],["class","ion-no-padding","size","12","size-sm","6",4,"ngIf"],[3,"hideUntil"],["icon","fas-tags",3,"message",4,"ngIf"],[4,"ngIf"],[3,"selection","disabled","onChange"],[1,"ion-text-wrap",3,"value"],["class","ion-text-wrap",3,"value",4,"ngFor","ngForOf"],["icon","fas-tags",3,"message"],[1,"ion-text-center","core-tag-cloud"],["class","ion-text-wrap",3,"click",4,"ngFor","ngForOf"],["class","ion-text-center",4,"ngIf"],[1,"ion-text-wrap",3,"click"],[1,"ion-text-center"]],template:function CoreTagSearchPage_Template(e,n){1&e&&(u.Ec(0,"ion-header"),u.Ec(1,"ion-toolbar"),u.Ec(2,"ion-buttons",0),u.zc(3,"ion-back-button",1),u.Pc(4,"translate"),u.Dc(),u.Ec(5,"ion-title"),u.Ec(6,"h1"),u.pd(7),u.Pc(8,"translate"),u.Dc(),u.Dc(),u.Ec(9,"ion-buttons",2),u.zc(10,"core-user-menu-button"),u.Dc(),u.Dc(),u.Dc(),u.Ec(11,"ion-content"),u.Ec(12,"ion-refresher",3),u.Mc("ionRefresh",(function CoreTagSearchPage_Template_ion_refresher_ionRefresh_12_listener(e){return n.refreshData(e.target)})),u.zc(13,"ion-refresher-content",4),u.Pc(14,"translate"),u.Dc(),u.Ec(15,"ion-grid",5),u.Ec(16,"ion-row",6),u.Ec(17,"ion-col",7),u.Ec(18,"core-search-box",8),u.Mc("onSubmit",(function CoreTagSearchPage_Template_core_search_box_onSubmit_18_listener(e){return n.searchTags(e)}))("onClear",(function CoreTagSearchPage_Template_core_search_box_onClear_18_listener(){return n.searchTags("")})),u.Dc(),u.Dc(),u.nd(19,CoreTagSearchPage_ion_col_19_Template,6,7,"ion-col",9),u.Dc(),u.Dc(),u.Ec(20,"core-loading",10),u.nd(21,CoreTagSearchPage_core_empty_box_21_Template,2,6,"core-empty-box",11),u.nd(22,CoreTagSearchPage_ng_container_22_Template,4,2,"ng-container",12),u.Dc(),u.Dc()),2&e&&(u.lc(3),u.Vc("text",u.Qc(4,14,"core.back")),u.lc(4),u.qd(u.Qc(8,16,"core.tag.searchtags")),u.lc(5),u.Vc("disabled",!n.loaded),u.lc(1),u.Wc("pullingText",u.Qc(14,18,"core.pulltorefresh")),u.lc(4),u.mc("col-sm-6",n.collections&&n.collections.length>1?"":null),u.lc(1),u.Vc("initialSearch",n.query)("disabled",n.searching)("spellcheck",!1)("autoFocus",!1)("lengthCheck",0),u.lc(1),u.Vc("ngIf",n.collections&&n.collections.length>1),u.lc(1),u.Vc("hideUntil",n.loaded&&!n.searching),u.lc(1),u.Vc("ngIf",!n.cloud||!n.cloud.tags||!n.cloud.tags.length),u.lc(1),u.Vc("ngIf",n.cloud&&n.cloud.tags&&n.cloud.tags.length>0))},directives:[M.C,M.Ab,M.m,M.h,M.i,M.yb,f.a,O.a,M.v,M.bb,M.cb,M.B,M.hb,M.u,m.a,p.t,b.a,T.a,M.mb,p.s,z.a,M.k],pipes:[S.d],styles:["[_nghost-%COMP%]   core-search-box[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{width:100%!important;margin:0!important}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]{margin:8px;cursor:pointer}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size20[_ngcontent-%COMP%]{font-size:3.4rem}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size19[_ngcontent-%COMP%]{font-size:3.3rem}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size18[_ngcontent-%COMP%]{font-size:3.2rem}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size17[_ngcontent-%COMP%]{font-size:3.1rem}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size16[_ngcontent-%COMP%]{font-size:3rem}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size15[_ngcontent-%COMP%]{font-size:2.9rem}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size14[_ngcontent-%COMP%]{font-size:2.8rem}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size13[_ngcontent-%COMP%]{font-size:2.7rem}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size12[_ngcontent-%COMP%]{font-size:2.6rem}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size11[_ngcontent-%COMP%]{font-size:2.5rem}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size10[_ngcontent-%COMP%]{font-size:2.4rem}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size9[_ngcontent-%COMP%]{font-size:2.3rem}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size8[_ngcontent-%COMP%]{font-size:2.2rem}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size7[_ngcontent-%COMP%]{font-size:2.1rem}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size6[_ngcontent-%COMP%]{font-size:2rem}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size5[_ngcontent-%COMP%]{font-size:1.9rem}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size4[_ngcontent-%COMP%]{font-size:1.8rem}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size3[_ngcontent-%COMP%]{font-size:1.7rem}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size2[_ngcontent-%COMP%]{font-size:1.6rem}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size1[_ngcontent-%COMP%]{font-size:1.5rem}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size0[_ngcontent-%COMP%]{font-size:1.4rem}"]}),CoreTagSearchPage})();var y=o("dQ3M");const D=[{path:"",component:v}];let E=(()=>{class CoreTagSearchPageModule{}return CoreTagSearchPageModule.ɵmod=u.wc({type:CoreTagSearchPageModule}),CoreTagSearchPageModule.ɵinj=u.vc({factory:function CoreTagSearchPageModule_Factory(e){return new(e||CoreTagSearchPageModule)},imports:[[t.m.forChild(D),c.a,a.a,y.a],t.m]}),CoreTagSearchPageModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&u.kd(E,{declarations:[v],imports:[t.m,c.a,a.a,y.a],exports:[t.m]}))}}]);