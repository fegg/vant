import{l as ee,w as te,x as ne,y as ae,z as re,d as ie,c as le,e as oe,n as w,m as v,u as se,g as ce,s as ue,i as S,A as de,p as E,B as fe}from"./use-translate.39547e32.js";import{w as ge}from"./with-install.cc9696bc.js";import{F as me}from"./constant.4d85ecb9.js";import{c as he,C as be}from"./index.f7946dd6.js";import{u as ye}from"./use-expose.877c018b.js";import{I as V}from"./index.5e447543.js";import{C as ve}from"./index.a16d08bc.js";import{z as xe,E as Ce,D as A,C as x,L as Ie,x as we,q as B,G as Se,e as o,I as Ve,h as ke}from"./vue-libs.71fdcafc.js";import{u as Me}from"./useParent.e4fd6deb.js";function Te(e){return Array.isArray(e)?!e.length:e===0?!1:!e}function Fe(e,r){return!(r.required&&Te(e)||r.pattern&&!r.pattern.test(String(e)))}function Pe(e,r){return new Promise(l=>{const n=r.validator(e,r);if(ee(n))return n.then(l);l(n)})}function L(e,r){const{message:l}=r;return te(l)?l(e,r):l||""}function Ee(e){e.target.composing=!0}function j(e){const{target:r}=e;r.composing&&(r.composing=!1,re(r,"input"))}function Ae(e,r){const l=ne();e.style.height="auto";let n=e.scrollHeight;if(ie(r)){const{maxHeight:d,minHeight:g}=r;d!==void 0&&(n=Math.min(n,d)),g!==void 0&&(n=Math.max(n,g))}n&&(e.style.height=`${n}px`,ae(l))}function Be(e){return e==="number"?{type:"text",inputmode:"decimal"}:e==="digit"?{type:"tel",inputmode:"numeric"}:{type:e}}const[Le,c]=le("field"),je={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:w,formatter:Function,clearIcon:v("clear"),modelValue:ue(""),inputAlign:String,placeholder:String,autocomplete:String,errorMessage:String,clearTrigger:v("focus"),formatTrigger:v("onChange"),error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null}},Re=oe({},he,je,{rows:w,type:v("text"),rules:Array,autosize:[Boolean,Object],labelWidth:w,labelClass:se,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}});var ze=xe({name:Le,props:Re,emits:["blur","focus","clear","keypress","click-input","click-left-icon","click-right-icon","update:modelValue"],setup(e,{emit:r,slots:l}){const n=Ce({focused:!1,validateFailed:!1,validateMessage:""}),d=A(),g=A(),{parent:u}=Me(me),m=()=>{var t;return String((t=e.modelValue)!=null?t:"")},f=t=>{if(S(e[t]))return e[t];if(u&&S(u.props[t]))return u.props[t]},R=x(()=>{const t=f("readonly");if(e.clearable&&!t){const a=m()!=="",i=e.clearTrigger==="always"||e.clearTrigger==="focus"&&n.focused;return a&&i}return!1}),k=x(()=>g.value&&l.input?g.value():e.modelValue),z=t=>t.reduce((a,i)=>a.then(()=>{if(n.validateFailed)return;let{value:s}=k;if(i.formatter&&(s=i.formatter(s,i)),!Fe(s,i)){n.validateFailed=!0,n.validateMessage=L(s,i);return}if(i.validator)return Pe(s,i).then(y=>{y&&typeof y=="string"?(n.validateFailed=!0,n.validateMessage=y):y===!1&&(n.validateFailed=!0,n.validateMessage=L(s,i))})}),Promise.resolve()),h=()=>{n.validateFailed&&(n.validateFailed=!1,n.validateMessage="")},M=(t=e.rules)=>new Promise(a=>{h(),t?z(t).then(()=>{n.validateFailed?a({name:e.name,message:n.validateMessage}):a()}):a()}),C=t=>{if(u&&e.rules){const a=u.props.validateTrigger===t,i=e.rules.filter(s=>s.trigger?s.trigger===t:a);i.length&&M(i)}},N=t=>{const{maxlength:a}=e;if(S(a)&&t.length>a){const i=m();return i&&i.length===+a?i:t.slice(0,+a)}return t},b=(t,a="onChange")=>{if(t=N(t),e.type==="number"||e.type==="digit"){const i=e.type==="number";t=de(t,i,i)}e.formatter&&a===e.formatTrigger&&(t=e.formatter(t)),d.value&&d.value.value!==t&&(d.value.value=t),t!==e.modelValue&&r("update:modelValue",t)},O=t=>{t.target.composing||b(t.target.value)},I=()=>{var t;return(t=d.value)==null?void 0:t.blur()},D=()=>{var t;return(t=d.value)==null?void 0:t.focus()},W=t=>{n.focused=!0,r("focus",t),f("readonly")&&I()},_=t=>{n.focused=!1,b(m(),"onBlur"),r("blur",t),C("onBlur"),fe()},T=t=>r("click-input",t),q=t=>r("click-left-icon",t),H=t=>r("click-right-icon",t),K=t=>{E(t),r("update:modelValue",""),r("clear",t)},F=x(()=>{if(typeof e.error=="boolean")return e.error;if(u&&u.props.showError&&n.validateFailed)return!0}),U=x(()=>{const t=f("labelWidth");if(t)return{width:ce(t)}}),Y=t=>{const a=13;t.keyCode===a&&(!(u&&u.props.submitOnEnter)&&e.type!=="textarea"&&E(t),e.type==="search"&&I()),r("keypress",t)},P=()=>{const t=d.value;e.type==="textarea"&&e.autosize&&t&&Ae(t,e.autosize)},$=()=>{const t=c("control",[f("inputAlign"),{error:F.value,custom:!!l.input,"min-height":e.type==="textarea"&&!e.autosize}]);if(l.input)return o("div",{class:t,onClick:T},[l.input()]);const a={id:e.id,ref:d,name:e.name,rows:e.rows!==void 0?+e.rows:void 0,class:t,value:e.modelValue,disabled:f("disabled"),readonly:f("readonly"),autofocus:e.autofocus,placeholder:e.placeholder,autocomplete:e.autocomplete,onBlur:_,onFocus:W,onInput:O,onClick:T,onChange:j,onKeypress:Y,onCompositionend:j,onCompositionstart:Ee};return e.type==="textarea"?o("textarea",a,null):o("input",Ve(Be(e.type),a),null)},G=()=>{const t=l["left-icon"];if(e.leftIcon||t)return o("div",{class:c("left-icon"),onClick:q},[t?t():o(V,{name:e.leftIcon,classPrefix:e.iconPrefix},null)])},J=()=>{const t=l["right-icon"];if(e.rightIcon||t)return o("div",{class:c("right-icon"),onClick:H},[t?t():o(V,{name:e.rightIcon,classPrefix:e.iconPrefix},null)])},Q=()=>{if(e.showWordLimit&&e.maxlength){const t=m().length;return o("div",{class:c("word-limit")},[o("span",{class:c("word-num")},[t]),ke("/"),e.maxlength])}},X=()=>{if(u&&u.props.showErrorMessage===!1)return;const t=e.errorMessage||n.validateMessage;if(t){const a=f("errorMessageAlign");return o("div",{class:c("error-message",a)},[t])}},Z=()=>{const t=f("colon")?":":"";if(l.label)return[l.label(),t];if(e.label)return o("label",{for:e.id},[e.label+t])},p=()=>[o("div",{class:c("body")},[$(),R.value&&o(V,{name:e.clearIcon,class:c("clear"),onTouchstart:K},null),J(),l.button&&o("div",{class:c("button")},[l.button()])]),Q(),X()];return ye({blur:I,focus:D,validate:M,formValue:k,resetValidation:h}),Ie(ve,{customValue:g,resetValidation:h,validateWithTrigger:C}),we(()=>e.modelValue,()=>{b(m()),h(),C("onChange"),B(P)}),Se(()=>{b(m(),e.formatTrigger),B(P)}),()=>{const t=f("disabled"),a=f("labelAlign"),i=Z(),s=G();return o(be,{size:e.size,icon:e.leftIcon,class:c({error:F.value,disabled:t,[`label-${a}`]:a}),center:e.center,border:e.border,isLink:e.isLink,clickable:e.clickable,titleStyle:U.value,valueClass:c("value"),titleClass:[c("label",[a,{required:e.required}]),e.labelClass],arrowDirection:e.arrowDirection},{icon:s?()=>s:null,title:i?()=>i:null,value:p,extra:l.extra})}}});const Ye=ge(ze);export{Ye as F,je as f};