(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{TRrv:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),i=u("NcP4"),a=u("t68o"),c=u("o3x0"),s=u("nahG"),b=u("Pp4P"),o=u("CQqH"),r=u("Ip0R"),d=u("mrSG"),f=u("EfhQ"),p=u("K9Ia"),v=function(l){function n(n,u,e){var t=l.call(this)||this;return t.dialog=n,t.gaService=u,t.overlayContainerService=e,t.definition={},t.substanceUpdated=new p.a,t.count=0,t}return d.a(n,l),n.prototype.ngOnInit=function(){var l=this;this.substanceUpdated.subscribe((function(n){l.substance=n,null!=l.substance&&null!=l.substance.specifiedSubstanceG3&&l.substance.specifiedSubstanceG3.definition&&(l.definition=l.substance.specifiedSubstanceG3.definition,l.count=1),l.countUpdate.emit(l.count)})),this.overlayContainer=this.overlayContainerService.getContainerElement()},n.prototype.openModal=function(l){var n=this;this.gaService.sendEvent(this.analyticsEventCategory,"button","references view");var u=this.dialog.open(l,{minWidth:"40%",maxWidth:"90%"});this.overlayContainer.style.zIndex="1002",u.afterClosed().subscribe((function(l){n.overlayContainer.style.zIndex=null}))},n}(f.a),m=u("HECD"),g=u("eDkP"),D=e.rb({encapsulation:0,styles:[[".name[_ngcontent-%COMP%]{min-width:150px}"]],data:{}});function h(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,2,"h2",[["class","mat-dialog-title"],["mat-dialog-title",""]],[[8,"id",0]],null,null,null,null)),e.sb(1,81920,null,0,c.m,[[2,c.l],e.k,c.e],null,null),(l()(),e.Nb(-1,null,["References"])),(l()(),e.tb(3,0,null,null,3,"div",[["class","mat-dialog-content"],["mat-dialog-content",""]],null,null,null,null,null)),e.sb(4,16384,null,0,c.j,[],null,null),(l()(),e.tb(5,0,null,null,1,"app-references-manager",[],null,null,null,s.b,s.a)),e.sb(6,114688,null,0,b.a,[o.a],{substance:[0,"substance"],references:[1,"references"]},null),(l()(),e.tb(7,0,null,null,5,"div",[["class","mat-dialog-actions"],["mat-dialog-actions",""]],null,null,null,null,null)),e.sb(8,16384,null,0,c.f,[],null,null),(l()(),e.tb(9,0,null,null,0,"span",[["class","middle-fill"]],null,null,null,null,null)),(l()(),e.tb(10,0,null,null,2,"button",[["class","mat-raised-button mat-primary"],["mat-dialog-close",""]],[[1,"aria-label",0],[1,"type",0]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Fb(l,11).dialogRef.close(e.Fb(l,11).dialogResult)&&t),t}),null,null)),e.sb(11,606208,null,0,c.g,[[2,c.l],e.k,c.e],{dialogResult:[0,"dialogResult"]},null),(l()(),e.Nb(-1,null,["Close"]))],(function(l,n){var u=n.component;l(n,1,0),l(n,6,0,u.substance,u.substance.specifiedSubstanceG3.definition.references),l(n,11,0,"")}),(function(l,n){l(n,0,0,e.Fb(n,1).id),l(n,10,0,e.Fb(n,11).ariaLabel||null,e.Fb(n,11).type)}))}function y(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,12,"div",[],null,null,null,null,null)),(l()(),e.tb(1,0,null,null,4,"div",[["class","name-value"]],null,null,null,null,null)),(l()(),e.tb(2,0,null,null,1,"div",[["class","name"]],null,null,null,null,null)),(l()(),e.Nb(-1,null,["Definition"])),(l()(),e.tb(4,0,null,null,1,"div",[["class","value"]],null,null,null,null,null)),(l()(),e.Nb(5,null,["",""])),(l()(),e.tb(6,0,null,null,6,"div",[["class","name-value"]],null,null,null,null,null)),(l()(),e.tb(7,0,null,null,1,"div",[["class","name"]],null,null,null,null,null)),(l()(),e.Nb(-1,null,["References"])),(l()(),e.tb(9,0,null,null,3,"div",[["class","value"]],null,null,null,null,null)),(l()(),e.tb(10,0,null,null,1,"button",[["class","mat-raised-button mat-primary dialog-close"]],[[8,"disabled",0]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.openModal(e.Fb(l,12))&&t),t}),null,null)),(l()(),e.Nb(-1,null,["View"])),(l()(),e.jb(0,[["refTemplate",2]],null,0,null,h))],null,(function(l,n){var u=n.component;l(n,5,0,u.substance.specifiedSubstanceG3.definition.definition),l(n,10,0,u.substance.specifiedSubstanceG3.definition.references.length<=0)}))}function S(l){return e.Pb(0,[(l()(),e.jb(16777216,null,null,1,null,y)),e.sb(1,16384,null,0,r.n,[e.P,e.M],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,1,0,n.component.substance.specifiedSubstanceG3.definition)}),null)}function C(l){return e.Pb(0,[(l()(),e.tb(0,0,null,null,1,"app-substance-ssg-definition",[],null,null,null,S,D)),e.sb(1,114688,null,0,v,[c.e,m.a,g.e],null,null)],(function(l,n){l(n,1,0)}),null)}var k=e.pb("app-substance-ssg-definition",v,C,{},{countUpdate:"countUpdate"},[]),j=u("M2Lx"),P=u("Fzqc"),w=u("v9Dh"),G=u("ZYjt"),R=u("Wf4p"),F=u("EtvR"),I=u("y4qS"),N=u("BHnd"),x=u("SMsm"),M=u("dWZg"),E=u("lLAP"),q=u("4c35"),U=u("qAlS"),z=u("3fDy"),W=u("ZYCi"),H=u("6jyQ");u.d(n,"SubstanceSsgDefinitionModuleNgFactory",(function(){return L}));var L=e.qb(t,[],(function(l){return e.Cb([e.Db(512,e.j,e.bb,[[8,[i.a,a.a,k]],[3,e.j],e.x]),e.Db(4608,r.p,r.o,[e.u,[2,r.I]]),e.Db(4608,j.c,j.c,[]),e.Db(4608,g.c,g.c,[g.i,g.e,e.j,g.h,g.f,e.r,e.z,r.d,P.b,[2,r.j]]),e.Db(5120,g.j,g.k,[g.c]),e.Db(5120,w.b,w.c,[g.c]),e.Db(4608,G.e,R.e,[[2,R.i],[2,R.n]]),e.Db(5120,c.c,c.d,[g.c]),e.Db(135680,c.e,c.e,[g.c,e.r,[2,r.j],[2,c.b],c.c,[3,c.e],g.e]),e.Db(1073742336,r.c,r.c,[]),e.Db(1073742336,F.a,F.a,[]),e.Db(1073742336,I.p,I.p,[]),e.Db(1073742336,P.a,P.a,[]),e.Db(1073742336,R.n,R.n,[[2,R.f],[2,G.f]]),e.Db(1073742336,N.m,N.m,[]),e.Db(1073742336,x.c,x.c,[]),e.Db(1073742336,M.b,M.b,[]),e.Db(1073742336,j.d,j.d,[]),e.Db(1073742336,E.a,E.a,[]),e.Db(1073742336,q.g,q.g,[]),e.Db(1073742336,U.c,U.c,[]),e.Db(1073742336,g.g,g.g,[]),e.Db(1073742336,w.e,w.e,[]),e.Db(1073742336,z.a,z.a,[]),e.Db(1073742336,c.k,c.k,[]),e.Db(1073742336,t,t,[]),e.Db(1024,W.k,(function(){return[[]]}),[]),e.Db(256,H.a,v,[])])}))}}]);
//# sourceMappingURL=63.019c6710563f733be112.js.map