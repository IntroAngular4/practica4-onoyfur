(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"ct+p":function(t,e,n){"use strict";n.r(e);var o=n("ofXK"),c=n("fXoL"),s=n("tyNb"),r=n("AytR");let a=(()=>{class t{constructor(){}ngOnInit(){}}return t.ngFactoryDef=function(e){return new(e||t)},t.ngComponentDef=c.Qb({type:t,selectors:[["app-dashboard"]],inputs:{counterClass:"counterClass",description:"description",numProyectos:"numProyectos"},decls:8,vars:5,consts:[[2,"margin-left","30px"]],template:function(t,e){1&t&&(c.ac(0,"h3"),c.wc(1),c.jc(2,"uppercase"),c.Yb(),c.ac(3,"p",0),c.wc(4," Hay un total de "),c.ac(5,"mark"),c.wc(6),c.Yb(),c.wc(7," proyectos activos.\n"),c.Yb()),2&t&&(c.Kb(1),c.xc(c.kc(2,3,e.description)),c.Kb(4),c.Nb(e.counterClass),c.Kb(1),c.xc(e.numProyectos))},pipes:[o.m],styles:[""]}),t})();const p=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){this.description="Resumen Proyectos",this.numProyectos=r.a.projects.length}}return t.ngFactoryDef=function(e){return new(e||t)},t.ngComponentDef=c.Qb({type:t,selectors:[["app-home"]],decls:1,vars:3,consts:[[3,"description","counterClass","numProyectos"]],template:function(t,e){1&t&&c.Xb(0,"app-dashboard",0),2&t&&c.lc("description",e.description)("counterClass","tag secondary")("numProyectos",e.numProyectos)},directives:[a],styles:[""]}),t})()}];let u=(()=>{class t{}return t.ngModuleDef=c.Ub({type:t}),t.ngInjectorDef=c.Tb({factory:function(e){return new(e||t)},imports:[[s.e.forChild(p)],s.e]}),t})();s.e.forChild(p),n.d(e,"HomeModule",(function(){return i}));let i=(()=>{class t{}return t.ngModuleDef=c.Ub({type:t}),t.ngInjectorDef=c.Tb({factory:function(e){return new(e||t)},imports:[[o.b,u]]}),t})()}}]);