import{D as ne,aD as ie,a6 as de,K as ue,e as ce,g as p,J as me,f as fe,F as pe,l as S,A as _e,N as ve,r as i,o as c,c as k,a as s,n as g,w as l,b as d,m as n,O as j,q as M,t as y,I as b,L as H,M as ye,H as ge}from"./main-9a914193.js";import{_ as be}from"./EstimateIndexDropdown-8accc38a.js";import{_ as he}from"./SendEstimateModal-43470429.js";import{L as xe}from"./LoadingIcon-6816e437.js";import"./mail-driver-c2eadad2.js";const Be={class:"mr-3 text-sm"},Se={class:"fixed top-0 left-0 hidden h-full pt-16 pb-[6.4rem] ml-56 bg-white xl:ml-64 w-88 xl:block"},ke={class:"flex items-center justify-between px-4 pt-8 pb-2 border border-gray-200 border-solid height-full"},Te={class:"mb-6"},we={class:"flex mb-6 ml-3",role:"group","aria-label":"First group"},Ee={class:"px-4 py-1 pb-2 mb-1 mb-2 text-sm border-b border-gray-200 border-solid"},Ie={class:"flex-2"},Fe={class:"mt-1 mb-2 text-xs not-italic font-medium leading-5 text-gray-600"},De={class:"flex-1 whitespace-nowrap right"},Ve={class:"text-sm not-italic font-normal leading-5 text-right text-gray-600 est-date"},$e={key:0,class:"flex justify-center p-4 items-center"},Le={key:1,class:"flex justify-center px-4 mt-5 text-sm text-gray-600"},Ae={class:"flex flex-col min-h-0 mt-8 overflow-hidden",style:{height:"75vh"}},Ne=["src"],je={setup(Me){const O=ne(),F=ie(),q=de(),z=ue(),{t:_}=ce(),r=p(null),h=me();fe();const T=p(!1),x=p(!1),w=p(!1),u=p(null),B=p(1),D=p(1),C=p(null),t=pe({orderBy:null,orderByField:null,searchText:null}),G=S(()=>r.value.estimate_number),U=S(()=>t.orderBy==="asc"||t.orderBy==null);S(()=>U.value?_("general.ascending"):_("general.descending"));const J=S(()=>`/estimates/pdf/${r.value.unique_hash}`);S(()=>r.value&&r.value.id?estimate.value.id:null),_e(h,(e,o)=>{e.name==="estimates.view"&&P()}),E(),P(),f=ve.exports.debounce(f,500);function K(e){return h.params.id==e}async function E(e,o=!1){if(x.value)return;let m={};t.searchText!==""&&t.searchText!==null&&t.searchText!==void 0&&(m.search=t.searchText),t.orderBy!==null&&t.orderBy!==void 0&&(m.orderBy=t.orderBy),t.orderByField!==null&&t.orderByField!==void 0&&(m.orderByField=t.orderByField),x.value=!0;let I=await F.fetchEstimates({page:e,...m});x.value=!1,u.value=u.value?u.value:[],u.value=[...u.value,...I.data.data],B.value=e||1,D.value=I.data.meta.last_page;let v=u.value.find(V=>V.id==h.params.id);o==!1&&!v&&B.value<D.value&&Object.keys(m).length===0&&E(++B.value),v&&setTimeout(()=>{o==!1&&Q()},500)}function Q(){const e=document.getElementById(`estimate-${h.params.id}`);e&&(e.scrollIntoView({behavior:"smooth"}),e.classList.add("shake"),W())}function W(){C.value.addEventListener("scroll",e=>{e.target.scrollTop>0&&e.target.scrollTop+e.target.clientHeight>e.target.scrollHeight-200&&B.value<D.value&&E(++B.value,!0)})}async function P(){w.value=!0;let e=await F.fetchEstimate(h.params.id);e.data&&(w.value=!1,r.value={...e.data.data})}async function f(){u.value=[],E()}function X(){return t.orderBy==="asc"?(t.orderBy="desc",f(),!0):(t.orderBy="asc",f(),!0)}async function Y(){q.openDialog({title:_("general.are_you_sure"),message:_("estimates.confirm_mark_as_sent"),yesLabel:_("general.ok"),noLabel:_("general.cancel"),variant:"primary",hideNoButton:!1,size:"lg"}).then(e=>{T.value=!1,e&&(F.markAsSent({id:r.value.id,status:"SENT"}),r.value.status="SENT",T.value=!0),T.value=!1})}async function Z(e){O.openModal({title:_("estimates.send_estimate"),componentName:"SendEstimateModal",id:r.value.id,data:r.value})}function ee(){let e=u.value.findIndex(o=>o.id===r.value.id);u.value[e]&&(u.value[e].status="SENT",r.value.status="SENT")}return(e,o)=>{const m=i("BaseButton"),I=i("BasePageHeader"),v=i("BaseIcon"),V=i("BaseInput"),$=i("BaseRadio"),L=i("BaseInputGroup"),A=i("BaseDropdownItem"),te=i("BaseDropdown"),ae=i("BaseText"),se=i("BaseEstimateStatusBadge"),le=i("BaseFormatMoney"),oe=i("router-link"),re=i("BasePage");return c(),k(H,null,[s(he,{onUpdate:ee}),r.value?(c(),g(re,{key:0,class:"xl:pl-96 xl:ml-8"},{default:l(()=>{var R;return[s(I,{title:n(G)},{actions:l(()=>[d("div",Be,[r.value.status==="DRAFT"&&n(z).hasAbilities(n(j).EDIT_ESTIMATE)?(c(),g(m,{key:0,disabled:T.value,"content-loading":w.value,variant:"primary-outline",onClick:Y},{default:l(()=>[M(y(e.$t("estimates.mark_as_sent")),1)]),_:1},8,["disabled","content-loading"])):b("",!0)]),r.value.status==="DRAFT"&&n(z).hasAbilities(n(j).SEND_ESTIMATE)?(c(),g(m,{key:0,"content-loading":w.value,variant:"primary",class:"text-sm",onClick:Z},{default:l(()=>[M(y(e.$t("estimates.send_estimate")),1)]),_:1},8,["content-loading"])):b("",!0),s(be,{class:"ml-3",row:r.value},null,8,["row"])]),_:1},8,["title"]),d("div",Se,[d("div",ke,[d("div",Te,[s(V,{modelValue:n(t).searchText,"onUpdate:modelValue":o[0]||(o[0]=a=>n(t).searchText=a),placeholder:e.$t("general.search"),type:"text",variant:"gray",onInput:o[1]||(o[1]=a=>f())},{right:l(()=>[s(v,{name:"SearchIcon",class:"text-gray-400"})]),_:1},8,["modelValue","placeholder"])]),d("div",we,[s(te,{class:"ml-3",position:"bottom-start","width-class":"w-45","position-class":"left-0"},{activator:l(()=>[s(m,{size:"md",variant:"gray"},{default:l(()=>[s(v,{name:"FilterIcon"})]),_:1})]),default:l(()=>[d("div",Ee,y(e.$t("general.sort_by")),1),s(A,{class:"flex px-4 py-2 cursor-pointer"},{default:l(()=>[s(L,{class:"-mt-3 font-normal"},{default:l(()=>[s($,{id:"filter_estimate_date",modelValue:n(t).orderByField,"onUpdate:modelValue":[o[2]||(o[2]=a=>n(t).orderByField=a),f],label:e.$t("reports.estimates.estimate_date"),size:"sm",name:"filter",value:"estimate_date"},null,8,["modelValue","label"])]),_:1})]),_:1}),s(A,{class:"flex px-4 py-2 cursor-pointer"},{default:l(()=>[s(L,{class:"-mt-3 font-normal"},{default:l(()=>[s($,{id:"filter_due_date",modelValue:n(t).orderByField,"onUpdate:modelValue":[o[3]||(o[3]=a=>n(t).orderByField=a),f],label:e.$t("estimates.due_date"),value:"expiry_date",size:"sm",name:"filter"},null,8,["modelValue","label"])]),_:1})]),_:1}),s(A,{class:"flex px-4 py-2 cursor-pointer"},{default:l(()=>[s(L,{class:"-mt-3 font-normal"},{default:l(()=>[s($,{id:"filter_estimate_number",modelValue:n(t).orderByField,"onUpdate:modelValue":[o[4]||(o[4]=a=>n(t).orderByField=a),f],label:e.$t("estimates.estimate_number"),value:"estimate_number",size:"sm",name:"filter"},null,8,["modelValue","label"])]),_:1})]),_:1})]),_:1}),s(m,{class:"ml-1",size:"md",variant:"gray",onClick:X},{default:l(()=>[n(U)?(c(),g(v,{key:0,name:"SortAscendingIcon"})):(c(),g(v,{key:1,name:"SortDescendingIcon"}))]),_:1})])]),d("div",{ref:(a,N)=>{N.estimateListSection=a,C.value=a},class:"h-full overflow-y-scroll border-l border-gray-200 border-solid base-scroll"},[(c(!0),k(H,null,ye(u.value,(a,N)=>(c(),k("div",{key:N},[a?(c(),g(oe,{key:0,id:"estimate-"+a.id,to:`/admin/estimates/${a.id}/view`,class:ge(["flex justify-between side-estimate p-4 cursor-pointer hover:bg-gray-100 items-center border-l-4 border-transparent",{"bg-gray-100 border-l-4 border-gray-500 border-solid":K(a.id)}]),style:{"border-bottom":"1px solid rgba(185, 193, 209, 0.41)"}},{default:l(()=>[d("div",Ie,[s(ae,{text:a.customer.name,length:30,class:"pr-2 mb-2 text-sm not-italic font-normal leading-5 text-black capitalize truncate"},null,8,["text"]),d("div",Fe,y(a.estimate_number),1),s(se,{status:a.status,class:"px-1 text-xs"},{default:l(()=>[M(y(a.status),1)]),_:2},1032,["status"])]),d("div",De,[s(le,{amount:a.total,currency:a.customer.currency,class:"block mb-2 text-xl not-italic font-semibold leading-8 text-right text-gray-900"},null,8,["amount","currency"]),d("div",Ve,y(a.formatted_estimate_date),1)])]),_:2},1032,["id","to","class"])):b("",!0)]))),128)),x.value?(c(),k("div",$e,[s(xe,{class:"h-6 m-1 animate-spin text-primary-400"})])):b("",!0),!((R=u.value)!=null&&R.length)&&!x.value?(c(),k("p",Le,y(e.$t("estimates.no_matching_estimates")),1)):b("",!0)],512)]),d("div",Ae,[d("iframe",{src:`${n(J)}`,class:"flex-1 border border-gray-400 border-solid rounded-md bg-white frame-style"},null,8,Ne)])]}),_:1})):b("",!0)],64)}}};export{je as default};
