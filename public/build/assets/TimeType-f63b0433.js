import{a9 as n,l as r,r as p,o as d,n as c,m as i,p as f}from"./main-9a914193.js";const k={props:{modelValue:{type:[String,Date,Object],default:n().format("YYYY-MM-DD")}},emits:["update:modelValue"],setup(t,{emit:l}){const s=t,e=r({get:()=>s.modelValue,set:o=>{l("update:modelValue",o)}});return(o,a)=>{const u=p("BaseTimePicker");return d(),c(u,{modelValue:i(e),"onUpdate:modelValue":a[0]||(a[0]=m=>f(e)?e.value=m:null)},null,8,["modelValue"])}}};export{k as default};
