(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"+qIv":function(e,n,a){"use strict";a.r(n),a.d(n,"AddonBadgesLazyModule",(function(){return k}));var d=a("tyNb"),t=a("vY5A"),c=a("Y+03"),i=a("L3Fv"),o=a("mrSG"),s=a("Q98t"),g=a("3LXp"),r=a("9+EE"),_=a("4pns"),l=a("N1VN"),m=a("bFG1"),u=a("Xzvb"),p=a("pHTc"),b=a("eoiU"),B=a("CvRw");class user_badges_source_AddonBadgesUserBadgesSource extends B.a{constructor(e,n){super(),this.COURSE_ID=e,this.USER_ID=n}getItemPath(e){return e.uniquehash}getItemQueryParams(){return{courseId:this.COURSE_ID,userId:this.USER_ID}}loadPageItems(){return Object(o.a)(this,void 0,void 0,(function*(){return{items:yield l.a.getUserBadges(this.COURSE_ID,this.USER_ID)}}))}}var f=a("baaQ"),h=a("fXoL"),I=a("TEn/"),E=a("ofXK"),D=a("nt/U"),P=a("OZH1"),A=a("PgjG"),T=a("NcPy"),v=a("iSJP"),y=a("hMzs"),O=a("sYmb"),V=a("uYHD");function AddonBadgesIssuedBadgePage_h1_6_Template(e,n){if(1&e&&(h.Ec(0,"h1"),h.pd(1),h.Dc()),2&e){const e=h.Oc();h.lc(1),h.qd(e.badge.name)}}function AddonBadgesIssuedBadgePage_h1_7_Template(e,n){1&e&&(h.Ec(0,"h1"),h.pd(1),h.Pc(2,"translate"),h.Dc()),2&e&&(h.lc(1),h.qd(h.Qc(2,1,"addon.badges.badges")))}function AddonBadgesIssuedBadgePage_ion_item_group_13_img_3_Template(e,n){if(1&e&&h.zc(0,"img",10),2&e){const e=h.Oc(2);h.Vc("src",e.badge.badgeurl,h.id)("alt",e.badge.name)}}function AddonBadgesIssuedBadgePage_ion_item_group_13_ion_badge_4_Template(e,n){1&e&&(h.Ec(0,"ion-badge",11),h.pd(1),h.Pc(2,"translate"),h.Dc()),2&e&&(h.lc(1),h.rd(" ",h.Qc(2,1,"addon.badges.expired")," "))}function AddonBadgesIssuedBadgePage_ion_item_group_13_Template(e,n){if(1&e&&(h.Ec(0,"ion-item-group"),h.Ec(1,"ion-item",7),h.Ec(2,"ion-label"),h.nd(3,AddonBadgesIssuedBadgePage_ion_item_group_13_img_3_Template,1,2,"img",8),h.nd(4,AddonBadgesIssuedBadgePage_ion_item_group_13_ion_badge_4_Template,3,3,"ion-badge",9),h.Dc(),h.Dc(),h.Dc()),2&e){const e=h.Oc();h.lc(3),h.Vc("ngIf",e.badge.badgeurl),h.lc(1),h.Vc("ngIf",e.badge.dateexpire&&e.currentTime>=e.badge.dateexpire)}}function AddonBadgesIssuedBadgePage_ion_item_group_14_Template(e,n){if(1&e&&(h.Ec(0,"ion-item-group"),h.Ec(1,"ion-item-divider"),h.Ec(2,"ion-label"),h.Ec(3,"h2"),h.pd(4),h.Pc(5,"translate"),h.Dc(),h.Dc(),h.Dc(),h.Ec(6,"ion-item",12),h.Ec(7,"ion-label"),h.Ec(8,"h2"),h.pd(9),h.Pc(10,"translate"),h.Dc(),h.Ec(11,"p"),h.pd(12),h.Dc(),h.Dc(),h.Dc(),h.Dc()),2&e){const e=h.Oc();h.lc(4),h.qd(h.Qc(5,3,"addon.badges.recipientdetails")),h.lc(5),h.qd(h.Qc(10,5,"core.name")),h.lc(3),h.qd(e.user.fullname)}}function AddonBadgesIssuedBadgePage_ng_container_15_ion_item_7_Template(e,n){if(1&e&&(h.Ec(0,"ion-item",12),h.Ec(1,"ion-label"),h.Ec(2,"h2"),h.pd(3),h.Pc(4,"translate"),h.Dc(),h.Ec(5,"p"),h.pd(6),h.Dc(),h.Dc(),h.Dc()),2&e){const e=h.Oc(2);h.lc(3),h.qd(h.Qc(4,2,"addon.badges.issuername")),h.lc(3),h.qd(e.badge.issuername)}}function AddonBadgesIssuedBadgePage_ng_container_15_ion_item_8_Template(e,n){if(1&e&&(h.Ec(0,"ion-item",12),h.Ec(1,"ion-label"),h.Ec(2,"h2"),h.pd(3),h.Pc(4,"translate"),h.Dc(),h.Ec(5,"p"),h.Ec(6,"a",14),h.pd(7),h.Dc(),h.Dc(),h.Dc(),h.Dc()),2&e){const e=h.Oc(2);h.lc(3),h.qd(h.Qc(4,4,"addon.badges.contact")),h.lc(3),h.Xc("href","mailto:",e.badge.issuercontact,"",h.id),h.Vc("showBrowserWarning",!1),h.lc(1),h.rd(" ",e.badge.issuercontact," ")}}function AddonBadgesIssuedBadgePage_ng_container_15_ion_item_15_Template(e,n){if(1&e&&(h.Ec(0,"ion-item",12),h.Ec(1,"ion-label"),h.Ec(2,"h2"),h.pd(3),h.Pc(4,"translate"),h.Dc(),h.Ec(5,"p"),h.pd(6),h.Dc(),h.Dc(),h.Dc()),2&e){const e=h.Oc(2);h.lc(3),h.qd(h.Qc(4,2,"core.name")),h.lc(3),h.qd(e.badge.name)}}function AddonBadgesIssuedBadgePage_ng_container_15_ion_item_16_Template(e,n){if(1&e&&(h.Ec(0,"ion-item",12),h.Ec(1,"ion-label"),h.Ec(2,"h2"),h.pd(3),h.Pc(4,"translate"),h.Dc(),h.Ec(5,"p"),h.pd(6),h.Dc(),h.Dc(),h.Dc()),2&e){const e=h.Oc(2);h.lc(3),h.qd(h.Qc(4,2,"addon.badges.version")),h.lc(3),h.qd(e.badge.version)}}function AddonBadgesIssuedBadgePage_ng_container_15_ion_item_17_Template(e,n){if(1&e&&(h.Ec(0,"ion-item",12),h.Ec(1,"ion-label"),h.Ec(2,"h2"),h.pd(3),h.Pc(4,"translate"),h.Dc(),h.Ec(5,"p"),h.pd(6),h.Dc(),h.Dc(),h.Dc()),2&e){const e=h.Oc(2);h.lc(3),h.qd(h.Qc(4,2,"addon.badges.language")),h.lc(3),h.qd(e.badge.language)}}function AddonBadgesIssuedBadgePage_ng_container_15_ion_item_18_Template(e,n){if(1&e&&(h.Ec(0,"ion-item",12),h.Ec(1,"ion-label"),h.Ec(2,"h2"),h.pd(3),h.Pc(4,"translate"),h.Dc(),h.Ec(5,"p"),h.pd(6),h.Dc(),h.Dc(),h.Dc()),2&e){const e=h.Oc(2);h.lc(3),h.qd(h.Qc(4,2,"core.description")),h.lc(3),h.qd(e.badge.description)}}function AddonBadgesIssuedBadgePage_ng_container_15_ion_item_19_Template(e,n){if(1&e&&(h.Ec(0,"ion-item",12),h.Ec(1,"ion-label"),h.Ec(2,"h2"),h.pd(3),h.Pc(4,"translate"),h.Dc(),h.Ec(5,"p"),h.pd(6),h.Dc(),h.Dc(),h.Dc()),2&e){const e=h.Oc(2);h.lc(3),h.qd(h.Qc(4,2,"addon.badges.imageauthorname")),h.lc(3),h.qd(e.badge.imageauthorname)}}function AddonBadgesIssuedBadgePage_ng_container_15_ion_item_20_Template(e,n){if(1&e&&(h.Ec(0,"ion-item",12),h.Ec(1,"ion-label"),h.Ec(2,"h2"),h.pd(3),h.Pc(4,"translate"),h.Dc(),h.Ec(5,"p"),h.Ec(6,"a",14),h.pd(7),h.Dc(),h.Dc(),h.Dc(),h.Dc()),2&e){const e=h.Oc(2);h.lc(3),h.qd(h.Qc(4,4,"addon.badges.imageauthoremail")),h.lc(3),h.Xc("href","mailto:",e.badge.imageauthoremail,"",h.id),h.Vc("showBrowserWarning",!1),h.lc(1),h.rd(" ",e.badge.imageauthoremail," ")}}function AddonBadgesIssuedBadgePage_ng_container_15_ion_item_21_Template(e,n){if(1&e&&(h.Ec(0,"ion-item",12),h.Ec(1,"ion-label"),h.Ec(2,"h2"),h.pd(3),h.Pc(4,"translate"),h.Dc(),h.Ec(5,"p"),h.Ec(6,"a",15),h.pd(7),h.Dc(),h.Dc(),h.Dc(),h.Dc()),2&e){const e=h.Oc(2);h.lc(3),h.qd(h.Qc(4,3,"addon.badges.imageauthorurl")),h.lc(3),h.Vc("href",e.badge.imageauthorurl,h.id),h.lc(1),h.rd(" ",e.badge.imageauthorurl," ")}}function AddonBadgesIssuedBadgePage_ng_container_15_ion_item_22_Template(e,n){if(1&e&&(h.Ec(0,"ion-item",12),h.Ec(1,"ion-label"),h.Ec(2,"h2"),h.pd(3),h.Pc(4,"translate"),h.Dc(),h.Ec(5,"p"),h.pd(6),h.Dc(),h.Dc(),h.Dc()),2&e){const e=h.Oc(2);h.lc(3),h.qd(h.Qc(4,2,"addon.badges.imagecaption")),h.lc(3),h.qd(e.badge.imagecaption)}}function AddonBadgesIssuedBadgePage_ng_container_15_ion_item_23_Template(e,n){if(1&e&&(h.Ec(0,"ion-item",12),h.Ec(1,"ion-label"),h.Ec(2,"h2"),h.pd(3),h.Pc(4,"translate"),h.Dc(),h.Ec(5,"p"),h.zc(6,"core-format-text",16),h.Dc(),h.Dc(),h.Dc()),2&e){const e=h.Oc(2);h.lc(3),h.qd(h.Qc(4,3,"core.course")),h.lc(3),h.Vc("text",e.course.fullname)("contextInstanceId",e.courseId)}}function AddonBadgesIssuedBadgePage_ng_container_15_ion_item_30_Template(e,n){if(1&e&&(h.Ec(0,"ion-item",12),h.Ec(1,"ion-label"),h.Ec(2,"h2"),h.pd(3),h.Pc(4,"translate"),h.Dc(),h.Ec(5,"p"),h.pd(6),h.Pc(7,"coreFormatDate"),h.Dc(),h.Dc(),h.Dc()),2&e){const e=h.Oc(2);h.lc(3),h.qd(h.Qc(4,2,"addon.badges.dateawarded")),h.lc(3),h.qd(h.Qc(7,4,1e3*e.badge.dateissued))}}function AddonBadgesIssuedBadgePage_ng_container_15_ion_item_31_span_8_Template(e,n){1&e&&(h.Ec(0,"span",18),h.pd(1),h.Pc(2,"translate"),h.Dc()),2&e&&(h.lc(1),h.rd(" ",h.Qc(2,1,"addon.badges.warnexpired")," "))}function AddonBadgesIssuedBadgePage_ng_container_15_ion_item_31_Template(e,n){if(1&e&&(h.Ec(0,"ion-item",12),h.Ec(1,"ion-label"),h.Ec(2,"h2"),h.pd(3),h.Pc(4,"translate"),h.Dc(),h.Ec(5,"p"),h.pd(6),h.Pc(7,"coreFormatDate"),h.nd(8,AddonBadgesIssuedBadgePage_ng_container_15_ion_item_31_span_8_Template,3,3,"span",17),h.Dc(),h.Dc(),h.Dc()),2&e){const e=h.Oc(2);h.lc(3),h.qd(h.Qc(4,3,"addon.badges.expirydate")),h.lc(3),h.rd(" ",h.Qc(7,5,1e3*e.badge.dateexpire)," "),h.lc(2),h.Vc("ngIf",e.currentTime>=e.badge.dateexpire)}}function AddonBadgesIssuedBadgePage_ng_container_15_ion_item_group_32_ion_item_6_Template(e,n){if(1&e&&(h.Ec(0,"ion-item",12),h.Ec(1,"ion-label"),h.Ec(2,"h2"),h.pd(3),h.Pc(4,"translate"),h.Dc(),h.Ec(5,"p"),h.pd(6),h.Dc(),h.Dc(),h.Dc()),2&e){const e=h.Oc(3);h.lc(3),h.qd(h.Qc(4,2,"addon.badges.issuername")),h.lc(3),h.qd(e.badge.endorsement.issuername)}}function AddonBadgesIssuedBadgePage_ng_container_15_ion_item_group_32_ion_item_7_Template(e,n){if(1&e&&(h.Ec(0,"ion-item",12),h.Ec(1,"ion-label"),h.Ec(2,"h2"),h.pd(3),h.Pc(4,"translate"),h.Dc(),h.Ec(5,"p"),h.Ec(6,"a",14),h.pd(7),h.Dc(),h.Dc(),h.Dc(),h.Dc()),2&e){const e=h.Oc(3);h.lc(3),h.qd(h.Qc(4,4,"addon.badges.issueremail")),h.lc(3),h.Xc("href","mailto:",e.badge.endorsement.issueremail,"",h.id),h.Vc("showBrowserWarning",!1),h.lc(1),h.rd(" ",e.badge.endorsement.issueremail," ")}}function AddonBadgesIssuedBadgePage_ng_container_15_ion_item_group_32_ion_item_8_Template(e,n){if(1&e&&(h.Ec(0,"ion-item",12),h.Ec(1,"ion-label"),h.Ec(2,"h2"),h.pd(3),h.Pc(4,"translate"),h.Dc(),h.Ec(5,"p"),h.Ec(6,"a",15),h.pd(7),h.Dc(),h.Dc(),h.Dc(),h.Dc()),2&e){const e=h.Oc(3);h.lc(3),h.qd(h.Qc(4,3,"addon.badges.issuerurl")),h.lc(3),h.Vc("href",e.badge.endorsement.issuerurl,h.id),h.lc(1),h.rd(" ",e.badge.endorsement.issuerurl," ")}}function AddonBadgesIssuedBadgePage_ng_container_15_ion_item_group_32_ion_item_9_Template(e,n){if(1&e&&(h.Ec(0,"ion-item",12),h.Ec(1,"ion-label"),h.Ec(2,"h2"),h.pd(3),h.Pc(4,"translate"),h.Dc(),h.Ec(5,"p"),h.pd(6),h.Pc(7,"coreFormatDate"),h.Dc(),h.Dc(),h.Dc()),2&e){const e=h.Oc(3);h.lc(3),h.qd(h.Qc(4,2,"addon.badges.dateawarded")),h.lc(3),h.qd(h.Qc(7,4,1e3*e.badge.endorsement.dateissued))}}function AddonBadgesIssuedBadgePage_ng_container_15_ion_item_group_32_ion_item_10_Template(e,n){if(1&e&&(h.Ec(0,"ion-item",12),h.Ec(1,"ion-label"),h.Ec(2,"h2"),h.pd(3),h.Pc(4,"translate"),h.Dc(),h.Ec(5,"p"),h.Ec(6,"a",15),h.pd(7),h.Dc(),h.Dc(),h.Dc(),h.Dc()),2&e){const e=h.Oc(3);h.lc(3),h.qd(h.Qc(4,3,"addon.badges.claimid")),h.lc(3),h.Vc("href",e.badge.endorsement.claimid,h.id),h.lc(1),h.rd(" ",e.badge.endorsement.claimid," ")}}function AddonBadgesIssuedBadgePage_ng_container_15_ion_item_group_32_ion_item_11_Template(e,n){if(1&e&&(h.Ec(0,"ion-item",12),h.Ec(1,"ion-label"),h.Ec(2,"h2"),h.pd(3),h.Pc(4,"translate"),h.Dc(),h.Ec(5,"p"),h.pd(6),h.Dc(),h.Dc(),h.Dc()),2&e){const e=h.Oc(3);h.lc(3),h.qd(h.Qc(4,2,"addon.badges.claimcomment")),h.lc(3),h.qd(e.badge.endorsement.claimcomment)}}function AddonBadgesIssuedBadgePage_ng_container_15_ion_item_group_32_Template(e,n){if(1&e&&(h.Ec(0,"ion-item-group"),h.Ec(1,"ion-item-divider"),h.Ec(2,"ion-label"),h.Ec(3,"h2"),h.pd(4),h.Pc(5,"translate"),h.Dc(),h.Dc(),h.Dc(),h.nd(6,AddonBadgesIssuedBadgePage_ng_container_15_ion_item_group_32_ion_item_6_Template,7,4,"ion-item",13),h.nd(7,AddonBadgesIssuedBadgePage_ng_container_15_ion_item_group_32_ion_item_7_Template,8,6,"ion-item",13),h.nd(8,AddonBadgesIssuedBadgePage_ng_container_15_ion_item_group_32_ion_item_8_Template,8,5,"ion-item",13),h.nd(9,AddonBadgesIssuedBadgePage_ng_container_15_ion_item_group_32_ion_item_9_Template,8,6,"ion-item",13),h.nd(10,AddonBadgesIssuedBadgePage_ng_container_15_ion_item_group_32_ion_item_10_Template,8,5,"ion-item",13),h.nd(11,AddonBadgesIssuedBadgePage_ng_container_15_ion_item_group_32_ion_item_11_Template,7,4,"ion-item",13),h.Dc()),2&e){const e=h.Oc(2);h.lc(4),h.qd(h.Qc(5,7,"addon.badges.bendorsement")),h.lc(2),h.Vc("ngIf",e.badge.endorsement.issuername),h.lc(1),h.Vc("ngIf",e.badge.endorsement.issueremail),h.lc(1),h.Vc("ngIf",e.badge.endorsement.issuerurl),h.lc(1),h.Vc("ngIf",e.badge.endorsement.dateissued),h.lc(1),h.Vc("ngIf",e.badge.endorsement.claimid),h.lc(1),h.Vc("ngIf",e.badge.endorsement.claimcomment)}}function AddonBadgesIssuedBadgePage_ng_container_15_ion_item_group_33_ion_item_6_Template(e,n){if(1&e&&(h.Ec(0,"ion-item",12),h.Ec(1,"ion-label"),h.Ec(2,"h2"),h.pd(3),h.Dc(),h.Dc(),h.Dc()),2&e){const e=n.$implicit;h.lc(3),h.qd(e.name)}}function AddonBadgesIssuedBadgePage_ng_container_15_ion_item_group_33_ion_item_7_Template(e,n){1&e&&(h.Ec(0,"ion-item",12),h.Ec(1,"ion-label"),h.Ec(2,"h2"),h.pd(3),h.Pc(4,"translate"),h.Dc(),h.Dc(),h.Dc()),2&e&&(h.lc(3),h.qd(h.Qc(4,1,"addon.badges.norelated")))}function AddonBadgesIssuedBadgePage_ng_container_15_ion_item_group_33_Template(e,n){if(1&e&&(h.Ec(0,"ion-item-group"),h.Ec(1,"ion-item-divider"),h.Ec(2,"ion-label"),h.Ec(3,"h2"),h.pd(4),h.Pc(5,"translate"),h.Dc(),h.Dc(),h.Dc(),h.nd(6,AddonBadgesIssuedBadgePage_ng_container_15_ion_item_group_33_ion_item_6_Template,4,1,"ion-item",19),h.nd(7,AddonBadgesIssuedBadgePage_ng_container_15_ion_item_group_33_ion_item_7_Template,5,3,"ion-item",13),h.Dc()),2&e){const e=h.Oc(2);h.lc(4),h.qd(h.Qc(5,3,"addon.badges.relatedbages")),h.lc(2),h.Vc("ngForOf",e.badge.relatedbadges),h.lc(1),h.Vc("ngIf",0==e.badge.relatedbadges.length)}}function AddonBadgesIssuedBadgePage_ng_container_15_ion_item_group_34_ion_item_6_Template(e,n){if(1&e&&(h.Ec(0,"ion-item",21),h.Ec(1,"ion-label"),h.Ec(2,"h2"),h.pd(3),h.Dc(),h.Dc(),h.Dc()),2&e){const e=n.$implicit;h.Vc("href",e.targeturl),h.lc(3),h.qd(e.targetname)}}function AddonBadgesIssuedBadgePage_ng_container_15_ion_item_group_34_ion_item_7_Template(e,n){1&e&&(h.Ec(0,"ion-item",12),h.Ec(1,"ion-label"),h.Ec(2,"h2"),h.pd(3),h.Pc(4,"translate"),h.Dc(),h.Dc(),h.Dc()),2&e&&(h.lc(3),h.qd(h.Qc(4,1,"addon.badges.noalignment")))}function AddonBadgesIssuedBadgePage_ng_container_15_ion_item_group_34_Template(e,n){if(1&e&&(h.Ec(0,"ion-item-group"),h.Ec(1,"ion-item-divider"),h.Ec(2,"ion-label"),h.Ec(3,"h2"),h.pd(4),h.Pc(5,"translate"),h.Dc(),h.Dc(),h.Dc(),h.nd(6,AddonBadgesIssuedBadgePage_ng_container_15_ion_item_group_34_ion_item_6_Template,4,2,"ion-item",20),h.nd(7,AddonBadgesIssuedBadgePage_ng_container_15_ion_item_group_34_ion_item_7_Template,5,3,"ion-item",13),h.Dc()),2&e){const e=h.Oc(2);h.lc(4),h.qd(h.Qc(5,3,"addon.badges.alignment")),h.lc(2),h.Vc("ngForOf",e.badge.alignment),h.lc(1),h.Vc("ngIf",0==e.badge.alignment.length)}}function AddonBadgesIssuedBadgePage_ng_container_15_Template(e,n){if(1&e&&(h.Cc(0),h.Ec(1,"ion-item-group"),h.Ec(2,"ion-item-divider"),h.Ec(3,"ion-label"),h.Ec(4,"h2"),h.pd(5),h.Pc(6,"translate"),h.Dc(),h.Dc(),h.Dc(),h.nd(7,AddonBadgesIssuedBadgePage_ng_container_15_ion_item_7_Template,7,4,"ion-item",13),h.nd(8,AddonBadgesIssuedBadgePage_ng_container_15_ion_item_8_Template,8,6,"ion-item",13),h.Dc(),h.Ec(9,"ion-item-group"),h.Ec(10,"ion-item-divider"),h.Ec(11,"ion-label"),h.Ec(12,"h2"),h.pd(13),h.Pc(14,"translate"),h.Dc(),h.Dc(),h.Dc(),h.nd(15,AddonBadgesIssuedBadgePage_ng_container_15_ion_item_15_Template,7,4,"ion-item",13),h.nd(16,AddonBadgesIssuedBadgePage_ng_container_15_ion_item_16_Template,7,4,"ion-item",13),h.nd(17,AddonBadgesIssuedBadgePage_ng_container_15_ion_item_17_Template,7,4,"ion-item",13),h.nd(18,AddonBadgesIssuedBadgePage_ng_container_15_ion_item_18_Template,7,4,"ion-item",13),h.nd(19,AddonBadgesIssuedBadgePage_ng_container_15_ion_item_19_Template,7,4,"ion-item",13),h.nd(20,AddonBadgesIssuedBadgePage_ng_container_15_ion_item_20_Template,8,6,"ion-item",13),h.nd(21,AddonBadgesIssuedBadgePage_ng_container_15_ion_item_21_Template,8,5,"ion-item",13),h.nd(22,AddonBadgesIssuedBadgePage_ng_container_15_ion_item_22_Template,7,4,"ion-item",13),h.nd(23,AddonBadgesIssuedBadgePage_ng_container_15_ion_item_23_Template,7,5,"ion-item",13),h.Dc(),h.Ec(24,"ion-item-group"),h.Ec(25,"ion-item-divider"),h.Ec(26,"ion-label"),h.Ec(27,"h2"),h.pd(28),h.Pc(29,"translate"),h.Dc(),h.Dc(),h.Dc(),h.nd(30,AddonBadgesIssuedBadgePage_ng_container_15_ion_item_30_Template,8,6,"ion-item",13),h.nd(31,AddonBadgesIssuedBadgePage_ng_container_15_ion_item_31_Template,9,7,"ion-item",13),h.Dc(),h.nd(32,AddonBadgesIssuedBadgePage_ng_container_15_ion_item_group_32_Template,12,9,"ion-item-group",2),h.nd(33,AddonBadgesIssuedBadgePage_ng_container_15_ion_item_group_33_Template,8,5,"ion-item-group",2),h.nd(34,AddonBadgesIssuedBadgePage_ng_container_15_ion_item_group_34_Template,8,5,"ion-item-group",2),h.Bc()),2&e){const e=h.Oc();h.lc(5),h.qd(h.Qc(6,19,"addon.badges.issuerdetails")),h.lc(2),h.Vc("ngIf",e.badge.issuername),h.lc(1),h.Vc("ngIf",e.badge.issuercontact),h.lc(5),h.qd(h.Qc(14,21,"addon.badges.badgedetails")),h.lc(2),h.Vc("ngIf",e.badge.name),h.lc(1),h.Vc("ngIf",e.badge.version),h.lc(1),h.Vc("ngIf",e.badge.language),h.lc(1),h.Vc("ngIf",e.badge.description),h.lc(1),h.Vc("ngIf",e.badge.imageauthorname),h.lc(1),h.Vc("ngIf",e.badge.imageauthoremail),h.lc(1),h.Vc("ngIf",e.badge.imageauthorurl),h.lc(1),h.Vc("ngIf",e.badge.imagecaption),h.lc(1),h.Vc("ngIf",e.course),h.lc(5),h.qd(h.Qc(29,23,"addon.badges.issuancedetails")),h.lc(2),h.Vc("ngIf",e.badge.dateissued),h.lc(1),h.Vc("ngIf",e.badge.dateexpire),h.lc(1),h.Vc("ngIf",e.badge.endorsement),h.lc(1),h.Vc("ngIf",e.badge.relatedbadges),h.lc(1),h.Vc("ngIf",e.badge.alignment)}}let q=(()=>{class AddonBadgesIssuedBadgePage{constructor(e){this.route=e,this.badgeHash="",this.courseId=0,this.badgeLoaded=!1,this.currentTime=0,this.courseId=p.a.getRouteNumberParam("courseId")||this.courseId,this.userId=p.a.getRouteNumberParam("userId")||r.b.getRequiredCurrentSite().getUserId(),this.badgeHash=p.a.getRouteParam("badgeHash")||"";const n=f.a.getOrCreateSource(user_badges_source_AddonBadgesUserBadgesSource,[this.courseId,this.userId]);this.badges=new b.a(n)}ngOnInit(){this.fetchIssuedBadge().finally((()=>{this.badgeLoaded=!0})),this.badges.start()}ngOnDestroy(){this.badges.destroy()}fetchIssuedBadge(){return Object(o.a)(this,void 0,void 0,(function*(){this.currentTime=s.a.timestamp(),this.user=yield _.a.getProfile(this.userId,this.courseId,!0);try{const e=(yield l.a.getUserBadges(this.courseId,this.userId)).find((e=>this.badgeHash==e.uniquehash));if(!e)return;if(this.badge=e,e.courseid)try{this.course=yield u.a.getUserCourse(e.courseid,!0)}catch(e){this.course=void 0}}catch(e){g.a.showErrorModalDefault(e,"Error getting badge data.")}}))}refreshBadges(e){return Object(o.a)(this,void 0,void 0,(function*(){yield m.a.ignoreErrors(Promise.all([l.a.invalidateUserBadges(this.courseId,this.userId)])),yield m.a.ignoreErrors(Promise.all([this.fetchIssuedBadge()])),null==e||e.complete()}))}}return AddonBadgesIssuedBadgePage.ɵfac=function AddonBadgesIssuedBadgePage_Factory(e){return new(e||AddonBadgesIssuedBadgePage)(h.yc(d.a))},AddonBadgesIssuedBadgePage.ɵcmp=h.sc({type:AddonBadgesIssuedBadgePage,selectors:[["page-addon-badges-issued-badge"]],decls:16,vars:14,consts:[["slot","start"],[3,"text"],[4,"ngIf"],[1,"limited-width",3,"core-swipe-navigation"],["slot","fixed",3,"disabled","ionRefresh"],[3,"pullingText"],[3,"hideUntil"],[1,"ion-text-wrap","ion-text-center"],["class","large-avatar","core-external-content","",3,"src","alt",4,"ngIf"],["color","danger",4,"ngIf"],["core-external-content","",1,"large-avatar",3,"src","alt"],["color","danger"],[1,"ion-text-wrap"],["class","ion-text-wrap",4,"ngIf"],["core-link","","auto-login","no",3,"href","showBrowserWarning"],["core-link","","auto-login","no",3,"href"],["contextLevel","course",3,"text","contextInstanceId"],["class","text-danger",4,"ngIf"],[1,"text-danger"],["class","ion-text-wrap",4,"ngFor","ngForOf"],["class","ion-text-wrap","core-link","","auto-login","no",3,"href",4,"ngFor","ngForOf"],["core-link","","auto-login","no",1,"ion-text-wrap",3,"href"]],template:function AddonBadgesIssuedBadgePage_Template(e,n){1&e&&(h.Ec(0,"ion-header"),h.Ec(1,"ion-toolbar"),h.Ec(2,"ion-buttons",0),h.zc(3,"ion-back-button",1),h.Pc(4,"translate"),h.Dc(),h.Ec(5,"ion-title"),h.nd(6,AddonBadgesIssuedBadgePage_h1_6_Template,2,1,"h1",2),h.nd(7,AddonBadgesIssuedBadgePage_h1_7_Template,3,3,"h1",2),h.Dc(),h.Dc(),h.Dc(),h.Ec(8,"ion-content",3),h.Ec(9,"ion-refresher",4),h.Mc("ionRefresh",(function AddonBadgesIssuedBadgePage_Template_ion_refresher_ionRefresh_9_listener(e){return n.refreshBadges(e.target)})),h.zc(10,"ion-refresher-content",5),h.Pc(11,"translate"),h.Dc(),h.Ec(12,"core-loading",6),h.nd(13,AddonBadgesIssuedBadgePage_ion_item_group_13_Template,5,2,"ion-item-group",2),h.nd(14,AddonBadgesIssuedBadgePage_ion_item_group_14_Template,13,7,"ion-item-group",2),h.nd(15,AddonBadgesIssuedBadgePage_ng_container_15_Template,35,25,"ng-container",2),h.Dc(),h.Dc()),2&e&&(h.lc(3),h.Vc("text",h.Qc(4,10,"core.back")),h.lc(3),h.Vc("ngIf",n.badge),h.lc(1),h.Vc("ngIf",!n.badge),h.lc(1),h.Vc("core-swipe-navigation",n.badges),h.lc(1),h.Vc("disabled",!n.badgeLoaded),h.lc(1),h.Wc("pullingText",h.Qc(11,12,"core.pulltorefresh")),h.lc(2),h.Vc("hideUntil",n.badgeLoaded),h.lc(1),h.Vc("ngIf",n.badge),h.lc(1),h.Vc("ngIf",n.user),h.lc(1),h.Vc("ngIf",n.badge))},directives:[I.C,I.Ab,I.m,I.h,I.i,I.yb,E.t,D.a,I.v,P.a,I.bb,I.cb,A.a,I.K,I.I,I.O,T.a,I.k,I.J,v.a,y.a,E.s],pipes:[O.d,V.a],encapsulation:2}),AddonBadgesIssuedBadgePage})();var x=a("46ml"),w=a("EoRH"),Q=a("r8G5");function AddonBadgesUserBadgesPage_core_empty_box_15_Template(e,n){1&e&&(h.zc(0,"core-empty-box",7),h.Pc(1,"translate")),2&e&&h.Vc("message",h.Qc(1,1,"addon.badges.nobadges"))}function AddonBadgesUserBadgesPage_ion_list_16_ion_item_1_ion_badge_9_Template(e,n){1&e&&(h.Ec(0,"ion-badge",14),h.pd(1),h.Pc(2,"translate"),h.Dc()),2&e&&(h.lc(1),h.rd(" ",h.Qc(2,1,"addon.badges.expired")," "))}function AddonBadgesUserBadgesPage_ion_list_16_ion_item_1_Template(e,n){if(1&e){const e=h.Fc();h.Ec(0,"ion-item",10),h.Mc("click",(function AddonBadgesUserBadgesPage_ion_list_16_ion_item_1_Template_ion_item_click_0_listener(){h.fd(e);const a=n.$implicit;return h.Oc(2).badges.select(a)})),h.Ec(1,"ion-avatar",0),h.zc(2,"img",11),h.Dc(),h.Ec(3,"ion-label"),h.Ec(4,"p",12),h.pd(5),h.Dc(),h.Ec(6,"p"),h.pd(7),h.Pc(8,"coreFormatDate"),h.Dc(),h.Dc(),h.nd(9,AddonBadgesUserBadgesPage_ion_list_16_ion_item_1_ion_badge_9_Template,3,3,"ion-badge",13),h.Dc()}if(2&e){const e=n.$implicit,a=h.Oc(2);h.mc("aria-label",e.name)("aria-current",a.badges.getItemAriaCurrent(e)),h.lc(2),h.Vc("src",e.badgeurl,h.id)("alt",e.name),h.lc(3),h.qd(e.name),h.lc(2),h.qd(h.Rc(8,7,1e3*e.dateissued,"strftimedatetimeshort")),h.lc(2),h.Vc("ngIf",e.dateexpire&&a.currentTime>=e.dateexpire)}}function AddonBadgesUserBadgesPage_ion_list_16_Template(e,n){if(1&e&&(h.Ec(0,"ion-list",8),h.nd(1,AddonBadgesUserBadgesPage_ion_list_16_ion_item_1_Template,10,10,"ion-item",9),h.Dc()),2&e){const e=h.Oc();h.lc(1),h.Vc("ngForOf",e.badges.items)}}let U=(()=>{class AddonBadgesUserBadgesPage{constructor(){var e,n;this.currentTime=0;let a=null!==(e=p.a.getRouteNumberParam("courseId"))&&void 0!==e?e:0;const d=null!==(n=p.a.getRouteNumberParam("userId"))&&void 0!==n?n:r.b.getCurrentSiteUserId();a===r.b.getCurrentSiteHomeId()&&(a=0),this.badges=new w.a(f.a.getOrCreateSource(user_badges_source_AddonBadgesUserBadgesSource,[a,d]),AddonBadgesUserBadgesPage)}ngAfterViewInit(){return Object(o.a)(this,void 0,void 0,(function*(){yield this.fetchInitialBadges(),this.badges.start(this.splitView)}))}ngOnDestroy(){this.badges.destroy()}refreshBadges(e){return Object(o.a)(this,void 0,void 0,(function*(){yield m.a.ignoreErrors(l.a.invalidateUserBadges(this.badges.getSource().COURSE_ID,this.badges.getSource().USER_ID)),yield m.a.ignoreErrors(this.badges.reload()),null==e||e.complete()}))}fetchInitialBadges(){return Object(o.a)(this,void 0,void 0,(function*(){this.currentTime=s.a.timestamp();try{yield this.badges.reload()}catch(e){g.a.showErrorModalDefault(e,"Error loading badges"),this.badges.reset()}}))}}return AddonBadgesUserBadgesPage.ɵfac=function AddonBadgesUserBadgesPage_Factory(e){return new(e||AddonBadgesUserBadgesPage)},AddonBadgesUserBadgesPage.ɵcmp=h.sc({type:AddonBadgesUserBadgesPage,selectors:[["page-addon-badges-user-badges"]],viewQuery:function AddonBadgesUserBadgesPage_Query(e,n){var a;(1&e&&h.ud(x.a,!0),2&e)&&(h.dd(a=h.Nc())&&(n.splitView=a.first))},decls:17,vars:13,consts:[["slot","start"],[3,"text"],["slot","fixed",3,"disabled","ionRefresh"],[3,"pullingText"],[3,"hideUntil"],["icon","fas-trophy",3,"message",4,"ngIf"],["class","ion-no-margin",4,"ngIf"],["icon","fas-trophy",3,"message"],[1,"ion-no-margin"],["button","","class","ion-text-wrap","detail","true",3,"click",4,"ngFor","ngForOf"],["button","","detail","true",1,"ion-text-wrap",3,"click"],["core-external-content","",3,"src","alt"],[1,"item-heading"],["slot","end","color","danger",4,"ngIf"],["slot","end","color","danger"]],template:function AddonBadgesUserBadgesPage_Template(e,n){1&e&&(h.Ec(0,"ion-header"),h.Ec(1,"ion-toolbar"),h.Ec(2,"ion-buttons",0),h.zc(3,"ion-back-button",1),h.Pc(4,"translate"),h.Dc(),h.Ec(5,"ion-title"),h.Ec(6,"h1"),h.pd(7),h.Pc(8,"translate"),h.Dc(),h.Dc(),h.Dc(),h.Dc(),h.Ec(9,"ion-content"),h.Ec(10,"core-split-view"),h.Ec(11,"ion-refresher",2),h.Mc("ionRefresh",(function AddonBadgesUserBadgesPage_Template_ion_refresher_ionRefresh_11_listener(e){return n.refreshBadges(e.target)})),h.zc(12,"ion-refresher-content",3),h.Pc(13,"translate"),h.Dc(),h.Ec(14,"core-loading",4),h.nd(15,AddonBadgesUserBadgesPage_core_empty_box_15_Template,2,3,"core-empty-box",5),h.nd(16,AddonBadgesUserBadgesPage_ion_list_16_Template,2,1,"ion-list",6),h.Dc(),h.Dc(),h.Dc()),2&e&&(h.lc(3),h.Vc("text",h.Qc(4,7,"core.back")),h.lc(4),h.qd(h.Qc(8,9,"addon.badges.badges")),h.lc(4),h.Vc("disabled",!n.badges.loaded),h.lc(1),h.Wc("pullingText",h.Qc(13,11,"core.pulltorefresh")),h.lc(2),h.Vc("hideUntil",n.badges.loaded),h.lc(1),h.Vc("ngIf",n.badges.empty),h.lc(1),h.Vc("ngIf",!n.badges.empty))},directives:[I.C,I.Ab,I.m,I.h,I.i,I.yb,D.a,I.v,x.a,I.bb,I.cb,A.a,E.t,Q.a,I.P,E.s,I.I,I.g,T.a,I.O,I.k],pipes:[O.d,V.a],encapsulation:2}),AddonBadgesUserBadgesPage})();const S=[{path:"",pathMatch:"full",component:U},{path:":badgeHash",component:q}],R=[{path:"",component:U,children:[{path:":badgeHash",component:q}]}],C=[...Object(t.c)(S,(()=>c.a.isMobile)),...Object(t.c)(R,(()=>c.a.isTablet))];let k=(()=>{class AddonBadgesLazyModule{}return AddonBadgesLazyModule.ɵmod=h.wc({type:AddonBadgesLazyModule}),AddonBadgesLazyModule.ɵinj=h.vc({factory:function AddonBadgesLazyModule_Factory(e){return new(e||AddonBadgesLazyModule)},imports:[[d.m.forChild(C),i.a]]}),AddonBadgesLazyModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&h.kd(k,{declarations:[U,q],imports:[d.m,i.a]}))},eoiU:function(e,n,a){"use strict";a.d(n,"a",(function(){return CoreSwipeNavigationItemsManager}));var d=a("mrSG"),t=a("pHTc"),c=a("CtbY");class CoreSwipeNavigationItemsManager extends c.a{start(){return Object(d.a)(this,void 0,void 0,(function*(){this.updateSelectedItem()}))}navigateToNextItem(){return Object(d.a)(this,void 0,void 0,(function*(){yield this.navigateToItemBy(1,"forward")}))}navigateToPreviousItem(){return Object(d.a)(this,void 0,void 0,(function*(){yield this.navigateToItemBy(-1,"back")}))}hasNextItem(){return Object(d.a)(this,void 0,void 0,(function*(){return!!(yield this.getItemBy(1))}))}hasPreviousItem(){return Object(d.a)(this,void 0,void 0,(function*(){return!!(yield this.getItemBy(-1))}))}getCurrentPageRoute(){return t.a.getCurrentRoute()}getSelectedItemPathFromRoute(e){const n=[];for(;e&&(n.push(...e.url),e.firstChild);)e=e.firstChild;return n.map((e=>e.path)).join("/").replace(/\/+/,"/").trim()||null}navigateToItemBy(e,n){return Object(d.a)(this,void 0,void 0,(function*(){const a=yield this.getItemBy(e);a&&(yield this.navigateToItem(a,{animationDirection:n,replace:!0}))}))}getItemBy(e){var n;return Object(d.a)(this,void 0,void 0,(function*(){const a=this.getSource().getItems(),d=null!==(n=this.selectedItem&&(null==a?void 0:a.indexOf(this.selectedItem)))&&void 0!==n?n:-1;if(-1===d||null===a)return null;const t=e>0?1:-1;let c=d,i=0;for(;i!==e&&(c+=t,!(c<0||c>=a.length));)this.skipItemInSwipe(a[c])||(i+=t);return i===e?a[c]:this.getSource().isCompleted()?null:(yield this.getSource().load(),this.getItemBy(e))}))}skipItemInSwipe(e){return!1}}}}]);