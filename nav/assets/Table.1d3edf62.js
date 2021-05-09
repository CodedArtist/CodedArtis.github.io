import{o as t,c as e,m as s,k as a,n as l,b as i,T as o,q as n,h as c,t as d,e as r,r as u,s as p,p as b,f as m,F as y,d as f,w as g}from"./index.6f9f6b42.js";import{_ as v}from"./Tag.708a0204.js";const h={props:{visible:{type:Boolean,required:!0}},data:()=>({}),methods:{close(){this.$emit("update:visible",!1)}}},k={class:"modal is-active"},x={class:"modal-content"};h.render=function(c,d,r,u,p,b){return t(),e(o,{name:"fade"},{default:s((()=>[a(i("div",k,[i("div",{class:"modal-background",onClick:d[1]||(d[1]=(...t)=>b.close&&b.close(...t))}),i(o,{name:"scale"},{default:s((()=>[a(i("div",x,[n(c.$slots,"default")],512),[[l,r.visible]])])),_:3}),i("button",{class:"modal-close is-large","aria-label":"close",onClick:d[2]||(d[2]=(...t)=>b.close&&b.close(...t))})],512),[[l,r.visible]])])),_:1})};const T={components:{Dialog:h},props:{visible:{type:Boolean,required:!0},title:{type:String},message:{type:String},cancelText:{type:String,default:"取消"},confirmText:{type:String,default:"确定"},cancelType:{type:String,default:""},confirmType:{type:String,default:"primary"}},data(){return{visible_:this.visible}},watch:{visible_(){this.$emit("update:visible",this.visible_)},visible(){this.visible_=this.visible}},methods:{close(){this.visible_=!1},confirm(){this.close(),this.$emit("confirm")}}},_={class:"box mx-5"},w={class:"block"},L={key:0,class:"title is-5"},$={class:"block"},B={class:"block has-text-right"};function C(){const t=p("axios"),e=u([]),s=async()=>{e.value=await t.get("/tag")};return{tagList:e,getAllTags:s,createTag:async e=>{await t.post("/tag",e),s()},updateTag:async e=>{await t.put("/tag",e),s()},deleteTag:async e=>{await t.delete(`/tag/${e}`),await s()}}}T.render=function(a,l,o,u,p,b){const m=c("Dialog");return t(),e(m,{visible:p.visible_,"onUpdate:visible":l[3]||(l[3]=t=>p.visible_=t)},{default:s((()=>[i("div",_,[i("section",w,[o.title?(t(),e("p",L,d(o.title),1)):r("",!0)]),i("section",$,[n(a.$slots,"default",{},(()=>[i("p",null,d(o.message),1)]))]),i("section",B,[i("button",{class:["button is-rounded mr-1 is-outlined",`is-${o.cancelType}`],onClick:l[1]||(l[1]=(...t)=>b.close&&b.close(...t))},d(o.cancelText),3),i("button",{class:["button is-rounded is-outlined",`is-${o.confirmType}`],onClick:l[2]||(l[2]=(...t)=>b.confirm&&b.confirm(...t))},d(o.confirmText),3)])])])),_:3},8,["visible"])};const S={components:{Tag:v},props:{value:{type:Array,required:!0},config:{type:Object,default:()=>({data:[],columnList:[{label:"",prop:""}]})},showIndex:{type:Boolean,default:!0},buttonList:{type:Array,default:[]},isBookmark:{type:Boolean,default:!1}},data:()=>({}),methods:{},created(){}},q=g();b("data-v-923d6f58");const I={class:"table is-fullwidth"},j={key:0},A={key:1,style:{"min-width":"12rem"}},D={key:2},z={key:0,class:"empty-tip"},F={key:1},O={key:0},U={key:1},E={class:"tags"},G={key:2,style:{"min-width":"150px"}};m();const H=q(((s,a,l,o,n,u)=>{var p;const b=c("Tag");return t(),e("table",I,[i("thead",null,[i("tr",null,[l.showIndex?(t(),e("th",j)):r("",!0),(t(!0),e(y,null,f(l.config.columnList,(s=>(t(),e("th",{key:s.label},d(s.label),1)))),128)),l.isBookmark?(t(),e("th",A,"关联标签")):r("",!0),l.buttonList.length?(t(),e("th",D,"操作")):r("",!0)])]),0===(null==(p=l.value)?void 0:p.length)?(t(),e("div",z,"暂无数据")):(t(),e("tbody",F,[(t(!0),e(y,null,f(l.value,((s,a)=>(t(),e("tr",{key:a},[l.showIndex?(t(),e("th",O,d(a+1),1)):r("",!0),(t(!0),e(y,null,f(l.config.columnList,(a=>(t(),e("td",{key:a.label},d(a.output?a.output(s):s[a.prop]),1)))),128)),l.isBookmark?(t(),e("td",U,[i("span",E,[(t(!0),e(y,null,f(s.tagList,(s=>(t(),e(b,{key:s,size:"normal",data:s},null,8,["data"])))),128))])])):r("",!0),l.buttonList.length?(t(),e("td",G,[(t(!0),e(y,null,f(l.buttonList,(a=>(t(),e("button",{class:"button is-small mr-1",key:a.text,onClick:t=>a.handler(s)},d(a.text),9,["onClick"])))),128))])):r("",!0)])))),128))]))])}));S.render=H,S.__scopeId="data-v-923d6f58";export{T as _,S as a,C as u};