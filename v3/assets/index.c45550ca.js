import{C as l}from"./index.f7946dd6.js";import{D as n}from"./function-call.be59c9c4.js";import{a as F}from"./use-translate.39547e32.js";import{z as _,D as g,r as x,o as A,a as B,e as o,w as u,B as e,d as E,F as h}from"./vue-libs.71fdcafc.js";import"./with-install.cc9696bc.js";import"./use-route.913efdd2.js";import"./index.5e447543.js";import"./mount-component.a2b5841e.js";import"./use-expose.877c018b.js";import"./constant.4d85ecb9.js";import"./interceptor.33314343.js";import"./index.760aa272.js";import"./use-touch.30351383.js";import"./index.92de2fdc.js";import"./utils.39620306.js";import"./index.c1e8d10d.js";import"./use-lazy-render.3dcfda58.js";import"./on-popup-reopen.d7054786.js";import"./index.0ff7945f.js";import"./index.64adedce.js";import"./index.b9a228ca.js";import"./index.975c4ad5.js";import"./useChildren.edf9a3d1.js";import"./useParent.e4fd6deb.js";const Y=_({setup(D){const m=n.Component,t=F({"zh-CN":{title:"\u6807\u9898",alert1:"\u63D0\u793A\u5F39\u7A97",alert2:"\u63D0\u793A\u5F39\u7A97\uFF08\u65E0\u6807\u9898\uFF09",confirm:"\u786E\u8BA4\u5F39\u7A97",beforeClose:"\u5F02\u6B65\u5173\u95ED",roundButton:"\u5706\u89D2\u6309\u94AE\u6837\u5F0F",componentCall:"\u7EC4\u4EF6\u8C03\u7528",content:"\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C"},"en-US":{title:"Title",alert1:"Alert",alert2:"Alert without title",confirm:"Confirm dialog",beforeClose:"Before Close",roundButton:"Round Button Style",componentCall:"Component Call"}}),r=g(!1),d="https://img.yzcdn.cn/vant/apple-3.jpg",p=()=>{n.alert({title:t("title"),message:t("content")})},f=()=>{n.alert({message:t("content")})},C=()=>{n.alert({theme:"round-button",title:t("title"),message:t("content")})},j=()=>{n.alert({theme:"round-button",message:t("content")})},k=()=>{n.confirm({title:t("title"),message:t("content")})},b=()=>{const a=i=>new Promise(s=>{setTimeout(()=>s(i==="confirm"),1e3)});n.confirm({title:t("title"),message:t("content"),beforeClose:a})};return(a,i)=>{const s=x("demo-block");return A(),B(h,null,[o(s,{card:"",title:e(t)("basicUsage")},{default:u(()=>[o(e(l),{"is-link":"",title:e(t)("alert1"),onClick:p},null,8,["title"]),o(e(l),{"is-link":"",title:e(t)("alert2"),onClick:f},null,8,["title"]),o(e(l),{"is-link":"",title:e(t)("confirm"),onClick:k},null,8,["title"])]),_:1},8,["title"]),o(s,{card:"",title:e(t)("roundButton")},{default:u(()=>[o(e(l),{"is-link":"",title:e(t)("alert1"),onClick:C},null,8,["title"]),o(e(l),{"is-link":"",title:e(t)("alert2"),onClick:j},null,8,["title"])]),_:1},8,["title"]),o(s,{card:"",title:e(t)("beforeClose")},{default:u(()=>[o(e(l),{"is-link":"",title:e(t)("beforeClose"),onClick:b},null,8,["title"])]),_:1},8,["title"]),o(s,{card:"",title:e(t)("componentCall")},{default:u(()=>[o(e(l),{"is-link":"",title:e(t)("componentCall"),onClick:i[0]||(i[0]=c=>r.value=!0)},null,8,["title"]),o(e(m),{show:r.value,"onUpdate:show":i[1]||(i[1]=c=>r.value=c),title:e(t)("title"),"show-cancel-button":"","lazy-render":!1},{default:u(()=>[E("img",{src:d})]),_:1},8,["show","title"])]),_:1},8,["title"])],64)}}});export{Y as default};