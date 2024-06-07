import{e as T,h as E,as as I,k as P,l as _,aI as g,aJ as s,r as f,o as a,n as m,w as v,a1 as D,m as n,ar as q,aQ as V,A as h,c as y,a as L,L as F,M as O,I as A,a9 as S}from"./main-9a914193.js";import{_ as b}from"./dynamic-import-helper-be004503.js";const x={props:{field:{type:Object,required:!0},customFieldScope:{type:String,required:!0},index:{type:Number,required:!0},store:{type:Object,required:!0},storeProp:{type:String,required:!0}},setup(e){const t=e,{t:p}=T(),l={value:{required:E.withMessage(p("validation.required"),I(t.field.is_required))}},u=P(l,_(()=>t.field),{$scope:t.customFieldScope}),r=_(()=>t.field.type?g(()=>b(Object.assign({"./types/DateTimeType.vue":()=>s(()=>import("./DateTimeType-a00b12ef.js"),["assets/DateTimeType-a00b12ef.js","assets/main-9a914193.js","assets/main-60ce83b2.css"]),"./types/DateType.vue":()=>s(()=>import("./DateType-24d2e50a.js"),["assets/DateType-24d2e50a.js","assets/main-9a914193.js","assets/main-60ce83b2.css"]),"./types/DropdownType.vue":()=>s(()=>import("./DropdownType-047f656e.js"),["assets/DropdownType-047f656e.js","assets/main-9a914193.js","assets/main-60ce83b2.css"]),"./types/InputType.vue":()=>s(()=>import("./InputType-6278a9cc.js"),["assets/InputType-6278a9cc.js","assets/main-9a914193.js","assets/main-60ce83b2.css"]),"./types/NumberType.vue":()=>s(()=>import("./NumberType-cbbf3ff8.js"),["assets/NumberType-cbbf3ff8.js","assets/main-9a914193.js","assets/main-60ce83b2.css"]),"./types/PhoneType.vue":()=>s(()=>import("./PhoneType-85aeaa66.js"),["assets/PhoneType-85aeaa66.js","assets/main-9a914193.js","assets/main-60ce83b2.css"]),"./types/SwitchType.vue":()=>s(()=>import("./SwitchType-1767cd80.js"),["assets/SwitchType-1767cd80.js","assets/main-9a914193.js","assets/main-60ce83b2.css"]),"./types/TextAreaType.vue":()=>s(()=>import("./TextAreaType-847d45d3.js"),["assets/TextAreaType-847d45d3.js","assets/main-9a914193.js","assets/main-60ce83b2.css"]),"./types/TimeType.vue":()=>s(()=>import("./TimeType-f63b0433.js"),["assets/TimeType-f63b0433.js","assets/main-9a914193.js","assets/main-60ce83b2.css"]),"./types/UrlType.vue":()=>s(()=>import("./UrlType-df9aaea0.js"),["assets/UrlType-df9aaea0.js","assets/main-9a914193.js","assets/main-60ce83b2.css"])}),`./types/${t.field.type}Type.vue`)):!1);return(i,o)=>{const d=f("BaseInputGroup");return a(),m(d,{label:e.field.label,required:!!e.field.is_required,error:n(u).value.$error&&n(u).value.$errors[0].$message},{default:v(()=>[(a(),m(D(n(r)),{modelValue:e.field.value,"onUpdate:modelValue":o[0]||(o[0]=c=>e.field.value=c),options:e.field.options,invalid:n(u).value.$error,placeholder:e.field.placeholder},null,8,["modelValue","options","invalid","placeholder"]))]),_:1},8,["label","required","error"])}}},w={key:0},C={props:{store:{type:Object,required:!0},storeProp:{type:String,required:!0},isEdit:{type:Boolean,default:!1},type:{type:String,default:null},gridLayout:{type:String,default:"two-column"},isLoading:{type:Boolean,default:null},customFieldScope:{type:String,required:!0}},setup(e){const t=e,p=q();u();function l(){t.isEdit&&t.store[t.storeProp].fields.forEach(r=>{const i=t.store[t.storeProp].customFields.findIndex(o=>o.id===r.custom_field_id);if(i>-1){let o=r.default_answer;o&&r.custom_field.type==="DateTime"&&(o=S(r.default_answer,"YYYY-MM-DD HH:mm:ss").format("YYYY-MM-DD HH:mm")),t.store[t.storeProp].customFields[i]={...r,id:r.custom_field_id,value:o,label:r.custom_field.label,options:r.custom_field.options,is_required:r.custom_field.is_required,placeholder:r.custom_field.placeholder,order:r.custom_field.order}}})}async function u(){let i=(await p.fetchCustomFields({type:t.type,limit:"all"})).data.data;i.map(o=>o.value=o.default_answer),t.store[t.storeProp].customFields=V.sortBy(i,o=>o.order),l()}return h(()=>t.store[t.storeProp].fields,r=>{l()}),(r,i)=>{const o=f("BaseInputGrid");return e.store[e.storeProp]&&e.store[e.storeProp].customFields.length>0&&!e.isLoading?(a(),y("div",w,[L(o,{layout:e.gridLayout},{default:v(()=>[(a(!0),y(F,null,O(e.store[e.storeProp].customFields,(d,c)=>(a(),m(x,{key:d.id,"custom-field-scope":e.customFieldScope,store:e.store,"store-prop":e.storeProp,index:c,field:d},null,8,["custom-field-scope","store","store-prop","index","field"]))),128))]),_:1},8,["layout"])])):A("",!0)}}};export{C as _};