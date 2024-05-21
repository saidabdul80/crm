import{ac as X,g as I,ad as ie,ae as xe,l as S,af as ne,ag as Q,ah as ke,ai as Y,aj as q,ak as ue,al as Be,am as Se,an as L,ao as oe,ap as Ie,a3 as de,aq as se,a5 as De,ar as Me,E as Ue,C as Pe,e as Oe,f as qe,J as Le,h as f,i as T,G as R,as as re,j as Re,Z as je,at as Ge,au as N,k as ze,r as h,o as x,n as k,w as r,b as a,a as o,H as j,q as le,t as B,m as e,av as Ee,I as U,p as W,c as ae,s as Fe}from"./main-9a914193.js";import{_ as Ke}from"./CreateCustomFields-c13ceebe.js";import"./dynamic-import-helper-be004503.js";var b;(function(V){V[V.Open=0]="Open",V[V.Closed=1]="Closed"})(b||(b={}));var ce=Symbol("DisclosureContext");function G(V){var t=de(ce,null);if(t===null){var _=new Error("<"+V+" /> is missing a parent <Disclosure /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(_,G),_}return t}var me=Symbol("DisclosurePanelContext");function Te(){return de(me,null)}var A=X({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup:function(t,_){var y=_.slots,w=_.attrs,M="headlessui-disclosure-button-"+se(),c="headlessui-disclosure-panel-"+se(),$=I(t.defaultOpen?b.Open:b.Closed),P=I(null),s=I(null),g={buttonId:M,panelId:c,disclosureState:$,panel:P,button:s,toggleDisclosure:function(){var v;$.value=ne($.value,(v={},v[b.Open]=b.Closed,v[b.Closed]=b.Open,v))},closeDisclosure:function(){$.value!==b.Closed&&($.value=b.Closed)},close:function(v){g.closeDisclosure();var D=function(){return v?v instanceof HTMLElement?v:v.value instanceof HTMLElement?q(v):q(g.button):q(g.button)}();D==null||D.focus()}};return ie(ce,g),xe(S(function(){var p;return ne($.value,(p={},p[b.Open]=Q.Open,p[b.Closed]=Q.Closed,p))})),function(){var p=ke(t,["defaultOpen"]),v={open:$.value===b.Open,close:g.close};return Y({props:p,slot:v,slots:y,attrs:w,name:"Disclosure"})}}}),J=X({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1}},render:function(){var t=G("DisclosureButton"),_={open:t.disclosureState.value===b.Open},y=this.isWithinPanel?{ref:"el",type:this.type,onClick:this.handleClick,onKeydown:this.handleKeyDown}:{id:this.id,ref:"el",type:this.type,"aria-expanded":this.$props.disabled?void 0:t.disclosureState.value===b.Open,"aria-controls":q(t.panel)?t.panelId:void 0,disabled:this.$props.disabled?!0:void 0,onClick:this.handleClick,onKeydown:this.handleKeyDown,onKeyup:this.handleKeyUp};return Y({props:ue({},this.$props,y),slot:_,attrs:this.$attrs,slots:this.$slots,name:"DisclosureButton"})},setup:function(t,_){var y=_.attrs,w=G("DisclosureButton"),M=Te(),c=M===null?!1:M===w.panelId,$=I(null);return c||Be(function(){w.button.value=$.value}),{isWithinPanel:c,id:w.buttonId,el:$,type:Se(S(function(){return{as:t.as,type:y.type}}),$),handleClick:function(){if(!t.disabled)if(c){var s;w.toggleDisclosure(),(s=q(w.button))==null||s.focus()}else w.toggleDisclosure()},handleKeyDown:function(s){var g;if(!t.disabled)if(c)switch(s.key){case L.Space:case L.Enter:s.preventDefault(),s.stopPropagation(),w.toggleDisclosure(),(g=q(w.button))==null||g.focus();break}else switch(s.key){case L.Space:case L.Enter:s.preventDefault(),s.stopPropagation(),w.toggleDisclosure();break}},handleKeyUp:function(s){switch(s.key){case L.Space:s.preventDefault();break}}}}}),Z=X({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},render:function(){var t=G("DisclosurePanel"),_={open:t.disclosureState.value===b.Open,close:t.close},y={id:this.id,ref:"el"};return Y({props:ue({},this.$props,y),slot:_,attrs:this.$attrs,slots:this.$slots,features:oe.RenderStrategy|oe.Static,visible:this.visible,name:"DisclosurePanel"})},setup:function(){var t=G("DisclosurePanel");ie(me,t.panelId);var _=Ie(),y=S(function(){return _!==null?_.value===Q.Open:t.disclosureState.value===b.Open});return{id:t.panelId,el:t.panel,visible:y}}});const Ne=["onSubmit"],We={class:"flex items-center justify-end"},He={class:"grid grid-cols-5 gap-4 mb-8"},Ae={class:"col-span-5 text-lg font-semibold text-left lg:col-span-1"},Je={style:{display:"none"}},Ze={class:"grid grid-cols-5 gap-4 mb-8"},Qe={class:"col-span-5 text-lg font-semibold text-left lg:col-span-1"},Xe={class:"md:col-span-2"},Ye={class:"text-sm text-gray-500"},et={class:"col-span-5 text-lg font-semibold text-left lg:col-span-1"},tt=a("svg",{height:"16px",width:"16px",version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 185.343 185.343","xml:space":"preserve",fill:"#000000",transform:"rotate(90)",stroke:"#000000","stroke-width":"7.599062999999999"},[a("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),a("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),a("g",{id:"SVGRepo_iconCarrier"},[a("g",null,[a("g",null,[a("path",{style:{fill:"#010002"},d:"M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175 l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934 c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"})])])])],-1),nt=[tt],ot={class:"grid grid-cols-5 gap-4 px-4 mt-5 mb-8"},st={class:"space-y-6"},rt={class:"flex items-center justify-start mb-6 md:justify-end md:mb-0"},lt={class:"p-1"},at={class:"col-span-5 text-lg font-semibold text-left lg:col-span-1"},it=a("svg",{height:"16px",width:"16px",version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 185.343 185.343","xml:space":"preserve",fill:"#000000",transform:"rotate(90)",stroke:"#000000","stroke-width":"7.599062999999999"},[a("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),a("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),a("g",{id:"SVGRepo_iconCarrier"},[a("g",null,[a("g",null,[a("path",{style:{fill:"#010002"},d:"M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175 l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934 c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"})])])])],-1),ut=[it],dt={key:0,class:"grid grid-cols-5 gap-4 px-4 mt-5 mb-8"},ct={class:"space-y-6"},mt={key:0,class:"col-span-5 text-lg font-semibold text-left lg:col-span-1"},pt=a("svg",{height:"16px",width:"16px",version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 185.343 185.343","xml:space":"preserve",fill:"#000000",transform:"rotate(90)",stroke:"#000000","stroke-width":"7.599062999999999"},[a("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),a("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),a("g",{id:"SVGRepo_iconCarrier"},[a("g",null,[a("g",null,[a("path",{style:{fill:"#010002"},d:"M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175 l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934 c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"})])])])],-1),gt=[pt],ft={class:"grid grid-cols-5 gap-4 px-4 mt-5 mb-8"},_t={class:"col-span-5 lg:col-span-4"},ht={setup(V){const t=De(),_=Me(),y=Ue(),w=Pe(),M="customFields",{t:c}=Oe(),$=qe(),P=Le();let s=I(!1),g=I(!1),p=I(!1);I(!1);const v=I(!1),D=S(()=>P.name==="customers.edit");let pe=S(()=>t.isFetchingInitialSettings);const ee=S(()=>D.value?c("customers.edit_customer"):c("customers.new_customer")),ge=S(()=>({currentCustomer:{name:{required:f.withMessage(c("validation.required"),T),minLength:f.withMessage(c("validation.name_min_length",{count:3}),R(3))},first_name:{required:f.withMessage(c("validation.required"),T),minLength:f.withMessage(c("validation.name_min_length",{count:3}),R(3))},last_name:{required:f.withMessage(c("validation.required"),T),minLength:f.withMessage(c("validation.name_min_length",{count:3}),R(3))},prefix:{minLength:f.withMessage(c("validation.name_min_length",{count:3}),R(3))},currency_id:{required:f.withMessage(c("validation.required"),T)},email:{required:f.withMessage(c("validation.required"),re(t.currentCustomer.enable_portal==!0)),email:f.withMessage(c("validation.email_incorrect"),Re)},password:{required:f.withMessage(c("validation.required"),re(t.currentCustomer.enable_portal==!0&&!t.currentCustomer.password_added)),minLength:f.withMessage(c("validation.password_min_length",{count:8}),R(8))},confirm_password:{sameAsPassword:f.withMessage(c("validation.password_incorrect"),je(t.currentCustomer.password))},website:{url:f.withMessage(c("validation.invalid_url"),Ge)},billing:{address_street_1:{maxLength:f.withMessage(c("validation.address_maxlength",{count:255}),N(255))},address_street_2:{maxLength:f.withMessage(c("validation.address_maxlength",{count:255}),N(255))}},shipping:{address_street_1:{maxLength:f.withMessage(c("validation.address_maxlength",{count:255}),N(255))},address_street_2:{maxLength:f.withMessage(c("validation.address_maxlength",{count:255}),N(255))}}}})),fe=S(()=>{var l,n;return t.currentCustomer.name=((l=t.currentCustomer)==null?void 0:l.first_name)+" "+((n=t.currentCustomer)==null?void 0:n.last_name),t.currentCustomer.name}),_e=S(()=>`${window.location.origin}/${w.selectedCompany.slug}/customer/login`),i=ze(ge,t,{$scope:M});t.resetCurrentCustomer(),t.fetchCustomerInitialSettings(D.value);async function ve(){if(i.value.$touch(),i.value.$invalid)return!0;v.value=!0;let l={...t.currentCustomer},n=null;try{n=await(D.value?t.updateCustomer:t.addCustomer)(l)}catch{v.value=!1;return}$.push(`/admin/customers/${n.data.data.id}/view`)}return(l,n)=>{const z=h("BaseBreadcrumbItem"),be=h("BaseBreadcrumb-item"),Ce=h("BaseBreadcrumb"),O=h("BaseIcon"),te=h("BaseButton"),he=h("BasePageHeader"),C=h("BaseInput"),m=h("BaseInputGroup"),H=h("BaseMultiselect"),ye=h("BaseSelectInput"),E=h("BaseInputGrid"),F=h("BaseDivider"),we=h("BaseSwitch"),K=h("BaseTextarea"),$e=h("BaseCard"),Ve=h("BasePage");return x(),k(Ve,null,{default:r(()=>[a("form",{onSubmit:Fe(ve,["prevent"])},[o(he,{title:e(ee)},{actions:r(()=>[a("div",We,[o(te,{type:"submit",loading:v.value,disabled:v.value},{left:r(u=>[o(O,{name:"SaveIcon",class:j(u.class)},null,8,["class"])]),default:r(()=>[le(" "+B(e(D)?l.$t("customers.update_customer"):l.$t("customers.save_customer")),1)]),_:1},8,["loading","disabled"])])]),default:r(()=>[o(Ce,null,{default:r(()=>[o(z,{title:l.$t("general.home"),to:"dashboard"},null,8,["title"]),o(z,{title:l.$t("customers.customer",2),to:"/admin/customers"},null,8,["title"]),o(be,{title:e(ee),to:"#",active:""},null,8,["title"])]),_:1})]),_:1},8,["title"]),o($e,{class:"mt-5"},{default:r(()=>[a("div",He,[a("h6",Ae,B(l.$t("customers.basic_info")),1),o(E,{class:"col-span-5 lg:col-span-4"},{default:r(()=>[o(m,{label:"First Name",required:"",error:e(i).currentCustomer.first_name.$error&&e(i).currentCustomer.first_name.$errors[0].$message,"content-loading":e(s)},{default:r(()=>[o(C,{modelValue:e(t).currentCustomer.first_name,"onUpdate:modelValue":n[0]||(n[0]=u=>e(t).currentCustomer.first_name=u),"content-loading":e(s),type:"text",name:"first_name",class:"",invalid:e(i).currentCustomer.first_name.$error,onInput:n[1]||(n[1]=u=>e(i).currentCustomer.first_name.$touch())},null,8,["modelValue","content-loading","invalid"])]),_:1},8,["error","content-loading"]),a("span",Je,B(e(fe)),1),o(m,{label:"Last Name",required:"",error:e(i).currentCustomer.last_name.$error&&e(i).currentCustomer.last_name.$errors[0].$message,"content-loading":e(s)},{default:r(()=>[o(C,{modelValue:e(t).currentCustomer.last_name,"onUpdate:modelValue":n[2]||(n[2]=u=>e(t).currentCustomer.last_name=u),"content-loading":e(s),type:"text",name:"last_name",class:"",invalid:e(i).currentCustomer.last_name.$error,onInput:n[3]||(n[3]=u=>e(i).currentCustomer.last_name.$touch())},null,8,["modelValue","content-loading","invalid"])]),_:1},8,["error","content-loading"]),o(m,{error:e(i).currentCustomer.email.$error&&e(i).currentCustomer.email.$errors[0].$message,"content-loading":e(s),label:l.$t("customers.email")},{default:r(()=>[o(C,{modelValue:e(t).currentCustomer.email,"onUpdate:modelValue":n[4]||(n[4]=u=>e(t).currentCustomer.email=u),modelModifiers:{trim:!0},"content-loading":e(s),type:"text",name:"email",invalid:e(i).currentCustomer.email.$error,onInput:n[5]||(n[5]=u=>e(i).currentCustomer.email.$touch())},null,8,["modelValue","content-loading","invalid"])]),_:1},8,["error","content-loading","label"]),o(m,{label:l.$t("customers.phone"),"content-loading":e(s)},{default:r(()=>[o(C,{modelValue:e(t).currentCustomer.phone,"onUpdate:modelValue":n[6]||(n[6]=u=>e(t).currentCustomer.phone=u),modelModifiers:{trim:!0},"content-loading":e(s),type:"text",name:"phone"},null,8,["modelValue","content-loading"])]),_:1},8,["label","content-loading"]),o(m,{label:l.$t("customers.primary_currency"),"content-loading":e(s),error:e(i).currentCustomer.currency_id.$error&&e(i).currentCustomer.currency_id.$errors[0].$message,required:""},{default:r(()=>[o(H,{modelValue:e(t).currentCustomer.currency_id,"onUpdate:modelValue":n[7]||(n[7]=u=>e(t).currentCustomer.currency_id=u),"value-prop":"id",label:"name","track-by":"name","content-loading":e(s),options:e(y).currencies,searchable:"","can-deselect":!1,placeholder:l.$t("customers.select_currency"),invalid:e(i).currentCustomer.currency_id.$error,class:"w-full"},null,8,["modelValue","content-loading","options","placeholder","invalid"])]),_:1},8,["label","content-loading","error"]),o(m,{label:"Gender","content-loading":e(s)},{default:r(()=>[o(ye,{modelValue:e(t).currentCustomer.gender,"onUpdate:modelValue":n[8]||(n[8]=u=>e(t).currentCustomer.gender=u),"value-prop":"id","track-by":"gender","content-loading":e(s),options:["Male","Female"],"can-deselect":!1,placeholder:"gender",class:"w-full"},null,8,["modelValue","content-loading"])]),_:1},8,["content-loading"])]),_:1})]),o(F,{class:"mb-5 md:mb-8"}),a("div",Ze,[a("h6",Qe,B(l.$t("customers.portal_access")),1),o(E,{class:"col-span-5 lg:col-span-4"},{default:r(()=>[a("div",Xe,[a("p",Ye,B(l.$t("customers.portal_access_text")),1),o(we,{modelValue:e(t).currentCustomer.enable_portal,"onUpdate:modelValue":n[9]||(n[9]=u=>e(t).currentCustomer.enable_portal=u),class:"mt-1 flex"},null,8,["modelValue"])]),e(t).currentCustomer.enable_portal?(x(),k(m,{key:0,"content-loading":e(s),label:l.$t("customers.portal_access_url"),class:"md:col-span-2","help-text":l.$t("customers.portal_access_url_help")},{default:r(()=>[o(Ee,{token:e(_e)},null,8,["token"])]),_:1},8,["content-loading","label","help-text"])):U("",!0),e(t).currentCustomer.enable_portal?(x(),k(m,{key:1,"content-loading":e(s),error:e(i).currentCustomer.password.$error&&e(i).currentCustomer.password.$errors[0].$message,label:l.$t("customers.password")},{default:r(()=>[o(C,{modelValue:e(t).currentCustomer.password,"onUpdate:modelValue":n[12]||(n[12]=u=>e(t).currentCustomer.password=u),modelModifiers:{trim:!0},"content-loading":e(s),type:e(g)?"text":"password",name:"password",invalid:e(i).currentCustomer.password.$error,onInput:n[13]||(n[13]=u=>e(i).currentCustomer.password.$touch())},{right:r(()=>[e(g)?(x(),k(O,{key:0,name:"EyeOffIcon",class:"w-5 h-5 mr-1 text-gray-500 cursor-pointer",onClick:n[10]||(n[10]=u=>W(g)?g.value=!e(g):g=!e(g))})):(x(),k(O,{key:1,name:"EyeIcon",class:"w-5 h-5 mr-1 text-gray-500 cursor-pointer",onClick:n[11]||(n[11]=u=>W(g)?g.value=!e(g):g=!e(g))}))]),_:1},8,["modelValue","content-loading","type","invalid"])]),_:1},8,["content-loading","error","label"])):U("",!0),e(t).currentCustomer.enable_portal?(x(),k(m,{key:2,error:e(i).currentCustomer.confirm_password.$error&&e(i).currentCustomer.confirm_password.$errors[0].$message,"content-loading":e(s),label:"Confirm Password"},{default:r(()=>[o(C,{modelValue:e(t).currentCustomer.confirm_password,"onUpdate:modelValue":n[16]||(n[16]=u=>e(t).currentCustomer.confirm_password=u),modelModifiers:{trim:!0},"content-loading":e(s),type:e(p)?"text":"password",name:"confirm_password",invalid:e(i).currentCustomer.confirm_password.$error,onInput:n[17]||(n[17]=u=>e(i).currentCustomer.confirm_password.$touch())},{right:r(()=>[e(p)?(x(),k(O,{key:0,name:"EyeOffIcon",class:"w-5 h-5 mr-1 text-gray-500 cursor-pointer",onClick:n[14]||(n[14]=u=>W(p)?p.value=!e(p):p=!e(p))})):(x(),k(O,{key:1,name:"EyeIcon",class:"w-5 h-5 mr-1 text-gray-500 cursor-pointer",onClick:n[15]||(n[15]=u=>W(p)?p.value=!e(p):p=!e(p))}))]),_:1},8,["modelValue","content-loading","type","invalid"])]),_:1},8,["error","content-loading"])):U("",!0)]),_:1})]),o(F,{class:"mb-5 md:mb-8"}),o(e(A),null,{default:r(({open:u})=>[o(e(J),{class:"flex w-full justify-between items-center rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/75"},{default:r(()=>[a("h6",et,B(l.$t("customers.billing_address")),1),a("div",{class:j(u?"rotate-180 transform":"")},nt,2)]),_:2},1024),o(e(Z),null,{default:r(()=>[a("div",ot,[e(t).currentCustomer.billing?(x(),k(E,{key:0,class:"col-span-5 lg:col-span-4"},{default:r(()=>[o(m,{label:l.$t("customers.name"),"content-loading":e(s)},{default:r(()=>[o(C,{modelValue:e(t).currentCustomer.billing.name,"onUpdate:modelValue":n[18]||(n[18]=d=>e(t).currentCustomer.billing.name=d),modelModifiers:{trim:!0},"content-loading":e(s),type:"text",class:"w-full",name:"address_name"},null,8,["modelValue","content-loading"])]),_:1},8,["label","content-loading"]),o(m,{label:l.$t("customers.country"),"content-loading":e(s)},{default:r(()=>[o(H,{modelValue:e(t).currentCustomer.billing.country_id,"onUpdate:modelValue":n[19]||(n[19]=d=>e(t).currentCustomer.billing.country_id=d),"value-prop":"id",label:"name","track-by":"name","resolve-on-load":"",searchable:"","content-loading":e(s),options:e(y).countries,placeholder:l.$t("general.select_country"),class:"w-full"},null,8,["modelValue","content-loading","options","placeholder"])]),_:1},8,["label","content-loading"]),o(m,{label:l.$t("customers.state"),"content-loading":e(s)},{default:r(()=>[o(C,{modelValue:e(t).currentCustomer.billing.state,"onUpdate:modelValue":n[20]||(n[20]=d=>e(t).currentCustomer.billing.state=d),"content-loading":e(s),name:"billing.state",type:"text"},null,8,["modelValue","content-loading"])]),_:1},8,["label","content-loading"]),o(m,{"content-loading":e(s),label:l.$t("customers.city")},{default:r(()=>[o(C,{modelValue:e(t).currentCustomer.billing.city,"onUpdate:modelValue":n[21]||(n[21]=d=>e(t).currentCustomer.billing.city=d),"content-loading":e(s),name:"billing.city",type:"text"},null,8,["modelValue","content-loading"])]),_:1},8,["content-loading","label"]),o(m,{label:l.$t("customers.address"),error:e(i).currentCustomer.billing.address_street_1.$error&&e(i).currentCustomer.billing.address_street_1.$errors[0].$message||e(i).currentCustomer.billing.address_street_2.$error&&e(i).currentCustomer.billing.address_street_2.$errors[0].$message,"content-loading":e(s)},{default:r(()=>[o(K,{modelValue:e(t).currentCustomer.billing.address_street_1,"onUpdate:modelValue":n[22]||(n[22]=d=>e(t).currentCustomer.billing.address_street_1=d),modelModifiers:{trim:!0},"content-loading":e(s),placeholder:l.$t("general.street_1"),type:"text",name:"billing_street1","container-class":"mt-3",onInput:n[23]||(n[23]=d=>e(i).currentCustomer.billing.address_street_1.$touch())},null,8,["modelValue","content-loading","placeholder"]),o(K,{modelValue:e(t).currentCustomer.billing.address_street_2,"onUpdate:modelValue":n[24]||(n[24]=d=>e(t).currentCustomer.billing.address_street_2=d),modelModifiers:{trim:!0},"content-loading":e(s),placeholder:l.$t("general.street_2"),type:"text",class:"mt-3",name:"billing_street2","container-class":"mt-3",onInput:n[25]||(n[25]=d=>e(i).currentCustomer.billing.address_street_2.$touch())},null,8,["modelValue","content-loading","placeholder"])]),_:1},8,["label","error","content-loading"]),a("div",st,[o(m,{"content-loading":e(s),label:l.$t("customers.phone"),class:"text-left"},{default:r(()=>[o(C,{modelValue:e(t).currentCustomer.billing.phone,"onUpdate:modelValue":n[26]||(n[26]=d=>e(t).currentCustomer.billing.phone=d),modelModifiers:{trim:!0},"content-loading":e(s),type:"text",name:"phone"},null,8,["modelValue","content-loading"])]),_:1},8,["content-loading","label"]),o(m,{label:l.$t("customers.zip_code"),"content-loading":e(s),class:"mt-2 text-left"},{default:r(()=>[o(C,{modelValue:e(t).currentCustomer.billing.zip,"onUpdate:modelValue":n[27]||(n[27]=d=>e(t).currentCustomer.billing.zip=d),modelModifiers:{trim:!0},"content-loading":e(s),type:"text",name:"zip"},null,8,["modelValue","content-loading"])]),_:1},8,["label","content-loading"])])]),_:1})):U("",!0)])]),_:1})]),_:1}),o(F,{class:"mb-5 md:mb-8"}),a("div",rt,[a("div",lt,[o(te,{type:"button","content-loading":e(s),size:"sm",variant:"primary-outline",onClick:n[28]||(n[28]=u=>e(t).copyAddress(!0))},{left:r(u=>[o(O,{name:"DocumentDuplicateIcon",class:j(u.class)},null,8,["class"])]),default:r(()=>[le(" "+B(l.$t("customers.copy_billing_address")),1)]),_:1},8,["content-loading"])])]),o(e(A),null,{default:r(({open:u})=>[o(e(J),{class:"flex w-full justify-between items-center rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/75"},{default:r(()=>[a("h6",at,B(l.$t("customers.shipping_address")),1),a("div",{class:j(u?"rotate-180 transform":"")},ut,2)]),_:2},1024),o(e(Z),null,{default:r(()=>[e(t).currentCustomer.shipping?(x(),ae("div",dt,[o(E,{class:"col-span-5 lg:col-span-4"},{default:r(()=>[o(m,{"content-loading":e(s),label:l.$t("customers.name")},{default:r(()=>[o(C,{modelValue:e(t).currentCustomer.shipping.name,"onUpdate:modelValue":n[29]||(n[29]=d=>e(t).currentCustomer.shipping.name=d),modelModifiers:{trim:!0},"content-loading":e(s),type:"text",name:"address_name"},null,8,["modelValue","content-loading"])]),_:1},8,["content-loading","label"]),o(m,{label:l.$t("customers.country"),"content-loading":e(s)},{default:r(()=>[o(H,{modelValue:e(t).currentCustomer.shipping.country_id,"onUpdate:modelValue":n[30]||(n[30]=d=>e(t).currentCustomer.shipping.country_id=d),"value-prop":"id",label:"name","track-by":"name","resolve-on-load":"",searchable:"","content-loading":e(s),options:e(y).countries,placeholder:l.$t("general.select_country"),class:"w-full"},null,8,["modelValue","content-loading","options","placeholder"])]),_:1},8,["label","content-loading"]),o(m,{label:l.$t("customers.state"),"content-loading":e(s)},{default:r(()=>[o(C,{modelValue:e(t).currentCustomer.shipping.state,"onUpdate:modelValue":n[31]||(n[31]=d=>e(t).currentCustomer.shipping.state=d),"content-loading":e(s),name:"shipping.state",type:"text"},null,8,["modelValue","content-loading"])]),_:1},8,["label","content-loading"]),o(m,{"content-loading":e(s),label:l.$t("customers.city")},{default:r(()=>[o(C,{modelValue:e(t).currentCustomer.shipping.city,"onUpdate:modelValue":n[32]||(n[32]=d=>e(t).currentCustomer.shipping.city=d),"content-loading":e(s),name:"shipping.city",type:"text"},null,8,["modelValue","content-loading"])]),_:1},8,["content-loading","label"]),o(m,{label:l.$t("customers.address"),"content-loading":e(s),error:e(i).currentCustomer.shipping.address_street_1.$error&&e(i).currentCustomer.shipping.address_street_1.$errors[0].$message||e(i).currentCustomer.shipping.address_street_2.$error&&e(i).currentCustomer.shipping.address_street_2.$errors[0].$message},{default:r(()=>[o(K,{modelValue:e(t).currentCustomer.shipping.address_street_1,"onUpdate:modelValue":n[33]||(n[33]=d=>e(t).currentCustomer.shipping.address_street_1=d),modelModifiers:{trim:!0},"content-loading":e(s),type:"text",placeholder:l.$t("general.street_1"),name:"shipping_street1",onInput:n[34]||(n[34]=d=>e(i).currentCustomer.shipping.address_street_1.$touch())},null,8,["modelValue","content-loading","placeholder"]),o(K,{modelValue:e(t).currentCustomer.shipping.address_street_2,"onUpdate:modelValue":n[35]||(n[35]=d=>e(t).currentCustomer.shipping.address_street_2=d),modelModifiers:{trim:!0},"content-loading":e(s),type:"text",placeholder:l.$t("general.street_2"),name:"shipping_street2",class:"mt-3","container-class":"mt-3",onInput:n[36]||(n[36]=d=>e(i).currentCustomer.shipping.address_street_2.$touch())},null,8,["modelValue","content-loading","placeholder"])]),_:1},8,["label","content-loading","error"]),a("div",ct,[o(m,{"content-loading":e(s),label:l.$t("customers.phone"),class:"text-left"},{default:r(()=>[o(C,{modelValue:e(t).currentCustomer.shipping.phone,"onUpdate:modelValue":n[37]||(n[37]=d=>e(t).currentCustomer.shipping.phone=d),modelModifiers:{trim:!0},"content-loading":e(s),type:"text",name:"phone"},null,8,["modelValue","content-loading"])]),_:1},8,["content-loading","label"]),o(m,{label:l.$t("customers.zip_code"),"content-loading":e(s),class:"mt-2 text-left"},{default:r(()=>[o(C,{modelValue:e(t).currentCustomer.shipping.zip,"onUpdate:modelValue":n[38]||(n[38]=d=>e(t).currentCustomer.shipping.zip=d),modelModifiers:{trim:!0},"content-loading":e(s),type:"text",name:"zip"},null,8,["modelValue","content-loading"])]),_:1},8,["label","content-loading"])])]),_:1})])):U("",!0)]),_:1})]),_:1}),e(_).customFields.length>0?(x(),k(F,{key:0,class:"mb-5 md:mb-8"})):U("",!0),o(e(A),null,{default:r(({open:u})=>[o(e(J),{class:"flex w-full justify-between items-center rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/75"},{default:r(()=>[e(_).customFields.length>0?(x(),ae("h6",mt,B(l.$t("settings.custom_fields.title")),1)):U("",!0),a("div",{class:j(u?"rotate-180 transform":"")},gt,2)]),_:2},1024),o(e(Z),null,{default:r(()=>[a("div",ft,[a("div",_t,[o(Ke,{type:"Customer",store:e(t),"store-prop":"currentCustomer","is-edit":e(D),"is-loading":e(pe),"custom-field-scope":M},null,8,["store","is-edit","is-loading"])])])]),_:1})]),_:1})]),_:1})],40,Ne)]),_:1})}}};export{ht as default};
