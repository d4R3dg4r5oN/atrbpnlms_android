(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{Bg0Z:function(e,o,r){"use strict";r.r(o),r.d(o,"CoreCoursesLazyModule",(function(){return a}));var t=r("fXoL"),u=r("tyNb"),s=r("wG2S"),d=r("lzQd");function buildRoutes(e){return[{path:"my",data:{mainMenuTabRoot:d.b.PAGE_NAME},loadChildren:()=>Promise.all([r.e(1),r.e(2),r.e(0),r.e(99)]).then(r.bind(null,"g77/")).then((e=>e.CoreCoursesMyCoursesPageModule))},{path:"categories",redirectTo:"categories/root",pathMatch:"full"},{path:"categories/:id",loadChildren:()=>r.e(96).then(r.bind(null,"1mzu")).then((e=>e.CoreCoursesCategoriesPageModule))},{path:"list",loadChildren:()=>Promise.all([r.e(1),r.e(2),r.e(98)]).then(r.bind(null,"7rPB")).then((e=>e.CoreCoursesListPageModule))},...Object(s.b)(e,{redirectTo:"my",pathMatch:"full"})]}let a=(()=>{class CoreCoursesLazyModule{}return CoreCoursesLazyModule.ɵmod=t.wc({type:CoreCoursesLazyModule}),CoreCoursesLazyModule.ɵinj=t.vc({factory:function CoreCoursesLazyModule_Factory(e){return new(e||CoreCoursesLazyModule)},providers:[{provide:u.g,multi:!0,deps:[t.x],useFactory:buildRoutes}],imports:[u.m]}),CoreCoursesLazyModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&t.kd(a,{exports:[u.m]}))}}]);