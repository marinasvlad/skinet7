import{b as st}from"./chunk-RYCPWENN.js";import{P as ot,c as et,p as it,q as nt,s as rt,t as q}from"./chunk-GEML6WPG.js";import{$ as E,$a as V,Ca as f,Cb as X,Da as p,Fb as Z,G as Q,Ga as b,H as T,Ha as $,Hb as U,Ib as tt,J as A,La as H,Ma as L,N as S,Na as Y,O,Pa as m,Qa as g,Ra as B,S as h,T as u,_a as M,a as D,ea as a,fa as _,ib as G,jb as C,ma as v,n as I,oa as l,pb as j,q as w,qa as F,qb as J,sa as o,ta as s,tb as K,ua as y,ub as W,x as R,ya as x}from"./chunk-6O4OQCOI.js";var P=class{constructor(){this.brandId=0,this.typeId=0,this.sort="name",this.pageNumber=1,this.pageSize=6,this.search=""}};var N=(()=>{let n=class n{constructor(e){this.http=e,this.baseUrl=tt.apiUrl,this.products=[],this.brands=[],this.types=[],this.shopParams=new P,this.productCache=new Map}getProducts(e=!0){if(e||(this.productCache=new Map),this.productCache.size>0&&e&&this.productCache.has(Object.values(this.shopParams).join("-"))&&(this.pagination=this.productCache.get(Object.values(this.shopParams).join("-")),this.pagination))return I(this.pagination);let t=new K;return this.shopParams.brandId>0&&(t=t.append("brandId",this.shopParams.brandId)),this.shopParams.typeId>0&&(t=t.append("typeId",this.shopParams.typeId)),this.shopParams.search&&(t=t.append("search",this.shopParams.search)),t=t.append("sort",this.shopParams.sort),t=t.append("pageIndex",this.shopParams.pageNumber),t=t.append("pageSize",this.shopParams.pageSize),this.http.get(this.baseUrl+"products",{params:t}).pipe(w(c=>(this.productCache.set(Object.values(this.shopParams).join("-"),c),this.pagination=c,c)))}setShopParams(e){this.shopParams=e}getShopParams(){return this.shopParams}getBrands(){return this.brands.length>0?I(this.brands):this.http.get(this.baseUrl+"products/brands").pipe(w(e=>this.brands=e))}getTypes(){return this.types.length>0?I(this.types):this.http.get(this.baseUrl+"products/types").pipe(w(e=>this.types=e))}getProduct(e){let t=[...this.productCache.values()].reduce((c,d)=>D(D({},c),d.data.find(z=>z.id===e)),{});return Object.keys(t).length!==0?I(t):this.http.get(this.baseUrl+"products/"+e)}};n.\u0275fac=function(t){return new(t||n)(A(W))},n.\u0275prov=Q({token:n,factory:n.\u0275fac,providedIn:"root"});let r=n;return r})();function ft(r,n){if(r&1){let i=x();o(0,"div",1)(1,"div",2),y(2,"img",3),o(3,"div",4)(4,"button",5),f("click",function(){h(i);let t=p();return u(t.addItemToBasket())}),s(),o(5,"button",6),m(6,"View"),s()()(),o(7,"div",7)(8,"a",8)(9,"h6",9),m(10),s()(),o(11,"span",10),m(12),M(13,"currency"),s()()()}if(r&2){let i=p();a(2),b("src",i.product.pictureUrl,E),b("alt",i.product.name),a(3),$("routerLink","/shop/",i.product.id,""),a(5),B(" ",i.product.name," "),a(2),g(V(13,5,i.product.price))}}var pt=(()=>{let n=class n{constructor(e){this.basketService=e}addItemToBasket(){this.product&&this.basketService.addItemToBasket(this.product)}};n.\u0275fac=function(t){return new(t||n)(_(q))},n.\u0275cmp=S({type:n,selectors:[["app-product-item"]],inputs:{product:"product"},decls:1,vars:1,consts:[["class","card h-100 shadow-sm",4,"ngIf"],[1,"card","h-100","shadow-sm"],[1,"image","position-relative",2,"cursor","pointer"],[1,"img-fluid","bg-info",3,"src","alt"],[1,"d-flex","align-items-center","justify-content-center","hover-overlay"],[1,"btn","btn-primary","fa","fa-shopping-cart","me-2",3,"click"],[1,"btn","btn-primary",3,"routerLink"],[1,"card-body","d-flex","flex-column"],["href","",1,"text-decoration-none"],[1,"text-uppercase"],[1,"mb-2"]],template:function(t,c){t&1&&v(0,ft,14,7,"div",0),t&2&&l("ngIf",c.product)},dependencies:[C,Z,j],styles:[".btn[_ngcontent-%COMP%]{width:30%;height:40px}.image[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{opacity:1}.image[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]{transform:none;opacity:1}.hover-overlay[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;top:0;left:0;background:#ffffff80;opacity:0;transition:all .5s}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{z-index:1000;transition:all .5s}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type{transform:translate(-20px)}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-of-type{transform:translate(20px)}"]});let r=n;return r})();var vt=["search"];function _t(r,n){if(r&1&&(o(0,"option",21),m(1),s()),r&2){let i=n.$implicit,e=p(2);l("value",i.value)("selected",e.shopParams.sort===i.value),a(),g(i.name)}}function xt(r,n){if(r&1){let i=x();o(0,"li",22),f("click",function(){let c=h(i).$implicit,d=p(2);return u(d.onBrandSelected(c.id))}),m(1),s()}if(r&2){let i=n.$implicit,e=p(2);F("active",i.id===e.shopParams.brandId),l("value",i.id),a(),g(i.name)}}function yt(r,n){if(r&1){let i=x();o(0,"li",22),f("click",function(){let c=h(i).$implicit,d=p(2);return u(d.onTypeSelected(c.id))}),m(1),s()}if(r&2){let i=n.$implicit,e=p(2);F("active",i.id===e.shopParams.typeId),l("value",i.id),a(),g(i.name)}}function St(r,n){if(r&1&&(o(0,"div",23),y(1,"app-product-item",24),s()),r&2){let i=n.$implicit;a(),l("product",i)}}function bt(r,n){if(r&1){let i=x();o(0,"div",2)(1,"section",3)(2,"h5",4),m(3,"Sort"),s(),o(4,"select",5),f("change",function(t){h(i);let c=p();return u(c.onSortSelected(t))}),v(5,_t,2,3,"option",6),s(),o(6,"h5",4),m(7,"Brands"),s(),o(8,"ul",7),v(9,xt,2,4,"li",8),s(),o(10,"h5",4),m(11,"Types"),s(),o(12,"ul",7),v(13,yt,2,4,"li",8),s()(),o(14,"section",9)(15,"div",10),y(16,"app-paging-header",11),o(17,"div",12)(18,"input",13,14),f("keyup.enter",function(){h(i);let t=p();return u(t.onSearch())}),s(),o(20,"button",15),f("click",function(){h(i);let t=p();return u(t.onSearch())}),m(21,"Search"),s(),o(22,"button",16),f("click",function(){h(i);let t=p();return u(t.onReset())}),m(23,"Reset"),s()()(),o(24,"div",17),v(25,St,2,1,"div",18),s(),o(26,"div",19)(27,"app-pager",20),f("pageChanged",function(t){h(i);let c=p();return u(c.onPageChanged(t))}),s()()()()}if(r&2){let i=p();a(5),l("ngForOf",i.sortOptions),a(4),l("ngForOf",i.brands),a(4),l("ngForOf",i.types),a(3),l("totalCount",i.totalCount)("pageNumber",i.shopParams.pageNumber)("pageSize",i.shopParams.pageSize),a(9),l("ngForOf",i.products),a(2),l("totalCount",i.totalCount)("pageSize",i.shopParams.pageSize)("pageNumber",i.shopParams.pageNumber)}}var mt=(()=>{let n=class n{constructor(e){this.shopService=e,this.products=[],this.brands=[],this.types=[],this.sortOptions=[{name:"Alphabetica",value:"name"},{name:"Price: Low to high",value:"priceAsc"},{name:"Price: High to low",value:"priceDesc"}],this.totalCount=0,this.shopParams=e.getShopParams()}ngOnInit(){this.getProducts(),this.getBrands(),this.getTypes()}getProducts(){this.shopService.getProducts().subscribe({next:e=>{console.log("response: "),console.log(e),this.products=e.data,this.totalCount=e.count},error:e=>console.log(e)})}getBrands(){this.shopService.getBrands().subscribe({next:e=>this.brands=[{id:0,name:"All"},...e],error:e=>console.log(e)})}getTypes(){this.shopService.getTypes().subscribe({next:e=>this.types=[{id:0,name:"All"},...e],error:e=>console.log(e)})}onBrandSelected(e){let t=this.shopService.getShopParams();t.brandId=e,t.pageNumber=1,this.shopService.setShopParams(t),this.shopParams=t,this.getProducts()}onTypeSelected(e){let t=this.shopService.getShopParams();t.typeId=e,t.pageNumber=1,this.shopService.setShopParams(t),this.shopParams=t,this.getProducts()}onSortSelected(e){let t=this.shopService.getShopParams();t.sort=e.target.value,this.shopService.setShopParams(t),this.shopParams=t,this.getProducts()}onPageChanged(e){let t=this.shopService.getShopParams();t.pageNumber!==e&&(t.pageNumber=e,this.shopService.setShopParams(t),this.shopParams=t,this.getProducts())}onSearch(){let e=this.shopService.getShopParams();e.search=this.searchTerm?.nativeElement.value,e.pageNumber=1,this.shopService.setShopParams(e),this.shopParams=e,this.getProducts()}onReset(){this.searchTerm&&(this.searchTerm.nativeElement.value=""),this.shopParams=new P,this.shopService.setShopParams(this.shopParams),this.getProducts()}};n.\u0275fac=function(t){return new(t||n)(_(N))},n.\u0275cmp=S({type:n,selectors:[["app-shop"]],viewQuery:function(t,c){if(t&1&&H(vt,5),t&2){let d;L(d=Y())&&(c.searchTerm=d.first)}},decls:2,vars:1,consts:[[1,"container"],["class","row",4,"ngIf"],[1,"row"],[1,"col-3"],[1,"text-warning","ms-3"],[1,"form-select","mb-4",3,"change"],[3,"value","selected",4,"ngFor","ngForOf"],[1,"list-group","my-3"],["class","list-group-item",3,"active","value","click",4,"ngFor","ngForOf"],[1,"col-9"],[1,"d-flex","justify-content-between","align-items-center","pb-2"],[3,"totalCount","pageNumber","pageSize"],[1,"d-flex","mt-2"],["type","text","placeholder","Search",1,"form-control","me-2",3,"keyup.enter"],["search",""],[1,"btn","btn-outline-primary","mx-2",3,"click"],[1,"btn","btn-outline-success","mx-2",3,"click"],[1,"row","row-cols-3","g-3","mb-4"],["class","col",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center"],[3,"totalCount","pageSize","pageNumber","pageChanged"],[3,"value","selected"],[1,"list-group-item",3,"value","click"],[1,"col"],[3,"product"]],template:function(t,c){t&1&&(o(0,"div",0),v(1,bt,28,10,"div",1),s()),t&2&&(a(),l("ngIf",c.types.length>0&&c.brands.length>0))},dependencies:[G,C,et,rt,it,nt,pt],styles:[".list-group-item[_ngcontent-%COMP%]{cursor:pointer;border:none;padding:10px 20px;font-size:1.1em}.list-group-item.active[_ngcontent-%COMP%]{border-radius:10px}.list-group-item[_ngcontent-%COMP%]:not(.active):hover{color:#fff;background-color:#e95420b3;border-radius:10px}"]});let r=n;return r})();function Ct(r,n){if(r&1&&(o(0,"h5",14),m(1),s()),r&2){let i=p(2);a(),B("You have ",i.quantityInBasket," of this item in your basket")}}function Pt(r,n){if(r&1){let i=x();o(0,"div",2)(1,"div",3),y(2,"img",4),s(),o(3,"div",5)(4,"h2"),m(5),s(),o(6,"p",6),m(7),M(8,"currency"),s(),v(9,Ct,2,1,"h5",7),o(10,"div",8)(11,"i",9),f("click",function(){h(i);let t=p();return u(t.decrementQuantity())}),s(),o(12,"span",10),m(13),s(),o(14,"i",11),f("click",function(){h(i);let t=p();return u(t.incrementQuantity())}),s(),o(15,"button",12),f("click",function(){h(i);let t=p();return u(t.updateBasket())}),m(16),s()(),o(17,"div",13)(18,"h4"),m(19,"Description"),s(),o(20,"p"),m(21),s()()()()}if(r&2){let i=p();a(2),b("src",i.product.pictureUrl,E),b("alt",i.product.name),a(3),g(i.product.name),a(2),g(V(8,9,i.product.price)),a(2),l("ngIf",i.quantityInBasket>0),a(4),g(i.quantity),a(2),l("disabled",i.quantity==i.quantityInBasket),a(),g(i.buttonText),a(5),g(i.product.description)}}var lt=(()=>{let n=class n{constructor(e,t,c,d){this.shopService=e,this.activatedRoute=t,this.bcService=c,this.basketService=d,this.quantity=1,this.quantityInBasket=0,this.bcService.set("@productDetails"," ")}ngOnInit(){this.loadProduct()}loadProduct(){let e=this.activatedRoute.snapshot.paramMap.get("id");e&&this.shopService.getProduct(+e).subscribe({next:t=>{this.product=t,this.bcService.set("@productDetails",t.name),this.basketService.basketSource$.pipe(R(1)).subscribe({next:c=>{let d=c?.items.find(z=>z.id===+e);d&&(this.quantity=d.quantity,this.quantityInBasket=d.quantity)}})},error:t=>console.log(t)})}incrementQuantity(){this.quantity++}decrementQuantity(){this.quantity--}updateBasket(){if(this.product)if(this.quantity>this.quantityInBasket){let e=this.quantity-this.quantityInBasket;this.quantityInBasket+=e,this.basketService.addItemToBasket(this.product,e)}else{let e=this.quantityInBasket-this.quantity;this.quantityInBasket-=e,this.basketService.removeItemFromBasket(this.product.id,e)}}get buttonText(){return this.quantityInBasket===0?"Add to basket":"Update basket"}};n.\u0275fac=function(t){return new(t||n)(_(N),_(X),_(st),_(q))},n.\u0275cmp=S({type:n,selectors:[["app-product-details"]],decls:2,vars:1,consts:[[1,"container"],["class","row",4,"ngIf"],[1,"row"],[1,"col-6"],[1,"w-100",3,"src","alt"],[1,"col-6","mt-5"],[2,"font-size","2em"],["class","text-primary mb-3",4,"ngIf"],[1,"d-flex","justify-content-start","align-items-center"],[1,"fa","fa-minus-circle","text-warning","me-2",2,"cursor","pointer","font-size","2em",3,"click"],[1,"font-weight-bold",2,"font-size","1.5em"],[1,"fa","fa-plus-circle","text-warning","ms-2",2,"cursor","pointer","font-size","2em",3,"click"],[1,"btn","btn-outline-primary","ms-4",3,"disabled","click"],[1,"row","mt-4"],[1,"text-primary","mb-3"]],template:function(t,c){t&1&&(o(0,"div",0),v(1,Pt,22,11,"div",1),s()),t&2&&(a(),l("ngIf",c.product))},dependencies:[C,j]});let r=n;return r})();var It=[{path:"",component:mt},{path:":id",component:lt,data:{breadcrumb:{alias:"productDetails"}}}],dt=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=O({type:n}),n.\u0275inj=T({imports:[U.forChild(It),U]});let r=n;return r})();var te=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=O({type:n}),n.\u0275inj=T({imports:[J,ot,dt]});let r=n;return r})();export{te as ShopModule};
