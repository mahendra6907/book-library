(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+4D9":function(t,e,o){"use strict";o.r(e),o.d(e,"BookLibraryModule",(function(){return O}));var b=o("ofXK"),n=o("3Pt+"),r=o("tyNb"),c=o("tk/3"),a=o("fXoL"),i=o("ej43");const s=function(){return["/book-library/users"]};function l(t,e){1&t&&(a.Mb(0,"li",7),a.Mb(1,"a",8),a.gc(2,"Users"),a.Lb(),a.Lb()),2&t&&a.Xb("routerLink",a.Yb(1,s))}const d=function(){return["/book-library/home"]},u=function(){return["/book-library/books"]};let g=(()=>{class t{constructor(t,e){this.router=t,this.authenticationService=e}ngOnInit(){this.loggedUser=this.authenticationService.getLoggedUser()}logOutHandler(){this.authenticationService.clearLoggedUserInformation(),this.router.navigate(["auth","login"])}}return t.\u0275fac=function(e){return new(e||t)(a.Jb(r.b),a.Jb(i.a))},t.\u0275cmp=a.Db({type:t,selectors:[["book-library-cmp"]],decls:27,vars:5,consts:[[1,"d-flex","flex-column","h-100"],[1,"navbar","navbar-expand-md","navbar-dark","fixed-top","bg-dark"],["href","#",1,"navbar-brand"],["type","button","data-toggle","collapse","data-target","#navbarCollapse","aria-controls","navbarCollapse","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarCollapse",1,"collapse","navbar-collapse"],[1,"navbar-nav","mr-auto"],["routerLinkActive","active",1,"nav-item",3,"routerLink"],[1,"nav-link"],[1,"sr-only"],["class","nav-item","routerLinkActive","active",3,"routerLink",4,"ngIf"],[1,"form-inline","mt-2","mt-md-0"],[1,"btn","btn-secondary","my-2","my-sm-0",3,"click"],["role","main",1,"flex-shrink-0"],[1,"container"],[1,"footer","mt-auto","py-3"],[1,"text-muted"]],template:function(t,e){1&t&&(a.Mb(0,"div",0),a.Mb(1,"header"),a.Mb(2,"nav",1),a.Mb(3,"a",2),a.gc(4,"Book Library"),a.Lb(),a.Mb(5,"button",3),a.Kb(6,"span",4),a.Lb(),a.Mb(7,"div",5),a.Mb(8,"ul",6),a.Mb(9,"li",7),a.Mb(10,"a",8),a.gc(11,"Home "),a.Kb(12,"span",9),a.Lb(),a.Lb(),a.Mb(13,"li",7),a.Mb(14,"a",8),a.gc(15,"Books"),a.Lb(),a.Lb(),a.fc(16,l,3,2,"li",10),a.Lb(),a.Mb(17,"form",11),a.Mb(18,"button",12),a.Ub("click",(function(){return e.logOutHandler()})),a.gc(19,"Log Out"),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Mb(20,"main",13),a.Mb(21,"div",14),a.Kb(22,"router-outlet"),a.Lb(),a.Lb(),a.Mb(23,"footer",15),a.Mb(24,"div",14),a.Mb(25,"span",16),a.gc(26,"\xa9 2020 Book Library All Rights Reserved"),a.Lb(),a.Lb(),a.Lb(),a.Lb()),2&t&&(a.zb(9),a.Xb("routerLink",a.Yb(3,d)),a.zb(4),a.Xb("routerLink",a.Yb(4,u)),a.zb(3),a.Xb("ngIf","superAdmin"==(null==e.loggedUser?null:e.loggedUser.role)||"userAdmin"==(null==e.loggedUser?null:e.loggedUser.role)))},directives:[r.d,r.c,b.i,n.h,n.d,n.e,r.g],styles:["main[_ngcontent-%COMP%] > .container[_ngcontent-%COMP%]{margin-top:50px;padding:60px 15px 0}.footer[_ngcontent-%COMP%]{background-color:#f5f5f5;position:fixed;bottom:0;width:100%;text-align:center}.footer[_ngcontent-%COMP%] > .container[_ngcontent-%COMP%]{padding-right:15px;padding-left:15px}.navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer;outline:0}"]}),t})(),L=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Db({type:t,selectors:[["home-cmp"]],decls:3,vars:0,consts:[[1,"starter-template"]],template:function(t,e){1&t&&(a.Mb(0,"div",0),a.Mb(1,"h1"),a.gc(2,"Welcome to the Book Library Application"),a.Lb(),a.Lb())},styles:[".starter-template[_ngcontent-%COMP%]{padding:3rem 1.5rem;text-align:center}"]}),t})();var h=o("+9od");function p(t,e){1&t&&(a.Mb(0,"button",8),a.gc(1,"Delete"),a.Lb())}const k=function(t){return["/book-library/books",t]};let M=(()=>{class t{constructor(t){this.authenticationService=t}ngOnInit(){this.loggedUser=this.authenticationService.getLoggedUser(),console.log(this.loggedUser)}}return t.\u0275fac=function(e){return new(e||t)(a.Jb(i.a))},t.\u0275cmp=a.Db({type:t,selectors:[["book-cmp"]],inputs:{book:["data","book"]},decls:13,vars:8,consts:[[1,"card"],[1,"card-body"],[1,"card-title"],[1,"card-subtitle","mb-2","text-muted"],[1,"card-text"],[1,"card-link",3,"routerLink"],["target","_blank",1,"card-link",3,"href"],["type","button","class","btn btn-sm btn-danger ml-2",4,"ngIf"],["type","button",1,"btn","btn-sm","btn-danger","ml-2"]],template:function(t,e){1&t&&(a.Mb(0,"div",0),a.Mb(1,"div",1),a.Mb(2,"h5",2),a.gc(3),a.Lb(),a.Mb(4,"h6",3),a.gc(5),a.Lb(),a.Mb(6,"p",4),a.gc(7),a.Lb(),a.Mb(8,"a",5),a.gc(9,"Details"),a.Lb(),a.Mb(10,"a",6),a.gc(11,"Buy Now"),a.Lb(),a.fc(12,p,2,0,"button",7),a.Lb(),a.Lb()),2&t&&(a.zb(3),a.hc(null==e.book?null:e.book.title),a.zb(2),a.hc(null==e.book?null:e.book.subtitle),a.zb(2),a.hc(null==e.book?null:e.book.description),a.zb(1),a.Xb("routerLink",a.Zb(6,k,null==e.book?null:e.book.id)),a.zb(2),a.Xb("href",null==e.book?null:e.book.website,a.dc),a.zb(2),a.Xb("ngIf","superAdmin"==(null==e.loggedUser?null:e.loggedUser.role)||"libraryAdmin"==(null==e.loggedUser?null:e.loggedUser.role)))},directives:[r.e,b.i],styles:[""]}),t})();function m(t,e){if(1&t&&(a.Mb(0,"div",2),a.Kb(1,"book-cmp",3),a.Lb()),2&t){const t=e.$implicit;a.zb(1),a.Xb("data",t)}}let f=(()=>{class t{constructor(t){this.bookService=t}ngOnInit(){this.loadBookData()}loadBookData(){this.bookService.getBookList().subscribe(t=>{let e=t.data;this.bookService.setBookList(e),this.bookList=e},t=>{console.log(t)})}}return t.\u0275fac=function(e){return new(e||t)(a.Jb(h.a))},t.\u0275cmp=a.Db({type:t,selectors:[["books-cmp"]],decls:2,vars:1,consts:[[1,"row","row-cols-1","row-cols-md-2"],["class","col mb-4",4,"ngFor","ngForOf"],[1,"col","mb-4"],[3,"data"]],template:function(t,e){1&t&&(a.Mb(0,"div",0),a.fc(1,m,2,1,"div",1),a.Lb()),2&t&&(a.zb(1),a.Xb("ngForOf",e.bookList))},directives:[b.h,M],styles:[""]}),t})(),v=(()=>{class t{constructor(t,e,o){this.activateRoute=t,this.router=e,this.bookService=o,this.activateRoute.params.subscribe(t=>{this.selectedBookId=t.id})}ngOnInit(){this.selectedBookId?this.getSelectedBookDetails():this.router.navigate(["/book-library/books"])}getSelectedBookDetails(){let t=this.bookService.retrieveSelectedBookInfo(this.selectedBookId);t?this.selectedBookData=t:this.router.navigate(["/book-library/books"])}backClickHandler(){this.router.navigate(["/book-library/books"])}}return t.\u0275fac=function(e){return new(e||t)(a.Jb(r.a),a.Jb(r.b),a.Jb(h.a))},t.\u0275cmp=a.Db({type:t,selectors:[["book-details-cmp"]],decls:44,vars:8,consts:[[1,"table","table-borderless"],["type","button",1,"btn","btn-dark","mt-2",3,"click"]],template:function(t,e){1&t&&(a.Mb(0,"table",0),a.Mb(1,"tbody"),a.Mb(2,"tr"),a.Mb(3,"td"),a.gc(4,"Title"),a.Lb(),a.Mb(5,"td"),a.gc(6),a.Lb(),a.Lb(),a.Mb(7,"tr"),a.Mb(8,"td"),a.gc(9,"Sub Title"),a.Lb(),a.Mb(10,"td"),a.gc(11),a.Lb(),a.Lb(),a.Mb(12,"tr"),a.Mb(13,"td"),a.gc(14,"Description"),a.Lb(),a.Mb(15,"td"),a.gc(16),a.Lb(),a.Lb(),a.Mb(17,"tr"),a.Mb(18,"td"),a.gc(19,"Author"),a.Lb(),a.Mb(20,"td"),a.gc(21),a.Lb(),a.Lb(),a.Mb(22,"tr"),a.Mb(23,"td"),a.gc(24,"Published"),a.Lb(),a.Mb(25,"td"),a.gc(26),a.Lb(),a.Lb(),a.Mb(27,"tr"),a.Mb(28,"td"),a.gc(29,"Publisher"),a.Lb(),a.Mb(30,"td"),a.gc(31),a.Lb(),a.Lb(),a.Mb(32,"tr"),a.Mb(33,"td"),a.gc(34,"Total Pages"),a.Lb(),a.Mb(35,"td"),a.gc(36),a.Lb(),a.Lb(),a.Mb(37,"tr"),a.Mb(38,"td"),a.gc(39,"Visit Link"),a.Lb(),a.Mb(40,"td"),a.gc(41),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Mb(42,"button",1),a.Ub("click",(function(){return e.backClickHandler()})),a.gc(43,"Back To List"),a.Lb()),2&t&&(a.zb(6),a.hc(e.selectedBookData.title),a.zb(5),a.hc(e.selectedBookData.subtitle),a.zb(5),a.hc(e.selectedBookData.description),a.zb(5),a.hc(e.selectedBookData.author),a.zb(5),a.hc(e.selectedBookData.published),a.zb(5),a.hc(e.selectedBookData.publisher),a.zb(5),a.hc(e.selectedBookData.pages),a.zb(5),a.hc(e.selectedBookData.website))},styles:[""]}),t})();var y=o("qfBg");function w(t,e){1&t&&(a.Mb(0,"span"),a.gc(1,"Super Admin"),a.Lb())}function z(t,e){1&t&&(a.Mb(0,"span"),a.gc(1,"Library Admin"),a.Lb())}function B(t,e){1&t&&(a.Mb(0,"span"),a.gc(1,"User Admin"),a.Lb())}function D(t,e){1&t&&(a.Mb(0,"span"),a.gc(1,"Normal User"),a.Lb())}function S(t,e){if(1&t&&(a.Mb(0,"tr"),a.Mb(1,"th",4),a.gc(2),a.Lb(),a.Mb(3,"td"),a.gc(4),a.Lb(),a.Mb(5,"td"),a.gc(6),a.Lb(),a.Mb(7,"td"),a.gc(8),a.Lb(),a.Mb(9,"td",5),a.fc(10,w,2,0,"span",6),a.fc(11,z,2,0,"span",6),a.fc(12,B,2,0,"span",6),a.fc(13,D,2,0,"span",7),a.Lb(),a.Lb()),2&t){const t=e.$implicit,o=e.index;a.zb(2),a.hc(o+1),a.zb(2),a.hc(t.userName),a.zb(2),a.hc(t.firstName),a.zb(2),a.hc(t.lastName),a.zb(1),a.Xb("ngSwitch",t.role),a.zb(1),a.Xb("ngSwitchCase","superAdmin"),a.zb(1),a.Xb("ngSwitchCase","libraryAdmin"),a.zb(1),a.Xb("ngSwitchCase","userAdmin")}}const U=[{path:"",component:g,children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:L},{path:"books",component:f},{path:"books/:id",component:v},{path:"users",component:(()=>{class t{constructor(t){this.userService=t}ngOnInit(){this.loadUserData()}loadUserData(){this.userService.getUserInfo().subscribe(t=>{this.userList=t.data},t=>{console.log(t)})}}return t.\u0275fac=function(e){return new(e||t)(a.Jb(y.a))},t.\u0275cmp=a.Db({type:t,selectors:[["users-cmp"]],decls:15,vars:1,consts:[[1,"table"],[1,"thead-dark"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"]],template:function(t,e){1&t&&(a.Mb(0,"table",0),a.Mb(1,"thead",1),a.Mb(2,"tr"),a.Mb(3,"th",2),a.gc(4,"#"),a.Lb(),a.Mb(5,"th",2),a.gc(6,"User Name"),a.Lb(),a.Mb(7,"th",2),a.gc(8,"First Name"),a.Lb(),a.Mb(9,"th",2),a.gc(10,"Last Name"),a.Lb(),a.Mb(11,"th",2),a.gc(12,"Role"),a.Lb(),a.Lb(),a.Lb(),a.Mb(13,"tbody"),a.fc(14,S,14,8,"tr",3),a.Lb(),a.Lb()),2&t&&(a.zb(14),a.Xb("ngForOf",e.userList))},directives:[b.h,b.j,b.k,b.l],styles:[""]}),t})()}]}];let O=(()=>{class t{}return t.\u0275mod=a.Hb({type:t}),t.\u0275inj=a.Gb({factory:function(e){return new(e||t)},providers:[],imports:[[b.b,n.b,c.b,r.f.forChild(U)]]}),t})()}}]);