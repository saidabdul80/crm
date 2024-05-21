import{h as s}from"./auth-b3031c6e.js";import{v as i}from"./main-9a914193.js";const{defineStore:o}=window.pinia,y=o({id:"customerPaymentStore",state:()=>({payments:[],selectedViewPayment:[],totalPayments:0}),actions:{fetchPayments(e,a){return new Promise((n,m)=>{i.get(`/api/v1/${a}/customer/payments`,{params:e}).then(t=>{this.payments=t.data.data,this.totalPayments=t.data.meta.paymentTotalCount,n(t)}).catch(t=>{s(t),m(t)})})},fetchViewPayment(e,a){return new Promise((n,m)=>{i.get(`/api/v1/${a}/customer/payments/${e.id}`).then(t=>{this.selectedViewPayment=t.data.data,n(t)}).catch(t=>{s(t),m(t)})})},searchPayment(e,a){return new Promise((n,m)=>{i.get(`/api/v1/${a}/customer/payments`,{params:e}).then(t=>{this.payments=t.data,n(t)}).catch(t=>{s(t),m(t)})})},fetchPaymentModes(e,a){return new Promise((n,m)=>{i.get(`/api/v1/${a}/customer/payment-method`,{params:e}).then(t=>{n(t)}).catch(t=>{s(t),m(t)})})}}});export{y as u};
