(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"+T7f":function(e,s,n){"use strict";n.r(s),n.d(s,"AddonMessagesSearchPageModule",(function(){return w}));var t=n("tyNb"),a=n("Y+03"),c=n("vY5A"),o=n("muSn"),i=n("L3Fv"),r=n("PM4H"),l=n("mrSG"),g=n("fjkH"),_=n("9+EE"),d=n("KMk0"),h=n("3LXp"),m=n("nvXB"),u=n("pHTc"),p=n("fXoL"),M=n("TEn/"),f=n("nt/U"),S=n("46ml"),b=n("9zps"),P=n("PgjG"),A=n("ofXK"),T=n("xpMl"),v=n("r8G5"),C=n("FeAf"),y=n("hMzs"),E=n("3CSS"),I=n("ACYt"),k=n("sYmb"),x=n("Cg42");function AddonMessagesSearchPage_ion_list_15_ng_container_1_Template(e,s){1&e&&p.Ac(0)}function AddonMessagesSearchPage_ion_list_15_ng_container_2_Template(e,s){1&e&&p.Ac(0)}function AddonMessagesSearchPage_ion_list_15_ng_container_3_Template(e,s){1&e&&p.Ac(0)}const _c0=function(e){return{item:e}};function AddonMessagesSearchPage_ion_list_15_Template(e,s){if(1&e){const e=p.Fc();p.Ec(0,"ion-list"),p.nd(1,AddonMessagesSearchPage_ion_list_15_ng_container_1_Template,1,0,"ng-container",8),p.nd(2,AddonMessagesSearchPage_ion_list_15_ng_container_2_Template,1,0,"ng-container",8),p.nd(3,AddonMessagesSearchPage_ion_list_15_ng_container_3_Template,1,0,"ng-container",8),p.Ec(4,"core-infinite-loading",9),p.Mc("action",(function AddonMessagesSearchPage_ion_list_15_Template_core_infinite_loading_action_4_listener(s){p.fd(e);const n=p.Oc();return n.search(n.query,"messages",s)})),p.Dc(),p.Dc()}if(2&e){const e=p.Oc(),s=p.ed(18);p.lc(1),p.Vc("ngTemplateOutlet",s)("ngTemplateOutletContext",p.ad(8,_c0,e.contacts)),p.lc(1),p.Vc("ngTemplateOutlet",s)("ngTemplateOutletContext",p.ad(10,_c0,e.nonContacts)),p.lc(1),p.Vc("ngTemplateOutlet",s)("ngTemplateOutletContext",p.ad(12,_c0,e.messages)),p.lc(1),p.Vc("enabled",e.messages.canLoadMore)("error",e.messages.loadMoreError)}}function AddonMessagesSearchPage_core_empty_box_16_Template(e,s){1&e&&(p.zc(0,"core-empty-box",10),p.Pc(1,"translate")),2&e&&p.Vc("message",p.Qc(1,1,"core.noresults"))}function AddonMessagesSearchPage_ng_template_17_ng_container_0_ion_item_6_ion_icon_5_Template(e,s){1&e&&(p.zc(0,"ion-icon",21),p.Pc(1,"translate")),2&e&&p.mc("aria-label",p.Qc(1,1,"addon.messages.contactblocked"))}function AddonMessagesSearchPage_ng_template_17_ng_container_0_ion_item_6_ion_note_6_Template(e,s){if(1&e&&(p.Ec(0,"ion-note"),p.pd(1),p.Pc(2,"coreDateDayOrTime"),p.Dc()),2&e){const e=p.Oc().$implicit;p.lc(1),p.rd(" ",p.Qc(2,1,e.lastmessagedate)," ")}}function AddonMessagesSearchPage_ng_template_17_ng_container_0_ion_item_6_span_8_Template(e,s){1&e&&(p.Ec(0,"span",22),p.pd(1),p.Pc(2,"translate"),p.Dc()),2&e&&(p.lc(1),p.rd(" ",p.Qc(2,1,"addon.messages.you")," "))}function AddonMessagesSearchPage_ng_template_17_ng_container_0_ion_item_6_Template(e,s){if(1&e){const e=p.Fc();p.Ec(0,"ion-item",13),p.Mc("click",(function AddonMessagesSearchPage_ng_template_17_ng_container_0_ion_item_6_Template_ion_item_click_0_listener(){p.fd(e);const n=s.$implicit;return p.Oc(3).openConversation(n)})),p.zc(1,"core-user-avatar",14),p.Ec(2,"ion-label"),p.Ec(3,"p",15),p.zc(4,"core-format-text",16),p.nd(5,AddonMessagesSearchPage_ng_template_17_ng_container_0_ion_item_6_ion_icon_5_Template,2,3,"ion-icon",17),p.Dc(),p.nd(6,AddonMessagesSearchPage_ng_template_17_ng_container_0_ion_item_6_ion_note_6_Template,3,3,"ion-note",5),p.Ec(7,"p",18),p.nd(8,AddonMessagesSearchPage_ng_template_17_ng_container_0_ion_item_6_span_8_Template,3,3,"span",19),p.zc(9,"core-format-text",20),p.Dc(),p.Dc(),p.Dc()}if(2&e){const e=s.$implicit,n=p.Oc(3);p.mc("aria-label",e.fullname)("aria-current",e==n.selectedResult?"page":"false"),p.lc(1),p.Vc("user",e)("checkOnline",!0)("linkProfile",!1),p.lc(3),p.Vc("text",e.fullname)("highlight",e.highlightName)("filter",!1),p.lc(1),p.Vc("ngIf",e.isblocked),p.lc(1),p.Vc("ngIf",e.lastmessagedate>0),p.lc(2),p.Vc("ngIf",e.sentfromcurrentuser),p.lc(1),p.Vc("text",e.lastmessage)("highlight",e.highlightMessage)("contextInstanceId",0)}}function AddonMessagesSearchPage_ng_template_17_ng_container_0_ng_container_7_div_1_Template(e,s){if(1&e){const e=p.Fc();p.Ec(0,"div",25),p.Ec(1,"ion-button",26),p.Mc("click",(function AddonMessagesSearchPage_ng_template_17_ng_container_0_ng_container_7_div_1_Template_ion_button_click_1_listener(){p.fd(e);const s=p.Oc(3).item,n=p.Oc();return n.search(n.query,s.type)})),p.pd(2),p.Pc(3,"translate"),p.Dc(),p.Dc()}2&e&&(p.lc(2),p.rd(" ",p.Qc(3,1,"core.loadmore")," "))}function AddonMessagesSearchPage_ng_template_17_ng_container_0_ng_container_7_div_2_Template(e,s){1&e&&(p.Ec(0,"div",27),p.zc(1,"ion-spinner"),p.Pc(2,"translate"),p.Dc()),2&e&&(p.lc(1),p.mc("aria-label",p.Qc(2,1,"core.loading")))}function AddonMessagesSearchPage_ng_template_17_ng_container_0_ng_container_7_Template(e,s){if(1&e&&(p.Cc(0),p.nd(1,AddonMessagesSearchPage_ng_template_17_ng_container_0_ng_container_7_div_1_Template,4,3,"div",23),p.nd(2,AddonMessagesSearchPage_ng_template_17_ng_container_0_ng_container_7_div_2_Template,3,3,"div",24),p.Bc()),2&e){const e=p.Oc(2).item;p.lc(1),p.Vc("ngIf",e.canLoadMore&&!e.loadingMore),p.lc(1),p.Vc("ngIf",e.loadingMore)}}function AddonMessagesSearchPage_ng_template_17_ng_container_0_Template(e,s){if(1&e&&(p.Cc(0),p.Ec(1,"ion-item-divider",11),p.Ec(2,"ion-label"),p.Ec(3,"h2"),p.pd(4),p.Pc(5,"translate"),p.Dc(),p.Dc(),p.Dc(),p.nd(6,AddonMessagesSearchPage_ng_template_17_ng_container_0_ion_item_6_Template,10,14,"ion-item",12),p.nd(7,AddonMessagesSearchPage_ng_template_17_ng_container_0_ng_container_7_Template,3,2,"ng-container",5),p.Bc()),2&e){const e=p.Oc().item;p.lc(4),p.qd(p.Qc(5,3,e.titleString)),p.lc(2),p.Vc("ngForOf",e.results),p.lc(1),p.Vc("ngIf","messages"!=e.type)}}function AddonMessagesSearchPage_ng_template_17_Template(e,s){if(1&e&&p.nd(0,AddonMessagesSearchPage_ng_template_17_ng_container_0_Template,8,5,"ng-container",5),2&e){p.Vc("ngIf",s.item.results.length>0)}}let D=(()=>{class AddonMessagesSearchPage{constructor(){this.disableSearch=!1,this.displaySearching=!1,this.displayResults=!1,this.query="",this.contacts={type:"contacts",titleString:"addon.messages.contacts",results:[],canLoadMore:!1,loadingMore:!1},this.nonContacts={type:"noncontacts",titleString:"addon.messages.noncontacts",results:[],canLoadMore:!1,loadingMore:!1},this.messages={type:"messages",titleString:"addon.messages.messages",results:[],canLoadMore:!1,loadingMore:!1,loadMoreError:!1},this.memberInfoObserver=g.b.on(d.b.MEMBER_INFO_CHANGED_EVENT,(e=>{if(!e.userBlocked&&!e.userUnblocked)return;const s=this.contacts.results.find((s=>s.id==e.userId));if(s)s.isblocked=!!e.userBlocked;else{const s=this.nonContacts.results.find((s=>s.id==e.userId));s&&(s.isblocked=!!e.userBlocked)}this.messages.results.forEach((s=>{s.userid==e.userId&&(s.isblocked=!!e.userBlocked)}))}),_.b.getCurrentSiteId())}clearSearch(){this.query="",this.displayResults=!1;u.a.isCurrentPathInTablet("**/messages/search/discussion")&&u.a.navigate("../")}search(e,s,n){return Object(l.a)(this,void 0,void 0,(function*(){m.a.closeKeyboard(),this.query=e,this.disableSearch=!0,this.displaySearching=!s;const t=[];let a=[],c=[],o=[],i=!1,r=!1,l=!1;if(!s||"contacts"==s||"noncontacts"==s){const n=s?d.b.LIMIT_SEARCH:d.b.LIMIT_INITIAL_USER_SEARCH;let o=0;"contacts"==s?(o=this.contacts.results.length,this.contacts.loadingMore=!0):"noncontacts"==s&&(o=this.nonContacts.results.length,this.nonContacts.loadingMore=!0),t.push(d.a.searchUsers(e,o,n).then((e=>{s&&"contacts"!=s||(a=e.contacts,i=e.canLoadMoreContacts),s&&"noncontacts"!=s||(c=e.nonContacts,r=e.canLoadMoreNonContacts)})))}if(!s||"messages"==s){let n=0;"messages"==s&&(n=this.messages.results.length,this.messages.loadingMore=!0),t.push(d.a.searchMessages(e,void 0,n).then((e=>{o=e.messages,l=e.canLoadMore})))}try{yield Promise.all(t),s||(this.contacts.results=[],this.nonContacts.results=[],this.messages.results=[]),this.displayResults=!0,s&&"contacts"!=s||(this.contacts.results.push(...a),this.contacts.canLoadMore=i,this.setHighlight(a,!0)),s&&"noncontacts"!=s||(this.nonContacts.results.push(...c),this.nonContacts.canLoadMore=r,this.setHighlight(c,!0)),s&&"messages"!=s||(this.messages.results.push(...o),this.messages.canLoadMore=l,this.messages.loadMoreError=!1,this.setHighlight(o,!1)),s||(this.contacts.results.length>0?this.openConversation(this.contacts.results[0],!0):this.nonContacts.results.length>0?this.openConversation(this.nonContacts.results[0],!0):this.messages.results.length>0&&this.openConversation(this.messages.results[0],!0))}catch(e){h.a.showErrorModalDefault(e,"addon.messages.errorwhileretrievingusers",!0),"messages"==s&&(this.messages.loadMoreError=!0)}finally{this.disableSearch=!1,this.displaySearching=!1,"contacts"==s?this.contacts.loadingMore=!1:"noncontacts"==s?this.nonContacts.loadingMore=!1:"messages"==s&&(this.messages.loadingMore=!1),n&&n()}}))}openConversation(e,s=!1){if(!s||a.a.isTablet){this.selectedResult=e;const s={};"conversationid"in e?s.conversationId=e.conversationid:s.userId=e.id;const n=u.a.isCurrentPathInTablet("**/messages/search/discussion");u.a.navigate((n?"../":"")+"discussion",{params:s})}}setHighlight(e,s=!1){e.forEach((e=>{e.highlightName=s?this.query:void 0,e.highlightMessage=s?void 0:this.query}))}ngOnDestroy(){var e;null===(e=this.memberInfoObserver)||void 0===e?void 0:e.off()}}return AddonMessagesSearchPage.ɵfac=function AddonMessagesSearchPage_Factory(e){return new(e||AddonMessagesSearchPage)},AddonMessagesSearchPage.ɵcmp=p.sc({type:AddonMessagesSearchPage,selectors:[["page-addon-messages-search"]],decls:19,vars:16,consts:[["slot","start"],[3,"text"],["slot","end"],["autocorrect","off","searchArea","AddonMessagesSearch",3,"disabled","spellcheck","autoFocus","lengthCheck","onSubmit","onClear"],[3,"hideUntil","message"],[4,"ngIf"],["icon","fas-search",3,"message",4,"ngIf"],["resultsTemplate",""],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"enabled","error","action"],["icon","fas-search",3,"message"],[1,"ion-text-wrap"],["class","addon-message-discussion ion-text-wrap","detail","true","button","",3,"click",4,"ngFor","ngForOf"],["detail","true","button","",1,"addon-message-discussion","ion-text-wrap",3,"click"],["slot","start",3,"user","checkOnline","linkProfile"],[1,"item-heading"],[3,"text","highlight","filter"],["name","fas-ban",4,"ngIf"],[1,"addon-message-last-message"],["class","addon-message-last-message-user",4,"ngIf"],["clean","true","singleLine","true","contextLevel","system",1,"addon-message-last-message-text",3,"text","highlight","contextInstanceId"],["name","fas-ban"],[1,"addon-message-last-message-user"],["class","ion-padding-horizontal",4,"ngIf"],["class","ion-padding ion-text-center",4,"ngIf"],[1,"ion-padding-horizontal"],["expand","block","fill","outline",3,"click"],[1,"ion-padding","ion-text-center"]],template:function AddonMessagesSearchPage_Template(e,s){1&e&&(p.Ec(0,"ion-header"),p.Ec(1,"ion-toolbar"),p.Ec(2,"ion-buttons",0),p.zc(3,"ion-back-button",1),p.Pc(4,"translate"),p.Dc(),p.Ec(5,"ion-title"),p.Ec(6,"h1"),p.pd(7),p.Pc(8,"translate"),p.Dc(),p.Dc(),p.zc(9,"ion-buttons",2),p.Dc(),p.Dc(),p.Ec(10,"ion-content"),p.Ec(11,"core-split-view"),p.Ec(12,"core-search-box",3),p.Mc("onSubmit",(function AddonMessagesSearchPage_Template_core_search_box_onSubmit_12_listener(e){return s.search(e)}))("onClear",(function AddonMessagesSearchPage_Template_core_search_box_onClear_12_listener(){return s.clearSearch()})),p.Dc(),p.Ec(13,"core-loading",4),p.Pc(14,"translate"),p.nd(15,AddonMessagesSearchPage_ion_list_15_Template,5,14,"ion-list",5),p.nd(16,AddonMessagesSearchPage_core_empty_box_16_Template,2,3,"core-empty-box",6),p.Dc(),p.Dc(),p.Dc(),p.nd(17,AddonMessagesSearchPage_ng_template_17_Template,1,1,"ng-template",null,7,p.od)),2&e&&(p.lc(3),p.Vc("text",p.Qc(4,10,"core.back")),p.lc(4),p.qd(p.Qc(8,12,"addon.messages.searchcombined")),p.lc(5),p.Vc("disabled",s.disableSearch)("spellcheck",!1)("autoFocus",!0)("lengthCheck",1),p.lc(1),p.Vc("hideUntil",!s.displaySearching)("message",p.Qc(14,14,"core.searching")),p.lc(2),p.Vc("ngIf",s.displayResults),p.lc(1),p.Vc("ngIf",s.displayResults&&!s.contacts.results.length&&!s.nonContacts.results.length&&!s.messages.results.length))},directives:[M.C,M.Ab,M.m,M.h,M.i,M.yb,f.a,M.v,S.a,b.a,P.a,A.t,M.P,A.A,T.a,v.a,M.J,M.O,A.s,M.I,C.a,y.a,M.D,E.a,M.W,I.a,M.l,M.qb],pipes:[k.d,x.a],encapsulation:2}),AddonMessagesSearchPage})();const O=[{path:"",component:D},o.AddonMessagesDiscussionRoute],V=[{path:"",component:D,children:[o.AddonMessagesDiscussionRoute]}],L=[...Object(c.c)(O,(()=>a.a.isMobile)),...Object(c.c)(V,(()=>a.a.isTablet))];let w=(()=>{class AddonMessagesSearchPageModule{}return AddonMessagesSearchPageModule.ɵmod=p.wc({type:AddonMessagesSearchPageModule}),AddonMessagesSearchPageModule.ɵinj=p.vc({factory:function AddonMessagesSearchPageModule_Factory(e){return new(e||AddonMessagesSearchPageModule)},imports:[[t.m.forChild(L),i.a,r.a],t.m]}),AddonMessagesSearchPageModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&p.kd(w,{declarations:[D],imports:[t.m,i.a,r.a],exports:[t.m]}))}}]);