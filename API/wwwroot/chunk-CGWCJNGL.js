import{Eb as p,G as l,Ib as m,J as n,k as a,n as c,q as i,sb as u,ub as h}from"./chunk-6O4OQCOI.js";var k=(()=>{let r=class r{constructor(t,e){this.http=t,this.router=e,this.baseUrl=m.apiUrl,this.currentUserSource=new a(1),this.currentUser$=this.currentUserSource.asObservable()}loadCurrentUser(t){if(t===null)return this.currentUserSource.next(null),c(null);let e=new u;return e=e.set("Authorization",`Bearer ${t}`),this.http.get(this.baseUrl+"account",{headers:e}).pipe(i(s=>s?(localStorage.setItem("token",s.token),this.currentUserSource.next(s),s):null))}login(t){return this.http.post(this.baseUrl+"account/login",t).pipe(i(e=>{localStorage.setItem("token",e.token),this.currentUserSource.next(e)}))}register(t){return this.http.post(this.baseUrl+"account/register",t).pipe(i(e=>{localStorage.setItem("token",e.token),this.currentUserSource.next(e)}))}logout(){localStorage.removeItem("token"),this.currentUserSource.next(null),this.router.navigateByUrl("/")}checkEmailExists(t){return this.http.get(this.baseUrl+"account/emailexists?email="+t)}getUserAddress(){return this.http.get(this.baseUrl+"account/address")}updateAddress(t){return this.http.put(this.baseUrl+"account/address",t)}};r.\u0275fac=function(e){return new(e||r)(n(h),n(p))},r.\u0275prov=l({token:r,factory:r.\u0275fac,providedIn:"root"});let o=r;return o})();export{k as a};