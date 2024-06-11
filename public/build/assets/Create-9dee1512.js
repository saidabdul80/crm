import{J as se,f as ue,u as ie,a5 as me,ar as ce,C as de,D as ye,aB as pe,E as _e,a3 as fe,e as ve,g as S,F as Pe,l as I,h as $,i as q,aV as ge,as as be,V as Be,k as $e,al as he,aO as Ie,r as u,o as w,c as Ve,a as r,w as l,b as h,m as e,n as F,H as x,I as U,q as M,t as P,p as Ce,s as Se,L as qe}from"./main-4279fdc3.js";import{_ as we}from"./ExchangeRateConverter-950d506d.js";import{u as Me}from"./payment-8ad825cd.js";import{_ as ke}from"./SelectNotePopup-ce699f43.js";import{_ as Fe}from"./CreateCustomFields-b94149bb.js";import{_ as Ue}from"./PaymentModeModal-4fc6c705.js";import"./exchange-rate-2c17694f.js";import"./NoteModal-cb369dec.js";import"./dynamic-import-helper-be004503.js";const Ne=["onSubmit"],De={class:"absolute left-3.5"},Le={class:"relative w-full"},Ee={class:"relative mt-6"},Ae={class:"z-20 float-right text-sm font-semibold leading-5 text-primary-400"},xe={class:"mb-4 text-sm font-medium text-gray-800"},We={setup(Ge){const c=se(),G=ue(),t=Me();ie();const V=me();ce(),de();const R=ye(),N=pe();_e();const D=fe("utils"),{t:y}=ve();let g=S(!1),C=S(!1),_=S([]);const p=S(null),L="newEstimate",T=Pe(["customer","company","customerCustom","payment","paymentCustom"]),B=I({get:()=>t.currentPayment.amount,set:a=>{t.currentPayment.amount=a}}),s=I(()=>t.isFetchingInitialData),d=I(()=>c.name==="payments.edit"),E=I(()=>d.value?y("payments.edit_payment"):y("payments.new_payment")),H=I(()=>({currentPayment:{customer_id:{required:$.withMessage(y("validation.required"),q)},payment_date:{required:$.withMessage(y("validation.required"),q)},amount:{required:$.withMessage(y("validation.required"),q),between:$.withMessage(y("validation.payment_greater_than_due_amount"),ge(0,t.currentPayment.maxPayableAmount))},exchange_rate:{required:be(function(){return $.withMessage(y("validation.required"),q),t.showExchangeRate}),decimal:$.withMessage(y("validation.valid_exchange_rate"),Be)}}})),i=$e(H,t,{$scope:L});he(()=>{t.currentPayment.customer_id&&K(t.currentPayment.customer_id),c.query.customer&&(t.currentPayment.customer_id=c.query.customer)}),t.resetCurrentPayment(),c.query.customer&&(t.currentPayment.customer_id=c.query.customer),t.fetchPaymentInitialData(d.value),c.params.id&&!d.value&&O();async function j(){R.openModal({title:y("settings.payment_modes.add_payment_mode"),componentName:"PaymentModeModal"})}function z(a){t.currentPayment.notes=""+a.notes}async function O(){var n;let a=await N.fetchInvoice((n=c==null?void 0:c.params)==null?void 0:n.id);t.currentPayment.customer_id=a.data.data.customer.id,t.currentPayment.invoice_id=a.data.data.id}async function J(a){a&&(p.value=_.value.find(n=>n.id===a),t.currentPayment.request_amount=p.value,B.value=p.value.items.reduce((n,m)=>n+m.quantity,0),t.currentPayment.maxPayableAmount=p.value.items.reduce((n,m)=>n+m.quantity,0))}function K(a){if(a){let n={customer_id:a,status:"DUE",limit:"all"};d.value&&(n.status=""),C.value=!0,Promise.all([N.fetchInvoices(n),V.fetchCustomer(a)]).then(async([m,f])=>{m&&(_.value=[...m.data.data]),f&&f.data&&(t.currentPayment.selectedCustomer=f.data.data,t.currentPayment.customer=f.data.data,t.currentPayment.currency=f.data.data.currency,d.value&&!V.editCustomer&&t.currentPayment.customer_id&&(V.editCustomer=f.data.data)),t.currentPayment.invoice_id&&(p.value=_.value.find(v=>v.id===t.currentPayment.invoice_id),t.currentPayment.maxPayableAmount=p.value.due_amount+t.currentPayment.amount,B.value===0&&(B.value=p.value.total)),d.value&&(_.value=_.value.filter(v=>v.due_amount>0||v.id==t.currentPayment.invoice_id)),C.value=!1}).catch(m=>{C.value=!1,console.error(m,"error")})}}Ie(()=>{t.resetCurrentPayment(),_.value=[],V.editCustomer=null});async function Q(){if(i.value.$touch(),i.value.$invalid)return!1;g.value=!0;let a={...t.currentPayment},n=null;try{n=await(d.value?t.updatePayment:t.addPayment)(a),G.push(`/admin/payments/${n.data.data.id}/view`)}catch{g.value=!1}}function W(a){let n={userId:a};c.params.id&&(n.model_id=c.params.id),t.currentPayment.invoice_id=p.value=null,t.currentPayment.amount=0,_.value=[],t.getNextNumber(n,!0)}return(a,n)=>{const m=u("BaseBreadcrumbItem"),f=u("BaseBreadcrumb"),v=u("BaseIcon"),A=u("BaseButton"),X=u("BasePageHeader"),Y=u("BaseDatePicker"),b=u("BaseInputGroup"),Z=u("BaseInput"),ee=u("BaseCustomerSelectInput"),k=u("BaseMultiselect"),te=u("BaseMoney"),ne=u("BaseSelectAction"),ae=u("BaseInputGrid"),oe=u("BaseCustomInput"),re=u("BaseCard"),le=u("BasePage");return w(),Ve(qe,null,[r(Ue),r(le,{class:"relative payment-create"},{default:l(()=>[h("form",{action:"",onSubmit:Se(Q,["prevent"])},[r(X,{title:e(E),class:"mb-5"},{actions:l(()=>[r(A,{loading:e(g),disabled:e(g),variant:"primary",type:"submit",class:"hidden sm:flex"},{left:l(o=>[e(g)?U("",!0):(w(),F(v,{key:0,name:"SaveIcon",class:x(o.class)},null,8,["class"]))]),default:l(()=>[M(" "+P(e(d)?a.$t("payments.update_payment"):a.$t("payments.save_payment")),1)]),_:1},8,["loading","disabled"])]),default:l(()=>[r(f,null,{default:l(()=>[r(m,{title:a.$t("general.home"),to:"/admin/dashboard"},null,8,["title"]),r(m,{title:a.$t("payments.payment",2),to:"/admin/payments"},null,8,["title"]),r(m,{title:e(E),to:"#",active:""},null,8,["title"])]),_:1})]),_:1},8,["title"]),r(re,null,{default:l(()=>[r(ae,null,{default:l(()=>[r(b,{label:a.$t("payments.date"),"content-loading":e(s),required:"",error:e(i).currentPayment.payment_date.$error&&e(i).currentPayment.payment_date.$errors[0].$message},{default:l(()=>[r(Y,{modelValue:e(t).currentPayment.payment_date,"onUpdate:modelValue":[n[0]||(n[0]=o=>e(t).currentPayment.payment_date=o),n[1]||(n[1]=o=>e(i).currentPayment.payment_date.$touch())],"content-loading":e(s),"calendar-button":!0,"calendar-button-icon":"calendar",invalid:e(i).currentPayment.payment_date.$error},null,8,["modelValue","content-loading","invalid"])]),_:1},8,["label","content-loading","error"]),r(b,{label:a.$t("payments.payment_number"),"content-loading":e(s),required:""},{default:l(()=>[r(Z,{modelValue:e(t).currentPayment.payment_number,"onUpdate:modelValue":n[2]||(n[2]=o=>e(t).currentPayment.payment_number=o),"content-loading":e(s)},null,8,["modelValue","content-loading"])]),_:1},8,["label","content-loading"]),r(b,{label:a.$t("payments.customer"),error:e(i).currentPayment.customer_id.$error&&e(i).currentPayment.customer_id.$errors[0].$message,"content-loading":e(s),required:""},{default:l(()=>[e(s)?U("",!0):(w(),F(ee,{key:0,modelValue:e(t).currentPayment.customer_id,"onUpdate:modelValue":[n[3]||(n[3]=o=>e(t).currentPayment.customer_id=o),n[4]||(n[4]=o=>W(e(t).currentPayment.customer_id))],"content-loading":e(s),invalid:e(i).currentPayment.customer_id.$error,placeholder:a.$t("customers.select_a_customer"),"show-action":""},null,8,["modelValue","content-loading","invalid","placeholder"]))]),_:1},8,["label","error","content-loading"]),r(b,{"content-loading":e(s),label:a.$t("payments.invoice"),"help-text":p.value?`Due Amount: ${e(t).currentPayment.maxPayableAmount}`:""},{default:l(()=>[r(k,{modelValue:e(t).currentPayment.invoice_id,"onUpdate:modelValue":n[5]||(n[5]=o=>e(t).currentPayment.invoice_id=o),"content-loading":e(s),"value-prop":"id","track-by":"invoice_number",label:"invoice_number",options:e(_),loading:e(C),placeholder:a.$t("invoices.select_invoice"),onSelect:J},{singlelabel:l(({value:o})=>[h("div",De,P(o.invoice_number)+" ("+P(e(D).formatMoney(o.total*100,o.from_currency))+") ",1)]),option:l(({option:o})=>[M(P(o.invoice_number)+" ("+P(e(D).formatMoney(o.total*100,o.from_currency))+") ",1)]),_:1},8,["modelValue","content-loading","options","loading","placeholder"])]),_:1},8,["content-loading","label","help-text"]),r(b,{label:a.$t("payments.amount"),"content-loading":e(s),error:e(i).currentPayment.amount.$error&&e(i).currentPayment.amount.$errors[0].$message,required:""},{default:l(()=>[h("div",Le,[r(te,{key:e(t).currentPayment.currency,modelValue:e(B),"onUpdate:modelValue":[n[6]||(n[6]=o=>Ce(B)?B.value=o:null),n[7]||(n[7]=o=>e(i).currentPayment.amount.$touch())],currency:e(t).currentPayment.currency,"content-loading":e(s),invalid:e(i).currentPayment.amount.$error},null,8,["modelValue","currency","content-loading","invalid"])])]),_:1},8,["label","content-loading","error"]),r(b,{"content-loading":e(s),label:a.$t("payments.payment_mode")},{default:l(()=>[r(k,{modelValue:e(t).currentPayment.payment_method_id,"onUpdate:modelValue":n[8]||(n[8]=o=>e(t).currentPayment.payment_method_id=o),"content-loading":e(s),label:"name","value-prop":"id","track-by":"name",options:e(t).paymentModes,placeholder:a.$t("payments.select_payment_mode"),searchable:""},{action:l(()=>[r(ne,{onClick:j},{default:l(()=>[r(v,{name:"PlusIcon",class:"h-4 mr-2 -ml-2 text-center text-primary-400"}),M(" "+P(a.$t("settings.payment_modes.add_payment_mode")),1)]),_:1})]),_:1},8,["modelValue","content-loading","options","placeholder"])]),_:1},8,["content-loading","label"]),r(b,{"content-loading":e(s),label:"Transaction Fulfulment"},{default:l(()=>[r(k,{modelValue:e(t).currentPayment.fulfilment,"onUpdate:modelValue":n[9]||(n[9]=o=>e(t).currentPayment.fulfilment=o),"content-loading":e(s),label:"Fulfilment",options:["NOT FULFILL","FULFILLED"],placeholder:"Fulfilment",searchable:""},null,8,["modelValue","content-loading"])]),_:1},8,["content-loading"]),r(we,{store:e(t),"store-prop":"currentPayment",v:e(i).currentPayment,"is-loading":e(s),"is-edit":e(d),isPayment:!0,"customer-currency":e(t).currentPayment.currency_id},null,8,["store","v","is-loading","is-edit","customer-currency"])]),_:1}),r(Fe,{type:"Payment","is-edit":e(d),"is-loading":e(s),store:e(t),"store-prop":"currentPayment","custom-field-scope":L,class:"mt-6"},null,8,["is-edit","is-loading","store"]),h("div",Ee,[h("div",Ae,[r(ke,{type:"Payment",onSelect:z})]),h("label",xe,P(a.$t("estimates.notes")),1),r(oe,{modelValue:e(t).currentPayment.notes,"onUpdate:modelValue":n[10]||(n[10]=o=>e(t).currentPayment.notes=o),"content-loading":e(s),fields:e(T),class:"mt-1"},null,8,["modelValue","content-loading","fields"])]),r(A,{loading:e(g),"content-loading":e(s),variant:"primary",type:"submit",class:"flex justify-center w-full mt-4 sm:hidden md:hidden"},{left:l(o=>[e(g)?U("",!0):(w(),F(v,{key:0,name:"SaveIcon",class:x(o.class)},null,8,["class"]))]),default:l(()=>[M(" "+P(e(d)?a.$t("payments.update_payment"):a.$t("payments.save_payment")),1)]),_:1},8,["loading","content-loading"])]),_:1})],40,Ne)]),_:1})],64)}}};export{We as default};