(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"Nl/r":function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),o=function(){return function(){}}(),a=t("NcP4"),i=t("t68o"),u=t("pMnS"),c=t("+lnl"),d=t("EJ7M"),r=t("ap0P"),s=t("HE/B"),b=t("ThfK"),m=t("ldJ0"),p=t("OvbY"),f=t("Ok+c"),g=t("Pj+I"),h=t("Cka/"),v=t("UMU1"),M=t("dCG0"),C=t("B/2v"),y=t("S1Kd"),_=t("4z0a"),F=t("nFVu"),D=t("HfPH"),x=t("TtEo"),P=t("LC5p"),O=t("bujt"),S=t("UodH"),w=t("lLAP"),k=t("wFw1"),A=t("Mr+X"),I=t("SMsm"),T=t("Ip0R"),L=t("v0ZX"),j=t("Z16F"),U=t("CQqH"),E=t("EdIQ"),N=t("s7Fu"),q=t("khmc"),R=t("YLZ7"),z=t("o3x0"),G=t("6E2U"),Y=t("eDkP"),V=t("4S5B"),H=t("Vurf"),K=t("dJrM"),Z=t("seP3"),$=t("Wf4p"),J=t("Fzqc"),Q=t("dWZg"),B=t("gIcY"),X=t("b716"),W=t("/VYK"),nn=t("jEQs"),ln=t("gvL1"),tn=t("MvMx"),en=t("oY6q"),on=function(){function n(n,l,t,o,a){this.cvService=n,this.dialog=l,this.utilsService=t,this.overlayContainerService=o,this.substanceFormService=a,this.modDeleted=new e.n,this.modTypeList=[],this.modRoleList=[],this.modProcessList=[],this.subscriptions=[]}return n.prototype.ngOnInit=function(){this.getVocabularies(),this.overlayContainer=this.overlayContainerService.getContainerElement()},Object.defineProperty(n.prototype,"mod",{get:function(){return this.privateMod},set:function(n){this.privateMod=n,this.privateMod.agentSubstance&&(this.relatedSubstanceUuid=this.privateMod.agentSubstance.refuuid)},enumerable:!0,configurable:!0}),n.prototype.updateAccess=function(n){this.mod.access=n},n.prototype.getVocabularies=function(){var n=this;this.cvService.getDomainVocabulary("AGENT_MODIFICATION_TYPE","AGENT_MODIFICATION_PROCESS","ROLE").subscribe((function(l){n.modTypeList=l.AGENT_MODIFICATION_TYPE.list,n.modProcessList=l.AGENT_MODIFICATION_PROCESS.list,n.modRoleList=l.ROLE.list}))},n.prototype.deleteCode=function(){var n=this;this.privateMod.$$deletedCode=this.utilsService.newUUID(),this.privateMod||(this.deleteTimer=setTimeout((function(){n.modDeleted.emit(n.privateMod)}),2e3))},n.prototype.undoDelete=function(){clearTimeout(this.deleteTimer),delete this.privateMod.$$deletedCode},n.prototype.openAmountDialog=function(){var n=this;this.mod.amount||(this.mod.amount={});var l=this.dialog.open(en.a,{data:{subsAmount:this.mod.amount},width:"990px"});this.overlayContainer.style.zIndex="1002";var t=l.afterClosed().subscribe((function(l){n.overlayContainer.style.zIndex=null,n.mod.amount=l}));this.subscriptions.push(t)},n.prototype.updateProcess=function(n){this.privateMod.agentModificationProcess=n},n.prototype.relatedSubstanceUpdated=function(n){null!==n?(this.mod.agentSubstance={refPname:n._name,name:n._name,refuuid:n.uuid,substanceClass:"reference",approvalID:n.approvalID},this.relatedSubstanceUuid=this.mod.agentSubstance.refuuid):(this.mod.agentSubstance=null,this.relatedSubstanceUuid="")},n.prototype.displayAmount=function(n){return this.utilsService.displayAmount(n)},n.prototype.formatValue=function(n){return n?"object"==typeof n?n.display?n.display:n.value?n.value:null:n:null},n}(),an=t("Jj5M"),un=e.rb({encapsulation:0,styles:[['.code-form-container[_ngcontent-%COMP%]{padding:30px 10px 12px;position:relative;display:-ms-flexbox;display:flex}.related-substance[_ngcontent-%COMP%]{max-width:25%;width:25%}  .related-substance img{max-width:125px!important;margin:auto}.notification-backdrop[_ngcontent-%COMP%]{position:absolute;top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;z-index:10;background-color:rgba(255,255,255,.8);-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-size:30px;font-weight:700;color:#666}.form-row[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:end;align-items:flex-end}.form-row[_ngcontent-%COMP%]   .delete-container[_ngcontent-%COMP%]{padding:0 10px 8px 0}.form-row[_ngcontent-%COMP%]   .code-system[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%]   .code-system-type[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]{-ms-flex-positive:1;flex-grow:1;padding-right:15px}.form-row[_ngcontent-%COMP%]   .code-text[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%]   .url[_ngcontent-%COMP%]{-ms-flex-positive:1;flex-grow:1}.key-value-pair[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-item-align:start;align-self:flex-start}.key-value-pair[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]{font-size:11px;padding-bottom:3.5px;line-height:11px;color:rgba(0,0,0,.54);font-weight:400;font-family:Roboto,"Helvetica Neue",sans-serif}.key-value-pair[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:15.5px}.references-container[_ngcontent-%COMP%]{width:100%}.form-row[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:0 10px;-ms-flex-align:end;align-items:flex-end}.form-row[_ngcontent-%COMP%]   .checkbox-container[_ngcontent-%COMP%]{padding-bottom:18px}.form-row[_ngcontent-%COMP%]   .location-type[_ngcontent-%COMP%]   .extent[_ngcontent-%COMP%]   .mod-type[_ngcontent-%COMP%]{-ms-flex-positive:1;flex-grow:1;padding-right:10px}.form-row[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%]{width:100%;display:-ms-flexbox;display:flex}.padded[_ngcontent-%COMP%]{padding-right:20px}.amount-display[_ngcontent-%COMP%]{padding-top:11px}.form-actions[_ngcontent-%COMP%]{-ms-flex-pack:start;justify-content:flex-start;margin:5px 0 10px}.form-content[_ngcontent-%COMP%]{-ms-flex-positive:1;flex-grow:1}.amount[_ngcontent-%COMP%], .extent[_ngcontent-%COMP%], .group-access[_ngcontent-%COMP%], .location-type[_ngcontent-%COMP%], .mod-type[_ngcontent-%COMP%], .sites[_ngcontent-%COMP%]{width:33%}.access[_ngcontent-%COMP%], .group[_ngcontent-%COMP%]{width:22%}']],data:{}});function cn(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,5,"div",[["class","notification-backdrop"]],null,null,null,null,null)),(n()(),e.Nb(-1,null,[" Deleted  "])),(n()(),e.tb(2,0,null,null,3,"button",[["mat-icon-button",""],["matTooltip","Undo"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.undoDelete()&&e),e}),O.d,O.b)),e.sb(3,180224,null,0,S.b,[e.k,w.h,[2,k.a]],null,null),(n()(),e.tb(4,0,null,0,1,"mat-icon",[["class","mat-icon notranslate"],["role","img"],["svgIcon","undo"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,A.b,A.a)),e.sb(5,9158656,null,0,I.b,[e.k,I.d,[8,null],[2,I.a],[2,e.m]],{svgIcon:[0,"svgIcon"]},null)],(function(n,l){n(l,5,0,"undo")}),(function(n,l){n(l,2,0,e.Fb(l,3).disabled||null,"NoopAnimations"===e.Fb(l,3)._animationMode),n(l,4,0,e.Fb(l,5).inline,"primary"!==e.Fb(l,5).color&&"accent"!==e.Fb(l,5).color&&"warn"!==e.Fb(l,5).color)}))}function dn(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),e.Nb(1,null,[" "," "]))],null,(function(n,l){var t=l.component;n(l,1,0,t.displayAmount(t.mod.amount))}))}function rn(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,53,"div",[["class","code-form-container"]],null,null,null,null,null)),(n()(),e.jb(16777216,null,null,1,null,cn)),e.sb(2,16384,null,0,T.n,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(n()(),e.tb(3,0,null,null,4,"div",[["class","delete-container"]],null,null,null,null,null)),(n()(),e.tb(4,0,null,null,3,"button",[["mat-icon-button",""],["matTooltip","Delete code"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.deleteCode()&&e),e}),O.d,O.b)),e.sb(5,180224,null,0,S.b,[e.k,w.h,[2,k.a]],null,null),(n()(),e.tb(6,0,null,0,1,"mat-icon",[["class","mat-icon notranslate"],["role","img"],["svgIcon","delete_forever"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,A.b,A.a)),e.sb(7,9158656,null,0,I.b,[e.k,I.d,[8,null],[2,I.a],[2,e.m]],{svgIcon:[0,"svgIcon"]},null),(n()(),e.tb(8,0,null,null,2,"div",[["class","flex-column related-substance"]],null,null,null,null,null)),(n()(),e.tb(9,0,null,null,1,"app-substance-selector",[["eventCategory","substanceRelationshipRelatedSub"],["header","Agent Substance"],["placeholder","Agent Substance"]],null,[[null,"selectionUpdated"]],(function(n,l,t){var e=!0;return"selectionUpdated"===l&&(e=!1!==n.component.relatedSubstanceUpdated(t)&&e),e}),L.b,L.a)),e.sb(10,114688,null,0,j.a,[U.a,E.a],{eventCategory:[0,"eventCategory"],placeholder:[1,"placeholder"],header:[2,"header"],subuuid:[3,"subuuid"]},{selectionUpdated:"selectionUpdated"}),(n()(),e.tb(11,0,null,null,42,"div",[["class","flex-column form-content"]],null,null,null,null,null)),(n()(),e.tb(12,0,null,null,6,"div",[["class","form-row"]],null,null,null,null,null)),(n()(),e.tb(13,0,null,null,1,"app-cv-input",[["key","Agent Modification Agent Modification Process"],["title","Modification Process"]],null,[[null,"valueChange"]],(function(n,l,t){var e=!0;return"valueChange"===l&&(e=!1!==n.component.updateProcess(t)&&e),e}),N.b,N.a)),e.sb(14,245760,null,0,q.a,[R.a,z.e,G.a,Y.e,V.a,H.a],{title:[0,"title"],key:[1,"key"],model:[2,"model"]},{valueChange:"valueChange"}),(n()(),e.tb(15,0,null,null,1,"app-cv-input",[["key","Agent Modification Agent Modification Type"],["title","Modification Type"]],null,[[null,"valueChange"]],(function(n,l,t){var e=!0;return"valueChange"===l&&(e=!1!==(n.component.mod.agentModificationType=t)&&e),e}),N.b,N.a)),e.sb(16,245760,null,0,q.a,[R.a,z.e,G.a,Y.e,V.a,H.a],{title:[0,"title"],key:[1,"key"],model:[2,"model"]},{valueChange:"valueChange"}),(n()(),e.tb(17,0,null,null,1,"app-cv-input",[["key","Agent Modification Agent Modification Role"],["title","Modification Role"]],null,[[null,"valueChange"]],(function(n,l,t){var e=!0;return"valueChange"===l&&(e=!1!==(n.component.mod.agentModificationRole=t)&&e),e}),N.b,N.a)),e.sb(18,245760,null,0,q.a,[R.a,z.e,G.a,Y.e,V.a,H.a],{title:[0,"title"],key:[1,"key"],model:[2,"model"]},{valueChange:"valueChange"}),(n()(),e.tb(19,0,null,null,34,"div",[["class","form-row"]],null,null,null,null,null)),(n()(),e.tb(20,0,null,null,9,"div",[["class","amount"]],null,null,null,null,null)),(n()(),e.tb(21,0,null,null,1,"div",[["class","label amt-label"]],null,null,null,null,null)),(n()(),e.Nb(-1,null,[" Amount "])),(n()(),e.tb(23,0,null,null,3,"button",[["mat-icon-button",""],["matTooltip","add"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.openAmountDialog()&&e),e}),O.d,O.b)),e.sb(24,180224,null,0,S.b,[e.k,w.h,[2,k.a]],null,null),(n()(),e.tb(25,0,null,0,1,"mat-icon",[["class","mat-icon notranslate"],["role","img"],["svgIcon","add_circle_outline"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,A.b,A.a)),e.sb(26,9158656,null,0,I.b,[e.k,I.d,[8,null],[2,I.a],[2,e.m]],{svgIcon:[0,"svgIcon"]},null),(n()(),e.tb(27,0,null,null,2,"div",[["class","amount-display"]],null,null,null,null,null)),(n()(),e.jb(16777216,null,null,1,null,dn)),e.sb(29,16384,null,0,T.n,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(n()(),e.tb(30,0,null,null,20,"mat-form-field",[["class","group mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,K.b,K.a)),e.sb(31,7520256,null,9,Z.c,[e.k,e.h,[2,$.j],[2,J.b],[2,Z.a],Q.a,e.z,[2,k.a]],null,null),e.Lb(603979776,1,{_controlNonStatic:0}),e.Lb(335544320,2,{_controlStatic:0}),e.Lb(603979776,3,{_labelChildNonStatic:0}),e.Lb(335544320,4,{_labelChildStatic:0}),e.Lb(603979776,5,{_placeholderChild:0}),e.Lb(603979776,6,{_errorChildren:1}),e.Lb(603979776,7,{_hintChildren:1}),e.Lb(603979776,8,{_prefixChildren:1}),e.Lb(603979776,9,{_suffixChildren:1}),(n()(),e.tb(41,0,null,1,9,"input",[["class","mat-input-element mat-form-field-autofill-control"],["matInput",""],["name","group"],["placeholder","Group"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],(function(n,l,t){var o=!0,a=n.component;return"input"===l&&(o=!1!==e.Fb(n,42)._handleInput(t.target.value)&&o),"blur"===l&&(o=!1!==e.Fb(n,42).onTouched()&&o),"compositionstart"===l&&(o=!1!==e.Fb(n,42)._compositionStart()&&o),"compositionend"===l&&(o=!1!==e.Fb(n,42)._compositionEnd(t.target.value)&&o),"blur"===l&&(o=!1!==e.Fb(n,49)._focusChanged(!1)&&o),"focus"===l&&(o=!1!==e.Fb(n,49)._focusChanged(!0)&&o),"input"===l&&(o=!1!==e.Fb(n,49)._onInput()&&o),"ngModelChange"===l&&(o=!1!==(a.mod.modificationGroup=t)&&o),o}),null,null)),e.sb(42,16384,null,0,B.d,[e.E,e.k,[2,B.a]],null,null),e.sb(43,16384,null,0,B.u,[],{required:[0,"required"]},null),e.Kb(1024,null,B.l,(function(n){return[n]}),[B.u]),e.Kb(1024,null,B.m,(function(n){return[n]}),[B.d]),e.sb(46,671744,null,0,B.r,[[8,null],[6,B.l],[8,null],[6,B.m]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Kb(2048,null,B.n,null,[B.r]),e.sb(48,16384,null,0,B.o,[[4,B.n]],null,null),e.sb(49,999424,null,0,X.b,[e.k,Q.a,[6,B.n],[2,B.q],[2,B.j],$.d,[8,null],W.a,e.z],{placeholder:[0,"placeholder"],required:[1,"required"]},null),e.Kb(2048,[[1,4],[2,4]],Z.d,null,[X.b]),(n()(),e.tb(51,0,null,null,2,"div",[["class","access"]],null,null,null,null,null)),(n()(),e.tb(52,0,null,null,1,"app-access-manager",[],null,[[null,"accessOut"]],(function(n,l,t){var e=!0;return"accessOut"===l&&(e=!1!==n.component.updateAccess(t)&&e),e}),nn.b,nn.a)),e.sb(53,4308992,null,0,ln.a,[R.a,e.k],{access:[0,"access"]},{accessOut:"accessOut"}),(n()(),e.tb(54,0,null,null,2,"div",[["class","form-row"]],null,null,null,null,null)),(n()(),e.tb(55,0,null,null,1,"app-audit-info",[],null,null,null,M.c,M.b)),e.sb(56,114688,null,0,tn.a,[],{source:[0,"source"]},null)],(function(n,l){var t=l.component;n(l,2,0,t.mod.$$deletedCode),n(l,7,0,"delete_forever"),n(l,10,0,"substanceRelationshipRelatedSub","Agent Substance","Agent Substance",t.relatedSubstanceUuid),n(l,14,0,"Modification Process","Agent Modification Agent Modification Process",t.mod.agentModificationProcess),n(l,16,0,"Modification Type","Agent Modification Agent Modification Type",t.mod.agentModificationType),n(l,18,0,"Modification Role","Agent Modification Agent Modification Role",t.mod.agentModificationRole),n(l,26,0,"add_circle_outline"),n(l,29,0,t.mod.amount),n(l,43,0,""),n(l,46,0,"group",t.mod.modificationGroup),n(l,49,0,"Group",""),n(l,53,0,t.mod.access),n(l,56,0,t.mod)}),(function(n,l){n(l,4,0,e.Fb(l,5).disabled||null,"NoopAnimations"===e.Fb(l,5)._animationMode),n(l,6,0,e.Fb(l,7).inline,"primary"!==e.Fb(l,7).color&&"accent"!==e.Fb(l,7).color&&"warn"!==e.Fb(l,7).color),n(l,23,0,e.Fb(l,24).disabled||null,"NoopAnimations"===e.Fb(l,24)._animationMode),n(l,25,0,e.Fb(l,26).inline,"primary"!==e.Fb(l,26).color&&"accent"!==e.Fb(l,26).color&&"warn"!==e.Fb(l,26).color),n(l,30,1,["standard"==e.Fb(l,31).appearance,"fill"==e.Fb(l,31).appearance,"outline"==e.Fb(l,31).appearance,"legacy"==e.Fb(l,31).appearance,e.Fb(l,31)._control.errorState,e.Fb(l,31)._canLabelFloat,e.Fb(l,31)._shouldLabelFloat(),e.Fb(l,31)._hasFloatingLabel(),e.Fb(l,31)._hideControlPlaceholder(),e.Fb(l,31)._control.disabled,e.Fb(l,31)._control.autofilled,e.Fb(l,31)._control.focused,"accent"==e.Fb(l,31).color,"warn"==e.Fb(l,31).color,e.Fb(l,31)._shouldForward("untouched"),e.Fb(l,31)._shouldForward("touched"),e.Fb(l,31)._shouldForward("pristine"),e.Fb(l,31)._shouldForward("dirty"),e.Fb(l,31)._shouldForward("valid"),e.Fb(l,31)._shouldForward("invalid"),e.Fb(l,31)._shouldForward("pending"),!e.Fb(l,31)._animationsEnabled]),n(l,41,1,[e.Fb(l,43).required?"":null,e.Fb(l,48).ngClassUntouched,e.Fb(l,48).ngClassTouched,e.Fb(l,48).ngClassPristine,e.Fb(l,48).ngClassDirty,e.Fb(l,48).ngClassValid,e.Fb(l,48).ngClassInvalid,e.Fb(l,48).ngClassPending,e.Fb(l,49)._isServer,e.Fb(l,49).id,e.Fb(l,49).placeholder,e.Fb(l,49).disabled,e.Fb(l,49).required,e.Fb(l,49).readonly&&!e.Fb(l,49)._isNativeSelect||null,e.Fb(l,49)._ariaDescribedby||null,e.Fb(l,49).errorState,e.Fb(l,49).required.toString()])}))}var sn=t("mrSG"),bn=function(n){function l(l,t,e){var o=n.call(this,e)||this;return o.substanceFormAgentModificationsService=l,o.scrollToService=t,o.gaService=e,o.subscriptions=[],o.analyticsEventCategory="substance form agent modifications",o}return sn.a(l,n),l.prototype.ngOnInit=function(){this.menuLabelUpdate.emit("Agent Modifications")},l.prototype.ngAfterViewInit=function(){var n=this;this.canAddItemUpdate.emit(!0);var l=this.substanceFormAgentModificationsService.substanceAgentModifications.subscribe((function(l){n.modifications=l}));this.subscriptions.push(l)},l.prototype.ngOnDestroy=function(){this.subscriptions.forEach((function(n){n.unsubscribe()})),this.componentDestroyed.emit()},l.prototype.addItem=function(){this.addStructuralModification()},l.prototype.addStructuralModification=function(){var n=this;this.substanceFormAgentModificationsService.addSubstanceAgentModification(),setTimeout((function(){n.scrollToService.scrollToElement("substance-agent-modification-0","center")}))},l.prototype.deleteAgentModification=function(n){this.substanceFormAgentModificationsService.deleteSubstanceAgentModification(n)},l}(t("j/Lz").a),mn=t("v/QL"),pn=t("hifq"),fn=t("HECD"),gn=e.rb({encapsulation:0,styles:[[".mat-divider.mat-divider-inset[_ngcontent-%COMP%]{margin-left:0}.mat-divider[_ngcontent-%COMP%]{border-top-color:rgba(0,0,0,.12)}.code[_ngcontent-%COMP%]:nth-child(odd){background-color:rgba(68,138,255,.07)}.code[_ngcontent-%COMP%]:nth-child(odd)     .mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover{background-color:rgba(68,138,255,.15)}.code[_ngcontent-%COMP%]:nth-child(even)     .mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover{background-color:rgba(128,128,128,.15)}.code[_ngcontent-%COMP%]     .mat-expansion-panel, .code[_ngcontent-%COMP%]     .mat-table, .code[_ngcontent-%COMP%]     textarea{background-color:transparent}.search[_ngcontent-%COMP%]{width:400px;max-width:100%}"]],data:{}});function hn(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,1,"mat-divider",[["class","form-divider mat-divider"],["role","separator"]],[[1,"aria-orientation",0],[2,"mat-divider-vertical",null],[2,"mat-divider-horizontal",null],[2,"mat-divider-inset",null]],null,null,x.b,x.a)),e.sb(1,49152,null,0,P.a,[],{inset:[0,"inset"]},null)],(function(n,l){n(l,1,0,!0)}),(function(n,l){n(l,0,0,e.Fb(l,1).vertical?"vertical":"horizontal",e.Fb(l,1).vertical,!e.Fb(l,1).vertical,e.Fb(l,1).inset)}))}function vn(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,4,"div",[["class","alternate-backgrounds"]],[[8,"id",0]],null,null,null,null)),(n()(),e.tb(1,0,null,null,1,"app-agent-modification-form",[],null,[[null,"modDeleted"]],(function(n,l,t){var e=!0;return"modDeleted"===l&&(e=!1!==n.component.deleteAgentModification()&&e),e}),rn,un)),e.sb(2,114688,null,0,on,[R.a,z.e,G.a,Y.e,an.a],{mod:[0,"mod"]},{modDeleted:"modDeleted"}),(n()(),e.jb(16777216,null,null,1,null,hn)),e.sb(4,16384,null,0,T.n,[e.P,e.M],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,2,0,l.context.$implicit),n(l,4,0,!l.context.last)}),(function(n,l){n(l,0,0,"substance-agent-modification-"+l.context.index)}))}function Mn(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,6,"div",[["class","flex-row"]],null,null,null,null,null)),(n()(),e.tb(1,0,null,null,0,"span",[["class","middle-fill"]],null,null,null,null,null)),(n()(),e.tb(2,0,null,null,4,"button",[["mat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.addStructuralModification()&&e),e}),O.d,O.b)),e.sb(3,180224,null,0,S.b,[e.k,w.h,[2,k.a]],null,null),(n()(),e.Nb(-1,0,[" Add Modification "])),(n()(),e.tb(5,0,null,0,1,"mat-icon",[["class","mat-icon notranslate"],["role","img"],["svgIcon","add_circle_outline"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,A.b,A.a)),e.sb(6,9158656,null,0,I.b,[e.k,I.d,[8,null],[2,I.a],[2,e.m]],{svgIcon:[0,"svgIcon"]},null)],(function(n,l){n(l,6,0,"add_circle_outline")}),(function(n,l){n(l,2,0,e.Fb(l,3).disabled||null,"NoopAnimations"===e.Fb(l,3)._animationMode),n(l,5,0,e.Fb(l,6).inline,"primary"!==e.Fb(l,6).color&&"accent"!==e.Fb(l,6).color&&"warn"!==e.Fb(l,6).color)}))}function Cn(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,1,"div",[["class","flex-row"]],null,null,null,null,null)),(n()(),e.tb(1,0,null,null,0,"span",[["class","middle-fill"]],null,null,null,null,null)),(n()(),e.jb(16777216,null,null,1,null,vn)),e.sb(3,278528,null,0,T.m,[e.P,e.M,e.s],{ngForOf:[0,"ngForOf"]},null),(n()(),e.jb(16777216,null,null,1,null,Mn)),e.sb(5,16384,null,0,T.n,[e.P,e.M],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,3,0,t.modifications),n(l,5,0,t.modifications&&t.modifications.length>0)}),null)}function yn(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,1,"app-substance-form-agent-modifications-card",[],null,null,null,Cn,gn)),e.sb(1,4440064,null,0,bn,[mn.a,pn.a,fn.a],null,null)],(function(n,l){n(l,1,0)}),null)}var _n=e.pb("app-substance-form-agent-modifications-card",bn,yn,{},{menuLabelUpdate:"menuLabelUpdate",hiddenStateUpdate:"hiddenStateUpdate",canAddItemUpdate:"canAddItemUpdate",componentDestroyed:"componentDestroyed"},[]),Fn=t("M2Lx"),Dn=t("mVsa"),xn=t("v9Dh"),Pn=t("ZYjt"),On=t("uGex"),Sn=t("4tE/"),wn=t("4epT"),kn=t("EtvR"),An=t("4c35"),In=t("qAlS"),Tn=t("de3e"),Ln=t("La40"),jn=t("/dO6"),Un=t("NYLF"),En=t("y4qS"),Nn=t("BHnd"),qn=t("YhbO"),Rn=t("jlZm"),zn=t("6Wmm"),Gn=t("9It4"),Yn=t("PnCX"),Vn=t("IyAz"),Hn=t("ZYCi"),Kn=t("5uHe"),Zn=t("vfGX"),$n=t("0/Q6"),Jn=t("jS4w"),Qn=t("u7R8"),Bn=t("NnTW"),Xn=t("Z+uX"),Wn=t("Blfk"),nl=t("7fs6"),ll=t("YSh2"),tl=t("6jyQ");t.d(l,"SubstanceFormAgentModificationsModuleNgFactory",(function(){return el}));var el=e.qb(o,[],(function(n){return e.Cb([e.Db(512,e.j,e.bb,[[8,[a.a,i.a,u.a,c.a,d.a,r.a,s.a,b.a,m.b,p.a,f.a,g.a,h.a,v.a,M.a,C.a,y.a,_.a,F.a,D.a,_n]],[3,e.j],e.x]),e.Db(4608,T.p,T.o,[e.u,[2,T.I]]),e.Db(4608,B.e,B.e,[]),e.Db(4608,B.y,B.y,[]),e.Db(4608,Fn.c,Fn.c,[]),e.Db(4608,Y.c,Y.c,[Y.i,Y.e,e.j,Y.h,Y.f,e.r,e.z,T.d,J.b,[2,T.j]]),e.Db(5120,Y.j,Y.k,[Y.c]),e.Db(5120,Dn.c,Dn.j,[Y.c]),e.Db(5120,xn.b,xn.c,[Y.c]),e.Db(4608,Pn.e,$.e,[[2,$.i],[2,$.n]]),e.Db(5120,On.a,On.b,[Y.c]),e.Db(4608,$.d,$.d,[]),e.Db(5120,Sn.b,Sn.c,[Y.c]),e.Db(5120,z.c,z.d,[Y.c]),e.Db(135680,z.e,z.e,[Y.c,e.r,[2,T.j],[2,z.b],z.c,[3,z.e],Y.e]),e.Db(5120,wn.c,wn.a,[[3,wn.c]]),e.Db(1073742336,T.c,T.c,[]),e.Db(1073742336,kn.a,kn.a,[]),e.Db(1073742336,B.x,B.x,[]),e.Db(1073742336,B.t,B.t,[]),e.Db(1073742336,B.k,B.k,[]),e.Db(1073742336,Fn.d,Fn.d,[]),e.Db(1073742336,Z.e,Z.e,[]),e.Db(1073742336,J.a,J.a,[]),e.Db(1073742336,$.n,$.n,[[2,$.f],[2,Pn.f]]),e.Db(1073742336,Q.b,Q.b,[]),e.Db(1073742336,$.x,$.x,[]),e.Db(1073742336,An.g,An.g,[]),e.Db(1073742336,In.c,In.c,[]),e.Db(1073742336,Y.g,Y.g,[]),e.Db(1073742336,Dn.i,Dn.i,[]),e.Db(1073742336,Dn.f,Dn.f,[]),e.Db(1073742336,Tn.d,Tn.d,[]),e.Db(1073742336,Tn.c,Tn.c,[]),e.Db(1073742336,S.c,S.c,[]),e.Db(1073742336,I.c,I.c,[]),e.Db(1073742336,w.a,w.a,[]),e.Db(1073742336,xn.e,xn.e,[]),e.Db(1073742336,Ln.l,Ln.l,[]),e.Db(1073742336,P.b,P.b,[]),e.Db(1073742336,$.v,$.v,[]),e.Db(1073742336,$.s,$.s,[]),e.Db(1073742336,On.d,On.d,[]),e.Db(1073742336,W.c,W.c,[]),e.Db(1073742336,X.c,X.c,[]),e.Db(1073742336,jn.f,jn.f,[]),e.Db(1073742336,Sn.e,Sn.e,[]),e.Db(1073742336,Un.a,Un.a,[]),e.Db(1073742336,z.k,z.k,[]),e.Db(1073742336,En.p,En.p,[]),e.Db(1073742336,Nn.m,Nn.m,[]),e.Db(1073742336,qn.c,qn.c,[]),e.Db(1073742336,Rn.d,Rn.d,[]),e.Db(1073742336,zn.b,zn.b,[]),e.Db(1073742336,Gn.d,Gn.d,[]),e.Db(1073742336,Yn.a,Yn.a,[]),e.Db(1073742336,Vn.a,Vn.a,[]),e.Db(1073742336,Hn.q,Hn.q,[[2,Hn.v],[2,Hn.n]]),e.Db(1073742336,Kn.a,Kn.a,[]),e.Db(1073742336,Zn.a,Zn.a,[]),e.Db(1073742336,$.o,$.o,[]),e.Db(1073742336,$n.d,$n.d,[]),e.Db(1073742336,Jn.b,Jn.b,[]),e.Db(1073742336,Qn.e,Qn.e,[]),e.Db(1073742336,Bn.b,Bn.b,[]),e.Db(1073742336,Xn.c,Xn.c,[]),e.Db(1073742336,Wn.c,Wn.c,[]),e.Db(1073742336,nl.a,nl.a,[]),e.Db(1073742336,wn.d,wn.d,[]),e.Db(1073742336,o,o,[]),e.Db(256,jn.a,{separatorKeyCodes:[ll.g]},[]),e.Db(1024,Hn.k,(function(){return[[]]}),[]),e.Db(256,tl.a,bn,[])])}))},"n67+":function(n,l,t){"use strict";t.d(l,"a",(function(){return o}));var e=t("CcnG"),o=function(){return function(){this.menuLabelUpdate=new e.n,this.hiddenStateUpdate=new e.n,this.canAddItemUpdate=new e.n,this.componentDestroyed=new e.n}}()}}]);
//# sourceMappingURL=35.a9a3228e76396295b5db.js.map