import{e as K,a3 as Q,J as Y,g as b,F as Z,l as I,a7 as ee,r as s,o as B,n as y,w as a,a as t,aa as k,ab as V,m as n,H as x,q as i,t as u,I as te,b as E}from"./main-9a914193.js";import{u as ae}from"./invoice-780af482.js";import oe from"./BaseTable-96948ec9.js";import{u as se}from"./global-52f77422.js";import{_ as ne}from"./MoonwalkerIcon-47cc393c.js";import"./auth-b3031c6e.js";const le=E("div",{class:"hidden w-8 h-0 mx-4 border border-gray-400 border-solid xl:block",style:{"margin-top":"1.5rem"}},null,-1),re={class:"relative table-container"},fe={setup(ce){const{t:d}=K();Q("utils"),Y();const $=b(null);let g=b(!0),m=b(!1);const P=b(["DRAFT","DUE","SENT","VIEWED","COMPLETED"]),o=Z({status:"",from_date:"",to_date:"",invoice_number:""}),p=ae(),h=se();I(()=>h.currency);const H=I(()=>[{key:"invoice_date",label:d("invoices.date"),thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"invoice_number",label:d("invoices.number")},{key:"status",label:d("invoices.status")},{key:"paid_status",label:d("invoices.paid_status")},{key:"due_amount",label:d("dashboard.recent_invoices_card.amount_due")},{key:"actions",thClass:"text-right",tdClass:"text-right text-sm font-medium",sortable:!1}]),D=I(()=>!p.totalInvoices&&!g.value);ee(o,()=>{T()},{debounce:500});function N(){$.value.refresh()}function T(){N()}function S(){o.status="",o.from_date="",o.to_date="",o.invoice_number=""}function U(){m.value&&S(),m.value=!m.value}async function W({page:l,sort:r}){let f={status:o.status,invoice_number:o.invoice_number,from_date:o.from_date,to_date:o.to_date,orderByField:r.fieldName||"created_at",orderBy:r.order||"desc",page:l};g.value=!0;let _=await p.fetchInvoices(f,h.companySlug);return g.value=!1,{data:_.data.data,pagination:{totalPages:_.data.meta.last_page,currentPage:l,totalCount:_.data.meta.total,limit:10}}}return(l,r)=>{const f=s("BaseBreadcrumbItem"),_=s("BaseBreadcrumb"),c=s("BaseIcon"),z=s("BaseButton"),G=s("BasePageHeader"),M=s("BaseSelectInput"),v=s("BaseInputGroup"),R=s("BaseInput"),C=s("BaseDatePicker"),j=s("BaseFilterWrapper"),q=s("BaseEmptyPlaceholder"),F=s("router-link"),A=s("BaseFormatMoney"),w=s("BaseInvoiceStatusBadge"),J=s("BaseDropdownItem"),L=s("BaseDropdown"),O=s("BasePage");return B(),y(O,null,{default:a(()=>[t(G,{title:l.$t("invoices.title")},{actions:a(()=>[k(t(z,{variant:"primary-outline",onClick:U},{right:a(e=>[n(m)?(B(),y(c,{key:1,name:"XIcon",class:x(e.class)},null,8,["class"])):(B(),y(c,{key:0,name:"FilterIcon",class:x(e.class)},null,8,["class"]))]),default:a(()=>[i(u(l.$t("general.filter"))+" ",1)]),_:1},512),[[V,n(p).totalInvoices]])]),default:a(()=>[t(_,null,{default:a(()=>[t(f,{title:l.$t("general.home"),to:`/${n(h).companySlug}/customer/dashboard`},null,8,["title","to"]),t(f,{title:l.$t("invoices.invoice",2),to:"#",active:""},null,8,["title"])]),_:1})]),_:1},8,["title"]),k(t(j,{onClear:S},{default:a(()=>[t(v,{label:l.$t("invoices.status"),class:"px-3"},{default:a(()=>[t(M,{modelValue:n(o).status,"onUpdate:modelValue":r[0]||(r[0]=e=>n(o).status=e),options:P.value,searchable:"","allow-empty":!1,placeholder:l.$t("general.select_a_status")},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"]),t(v,{label:l.$t("invoices.invoice_number"),color:"black-light",class:"px-3 mt-2"},{default:a(()=>[t(R,{modelValue:n(o).invoice_number,"onUpdate:modelValue":r[1]||(r[1]=e=>n(o).invoice_number=e)},{default:a(()=>[t(c,{name:"DotsHorizontalIcon",class:"h-5 text-gray-500"}),t(c,{name:"HashtagIcon",class:"h-5 ml-3 text-gray-600"})]),_:1},8,["modelValue"])]),_:1},8,["label"]),t(v,{label:l.$t("general.from"),class:"px-3"},{default:a(()=>[t(C,{modelValue:n(o).from_date,"onUpdate:modelValue":r[2]||(r[2]=e=>n(o).from_date=e),"calendar-button":!0,"calendar-button-icon":"calendar"},null,8,["modelValue"])]),_:1},8,["label"]),le,t(v,{label:l.$t("general.to"),class:"px-3"},{default:a(()=>[t(C,{modelValue:n(o).to_date,"onUpdate:modelValue":r[3]||(r[3]=e=>n(o).to_date=e),"calendar-button":!0,"calendar-button-icon":"calendar"},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},512),[[V,n(m)]]),n(D)?(B(),y(q,{key:0,title:l.$t("invoices.no_invoices"),description:l.$t("invoices.list_of_invoices")},{default:a(()=>[t(ne,{class:"mt-5 mb-4"})]),_:1},8,["title","description"])):te("",!0),k(E("div",re,[t(oe,{ref:(e,X)=>{X.table=e,$.value=e},data:W,columns:n(H),"placeholder-count":n(p).totalInvoices>=20?10:5,class:"mt-10"},{"cell-invoice_date":a(({row:e})=>[i(u(e.data.formatted_invoice_date),1)]),"cell-invoice_number":a(({row:e})=>[t(F,{to:{path:`invoices/${e.data.id}/view`},class:"font-medium text-primary-500"},{default:a(()=>[i(u(e.data.invoice_number),1)]),_:2},1032,["to"])]),"cell-due_amount":a(({row:e})=>[t(A,{amount:e.data.total,currency:e.data.customer.currency},null,8,["amount","currency"])]),"cell-status":a(({row:e})=>[t(w,{status:e.data.status,class:"px-3 py-1"},{default:a(()=>[i(u(e.data.status),1)]),_:2},1032,["status"])]),"cell-paid_status":a(({row:e})=>[t(w,{status:e.data.paid_status,class:"px-3 py-1"},{default:a(()=>[i(u(e.data.paid_status),1)]),_:2},1032,["status"])]),"cell-actions":a(({row:e})=>[t(L,null,{activator:a(()=>[t(c,{name:"DotsHorizontalIcon",class:"h-5 text-gray-500"})]),default:a(()=>[t(F,{to:`invoices/${e.data.id}/view`},{default:a(()=>[t(J,null,{default:a(()=>[t(c,{name:"EyeIcon",class:"h-5 mr-3 text-gray-600"}),i(" "+u(l.$t("general.view")),1)]),_:1})]),_:2},1032,["to"])]),_:2},1024)]),_:1},8,["columns","placeholder-count"])],512),[[V,!n(D)]])]),_:1})}}};export{fe as default};
