import{D as k,e as q,g as D,l as g,h as y,i as G,G as N,au as L,k as T,r as i,o as B,n as b,w as r,b as m,q as C,t as f,m as e,a as n,H as j,I as z,s as E}from"./main-4279fdc3.js";import{u as U}from"./category-51533fd0.js";const A={class:"flex justify-between w-full"},H=["onSubmit"],X={class:"p-8 sm:p-6"},F={class:"z-0 flex justify-end p-4 border-t border-gray-200 border-solid border-modal-bg"},P={setup(J){const t=U(),u=k(),{t:p}=q();let c=D(!1);const h=g(()=>({currentCategory:{name:{required:y.withMessage(p("validation.required"),G),minLength:y.withMessage(p("validation.name_min_length",{count:3}),N(3))},description:{maxLength:y.withMessage(p("validation.description_maxlength",{count:255}),L(255))}}})),a=T(h,g(()=>t)),I=g(()=>u.active&&u.componentName==="CategoryModal");async function w(){if(a.value.currentCategory.$touch(),a.value.currentCategory.$invalid)return!0;const s=t.isEdit?t.updateCategory:t.addCategory;c.value=!0,await s(t.currentCategory),c.value=!1,u.refreshData&&u.refreshData(),d()}function d(){u.closeModal(),setTimeout(()=>{t.$reset(),a.value.$reset()},300)}return(s,o)=>{const v=i("BaseIcon"),x=i("BaseInput"),_=i("BaseInputGroup"),V=i("BaseTextarea"),M=i("BaseInputGrid"),$=i("BaseButton"),S=i("BaseModal");return B(),b(S,{show:e(I),onClose:d},{header:r(()=>[m("div",A,[C(f(e(u).title)+" ",1),n(v,{name:"XIcon",class:"w-6 h-6 text-gray-500 cursor-pointer",onClick:d})])]),default:r(()=>[m("form",{action:"",onSubmit:E(w,["prevent"])},[m("div",X,[n(M,{layout:"one-column"},{default:r(()=>[n(_,{label:s.$t("expenses.category"),error:e(a).currentCategory.name.$error&&e(a).currentCategory.name.$errors[0].$message,required:""},{default:r(()=>[n(x,{modelValue:e(t).currentCategory.name,"onUpdate:modelValue":o[0]||(o[0]=l=>e(t).currentCategory.name=l),invalid:e(a).currentCategory.name.$error,type:"text",onInput:o[1]||(o[1]=l=>e(a).currentCategory.name.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"]),n(_,{label:s.$t("expenses.description"),error:e(a).currentCategory.description.$error&&e(a).currentCategory.description.$errors[0].$message},{default:r(()=>[n(V,{modelValue:e(t).currentCategory.description,"onUpdate:modelValue":o[2]||(o[2]=l=>e(t).currentCategory.description=l),rows:"4",cols:"50",onInput:o[3]||(o[3]=l=>e(a).currentCategory.description.$touch())},null,8,["modelValue"])]),_:1},8,["label","error"])]),_:1})]),m("div",F,[n($,{type:"button",variant:"primary-outline",class:"mr-3 text-sm",onClick:d},{default:r(()=>[C(f(s.$t("general.cancel")),1)]),_:1}),n($,{loading:e(c),disabled:e(c),variant:"primary",type:"submit"},{left:r(l=>[e(c)?z("",!0):(B(),b(v,{key:0,name:"SaveIcon",class:j(l.class)},null,8,["class"]))]),default:r(()=>[C(" "+f(e(t).isEdit?s.$t("general.update"):s.$t("general.save")),1)]),_:1},8,["loading","disabled"])])],40,H)]),_:1},8,["show"])}}};export{P as _};