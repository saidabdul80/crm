import{a6 as k,u as I,e as x,J as T,K as A,D as M,a3 as E,r as u,o as p,n as f,w as e,m as r,a as c,O as D,q as S,t as z,I as C,g as O,l as F,c as P,H as j,L as G,F as H}from"./main-4279fdc3.js";import{u as $,_ as L}from"./NoteModal-cb369dec.js";import"./payment-8ad825cd.js";const V={props:{row:{type:Object,default:null},table:{type:Object,default:null},loadData:{type:Function,default:null}},setup(g){const d=g,h=k(),_=I(),{t:a}=x(),o=$(),N=T(),y=A(),b=M();E("utils");function w(n){o.fetchNote(n),b.openModal({title:a("settings.customization.notes.edit_note"),componentName:"NoteModal",size:"md",refreshData:d.loadData})}function s(n){h.openDialog({title:a("general.are_you_sure"),message:a("settings.customization.notes.note_confirm_delete"),yesLabel:a("general.yes"),noLabel:a("general.no"),variant:"danger",hideNoButton:!1,size:"lg"}).then(async()=>{(await o.deleteNote(n)).data.success?_.showNotification({type:"success",message:a("settings.customization.notes.deleted_message")}):_.showNotification({type:"error",message:a("settings.customization.notes.already_in_use")}),d.loadData&&d.loadData()})}return(n,t)=>{const l=u("BaseIcon"),m=u("BaseButton"),B=u("BaseDropdownItem"),i=u("BaseDropdown");return p(),f(i,null,{activator:e(()=>[r(N).name==="notes.view"?(p(),f(m,{key:0,variant:"primary"},{default:e(()=>[c(l,{name:"DotsHorizontalIcon",class:"h-5 text-white"})]),_:1})):(p(),f(l,{key:1,name:"DotsHorizontalIcon",class:"h-5 text-gray-500"}))]),default:e(()=>[r(y).hasAbilities(r(D).MANAGE_NOTE)?(p(),f(B,{key:0,onClick:t[0]||(t[0]=v=>w(g.row.id))},{default:e(()=>[c(l,{name:"PencilIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),S(" "+z(n.$t("general.edit")),1)]),_:1})):C("",!0),r(y).hasAbilities(r(D).MANAGE_NOTE)?(p(),f(B,{key:1,onClick:t[1]||(t[1]=v=>s(g.row.id))},{default:e(()=>[c(l,{name:"TrashIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),S(" "+z(n.$t("general.delete")),1)]),_:1})):C("",!0)]),_:1})}}},R={setup(g){const{t:d}=x(),h=M();k();const _=$();I();const a=A(),o=O(""),N=F(()=>[{key:"name",label:d("settings.customization.notes.name"),thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"type",label:d("settings.customization.notes.type"),thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"actions",label:"",tdClass:"text-right text-sm font-medium",sortable:!1}]);async function y({page:s,filter:n,sort:t}){let l=H({orderByField:t.fieldName||"created_at",orderBy:t.order||"desc",page:s}),m=await _.fetchNotes(l);return{data:m.data.data,pagination:{totalPages:m.data.meta.last_page,currentPage:s,totalCount:m.data.meta.total,limit:5}}}async function b(){await h.openModal({title:d("settings.customization.notes.add_note"),componentName:"NoteModal",size:"md",refreshData:o.value&&o.value.refresh})}async function w(){o.value&&o.value.refresh()}return(s,n)=>{const t=u("BaseIcon"),l=u("BaseButton"),m=u("BaseTable"),B=u("BaseSettingCard");return p(),P(G,null,[c(L),c(B,{title:s.$t("settings.customization.notes.title"),description:s.$t("settings.customization.notes.description")},{action:e(()=>[r(a).hasAbilities(r(D).MANAGE_NOTE)?(p(),f(l,{key:0,variant:"primary-outline",onClick:b},{left:e(i=>[c(t,{class:j(i.class),name:"PlusIcon"},null,8,["class"])]),default:e(()=>[S(" "+z(s.$t("settings.customization.notes.add_note")),1)]),_:1})):C("",!0)]),default:e(()=>[c(m,{ref:(i,v)=>{v.table=i,o.value=i},data:y,columns:r(N),class:"mt-14"},{"cell-actions":e(({row:i})=>[c(V,{row:i.data,table:o.value,"load-data":w},null,8,["row","table"])]),_:1},8,["columns"])]),_:1},8,["title","description"])],64)}}};export{R as default};