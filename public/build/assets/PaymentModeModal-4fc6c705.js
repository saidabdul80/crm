import{D as I,e as S,g as V,l as p,h as P,i as C,G as k,k as q,r as u,o as D,n as N,w as r,b as c,q as y,t as v,m as t,a as s,H as x,s as G}from"./main-4279fdc3.js";import{u as j}from"./payment-8ad825cd.js";const z={class:"flex justify-between w-full"},L=["onSubmit"],T={class:"p-4 sm:p-6"},A={class:"z-0 flex justify-end p-4 border-t border-gray-200 border-solid"},E={setup(H){const o=I(),e=j(),{t:M}=S(),l=V(!1),h=p(()=>({currentPaymentMode:{name:{required:P.withMessage(M("validation.required"),C),minLength:P.withMessage(M("validation.name_min_length",{count:3}),k(3))}}})),a=q(h,p(()=>e)),g=p(()=>o.active&&o.componentName==="PaymentModeModal");async function B(){if(a.value.currentPaymentMode.$touch(),a.value.currentPaymentMode.$invalid)return!0;try{const n=e.currentPaymentMode.id?e.updatePaymentMode:e.addPaymentMode;l.value=!0,await n(e.currentPaymentMode),l.value=!1,o.refreshData&&o.refreshData(),d()}catch{return l.value=!1,!0}}function d(){o.closeModal(),setTimeout(()=>{a.value.$reset(),e.currentPaymentMode={id:"",name:null}})}return(n,i)=>{const f=u("BaseIcon"),b=u("BaseInput"),$=u("BaseInputGroup"),_=u("BaseButton"),w=u("BaseModal");return D(),N(w,{show:t(g),onClose:d},{header:r(()=>[c("div",z,[y(v(t(o).title)+" ",1),s(f,{name:"XIcon",class:"w-6 h-6 text-gray-500 cursor-pointer",onClick:d})])]),default:r(()=>[c("form",{action:"",onSubmit:G(B,["prevent"])},[c("div",T,[s($,{label:n.$t("settings.payment_modes.mode_name"),error:t(a).currentPaymentMode.name.$error&&t(a).currentPaymentMode.name.$errors[0].$message,required:""},{default:r(()=>[s(b,{modelValue:t(e).currentPaymentMode.name,"onUpdate:modelValue":i[0]||(i[0]=m=>t(e).currentPaymentMode.name=m),invalid:t(a).currentPaymentMode.name.$error,onInput:i[1]||(i[1]=m=>t(a).currentPaymentMode.name.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"])]),c("div",A,[s(_,{variant:"primary-outline",class:"mr-3",type:"button",onClick:d},{default:r(()=>[y(v(n.$t("general.cancel")),1)]),_:1}),s(_,{loading:l.value,disabled:l.value,variant:"primary",type:"submit"},{left:r(m=>[s(f,{name:"SaveIcon",class:x(m.class)},null,8,["class"])]),default:r(()=>[y(" "+v(t(e).currentPaymentMode.id?n.$t("general.update"):n.$t("general.save")),1)]),_:1},8,["loading","disabled"])])],40,L)]),_:1},8,["show"])}}};export{E as _};