(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{NdFX:function(e,s,o){"use strict";o.r(s),o.d(s,"AddonForumNewDiscussionPageModule",(function(){return U}));var i=o("tyNb"),n=o("AzLI"),t=o("MLi9"),c=o("ekpb"),d=o("L3Fv"),a=o("mrSG"),r=o("3Pt+"),u=o("fjkH"),l=o("mWdr"),m=o("pHTc"),h=o("ZCW2"),g=o("N5Lt"),f=o("pET4"),_=o("9+EE"),p=o("3LXp"),D=o("j3ag"),w=o("uT8i"),b=o("h709"),I=o("bFG1"),v=o("VF9H"),M=o("hSQQ"),A=o("vuGA"),P=o("4reR"),E=o("nFEd"),F=o("LVzu"),y=o("baaQ"),N=o("fXoL"),T=o("46ml"),C=o("TEn/"),O=o("nt/U"),S=o("OZH1"),x=o("PgjG"),G=o("ofXK"),V=o("3CSS"),j=o("ACYt"),k=o("M9y5"),L=o("sYmb");const R=["newDiscFormEl"];function AddonModForumNewDiscussionPage_form_15_div_21_ion_item_1_Template(e,s){if(1&e){const e=N.Fc();N.Ec(0,"ion-item"),N.Ec(1,"ion-label"),N.pd(2),N.Pc(3,"translate"),N.Dc(),N.Ec(4,"ion-toggle",20),N.Mc("ngModelChange",(function AddonModForumNewDiscussionPage_form_15_div_21_ion_item_1_Template_ion_toggle_ngModelChange_4_listener(s){N.fd(e);return N.Oc(3).newDiscussion.postToAllGroups=s})),N.Dc(),N.Dc()}if(2&e){const e=N.Oc(3);N.lc(2),N.qd(N.Qc(3,2,"addon.mod_forum.posttomygroups")),N.lc(2),N.Vc("ngModel",e.newDiscussion.postToAllGroups)}}function AddonModForumNewDiscussionPage_form_15_div_21_ion_item_2_ion_select_option_6_Template(e,s){if(1&e&&(N.Ec(0,"ion-select-option",25),N.pd(1),N.Dc()),2&e){const e=s.$implicit;N.Vc("value",e.id),N.lc(1),N.qd(e.name)}}const _c1=function(e){return{header:e}};function AddonModForumNewDiscussionPage_form_15_div_21_ion_item_2_Template(e,s){if(1&e){const e=N.Fc();N.Ec(0,"ion-item",21),N.Ec(1,"ion-label",22),N.pd(2),N.Pc(3,"translate"),N.Dc(),N.Ec(4,"ion-select",23),N.Mc("ngModelChange",(function AddonModForumNewDiscussionPage_form_15_div_21_ion_item_2_Template_ion_select_ngModelChange_4_listener(s){N.fd(e);return N.Oc(3).newDiscussion.groupId=s})),N.Pc(5,"translate"),N.nd(6,AddonModForumNewDiscussionPage_form_15_div_21_ion_item_2_ion_select_option_6_Template,2,2,"ion-select-option",24),N.Dc(),N.Dc()}if(2&e){const e=N.Oc(3);N.lc(2),N.qd(N.Qc(3,5,"addon.mod_forum.group")),N.lc(2),N.Vc("ngModel",e.newDiscussion.groupId)("disabled",e.newDiscussion.postToAllGroups)("interfaceOptions",N.ad(9,_c1,N.Qc(5,7,"addon.mod_forum.group"))),N.lc(2),N.Vc("ngForOf",e.groups)}}function AddonModForumNewDiscussionPage_form_15_div_21_ion_item_8_Template(e,s){if(1&e){const e=N.Fc();N.Ec(0,"ion-item"),N.Ec(1,"ion-label"),N.pd(2),N.Pc(3,"translate"),N.Dc(),N.Ec(4,"ion-toggle",26),N.Mc("ngModelChange",(function AddonModForumNewDiscussionPage_form_15_div_21_ion_item_8_Template_ion_toggle_ngModelChange_4_listener(s){N.fd(e);return N.Oc(3).newDiscussion.pin=s})),N.Dc(),N.Dc()}if(2&e){const e=N.Oc(3);N.lc(2),N.qd(N.Qc(3,2,"addon.mod_forum.discussionpinned")),N.lc(2),N.Vc("ngModel",e.newDiscussion.pin)}}function AddonModForumNewDiscussionPage_form_15_div_21_core_attachments_9_Template(e,s){if(1&e&&N.zc(0,"core-attachments",27),2&e){const e=N.Oc(3);N.Vc("files",e.newDiscussion.files)("maxSize",e.forum.maxbytes)("maxSubmissions",e.forum.maxattachments)("component",e.component)("componentId",e.forum.cmid)("allowOffline",!0)("courseId",e.courseId)}}function AddonModForumNewDiscussionPage_form_15_div_21_Template(e,s){if(1&e){const e=N.Fc();N.Ec(0,"div",16),N.nd(1,AddonModForumNewDiscussionPage_form_15_div_21_ion_item_1_Template,5,4,"ion-item",7),N.nd(2,AddonModForumNewDiscussionPage_form_15_div_21_ion_item_2_Template,7,11,"ion-item",17),N.Ec(3,"ion-item"),N.Ec(4,"ion-label"),N.pd(5),N.Pc(6,"translate"),N.Dc(),N.Ec(7,"ion-toggle",18),N.Mc("ngModelChange",(function AddonModForumNewDiscussionPage_form_15_div_21_Template_ion_toggle_ngModelChange_7_listener(s){N.fd(e);return N.Oc(2).newDiscussion.subscribe=s})),N.Dc(),N.Dc(),N.nd(8,AddonModForumNewDiscussionPage_form_15_div_21_ion_item_8_Template,5,4,"ion-item",7),N.nd(9,AddonModForumNewDiscussionPage_form_15_div_21_core_attachments_9_Template,1,7,"core-attachments",19),N.Dc()}if(2&e){const e=N.Oc(2);N.lc(1),N.Vc("ngIf",e.showGroups&&e.groupIds.length>1&&e.accessInfo.cancanposttomygroups),N.lc(1),N.Vc("ngIf",e.showGroups),N.lc(3),N.qd(N.Qc(6,6,"addon.mod_forum.discussionsubscription")),N.lc(2),N.Vc("ngModel",e.newDiscussion.subscribe),N.lc(1),N.Vc("ngIf",e.canPin),N.lc(1),N.Vc("ngIf",e.canCreateAttachments&&e.forum&&e.forum.maxattachments>0)}}function AddonModForumNewDiscussionPage_form_15_ion_col_25_Template(e,s){if(1&e){const e=N.Fc();N.Ec(0,"ion-col"),N.Ec(1,"ion-button",28),N.Mc("click",(function AddonModForumNewDiscussionPage_form_15_ion_col_25_Template_ion_button_click_1_listener(){N.fd(e);return N.Oc(2).discard()})),N.pd(2),N.Pc(3,"translate"),N.Dc(),N.Dc()}2&e&&(N.lc(2),N.qd(N.Qc(3,1,"core.discard")))}function AddonModForumNewDiscussionPage_form_15_Template(e,s){if(1&e){const e=N.Fc();N.Ec(0,"form",null,8),N.Ec(2,"ion-item"),N.Ec(3,"ion-label",9),N.pd(4),N.Pc(5,"translate"),N.Dc(),N.Ec(6,"ion-input",10),N.Mc("ngModelChange",(function AddonModForumNewDiscussionPage_form_15_Template_ion_input_ngModelChange_6_listener(s){N.fd(e);return N.Oc().newDiscussion.subject=s})),N.Pc(7,"translate"),N.Dc(),N.Dc(),N.Ec(8,"ion-item"),N.Ec(9,"ion-label",9),N.pd(10),N.Pc(11,"translate"),N.Dc(),N.Ec(12,"core-rich-text-editor",11),N.Mc("contentChanged",(function AddonModForumNewDiscussionPage_form_15_Template_core_rich_text_editor_contentChanged_12_listener(s){N.fd(e);return N.Oc().onMessageChange(s)})),N.Pc(13,"translate"),N.Dc(),N.Dc(),N.Ec(14,"ion-item",12),N.Mc("click",(function AddonModForumNewDiscussionPage_form_15_Template_ion_item_click_14_listener(){N.fd(e);return N.Oc().toggleAdvanced()})),N.Pc(15,"translate"),N.zc(16,"ion-icon",13),N.Ec(17,"ion-label"),N.Ec(18,"h2"),N.pd(19),N.Pc(20,"translate"),N.Dc(),N.Dc(),N.Dc(),N.nd(21,AddonModForumNewDiscussionPage_form_15_div_21_Template,10,8,"div",14),N.Ec(22,"ion-item"),N.Ec(23,"ion-label"),N.Ec(24,"ion-row"),N.nd(25,AddonModForumNewDiscussionPage_form_15_ion_col_25_Template,4,3,"ion-col",7),N.Ec(26,"ion-col"),N.Ec(27,"ion-button",15),N.Mc("click",(function AddonModForumNewDiscussionPage_form_15_Template_ion_button_click_27_listener(){N.fd(e);return N.Oc().add()})),N.pd(28),N.Pc(29,"translate"),N.Dc(),N.Dc(),N.Dc(),N.Dc(),N.Dc(),N.Dc()}if(2&e){const e=N.Oc();N.lc(4),N.qd(N.Qc(5,19,"addon.mod_forum.subject")),N.lc(2),N.Vc("ngModel",e.newDiscussion.subject)("placeholder",N.Qc(7,21,"addon.mod_forum.subject")),N.lc(4),N.qd(N.Qc(11,23,"addon.mod_forum.message")),N.lc(2),N.Vc("control",e.messageControl)("placeholder",N.Qc(13,25,"addon.mod_forum.message"))("component",e.component)("componentId",e.forum.cmid)("autoSave",!0)("contextInstanceId",e.forum.cmid),N.lc(2),N.mc("aria-expanded",e.advanced)("aria-label",N.Qc(15,27,e.advanced?"core.hideadvanced":"core.showadvanced")),N.lc(2),N.qc("expandable-status-icon-expanded",e.advanced),N.lc(3),N.qd(N.Qc(20,29,"addon.mod_forum.advanced")),N.lc(2),N.Vc("ngIf",e.advanced),N.lc(4),N.Vc("ngIf",e.hasOffline),N.lc(2),N.Vc("disabled",""==e.newDiscussion.subject||null==e.newDiscussion.message),N.lc(1),N.rd(" ",N.Qc(29,31,"addon.mod_forum.posttoforum")," ")}}let Q=(()=>{class AddonModForumNewDiscussionPage{constructor(e,s){this.route=e,this.splitView=s,this.component=h.b.COMPONENT,this.messageControl=new r.g,this.groupsLoaded=!1,this.showGroups=!1,this.hasOffline=!1,this.canCreateAttachments=!0,this.canPin=!1,this.showForm=!1,this.groups=[],this.groupIds=[],this.newDiscussion={subject:"",message:null,postToAllGroups:!1,groupId:0,subscribe:!0,pin:!1,files:[]},this.advanced=!1,this.accessInfo={},this.isDestroyed=!1,this.forceLeave=!1}ngOnInit(){var e,s;return Object(a.a)(this,void 0,void 0,(function*(){try{const o=this.route.snapshot.data;if(this.courseId=m.a.getRequiredRouteNumberParam("courseId"),this.cmId=m.a.getRequiredRouteNumberParam("cmId"),this.forumId=m.a.getRequiredRouteNumberParam("forumId"),this.timeCreated=m.a.getRequiredRouteNumberParam("timeCreated"),0!==this.timeCreated&&(null===(e=o.swipeEnabled)||void 0===e||e)){const e=y.a.getOrCreateSource(F.a,[this.courseId,this.cmId,null!==(s=o.discussionsPathPrefix)&&void 0!==s?s:""]);this.discussions=new new_discussion_page_AddonModForumNewDiscussionDiscussionsSwipeManager(e),yield this.discussions.start()}}catch(e){return p.a.showErrorModal(e),this.goBack(),void 0}this.fetchDiscussionData().finally((()=>{this.groupsLoaded=!0}))}))}ionViewDidEnter(){this.syncObserver||(this.syncObserver=u.b.on(f.b.AUTO_SYNCED,(e=>{e.forumId==this.forumId&&e.userId==_.b.getCurrentSiteUserId()&&(p.a.showAlertTranslated("core.notice","core.contenteditingsynced"),this.returnToDiscussions())}),_.b.getCurrentSiteId()))}fetchDiscussionData(e){return Object(a.a)(this,void 0,void 0,(function*(){try{const s=yield l.a.getActivityGroupMode(this.cmId),o=[];s===l.b.SEPARATEGROUPS||s===l.b.VISIBLEGROUPS?o.push(l.a.instance.getActivityAllowedGroups(this.cmId).then((e=>{let o;return o=s===l.b.VISIBLEGROUPS?this.validateVisibleGroups(e.groups):this.addAllParticipantsOption(e.groups,!0),o.then((e=>{if(e.length>0)return this.groups=e,this.groupIds=e.map((e=>e.id)).filter((e=>e>0)),this.newDiscussion.groupId=this.newDiscussion.groupId||e[0].id,this.showGroups=!0,this.groupIds.length<=1&&(this.newDiscussion.postToAllGroups=!1),void 0;throw new Error(D.M.instant(s===l.b.SEPARATEGROUPS?"addon.mod_forum.cannotadddiscussionall":"addon.mod_forum.cannotadddiscussion"))}))}))):(this.showGroups=!1,this.newDiscussion.postToAllGroups=!1,o.push(I.a.ignoreErrors(h.a.instance.canAddDiscussionToAll(this.forumId,{cmId:this.cmId}).then((e=>{this.canPin=!!e.canpindiscussions,this.canCreateAttachments=!!e.cancreateattachment}))))),o.push(h.a.getForum(this.courseId,this.cmId).then((e=>this.forum=e))),o.push(h.a.instance.getAccessInformation(this.forumId,{cmId:this.cmId}).then((e=>this.accessInfo=e))),yield Promise.all(o),this.timeCreated&&!e&&(this.syncId=f.a.getForumSyncId(this.forumId),yield f.a.waitForSync(this.syncId).then((()=>(this.isDestroyed||w.a.blockOperation(h.b.COMPONENT,this.syncId),b.a.instance.getNewDiscussion(this.forumId,this.timeCreated).then((e=>Object(a.a)(this,void 0,void 0,(function*(){if(this.hasOffline=!0,e.options=e.options||{},e.groupid==h.b.ALL_GROUPS?(this.newDiscussion.groupId=this.groups[0].id,this.newDiscussion.postToAllGroups=!0):(this.newDiscussion.groupId=e.groupid,this.newDiscussion.postToAllGroups=!1),this.newDiscussion.subject=e.subject,this.newDiscussion.message=e.message,this.newDiscussion.subscribe=!!e.options.discussionsubscribe,this.newDiscussion.pin=!!e.options.discussionpinned,this.messageControl.setValue(e.message),"object"==typeof e.options.attachmentsid&&e.options.attachmentsid.offline){const e=yield v.a.getNewDiscussionStoredFiles(this.forumId,this.timeCreated);this.newDiscussion.files=e}(!this.newDiscussion.subscribe||this.newDiscussion.pin||this.newDiscussion.files.length||this.groups.length>0&&this.newDiscussion.groupId!=this.groups[0].id||this.newDiscussion.postToAllGroups)&&(this.advanced=!0)})))))))),this.originalData||(this.originalData={subject:this.newDiscussion.subject,message:this.newDiscussion.message,files:this.newDiscussion.files.slice()}),this.showForm=!0}catch(e){p.a.showErrorModalDefault(e,"addon.mod_forum.errorgetgroups",!0),this.showForm=!1}}))}validateVisibleGroups(e){return Object(a.a)(this,void 0,void 0,(function*(){let s;try{s=yield h.a.canAddDiscussionToAll(this.forumId,{cmId:this.cmId})}catch(e){s={status:!1,canpindiscussions:!1,cancreateattachment:!0}}if(this.canPin=!!s.canpindiscussions,this.canCreateAttachments=!!s.cancreateattachment,s.status)return this.addAllParticipantsOption(e,!1);const o=[],i=[];return e.forEach((e=>{o.push(h.a.instance.canAddDiscussion(this.forumId,e.id,{cmId:this.cmId}).catch((()=>({status:!0}))).then((s=>{s.status&&i.push(e)})))})),yield Promise.all(o),i}))}filterGroups(e,s){const o=s.map((e=>e.id));return e.filter((e=>o.indexOf(e.id)>-1))}addAllParticipantsOption(e,s){let o;return o=s?h.a.canAddDiscussionToAll(this.forumId,{cmId:this.cmId}).then((e=>(this.canPin=!!e.canpindiscussions,this.canCreateAttachments=!!e.cancreateattachment,e.status))).catch((()=>!1)):Promise.resolve(!0),o.then((s=>(s&&e.unshift({courseid:this.courseId,id:h.b.ALL_PARTICIPANTS,name:D.M.instant("core.allparticipants")}),e)))}refreshGroups(e){const s=[l.a.invalidateActivityGroupMode(this.cmId),l.a.invalidateActivityAllowedGroups(this.cmId),h.a.invalidateCanAddDiscussion(this.forumId)];Promise.all(s).finally((()=>{this.fetchDiscussionData(!0).finally((()=>{null==e?void 0:e.complete()}))}))}returnToDiscussions(e,s){var o;this.forceLeave=!0,M.a.clearTmpFiles(this.newDiscussion.files),u.b.trigger(h.b.NEW_DISCUSSION_EVENT,{forumId:this.forumId,cmId:this.cmId,discussionIds:e,discTimecreated:s},_.b.getCurrentSiteId()),(null===(o=this.splitView)||void 0===o?void 0:o.outletActivated)?(this.hasOffline=!1,this.newDiscussion.subject="",this.newDiscussion.message=null,this.newDiscussion.files=[],this.newDiscussion.postToAllGroups=!1,this.messageEditor.clearText(),this.originalData=I.a.clone(this.newDiscussion)):m.a.back()}onMessageChange(e){this.newDiscussion.message=e}add(){return Object(a.a)(this,void 0,void 0,(function*(){const e=this.forum.name,s=this.newDiscussion.subject;let o=this.newDiscussion.message||"";const i=this.newDiscussion.pin,n=this.newDiscussion.files,t=this.timeCreated||Date.now(),c={discussionsubscribe:!!this.newDiscussion.subscribe};if(!s)return p.a.showErrorModal("addon.mod_forum.erroremptysubject",!0),void 0;if(!o)return p.a.showErrorModal("addon.mod_forum.erroremptymessage",!0),void 0;const d=yield p.a.showModalLoading("core.sending",!0);o=A.a.formatHtmlLines(o),i&&(c.discussionpinned=!0);const a=this.newDiscussion.postToAllGroups?this.groupIds:[this.newDiscussion.groupId];try{const i=yield v.a.addNewDiscussion(this.forumId,e,this.courseId,s,o,n,c,a,t);i&&(v.a.deleteNewDiscussionStoredFiles(this.forumId,t),u.b.trigger(u.b.ACTIVITY_DATA_SENT,{module:"forum"})),i&&i.length<a.length&&p.a.showErrorModalDefault(null,"addon.mod_forum.errorposttoallgroups",!0),P.a.triggerFormSubmittedEvent(this.formElement,!!i,_.b.getCurrentSiteId()),this.returnToDiscussions(i,t)}catch(e){p.a.showErrorModalDefault(e,"addon.mod_forum.cannotcreatediscussion",!0)}finally{d.dismiss()}}))}discard(){return Object(a.a)(this,void 0,void 0,(function*(){try{yield p.a.showConfirm(D.M.instant("core.areyousure"));const e=[];e.push(b.a.deleteNewDiscussion(this.forumId,this.timeCreated)),e.push(I.a.ignoreErrors(v.a.deleteNewDiscussionStoredFiles(this.forumId,this.timeCreated))),yield Promise.all(e),P.a.triggerFormCancelledEvent(this.formElement,_.b.getCurrentSiteId()),this.returnToDiscussions()}catch(e){}}))}toggleAdvanced(){this.advanced=!this.advanced}canLeave(){return Object(a.a)(this,void 0,void 0,(function*(){return this.forceLeave||(v.a.hasPostDataChanged(this.newDiscussion,this.originalData)&&(yield p.a.showConfirm(D.M.instant("core.confirmcanceledit"))),M.a.clearTmpFiles(this.newDiscussion.files),this.formElement&&P.a.triggerFormCancelledEvent(this.formElement,_.b.getCurrentSiteId())),!0}))}ionViewWillLeave(){this.syncObserver&&this.syncObserver.off(),delete this.syncObserver}goBack(){var e;(null===(e=this.splitView)||void 0===e?void 0:e.outletActivated)?m.a.navigate("../../"):m.a.back()}ngOnDestroy(){var e;this.syncId&&w.a.unblockOperation(h.b.COMPONENT,this.syncId),this.isDestroyed=!0,null===(e=this.discussions)||void 0===e||e.destroy()}}return AddonModForumNewDiscussionPage.ɵfac=function AddonModForumNewDiscussionPage_Factory(e){return new(e||AddonModForumNewDiscussionPage)(N.yc(i.a),N.yc(T.a,8))},AddonModForumNewDiscussionPage.ɵcmp=N.sc({type:AddonModForumNewDiscussionPage,selectors:[["page-addon-mod-forum-new-discussion"]],viewQuery:function AddonModForumNewDiscussionPage_Query(e,s){var o;(1&e&&(N.ud(R,!0),N.ud(g.a,!0)),2&e)&&(N.dd(o=N.Nc())&&(s.formElement=o.first),N.dd(o=N.Nc())&&(s.messageEditor=o.first))},decls:16,vars:13,consts:[["slot","start"],[3,"text"],["slot","end"],[3,"core-swipe-navigation"],["slot","fixed",3,"disabled","ionRefresh"],[3,"pullingText"],[3,"hideUntil"],[4,"ngIf"],["newDiscFormEl",""],["position","stacked"],["type","text","name","subject",3,"ngModel","placeholder","ngModelChange"],["name","addon_mod_forum_new_discussion","contextLevel","module","elementId","message",3,"control","placeholder","component","componentId","autoSave","contextInstanceId","contentChanged"],["button","","detail","false","role","heading","aria-controls","addon-mod-forum-new-discussion-advanced",1,"divider","ion-text-wrap",3,"click"],["name","fas-chevron-right","flip-rtl","","slot","start","aria-hidden","true",1,"expandable-status-icon"],["id","addon-mod-forum-new-discussion-advanced",4,"ngIf"],["expand","block",3,"disabled","click"],["id","addon-mod-forum-new-discussion-advanced"],["class","core-edit-set-group",4,"ngIf"],["name","subscribe",3,"ngModel","ngModelChange"],[3,"files","maxSize","maxSubmissions","component","componentId","allowOffline","courseId",4,"ngIf"],["name","postallgroups",3,"ngModel","ngModelChange"],[1,"core-edit-set-group"],["id","addon-mod-forum-groupslabel"],["aria-labelledby","addon-mod-forum-groupslabel","interface","action-sheet","name","groupid",3,"ngModel","disabled","interfaceOptions","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["name","pin",3,"ngModel","ngModelChange"],[3,"files","maxSize","maxSubmissions","component","componentId","allowOffline","courseId"],["expand","block","fill","outline",3,"click"]],template:function AddonModForumNewDiscussionPage_Template(e,s){1&e&&(N.Ec(0,"ion-header"),N.Ec(1,"ion-toolbar"),N.Ec(2,"ion-buttons",0),N.zc(3,"ion-back-button",1),N.Pc(4,"translate"),N.Dc(),N.Ec(5,"ion-title"),N.Ec(6,"h1"),N.pd(7),N.Pc(8,"translate"),N.Dc(),N.Dc(),N.zc(9,"ion-buttons",2),N.Dc(),N.Dc(),N.Ec(10,"ion-content",3),N.Ec(11,"ion-refresher",4),N.Mc("ionRefresh",(function AddonModForumNewDiscussionPage_Template_ion_refresher_ionRefresh_11_listener(e){return s.refreshGroups(e.target)})),N.zc(12,"ion-refresher-content",5),N.Pc(13,"translate"),N.Dc(),N.Ec(14,"core-loading",6),N.nd(15,AddonModForumNewDiscussionPage_form_15_Template,30,33,"form",7),N.Dc(),N.Dc()),2&e&&(N.lc(3),N.Vc("text",N.Qc(4,7,"core.back")),N.lc(4),N.qd(N.Qc(8,9,"addon.mod_forum.addanewdiscussion")),N.lc(3),N.Vc("core-swipe-navigation",s.discussions),N.lc(1),N.Vc("disabled",!s.groupsLoaded),N.lc(1),N.Wc("pullingText",N.Qc(13,11,"core.pulltorefresh")),N.lc(2),N.Vc("hideUntil",s.groupsLoaded),N.lc(1),N.Vc("ngIf",s.showForm))},directives:[C.C,C.Ab,C.m,C.h,C.i,C.yb,O.a,C.v,S.a,C.bb,C.cb,x.a,G.t,r.H,r.s,r.t,C.I,C.O,C.H,C.Pb,r.r,r.u,g.a,C.D,V.a,C.hb,C.u,j.a,C.l,C.zb,C.d,C.lb,C.Ob,G.s,C.mb,k.a],pipes:[L.d],encapsulation:2}),AddonModForumNewDiscussionPage})();class new_discussion_page_AddonModForumNewDiscussionDiscussionsSwipeManager extends E.a{getSelectedItemPathFromRoute(e){return`${this.getSource().DISCUSSIONS_PATH_PREFIX}new/${e.params.timeCreated}`}}const q=[{path:"",component:Q,canDeactivate:[t.a]}];let U=(()=>{class AddonForumNewDiscussionPageModule{}return AddonForumNewDiscussionPageModule.ɵmod=N.wc({type:AddonForumNewDiscussionPageModule}),AddonForumNewDiscussionPageModule.ɵinj=N.vc({factory:function AddonForumNewDiscussionPageModule_Factory(e){return new(e||AddonForumNewDiscussionPageModule)},imports:[[i.m.forChild(q),d.a,n.a,c.a]]}),AddonForumNewDiscussionPageModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&N.kd(U,{declarations:[Q],imports:[i.m,d.a,n.a,c.a]}))},eoiU:function(e,s,o){"use strict";o.d(s,"a",(function(){return CoreSwipeNavigationItemsManager}));var i=o("mrSG"),n=o("pHTc"),t=o("CtbY");class CoreSwipeNavigationItemsManager extends t.a{start(){return Object(i.a)(this,void 0,void 0,(function*(){this.updateSelectedItem()}))}navigateToNextItem(){return Object(i.a)(this,void 0,void 0,(function*(){yield this.navigateToItemBy(1,"forward")}))}navigateToPreviousItem(){return Object(i.a)(this,void 0,void 0,(function*(){yield this.navigateToItemBy(-1,"back")}))}hasNextItem(){return Object(i.a)(this,void 0,void 0,(function*(){return!!(yield this.getItemBy(1))}))}hasPreviousItem(){return Object(i.a)(this,void 0,void 0,(function*(){return!!(yield this.getItemBy(-1))}))}getCurrentPageRoute(){return n.a.getCurrentRoute()}getSelectedItemPathFromRoute(e){const s=[];for(;e&&(s.push(...e.url),e.firstChild);)e=e.firstChild;return s.map((e=>e.path)).join("/").replace(/\/+/,"/").trim()||null}navigateToItemBy(e,s){return Object(i.a)(this,void 0,void 0,(function*(){const o=yield this.getItemBy(e);o&&(yield this.navigateToItem(o,{animationDirection:s,replace:!0}))}))}getItemBy(e){var s;return Object(i.a)(this,void 0,void 0,(function*(){const o=this.getSource().getItems(),i=null!==(s=this.selectedItem&&(null==o?void 0:o.indexOf(this.selectedItem)))&&void 0!==s?s:-1;if(-1===i||null===o)return null;const n=e>0?1:-1;let t=i,c=0;for(;c!==e&&(t+=n,!(t<0||t>=o.length));)this.skipItemInSwipe(o[t])||(c+=n);return c===e?o[t]:this.getSource().isCompleted()?null:(yield this.getSource().load(),this.getItemBy(e))}))}skipItemInSwipe(e){return!1}}}}]);