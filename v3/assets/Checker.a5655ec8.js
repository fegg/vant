import{e as C,t as g,g as P,u as f,m as S,n as z}from"./use-translate.39547e32.js";import{I as j}from"./index.5e447543.js";import{z as x,D as y,C as r,e as t}from"./vue-libs.71fdcafc.js";const D={name:f,shape:S("round"),disabled:Boolean,iconSize:z,modelValue:f,checkedColor:String,labelPosition:String,labelDisabled:Boolean};var V=x({props:C({},D,{role:String,parent:Object,checked:Boolean,bindGroup:g,bem:{type:Function,required:!0}}),emits:["click","toggle"],setup(e,{emit:s,slots:o}){const u=y(),l=n=>{if(e.parent&&e.bindGroup)return e.parent.props[n]},a=r(()=>l("disabled")||e.disabled),k=r(()=>l("direction")),m=r(()=>{const n=e.checkedColor||l("checkedColor");if(n&&e.checked&&!a.value)return{borderColor:n,backgroundColor:n}}),h=n=>{const{target:i}=n,c=u.value,d=c===i||(c==null?void 0:c.contains(i));!a.value&&(d||!e.labelDisabled)&&s("toggle"),s("click",n)},v=()=>{const{bem:n,shape:i,checked:c}=e,d=e.iconSize||l("iconSize");return t("div",{ref:u,class:n("icon",[i,{disabled:a.value,checked:c}]),style:{fontSize:P(d)}},[o.icon?o.icon({checked:c,disabled:a.value}):t(j,{name:"success",style:m.value},null)])},b=()=>{if(o.default)return t("span",{class:e.bem("label",[e.labelPosition,{disabled:a.value}])},[o.default()])};return()=>{const n=[v()];return e.labelPosition==="left"?n.unshift(b()):n.push(b()),t("div",{role:e.role,class:e.bem([{disabled:a.value,"label-disabled":e.labelDisabled},k.value]),tabindex:a.value?-1:0,"aria-checked":e.checked,onClick:h},[n])}}});export{V as C,D as c};