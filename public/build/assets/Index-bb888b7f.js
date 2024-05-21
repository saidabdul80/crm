import{a6 as H,u as R,e as O,aE as W,J as ue,f as me,K as G,a3 as q,r as o,o as m,n as C,w as t,m as a,a as l,O as L,q as g,t as y,I as F,c as pe,b as n,H as u,C as Ce,g as x,F as fe,l as A,a7 as he,a8 as ye,aa as P,ab as U,a4 as ve,p as _e}from"./main-9a914193.js";const ge={props:{row:{type:Object,default:null},table:{type:Object,default:null},loadData:{type:Function,default:null}},setup(i){const r=i,M=H();R();const{t:B}=O(),b=W(),f=ue();me();const _=G();q("utils");function I(d){M.openDialog({title:B("general.are_you_sure"),message:B("items.confirm_delete"),yesLabel:B("general.ok"),noLabel:B("general.cancel"),variant:"danger",hideNoButton:!1,size:"lg"}).then(p=>{p&&b.deleteItem({ids:[d]}).then(v=>(v.data.success&&r.loadData&&r.loadData(),!0))})}return(d,p)=>{const v=o("BaseIcon"),w=o("BaseButton"),$=o("BaseDropdownItem"),D=o("router-link"),E=o("BaseDropdown");return m(),C(E,null,{activator:t(()=>[a(f).name==="items.view"?(m(),C(w,{key:0,variant:"primary"},{default:t(()=>[l(v,{name:"DotsHorizontalIcon",class:"h-5 text-white"})]),_:1})):(m(),C(v,{key:1,name:"DotsHorizontalIcon",class:"h-5 text-gray-500"}))]),default:t(()=>[a(_).hasAbilities(a(L).EDIT_ITEM)?(m(),C(D,{key:0,to:`/admin/items/${i.row.id}/edit`},{default:t(()=>[l($,null,{default:t(()=>[l(v,{name:"PencilIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),g(" "+y(d.$t("general.edit")),1)]),_:1})]),_:1},8,["to"])):F("",!0),a(_).hasAbilities(a(L).DELETE_ITEM)?(m(),C($,{key:1,onClick:p[0]||(p[0]=N=>I(i.row.id))},{default:t(()=>[l(v,{name:"TrashIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),g(" "+y(d.$t("general.delete")),1)]),_:1})):F("",!0)]),_:1})}}},Be={width:"110",height:"110",viewBox:"0 0 110 110",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Le={"clip-path":"url(#clip0)"},be=n("defs",null,[n("clipPath",{id:"clip0"},[n("rect",{width:"110",height:"110",fill:"white"})])],-1),Ie={props:{primaryFillColor:{type:String,default:"fill-primary-500"},secondaryFillColor:{type:String,default:"fill-gray-600"}},setup(i){return(r,M)=>(m(),pe("svg",Be,[n("g",Le,[n("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.76398 22.9512L4.54883 21.7361L21.7363 4.54858L22.9515 5.76374L5.76398 22.9512Z",class:u(i.secondaryFillColor)},null,2),n("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M88.264 105.451L87.0488 104.236L104.236 87.0486L105.451 88.2637L88.264 105.451Z",class:u(i.secondaryFillColor)},null,2),n("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M29.8265 81.3887L28.6113 80.1736L38.9238 69.8611L40.139 71.0762L29.8265 81.3887Z",class:u(i.primaryFillColor)},null,2),n("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M30.9375 81.6406C30.9375 83.0637 29.7825 84.2188 28.3594 84.2188C26.9362 84.2188 25.7812 83.0637 25.7812 81.6406C25.7812 80.2175 26.9362 79.0625 28.3594 79.0625C29.7825 79.0625 30.9375 80.2175 30.9375 81.6406Z",class:u(i.primaryFillColor)},null,2),n("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M77.3435 61.5801C76.4635 61.5801 75.5835 61.9152 74.9132 62.5873L62.5863 74.9124C61.244 76.2548 61.244 78.4324 62.5863 79.7748L92.8123 110.001L110 92.8132L79.7738 62.5873C79.1035 61.9152 78.2235 61.5801 77.3435 61.5801ZM77.3435 63.2988C77.8024 63.2988 78.2338 63.4776 78.5587 63.8024L107.569 92.8132L92.8123 107.569L63.8015 78.5596C63.4767 78.2348 63.2979 77.8034 63.2979 77.3445C63.2979 76.8838 63.4767 76.4524 63.8015 76.1276L76.1284 63.8024C76.4532 63.4776 76.8846 63.2988 77.3435 63.2988Z",class:u(i.secondaryFillColor)},null,2),n("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M17.1875 0L0 17.1875L30.2259 47.4134C30.8963 48.0838 31.7763 48.4206 32.6562 48.4206C33.5363 48.4206 34.4162 48.0838 35.0866 47.4134L47.4134 35.0866C48.7558 33.7442 48.7558 31.5683 47.4134 30.2259L17.1875 0ZM17.1875 2.43031L46.1983 31.4411C46.5231 31.7659 46.7019 32.1973 46.7019 32.6562C46.7019 33.1152 46.5231 33.5466 46.1983 33.8714L33.8714 46.1983C33.5466 46.5231 33.1152 46.7019 32.6562 46.7019C32.1973 46.7019 31.7659 46.5231 31.4411 46.1983L2.43031 17.1875L17.1875 2.43031Z",class:u(i.secondaryFillColor)},null,2),n("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M60.156 28.9238C59.276 28.9238 58.396 29.259 57.7257 29.931L29.9301 57.7249C28.5878 59.0673 28.5878 61.2449 29.9301 62.5873L47.4132 80.0687C48.0835 80.7407 48.9635 81.0759 49.8435 81.0759C50.7235 81.0759 51.6035 80.7407 52.2738 80.0687L80.0695 52.2748C81.4118 50.9324 81.4118 48.7548 80.0695 47.4124L62.5863 29.931C61.916 29.259 61.036 28.9238 60.156 28.9238ZM60.156 30.6426C60.6149 30.6426 61.0463 30.8213 61.3712 31.1462L78.8543 48.6276C79.1792 48.9524 79.3579 49.3838 79.3579 49.8445C79.3579 50.3034 79.1792 50.7348 78.8543 51.0596L51.0587 78.8535C50.7338 79.1784 50.3024 79.3571 49.8435 79.3571C49.3846 79.3571 48.9532 79.1784 48.6284 78.8535L31.1453 61.3721C30.8204 61.0473 30.6417 60.6159 30.6417 60.157C30.6417 59.6963 30.8204 59.2649 31.1453 58.9401L58.9409 31.1462C59.2657 30.8213 59.6971 30.6426 60.156 30.6426Z",class:u(i.secondaryFillColor)},null,2),n("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M71.0765 40.1387L69.8613 38.9236L72.4395 36.3455L73.6546 37.5606L71.0765 40.1387Z",class:u(i.secondaryFillColor)},null,2),n("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M72.9858 24.8608C69.6291 28.2176 69.6291 33.6574 72.9858 37.0141C74.6633 38.6916 76.8633 39.5321 79.0633 39.5321C81.2616 39.5321 83.4616 38.6916 85.1391 37.0141L72.9858 24.8608ZM73.1388 27.4441L82.5558 36.8612C81.5091 37.4816 80.3111 37.8133 79.0633 37.8133C77.226 37.8133 75.5003 37.0966 74.201 35.799C72.9033 34.4996 72.1883 32.774 72.1883 30.9383C72.1883 29.6888 72.5183 28.4908 73.1388 27.4441Z",class:u(i.secondaryFillColor)},null,2),n("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M86.1459 32.0051C85.9259 32.0051 85.7059 31.9209 85.5374 31.7542C85.2023 31.4173 85.2023 30.8742 85.5374 30.5373C86.3504 29.7261 86.7973 28.6467 86.7973 27.5003C86.7973 26.3522 86.3504 25.2728 85.5374 24.4615C83.9149 22.839 81.0859 22.839 79.4616 24.4615C79.1265 24.7984 78.5834 24.7984 78.2465 24.4615C77.9113 24.1264 77.9113 23.5833 78.2465 23.2464C80.5187 20.9742 84.4821 20.9742 86.7543 23.2464C87.8904 24.3825 88.516 25.8933 88.516 27.5003C88.516 29.1073 87.8904 30.6181 86.7543 31.7542C86.5859 31.9209 86.3659 32.0051 86.1459 32.0051Z",class:u(i.primaryFillColor)},null,2),n("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M89.792 35.6514C89.572 35.6514 89.352 35.5672 89.1836 35.4004C88.8484 35.0636 88.8484 34.5204 89.1836 34.1836C90.9711 32.3978 91.9525 30.0259 91.9525 27.4994C91.9525 24.9745 90.9711 22.6009 89.1836 20.8151C87.3978 19.0294 85.0259 18.0462 82.4994 18.0462C79.9745 18.0462 77.6009 19.0294 75.8152 20.8151C75.48 21.1503 74.9352 21.1503 74.6 20.8151C74.2648 20.48 74.2648 19.9351 74.6 19.6C78.9553 15.2447 86.0434 15.2447 90.4005 19.6C94.7558 23.9553 94.7558 31.0434 90.4005 35.4004C90.232 35.5672 90.012 35.6514 89.792 35.6514Z",class:u(i.primaryFillColor)},null,2),n("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M93.4379 39.297C93.2179 39.297 92.9979 39.2128 92.8295 39.0461C92.4944 38.7092 92.4944 38.1661 92.8295 37.8292C95.5898 35.0706 97.1092 31.4028 97.1092 27.4995C97.1092 23.5979 95.5898 19.9284 92.8295 17.1698C90.0709 14.4112 86.4031 12.8901 82.4998 12.8901C78.5983 12.8901 74.9287 14.4112 72.1701 17.1698C71.835 17.505 71.2901 17.505 70.955 17.1698C70.6198 16.8347 70.6198 16.2898 70.955 15.9547C74.0384 12.8712 78.1394 11.1714 82.4998 11.1714C86.862 11.1714 90.9612 12.8712 94.0464 15.9547C97.1298 19.0381 98.8279 23.139 98.8279 27.4995C98.8279 31.8617 97.1298 35.9609 94.0464 39.0461C93.8779 39.2128 93.6579 39.297 93.4379 39.297Z",class:u(i.primaryFillColor)},null,2),n("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M39.7832 40.9981L8.8457 10.0606L10.0609 8.84546L40.9984 39.783L39.7832 40.9981Z",class:u(i.primaryFillColor)},null,2),n("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M99.9395 101.154L69.002 70.2169L70.2171 69.0017L101.155 99.9392L99.9395 101.154Z",class:u(i.primaryFillColor)},null,2)]),be]))}},we={class:"flex items-center justify-end space-x-5"},ke={class:"relative table-container"},Fe={class:"relative flex items-center justify-end h-5 border-gray-200 border-solid"},Me={class:"flex text-sm font-medium cursor-pointer select-none text-primary-400"},$e={class:"absolute items-center left-6 top-2.5 select-none"},De={class:"relative block"},Ve={setup(i){q("utils");const r=W(),M=Ce();R();const B=H(),b=G(),{t:f}=O();let _=x(!1),I=x(!0);const d=fe({name:"",unit_id:"",price:""}),p=x(null),v=A(()=>!r.totalItems&&!I.value),w=A({get:()=>r.selectedItems,set:s=>r.selectItem(s)}),$=A(()=>[{key:"status",thClass:"extra w-10",tdClass:"font-medium text-gray-900",placeholderClass:"w-10",sortable:!1},{key:"name",label:f("items.name"),thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"unit_name",label:f("items.unit")},{key:"price",label:f("items.price")},{key:"created_at",label:f("items.added_on")},{key:"actions",thClass:"text-right",tdClass:"text-right text-sm font-medium",sortable:!1}]);he(d,()=>{J()},{debounce:500}),r.fetchItemUnits({limit:"all"}),ye(()=>{r.selectAllField&&r.selectAllItems()});function D(){d.name="",d.unit_id="",d.price=""}function E(){return b.hasAbilities([L.DELETE_ITEM,L.EDIT_ITEM])}function N(){_.value&&D(),_.value=!_.value}function j(){p.value&&p.value.refresh()}function J(){j()}async function K(s){return(await r.fetchItemUnits({search:s})).data.data}async function X({page:s,filter:c,sort:k}){let V={search:d.name,unit_id:d.unit_id!==null?d.unit_id:"",price:Math.round(d.price*100),orderByField:k.fieldName||"created_at",orderBy:k.order||"desc",page:s};I.value=!0;let h=await r.fetchItems(V);return I.value=!1,{data:h.data.data,pagination:{totalPages:h.data.meta.last_page,currentPage:s,totalCount:h.data.meta.total,limit:10}}}function Q(){B.openDialog({title:f("general.are_you_sure"),message:f("items.confirm_delete",2),yesLabel:f("general.ok"),noLabel:f("general.cancel"),variant:"danger",hideNoButton:!1,size:"lg"}).then(s=>{s&&r.deleteMultipleItems().then(c=>{c.data.success&&p.value&&p.value.refresh()})})}return(s,c)=>{const k=o("BaseBreadcrumbItem"),V=o("BaseBreadcrumb"),h=o("BaseIcon"),S=o("BaseButton"),Y=o("BasePageHeader"),ee=o("BaseInput"),T=o("BaseInputGroup"),te=o("BaseMultiselect"),le=o("BaseMoney"),ae=o("BaseFilterWrapper"),ne=o("BaseEmptyPlaceholder"),se=o("BaseDropdownItem"),oe=o("BaseDropdown"),z=o("BaseCheckbox"),ie=o("router-link"),re=o("BaseFormatMoney"),de=o("BaseTable"),ce=o("BasePage");return m(),C(ce,null,{default:t(()=>[l(Y,{title:s.$t("items.title")},{actions:t(()=>[n("div",we,[P(l(S,{variant:"primary-outline",onClick:N},{right:t(e=>[a(_)?(m(),C(h,{key:1,name:"XIcon",class:u(e.class)},null,8,["class"])):(m(),C(h,{key:0,class:u(e.class),name:"FilterIcon"},null,8,["class"]))]),default:t(()=>[g(y(s.$t("general.filter"))+" ",1)]),_:1},512),[[U,a(r).totalItems]]),a(b).hasAbilities(a(L).CREATE_ITEM)?(m(),C(S,{key:0,onClick:c[0]||(c[0]=e=>s.$router.push("/admin/items/create"))},{left:t(e=>[l(h,{name:"PlusIcon",class:u(e.class)},null,8,["class"])]),default:t(()=>[g(" "+y(s.$t("items.add_item")),1)]),_:1})):F("",!0)])]),default:t(()=>[l(V,null,{default:t(()=>[l(k,{title:s.$t("general.home"),to:"dashboard"},null,8,["title"]),l(k,{title:s.$t("items.item",2),to:"#",active:""},null,8,["title"])]),_:1})]),_:1},8,["title"]),l(ae,{show:a(_),class:"mt-5",onClear:D},{default:t(()=>[l(T,{label:s.$t("items.name"),class:"text-left"},{default:t(()=>[l(ee,{modelValue:a(d).name,"onUpdate:modelValue":c[1]||(c[1]=e=>a(d).name=e),type:"text",name:"name",autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label"]),l(T,{label:s.$t("items.unit"),class:"text-left"},{default:t(()=>[l(te,{modelValue:a(d).unit_id,"onUpdate:modelValue":c[2]||(c[2]=e=>a(d).unit_id=e),placeholder:s.$t("items.select_a_unit"),"value-prop":"id","track-by":"name","filter-results":!1,label:"name","resolve-on-load":"",delay:500,searchable:"",class:"w-full",options:K},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(T,{class:"text-left",label:s.$t("items.price")},{default:t(()=>[l(le,{modelValue:a(d).price,"onUpdate:modelValue":c[3]||(c[3]=e=>a(d).price=e)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["show"]),P(l(ne,{title:s.$t("items.no_items"),description:s.$t("items.list_of_items")},{actions:t(()=>[a(b).hasAbilities(a(L).CREATE_ITEM)?(m(),C(S,{key:0,variant:"primary-outline",onClick:c[4]||(c[4]=e=>s.$router.push("/admin/items/create"))},{left:t(e=>[l(h,{name:"PlusIcon",class:u(e.class)},null,8,["class"])]),default:t(()=>[g(" "+y(s.$t("items.add_new_item")),1)]),_:1})):F("",!0)]),default:t(()=>[l(Ie,{class:"mt-5 mb-4"})]),_:1},8,["title","description"]),[[U,a(v)]]),P(n("div",ke,[n("div",Fe,[a(r).selectedItems.length?(m(),C(oe,{key:0},{activator:t(()=>[n("span",Me,[g(y(s.$t("general.actions"))+" ",1),l(h,{name:"ChevronDownIcon"})])]),default:t(()=>[l(se,{onClick:Q},{default:t(()=>[l(h,{name:"TrashIcon",class:"mr-3 text-gray-600"}),g(" "+y(s.$t("general.delete")),1)]),_:1})]),_:1})):F("",!0)]),l(de,{ref:(e,Z)=>{Z.table=e,p.value=e},data:X,columns:a($),"placeholder-count":a(r).totalItems>=20?10:5,class:"mt-3"},ve({header:t(()=>[n("div",$e,[l(z,{modelValue:a(r).selectAllField,"onUpdate:modelValue":c[5]||(c[5]=e=>a(r).selectAllField=e),variant:"primary",onChange:a(r).selectAllItems},null,8,["modelValue","onChange"])])]),"cell-status":t(({row:e})=>[n("div",De,[l(z,{id:e.id,modelValue:a(w),"onUpdate:modelValue":c[6]||(c[6]=Z=>_e(w)?w.value=Z:null),value:e.data.id},null,8,["id","modelValue","value"])])]),"cell-name":t(({row:e})=>[l(ie,{to:{path:`items/${e.data.id}/edit`},class:"font-medium text-primary-500"},{default:t(()=>[g(y(e.data.name),1)]),_:2},1032,["to"])]),"cell-unit_name":t(({row:e})=>[n("span",null,y(e.data.unit?e.data.unit.name:"-"),1)]),"cell-price":t(({row:e})=>[l(re,{amount:e.data.price,currency:a(M).selectedCompanyCurrency},null,8,["amount","currency"])]),"cell-created_at":t(({row:e})=>[n("span",null,y(e.data.formatted_created_at),1)]),_:2},[E()?{name:"cell-actions",fn:t(({row:e})=>[l(ge,{row:e.data,table:p.value,"load-data":j},null,8,["row","table"])])}:void 0]),1032,["columns","placeholder-count"])],512),[[U,!a(v)]])]),_:1})}}};export{Ve as default};
