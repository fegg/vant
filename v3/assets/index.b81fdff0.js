import{c as e,u as t,a}from"./use-translate.91889477.js";import{w as s}from"./with-install.c9eedd0e.js";import{T as d}from"./index.f9150974.js";import{I as i}from"./index.d38d9435.js";import{C as o}from"./index.5d323f2c.js";import{a as l,R as n}from"./index.abb1e029.js";import{B as r}from"./index.60661b5f.js";import{z as m,e as u,D as c,r as p,o as f,c as j,w as x,B as b}from"./vue-libs.71fdcafc.js";import{T as g}from"./function-call.470433b8.js";import"./use-route.913efdd2.js";import"./useChildren.edf9a3d1.js";import"./index.a16d08bc.js";import"./Checker.c3378d57.js";import"./useParent.e4fd6deb.js";import"./constant.4d85ecb9.js";import"./index.6e9dbec3.js";import"./mount-component.d3f8f39a.js";import"./use-expose.5ea79906.js";import"./index.b58615a3.js";import"./interceptor.fd551ac3.js";import"./use-touch.30351383.js";import"./index.94f7437a.js";import"./utils.b0356070.js";import"./index.9e2e36ca.js";import"./use-lazy-render.3dcfda58.js";import"./on-popup-reopen.d7054786.js";import"./index.38991bce.js";const[T,k,v]=e("contact-list");const h=s(m({name:T,props:{list:Array,addText:String,modelValue:t,defaultTagText:String},emits:["add","edit","select","update:modelValue"],setup(e,{emit:t}){const a=(a,s)=>u(o,{key:a.id,isLink:!0,center:!0,class:k("item"),valueClass:k("item-value"),onClick:()=>{t("update:modelValue",a.id),t("select",a,s)}},{icon:()=>u(i,{name:"edit",class:k("edit"),onClick:e=>{e.stopPropagation(),t("edit",a,s)}},null),value:()=>{const t=[`${a.name}，${a.tel}`];return a.isDefault&&e.defaultTagText&&t.push(u(d,{type:"danger",round:!0,class:k("item-tag")},{default:()=>[e.defaultTagText]})),t},"right-icon":()=>u(n,{class:k("radio"),name:a.id,iconSize:16},null)});return()=>u("div",{class:k()},[u(l,{modelValue:e.modelValue,class:k("group")},{default:()=>[e.list&&e.list.map(a)]}),u("div",{class:[k("bottom"),"van-safe-area-bottom"]},[u(r,{round:!0,block:!0,type:"danger",class:k("add"),text:e.addText||v("addText"),onClick:()=>t("add")},null)])])}}));const C=m({setup(e){const t=a({"zh-CN":{add:"新增",edit:"编辑",list:[{id:"1",name:"张三",tel:"13000000000",isDefault:!0},{id:"2",name:"李四",tel:"1310000000"}],select:"选择",defaultTagText:"默认"},"en-US":{add:"Add",edit:"Edit",list:[{id:"1",name:"John Snow",tel:"13000000000",isDefault:!0},{id:"2",name:"Ned Stark",tel:"1310000000"}],select:"Select",defaultTagText:"default"}}),s=c("1"),d=()=>{g(t("add"))},i=e=>{g(t("edit")+e.id)},o=e=>{g(t("select")+e.id)};return(e,a)=>{const l=p("demo-block");return f(),j(l,{title:b(t)("basicUsage")},{default:x((()=>[u(b(h),{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=e=>s.value=e),list:b(t)("list"),"default-tag-text":b(t)("defaultTagText"),onAdd:d,onEdit:i,onSelect:o},null,8,["modelValue","list","default-tag-text"])])),_:1},8,["title"])}}});export{C as default};