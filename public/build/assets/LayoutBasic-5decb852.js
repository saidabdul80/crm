import{x as ye,y as fe,z as K,A as Y,m as e,B as ge,f as P,C as W,D as H,E as G,e as J,g as k,F as ve,l as D,h as T,i as z,G as be,k as se,r as g,o,n as B,w as r,b as s,q as U,t as h,a as t,c as d,H as N,I as S,s as Z,J as X,K as ee,L as A,M as F,T as re,N as xe,S as we,d as $e,O as R,P as Ce,Q,R as ke,_ as Se,U as Be,u as Ie,V as Ee,W as Me}from"./main-9a914193.js";import{u as le}from"./exchange-rate-938880b7.js";import{_ as Ue}from"./cowris-logo-black-c2c0856c.js";import{u as Ve}from"./users-0019a873.js";import{N as Ae}from"./NotificationRoot-b06f5974.js";import{V as Le}from"./index.esm-c606ef5d.js";function Ne(b){var i;const a=e(b);return(i=a==null?void 0:a.$el)!=null?i:a}const ie=ye?window:void 0;function Fe(...b){let i,a,l,p;if(fe(b[0])?([a,l,p]=b,i=ie):[i,a,l,p]=b,!i)return K;let m=K;const y=Y(()=>e(i),c=>{m(),c&&(c.addEventListener(a,l,p),m=()=>{c.removeEventListener(a,l,p),m=K})},{immediate:!0,flush:"post"}),v=()=>{y(),m()};return ge(v),v}function ce(b,i,a={}){const{window:l=ie,event:p="pointerdown"}=a;return l?Fe(l,p,y=>{const v=Ne(b);v&&(v===y.target||y.composedPath().includes(v)||i(y))},{passive:!0}):void 0}var ne;(function(b){b.UP="UP",b.RIGHT="RIGHT",b.DOWN="DOWN",b.LEFT="LEFT",b.NONE="NONE"})(ne||(ne={}));const Re={class:"flex justify-between w-full"},Te=["onSubmit"],Oe={class:"p-4 mb-16 sm:p-6 space-y-4"},De={key:1,class:"flex flex-col items-center"},Ge={class:"z-0 flex justify-end p-4 bg-gray-50 border-modal-bg"},je={setup(b){const i=P(),a=W(),l=H(),p=G(),{t:m}=J();let y=k(!1),v=k(null),c=k(!1),_=k(null),u=k(null);const f=ve({name:null,currency:"",address:{country_id:null}}),x=D(()=>l.active&&l.componentName==="CompanyModal"),w={newCompanyForm:{name:{required:T.withMessage(m("validation.required"),z),minLength:T.withMessage(m("validation.name_min_length",{count:3}),be(3))},address:{country_id:{required:T.withMessage(m("validation.required"),z)}},currency:{required:T.withMessage(m("validation.required"),z)}}},n=se(w,{newCompanyForm:f});async function $(){c.value=!0,await p.fetchCurrencies(),await p.fetchCountries(),f.currency=a.selectedCompanyCurrency.id,f.address.country_id=a.selectedCompany.address.country_id,c.value=!1}function I(E,M){u.value=E,_.value=M}function C(){u.value=null,_.value=null}async function V(){if(n.value.newCompanyForm.$touch(),n.value.$invalid)return!0;y.value=!0;try{const E=await a.addNewCompany(f);if(E.data.data){if(await a.setSelectedCompany(E.data.data),_&&_.value){let M=new FormData;M.append("company_logo",JSON.stringify({name:u.value,data:_.value})),await a.updateCompanyLogo(M),i.push("/admin/dashboard")}await p.setIsAppLoaded(!1),await p.bootstrap(),j()}y.value=!1}catch{y.value=!1}}function O(){f.name="",f.currency="",f.address.country_id="",n.value.$reset()}function j(){l.closeModal(),setTimeout(()=>{O(),n.value.$reset()},300)}return(E,M)=>{const te=g("BaseIcon"),ue=g("BaseContentPlaceholdersBox"),de=g("BaseContentPlaceholders"),me=g("BaseFileUploader"),q=g("BaseInputGroup"),pe=g("BaseInput"),ae=g("BaseMultiselect"),_e=g("BaseInputGrid"),oe=g("BaseButton"),he=g("BaseModal");return o(),B(he,{show:e(x),onClose:j,onOpen:$},{header:r(()=>[s("div",Re,[U(h(e(l).title)+" ",1),t(te,{name:"XIcon",class:"w-6 h-6 text-gray-500 cursor-pointer",onClick:j})])]),default:r(()=>[s("form",{action:"",onSubmit:Z(V,["prevent"])},[s("div",Oe,[t(_e,{layout:"one-column"},{default:r(()=>[t(q,{"content-loading":e(c),label:E.$t("settings.company_info.company_logo")},{default:r(()=>[e(c)?(o(),B(de,{key:0},{default:r(()=>[t(ue,{rounded:!0,class:"w-full h-24"})]),_:1})):(o(),d("div",De,[t(me,{"preview-image":e(v),base64:"",onRemove:C,onChange:I},null,8,["preview-image"])]))]),_:1},8,["content-loading","label"]),t(q,{label:E.$t("settings.company_info.company_name"),error:e(n).newCompanyForm.name.$error&&e(n).newCompanyForm.name.$errors[0].$message,"content-loading":e(c),required:""},{default:r(()=>[t(pe,{modelValue:e(f).name,"onUpdate:modelValue":M[0]||(M[0]=L=>e(f).name=L),invalid:e(n).newCompanyForm.name.$error,"content-loading":e(c),onInput:M[1]||(M[1]=L=>e(n).newCompanyForm.name.$touch())},null,8,["modelValue","invalid","content-loading"])]),_:1},8,["label","error","content-loading"]),t(q,{"content-loading":e(c),label:E.$t("settings.company_info.country"),error:e(n).newCompanyForm.address.country_id.$error&&e(n).newCompanyForm.address.country_id.$errors[0].$message,required:""},{default:r(()=>[t(ae,{modelValue:e(f).address.country_id,"onUpdate:modelValue":M[2]||(M[2]=L=>e(f).address.country_id=L),"content-loading":e(c),label:"name",invalid:e(n).newCompanyForm.address.country_id.$error,options:e(p).countries,"value-prop":"id","can-deselect":!0,"can-clear":!1,searchable:"","track-by":"name"},null,8,["modelValue","content-loading","invalid","options"])]),_:1},8,["content-loading","label","error"]),t(q,{label:E.$t("wizard.currency"),error:e(n).newCompanyForm.currency.$error&&e(n).newCompanyForm.currency.$errors[0].$message,"content-loading":e(c),"help-text":E.$t("wizard.currency_set_alert"),required:""},{default:r(()=>[t(ae,{modelValue:e(f).currency,"onUpdate:modelValue":M[3]||(M[3]=L=>e(f).currency=L),"content-loading":e(c),options:e(p).currencies,label:"name","value-prop":"id",searchable:!0,"track-by":"name",placeholder:E.$t("settings.currencies.select_currency"),invalid:e(n).newCompanyForm.currency.$error,class:"w-full"},null,8,["modelValue","content-loading","options","placeholder","invalid"])]),_:1},8,["label","error","content-loading","help-text"])]),_:1})]),s("div",Ge,[t(oe,{class:"mr-3 text-sm",variant:"primary-outline",outline:"",type:"button",onClick:j},{default:r(()=>[U(h(E.$t("general.cancel")),1)]),_:1}),t(oe,{loading:e(y),disabled:e(y),variant:"primary",type:"submit"},{left:r(L=>[e(y)?S("",!0):(o(),B(te,{key:0,name:"SaveIcon",class:N(L.class)},null,8,["class"]))]),default:r(()=>[U(" "+h(E.$t("general.save")),1)]),_:1},8,["loading","disabled"])])],40,Te)]),_:1},8,["show"])}}},qe={key:0,class:"w-16 text-sm font-medium truncate sm:w-auto"},ze={key:0,class:"absolute right-0 mt-2 bg-white rounded-md shadow-lg"},Pe={class:"overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full w-[250px] max-h-[350px] scrollbar-thumb-gray-300 scrollbar-track-gray-10 pb-4"},We={class:"px-3 py-2 text-xs font-semibold text-gray-400 mb-0.5 block uppercase"},He={key:0,class:"flex flex-col items-center justify-center p-2 px-3 mt-4 text-base text-gray-400"},Je={key:1},Xe={key:0},Ke=["onClick"],Qe={class:"flex items-center"},Ye={class:"flex items-center justify-center mr-3 overflow-hidden text-base font-semibold bg-gray-200 rounded-md w-9 h-9 text-primary-500"},Ze={key:0},et=["src"],tt={class:"flex flex-col"},at={class:"text-sm"},ot={class:"font-medium"},nt={setup(b){const i=W(),a=H(),l=X(),p=P(),m=G(),{t:y}=J(),v=ee(),c=k(!1),_=k(""),u=k(null);Y(l,()=>{c.value=!1,_.value=""}),ce(u,()=>{c.value=!1});function f(n){if(n)return n.split(" ")[0].charAt(0).toUpperCase()}function x(){a.openModal({title:y("company_switcher.new_company"),componentName:"CompanyModal",size:"sm"})}async function w(n){await i.setSelectedCompany(n),p.push("/admin/dashboard"),await m.setIsAppLoaded(!1),await m.bootstrap()}return(n,$)=>{const I=g("BaseIcon");return o(),d("div",{ref:(C,V)=>{V.companySwitchBar=C,u.value=C},class:"relative rounded"},[t(je),s("div",{class:"flex items-center justify-center px-3 h-8 md:h-9 ml-2 text-sm text-white bg-white rounded cursor-pointer bg-opacity-20",onClick:$[0]||($[0]=C=>c.value=!c.value)},[e(i).selectedCompany?(o(),d("span",qe,h(e(i).selectedCompany.name),1)):S("",!0),t(I,{name:"ChevronDownIcon",class:"h-5 ml-1 text-white"})]),t(re,{"enter-active-class":"transition duration-200 ease-out","enter-from-class":"translate-y-1 opacity-0","enter-to-class":"translate-y-0 opacity-100","leave-active-class":"transition duration-150 ease-in","leave-from-class":"translate-y-0 opacity-100","leave-to-class":"translate-y-1 opacity-0"},{default:r(()=>[c.value?(o(),d("div",ze,[s("div",Pe,[s("label",We,h(n.$t("company_switcher.label")),1),e(i).companies.length<1?(o(),d("div",He,[t(I,{name:"ExclamationCircleIcon",class:"h-5 text-gray-400"}),U(" "+h(n.$t("company_switcher.no_results_found")),1)])):(o(),d("div",Je,[e(i).companies.length>0?(o(),d("div",Xe,[(o(!0),d(A,null,F(e(i).companies,(C,V)=>(o(),d("div",{key:V,class:N(["p-2 px-3 rounded-md cursor-pointer hover:bg-gray-100 hover:text-primary-500",{"bg-gray-100 text-primary-500":e(i).selectedCompany.id===C.id}]),onClick:O=>w(C)},[s("div",Qe,[s("span",Ye,[C.logo?(o(),d("img",{key:1,src:C.logo,alt:"Company logo",class:"w-full h-full object-contain"},null,8,et)):(o(),d("span",Ze,h(f(C.name)),1))]),s("div",tt,[s("span",at,h(C.name),1)])])],10,Ke))),128))])):S("",!0)]))]),e(v).currentUser.is_owner?(o(),d("div",{key:0,class:"flex items-center justify-center p-4 pl-3 border-t-2 border-gray-100 cursor-pointer text-primary-400 hover:text-primary-500",onClick:x},[t(I,{name:"PlusIcon",class:"h-5 mr-2"}),s("span",ot,h(n.$t("company_switcher.add_new_company")),1)])):S("",!0)])):S("",!0)]),_:1})],512)}}},st={key:0,class:"scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-300 scrollbar-track-gray-100 overflow-y-auto bg-white rounded-md mt-2 shadow-lg p-3 absolute w-[300px] h-[200px] right-0"},rt={key:0,class:"flex items-center justify-center text-gray-400 text-base flex-col mt-4"},lt={key:1},it={key:0},ct={class:"text-sm text-gray-400 mb-0.5 block px-2 uppercase"},ut={class:"flex items-center justify-center w-9 h-9 mr-3 text-base font-semibold bg-gray-200 rounded-full text-primary-500"},dt={class:"flex flex-col"},mt={class:"text-sm"},pt={key:0,class:"text-xs text-gray-400"},_t={key:1,class:"text-xs text-gray-400"},ht={key:1,class:"mt-2"},yt={class:"text-sm text-gray-400 mb-2 block px-2 mb-0.5 uppercase"},ft={class:"flex items-center justify-center w-9 h-9 mr-3 text-base font-semibold bg-gray-200 rounded-full text-primary-500"},gt={class:"flex flex-col"},vt={class:"text-sm"},bt={class:"text-xs text-gray-400"},xt={setup(b){const i=Ve(),a=k(!1),l=k(""),p=k(null),m=k(!1),y=X();Y(y,()=>{a.value=!1,l.value=""}),v=xe.exports.debounce(v,500),ce(p,()=>{a.value=!1,l.value=""});function v(){let _={search:l.value};l.value&&(m.value=!0,i.searchUsers(_).then(()=>{a.value=!0}),m.value=!1),l.value===""&&(a.value=!1)}function c(_){if(_)return _.split(" ")[0].charAt(0).toUpperCase()}return(_,u)=>{const f=g("BaseIcon"),x=g("BaseInput"),w=g("router-link");return o(),d("div",{ref:(n,$)=>{$.searchBar=n,p.value=n},class:"hidden rounded md:block relative"},[s("div",null,[t(x,{modelValue:l.value,"onUpdate:modelValue":u[0]||(u[0]=n=>l.value=n),placeholder:"Search...","container-class":"!rounded",class:"h-8 md:h-9 !rounded",onInput:v},{left:r(()=>[t(f,{name:"SearchIcon",class:"text-gray-400"})]),right:r(()=>[m.value?(o(),B(we,{key:0,class:"h-5 text-primary-500"})):S("",!0)]),_:1},8,["modelValue"])]),t(re,{"enter-active-class":"transition duration-200 ease-out","enter-from-class":"translate-y-1 opacity-0","enter-to-class":"translate-y-0 opacity-100","leave-active-class":"transition duration-150 ease-in","leave-from-class":"translate-y-0 opacity-100","leave-to-class":"translate-y-1 opacity-0"},{default:r(()=>[a.value?(o(),d("div",st,[e(i).userList.length<1&&e(i).customerList.length<1?(o(),d("div",rt,[t(f,{name:"ExclamationCircleIcon",class:"text-gray-400"}),U(" "+h(_.$t("global_search.no_results_found")),1)])):(o(),d("div",lt,[e(i).customerList.length>0?(o(),d("div",it,[s("label",ct,h(_.$t("global_search.customers")),1),(o(!0),d(A,null,F(e(i).customerList,(n,$)=>(o(),d("div",{key:$,class:"p-2 hover:bg-gray-100 cursor-pointer rounded-md"},[t(w,{to:{path:`/admin/customers/${n.id}/view`},class:"flex items-center"},{default:r(()=>[s("span",ut,h(c(n.name)),1),s("div",dt,[s("span",mt,h(n.name),1),n.contact_name?(o(),d("span",pt,h(n.contact_name),1)):(o(),d("span",_t,h(n.email),1))])]),_:2},1032,["to"])]))),128))])):S("",!0),e(i).userList.length>0?(o(),d("div",ht,[s("label",yt,h(_.$t("global_search.users")),1),(o(!0),d(A,null,F(e(i).userList,(n,$)=>(o(),d("div",{key:$,class:"p-2 hover:bg-gray-100 cursor-pointer rounded-md"},[t(w,{to:{path:`/admin/users/${n.id}/edit`},class:"flex items-center"},{default:r(()=>[s("span",ft,h(c(n.name)),1),s("div",gt,[s("span",vt,h(n.name),1),s("span",bt,h(n.email),1)])]),_:2},1032,["to"])]))),128))])):S("",!0)]))])):S("",!0)]),_:1})],512)}}},wt={class:"fixed top-0 left-0 z-20 flex items-center justify-between w-full px-4 py-3 md:h-16 md:px-8 bg-gradient-to-r from-gray-900 to-gray-500"},$t=s("img",{src:Ue,class:"h-6"},null,-1),Ct=["onClick"],kt={class:"flex float-right h-8 m-0 list-none md:h-9"},St={key:0,class:"relative hidden float-left m-0 md:block"},Bt={class:"flex items-center justify-center w-8 h-8 ml-2 text-sm text-black bg-white rounded md:h-9 md:w-9"},It={class:"ml-2"},Et={class:"relative block float-left ml-2"},Mt=["src"],Ut={setup(b){const i=$e(),a=ee(),l=G(),p=P(),m=D(()=>a.currentUser&&a.currentUser.avatar!==0?a.currentUser.avatar:y());D(()=>l.globalSettings.admin_portal_logo?"/storage/"+l.globalSettings.admin_portal_logo:!1);function y(){return"imgUrl"}function v(){return a.hasAbilities([R.CREATE_INVOICE,R.CREATE_ESTIMATE,R.CREATE_CUSTOMER])}async function c(){await i.logout(),p.push("/login")}function _(){l.setSidebarVisibility(!0)}return(u,f)=>{const x=g("router-link"),w=g("BaseIcon"),n=g("BaseDropdownItem"),$=g("BaseDropdown");return o(),d("header",wt,[t(x,{to:"/admin/dashboard",class:"float-none text-lg not-italic font-black tracking-wider text-white brand-main md:float-left font-base hidden md:block"},{default:r(()=>[$t]),_:1}),s("div",{class:N([{"is-active":e(l).isSidebarOpen},"flex float-left p-1 overflow-visible text-sm ease-linear bg-white border-0 rounded cursor-pointer md:hidden md:ml-0 hover:bg-gray-100"]),onClick:Z(_,["prevent"])},[t(w,{name:"MenuIcon",class:"!w-6 !h-6 text-gray-500"})],10,Ct),s("ul",kt,[v?(o(),d("li",St,[t($,{"width-class":"w-48"},{activator:r(()=>[s("div",Bt,[t(w,{name:"PlusIcon",class:"w-5 h-5 text-gray-600"})])]),default:r(()=>[t(x,{to:"/admin/invoices/create"},{default:r(()=>[e(a).hasAbilities(e(R).CREATE_INVOICE)?(o(),B(n,{key:0},{default:r(()=>[t(w,{name:"DocumentTextIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"}),U(" "+h(u.$t("invoices.new_invoice")),1)]),_:1})):S("",!0)]),_:1}),t(x,{to:"/admin/estimates/create"},{default:r(()=>[e(a).hasAbilities(e(R).CREATE_ESTIMATE)?(o(),B(n,{key:0},{default:r(()=>[t(w,{name:"DocumentIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"}),U(" "+h(u.$t("estimates.new_estimate")),1)]),_:1})):S("",!0)]),_:1}),t(x,{to:"/admin/customers/create"},{default:r(()=>[e(a).hasAbilities(e(R).CREATE_CUSTOMER)?(o(),B(n,{key:0},{default:r(()=>[t(w,{name:"UserIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"}),U(" "+h(u.$t("customers.new_customer")),1)]),_:1})):S("",!0)]),_:1})]),_:1})])):S("",!0),s("li",It,[e(a).currentUser.is_owner||e(a).hasAbilities(e(R).VIEW_CUSTOMER)?(o(),B(xt,{key:0})):S("",!0)]),s("li",null,[t(nt)]),s("li",Et,[t($,{"width-class":"w-48"},{activator:r(()=>[s("img",{src:e(m),class:"block w-8 h-8 rounded md:h-9 md:w-9 object-cover"},null,8,Mt)]),default:r(()=>[t(x,{to:"/admin/settings/account-settings"},{default:r(()=>[t(n,null,{default:r(()=>[t(w,{name:"CogIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"}),U(" "+h(u.$t("navigation.settings")),1)]),_:1})]),_:1}),t(n,{onClick:c},{default:r(()=>[t(w,{name:"LogoutIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"}),U(" "+h(u.$t("navigation.logout")),1)]),_:1})]),_:1})])])])}}},Vt={class:"relative flex flex-col flex-1 w-full max-w-xs bg-white"},At={class:"absolute top-0 right-0 pt-2 -mr-12"},Lt=s("span",{class:"sr-only"},"Close sidebar",-1),Nt={class:"flex-1 h-0 pt-5 pb-4 overflow-y-auto"},Ft={class:"flex items-center shrink-0 px-4 mb-10"},Rt=s("div",{class:"shrink-0 w-14"},null,-1),Tt={class:"hidden w-56 h-screen pb-32 overflow-y-auto bg-white border-r border-gray-200 border-solid xl:w-64 md:fixed md:flex md:flex-col md:inset-y-0 pt-16"},Ot={setup(b){const i=X(),a=G();function l(p){return i.path.indexOf(p)>-1}return(p,m)=>{const y=g("BaseIcon"),v=g("router-link");return o(),d(A,null,[t(e(Be),{as:"template",show:e(a).isSidebarOpen},{default:r(()=>[t(e(Ce),{as:"div",class:"fixed inset-0 z-40 flex md:hidden",onClose:m[3]||(m[3]=c=>e(a).setSidebarVisibility(!1))},{default:r(()=>[t(e(Q),{as:"template",enter:"transition-opacity ease-linear duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity ease-linear duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:r(()=>[t(e(ke),{class:"fixed inset-0 bg-gray-600 bg-opacity-75"})]),_:1}),t(e(Q),{as:"template",enter:"transition ease-in-out duration-300","enter-from":"-translate-x-full","enter-to":"translate-x-0",leave:"transition ease-in-out duration-300","leave-from":"translate-x-0","leave-to":"-translate-x-full"},{default:r(()=>[s("div",Vt,[t(e(Q),{as:"template",enter:"ease-in-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:r(()=>[s("div",At,[s("button",{class:"flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",onClick:m[0]||(m[0]=c=>e(a).setSidebarVisibility(!1))},[Lt,t(y,{name:"XIcon",class:"w-6 h-6 text-white","aria-hidden":"true"})])])]),_:1}),s("div",Nt,[s("div",Ft,[t(Se,{class:"block h-auto max-w-full w-36 text-primary-400",alt:"Crater Logo"})]),(o(!0),d(A,null,F(e(a).menuGroups,c=>(o(),d("nav",{key:c,class:"mt-5 space-y-1"},[(o(!0),d(A,null,F(c,_=>(o(),B(v,{key:_.name,to:_.link,class:N([l(_.link)?"text-primary-500 border-gray-500 bg-gray-100 ":"text-black","cursor-pointer px-0 pl-4 py-3 border-transparent flex items-center border-l-4 border-solid text-sm not-italic font-medium"]),onClick:m[2]||(m[2]=u=>e(a).setSidebarVisibility(!1))},{default:r(()=>[t(y,{name:_.icon,class:N([l(_.link)?"text-primary-500 ":"text-gray-400","mr-4 shrink-0 h-5 w-5"]),onClick:m[1]||(m[1]=u=>e(a).setSidebarVisibility(!1))},null,8,["name","class"]),U(" "+h(p.$t(_.title)),1)]),_:2},1032,["to","class"]))),128))]))),128))])])]),_:1}),Rt]),_:1})]),_:1},8,["show"]),s("div",Tt,[(o(!0),d(A,null,F(e(a).menuGroups,(c,_)=>(o(),d("div",{key:c,class:N(["p-0 m-0 list-none",_==0?"mt-6":""])},[(o(!0),d(A,null,F(c,u=>(o(),B(v,{key:u,to:u.link,class:N([l(u.link)?"text-primary-500 border-gray-500 bg-gray-100 ":"text-black","cursor-pointer px-0 pl-6 hover:bg-gray-50 py-3 group flex items-center border-l-4 border-solid border-transparent text-sm not-italic font-medium"])},{default:r(()=>[t(y,{name:u.icon,class:N([l(u.link)?"text-primary-500 group-hover:text-primary-500 ":"text-gray-400 group-hover:text-black","mr-4 shrink-0 h-5 w-5 "])},null,8,["name","class"]),U(" "+h(p.$t(u.title)),1)]),_:2},1032,["to","class"]))),128))],2))),128))])],64)}}},Dt={class:"font-medium text-lg text-left"},Gt={class:"mt-2 text-sm leading-snug text-gray-500",style:{"max-width":"680px"}},jt=["onSubmit"],qt={class:"text-gray-500 sm:text-sm"},zt={class:"text-gray-400 text-xs mt-2 font-light"},Pt={slot:"footer",class:"z-0 flex justify-end mt-4 pt-4 border-t border-gray-200 border-solid border-modal-bg"},Wt={emits:["update"],setup(b,{emit:i}){const a=le();Ie();const l=W(),{t:p,tm:m}=J();let y=k(!1);k(!1);const v={exchange_rate:{required:T.withMessage(p("validation.required"),z),decimal:T.withMessage(p("validation.valid_exchange_rate"),Ee)}},c=se();async function _(){if(c.value.$touch(),c.value.$invalid)return!0;y.value=!0;let u=a.bulkCurrencies.map(x=>({id:x.id,exchange_rate:x.exchange_rate})),f=await a.updateBulkExchangeRate({currencies:u});f.data.success&&i("update",f.data.success),y.value=!1}return(u,f)=>{const x=g("BaseInput"),w=g("BaseInputGroup"),n=g("BaseButton"),$=g("BaseCard");return o(),B($,null,{default:r(()=>[s("h6",Dt,h(u.$t("settings.exchange_rate.title")),1),s("p",Gt,h(u.$t("settings.exchange_rate.description",{currency:e(l).selectedCompanyCurrency.name})),1),s("form",{action:"",onSubmit:Z(_,["prevent"])},[(o(!0),d(A,null,F(e(a).bulkCurrencies,(I,C)=>(o(),B(e(Le),{key:C,state:I,rules:v},{default:r(({v:V})=>[t(w,{class:"my-5",label:`${I.code} to ${e(l).selectedCompanyCurrency.code}`,error:V.exchange_rate.$error&&V.exchange_rate.$errors[0].$message,required:""},{default:r(()=>[t(x,{modelValue:I.exchange_rate,"onUpdate:modelValue":O=>I.exchange_rate=O,addon:`1 ${I.code} =`,invalid:V.exchange_rate.$error,onInput:O=>V.exchange_rate.$touch()},{right:r(()=>[s("span",qt,h(e(l).selectedCompanyCurrency.code),1)]),_:2},1032,["modelValue","onUpdate:modelValue","addon","invalid","onInput"]),s("span",zt,h(u.$t("settings.exchange_rate.exchange_help_text",{currency:I.code,baseCurrency:e(l).selectedCompanyCurrency.code})),1)]),_:2},1032,["label","error"])]),_:2},1032,["state"]))),128)),s("div",Pt,[t(n,{loading:e(y),variant:"primary",type:"submit"},{default:r(()=>[U(h(u.$t("general.save")),1)]),_:1},8,["loading"])])],40,jt)]),_:1})}}},Ht={setup(b){const i=H(),a=D(()=>i.active&&i.componentName==="ExchangeRateBulkUpdateModal");function l(){i.closeModal()}return(p,m)=>{const y=g("BaseModal");return o(),B(y,{show:e(a)},{default:r(()=>[t(Wt,{onUpdate:m[0]||(m[0]=v=>l())})]),_:1},8,["show"])}}},Jt={key:0,class:"h-full"},Xt={class:"h-screen h-screen-ios overflow-y-auto md:pl-56 xl:pl-64 min-h-0"},Kt={class:"pt-16 pb-16"},oa={setup(b){const i=G(),a=X(),l=ee(),p=P(),m=H();J();const y=le(),v=W(),c=D(()=>i.isAppLoaded);return Me(()=>{i.bootstrap().then(_=>{a.meta.ability&&!l.hasAbilities(a.meta.ability)?p.push({name:"account.settings"}):a.meta.isOwner&&!l.currentUser.is_owner&&p.push({name:"account.settings"}),_.data.current_company_settings.bulk_exchange_rate_configured==="NO"&&y.fetchBulkCurrencies().then(u=>{if(u.data.currencies.length)m.openModal({componentName:"ExchangeRateBulkUpdateModal",size:"sm"});else{let f={settings:{bulk_exchange_rate_configured:"YES"}};v.updateCompanySettings({data:f})}})})}),(_,u)=>{const f=g("router-view"),x=g("BaseGlobalLoader");return e(c)?(o(),d("div",Jt,[t(Ae),t(Ut),t(Ot),t(Ht),s("main",Xt,[s("div",Kt,[t(f)])])])):(o(),B(x,{key:1}))}}};export{oa as default};
