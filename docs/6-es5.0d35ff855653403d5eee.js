(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"ct+p":function(n,t,e){"use strict";e.r(t);var o,c,r,s=e("ofXK"),i=e("fXoL"),u=e("tyNb"),p=e("+qrf"),a=((o=function(){function n(){}return n.prototype.ngOnInit=function(){},n}()).ngFactoryDef=function(n){return new(n||o)},o.ngComponentDef=i.Qb({type:o,selectors:[["app-dashboard"]],inputs:{counterClass:"counterClass",description:"description",numProyectos:"numProyectos"},decls:8,vars:5,consts:[[2,"margin-left","30px"]],template:function(n,t){1&n&&(i.ac(0,"h3"),i.wc(1),i.jc(2,"uppercase"),i.Yb(),i.ac(3,"p",0),i.wc(4," Hay un total de "),i.ac(5,"mark"),i.wc(6),i.Yb(),i.wc(7," proyectos activos.\n"),i.Yb()),2&n&&(i.Kb(1),i.xc(i.kc(2,3,t.description)),i.Kb(4),i.Nb(t.counterClass),i.Kb(1),i.xc(t.numProyectos))},pipes:[s.n],styles:[""]}),o),f=[{path:"",component:(c=function(){function n(n){this.projectService=n}return n.prototype.ngOnInit=function(){var n=this;this.description="Resumen Proyectos",this.projectService.obtenerProyectos().subscribe((function(t){return n.numProyectos=null!=t?t.length:0}))},n}(),c.ngFactoryDef=function(n){return new(n||c)(i.Wb(p.a))},c.ngComponentDef=i.Qb({type:c,selectors:[["app-home"]],decls:1,vars:3,consts:[[3,"description","counterClass","numProyectos"]],template:function(n,t){1&n&&i.Xb(0,"app-dashboard",0),2&n&&i.lc("description",t.description)("counterClass","tag secondary")("numProyectos",t.numProyectos)},directives:[a],styles:[""]}),c)}],y=((r=function(){}).ngModuleDef=i.Ub({type:r}),r.ngInjectorDef=i.Tb({factory:function(n){return new(n||r)},imports:[[u.e.forChild(f)],u.e]}),r);u.e.forChild(f),e.d(t,"HomeModule",(function(){return l}));var d,l=((d=function(){}).ngModuleDef=i.Ub({type:d}),d.ngInjectorDef=i.Tb({factory:function(n){return new(n||d)},imports:[[s.c,y]]}),d)}}]);