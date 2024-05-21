import{b1 as O,e as j,J as P,g as x,F as Y,l as A,N as Z,r as c,o as d,c as T,b as f,a as t,w as r,m as n,t as B,n as b,L as M,M as ee,q as L,H as te,I as w,a3 as ne,f as q,K as G,a4 as ae,O as C,A as oe,a6 as se}from"./main-9a914193.js";import{L as re}from"./LoadingIcon-6816e437.js";import{_ as ie}from"./InvoiceIndexDropdown-a1d1e3d6.js";import{_ as le}from"./SendInvoiceModal-fb6f321d.js";import{_ as ce}from"./RecurringInvoiceIndexDropdown-0f914273.js";import"./mail-driver-c2eadad2.js";const ue={class:"fixed top-0 left-0 hidden h-full pt-16 pb-[6.4rem] ml-56 bg-white xl:ml-64 w-88 xl:block"},de={class:"flex items-center justify-between px-4 pt-8 pb-2 border border-gray-200 border-solid height-full"},me={class:"mb-6"},_e={class:"flex mb-6 ml-3",role:"group","aria-label":"First group"},ve={class:"px-2 py-1 pb-2 mb-1 mb-2 text-sm border-b border-gray-200 border-solid"},ge={class:"flex-2"},pe={class:"mt-1 mb-2 text-xs not-italic font-medium leading-5 text-gray-600"},fe={class:"flex-1 whitespace-nowrap right"},be={class:"text-sm not-italic font-normal leading-5 text-right text-gray-600 est-date"},ye={key:0,class:"flex justify-center p-4 items-center"},Ie={key:1,class:"flex justify-center px-4 mt-5 text-sm text-gray-600"},Be={setup(U){const a=O();j();const v=P(),i=x(!1),m=x(null),u=x(1),p=x(1),y=x(null),e=Y({orderBy:null,orderByField:null,searchText:null}),R=A(()=>e.orderBy==="asc"||e.orderBy==null);function k(s){return v.params.id==s}async function I(s,_=!1){if(i.value)return;let g={};e.searchText!==""&&e.searchText!==null&&e.searchText!==void 0&&(g.search=e.searchText),e.orderBy!==null&&e.orderBy!==void 0&&(g.orderBy=e.orderBy),e.orderByField!==null&&e.orderByField!==void 0&&(g.orderByField=e.orderByField),i.value=!0;let S=await a.fetchRecurringInvoices({page:s,...g});i.value=!1,m.value=m.value?m.value:[],m.value=[...m.value,...S.data.data],u.value=s||1,p.value=S.data.meta.last_page;let h=m.value.find($=>$.id==v.params.id);_==!1&&!h&&u.value<p.value&&Object.keys(g).length===0&&I(++u.value),h&&setTimeout(()=>{_==!1&&E()},500)}function E(){const s=document.getElementById(`recurring-invoice-${v.params.id}`);s&&(s.scrollIntoView({behavior:"smooth"}),s.classList.add("shake"),V())}function V(){y.value.addEventListener("scroll",s=>{s.target.scrollTop>0&&s.target.scrollTop+s.target.clientHeight>s.target.scrollHeight-200&&u.value<p.value&&I(++u.value,!0)})}async function o(){m.value=[],I()}function F(){return e.orderBy==="asc"?(e.orderBy="desc",o(),!0):(e.orderBy="asc",o(),!0)}return I(),o=Z.exports.debounce(o,500),(s,_)=>{var z;const g=c("BaseIcon"),S=c("BaseInput"),h=c("BaseButton"),$=c("BaseRadio"),D=c("BaseInputGroup"),N=c("BaseDropdownItem"),J=c("BaseDropdown"),K=c("BaseText"),W=c("BaseRecurringInvoiceStatusBadge"),Q=c("BaseFormatMoney"),X=c("router-link");return d(),T("div",ue,[f("div",de,[f("div",me,[t(S,{modelValue:n(e).searchText,"onUpdate:modelValue":_[0]||(_[0]=l=>n(e).searchText=l),placeholder:s.$t("general.search"),type:"text",variant:"gray",onInput:_[1]||(_[1]=l=>o())},{right:r(()=>[t(g,{name:"SearchIcon",class:"h-5 text-gray-400"})]),_:1},8,["modelValue","placeholder"])]),f("div",_e,[t(J,{class:"ml-3",position:"bottom-start"},{activator:r(()=>[t(h,{size:"md",variant:"gray"},{default:r(()=>[t(g,{name:"FilterIcon",class:"h-5"})]),_:1})]),default:r(()=>[f("div",ve,B(s.$t("general.sort_by")),1),t(N,{class:"flex px-1 py-2 cursor-pointer"},{default:r(()=>[t(D,{class:"-mt-3 font-normal"},{default:r(()=>[t($,{id:"filter_next_invoice_date",modelValue:n(e).orderByField,"onUpdate:modelValue":[_[2]||(_[2]=l=>n(e).orderByField=l),o],label:s.$t("recurring_invoices.next_invoice_date"),size:"sm",name:"filter",value:"next_invoice_at"},null,8,["modelValue","label"])]),_:1})]),_:1}),t(N,{class:"flex px-1 py-2 cursor-pointer"},{default:r(()=>[t(D,{class:"-mt-3 font-normal"},{default:r(()=>[t($,{id:"filter_start_date",modelValue:n(e).orderByField,"onUpdate:modelValue":[_[3]||(_[3]=l=>n(e).orderByField=l),o],label:s.$t("recurring_invoices.starts_at"),value:"starts_at",size:"sm",name:"filter"},null,8,["modelValue","label"])]),_:1})]),_:1})]),_:1}),t(h,{class:"ml-1",size:"md",variant:"gray",onClick:F},{default:r(()=>[n(R)?(d(),b(g,{key:0,name:"SortAscendingIcon",class:"h-5"})):(d(),b(g,{key:1,name:"SortDescendingIcon",class:"h-5"}))]),_:1})])]),f("div",{ref:(l,H)=>{H.invoiceListSection=l,y.value=l},class:"h-full overflow-y-scroll border-l border-gray-200 border-solid base-scroll"},[(d(!0),T(M,null,ee(m.value,(l,H)=>(d(),T("div",{key:H},[l?(d(),b(X,{key:0,id:"recurring-invoice-"+l.id,to:`/admin/recurring-invoices/${l.id}/view`,class:te(["flex justify-between side-invoice p-4 cursor-pointer hover:bg-gray-100 items-center border-l-4 border-transparent",{"bg-gray-100 border-l-4 border-gray-500 border-solid":k(l.id)}]),style:{"border-bottom":"1px solid rgba(185, 193, 209, 0.41)"}},{default:r(()=>[f("div",ge,[t(K,{text:l.customer.name,length:30,class:"pr-2 mb-2 text-sm not-italic font-normal leading-5 text-black capitalize truncate"},null,8,["text"]),f("div",pe,B(l.invoice_number),1),t(W,{status:l.status,class:"px-1 text-xs"},{default:r(()=>[L(B(l.status),1)]),_:2},1032,["status"])]),f("div",fe,[t(Q,{class:"block mb-2 text-xl not-italic font-semibold leading-8 text-right text-gray-900",amount:l.total,currency:l.customer.currency},null,8,["amount","currency"]),f("div",be,B(l.formatted_starts_at),1)])]),_:2},1032,["id","to","class"])):w("",!0)]))),128)),i.value?(d(),T("div",ye,[t(re,{class:"h-6 m-1 animate-spin text-primary-400"})])):w("",!0),!((z=m.value)!=null&&z.length)&&!i.value?(d(),T("p",Ie,B(s.$t("invoices.no_matching_invoices")),1)):w("",!0)],512)])}}},he={class:"relative table-container"},xe={setup(U){const a=O(),v=x(null);x(null),ne("$utils");const{t:i}=j();x(null),q();const m=G(),u=A(()=>[{key:"invoice_date",label:i("invoices.date"),thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"invoice_number",label:i("invoices.invoice")},{key:"customer.name",label:i("invoices.customer")},{key:"status",label:i("invoices.status")},{key:"total",label:i("invoices.total")},{key:"actions",label:i("invoices.action"),tdClass:"text-right text-sm font-medium",thClass:"text-right",sortable:!1}]);function p(){return m.hasAbilities([C.DELETE_INVOICE,C.EDIT_INVOICE,C.VIEW_INVOICE,C.SEND_INVOICE])}function y(e){let R=a.newRecurringInvoice.invoices.findIndex(k=>k.id===e);a.newRecurringInvoice.invoices[R]&&(a.newRecurringInvoice.invoices[R].status="SENT")}return(e,R)=>{const k=c("router-link"),I=c("BaseFormatMoney"),E=c("BaseInvoiceStatusBadge"),V=c("BaseTable");return d(),T(M,null,[t(le,{onUpdate:y}),f("div",he,[t(V,{ref:(o,F)=>{F.table=o,v.value=o},data:n(a).newRecurringInvoice.invoices,columns:n(u),loading:n(a).isFetchingViewData,"placeholder-count":5,class:"mt-5"},ae({"cell-invoice_number":r(({row:o})=>[t(k,{to:{path:`/admin/invoices/${o.data.id}/view`},class:"font-medium text-primary-500"},{default:r(()=>[L(B(o.data.invoice_number),1)]),_:2},1032,["to"])]),"cell-total":r(({row:o})=>[t(I,{amount:o.data.due_amount,currency:o.data.currency},null,8,["amount","currency"])]),"cell-status":r(({row:o})=>[t(E,{status:o.data.status,class:"px-3 py-1"},{default:r(()=>[L(B(o.data.status),1)]),_:2},1032,["status"])]),_:2},[p()?{name:"cell-actions",fn:r(({row:o})=>[t(ie,{row:o.data,table:v.value},null,8,["row","table"])])}:void 0]),1032,["data","columns","loading"])])],64)}}},we={setup(U){const a=O(),v=P();let i=A(()=>a.isFetchingViewData);oe(v,()=>{v.params.id&&v.name==="recurring-invoices.view"&&m()},{immediate:!0});async function m(){await a.fetchRecurringInvoice(v.params.id)}return(u,p)=>{const y=c("BaseHeading"),e=c("BaseDescriptionListItem"),R=c("BaseDescriptionList"),k=c("BaseCard");return d(),b(k,{class:"mt-10"},{default:r(()=>[t(y,null,{default:r(()=>[L(B(u.$t("customers.basic_info")),1)]),_:1}),t(R,{class:"mt-5"},{default:r(()=>{var I,E,V,o,F,s,_,g,S,h,$,D,N;return[t(e,{label:u.$t("recurring_invoices.starts_at"),"content-loading":n(i),value:(I=n(a).newRecurringInvoice)==null?void 0:I.formatted_starts_at},null,8,["label","content-loading","value"]),t(e,{label:u.$t("recurring_invoices.next_invoice_date"),"content-loading":n(i),value:(E=n(a).newRecurringInvoice)==null?void 0:E.formatted_next_invoice_at},null,8,["label","content-loading","value"]),(V=n(a).newRecurringInvoice)!=null&&V.limit_date&&((o=n(a).newRecurringInvoice)==null?void 0:o.limit_by)!=="NONE"?(d(),b(e,{key:0,label:u.$t("recurring_invoices.limit_date"),"content-loading":n(i),value:(F=n(a).newRecurringInvoice)==null?void 0:F.limit_date},null,8,["label","content-loading","value"])):w("",!0),(s=n(a).newRecurringInvoice)!=null&&s.limit_date&&((_=n(a).newRecurringInvoice)==null?void 0:_.limit_by)!=="NONE"?(d(),b(e,{key:1,label:u.$t("recurring_invoices.limit_by"),"content-loading":n(i),value:(g=n(a).newRecurringInvoice)==null?void 0:g.limit_by},null,8,["label","content-loading","value"])):w("",!0),(S=n(a).newRecurringInvoice)!=null&&S.limit_count?(d(),b(e,{key:2,label:u.$t("recurring_invoices.limit_count"),value:(h=n(a).newRecurringInvoice)==null?void 0:h.limit_count,"content-loading":n(i)},null,8,["label","value","content-loading"])):w("",!0),($=n(a).newRecurringInvoice)!=null&&$.selectedFrequency?(d(),b(e,{key:3,label:u.$t("recurring_invoices.frequency.title"),value:(N=(D=n(a).newRecurringInvoice)==null?void 0:D.selectedFrequency)==null?void 0:N.label,"content-loading":n(i)},null,8,["label","value","content-loading"])):w("",!0)]}),_:1}),t(y,{class:"mt-8"},{default:r(()=>[L(B(u.$t("invoices.title",2)),1)]),_:1}),t(xe)]),_:1})}}},Fe={setup(U){se();const a=O(),v=G();j(),q();const i=A(()=>{var u,p;return a.newRecurringInvoice?(p=(u=a.newRecurringInvoice)==null?void 0:u.customer)==null?void 0:p.name:""});function m(){return v.hasAbilities([C.DELETE_RECURRING_INVOICE,C.EDIT_RECURRING_INVOICE])}return(u,p)=>{const y=c("BasePageHeader"),e=c("BasePage");return d(),b(e,{class:"xl:pl-96"},{default:r(()=>[t(y,{title:n(i)},{actions:r(()=>[m()?(d(),b(ce,{key:0,row:n(a).newRecurringInvoice},null,8,["row"])):w("",!0)]),_:1},8,["title"]),t(Be),t(we)]),_:1})}}};export{Fe as default};
