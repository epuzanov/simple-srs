(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{otIc:function(l,n,t){"use strict";t.r(n);var e=t("CcnG"),u=function(){return function(){}}(),o=t("t68o"),a=t("NcP4"),c=t("BHnd"),s=t("y4qS"),i=t("Mr+X"),r=t("SMsm"),b=t("Ip0R"),d=function(){function l(l){this.elementRef=l,this.maxLength=200,this.hideToggle=!0,this.isCollapsed=!0}return l.prototype.ngOnInit=function(){this.determineView()},l.prototype.toggleView=function(){this.isCollapsed=!this.isCollapsed,this.determineView()},l.prototype.determineView=function(){if(!this.text||this.text.length<=this.maxLength)return this.currentText=this.text.replace(/(?:\r\n|\r|\n)/g,"<br/>"),this.isCollapsed=!1,void(this.hideToggle=!0);this.hideToggle=!1,!0===this.isCollapsed?(this.currentText=this.text.substring(0,this.maxLength)+"...",this.currentText=this.currentText.replace(/(?:\r\n|\r|\n)/g,"<br/>")):!1===this.isCollapsed&&(this.currentText=this.currentText=this.text.replace(/(?:\r\n|\r|\n)/g,"<br/>"))},l}(),m=e.rb({encapsulation:0,styles:[[".toggle[_ngcontent-%COMP%]{display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}"]],data:{}});function p(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,3,"a",[["class","blue-font toggle"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.toggleView()&&e),e}),null,null)),(l()(),e.Nb(1,null,["Show "," "])),(l()(),e.tb(2,0,null,null,1,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,i.b,i.a)),e.sb(3,9158656,null,0,r.b,[e.k,r.d,[8,null],[2,r.a],[2,e.m]],{svgIcon:[0,"svgIcon"]},null)],(function(l,n){l(n,3,0,e.xb(1,"",n.component.isCollapsed?"drop_down":"drop_up",""))}),(function(l,n){l(n,1,0,n.component.isCollapsed?"all ":"less"),l(n,2,0,e.Fb(n,3).inline,"primary"!==e.Fb(n,3).color&&"accent"!==e.Fb(n,3).color&&"warn"!==e.Fb(n,3).color)}))}function h(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),e.jb(16777216,null,null,1,null,p)),e.sb(2,16384,null,0,b.n,[e.P,e.M],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,!n.component.hideToggle)}),(function(l,n){l(n,0,0,n.component.currentText)}))}var f=t("o3x0"),g=t("nahG"),C=t("Pp4P"),D=t("CQqH"),v=t("pIm3"),x=t("Fzqc"),y=t("dWZg"),M=t("mrSG"),P=t("EfhQ"),w=t("K9Ia"),k=function(l){function n(n,t,e){var u=l.call(this)||this;return u.dialog=n,u.gaService=t,u.overlayContainerService=e,u.notes=[],u.displayedColumns=["note","references"],u.substanceUpdated=new w.a,u}return M.a(n,l),n.prototype.ngOnInit=function(){var l=this;this.substanceUpdated.subscribe((function(n){l.substance=n,null!=l.substance&&null!=l.substance.notes&&l.substance.notes.length&&(l.notes=l.substance.notes),l.countUpdate.emit(l.notes.length)})),this.overlayContainer=this.overlayContainerService.getContainerElement()},n.prototype.openModal=function(l){var n=this;this.gaService.sendEvent(this.analyticsEventCategory,"button","references view");var t=this.dialog.open(l,{minWidth:"40%",maxWidth:"90%"});this.overlayContainer.style.zIndex="1002",t.afterClosed().subscribe((function(l){n.overlayContainer.style.zIndex=null}))},n}(P.a),_=t("HECD"),j=t("eDkP"),L=e.rb({encapsulation:0,styles:[["table.mat-table[_ngcontent-%COMP%]{width:100%}td.mat-cell[_ngcontent-%COMP%]:not(:last-child), td.mat-footer-cell[_ngcontent-%COMP%]:not(:last-child), th.mat-header-cell[_ngcontent-%COMP%]:not(:last-child){padding-right:10px}td.mat-cell[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%], th.mat-header-cell[_ngcontent-%COMP%]{padding-top:10px;padding-bottom:10px}.no-bottom-border[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td.mat-cell[_ngcontent-%COMP%]{border-bottom:none}"]],data:{}});function O(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),e.sb(1,16384,null,0,c.e,[s.d,e.k],null,null),(l()(),e.Nb(-1,null,[" Note "]))],null,null)}function T(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,3,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),e.sb(1,16384,null,0,c.a,[s.d,e.k],null,null),(l()(),e.tb(2,0,null,null,1,"read-more",[],null,null,null,h,m)),e.sb(3,114688,null,0,d,[e.k],{text:[0,"text"],maxLength:[1,"maxLength"]},null)],(function(l,n){l(n,3,0,n.context.$implicit.note,100)}),null)}function R(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),e.sb(1,16384,null,0,c.e,[s.d,e.k],null,null),(l()(),e.Nb(-1,null,[" References "]))],null,null)}function F(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,2,"h2",[["class","mat-dialog-title"],["mat-dialog-title",""]],[[8,"id",0]],null,null,null,null)),e.sb(1,81920,null,0,f.m,[[2,f.l],e.k,f.e],null,null),(l()(),e.Nb(-1,null,["References"])),(l()(),e.tb(3,0,null,null,3,"div",[["class","mat-dialog-content"],["mat-dialog-content",""]],null,null,null,null,null)),e.sb(4,16384,null,0,f.j,[],null,null),(l()(),e.tb(5,0,null,null,1,"app-references-manager",[],null,null,null,g.b,g.a)),e.sb(6,114688,null,0,C.a,[D.a],{substance:[0,"substance"],references:[1,"references"]},null),(l()(),e.tb(7,0,null,null,5,"div",[["class","mat-dialog-actions"],["mat-dialog-actions",""]],null,null,null,null,null)),e.sb(8,16384,null,0,f.f,[],null,null),(l()(),e.tb(9,0,null,null,0,"span",[["class","middle-fill"]],null,null,null,null,null)),(l()(),e.tb(10,0,null,null,2,"button",[["class","mat-raised-button mat-primary"],["mat-dialog-close",""]],[[1,"aria-label",0],[1,"type",0]],[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e.Fb(l,11).dialogRef.close(e.Fb(l,11).dialogResult)&&u),u}),null,null)),e.sb(11,606208,null,0,f.g,[[2,f.l],e.k,f.e],{dialogResult:[0,"dialogResult"]},null),(l()(),e.Nb(-1,null,["Close"]))],(function(l,n){var t=n.component;l(n,1,0),l(n,6,0,t.substance,n.parent.context.$implicit.references),l(n,11,0,"")}),(function(l,n){l(n,0,0,e.Fb(n,1).id),l(n,10,0,e.Fb(n,11).ariaLabel||null,e.Fb(n,11).type)}))}function K(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,4,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),e.sb(1,16384,null,0,c.a,[s.d,e.k],null,null),(l()(),e.tb(2,0,null,null,1,"button",[["class","mat-raised-button mat-primary dialog-close"]],[[8,"disabled",0]],[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.openModal(e.Fb(l,4))&&u),u}),null,null)),(l()(),e.Nb(-1,null,["View"])),(l()(),e.jb(0,[["refTemplate",2]],null,0,null,F))],null,(function(l,n){l(n,2,0,n.context.$implicit.references.length<=0)}))}function S(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,2,"tr",[["class","mat-header-row"],["mat-header-row",""],["role","row"]],null,null,null,v.d,v.a)),e.Kb(6144,null,s.k,null,[c.g]),e.sb(2,49152,null,0,c.g,[],null,null)],null,null)}function I(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,2,"tr",[["class","mat-row"],["mat-row",""],["role","row"]],null,null,null,v.e,v.b)),e.Kb(6144,null,s.m,null,[c.i]),e.sb(2,49152,null,0,c.i,[],null,null)],null,null)}function E(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,39,"div",[["class","responsive"]],null,null,null,null,null)),(l()(),e.tb(1,0,null,null,38,"table",[["class","no-bottom-border mat-table"],["mat-table",""]],null,null,null,v.f,v.c)),e.Kb(6144,null,s.o,null,[c.k]),e.sb(3,2342912,null,4,c.k,[e.s,e.h,e.k,[8,null],[2,x.b],b.d,y.a],{dataSource:[0,"dataSource"]},null),e.Lb(603979776,1,{_contentColumnDefs:1}),e.Lb(603979776,2,{_contentRowDefs:1}),e.Lb(603979776,3,{_contentHeaderRowDefs:1}),e.Lb(603979776,4,{_contentFooterRowDefs:1}),(l()(),e.tb(8,0,null,null,12,null,null,null,null,null,null,null)),e.Kb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[c.c]),e.sb(10,16384,null,3,c.c,[],{name:[0,"name"]},null),e.Lb(603979776,5,{cell:0}),e.Lb(603979776,6,{headerCell:0}),e.Lb(603979776,7,{footerCell:0}),e.Kb(2048,[[1,4]],s.d,null,[c.c]),(l()(),e.jb(0,null,null,2,null,O)),e.sb(16,16384,null,0,c.f,[e.M],null,null),e.Kb(2048,[[6,4]],s.j,null,[c.f]),(l()(),e.jb(0,null,null,2,null,T)),e.sb(19,16384,null,0,c.b,[e.M],null,null),e.Kb(2048,[[5,4]],s.b,null,[c.b]),(l()(),e.tb(21,0,null,null,12,null,null,null,null,null,null,null)),e.Kb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[c.c]),e.sb(23,16384,null,3,c.c,[],{name:[0,"name"]},null),e.Lb(603979776,8,{cell:0}),e.Lb(603979776,9,{headerCell:0}),e.Lb(603979776,10,{footerCell:0}),e.Kb(2048,[[1,4]],s.d,null,[c.c]),(l()(),e.jb(0,null,null,2,null,R)),e.sb(29,16384,null,0,c.f,[e.M],null,null),e.Kb(2048,[[9,4]],s.j,null,[c.f]),(l()(),e.jb(0,null,null,2,null,K)),e.sb(32,16384,null,0,c.b,[e.M],null,null),e.Kb(2048,[[8,4]],s.b,null,[c.b]),(l()(),e.jb(0,null,null,2,null,S)),e.sb(35,540672,null,0,c.h,[e.M,e.s],{columns:[0,"columns"]},null),e.Kb(2048,[[3,4]],s.l,null,[c.h]),(l()(),e.jb(0,null,null,2,null,I)),e.sb(38,540672,null,0,c.j,[e.M,e.s],{columns:[0,"columns"]},null),e.Kb(2048,[[2,4]],s.n,null,[c.j])],(function(l,n){var t=n.component;l(n,3,0,t.notes),l(n,10,0,"note"),l(n,23,0,"references"),l(n,35,0,t.displayedColumns),l(n,38,0,t.displayedColumns)}),null)}function N(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,1,"app-substance-notes",[],null,null,null,E,L)),e.sb(1,114688,null,0,k,[f.e,_.a,j.e],null,null)],(function(l,n){l(n,1,0)}),null)}var H=e.pb("app-substance-notes",k,N,{},{countUpdate:"countUpdate"},[]),U=t("M2Lx"),A=t("v9Dh"),V=t("ZYjt"),q=t("Wf4p"),z=t("EtvR"),W=t("4c35"),G=t("qAlS"),Q=t("lLAP"),Z=t("3fDy"),$=t("ZYCi"),J=t("6jyQ");t.d(n,"SubstanceNotesModuleNgFactory",(function(){return Y}));var Y=e.qb(u,[],(function(l){return e.Cb([e.Db(512,e.j,e.bb,[[8,[o.a,a.a,H]],[3,e.j],e.x]),e.Db(4608,b.p,b.o,[e.u,[2,b.I]]),e.Db(4608,j.c,j.c,[j.i,j.e,e.j,j.h,j.f,e.r,e.z,b.d,x.b,[2,b.j]]),e.Db(5120,j.j,j.k,[j.c]),e.Db(5120,f.c,f.d,[j.c]),e.Db(135680,f.e,f.e,[j.c,e.r,[2,b.j],[2,f.b],f.c,[3,f.e],j.e]),e.Db(4608,U.c,U.c,[]),e.Db(5120,A.b,A.c,[j.c]),e.Db(4608,V.e,q.e,[[2,q.i],[2,q.n]]),e.Db(1073742336,b.c,b.c,[]),e.Db(1073742336,z.a,z.a,[]),e.Db(1073742336,s.p,s.p,[]),e.Db(1073742336,x.a,x.a,[]),e.Db(1073742336,q.n,q.n,[[2,q.f],[2,V.f]]),e.Db(1073742336,c.m,c.m,[]),e.Db(1073742336,W.g,W.g,[]),e.Db(1073742336,y.b,y.b,[]),e.Db(1073742336,G.c,G.c,[]),e.Db(1073742336,j.g,j.g,[]),e.Db(1073742336,f.k,f.k,[]),e.Db(1073742336,r.c,r.c,[]),e.Db(1073742336,U.d,U.d,[]),e.Db(1073742336,Q.a,Q.a,[]),e.Db(1073742336,A.e,A.e,[]),e.Db(1073742336,Z.a,Z.a,[]),e.Db(1073742336,u,u,[]),e.Db(1024,$.k,(function(){return[[]]}),[]),e.Db(256,J.a,k,[])])}))}}]);
//# sourceMappingURL=59.61e96d0e551281bb526d.js.map