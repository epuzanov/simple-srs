(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{EfhQ:function(l,n,u){"use strict";u.d(n,"a",(function(){return t}));var e=u("CcnG"),t=function(){return function(){this.countUpdate=new e.n}}()},Ur2V:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),a=u("NcP4"),o=u("m46K"),c=u("BHnd"),r=u("y4qS"),b=u("OkvK"),i=u("Ip0R"),s=u("Mr+X"),d=u("SMsm"),f=u("v9Dh"),m=u("eDkP"),h=u("qAlS"),p=u("dWZg"),g=u("lLAP"),_=u("Fzqc"),F=u("ZYjt"),D=u("pIm3"),C=u("dJrM"),v=u("seP3"),M=u("Wf4p"),P=u("wFw1"),k=u("gIcY"),w=u("b716"),L=u("/VYK"),S=u("b1+6"),I=u("4epT"),y=u("mrSG"),j=u("dwHa"),E=u("K9Ia"),O=function(l){function n(n,u){var e=l.call(this,n)||this;return e.gaService=n,e.utilsService=u,e.references=[],e.displayedColumns=["citation","type","tags","files","access"],e.substanceUpdated=new E.a,e.pageSize=10,e}return y.a(n,l),n.prototype.ngOnInit=function(){var l=this;this.substanceUpdated.subscribe((function(n){l.substance=n,null!=l.substance&&null!=l.substance.references&&(l.references=l.substance.references,l.filtered=l.substance.references,l.pageChange(),l.searchControl.valueChanges.subscribe((function(n){l.filterList(n,l.references,l.analyticsEventCategory)}),(function(l){console.log(l)}))),l.countUpdate.emit(l.references.length)}))},n.prototype.sortData=function(l){var n=this,u=this.references.slice();if(!l.active||""===l.direction)return this.filtered=u,void this.pageChange();this.filtered=u.sort((function(u,e){return n.utilsService.compare(u[l.active]?u[l.active].toUpperCase:"",e[l.active]?e[l.active].toUpperCase:"","asc"===l.direction)})),this.pageChange()},n}(j.a),K=u("HECD"),A=u("6E2U"),x=e.rb({encapsulation:0,styles:[["table.mat-table[_ngcontent-%COMP%]{width:100%}td.mat-cell[_ngcontent-%COMP%]:not(:last-child), td.mat-footer-cell[_ngcontent-%COMP%]:not(:last-child), th.mat-header-cell[_ngcontent-%COMP%]:not(:last-child){padding-right:10px}td.mat-cell[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%], th.mat-header-cell[_ngcontent-%COMP%]{padding-top:10px;padding-bottom:10px}.no-bottom-border[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td.mat-cell[_ngcontent-%COMP%]{border-bottom:none}.search[_ngcontent-%COMP%]{width:400px;max-width:100%}"]],data:{}});function T(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,3,"th",[["class","mat-header-cell"],["mat-header-cell",""],["mat-sort-header",""],["role","columnheader"]],[[1,"aria-sort",0],[2,"mat-sort-header-disabled",null]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Fb(l,2)._handleClick()&&t),"mouseenter"===n&&(t=!1!==e.Fb(l,2)._setIndicatorHintVisible(!0)&&t),"mouseleave"===n&&(t=!1!==e.Fb(l,2)._setIndicatorHintVisible(!1)&&t),t}),o.b,o.a)),e.sb(1,16384,null,0,c.e,[r.d,e.k],null,null),e.sb(2,245760,null,0,b.c,[b.d,e.h,[2,b.b],[2,"MAT_SORT_HEADER_COLUMN_DEF"]],{id:[0,"id"]},null),(l()(),e.Nb(-1,0,[" Citation "]))],(function(l,n){l(n,2,0,"")}),(function(l,n){l(n,0,0,e.Fb(n,2)._getAriaSortAttribute(),e.Fb(n,2)._isDisabled())}))}function N(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,1,"a",[["target","_blank"]],[[8,"href",4]],null,null,null,null)),(l()(),e.Nb(1,null,[""," "]))],null,(function(l,n){l(n,0,0,n.parent.context.$implicit.url),l(n,1,0,n.parent.context.$implicit.citation)}))}function R(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Nb(1,null,[" "," "]))],null,(function(l,n){l(n,1,0,n.parent.context.$implicit.citation)}))}function H(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,5,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),e.sb(1,16384,null,0,c.a,[r.d,e.k],null,null),(l()(),e.jb(16777216,null,null,1,null,N)),e.sb(3,16384,null,0,i.n,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(l()(),e.jb(16777216,null,null,1,null,R)),e.sb(5,16384,null,0,i.n,[e.P,e.M],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,3,0,n.context.$implicit.url),l(n,5,0,!n.context.$implicit.url)}),null)}function U(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,3,"th",[["class","mat-header-cell"],["mat-header-cell",""],["mat-sort-header",""],["role","columnheader"]],[[1,"aria-sort",0],[2,"mat-sort-header-disabled",null]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Fb(l,2)._handleClick()&&t),"mouseenter"===n&&(t=!1!==e.Fb(l,2)._setIndicatorHintVisible(!0)&&t),"mouseleave"===n&&(t=!1!==e.Fb(l,2)._setIndicatorHintVisible(!1)&&t),t}),o.b,o.a)),e.sb(1,16384,null,0,c.e,[r.d,e.k],null,null),e.sb(2,245760,null,0,b.c,[b.d,e.h,[2,b.b],[2,"MAT_SORT_HEADER_COLUMN_DEF"]],{id:[0,"id"]},null),(l()(),e.Nb(-1,0,[" Type "]))],(function(l,n){l(n,2,0,"")}),(function(l,n){l(n,0,0,e.Fb(n,2)._getAriaSortAttribute(),e.Fb(n,2)._isDisabled())}))}function $(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),e.sb(1,16384,null,0,c.a,[r.d,e.k],null,null),(l()(),e.Nb(2,null,[" "," "]))],null,(function(l,n){l(n,2,0,n.context.$implicit.docType)}))}function V(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,3,"th",[["class","mat-header-cell"],["mat-header-cell",""],["mat-sort-header",""],["role","columnheader"]],[[1,"aria-sort",0],[2,"mat-sort-header-disabled",null]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Fb(l,2)._handleClick()&&t),"mouseenter"===n&&(t=!1!==e.Fb(l,2)._setIndicatorHintVisible(!0)&&t),"mouseleave"===n&&(t=!1!==e.Fb(l,2)._setIndicatorHintVisible(!1)&&t),t}),o.b,o.a)),e.sb(1,16384,null,0,c.e,[r.d,e.k],null,null),e.sb(2,245760,null,0,b.c,[b.d,e.h,[2,b.b],[2,"MAT_SORT_HEADER_COLUMN_DEF"]],{id:[0,"id"]},null),(l()(),e.Nb(-1,0,[" Tags "]))],(function(l,n){l(n,2,0,"")}),(function(l,n){l(n,0,0,e.Fb(n,2)._getAriaSortAttribute(),e.Fb(n,2)._isDisabled())}))}function z(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Nb(-1,null,[", "]))],null,null)}function q(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),e.Nb(1,null,["",""])),(l()(),e.jb(16777216,null,null,1,null,z)),e.sb(3,16384,null,0,i.n,[e.P,e.M],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,3,0,!n.context.last)}),(function(l,n){l(n,1,0,n.context.$implicit)}))}function G(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,3,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),e.sb(1,16384,null,0,c.a,[r.d,e.k],null,null),(l()(),e.jb(16777216,null,null,1,null,q)),e.sb(3,278528,null,0,i.m,[e.P,e.M,e.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,3,0,n.context.$implicit.tags)}),null)}function B(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,3,"th",[["class","mat-header-cell"],["mat-header-cell",""],["mat-sort-header",""],["role","columnheader"]],[[1,"aria-sort",0],[2,"mat-sort-header-disabled",null]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Fb(l,2)._handleClick()&&t),"mouseenter"===n&&(t=!1!==e.Fb(l,2)._setIndicatorHintVisible(!0)&&t),"mouseleave"===n&&(t=!1!==e.Fb(l,2)._setIndicatorHintVisible(!1)&&t),t}),o.b,o.a)),e.sb(1,16384,null,0,c.e,[r.d,e.k],null,null),e.sb(2,245760,null,0,b.c,[b.d,e.h,[2,b.b],[2,"MAT_SORT_HEADER_COLUMN_DEF"]],{id:[0,"id"]},null),(l()(),e.Nb(-1,0,[" File "]))],(function(l,n){l(n,2,0,"")}),(function(l,n){l(n,0,0,e.Fb(n,2)._getAriaSortAttribute(),e.Fb(n,2)._isDisabled())}))}function Y(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,2,"a",[],[[8,"href",4]],null,null,null,null)),(l()(),e.tb(1,0,null,null,1,"mat-icon",[["class","blue mat-icon notranslate"],["color","primary"],["role","img"],["svgIcon","cloud_download"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,s.b,s.a)),e.sb(2,9158656,null,0,d.b,[e.k,d.d,[8,null],[2,d.a],[2,e.m]],{color:[0,"color"],svgIcon:[1,"svgIcon"]},null)],(function(l,n){l(n,2,0,"primary","cloud_download")}),(function(l,n){l(n,0,0,n.parent.context.$implicit.uploadedFile),l(n,1,0,e.Fb(n,2).inline,"primary"!==e.Fb(n,2).color&&"accent"!==e.Fb(n,2).color&&"warn"!==e.Fb(n,2).color)}))}function J(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,3,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),e.sb(1,16384,null,0,c.a,[r.d,e.k],null,null),(l()(),e.jb(16777216,null,null,1,null,Y)),e.sb(3,16384,null,0,i.n,[e.P,e.M],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,3,0,n.context.$implicit.uploadedFile)}),null)}function Z(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,3,"th",[["class","mat-header-cell"],["mat-header-cell",""],["mat-sort-header",""],["role","columnheader"]],[[1,"aria-sort",0],[2,"mat-sort-header-disabled",null]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Fb(l,2)._handleClick()&&t),"mouseenter"===n&&(t=!1!==e.Fb(l,2)._setIndicatorHintVisible(!0)&&t),"mouseleave"===n&&(t=!1!==e.Fb(l,2)._setIndicatorHintVisible(!1)&&t),t}),o.b,o.a)),e.sb(1,16384,null,0,c.e,[r.d,e.k],null,null),e.sb(2,245760,null,0,b.c,[b.d,e.h,[2,b.b],[2,"MAT_SORT_HEADER_COLUMN_DEF"]],{id:[0,"id"]},null),(l()(),e.Nb(-1,0,[" Access "]))],(function(l,n){l(n,2,0,"")}),(function(l,n){l(n,0,0,e.Fb(n,2)._getAriaSortAttribute(),e.Fb(n,2)._isDisabled())}))}function Q(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,1,"mat-icon",[["class","icon-align blue-font mat-icon notranslate"],["role","img"],["svgIcon","lock"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,s.b,s.a)),e.sb(1,9158656,null,0,d.b,[e.k,d.d,[8,null],[2,d.a],[2,e.m]],{svgIcon:[0,"svgIcon"]},null)],(function(l,n){l(n,1,0,"lock")}),(function(l,n){l(n,0,0,e.Fb(n,1).inline,"primary"!==e.Fb(n,1).color&&"accent"!==e.Fb(n,1).color&&"warn"!==e.Fb(n,1).color)}))}function W(l){return e.Pb(0,[(l()(),e.tb(0,16777216,null,null,3,"span",[["matTooltip","Not Public"]],null,[[null,"longpress"],[null,"keydown"],[null,"touchend"]],(function(l,n,u){var t=!0;return"longpress"===n&&(t=!1!==e.Fb(l,1).show()&&t),"keydown"===n&&(t=!1!==e.Fb(l,1)._handleKeydown(u)&&t),"touchend"===n&&(t=!1!==e.Fb(l,1)._handleTouchend()&&t),t}),null,null)),e.sb(1,212992,null,0,f.d,[m.c,e.k,h.b,e.P,e.z,p.a,g.c,g.h,f.b,[2,_.b],[2,f.a],[2,F.f]],{message:[0,"message"]},null),(l()(),e.jb(16777216,null,null,1,null,Q)),e.sb(3,16384,null,0,i.n,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(l()(),e.jb(0,null,null,0))],(function(l,n){l(n,1,0,"Not Public"),l(n,3,0,n.parent.context.$implicit.access.length)}),null)}function X(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,1,"mat-icon",[["class","icon-align blue-font mat-icon notranslate"],["role","img"],["svgIcon","lock_open"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,s.b,s.a)),e.sb(1,9158656,null,0,d.b,[e.k,d.d,[8,null],[2,d.a],[2,e.m]],{svgIcon:[0,"svgIcon"]},null)],(function(l,n){l(n,1,0,"lock_open")}),(function(l,n){l(n,0,0,e.Fb(n,1).inline,"primary"!==e.Fb(n,1).color&&"accent"!==e.Fb(n,1).color&&"warn"!==e.Fb(n,1).color)}))}function ll(l){return e.Pb(0,[(l()(),e.tb(0,16777216,null,null,3,"span",[["matTooltip","Public"]],null,[[null,"longpress"],[null,"keydown"],[null,"touchend"]],(function(l,n,u){var t=!0;return"longpress"===n&&(t=!1!==e.Fb(l,1).show()&&t),"keydown"===n&&(t=!1!==e.Fb(l,1)._handleKeydown(u)&&t),"touchend"===n&&(t=!1!==e.Fb(l,1)._handleTouchend()&&t),t}),null,null)),e.sb(1,212992,null,0,f.d,[m.c,e.k,h.b,e.P,e.z,p.a,g.c,g.h,f.b,[2,_.b],[2,f.a],[2,F.f]],{message:[0,"message"]},null),(l()(),e.jb(16777216,null,null,1,null,X)),e.sb(3,16384,null,0,i.n,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(l()(),e.jb(0,null,null,0))],(function(l,n){l(n,1,0,"Public"),l(n,3,0,0===n.parent.context.$implicit.access.length)}),null)}function nl(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,5,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),e.sb(1,16384,null,0,c.a,[r.d,e.k],null,null),(l()(),e.jb(16777216,null,null,1,null,W)),e.sb(3,16384,null,0,i.n,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(l()(),e.jb(16777216,null,null,1,null,ll)),e.sb(5,16384,null,0,i.n,[e.P,e.M],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,3,0,n.context.$implicit.access.length),l(n,5,0,!n.context.$implicit.access.length)}),null)}function ul(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,2,"tr",[["class","mat-header-row"],["mat-header-row",""],["role","row"]],null,null,null,D.d,D.a)),e.Kb(6144,null,r.k,null,[c.g]),e.sb(2,49152,null,0,c.g,[],null,null)],null,null)}function el(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,2,"tr",[["class","mat-row"],["mat-row",""],["role","row"]],null,null,null,D.e,D.b)),e.Kb(6144,null,r.m,null,[c.i]),e.sb(2,49152,null,0,c.i,[],null,null)],null,null)}function tl(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,20,"div",[["class","flex-row"]],null,null,null,null,null)),(l()(),e.tb(1,0,null,null,0,"span",[["class","middle-fill"]],null,null,null,null,null)),(l()(),e.tb(2,0,null,null,18,"mat-form-field",[["class","search mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,C.b,C.a)),e.sb(3,7520256,null,9,v.c,[e.k,e.h,[2,M.j],[2,_.b],[2,v.a],p.a,e.z,[2,P.a]],{floatLabel:[0,"floatLabel"]},null),e.Lb(603979776,1,{_controlNonStatic:0}),e.Lb(335544320,2,{_controlStatic:0}),e.Lb(603979776,3,{_labelChildNonStatic:0}),e.Lb(335544320,4,{_labelChildStatic:0}),e.Lb(603979776,5,{_placeholderChild:0}),e.Lb(603979776,6,{_errorChildren:1}),e.Lb(603979776,7,{_hintChildren:1}),e.Lb(603979776,8,{_prefixChildren:1}),e.Lb(603979776,9,{_suffixChildren:1}),(l()(),e.tb(13,0,null,1,7,"input",[["class","mat-input-element mat-form-field-autofill-control"],["matInput",""],["placeholder","Search"]],[[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],(function(l,n,u){var t=!0;return"input"===n&&(t=!1!==e.Fb(l,14)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Fb(l,14).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Fb(l,14)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Fb(l,14)._compositionEnd(u.target.value)&&t),"blur"===n&&(t=!1!==e.Fb(l,18)._focusChanged(!1)&&t),"focus"===n&&(t=!1!==e.Fb(l,18)._focusChanged(!0)&&t),"input"===n&&(t=!1!==e.Fb(l,18)._onInput()&&t),t}),null,null)),e.sb(14,16384,null,0,k.d,[e.E,e.k,[2,k.a]],null,null),e.Kb(1024,null,k.m,(function(l){return[l]}),[k.d]),e.sb(16,540672,null,0,k.g,[[8,null],[8,null],[6,k.m],[2,k.z]],{form:[0,"form"]},null),e.Kb(2048,null,k.n,null,[k.g]),e.sb(18,999424,null,0,w.b,[e.k,p.a,[6,k.n],[2,k.q],[2,k.j],M.d,[8,null],L.a,e.z],{placeholder:[0,"placeholder"]},null),e.sb(19,16384,null,0,k.o,[[4,k.n]],null,null),e.Kb(2048,[[1,4],[2,4]],v.d,null,[w.b]),(l()(),e.tb(21,0,null,null,79,"div",[["class","responsive"]],null,null,null,null,null)),(l()(),e.tb(22,0,null,null,78,"table",[["class","mat-table"],["mat-table",""],["matSort",""]],null,[[null,"matSortChange"]],(function(l,n,u){var e=!0;return"matSortChange"===n&&(e=!1!==l.component.sortData(u)&&e),e}),D.f,D.c)),e.Kb(6144,null,r.o,null,[c.k]),e.sb(24,2342912,null,4,c.k,[e.s,e.h,e.k,[8,null],[2,_.b],i.d,p.a],{dataSource:[0,"dataSource"]},null),e.Lb(603979776,10,{_contentColumnDefs:1}),e.Lb(603979776,11,{_contentRowDefs:1}),e.Lb(603979776,12,{_contentHeaderRowDefs:1}),e.Lb(603979776,13,{_contentFooterRowDefs:1}),e.sb(29,737280,null,0,b.b,[],null,{sortChange:"matSortChange"}),(l()(),e.tb(30,0,null,null,12,null,null,null,null,null,null,null)),e.Kb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[c.c]),e.sb(32,16384,null,3,c.c,[],{name:[0,"name"]},null),e.Lb(603979776,14,{cell:0}),e.Lb(603979776,15,{headerCell:0}),e.Lb(603979776,16,{footerCell:0}),e.Kb(2048,[[10,4]],r.d,null,[c.c]),(l()(),e.jb(0,null,null,2,null,T)),e.sb(38,16384,null,0,c.f,[e.M],null,null),e.Kb(2048,[[15,4]],r.j,null,[c.f]),(l()(),e.jb(0,null,null,2,null,H)),e.sb(41,16384,null,0,c.b,[e.M],null,null),e.Kb(2048,[[14,4]],r.b,null,[c.b]),(l()(),e.tb(43,0,null,null,12,null,null,null,null,null,null,null)),e.Kb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[c.c]),e.sb(45,16384,null,3,c.c,[],{name:[0,"name"]},null),e.Lb(603979776,17,{cell:0}),e.Lb(603979776,18,{headerCell:0}),e.Lb(603979776,19,{footerCell:0}),e.Kb(2048,[[10,4]],r.d,null,[c.c]),(l()(),e.jb(0,null,null,2,null,U)),e.sb(51,16384,null,0,c.f,[e.M],null,null),e.Kb(2048,[[18,4]],r.j,null,[c.f]),(l()(),e.jb(0,null,null,2,null,$)),e.sb(54,16384,null,0,c.b,[e.M],null,null),e.Kb(2048,[[17,4]],r.b,null,[c.b]),(l()(),e.tb(56,0,null,null,12,null,null,null,null,null,null,null)),e.Kb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[c.c]),e.sb(58,16384,null,3,c.c,[],{name:[0,"name"]},null),e.Lb(603979776,20,{cell:0}),e.Lb(603979776,21,{headerCell:0}),e.Lb(603979776,22,{footerCell:0}),e.Kb(2048,[[10,4]],r.d,null,[c.c]),(l()(),e.jb(0,null,null,2,null,V)),e.sb(64,16384,null,0,c.f,[e.M],null,null),e.Kb(2048,[[21,4]],r.j,null,[c.f]),(l()(),e.jb(0,null,null,2,null,G)),e.sb(67,16384,null,0,c.b,[e.M],null,null),e.Kb(2048,[[20,4]],r.b,null,[c.b]),(l()(),e.tb(69,0,null,null,12,null,null,null,null,null,null,null)),e.Kb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[c.c]),e.sb(71,16384,null,3,c.c,[],{name:[0,"name"]},null),e.Lb(603979776,23,{cell:0}),e.Lb(603979776,24,{headerCell:0}),e.Lb(603979776,25,{footerCell:0}),e.Kb(2048,[[10,4]],r.d,null,[c.c]),(l()(),e.jb(0,null,null,2,null,B)),e.sb(77,16384,null,0,c.f,[e.M],null,null),e.Kb(2048,[[24,4]],r.j,null,[c.f]),(l()(),e.jb(0,null,null,2,null,J)),e.sb(80,16384,null,0,c.b,[e.M],null,null),e.Kb(2048,[[23,4]],r.b,null,[c.b]),(l()(),e.tb(82,0,null,null,12,null,null,null,null,null,null,null)),e.Kb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[c.c]),e.sb(84,16384,null,3,c.c,[],{name:[0,"name"]},null),e.Lb(603979776,26,{cell:0}),e.Lb(603979776,27,{headerCell:0}),e.Lb(603979776,28,{footerCell:0}),e.Kb(2048,[[10,4]],r.d,null,[c.c]),(l()(),e.jb(0,null,null,2,null,Z)),e.sb(90,16384,null,0,c.f,[e.M],null,null),e.Kb(2048,[[27,4]],r.j,null,[c.f]),(l()(),e.jb(0,null,null,2,null,nl)),e.sb(93,16384,null,0,c.b,[e.M],null,null),e.Kb(2048,[[26,4]],r.b,null,[c.b]),(l()(),e.jb(0,null,null,2,null,ul)),e.sb(96,540672,null,0,c.h,[e.M,e.s],{columns:[0,"columns"]},null),e.Kb(2048,[[12,4]],r.l,null,[c.h]),(l()(),e.jb(0,null,null,2,null,el)),e.sb(99,540672,null,0,c.j,[e.M,e.s],{columns:[0,"columns"]},null),e.Kb(2048,[[11,4]],r.n,null,[c.j]),(l()(),e.tb(101,0,null,null,2,"mat-paginator",[["class","mat-paginator"],["showFirstLastButtons","true"]],null,[[null,"page"]],(function(l,n,u){var e=!0,t=l.component;return"page"===n&&(e=!1!==t.pageChange(u,t.analyticsEventCategory)&&e),e}),S.b,S.a)),e.sb(102,245760,null,0,I.b,[I.c,e.h],{length:[0,"length"],pageSize:[1,"pageSize"],pageSizeOptions:[2,"pageSizeOptions"],showFirstLastButtons:[3,"showFirstLastButtons"]},{page:"page"}),e.Gb(103,4)],(function(l,n){var u=n.component;l(n,3,0,"never"),l(n,16,0,u.searchControl),l(n,18,0,"Search"),l(n,24,0,u.paged),l(n,29,0),l(n,32,0,"citation"),l(n,45,0,"type"),l(n,58,0,"tags"),l(n,71,0,"files"),l(n,84,0,"access"),l(n,96,0,u.displayedColumns),l(n,99,0,u.displayedColumns);var e=u.filtered&&u.filtered.length||0,t=l(n,103,0,5,10,25,100);l(n,102,0,e,10,t,"true")}),(function(l,n){l(n,2,1,["standard"==e.Fb(n,3).appearance,"fill"==e.Fb(n,3).appearance,"outline"==e.Fb(n,3).appearance,"legacy"==e.Fb(n,3).appearance,e.Fb(n,3)._control.errorState,e.Fb(n,3)._canLabelFloat,e.Fb(n,3)._shouldLabelFloat(),e.Fb(n,3)._hasFloatingLabel(),e.Fb(n,3)._hideControlPlaceholder(),e.Fb(n,3)._control.disabled,e.Fb(n,3)._control.autofilled,e.Fb(n,3)._control.focused,"accent"==e.Fb(n,3).color,"warn"==e.Fb(n,3).color,e.Fb(n,3)._shouldForward("untouched"),e.Fb(n,3)._shouldForward("touched"),e.Fb(n,3)._shouldForward("pristine"),e.Fb(n,3)._shouldForward("dirty"),e.Fb(n,3)._shouldForward("valid"),e.Fb(n,3)._shouldForward("invalid"),e.Fb(n,3)._shouldForward("pending"),!e.Fb(n,3)._animationsEnabled]),l(n,13,1,[e.Fb(n,18)._isServer,e.Fb(n,18).id,e.Fb(n,18).placeholder,e.Fb(n,18).disabled,e.Fb(n,18).required,e.Fb(n,18).readonly&&!e.Fb(n,18)._isNativeSelect||null,e.Fb(n,18)._ariaDescribedby||null,e.Fb(n,18).errorState,e.Fb(n,18).required.toString(),e.Fb(n,19).ngClassUntouched,e.Fb(n,19).ngClassTouched,e.Fb(n,19).ngClassPristine,e.Fb(n,19).ngClassDirty,e.Fb(n,19).ngClassValid,e.Fb(n,19).ngClassInvalid,e.Fb(n,19).ngClassPending])}))}function al(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,1,"app-substance-references",[],null,null,null,tl,x)),e.sb(1,114688,null,0,O,[K.a,A.a],null,null)],(function(l,n){l(n,1,0)}),null)}var ol=e.pb("app-substance-references",O,al,{},{countUpdate:"countUpdate"},[]),cl=u("M2Lx"),rl=u("uGex"),bl=u("EtvR"),il=u("UodH"),sl=u("4c35"),dl=u("ZYCi"),fl=u("6jyQ");u.d(n,"SubstanceReferencesModuleNgFactory",(function(){return ml}));var ml=e.qb(t,[],(function(l){return e.Cb([e.Db(512,e.j,e.bb,[[8,[a.a,ol]],[3,e.j],e.x]),e.Db(4608,i.p,i.o,[e.u,[2,i.I]]),e.Db(4608,m.c,m.c,[m.i,m.e,e.j,m.h,m.f,e.r,e.z,i.d,_.b,[2,i.j]]),e.Db(5120,m.j,m.k,[m.c]),e.Db(4608,cl.c,cl.c,[]),e.Db(5120,rl.a,rl.b,[m.c]),e.Db(5120,f.b,f.c,[m.c]),e.Db(4608,F.e,M.e,[[2,M.i],[2,M.n]]),e.Db(5120,I.c,I.a,[[3,I.c]]),e.Db(4608,M.d,M.d,[]),e.Db(4608,k.e,k.e,[]),e.Db(4608,k.y,k.y,[]),e.Db(5120,b.d,b.a,[[3,b.d]]),e.Db(1073742336,i.c,i.c,[]),e.Db(1073742336,bl.a,bl.a,[]),e.Db(1073742336,r.p,r.p,[]),e.Db(1073742336,_.a,_.a,[]),e.Db(1073742336,M.n,M.n,[[2,M.f],[2,F.f]]),e.Db(1073742336,c.m,c.m,[]),e.Db(1073742336,p.b,p.b,[]),e.Db(1073742336,M.x,M.x,[]),e.Db(1073742336,il.c,il.c,[]),e.Db(1073742336,sl.g,sl.g,[]),e.Db(1073742336,h.c,h.c,[]),e.Db(1073742336,m.g,m.g,[]),e.Db(1073742336,M.v,M.v,[]),e.Db(1073742336,M.s,M.s,[]),e.Db(1073742336,cl.d,cl.d,[]),e.Db(1073742336,v.e,v.e,[]),e.Db(1073742336,rl.d,rl.d,[]),e.Db(1073742336,g.a,g.a,[]),e.Db(1073742336,f.e,f.e,[]),e.Db(1073742336,I.d,I.d,[]),e.Db(1073742336,L.c,L.c,[]),e.Db(1073742336,w.c,w.c,[]),e.Db(1073742336,k.x,k.x,[]),e.Db(1073742336,k.t,k.t,[]),e.Db(1073742336,k.k,k.k,[]),e.Db(1073742336,b.e,b.e,[]),e.Db(1073742336,d.c,d.c,[]),e.Db(1073742336,t,t,[]),e.Db(1024,dl.k,(function(){return[[]]}),[]),e.Db(256,fl.a,O,[])])}))}}]);
//# sourceMappingURL=29.4b9855cf9afcb3d1471f.js.map