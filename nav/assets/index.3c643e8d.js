import{_ as a,a as e}from"./BookmarkBlock.209acab4.js";import{r as s,e as t,f as o,F as n,m as l,t as i,p as c,b as r,o as u,n as k}from"./vendor.4ef9e6b8.js";c("data-v-5e0bcaa8");const d={class:"tag-box"},v={class:"tip"},m={class:"container bookmark-box"};r();const g={expose:[],setup(c){const r=k(),g=s(""),p=s([]);function b(a){g.value=`“${a.name}”关联的书签`,p.value=r.getters.getBookmarksByTagId(a.id)}function f(){g.value="所有书签",p.value=r.getters.getBookmarks}return f(),(s,c)=>(u(),t("div",null,[o("div",d,[(u(!0),t(n,null,l(s.$store.getters.getTags,((e,s)=>(u(),t(a,{size:"medium",showBoxShadow:"",key:s,entity:e,onClick:a=>b(e)},null,8,["entity","onClick"])))),128))]),o("div",v,[o("span",{onClick:f},i(g.value),1)]),o("div",m,[(u(!0),t(n,null,l(p.value,(a=>(u(),t(e,{key:a.id,onClickTag:b,entity:a},null,8,["entity"])))),128))])]))},__scopeId:"data-v-5e0bcaa8"};export default g;
