(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"9DI8":function(e,c,n){"use strict";n.d(c,"a",(function(){return A}));var o=n("mrSG"),t=n("pHTc"),i=n("3LXp"),s=n("RJwM"),r=n("EoRH"),a=n("baaQ"),_=n("2ACH"),d=n("fXoL"),p=n("TEn/"),m=n("nt/U"),l=n("PgjG"),u=n("ofXK"),C=n("TKc2"),g=n("FeAf"),f=n("r8G5"),y=n("hMzs"),P=n("iSJP"),h=n("eAud"),v=n("sYmb");function AddonCompetencyCourseCompetenciesPage_ion_card_14_ng_container_1_ion_item_1_Template(e,c){1&e&&(d.Ec(0,"ion-item",11),d.Ec(1,"ion-label"),d.pd(2),d.Pc(3,"translate"),d.Dc(),d.Dc()),2&e&&(d.lc(2),d.qd(d.Qc(3,1,"addon.competency.coursecompetencyratingsarepushedtouserplans")))}function AddonCompetencyCourseCompetenciesPage_ion_card_14_ng_container_1_ion_item_2_Template(e,c){1&e&&(d.Ec(0,"ion-item",12),d.Ec(1,"ion-label"),d.pd(2),d.Pc(3,"translate"),d.Dc(),d.Dc()),2&e&&(d.lc(2),d.qd(d.Qc(3,1,"addon.competency.coursecompetencyratingsarenotpushedtouserplans")))}function AddonCompetencyCourseCompetenciesPage_ion_card_14_ng_container_1_Template(e,c){if(1&e&&(d.Cc(0),d.nd(1,AddonCompetencyCourseCompetenciesPage_ion_card_14_ng_container_1_ion_item_1_Template,4,3,"ion-item",9),d.nd(2,AddonCompetencyCourseCompetenciesPage_ion_card_14_ng_container_1_ion_item_2_Template,4,3,"ion-item",10),d.Bc()),2&e){const e=d.Oc(2);d.lc(1),d.Vc("ngIf",e.courseCompetencies.settings.pushratingstouserplans),d.lc(1),d.Vc("ngIf",!e.courseCompetencies.settings.pushratingstouserplans)}}const _c0=function(e,c){return{x:e,y:c}},_c1=function(e){return{$a:e}};function AddonCompetencyCourseCompetenciesPage_ion_card_14_ion_item_2_Template(e,c){if(1&e&&(d.Ec(0,"ion-item",11),d.Ec(1,"ion-label"),d.Ec(2,"span",13),d.pd(3),d.Pc(4,"translate"),d.Dc(),d.zc(5,"core-progress-bar",14),d.Dc(),d.Dc()),2&e){const e=d.Oc(2);d.lc(2),d.Xc("id","addon-competency-course-",e.courseId,"-progress"),d.lc(1),d.rd(" ",d.Rc(4,4,"addon.competency.xcompetenciesproficientoutofyincourse",d.ad(10,_c1,d.bd(7,_c0,e.courseCompetencies.statistics.proficientcompetencycount,e.courseCompetencies.statistics.competencycount)))," "),d.lc(2),d.Xc("ariaDescribedBy","addon-competency-course-",e.courseId,"-progress"),d.Vc("progress",e.courseCompetencies.statistics.proficientcompetencypercentage)}}function AddonCompetencyCourseCompetenciesPage_ion_card_14_ion_item_3_p_5_Template(e,c){if(1&e){const e=d.Fc();d.Ec(0,"p"),d.Ec(1,"button",17),d.Mc("click",(function AddonCompetencyCourseCompetenciesPage_ion_card_14_ion_item_3_p_5_Template_button_click_1_listener(){d.fd(e);const n=c.$implicit;return d.Oc(3).openCompetencySummary(n.id)})),d.pd(2),d.Dc(),d.Dc()}if(2&e){const e=c.$implicit;d.lc(2),d.sd(" ",e.shortname," - ",e.idnumber," ")}}function AddonCompetencyCourseCompetenciesPage_ion_card_14_ion_item_3_Template(e,c){if(1&e&&(d.Ec(0,"ion-item",11),d.Ec(1,"ion-label"),d.Ec(2,"p",15),d.pd(3),d.Pc(4,"translate"),d.Dc(),d.nd(5,AddonCompetencyCourseCompetenciesPage_ion_card_14_ion_item_3_p_5_Template,3,2,"p",16),d.Dc(),d.Dc()),2&e){const e=d.Oc(2);d.lc(3),d.qd(d.Qc(4,2,"addon.competency.competenciesmostoftennotproficientincourse")),d.lc(2),d.Vc("ngForOf",e.courseCompetencies.statistics.leastproficient)}}function AddonCompetencyCourseCompetenciesPage_ion_card_14_Template(e,c){if(1&e&&(d.Ec(0,"ion-card"),d.nd(1,AddonCompetencyCourseCompetenciesPage_ion_card_14_ng_container_1_Template,3,2,"ng-container",6),d.nd(2,AddonCompetencyCourseCompetenciesPage_ion_card_14_ion_item_2_Template,6,12,"ion-item",9),d.nd(3,AddonCompetencyCourseCompetenciesPage_ion_card_14_ion_item_3_Template,6,4,"ion-item",9),d.Dc()),2&e){const e=d.Oc();d.lc(1),d.Vc("ngIf",e.courseCompetencies.cangradecompetencies),d.lc(1),d.Vc("ngIf",e.courseCompetencies.statistics.canbegradedincourse),d.lc(1),d.Vc("ngIf",e.courseCompetencies.statistics.canmanagecoursecompetencies&&e.courseCompetencies.statistics.leastproficientcount>0)}}function AddonCompetencyCourseCompetenciesPage_h2_15_Template(e,c){1&e&&(d.Ec(0,"h2",18),d.pd(1),d.Pc(2,"translate"),d.Dc()),2&e&&(d.lc(1),d.rd(" ",d.Qc(2,1,"addon.competency.coursecompetencies")," "))}function AddonCompetencyCourseCompetenciesPage_ion_card_16_Template(e,c){if(1&e&&(d.Ec(0,"ion-card"),d.Ec(1,"ion-item",11),d.zc(2,"core-user-avatar",19),d.Ec(3,"ion-label"),d.Ec(4,"h2"),d.pd(5),d.Dc(),d.Dc(),d.Dc(),d.Dc()),2&e){const e=d.Oc();d.lc(2),d.Vc("user",e.user),d.lc(3),d.qd(e.user.fullname)}}function AddonCompetencyCourseCompetenciesPage_core_empty_box_17_Template(e,c){1&e&&(d.zc(0,"core-empty-box",20),d.Pc(1,"translate")),2&e&&d.Wc("message",d.Qc(1,1,"addon.competency.nocompetenciesincourse"))}function AddonCompetencyCourseCompetenciesPage_div_18_ion_card_1_ion_badge_7_Template(e,c){if(1&e&&(d.Ec(0,"ion-badge",25),d.pd(1),d.Dc()),2&e){const e=d.Oc().$implicit;d.Vc("color",e.usercompetencycourse.proficiency?"success":"danger"),d.lc(1),d.rd(" ",e.usercompetencycourse.gradename," ")}}function AddonCompetencyCourseCompetenciesPage_div_18_ion_card_1_p_10_Template(e,c){if(1&e&&(d.Ec(0,"p"),d.zc(1,"core-format-text",26),d.Dc()),2&e){const e=d.Oc().$implicit,c=d.Oc(2);d.lc(1),d.Vc("text",e.competency.description)("contextInstanceId",c.courseId)}}function AddonCompetencyCourseCompetenciesPage_div_18_ion_card_1_a_16_Template(e,c){if(1&e&&(d.Ec(0,"a",27),d.pd(1),d.Dc()),2&e){const e=d.Oc().$implicit,c=d.Oc(2);d.Vc("href",c.getCompetencyFrameworkUrl(e),d.id)("title",e.comppath.framework.name),d.lc(1),d.rd(" ",e.comppath.framework.name," ")}}function AddonCompetencyCourseCompetenciesPage_div_18_ion_card_1_ng_container_17_Template(e,c){if(1&e&&(d.Cc(0),d.pd(1),d.Bc()),2&e){const e=d.Oc().$implicit;d.lc(1),d.rd(" ",e.comppath.framework.name," ")}}function AddonCompetencyCourseCompetenciesPage_div_18_ion_card_1_ng_container_19_button_1_Template(e,c){if(1&e){const e=d.Fc();d.Ec(0,"button",17),d.Mc("click",(function AddonCompetencyCourseCompetenciesPage_div_18_ion_card_1_ng_container_19_button_1_Template_button_click_0_listener(){d.fd(e);const c=d.Oc().$implicit;return d.Oc(3).openCompetencySummary(c.id)})),d.pd(1),d.Dc()}if(2&e){const e=d.Oc().$implicit;d.lc(1),d.rd(" ",e.name," ")}}function AddonCompetencyCourseCompetenciesPage_div_18_ion_card_1_ng_container_19_ng_container_2_Template(e,c){if(1&e&&(d.Cc(0),d.pd(1),d.Bc()),2&e){const e=d.Oc().$implicit;d.lc(1),d.qd(e.name)}}function AddonCompetencyCourseCompetenciesPage_div_18_ion_card_1_ng_container_19_ng_container_3_Template(e,c){1&e&&(d.Cc(0),d.pd(1," / "),d.Bc())}function AddonCompetencyCourseCompetenciesPage_div_18_ion_card_1_ng_container_19_Template(e,c){if(1&e&&(d.Cc(0),d.nd(1,AddonCompetencyCourseCompetenciesPage_div_18_ion_card_1_ng_container_19_button_1_Template,2,1,"button",28),d.nd(2,AddonCompetencyCourseCompetenciesPage_div_18_ion_card_1_ng_container_19_ng_container_2_Template,2,1,"ng-container",6),d.nd(3,AddonCompetencyCourseCompetenciesPage_div_18_ion_card_1_ng_container_19_ng_container_3_Template,2,0,"ng-container",6),d.Bc()),2&e){const e=c.$implicit,n=d.Oc().$implicit;d.lc(1),d.Vc("ngIf",n.comppath.showlinks),d.lc(1),d.Vc("ngIf",!n.comppath.showlinks),d.lc(1),d.Vc("ngIf",!e.last)}}function AddonCompetencyCourseCompetenciesPage_div_18_ion_card_1_div_20_ng_container_4_span_1_Template(e,c){if(1&e&&(d.Ec(0,"span"),d.pd(1),d.Dc()),2&e){const e=d.Oc().$implicit;d.lc(1),d.qd(e.text)}}function AddonCompetencyCourseCompetenciesPage_div_18_ion_card_1_div_20_ng_container_4_Template(e,c){if(1&e&&(d.Cc(0),d.nd(1,AddonCompetencyCourseCompetenciesPage_div_18_ion_card_1_div_20_ng_container_4_span_1_Template,2,1,"span",6),d.Bc()),2&e){const e=c.$implicit;d.lc(1),d.Vc("ngIf",e.selected)}}function AddonCompetencyCourseCompetenciesPage_div_18_ion_card_1_div_20_Template(e,c){if(1&e&&(d.Ec(0,"div"),d.Ec(1,"p",15),d.pd(2),d.Pc(3,"translate"),d.Dc(),d.nd(4,AddonCompetencyCourseCompetenciesPage_div_18_ion_card_1_div_20_ng_container_4_Template,2,1,"ng-container",16),d.Dc()),2&e){const e=d.Oc().$implicit;d.lc(2),d.qd(d.Qc(3,2,"addon.competency.uponcoursecompletion")),d.lc(2),d.Vc("ngForOf",e.ruleoutcomeoptions)}}function AddonCompetencyCourseCompetenciesPage_div_18_ion_card_1_p_25_Template(e,c){1&e&&(d.Ec(0,"p"),d.pd(1),d.Pc(2,"translate"),d.Dc()),2&e&&(d.lc(1),d.rd(" ",d.Qc(2,1,"addon.competency.noactivities")," "))}function AddonCompetencyCourseCompetenciesPage_div_18_ion_card_1_ion_item_26_core_mod_icon_1_Template(e,c){if(1&e&&d.zc(0,"core-mod-icon",32),2&e){const e=d.Oc().$implicit;d.Vc("modicon",e.iconurl)("showAlt",!1)}}function AddonCompetencyCourseCompetenciesPage_div_18_ion_card_1_ion_item_26_Template(e,c){if(1&e&&(d.Ec(0,"ion-item",29),d.nd(1,AddonCompetencyCourseCompetenciesPage_div_18_ion_card_1_ion_item_26_core_mod_icon_1_Template,1,2,"core-mod-icon",30),d.Ec(2,"ion-label"),d.zc(3,"core-format-text",31),d.Dc(),d.Dc()),2&e){const e=c.$implicit,n=d.Oc(3);d.Vc("href",e.url),d.mc("aria-label",e.name),d.lc(1),d.Vc("ngIf",e.iconurl),d.lc(2),d.Vc("text",e.name)("contextInstanceId",e.id)("courseId",n.courseId)}}function AddonCompetencyCourseCompetenciesPage_div_18_ion_card_1_div_27_p_4_Template(e,c){1&e&&(d.Ec(0,"p"),d.pd(1),d.Pc(2,"translate"),d.Dc()),2&e&&(d.lc(1),d.rd(" ",d.Qc(2,1,"addon.competency.nouserplanswithcompetency")," "))}function AddonCompetencyCourseCompetenciesPage_div_18_ion_card_1_div_27_ion_item_5_Template(e,c){if(1&e&&(d.Ec(0,"ion-item",34),d.Ec(1,"ion-label"),d.zc(2,"core-format-text",35),d.Dc(),d.Dc()),2&e){const e=c.$implicit;d.Vc("href",e.url),d.mc("aria-label",e.name),d.lc(2),d.Vc("text",e.name)("contextInstanceId",e.userid)}}function AddonCompetencyCourseCompetenciesPage_div_18_ion_card_1_div_27_Template(e,c){if(1&e&&(d.Ec(0,"div"),d.Ec(1,"p",15),d.pd(2),d.Pc(3,"translate"),d.Dc(),d.nd(4,AddonCompetencyCourseCompetenciesPage_div_18_ion_card_1_div_27_p_4_Template,3,3,"p",6),d.nd(5,AddonCompetencyCourseCompetenciesPage_div_18_ion_card_1_div_27_ion_item_5_Template,3,4,"ion-item",33),d.Dc()),2&e){const e=d.Oc().$implicit;d.lc(2),d.qd(d.Qc(3,3,"addon.competency.userplans")),d.lc(2),d.Vc("ngIf",0==e.plans.length),d.lc(1),d.Vc("ngForOf",e.plans)}}function AddonCompetencyCourseCompetenciesPage_div_18_ion_card_1_Template(e,c){if(1&e){const e=d.Fc();d.Ec(0,"ion-card"),d.Ec(1,"ion-item",21),d.Mc("click",(function AddonCompetencyCourseCompetenciesPage_div_18_ion_card_1_Template_ion_item_click_1_listener(){d.fd(e);const n=c.$implicit;return d.Oc(2).competencies.select(n)})),d.Ec(2,"ion-label"),d.Ec(3,"p",15),d.pd(4),d.Ec(5,"em"),d.pd(6),d.Dc(),d.Dc(),d.Dc(),d.nd(7,AddonCompetencyCourseCompetenciesPage_div_18_ion_card_1_ion_badge_7_Template,2,2,"ion-badge",22),d.Dc(),d.Ec(8,"ion-item",11),d.Ec(9,"ion-label"),d.nd(10,AddonCompetencyCourseCompetenciesPage_div_18_ion_card_1_p_10_Template,2,2,"p",6),d.Ec(11,"div"),d.Ec(12,"p",15),d.pd(13),d.Pc(14,"translate"),d.Dc(),d.Ec(15,"p"),d.nd(16,AddonCompetencyCourseCompetenciesPage_div_18_ion_card_1_a_16_Template,2,3,"a",23),d.nd(17,AddonCompetencyCourseCompetenciesPage_div_18_ion_card_1_ng_container_17_Template,2,1,"ng-container",6),d.pd(18,"  /  "),d.nd(19,AddonCompetencyCourseCompetenciesPage_div_18_ion_card_1_ng_container_19_Template,4,3,"ng-container",16),d.Dc(),d.Dc(),d.nd(20,AddonCompetencyCourseCompetenciesPage_div_18_ion_card_1_div_20_Template,5,4,"div",6),d.Ec(21,"div"),d.Ec(22,"p",15),d.pd(23),d.Pc(24,"translate"),d.Dc(),d.nd(25,AddonCompetencyCourseCompetenciesPage_div_18_ion_card_1_p_25_Template,3,3,"p",6),d.nd(26,AddonCompetencyCourseCompetenciesPage_div_18_ion_card_1_ion_item_26_Template,4,6,"ion-item",24),d.Dc(),d.nd(27,AddonCompetencyCourseCompetenciesPage_div_18_ion_card_1_div_27_Template,6,5,"div",6),d.Dc(),d.Dc(),d.Dc()}if(2&e){const e=c.$implicit,n=d.Oc(2);d.lc(1),d.mc("aria-label",e.competency.shortname),d.lc(3),d.rd(" ",e.competency.shortname," "),d.lc(2),d.qd(e.competency.idnumber),d.lc(1),d.Vc("ngIf",e.usercompetencycourse&&e.usercompetencycourse.gradename),d.lc(3),d.Vc("ngIf",e.competency.description),d.lc(3),d.qd(d.Qc(14,14,"addon.competency.path")),d.lc(3),d.Vc("ngIf",e.comppath.showlinks),d.lc(1),d.Vc("ngIf",!e.comppath.showlinks),d.lc(2),d.Vc("ngForOf",e.comppath.ancestors),d.lc(1),d.Vc("ngIf",null==n.courseCompetencies?null:n.courseCompetencies.statistics.canmanagecoursecompetencies),d.lc(3),d.qd(d.Qc(24,16,"addon.competency.activities")),d.lc(2),d.Vc("ngIf",0==e.coursemodules.length),d.lc(1),d.Vc("ngForOf",e.coursemodules),d.lc(1),d.Vc("ngIf",e.plans)}}function AddonCompetencyCourseCompetenciesPage_div_18_Template(e,c){if(1&e&&(d.Ec(0,"div"),d.nd(1,AddonCompetencyCourseCompetenciesPage_div_18_ion_card_1_Template,28,18,"ion-card",16),d.Dc()),2&e){const e=d.Oc();d.lc(1),d.Vc("ngForOf",e.competencies.items)}}let A=(()=>{class AddonCompetencyCourseCompetenciesPage{constructor(){try{const e=t.a.getRequiredRouteNumberParam("courseId"),c=t.a.getRouteNumberParam("userId"),n=a.a.getOrCreateSource(_.a,[e,c]);this.competencies=new r.a(n,AddonCompetencyCourseCompetenciesPage)}catch(e){return i.a.showErrorModal(e),t.a.back(),void 0}}get courseCompetencies(){return this.competencies.getSource().courseCompetencies}get courseId(){return this.competencies.getSource().COURSE_ID}get user(){return this.competencies.getSource().user}get showLeastProficientCompetencies(){var e,c;return!!(null===(e=this.courseCompetencies)||void 0===e?void 0:e.statistics.canmanagecoursecompetencies)&&(null===(c=this.courseCompetencies)||void 0===c?void 0:c.statistics.leastproficientcount)>0}ngOnInit(){return Object(o.a)(this,void 0,void 0,(function*(){yield this.fetchCourseCompetencies(),yield this.competencies.start()}))}ngOnDestroy(){this.competencies.destroy()}getCompetencyFrameworkUrl(e){const{pluginbaseurl:c,framework:n,pagecontextid:o}=e.comppath;return`${c}/competencies.php?competencyframeworkid=${n.id}&pagecontextid=${o}`}fetchCourseCompetencies(){return Object(o.a)(this,void 0,void 0,(function*(){try{yield this.competencies.getSource().reload()}catch(e){i.a.showErrorModalDefault(e,"Error getting course competencies data.")}}))}openCompetencySummary(e){t.a.navigateToSitePath(`./${e}/${s.d}`,{params:{contextLevel:"course",contextInstanceId:this.courseId}})}refreshCourseCompetencies(e){return Object(o.a)(this,void 0,void 0,(function*(){yield this.competencies.getSource().invalidateCache(),this.fetchCourseCompetencies().finally((()=>{null==e?void 0:e.complete()}))}))}}return AddonCompetencyCourseCompetenciesPage.ɵfac=function AddonCompetencyCourseCompetenciesPage_Factory(e){return new(e||AddonCompetencyCourseCompetenciesPage)},AddonCompetencyCourseCompetenciesPage.ɵcmp=d.sc({type:AddonCompetencyCourseCompetenciesPage,selectors:[["page-addon-competency-coursecompetencies"]],decls:19,vars:16,consts:[["slot","start"],[3,"text"],[1,"limited-width"],["slot","fixed",3,"disabled","ionRefresh"],[3,"pullingText"],[3,"hideUntil"],[4,"ngIf"],["class","ion-margin-horizontal",4,"ngIf"],["icon","fas-award",3,"message",4,"ngIf"],["class","ion-text-wrap",4,"ngIf"],["class","ion-text-wrap","color","danger",4,"ngIf"],[1,"ion-text-wrap"],["color","danger",1,"ion-text-wrap"],[3,"id"],[3,"progress","ariaDescribedBy"],[1,"item-heading"],[4,"ngFor","ngForOf"],[1,"as-link",3,"click"],[1,"ion-margin-horizontal"],["slot","start",3,"user"],["icon","fas-award",3,"message"],["detail","true","button","",1,"ion-text-wrap",3,"click"],["slot","end",3,"color",4,"ngIf"],["core-link","",3,"href","title",4,"ngIf"],["class","ion-text-wrap core-course-module-handler","core-link","","capture","true",3,"href",4,"ngFor","ngForOf"],["slot","end",3,"color"],["contextLevel","course",3,"text","contextInstanceId"],["core-link","",3,"href","title"],["class","as-link",3,"click",4,"ngIf"],["core-link","","capture","true",1,"ion-text-wrap","core-course-module-handler",3,"href"],["slot","start",3,"modicon","showAlt",4,"ngIf"],["contextLevel","module",3,"text","contextInstanceId","courseId"],["slot","start",3,"modicon","showAlt"],["class","ion-text-wrap","core-link","","capture","true",3,"href",4,"ngFor","ngForOf"],["core-link","","capture","true",1,"ion-text-wrap",3,"href"],["contextLevel","user",3,"text","contextInstanceId"]],template:function AddonCompetencyCourseCompetenciesPage_Template(e,c){1&e&&(d.Ec(0,"ion-header"),d.Ec(1,"ion-toolbar"),d.Ec(2,"ion-buttons",0),d.zc(3,"ion-back-button",1),d.Pc(4,"translate"),d.Dc(),d.Ec(5,"ion-title"),d.Ec(6,"h1"),d.pd(7),d.Pc(8,"translate"),d.Dc(),d.Dc(),d.Dc(),d.Dc(),d.Ec(9,"ion-content",2),d.Ec(10,"ion-refresher",3),d.Mc("ionRefresh",(function AddonCompetencyCourseCompetenciesPage_Template_ion_refresher_ionRefresh_10_listener(e){return c.refreshCourseCompetencies(e.target)})),d.zc(11,"ion-refresher-content",4),d.Pc(12,"translate"),d.Dc(),d.Ec(13,"core-loading",5),d.nd(14,AddonCompetencyCourseCompetenciesPage_ion_card_14_Template,4,3,"ion-card",6),d.nd(15,AddonCompetencyCourseCompetenciesPage_h2_15_Template,3,3,"h2",7),d.nd(16,AddonCompetencyCourseCompetenciesPage_ion_card_16_Template,6,2,"ion-card",6),d.nd(17,AddonCompetencyCourseCompetenciesPage_core_empty_box_17_Template,2,3,"core-empty-box",8),d.nd(18,AddonCompetencyCourseCompetenciesPage_div_18_Template,2,1,"div",6),d.Dc(),d.Dc()),2&e&&(d.lc(3),d.Vc("text",d.Qc(4,10,"core.back")),d.lc(4),d.qd(d.Qc(8,12,"addon.competency.coursecompetencies")),d.lc(3),d.Vc("disabled",!c.competencies.loaded),d.lc(1),d.Wc("pullingText",d.Qc(12,14,"core.pulltorefresh")),d.lc(2),d.Vc("hideUntil",c.competencies.loaded),d.lc(1),d.Vc("ngIf",!c.user&&c.courseCompetencies&&c.courseCompetencies.statistics.competencycount>0),d.lc(1),d.Vc("ngIf",c.courseCompetencies&&c.courseCompetencies.statistics.competencycount>0),d.lc(1),d.Vc("ngIf",c.user),d.lc(1),d.Vc("ngIf",c.courseCompetencies&&0==c.courseCompetencies.statistics.competencycount),d.lc(1),d.Vc("ngIf",c.competencies.loaded))},directives:[p.C,p.Ab,p.m,p.h,p.i,p.yb,m.a,p.v,p.bb,p.cb,l.a,u.t,p.n,p.I,p.O,C.a,u.s,g.a,f.a,p.k,y.a,P.a,h.a],pipes:[v.d],encapsulation:2}),AddonCompetencyCourseCompetenciesPage})()},y5rm:function(e,c,n){"use strict";n.d(c,"a",(function(){return s}));var o=n("L3Fv"),t=n("9DI8"),i=n("fXoL");let s=(()=>{class AddonCompetencyCourseCompetenciesPageModule{}return AddonCompetencyCourseCompetenciesPageModule.ɵmod=i.wc({type:AddonCompetencyCourseCompetenciesPageModule}),AddonCompetencyCourseCompetenciesPageModule.ɵinj=i.vc({factory:function AddonCompetencyCourseCompetenciesPageModule_Factory(e){return new(e||AddonCompetencyCourseCompetenciesPageModule)},imports:[[o.a]]}),AddonCompetencyCourseCompetenciesPageModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&i.kd(s,{declarations:[t.a],imports:[o.a]}))}}]);