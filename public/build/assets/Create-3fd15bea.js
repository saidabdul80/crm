import{aE as Z,aF as ee,D as te,C as ne,e as ae,J as oe,f as se,K as le,g as y,l as c,h as V,i as ie,G as re,au as me,k as ue,O as ce,r as s,o as h,n as S,w as l,a as o,m as e,b as C,p as U,q as k,t as P,I as E,H as de,s as pe}from"./main-4279fdc3.js";import{_ as _e}from"./ItemUnitModal-e3c8859e.js";const ge=["onSubmit"],Be={setup(Ie){const n=Z(),T=ee(),v=te(),N=ne(),{t:d}=ae(),B=oe(),q=se(),G=le(),_=y(!1),b=y(N.selectedCompanySettings.tax_per_item);let i=y(!1);n.$reset(),H();const I=c({get:()=>n.currentItem.price/100,set:t=>{n.currentItem.price=Math.round(t*100)}}),$=c({get:()=>{var t,a;return(a=(t=n==null?void 0:n.currentItem)==null?void 0:t.taxes)==null?void 0:a.map(u=>{if(u)return{...u,tax_type_id:u.id,tax_name:u.name+" ("+u.percent+"%)"}})},set:t=>{n.currentItem.taxes=t}}),f=c(()=>B.name==="items.edit"),w=c(()=>f.value?d("items.edit_item"):d("items.new_item")),z=c(()=>T.taxTypes.map(t=>({...t,tax_type_id:t.id,tax_name:t.name+" ("+t.percent+"%)"}))),A=c(()=>b.value==="YES"),D=c(()=>({currentItem:{name:{required:V.withMessage(d("validation.required"),ie),minLength:V.withMessage(d("validation.name_min_length",{count:3}),re(3))},description:{maxLength:V.withMessage(d("validation.description_maxlength"),me(65e3))}}})),m=ue(D,n);async function L(){v.openModal({title:d("settings.customization.items.add_item_unit"),componentName:"ItemUnitModal",size:"sm"})}async function H(){if(i.value=!0,await n.fetchItemUnits({limit:"all"}),G.hasAbilities(ce.VIEW_TAX_TYPE)&&await T.fetchTaxTypes({limit:"all"}),f.value){let t=B.params.id;await n.fetchItem(t),n.currentItem.tax_per_item===1?b.value="YES":b.value="NO"}i.value=!1}async function R(){if(m.value.currentItem.$touch(),m.value.currentItem.$invalid)return!1;_.value=!0;try{let a={id:B.params.id,...n.currentItem};n.currentItem&&n.currentItem.taxes&&(a.taxes=n.currentItem.taxes.map(p=>({tax_type_id:p.tax_type_id,amount:I.value*p.percent,percent:p.percent,name:p.name,collective_tax:0}))),await(f.value?n.updateItem:n.addItem)(a),_.value=!1,q.push("/admin/items"),t()}catch{_.value=!1;return}function t(){v.closeModal(),setTimeout(()=>{n.resetCurrentItem(),v.$reset(),m.value.$reset()},300)}}return(t,a)=>{const u=s("BaseBreadcrumbItem"),p=s("BaseBreadcrumb"),Y=s("BasePageHeader"),F=s("BaseInput"),g=s("BaseInputGroup"),O=s("BaseMoney"),x=s("BaseIcon"),j=s("BaseSelectAction"),M=s("BaseMultiselect"),J=s("BaseTextarea"),K=s("BaseButton"),W=s("BaseInputGrid"),X=s("BaseCard"),Q=s("BasePage");return h(),S(Q,null,{default:l(()=>[o(Y,{title:e(w)},{default:l(()=>[o(p,null,{default:l(()=>[o(u,{title:t.$t("general.home"),to:"dashboard"},null,8,["title"]),o(u,{title:t.$t("items.item",2),to:"/admin/items"},null,8,["title"]),o(u,{title:e(w),to:"#",active:""},null,8,["title"])]),_:1})]),_:1},8,["title"]),o(_e),C("form",{class:"grid lg:grid-cols-2 mt-6",action:"submit",onSubmit:pe(R,["prevent"])},[o(X,{class:"w-full"},{default:l(()=>[o(W,{layout:"one-column"},{default:l(()=>[o(g,{label:t.$t("items.name"),"content-loading":e(i),required:"",error:e(m).currentItem.name.$error&&e(m).currentItem.name.$errors[0].$message},{default:l(()=>[o(F,{modelValue:e(n).currentItem.name,"onUpdate:modelValue":a[0]||(a[0]=r=>e(n).currentItem.name=r),"content-loading":e(i),invalid:e(m).currentItem.name.$error,onInput:a[1]||(a[1]=r=>e(m).currentItem.name.$touch())},null,8,["modelValue","content-loading","invalid"])]),_:1},8,["label","content-loading","error"]),o(g,{label:t.$t("items.price"),"content-loading":e(i)},{default:l(()=>[o(O,{modelValue:e(I),"onUpdate:modelValue":a[2]||(a[2]=r=>U(I)?I.value=r:null),"content-loading":e(i)},null,8,["modelValue","content-loading"])]),_:1},8,["label","content-loading"]),o(g,{"content-loading":e(i),label:t.$t("items.unit")},{default:l(()=>[o(M,{modelValue:e(n).currentItem.unit_id,"onUpdate:modelValue":a[3]||(a[3]=r=>e(n).currentItem.unit_id=r),"content-loading":e(i),label:"name",options:e(n).itemUnits,"value-prop":"id",placeholder:t.$t("items.select_a_unit"),searchable:"","track-by":"name"},{action:l(()=>[o(j,{onClick:L},{default:l(()=>[o(x,{name:"PlusIcon",class:"h-4 mr-2 -ml-2 text-center text-primary-400"}),k(" "+P(t.$t("settings.customization.items.add_item_unit")),1)]),_:1})]),_:1},8,["modelValue","content-loading","options","placeholder"])]),_:1},8,["content-loading","label"]),e(A)?(h(),S(g,{key:0,label:t.$t("items.taxes"),"content-loading":e(i)},{default:l(()=>[o(M,{modelValue:e($),"onUpdate:modelValue":a[4]||(a[4]=r=>U($)?$.value=r:null),"content-loading":e(i),options:e(z),mode:"tags",label:"tax_name",class:"w-full","value-prop":"id","can-deselect":!1,"can-clear":!1,searchable:"","track-by":"tax_name",object:""},null,8,["modelValue","content-loading","options"])]),_:1},8,["label","content-loading"])):E("",!0),o(g,{label:t.$t("items.description"),"content-loading":e(i),error:e(m).currentItem.description.$error&&e(m).currentItem.description.$errors[0].$message},{default:l(()=>[o(J,{modelValue:e(n).currentItem.description,"onUpdate:modelValue":a[5]||(a[5]=r=>e(n).currentItem.description=r),"content-loading":e(i),name:"description",row:2,rows:"2",onInput:a[6]||(a[6]=r=>e(m).currentItem.description.$touch())},null,8,["modelValue","content-loading"])]),_:1},8,["label","content-loading","error"]),C("div",null,[o(K,{"content-loading":e(i),type:"submit",loading:_.value},{left:l(r=>[_.value?E("",!0):(h(),S(x,{key:0,name:"SaveIcon",class:de(r.class)},null,8,["class"]))]),default:l(()=>[k(" "+P(e(f)?t.$t("items.update_item"):t.$t("items.save_item")),1)]),_:1},8,["content-loading","loading"])])]),_:1})]),_:1})],40,ge)]),_:1})}}};export{Be as default};