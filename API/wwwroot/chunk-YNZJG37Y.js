import{a as _}from"./chunk-IH4C6ZZ3.js";import{a as q}from"./chunk-CGWCJNGL.js";import{J as U,K as Se,L as W,M as I,N as Fe,O as xe,P as Ee,d as be,e as y,f as S,g as F,k as ke,m as x,n as E,o as w,r as ge,t as g,u as Ce}from"./chunk-GEML6WPG.js";import{$a as de,Ca as b,Da as h,Eb as L,Fb as R,G as ae,Ga as Z,H as j,Ha as ce,Hb as $,Ib as ye,J as se,La as V,Ma as B,N as f,Na as O,O as T,Oa as me,Pa as p,Qa as A,S as M,Sa as le,T as G,_a as pe,ea as m,f as K,fa as u,ib as ue,jb as k,ma as v,oa as c,p as oe,pb as fe,q as ne,qb as ve,sa as n,ta as a,ua as l,ub as he,ya as D}from"./chunk-6O4OQCOI.js";function We(i,e){if(i&1){let s=D();n(0,"div",6)(1,"div",7)(2,"h4"),p(3,"Shipping address"),a(),n(4,"button",8),b("click",function(){M(s);let t=h();return G(t.saveUserAddress())}),p(5," Save as default "),a()(),n(6,"div",9)(7,"div",10),l(8,"app-text-input",11),a(),n(9,"div",10),l(10,"app-text-input",12),a(),n(11,"div",10),l(12,"app-text-input",13),a(),n(13,"div",10),l(14,"app-text-input",14),a(),n(15,"div",10),l(16,"app-text-input",15),a(),n(17,"div",10),l(18,"app-text-input",16),a()()()}if(i&2){let s=h(),r;c("formGroup",s.checkoutForm),m(4),c("disabled",!((r=s.checkoutForm.get("addressForm"))!=null&&r.valid)||!((r=s.checkoutForm.get("addressForm"))!=null&&r.dirty)),m(4),c("label","First name"),m(2),c("label","Last name"),m(2),c("label","Street"),m(2),c("label","City"),m(2),c("label","State"),m(2),c("label","Zip code")}}var _e=(()=>{let e=class e{constructor(r,t){this.accountService=r,this.toastr=t}saveUserAddress(){this.accountService.updateAddress(this.checkoutForm?.get("addressForm")?.value).subscribe({next:()=>{this.toastr.success("Address saved"),this.checkoutForm?.get("addressForm")?.reset(this.checkoutForm?.get("addressForm")?.value)}})}};e.\u0275fac=function(t){return new(t||e)(u(q),u(_))},e.\u0275cmp=f({type:e,selectors:[["app-checkout-address"]],inputs:{checkoutForm:"checkoutForm"},decls:8,vars:2,consts:[["class","mt-4",3,"formGroup",4,"ngIf"],[1,"d-flex","justify-content-between","flex-row","mb-5"],["routerLink","/basket",1,"btn","btn-outline-primary"],[1,"fa","fa-angle-left"],["cdkStepperNext","",1,"btn","btn-primary",3,"disabled"],[1,"fa","fa-angle-right"],[1,"mt-4",3,"formGroup"],[1,"d-flex","justify-content-between","align-items-center"],[1,"btn","btn-outline-success","mb-3",3,"disabled","click"],["formGroupName","addressForm",1,"row"],[1,"form-group","col-6"],["formControlName","firstName",3,"label"],["formControlName","lastName",3,"label"],["formControlName","street",3,"label"],["formControlName","city",3,"label"],["formControlName","state",3,"label"],["formControlName","zipCode",3,"label"]],template:function(t,o){if(t&1&&(v(0,We,19,8,"div",0),n(1,"div",1)(2,"button",2),l(3,"i",3),p(4,"Back to Basket "),a(),n(5,"button",4),p(6," Go to Delivery"),l(7,"i",5),a()()),t&2){let d;c("ngIf",o.checkoutForm),m(5),c("disabled",o.checkoutForm==null||(d=o.checkoutForm.get("addressForm"))==null?null:d.invalid)}},dependencies:[k,R,S,F,x,w,E,U,W]});let i=e;return i})();var z=(()=>{let e=class e{constructor(r){this.http=r,this.baseUrl=ye.apiUrl}createOrder(r){return this.http.post(this.baseUrl+"orders",r)}getDeliveryMethods(){return this.http.get(this.baseUrl+"orders/deliverymethods").pipe(ne(r=>r.sort((t,o)=>o.price-t.price)))}};e.\u0275fac=function(t){return new(t||e)(se(he))},e.\u0275prov=ae({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();function ze(i,e){if(i&1){let s=D();n(0,"div",9)(1,"input",10),b("click",function(){let o=M(s).$implicit,d=h(2);return G(d.setShippingPrice(o))}),a(),n(2,"label",11)(3,"strong"),p(4),pe(5,"currency"),a(),l(6,"br"),n(7,"span",12),p(8),a()()()}if(i&2){let s=e.$implicit;m(),Z("value",s.id),m(),Z("for",s.id),m(2),le("",s.shortName," - ",de(5,5,s.price),""),m(4),A(s.description)}}function Ye(i,e){if(i&1&&(n(0,"div",6)(1,"div",7),v(2,ze,9,7,"div",8),a()()),i&2){let s=h();c("formGroup",s.checkoutForm),m(2),c("ngForOf",s.deliveryMethods)}}var Pe=(()=>{let e=class e{constructor(r,t){this.checkoutService=r,this.basketService=t,this.deliveryMethods=[]}ngOnInit(){this.checkoutService.getDeliveryMethods().subscribe({next:r=>this.deliveryMethods=r})}setShippingPrice(r){this.basketService.setShippingPrice(r)}};e.\u0275fac=function(t){return new(t||e)(u(z),u(g))},e.\u0275cmp=f({type:e,selectors:[["app-checkout-delivery"]],inputs:{checkoutForm:"checkoutForm"},decls:8,vars:2,consts:[["class","mt-4",3,"formGroup",4,"ngIf"],[1,"d-flex","justify-content-between","flex-row","mb-5"],["cdkStepperPrevious","",1,"btn","btn-outline-primary"],[1,"fa","fa-angle-left"],["cdkStepperNext","",1,"btn","btn-primary",3,"disabled"],[1,"fa","fa-angle-right"],[1,"mt-4",3,"formGroup"],["formGroupName","deliveryForm",1,"row"],["class","col-6 form-group",4,"ngFor","ngForOf"],[1,"col-6","form-group"],["type","radio","formControlName","deliveryMethod",1,"form-check-input",3,"value","click"],[3,"for"],[1,"label-description"]],template:function(t,o){if(t&1&&(v(0,Ye,3,2,"div",0),n(1,"div",1)(2,"button",2),l(3,"i",3),p(4,"Back to Basket "),a(),n(5,"button",4),p(6," Go to Review"),l(7,"i",5),a()()),t&2){let d;c("ngIf",o.checkoutForm),m(5),c("disabled",o.checkoutForm==null||(d=o.checkoutForm.get("deliveryForm"))==null?null:d.invalid)}},dependencies:[ue,k,be,ke,S,F,x,w,E,W,I,fe]});let i=e;return i})();var je=(()=>{let e=class e{constructor(r,t){this.basketService=r,this.toastr=t}createPaymentIntent(){this.basketService.createPaymentIntent().subscribe({next:()=>{this.appStepper?.next()},error:r=>this.toastr.error(r.message)})}};e.\u0275fac=function(t){return new(t||e)(u(g),u(_))},e.\u0275cmp=f({type:e,selectors:[["app-checkout-review"]],inputs:{appStepper:"appStepper"},decls:9,vars:1,consts:[[1,"mt-4"],[3,"isBasket"],[1,"d-flex","justify-content-between","flex-row","mb-5"],["cdkStepperPrevious","",1,"btn","btn-outline-primary"],[1,"fa","fa-angle-left"],[1,"btn","btn-primary",3,"click"],[1,"fa","fa-angle-right"]],template:function(t,o){t&1&&(n(0,"div",0),l(1,"app-basket-summary",1),a(),n(2,"div",2)(3,"button",3),l(4,"i",4),p(5,"Back to Delivery "),a(),n(6,"button",5),b("click",function(){return o.createPaymentIntent()}),p(7," Go to Payment"),l(8,"i",6),a()()),t&2&&(m(),c("isBasket",!1))},dependencies:[I,xe]});let i=e;return i})();var Ge="https://js.stripe.com/v3",Ze=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,Te="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",$e=function(){for(var e=document.querySelectorAll('script[src^="'.concat(Ge,'"]')),s=0;s<e.length;s++){var r=e[s];if(Ze.test(r.src))return r}return null},Me=function(e){var s=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",r=document.createElement("script");r.src="".concat(Ge).concat(s);var t=document.head||document.body;if(!t)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return t.appendChild(r),r},He=function(e,s){!e||!e._registerWrapper||e._registerWrapper({name:"stripe-js",version:"2.4.0",startTime:s})},N=null,Y=null,X=null,Je=function(e){return function(){e(new Error("Failed to load Stripe.js"))}},et=function(e,s){return function(){window.Stripe?e(window.Stripe):s(new Error("Stripe.js not available"))}},tt=function(e){return N!==null?N:(N=new Promise(function(s,r){if(typeof window>"u"||typeof document>"u"){s(null);return}if(window.Stripe&&e&&console.warn(Te),window.Stripe){s(window.Stripe);return}try{var t=$e();if(t&&e)console.warn(Te);else if(!t)t=Me(e);else if(t&&X!==null&&Y!==null){var o;t.removeEventListener("load",X),t.removeEventListener("error",Y),(o=t.parentNode)===null||o===void 0||o.removeChild(t),t=Me(e)}X=et(s,r),Y=Je(r),t.addEventListener("load",X),t.addEventListener("error",Y)}catch(d){r(d);return}}),N.catch(function(s){return N=null,Promise.reject(s)}))},rt=function(e,s,r){if(e===null)return null;var t=e.apply(void 0,s);return He(t,r),t},P,De=!1,Ve=function(){return P||(P=tt(null).catch(function(e){return P=null,Promise.reject(e)}),P)};Promise.resolve().then(function(){return Ve()}).catch(function(i){De||console.warn(i)});var Be=function(){for(var e=arguments.length,s=new Array(e),r=0;r<e;r++)s[r]=arguments[r];De=!0;var t=Date.now();return Ve().then(function(o){return rt(o,s,t)})};var it=["cardNumber"],ot=["cardExpiry"],nt=["cardCvc"];function at(i,e){if(i&1&&(n(0,"div",7)(1,"div",8)(2,"div",9),l(3,"app-text-input",10),a()(),n(4,"div",11)(5,"div",12)(6,"div",13),l(7,"div",14,15),n(9,"label"),p(10,"Card number"),a(),n(11,"span",16),p(12),a()()(),n(13,"div",17)(14,"div",13),l(15,"div",14,18),n(17,"label"),p(18,"Card Expiry"),a()()(),n(19,"div",17)(20,"div",13),l(21,"div",14,19),n(23,"label"),p(24,"Card Cvc"),a()()()()()),i&2){let s=h();c("formGroup",s.checkoutForm),m(3),c("label","Name on card"),m(9),A(s.cardErrors)}}function st(i,e){i&1&&l(0,"i",20)}var Oe=(()=>{let e=class e{constructor(r,t,o,d){this.basketService=r,this.router=t,this.checkoutService=o,this.toastr=d,this.stripe=null,this.cardNumberComplete=!1,this.cardExpiryComplete=!1,this.cardCvcComplete=!1,this.loading=!1}ngOnInit(){Be("pk_test_51OhdZTI80R3Gek5UNjG45JhGa0I47QSYoWmV0XhouB8o9dF0KWW2bPMKGvbzzi4Ozbdr8mFYUvhYi8aokWqWSivP001hqk57xn").then(r=>{this.stripe=r;let t=r?.elements();t&&(this.cardNumber=t.create("cardNumber"),this.cardNumber.mount(this.cardNumberElement?.nativeElement),this.cardNumber.on("change",o=>{this.cardNumberComplete=o.complete,o.error?this.cardErrors=o.error.message:this.cardErrors=null}),this.cardExpiry=t.create("cardExpiry"),this.cardExpiry.mount(this.cardExpiryElement?.nativeElement),this.cardExpiry.on("change",o=>{this.cardExpiryComplete=o.complete,o.error?this.cardErrors=o.error.message:this.cardErrors=null}),this.cardCvc=t.create("cardCvc"),this.cardCvc.mount(this.cardCvcElement?.nativeElement),this.cardCvc.on("change",o=>{this.cardCvcComplete=o.complete,o.error?this.cardErrors=o.error.message:this.cardErrors=null}))})}get paymentFormComplete(){return this.checkoutForm?.get("paymentForm")?.valid&&this.cardNumberComplete&&this.cardExpiryComplete&&this.cardCvcComplete}submitOrder(){return K(this,null,function*(){this.loading=!0;let r=this.basketService.getCurrentBasketValue();if(!r)throw new Error("cannot get basket");try{let t=yield this.createOrder(r),o=yield this.confirmPaymentWithStripe(r);if(o.paymentIntent){this.basketService.deleteBasket(r);let d={state:t};this.router.navigate(["checkout/success"],d)}else this.toastr.error(o.error.message)}catch(t){console.log(t),this.toastr.error(t.message)}finally{this.loading=!1}})}confirmPaymentWithStripe(r){if(!r)throw Error("Basket is null");let t=this.stripe?.confirmCardPayment(r.clientSecret,{payment_method:{card:this.cardNumber,billing_details:{name:this.checkoutForm?.get("paymentForm")?.get("nameOnCard")?.value}}});if(!t)throw new Error("Problem attempting payment with stripe");return t}createOrder(r){return K(this,null,function*(){if(!r)throw Error("Basket is null");let t=this.getOrderToCreate(r);return oe(this.checkoutService.createOrder(t))})}getOrderToCreate(r){let t=this.checkoutForm?.get("deliveryForm")?.get("deliveryMethod")?.value,o=this.checkoutForm?.get("addressForm")?.value;if(!t||!o)throw new Error("Problem with basket");return{basketId:r.id,deliveryMethodId:t,shipToAddress:o}}};e.\u0275fac=function(t){return new(t||e)(u(g),u(L),u(z),u(_))},e.\u0275cmp=f({type:e,selectors:[["app-checkout-payment"]],viewQuery:function(t,o){if(t&1&&(V(it,5),V(ot,5),V(nt,5)),t&2){let d;B(d=O())&&(o.cardNumberElement=d.first),B(d=O())&&(o.cardExpiryElement=d.first),B(d=O())&&(o.cardCvcElement=d.first)}},inputs:{checkoutForm:"checkoutForm"},decls:9,vars:3,consts:[["class","mt-4",3,"formGroup",4,"ngIf"],[1,"d-flex","justify-content-between","flex-row","mb-5"],["cdkStepperPrevious","",1,"btn","btn-outline-primary"],[1,"fa","fa-angle-left"],[1,"btn","btn-primary",3,"disabled","click"],[1,"fa","fa-angle-right"],["class","fa fa-spinner fa-spin",4,"ngIf"],[1,"mt-4",3,"formGroup"],[1,"row"],["formGroupName","paymentForm",1,"form-group","col-12"],["formControlName","nameOnCard",3,"label"],[1,"row","mb-3"],[1,"col-6"],[1,"form-floating"],[1,"form-control"],["cardNumber",""],[1,"text-danger"],[1,"col-3"],["cardExpiry",""],["cardCvc",""],[1,"fa","fa-spinner","fa-spin"]],template:function(t,o){t&1&&(v(0,at,25,3,"div",0),n(1,"div",1)(2,"button",2),l(3,"i",3),p(4,"Back to Review "),a(),n(5,"button",4),b("click",function(){return o.submitOrder()}),p(6," Submit order"),l(7,"i",5),v(8,st,1,0,"i",6),a()()),t&2&&(c("ngIf",o.checkoutForm),m(5),c("disabled",o.loading||!o.paymentFormComplete),m(3),c("ngIf",o.loading))},dependencies:[k,S,F,x,w,E,U,I]});let i=e;return i})();var Ae=(()=>{let e=class e{constructor(r,t,o){this.fb=r,this.accountService=t,this.basketService=o,this.checkoutForm=this.fb.group({addressForm:this.fb.group({firstName:["",y.required],lastName:["",y.required],street:["",y.required],city:["",y.required],state:["",y.required],zipCode:["",y.required]}),deliveryForm:this.fb.group({deliveryMethod:["",y.required]}),paymentForm:this.fb.group({nameOnCard:["",y.required]})})}ngOnInit(){this.getAddressFormValues(),this.getDeliveryMethodValue()}getAddressFormValues(){this.accountService.getUserAddress().subscribe({next:r=>{r&&this.checkoutForm.get("addressForm")?.patchValue(r)}})}getDeliveryMethodValue(){let r=this.basketService.getCurrentBasketValue();r&&r.deliveryMethodId&&this.checkoutForm.get("deliveryForm")?.get("deliveryMethod")?.patchValue(r.deliveryMethodId.toString())}};e.\u0275fac=function(t){return new(t||e)(u(ge),u(q),u(g))},e.\u0275cmp=f({type:e,selectors:[["app-checkout"]],decls:15,vars:11,consts:[[1,"container","mt-5"],[1,"row"],[1,"col-8"],["appStepper",""],[3,"label","completed"],[3,"checkoutForm"],[3,"label"],[3,"appStepper"],[1,"col-4"]],template:function(t,o){if(t&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"app-stepper",null,3)(5,"cdk-step",4),l(6,"app-checkout-address",5),a(),n(7,"cdk-step",4),l(8,"app-checkout-delivery",5),a(),n(9,"cdk-step",6),l(10,"app-checkout-review",7),a(),n(11,"cdk-step",4),l(12,"app-checkout-payment",5),a()()(),n(13,"div",8),l(14,"app-order-totals"),a()()()),t&2){let d=me(4),te,re,ie;m(5),c("label","Address")("completed",(te=o.checkoutForm.get("addressForm"))==null?null:te.valid),m(),c("checkoutForm",o.checkoutForm),m(),c("label","Delivery")("completed",(re=o.checkoutForm.get("deliveryForm"))==null?null:re.valid),m(),c("checkoutForm",o.checkoutForm),m(),c("label","Review"),m(),c("appStepper",d),m(),c("label","Payment")("completed",(ie=o.checkoutForm.get("paymentForm"))==null?null:ie.valid),m(),c("checkoutForm",o.checkoutForm)}},dependencies:[Ce,Fe,Se,_e,Pe,je,Oe]});let i=e;return i})();function mt(i,e){if(i&1&&(n(0,"button",5),p(1," View your order "),a()),i&2){let s=h();ce("routerLink","/orders/",s.order.id,"")}}function lt(i,e){i&1&&(n(0,"button",6),p(1," View your orders "),a())}var Le=(()=>{let e=class e{constructor(r){this.router=r;let t=this.router.getCurrentNavigation();this.order=t?.extras?.state}};e.\u0275fac=function(t){return new(t||e)(u(L))},e.\u0275cmp=f({type:e,selectors:[["app-checkout-success"]],decls:9,vars:2,consts:[[1,"container","mt-5"],[1,"fa","fa-check-circle","fa-5x",2,"color","green"],[1,"mb-4"],["class","btn btn-outline-success",3,"routerLink",4,"ngIf"],["routerLink","/orders","class","btn btn-outline-success",4,"ngIf"],[1,"btn","btn-outline-success",3,"routerLink"],["routerLink","/orders",1,"btn","btn-outline-success"]],template:function(t,o){t&1&&(n(0,"div",0)(1,"div"),l(2,"i",1),a(),n(3,"h2"),p(4,"Thank you. Your order is confirmed"),a(),n(5,"p",2),p(6,"Your order has not shipped yet, but this is to be expected as we a re not a real store!"),a(),v(7,mt,2,1,"button",3)(8,lt,2,0,"button",4),a()),t&2&&(m(7),c("ngIf",o.order),m(),c("ngIf",!o.order))},dependencies:[k,R]});let i=e;return i})();var pt=[{path:"",component:Ae},{path:"success",component:Le}],Re=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=T({type:e}),e.\u0275inj=j({imports:[$.forChild(pt),$]});let i=e;return i})();var Wt=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=T({type:e}),e.\u0275inj=j({imports:[ve,Re,Ee]});let i=e;return i})();export{Wt as CheckoutModule};