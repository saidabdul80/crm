import{a6 as R,u as q,e as M,aF as O,J as G,K as z,D as V,a3 as X,r as n,o as p,n as g,w as t,m as a,a as o,O as f,q as T,t as B,I as P,C as J,aG as K,g as Y,l as N,a4 as $,H as Q,c as W,p as Z}from"./main-4279fdc3.js";import{_ as ee}from"./TaxTypeModal-1c4eab9a.js";const te={props:{row:{type:Object,default:null},table:{type:Object,default:null},loadData:{type:Function,default:null}},setup(S){const s=S,b=R();q();const{t:r}=M(),h=O(),v=G(),m=z(),E=V();X("utils");async function c(d){await h.fetchTaxType(d),E.openModal({title:r("settings.tax_types.edit_tax"),componentName:"TaxTypeModal",size:"sm",refreshData:s.loadData&&s.loadData})}function C(d){b.openDialog({title:r("general.are_you_sure"),message:r("settings.tax_types.confirm_delete"),yesLabel:r("general.ok"),noLabel:r("general.cancel"),variant:"danger",hideNoButton:!1,size:"lg"}).then(async u=>{if(u){if((await h.deleteTaxType(d)).data.success)return s.loadData&&s.loadData(),!0;s.loadData&&s.loadData()}})}return(d,u)=>{const i=n("BaseIcon"),w=n("BaseButton"),D=n("BaseDropdownItem"),I=n("BaseDropdown");return p(),g(I,null,{activator:t(()=>[a(v).name==="tax-types.view"?(p(),g(w,{key:0,variant:"primary"},{default:t(()=>[o(i,{name:"DotsHorizontalIcon",class:"h-5 text-white"})]),_:1})):(p(),g(i,{key:1,name:"DotsHorizontalIcon",class:"h-5 text-gray-500"}))]),default:t(()=>[a(m).hasAbilities(a(f).EDIT_TAX_TYPE)?(p(),g(D,{key:0,onClick:u[0]||(u[0]=k=>c(S.row.id))},{default:t(()=>[o(i,{name:"PencilIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),T(" "+B(d.$t("general.edit")),1)]),_:1})):P("",!0),a(m).hasAbilities(a(f).DELETE_TAX_TYPE)?(p(),g(D,{key:1,onClick:u[1]||(u[1]=k=>C(S.row.id))},{default:t(()=>[o(i,{name:"TrashIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),T(" "+B(d.$t("general.delete")),1)]),_:1})):P("",!0)]),_:1})}}},ae={key:0},ne={setup(S){const{t:s}=M(),b=X("utils"),r=J(),h=O(),v=V(),m=z(),E=K(),c=Y(null),C=Y(r.selectedCompanySettings.tax_per_item),d=N(()=>[{key:"name",label:s("settings.tax_types.tax_name"),thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"compound_tax",label:s("settings.tax_types.compound_tax"),tdClass:"font-medium text-gray-900"},{key:"percent",label:s("settings.tax_types.percent"),thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"actions",label:"",tdClass:"text-right text-sm font-medium",sortable:!1}]),u=N(()=>r.selectedCompanySettings.sales_tax_us_enabled==="YES"&&E.salesTaxUSEnabled),i=N({get:()=>C.value==="YES",set:async l=>{const _=l?"YES":"NO";let y={settings:{tax_per_item:_}};C.value=_,await r.updateCompanySettings({data:y,message:"general.setting_updated"})}});function w(){return m.hasAbilities([f.DELETE_TAX_TYPE,f.EDIT_TAX_TYPE])}async function D({page:l,filter:_,sort:y}){let A={orderByField:y.fieldName||"created_at",orderBy:y.order||"desc",page:l},x=await h.fetchTaxTypes(A);return{data:x.data.data,pagination:{totalPages:x.data.meta.last_page,currentPage:l,totalCount:x.data.meta.total,limit:5}}}async function I(){c.value&&c.value.refresh()}function k(){v.openModal({title:s("settings.tax_types.add_tax"),componentName:"TaxTypeModal",size:"sm",refreshData:c.value&&c.value.refresh})}return(l,_)=>{const y=n("BaseIcon"),A=n("BaseButton"),x=n("BaseBadge"),F=n("BaseTable"),L=n("BaseDivider"),U=n("BaseSwitchSection"),j=n("BaseSettingCard");return p(),g(j,{title:l.$t("settings.tax_types.title"),description:l.$t("settings.tax_types.description")},$({default:t(()=>[o(ee),o(F,{ref:(e,H)=>{H.table=e,c.value=e},class:"mt-16",data:D,columns:a(d)},$({"cell-compound_tax":t(({row:e})=>[o(x,{"bg-color":a(b).getBadgeStatusColor(e.data.compound_tax?"YES":"NO").bgColor,color:a(b).getBadgeStatusColor(e.data.compound_tax?"YES":"NO").color},{default:t(()=>[T(B(e.data.compound_tax?"Yes":"No".replace("_"," ")),1)]),_:2},1032,["bg-color","color"])]),"cell-percent":t(({row:e})=>[T(B(e.data.percent)+" % ",1)]),_:2},[w()?{name:"cell-actions",fn:t(({row:e})=>[o(te,{row:e.data,table:c.value,"load-data":I},null,8,["row","table"])])}:void 0]),1032,["columns"]),a(m).currentUser.is_owner?(p(),W("div",ae,[o(L,{class:"mt-8 mb-2"}),o(U,{modelValue:a(i),"onUpdate:modelValue":_[0]||(_[0]=e=>Z(i)?i.value=e:null),disabled:a(u),title:l.$t("settings.tax_types.tax_per_item"),description:l.$t("settings.tax_types.tax_setting_description")},null,8,["modelValue","disabled","title","description"])])):P("",!0)]),_:2},[a(m).hasAbilities(a(f).CREATE_TAX_TYPE)?{name:"action",fn:t(()=>[o(A,{type:"submit",variant:"primary-outline",onClick:k},{left:t(e=>[o(y,{class:Q(e.class),name:"PlusIcon"},null,8,["class"])]),default:t(()=>[T(" "+B(l.$t("settings.tax_types.add_new_tax")),1)]),_:1})])}:void 0]),1032,["title","description"])}}};export{ne as default};