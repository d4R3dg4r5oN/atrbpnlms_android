(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{I3gK:function(e,o,t){"use strict";t.r(o),t.d(o,"CoreCoursePreviewPageComponentModule",(function(){return a})),t.d(o,"CoreCourseSummaryPageModule",(function(){return u}));var r=t("tyNb"),n=t("L3Fv"),c=t("Jg2H"),s=t("fXoL");const i=[{path:"",component:c.a}];let a=(()=>{class CoreCoursePreviewPageComponentModule{}return CoreCoursePreviewPageComponentModule.ɵmod=s.wc({type:CoreCoursePreviewPageComponentModule}),CoreCoursePreviewPageComponentModule.ɵinj=s.vc({factory:function CoreCoursePreviewPageComponentModule_Factory(e){return new(e||CoreCoursePreviewPageComponentModule)},imports:[[n.a]]}),CoreCoursePreviewPageComponentModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&s.kd(a,{declarations:[c.a],imports:[n.a]}));let u=(()=>{class CoreCourseSummaryPageModule{}return CoreCourseSummaryPageModule.ɵmod=s.wc({type:CoreCourseSummaryPageModule}),CoreCourseSummaryPageModule.ɵinj=s.vc({factory:function CoreCourseSummaryPageModule_Factory(e){return new(e||CoreCourseSummaryPageModule)},imports:[[r.m.forChild(i),n.a,a],r.m]}),CoreCourseSummaryPageModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&s.kd(u,{imports:[r.m,n.a,a],exports:[r.m]}))},Jg2H:function(e,o,t){"use strict";t.d(o,"a",(function(){return j}));var r=t("mrSG"),n=t("fjkH"),c=t("9+EE"),s=t("3LXp"),i=t("Xzvb"),a=t("nxay"),u=t("GBcW"),l=t("j3ag"),d=t("HXC5"),_=t("pHTc"),m=t("bFG1"),g=t("ZSwf"),h=t("Hu/H"),C=t("9cfD"),p=t("FYaz"),f=t("fXoL"),v=t("TEn/"),P=t("ofXK"),y=t("nt/U"),b=t("PgjG"),I=t("ACYt"),E=t("3CSS"),M=t("NcPy"),O=t("hMzs"),x=t("iSJP"),w=t("TKc2"),S=t("edOc"),D=t("nEkO"),T=t("nu3w"),k=t("FeAf"),V=t("sYmb"),F=t("uYHD");const z=["courseThumb"];function CoreCourseSummaryPage_ion_buttons_6_Template(e,o){if(1&e){const e=f.Fc();f.Ec(0,"ion-buttons",11),f.Ec(1,"ion-button",12),f.Mc("click",(function CoreCourseSummaryPage_ion_buttons_6_Template_ion_button_click_1_listener(){f.fd(e);return f.Oc().closeModal()})),f.Pc(2,"translate"),f.zc(3,"ion-icon",13),f.Dc(),f.Dc()}2&e&&(f.lc(1),f.mc("aria-label",f.Qc(2,1,"core.close")))}function CoreCourseSummaryPage_div_12_img_2_Template(e,o){if(1&e&&f.zc(0,"img",18),2&e){const e=f.Oc(2);f.Vc("src",e.course.courseImage,f.id)}}function CoreCourseSummaryPage_div_12_ion_icon_3_Template(e,o){1&e&&f.zc(0,"ion-icon",19)}function CoreCourseSummaryPage_div_12_Template(e,o){if(1&e&&(f.Ec(0,"div",14,15),f.nd(2,CoreCourseSummaryPage_div_12_img_2_Template,1,1,"img",16),f.nd(3,CoreCourseSummaryPage_div_12_ion_icon_3_Template,1,0,"ion-icon",17),f.Dc()),2&e){const e=f.Oc();f.lc(2),f.Vc("ngIf",e.course.courseImage),f.lc(1),f.Vc("ngIf",!e.course.courseImage)}}function CoreCourseSummaryPage_div_13_p_4_Template(e,o){if(1&e&&(f.Ec(0,"p",31),f.zc(1,"core-format-text",25),f.Dc()),2&e){const e=f.Oc(2);f.lc(1),f.Vc("text",e.course.shortname)("contextInstanceId",e.course.id)}}function CoreCourseSummaryPage_div_13_ion_chip_10_Template(e,o){if(1&e&&(f.Ec(0,"ion-chip",32),f.Ec(1,"span",24),f.pd(2),f.Pc(3,"translate"),f.Dc(),f.Ec(4,"ion-label"),f.zc(5,"core-format-text",33),f.Dc(),f.Dc()),2&e){const e=f.Oc(2);f.lc(2),f.qd(f.Qc(3,3,"core.courses.aria:coursecategory")),f.lc(3),f.Vc("text",e.course.categoryname)("contextInstanceId",e.course.categoryid)}}function CoreCourseSummaryPage_div_13_ion_item_14_div_2_Template(e,o){if(1&e&&(f.Ec(0,"div",37),f.zc(1,"core-progress-bar",38),f.Dc()),2&e){const e=f.Oc(3);f.lc(1),f.Vc("progress",e.progress)}}function CoreCourseSummaryPage_div_13_ion_item_14_div_3_p_1_Template(e,o){if(1&e&&(f.Ec(0,"p"),f.zc(1,"ion-icon",40),f.Ec(2,"strong"),f.pd(3),f.Pc(4,"translate"),f.Dc(),f.zc(5,"br"),f.pd(6),f.Pc(7,"coreFormatDate"),f.Dc()),2&e){const e=f.Oc(4);f.lc(3),f.qd(f.Qc(4,2,"core.course.startdate")),f.lc(3),f.rd(" ",f.Rc(7,4,1e3*e.course.startdate,"strftimedaydatetime")," ")}}function CoreCourseSummaryPage_div_13_ion_item_14_div_3_p_2_Template(e,o){if(1&e&&(f.Ec(0,"p"),f.zc(1,"ion-icon",40),f.Ec(2,"strong"),f.pd(3),f.Pc(4,"translate"),f.Dc(),f.zc(5,"br"),f.pd(6),f.Pc(7,"coreFormatDate"),f.Dc()),2&e){const e=f.Oc(4);f.lc(3),f.qd(f.Qc(4,2,"core.course.enddate")),f.lc(3),f.rd(" ",f.Rc(7,4,1e3*e.course.enddate,"strftimedaydatetime")," ")}}function CoreCourseSummaryPage_div_13_ion_item_14_div_3_Template(e,o){if(1&e&&(f.Ec(0,"div",39),f.nd(1,CoreCourseSummaryPage_div_13_ion_item_14_div_3_p_1_Template,8,7,"p",10),f.nd(2,CoreCourseSummaryPage_div_13_ion_item_14_div_3_p_2_Template,8,7,"p",10),f.Dc()),2&e){const e=f.Oc(3);f.lc(1),f.Vc("ngIf",e.course.startdate),f.lc(1),f.Vc("ngIf",e.course.enddate)}}function CoreCourseSummaryPage_div_13_ion_item_14_Template(e,o){if(1&e&&(f.Ec(0,"ion-item",34),f.Ec(1,"ion-label"),f.nd(2,CoreCourseSummaryPage_div_13_ion_item_14_div_2_Template,2,1,"div",35),f.nd(3,CoreCourseSummaryPage_div_13_ion_item_14_div_3_Template,3,2,"div",36),f.Dc(),f.Dc()),2&e){const e=f.Oc(2);f.lc(2),f.Vc("ngIf",void 0!==e.progress),f.lc(1),f.Vc("ngIf",e.course.startdate||e.course.enddate)}}function CoreCourseSummaryPage_div_13_ion_item_15_Template(e,o){if(1&e&&(f.Ec(0,"ion-item",41),f.Ec(1,"ion-label"),f.Ec(2,"p",42),f.pd(3),f.Pc(4,"translate"),f.Dc(),f.zc(5,"core-format-text",43),f.Dc(),f.Dc()),2&e){const e=f.Oc(2);f.lc(3),f.rd(" ",f.Qc(4,3,"core.course.coursesummary")," "),f.lc(2),f.Vc("text",e.course.summary)("contextInstanceId",e.course.id)}}function CoreCourseSummaryPage_div_13_ion_list_16_ion_icon_3_Template(e,o){if(1&e&&f.zc(0,"ion-icon",46),2&e){const e=f.Oc(3);f.qc("expandable-status-icon-expanded",e.contactsExpanded)}}function CoreCourseSummaryPage_div_13_ion_list_16_ng_container_8_ion_item_1_Template(e,o){if(1&e&&(f.Ec(0,"ion-item",48),f.Pc(1,"translate"),f.zc(2,"core-user-avatar",49),f.Ec(3,"ion-label"),f.Ec(4,"p",42),f.pd(5),f.Dc(),f.Dc(),f.Dc()),2&e){const e=o.$implicit,t=f.Oc(4);f.Vc("userId",e.id)("courseId",t.isEnrolled?t.course.id:null),f.mc("aria-label",f.Qc(1,8,"core.viewprofile")),f.lc(2),f.Vc("user",e)("userId",e.id)("courseId",t.isEnrolled?t.course.id:null)("linkProfile",!1),f.lc(3),f.qd(e.fullname)}}function CoreCourseSummaryPage_div_13_ion_list_16_ng_container_8_Template(e,o){if(1&e&&(f.Cc(0),f.nd(1,CoreCourseSummaryPage_div_13_ion_list_16_ng_container_8_ion_item_1_Template,6,10,"ion-item",47),f.Bc()),2&e){const e=f.Oc(3);f.lc(1),f.Vc("ngForOf",e.course.contacts)}}function CoreCourseSummaryPage_div_13_ion_list_16_Template(e,o){if(1&e){const e=f.Fc();f.Ec(0,"ion-list"),f.Ec(1,"ion-item",44),f.Mc("click",(function CoreCourseSummaryPage_div_13_ion_list_16_Template_ion_item_click_1_listener(){f.fd(e);return f.Oc(2).toggleContacts()})),f.Pc(2,"translate"),f.nd(3,CoreCourseSummaryPage_div_13_ion_list_16_ion_icon_3_Template,1,2,"ion-icon",45),f.Ec(4,"ion-label"),f.Ec(5,"p",42),f.pd(6),f.Pc(7,"translate"),f.Dc(),f.Dc(),f.Dc(),f.nd(8,CoreCourseSummaryPage_div_13_ion_list_16_ng_container_8_Template,2,1,"ng-container",10),f.zc(9,"core-spacer"),f.Dc()}if(2&e){const e=f.Oc(2);f.lc(1),f.Vc("button",e.course.contacts.length>=5),f.mc("aria-label",f.Qc(2,5,e.contactsExpanded?"core.collapse":"core.expand")),f.lc(2),f.Vc("ngIf",e.course.contacts.length>=5),f.lc(3),f.rd(" ",f.Qc(7,7,"core.teachers")," "),f.lc(2),f.Vc("ngIf",e.contactsExpanded||e.course.contacts.length<5)}}function CoreCourseSummaryPage_div_13_ion_item_17_ng_container_2_div_1_Template(e,o){if(1&e&&(f.Ec(0,"div"),f.Ec(1,"span",52),f.zc(2,"core-format-text",25),f.Ec(3,"span",53),f.pd(4,": "),f.Dc(),f.Dc(),f.Ec(5,"span",54),f.zc(6,"core-format-text",55),f.Dc(),f.Dc()),2&e){const e=f.Oc().$implicit,o=f.Oc(3);f.pc("core-customfield core-customfield_",e.type," core-customfield_",e.shortname,""),f.lc(2),f.Vc("text",e.name)("contextInstanceId",o.course.id),f.lc(4),f.Vc("text",e.value)("collapsible-item","textarea"==e.type?"":null)("contextInstanceId",o.course.id)}}function CoreCourseSummaryPage_div_13_ion_item_17_ng_container_2_Template(e,o){if(1&e&&(f.Cc(0),f.nd(1,CoreCourseSummaryPage_div_13_ion_item_17_ng_container_2_div_1_Template,7,9,"div",51),f.Bc()),2&e){const e=o.$implicit;f.lc(1),f.Vc("ngIf",e.value)}}function CoreCourseSummaryPage_div_13_ion_item_17_Template(e,o){if(1&e&&(f.Ec(0,"ion-item",34),f.Ec(1,"ion-label"),f.nd(2,CoreCourseSummaryPage_div_13_ion_item_17_ng_container_2_Template,2,1,"ng-container",50),f.Dc(),f.Dc()),2&e){const e=f.Oc(2);f.lc(2),f.Vc("ngForOf",e.course.customfields)}}function CoreCourseSummaryPage_div_13_Template(e,o){if(1&e&&(f.Ec(0,"div",20),f.Ec(1,"div",21),f.Ec(2,"ion-item",22),f.Ec(3,"ion-label"),f.nd(4,CoreCourseSummaryPage_div_13_p_4_Template,2,2,"p",23),f.Ec(5,"h1"),f.Ec(6,"span",24),f.pd(7),f.Pc(8,"translate"),f.Dc(),f.zc(9,"core-format-text",25),f.Dc(),f.nd(10,CoreCourseSummaryPage_div_13_ion_chip_10_Template,6,5,"ion-chip",26),f.Dc(),f.Ec(11,"ion-button",27),f.Pc(12,"translate"),f.zc(13,"ion-icon",28),f.Dc(),f.Dc(),f.nd(14,CoreCourseSummaryPage_div_13_ion_item_14_Template,4,2,"ion-item",29),f.nd(15,CoreCourseSummaryPage_div_13_ion_item_15_Template,6,5,"ion-item",30),f.nd(16,CoreCourseSummaryPage_div_13_ion_list_16_Template,10,9,"ion-list",10),f.nd(17,CoreCourseSummaryPage_div_13_ion_item_17_Template,3,1,"ion-item",29),f.Dc(),f.Dc()),2&e){const e=f.Oc();f.lc(4),f.Vc("ngIf",e.course.displayname&&e.course.shortname&&e.course.fullname!=e.course.displayname),f.lc(3),f.qd(f.Qc(8,12,"core.courses.aria:coursename")),f.lc(2),f.Vc("text",e.course.fullname)("contextInstanceId",e.course.id),f.lc(1),f.Vc("ngIf",e.course.categoryname),f.lc(1),f.Vc("href",e.courseUrl)("showBrowserWarning",!1),f.mc("aria-label",f.Qc(12,14,"core.openinbrowser")),f.lc(3),f.Vc("ngIf",void 0!==e.progress||e.course.startdate||e.course.enddate),f.lc(1),f.Vc("ngIf",e.course.summary),f.lc(1),f.Vc("ngIf",e.course.contacts&&e.course.contacts.length),f.lc(1),f.Vc("ngIf",e.course.customfields)}}function CoreCourseSummaryPage_ion_footer_14_ng_container_2_ion_button_1_ion_icon_1_Template(e,o){if(1&e&&f.zc(0,"ion-icon",62),2&e){const e=f.Oc().$implicit;f.Vc("name",e.data.icon)}}function CoreCourseSummaryPage_ion_footer_14_ng_container_2_ion_button_1_Template(e,o){if(1&e){const e=f.Fc();f.Ec(0,"ion-button",60),f.Mc("click",(function CoreCourseSummaryPage_ion_footer_14_ng_container_2_ion_button_1_Template_ion_button_click_0_listener(){f.fd(e);const t=o.$implicit;return f.Oc(3).openMenuItem(t)})),f.nd(1,CoreCourseSummaryPage_ion_footer_14_ng_container_2_ion_button_1_ion_icon_1_Template,1,1,"ion-icon",61),f.Ec(2,"ion-label"),f.pd(3),f.Pc(4,"translate"),f.Dc(),f.Dc()}if(2&e){const e=o.$implicit;f.nc("ion-text-wrap "+e.data.class),f.lc(1),f.Vc("ngIf",e.data.icon),f.lc(2),f.qd(f.Qc(4,4,e.data.title))}}function CoreCourseSummaryPage_ion_footer_14_ng_container_2_Template(e,o){if(1&e&&(f.Cc(0),f.nd(1,CoreCourseSummaryPage_ion_footer_14_ng_container_2_ion_button_1_Template,5,6,"ion-button",59),f.Bc()),2&e){const e=f.Oc(2);f.lc(1),f.Vc("ngForOf",e.courseMenuHandlers)}}function CoreCourseSummaryPage_ion_footer_14_ion_button_3_Template(e,o){if(1&e){const e=f.Fc();f.Ec(0,"ion-button",63),f.Mc("click",(function CoreCourseSummaryPage_ion_footer_14_ion_button_3_Template_ion_button_click_0_listener(){f.fd(e);return f.Oc(2).enrolMe()})),f.pd(1),f.Pc(2,"translate"),f.Dc()}2&e&&(f.lc(1),f.rd(" ",f.Qc(2,1,"core.courses.enrolme")," "))}function CoreCourseSummaryPage_ion_footer_14_ion_card_4_Template(e,o){1&e&&(f.Ec(0,"ion-card",64),f.Ec(1,"ion-item"),f.zc(2,"ion-icon",65),f.Ec(3,"ion-label"),f.pd(4),f.Pc(5,"translate"),f.Dc(),f.Dc(),f.Dc()),2&e&&(f.lc(4),f.qd(f.Qc(5,1,"core.courses.notenrollable")))}function CoreCourseSummaryPage_ion_footer_14_ion_button_5_Template(e,o){if(1&e){const e=f.Fc();f.Ec(0,"ion-button",66),f.Mc("click",(function CoreCourseSummaryPage_ion_footer_14_ion_button_5_Template_ion_button_click_0_listener(){f.fd(e);return f.Oc(2).openCourse()})),f.zc(1,"ion-icon",67),f.pd(2),f.Pc(3,"translate"),f.Dc()}2&e&&(f.lc(2),f.rd(" ",f.Qc(3,1,"core.course.viewcourse")," "))}function CoreCourseSummaryPage_ion_footer_14_Template(e,o){if(1&e&&(f.Ec(0,"ion-footer"),f.Ec(1,"div",21),f.nd(2,CoreCourseSummaryPage_ion_footer_14_ng_container_2_Template,2,1,"ng-container",10),f.nd(3,CoreCourseSummaryPage_ion_footer_14_ion_button_3_Template,3,3,"ion-button",56),f.nd(4,CoreCourseSummaryPage_ion_footer_14_ion_card_4_Template,6,3,"ion-card",57),f.nd(5,CoreCourseSummaryPage_ion_footer_14_ion_button_5_Template,4,3,"ion-button",58),f.Dc(),f.Dc()),2&e){const e=f.Oc();f.lc(2),f.Vc("ngIf",e.canAccessCourse),f.lc(1),f.Vc("ngIf",!e.isEnrolled&&(e.selfEnrolInstances.length>0||e.otherEnrolments)),f.lc(1),f.Vc("ngIf",!e.isEnrolled&&!e.selfEnrolInstances.length&&!e.otherEnrolments),f.lc(1),f.Vc("ngIf",!e.isModal&&e.canAccessCourse)}}const A=["fee","paypal"];let j=(()=>{class CoreCourseSummaryPage{constructor(){this.courseId=0,this.isEnrolled=!1,this.canAccessCourse=!0,this.selfEnrolInstances=[],this.otherEnrolments=!1,this.dataLoaded=!1,this.isModal=!1,this.contactsExpanded=!1,this.courseUrl="",this.courseMenuHandlers=[],this.useGuestAccess=!1,this.guestInstanceId=new p.a,this.courseData=new p.a,this.waitStart=0,this.enrolUrl="",this.pageDestroyed=!1,this.waitingForBrowserEnrol=!1,this.appResumeSubscription=l.D.resume.subscribe((()=>{this.waitingForBrowserEnrol&&this.dataLoaded&&l.C.run((()=>Object(r.a)(this,void 0,void 0,(function*(){this.waitingForBrowserEnrol=!1,this.dataLoaded=!1,yield this.refreshData()}))))}))}ngOnInit(){return Object(r.a)(this,void 0,void 0,(function*(){if(this.courseId)this.isModal=!0;else{try{this.courseId=_.a.getRequiredRouteNumberParam("courseId")}catch(e){return s.a.showErrorModal(e),_.a.back(),this.closeModal(),void 0}this.course=_.a.getRouteParam("course")}const e=c.b.getRequiredCurrentSite().getURL();this.enrolUrl=C.a.concatenatePaths(e,"enrol/index.php?id="+this.courseId),this.courseUrl=C.a.concatenatePaths(e,"course/view.php?id="+this.courseId),yield this.getCourse()}))}canAccessAsGuest(){return Object(r.a)(this,void 0,void 0,(function*(){const e=yield this.guestInstanceId;if(void 0===e)return!1;const o=yield i.a.getCourseGuestEnrolmentInfo(e);return!!o.status&&!o.passwordrequired}))}getCourse(e=!1){return Object(r.a)(this,void 0,void 0,(function*(){this.otherEnrolments=!1;try{yield Promise.all([this.getEnrolmentMethods(),this.getCourseData(),this.loadCourseExtraData()])}catch(e){s.a.showErrorModalDefault(e,"Error getting enrolment data")}yield this.setCourseColor(),this.progress=!this.course||!("progress"in this.course)||"number"!=typeof this.course.progress||this.course.progress<0||!1===this.course.completionusertracked?void 0:this.course.progress,yield this.loadMenuHandlers(e),this.dataLoaded=!0}))}getEnrolmentMethods(){return Object(r.a)(this,void 0,void 0,(function*(){this.selfEnrolInstances=[],this.guestInstanceId.reset();(yield i.a.getCourseEnrolmentMethods(this.courseId)).forEach((e=>{e.status&&("self"===e.type?this.selfEnrolInstances.push(e):"guest"===e.type?this.guestInstanceId.resolve(e.id):this.otherEnrolments=!0)})),this.guestInstanceId.isSettled()||this.guestInstanceId.resolve(void 0)}))}getCourseData(){return Object(r.a)(this,void 0,void 0,(function*(){try{try{this.course=yield i.a.getUserCourse(this.courseId),this.isEnrolled=!0}catch(e){this.isEnrolled=!1,this.course=yield i.a.getCourse(this.courseId)}this.canAccessCourse=!0,this.useGuestAccess=!1}catch(e){this.canAccessCourse=yield this.canAccessAsGuest(),this.useGuestAccess=this.canAccessCourse}this.courseData.resolve(this.course)}))}loadCourseExtraData(){var e;return Object(r.a)(this,void 0,void 0,(function*(){try{const o=yield i.a.getCourseByField("id",this.courseId),t=yield this.courseData;t?(t.customfields=o.customfields,t.contacts=o.contacts,t.displayname=o.displayname,t.categoryname=o.categoryname,t.overviewfiles=o.overviewfiles):(this.course=o,this.courseData.resolve(o)),!this.isEnrolled&&(null===(e=o.enrollmentmethods)||void 0===e?void 0:e.some((e=>A.includes(e))))&&(this.otherEnrolments=!0)}catch(e){}}))}loadMenuHandlers(e){return Object(r.a)(this,void 0,void 0,(function*(){this.course&&(this.courseMenuHandlers=yield a.a.getMenuHandlersToDisplay(this.course,e,this.useGuestAccess))}))}openCourse(e=!1){this.canAccessCourse&&this.course&&!this.isModal&&u.a.openCourse(this.course,{params:{isGuest:this.useGuestAccess},replace:e})}browserEnrol(){return Object(r.a)(this,void 0,void 0,(function*(){try{yield s.a.showConfirm(l.M.instant("core.courses.browserenrolinstructions"),l.M.instant("core.courses.completeenrolmentbrowser"),l.M.instant("core.openinbrowser"))}catch(e){return}this.waitingForBrowserEnrol=!0,yield c.b.getRequiredCurrentSite().openInBrowserWithAutoLogin(this.enrolUrl,void 0,{showBrowserWarning:!1})}))}selfEnrolConfirm(e){return Object(r.a)(this,void 0,void 0,(function*(){try{yield s.a.showConfirm(l.M.instant("core.courses.confirmselfenrol"),e.name),this.selfEnrolInCourse(e.id)}catch(e){}}))}selfEnrolInCourse(e,o=""){return Object(r.a)(this,void 0,void 0,(function*(){const t=yield s.a.showModalLoading("core.loading",!0);try{yield i.a.selfEnrol(this.courseId,o,e),this.isEnrolled=!0,this.dataLoaded=!1,yield this.waitForEnrolled(!0),yield this.refreshData().finally((()=>{n.b.trigger(i.b.EVENT_MY_COURSES_UPDATED,{courseId:this.courseId,course:this.course,action:i.b.ACTION_ENROL},c.b.getCurrentSiteId())})),this.openCourse(!0),null==t||t.dismiss()}catch(r){if(null==t?void 0:t.dismiss(),r&&r.errorcode===i.b.ENROL_INVALID_KEY){const t=yield s.a.openModal({component:d.a,componentProps:{password:o}});if(void 0!==t)return this.selfEnrolInCourse(e,t),void 0;if(!o)return}s.a.showErrorModalDefault(r,"core.courses.errorselfenrol",!0)}}))}refreshData(e){return Object(r.a)(this,void 0,void 0,(function*(){const o=[];o.push(i.a.invalidateUserCourses()),o.push(i.a.invalidateCourse(this.courseId)),o.push(i.a.invalidateCourseEnrolmentMethods(this.courseId)),o.push(a.a.clearAndInvalidateCoursesOptions(this.courseId)),o.push(i.a.invalidateCoursesByField("id",this.courseId)),this.guestInstanceId.value&&o.push(i.a.invalidateCourseGuestEnrolmentInfo(this.guestInstanceId.value)),yield Promise.all(o).finally((()=>this.getCourse())).finally((()=>{null==e?void 0:e.complete()}))}))}waitForEnrolled(e){return Object(r.a)(this,void 0,void 0,(function*(){e&&(this.waitStart=Date.now()),yield m.a.ignoreErrors(i.a.invalidateUserCourses());try{yield i.a.getUserCourse(this.courseId)}catch(e){if(this.pageDestroyed||Date.now()-this.waitStart>6e4)return;return new Promise((e=>{setTimeout((()=>Object(r.a)(this,void 0,void 0,(function*(){this.pageDestroyed||(yield this.waitForEnrolled()),e()}))),5e3)}))}}))}openMenuItem(e){const o=Object.assign({course:this.course},e.data.pageParams);_.a.navigateToSitePath(e.data.page,{params:o})}setCourseColor(){return Object(r.a)(this,void 0,void 0,(function*(){if(this.course&&(yield g.a.loadCourseColorAndImage(this.course),this.courseThumb))if(this.course.color){this.courseThumb.nativeElement.style.setProperty("--course-color",this.course.color);const e=h.a.lighter(this.course.color,50);this.courseThumb.nativeElement.style.setProperty("--course-color-tint",e)}else void 0!==this.course.colorNumber&&this.courseThumb.nativeElement.classList.add("course-color-"+this.course.colorNumber)}))}enrolMe(){return Object(r.a)(this,void 0,void 0,(function*(){if(1==this.selfEnrolInstances.length&&!this.otherEnrolments)return this.selfEnrolConfirm(this.selfEnrolInstances[0]),void 0;if(0==this.selfEnrolInstances.length&&this.otherEnrolments)return this.browserEnrol(),void 0;const e=this.selfEnrolInstances.map((e=>({text:e.name,handler:()=>{this.selfEnrolConfirm(e)}})));this.otherEnrolments&&e.push({text:l.M.instant("core.courses.completeenrolmentbrowser"),handler:()=>{this.browserEnrol()}}),e.push({text:l.M.instant("core.cancel"),role:"cancel"}),this.actionSheet=yield l.a.create({header:l.M.instant("core.courses.enrolme"),buttons:e}),yield this.actionSheet.present()}))}toggleContacts(){this.contactsExpanded=!this.contactsExpanded}closeModal(){l.y.dismiss()}ngOnDestroy(){var e;this.pageDestroyed=!0,null===(e=this.courseStatusObserver)||void 0===e||e.off(),this.appResumeSubscription.unsubscribe()}}return CoreCourseSummaryPage.ɵfac=function CoreCourseSummaryPage_Factory(e){return new(e||CoreCourseSummaryPage)},CoreCourseSummaryPage.ɵcmp=f.sc({type:CoreCourseSummaryPage,selectors:[["page-core-course-summary"]],viewQuery:function CoreCourseSummaryPage_Query(e,o){var t;(1&e&&f.ud(z,!0),2&e)&&(f.dd(t=f.Nc())&&(o.courseThumb=t.first))},inputs:{course:"course",courseId:"courseId"},decls:15,vars:13,consts:[[1,"no-title"],["slot","start"],[3,"text"],["slot","end",4,"ngIf"],[3,"fullscreen"],["slot","fixed",3,"disabled","ionRefresh"],[3,"pullingText"],[3,"hideUntil"],["class","core-course-thumb",4,"ngIf"],["class","course-container",4,"ngIf"],[4,"ngIf"],["slot","end"],["fill","clear",3,"click"],["slot","icon-only","name","fas-times","aria-hidden","true"],[1,"core-course-thumb"],["courseThumb",""],["core-external-content","","alt","",3,"src",4,"ngIf"],["name","fas-graduation-cap","class","course-icon","aria-hidden","true",4,"ngIf"],["core-external-content","","alt","",3,"src"],["name","fas-graduation-cap","aria-hidden","true",1,"course-icon"],[1,"course-container"],[1,"list-item-limited-width"],[1,"ion-text-wrap","course-name"],["class","core-course-shortname",4,"ngIf"],[1,"sr-only"],["contextLevel","course",3,"text","contextInstanceId"],["color","primary","class","core-course-category ion-text-nowrap",4,"ngIf"],["fill","clear","core-link","","slot","end",3,"href","showBrowserWarning"],["name","fas-external-link-alt","slot","icon-only","aria-hidden","true"],["class","ion-text-wrap",4,"ngIf"],["class","ion-text-wrap","detail","false",4,"ngIf"],[1,"core-course-shortname"],["color","primary",1,"core-course-category","ion-text-nowrap"],["contextLevel","coursecat",3,"text","contextInstanceId"],[1,"ion-text-wrap"],["class","core-course-progress",4,"ngIf"],["class","core-course-dates",4,"ngIf"],[1,"core-course-progress"],["a11yText","core.course.aria:sectionprogress",3,"progress"],[1,"core-course-dates"],["name","fas-calendar","aria-hidden","true"],["detail","false",1,"ion-text-wrap"],[1,"item-heading"],["collapsible-item","","contextLevel","course",3,"text","contextInstanceId"],["detail","false",1,"ion-text-wrap",3,"button","click"],["name","fas-chevron-right","flip-rtl","","slot","start","aria-hidden","true","class","expandable-status-icon",3,"expandable-status-icon-expanded",4,"ngIf"],["name","fas-chevron-right","flip-rtl","","slot","start","aria-hidden","true",1,"expandable-status-icon"],["button","","class","ion-text-wrap","core-user-link","","detail","true",3,"userId","courseId",4,"ngFor","ngForOf"],["button","","core-user-link","","detail","true",1,"ion-text-wrap",3,"userId","courseId"],["slot","start",3,"user","userId","courseId","linkProfile"],[4,"ngFor","ngForOf"],[3,"class",4,"ngIf"],[1,"core-customfieldname"],[1,"core-customfieldseparator"],[1,"core-customfieldvalue"],["contextLevel","course",3,"text","collapsible-item","contextInstanceId"],["expand","block","class","ion-text-wrap",3,"click",4,"ngIf"],["class","core-info-card ion-text-wrap",4,"ngIf"],["expand","block","fill","outline","class","ion-text-wrap",3,"click",4,"ngIf"],["expand","block",3,"class","click",4,"ngFor","ngForOf"],["expand","block",3,"click"],["slot","start","aria-hidden","true",3,"name",4,"ngIf"],["slot","start","aria-hidden","true",3,"name"],["expand","block",1,"ion-text-wrap",3,"click"],[1,"core-info-card","ion-text-wrap"],["name","fas-info-circle","slot","start","aria-hidden","true"],["expand","block","fill","outline",1,"ion-text-wrap",3,"click"],["name","fas-eye","slot","start","aria-hidden","true"]],template:function CoreCourseSummaryPage_Template(e,o){1&e&&(f.Ec(0,"ion-header",0),f.Ec(1,"ion-toolbar"),f.Ec(2,"ion-buttons",1),f.zc(3,"ion-back-button",2),f.Pc(4,"translate"),f.Dc(),f.zc(5,"ion-title"),f.nd(6,CoreCourseSummaryPage_ion_buttons_6_Template,4,3,"ion-buttons",3),f.Dc(),f.Dc(),f.Ec(7,"ion-content",4),f.Ec(8,"ion-refresher",5),f.Mc("ionRefresh",(function CoreCourseSummaryPage_Template_ion_refresher_ionRefresh_8_listener(e){return o.refreshData(e.target)})),f.zc(9,"ion-refresher-content",6),f.Pc(10,"translate"),f.Dc(),f.Ec(11,"core-loading",7),f.nd(12,CoreCourseSummaryPage_div_12_Template,4,2,"div",8),f.nd(13,CoreCourseSummaryPage_div_13_Template,18,16,"div",9),f.Dc(),f.Dc(),f.nd(14,CoreCourseSummaryPage_ion_footer_14_Template,6,4,"ion-footer",10)),2&e&&(f.lc(3),f.Vc("text",f.Qc(4,9,"core.back")),f.lc(3),f.Vc("ngIf",o.isModal),f.lc(1),f.Vc("fullscreen",!0),f.lc(1),f.Vc("disabled",!o.dataLoaded),f.lc(1),f.Wc("pullingText",f.Qc(10,11,"core.pulltorefresh")),f.lc(2),f.Vc("hideUntil",o.dataLoaded),f.lc(1),f.Vc("ngIf",o.course),f.lc(1),f.Vc("ngIf",o.course),f.lc(1),f.Vc("ngIf",o.course&&o.dataLoaded))},directives:[v.C,v.Ab,v.m,v.h,v.i,v.yb,P.t,y.a,v.v,v.bb,v.cb,b.a,I.a,v.l,v.D,E.a,M.a,v.I,v.O,O.a,x.a,v.t,w.a,S.a,v.P,D.a,P.s,T.a,k.a,v.A,v.n],pipes:[V.d,F.a],styles:["[_nghost-%COMP%]{--thumb-height:180px}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]{position:absolute}[_nghost-%COMP%]   .core-course-thumb[_ngcontent-%COMP%]{background:var(--course-color,#fff);overflow:hidden;text-align:center;height:var(--thumb-height);position:fixed;z-index:-1;width:100%}[_nghost-%COMP%]   .core-course-thumb.course-color-0[_ngcontent-%COMP%]{--course-color:var(--core-course-color-0);--course-color-tint:var(--core-course-color-0-tint)}[_nghost-%COMP%]   .core-course-thumb.course-color-1[_ngcontent-%COMP%]{--course-color:var(--core-course-color-1);--course-color-tint:var(--core-course-color-1-tint)}[_nghost-%COMP%]   .core-course-thumb.course-color-2[_ngcontent-%COMP%]{--course-color:var(--core-course-color-2);--course-color-tint:var(--core-course-color-2-tint)}[_nghost-%COMP%]   .core-course-thumb.course-color-3[_ngcontent-%COMP%]{--course-color:var(--core-course-color-3);--course-color-tint:var(--core-course-color-3-tint)}[_nghost-%COMP%]   .core-course-thumb.course-color-4[_ngcontent-%COMP%]{--course-color:var(--core-course-color-4);--course-color-tint:var(--core-course-color-4-tint)}[_nghost-%COMP%]   .core-course-thumb.course-color-5[_ngcontent-%COMP%]{--course-color:var(--core-course-color-5);--course-color-tint:var(--core-course-color-5-tint)}[_nghost-%COMP%]   .core-course-thumb.course-color-6[_ngcontent-%COMP%]{--course-color:var(--core-course-color-6);--course-color-tint:var(--core-course-color-6-tint)}[_nghost-%COMP%]   .core-course-thumb.course-color-7[_ngcontent-%COMP%]{--course-color:var(--core-course-color-7);--course-color-tint:var(--core-course-color-7-tint)}[_nghost-%COMP%]   .core-course-thumb.course-color-8[_ngcontent-%COMP%]{--course-color:var(--core-course-color-8);--course-color-tint:var(--core-course-color-8-tint)}[_nghost-%COMP%]   .core-course-thumb.course-color-9[_ngcontent-%COMP%]{--course-color:var(--core-course-color-9);--course-color-tint:var(--core-course-color-9-tint)}[_nghost-%COMP%]   .core-course-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}[_nghost-%COMP%]   .core-course-thumb[_ngcontent-%COMP%]   ion-icon.course-icon[_ngcontent-%COMP%]{padding:24px;font-size:calc(var(--thumb-height) - 48px);color:var(--course-color-tint)}[_nghost-%COMP%]   .course-container[_ngcontent-%COMP%]{position:relative;top:calc(var(--thumb-height) - var(--big-radius));border-radius:var(--big-radius) var(--big-radius) 0 0;background-color:var(--ion-background-color);box-shadow:var(--drop-shadow-top);-webkit-clip-path:inset(-5px 0 0 0);clip-path:inset(-5px 0 0 0)}[_nghost-%COMP%]   .course-name[_ngcontent-%COMP%]{--background:transparent}[_nghost-%COMP%]   .course-name[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-bottom:0}[_nghost-%COMP%]   h1[_ngcontent-%COMP%]{font-size:20px}[_nghost-%COMP%]   .core-course-category[_ngcontent-%COMP%]{margin-left:0;margin-right:0}[_nghost-%COMP%]   .core-course-dates[_ngcontent-%COMP%]{background:var(--light);border-radius:var(--small-radius);padding:8px;width:100%}[_nghost-%COMP%]   .core-course-dates[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:8px}[_nghost-%COMP%]   .core-course-dates[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:0}[_nghost-%COMP%]   .core-course-dates[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){[_nghost-%COMP%]   .core-course-dates[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}[_nghost-%COMP%]   .core-customfield[_ngcontent-%COMP%]{margin-bottom:8px}[_nghost-%COMP%]   .core-customfield.core-customfield_textarea[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-bottom:12px}[_nghost-%COMP%]   .core-customfield[_ngcontent-%COMP%]   .core-customfieldname[_ngcontent-%COMP%]{margin-right:4px;font-weight:700;display:inline}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){[_nghost-%COMP%]   .core-customfield[_ngcontent-%COMP%]   .core-customfieldname[_ngcontent-%COMP%]{margin-right:unset;-webkit-margin-end:4px;margin-inline-end:4px}}[_nghost-%COMP%]   .core-customfield[_ngcontent-%COMP%]   .core-customfieldvalue[_ngcontent-%COMP%]{display:inline}"]}),CoreCourseSummaryPage})()}}]);