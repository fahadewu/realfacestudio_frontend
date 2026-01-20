"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[325],{5325:function(e,t,r){r.d(t,{Z:function(){return u}});var a=r(7437),s=r(2265),o=r(1396),i=r.n(o),n=r(4033),l=r(3865),c=r(6454),d=r(5925);function u(e){let{children:t}=e,r=(0,n.usePathname)(),o=(0,n.useRouter)(),[u,p]=(0,s.useState)(!1);!function(){let e=(0,n.useRouter)();(0,s.useEffect)(()=>{let t=(0,l.KE)();if(!t||(0,l.pw)(t)){(0,l.kS)(),c.ZP.clearToken(),e.push("/admin/login");return}let r=()=>{(0,l.kS)(),c.ZP.clearToken(),d.ZP.error("Session expired. Please login again."),e.push("/admin/login")};c.ZP.setUnauthorizedCallback(r);let a=(0,l.z3)(t),s=null;if(a&&a.exp){let e=1e3*a.exp,t=Date.now(),o=e-t;o>0?s=setTimeout(()=>{r()},o):r()}return()=>{c.ZP.setUnauthorizedCallback(()=>{}),s&&clearTimeout(s)}},[e])}();let m=[{href:"/admin/dashboard",label:"Dashboard",icon:"\uD83D\uDCCA"},{href:"/admin/models",label:"Models",icon:"\uD83D\uDC65"},{href:"/admin/categories",label:"Categories",icon:"\uD83C\uDFF7️"},{href:"/admin/portfolio",label:"Portfolio",icon:"\uD83D\uDCC1"},{href:"/admin/testimonials",label:"Testimonials",icon:"\uD83D\uDCAC"},{href:"/admin/contact",label:"Contact Info",icon:"\uD83D\uDCE7"},{href:"/admin/settings",label:"Settings",icon:"⚙️"}];return(0,a.jsxs)("div",{className:"min-h-screen bg-primary-900",children:[(0,a.jsxs)("nav",{className:"bg-primary-800 border-b border-primary-700",children:[(0,a.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,a.jsxs)("div",{className:"flex justify-between items-center h-16",children:[(0,a.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,a.jsx)(i(),{href:"/admin/dashboard",className:"text-lg sm:text-xl font-bold text-white",children:"Admin"}),(0,a.jsx)("div",{className:"hidden lg:flex space-x-2",children:m.map(e=>(0,a.jsxs)(i(),{href:e.href,className:"px-3 py-2 rounded-md text-sm font-medium transition-colors ".concat(r===e.href?"bg-accent-600 text-white":"text-primary-300 hover:text-white hover:bg-primary-700"),children:[(0,a.jsx)("span",{className:"mr-2",children:e.icon}),e.label]},e.href))})]}),(0,a.jsxs)("div",{className:"flex items-center space-x-2 sm:space-x-4",children:[(0,a.jsx)(i(),{href:"/",className:"hidden sm:block text-primary-300 hover:text-white text-sm",children:"View Site"}),(0,a.jsx)("button",{onClick:()=>{(0,l.X8)(),o.push("/admin/login")},className:"bg-red-600 hover:bg-red-700 text-white px-3 sm:px-4 py-2 rounded-md text-sm font-medium",children:"Logout"}),(0,a.jsx)("button",{onClick:()=>p(!u),className:"lg:hidden text-white p-2","aria-label":"Toggle menu",children:(0,a.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u?(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}):(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})]})]})}),u&&(0,a.jsx)("div",{className:"lg:hidden border-t border-primary-700",children:(0,a.jsxs)("div",{className:"px-2 pt-2 pb-3 space-y-1",children:[m.map(e=>(0,a.jsxs)(i(),{href:e.href,onClick:()=>p(!1),className:"block px-3 py-2 rounded-md text-base font-medium ".concat(r===e.href?"bg-accent-600 text-white":"text-primary-300 hover:text-white hover:bg-primary-700"),children:[(0,a.jsx)("span",{className:"mr-2",children:e.icon}),e.label]},e.href)),(0,a.jsx)(i(),{href:"/",className:"block px-3 py-2 rounded-md text-base font-medium text-primary-300 hover:text-white hover:bg-primary-700 sm:hidden",children:"\uD83C\uDFE0 View Site"})]})})]}),(0,a.jsx)("main",{className:"max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 lg:py-8",children:t})]})}},3865:function(e,t,r){r.d(t,{KE:function(){return a},X8:function(){return o},kS:function(){return s},pw:function(){return n},z3:function(){return i}});let a=()=>localStorage.getItem("authToken")||localStorage.getItem("adminToken"),s=()=>{localStorage.removeItem("authToken"),localStorage.removeItem("adminToken")},o=s,i=e=>{if(!e)return null;try{let t=e.split(".")[1],r=t.replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(atob(r).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(a)}catch(e){return null}},n=e=>{let t=i(e);if(!t||!t.exp)return!0;let r=Math.floor(Date.now()/1e3);return t.exp<r}},6454:function(e,t,r){r.d(t,{Jn:function(){return i}});let a="https://backend.realfacestudio.com";class s{setUnauthorizedCallback(e){this.onUnauthorized=e}setToken(e){this.token=e,localStorage.setItem("authToken",e)}clearToken(){this.token=null,localStorage.removeItem("authToken"),localStorage.removeItem("adminToken")}getToken(){return this.token}refreshToken(){this.token=localStorage.getItem("authToken")||localStorage.getItem("adminToken")}transformResponse(e){if(!e)return e;if(Array.isArray(e))return e.map(e=>this.transformResponse(e));if("object"==typeof e){let t={};for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=this.transformResponse(e[r]));return t}if("string"==typeof e){if(e.startsWith("/uploads"))return"".concat(this.baseUrl,"/api").concat(e);if(e.includes("/uploads/")&&!e.includes("/api/uploads/"))return e.replace("/uploads/","/api/uploads/");if(e.startsWith("/images")||e.startsWith("/videos"))return"".concat(this.baseUrl).concat(e)}return e}async request(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r="".concat(this.baseUrl).concat(e),a={"Content-Type":"application/json",...t.headers};this.token&&(a.Authorization="Bearer ".concat(this.token));let s={...t,headers:a};try{let e=await fetch(r,s);if(401===e.status||403===e.status)throw this.clearToken(),localStorage.removeItem("adminToken"),this.onUnauthorized&&this.onUnauthorized(),Error("Session expired. Please login again.");let t=await e.json();if(!e.ok)throw Error(t.error||"HTTP error! status: ".concat(e.status));return this.transformResponse(t)}catch(e){throw console.error("API request failed:",e),e}}async get(e){return this.request(e,{method:"GET"})}async post(e,t){return this.request(e,{method:"POST",body:JSON.stringify(t)})}async put(e,t){return this.request(e,{method:"PUT",body:JSON.stringify(t)})}async delete(e){return this.request(e,{method:"DELETE"})}async upload(e,t,r){let a="".concat(this.baseUrl).concat(e),s=new FormData;s.append("file",t);let o={};return this.token&&(o.Authorization="Bearer ".concat(this.token)),new Promise((e,t)=>{let i=new XMLHttpRequest;i.upload.addEventListener("progress",e=>{if(e.lengthComputable&&r){let t=Math.round(e.loaded/e.total*100);r(t)}}),i.addEventListener("load",()=>{if(401===i.status||403===i.status){this.clearToken(),localStorage.removeItem("adminToken"),this.onUnauthorized&&this.onUnauthorized(),t(Error("Session expired. Please login again."));return}try{let r=JSON.parse(i.responseText);i.status>=200&&i.status<300?e(r):t(Error(r.error||"HTTP error! status: ".concat(i.status)))}catch(e){t(Error("Failed to parse response"))}}),i.addEventListener("error",()=>{t(Error("File upload failed"))}),i.addEventListener("abort",()=>{t(Error("File upload cancelled"))}),i.open("POST",a),Object.keys(o).forEach(e=>{i.setRequestHeader(e,o[e])}),i.send(s)})}async fetchModels(){return this.get("/api/models")}async fetchFeaturedModels(){return this.get("/api/models/featured")}async fetchCategories(){return this.get("/api/categories")}async fetchPortfolio(){return this.get("/api/portfolio")}async fetchTestimonials(){return this.get("/api/testimonials")}async fetchSettings(){return this.get("/api/settings")}async submitContact(e){return this.post("/api/contact",e)}async fetchContact(){return this.get("/api/contact")}constructor(e){this.onUnauthorized=null,this.baseUrl=e,this.token=null,this.token=localStorage.getItem("authToken")||localStorage.getItem("adminToken")}}let o=new s(a),i=e=>{if(e){if(e.startsWith("data:"))return e;if(e.includes("/uploads/")&&!e.includes("/api/uploads/")){let t=e.replace("/uploads/","/api/uploads/");return t.startsWith("http")?t:"".concat(a).concat(t.startsWith("/")?"":"/").concat(t)}return e.startsWith("http://")||e.startsWith("https://")?e:e.startsWith("/")?"".concat(a).concat(e):e}};t.ZP=o},5925:function(e,t,r){let a,s;r.d(t,{x7:function(){return ep},ZP:function(){return em}});var o,i=r(2265);let n={data:""},l=e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||n},c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let r="",a="",s="";for(let o in e){let i=e[o];"@"==o[0]?"i"==o[1]?r=o+" "+i+";":a+="f"==o[1]?p(i,o):o+"{"+p(i,"k"==o[1]?"":t)+"}":"object"==typeof i?a+=p(i,t?t.replace(/([^,])+/g,e=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=i&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=p.p?p.p(o,i):o+":"+i+";")}return r+(t&&s?t+"{"+s+"}":s)+a},m={},h=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+h(e[r]);return t}return e},f=(e,t,r,a,s)=>{var o;let i=h(e),n=m[i]||(m[i]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(i));if(!m[n]){let t=i!==e?e:(e=>{let t,r,a=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?a.shift():t[3]?(r=t[3].replace(u," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(u," ").trim();return a[0]})(e);m[n]=p(s?{["@keyframes "+n]:t}:t,r?"":"."+n)}let l=r&&m.g?m.g:null;return r&&(m.g=m[n]),o=m[n],l?t.data=t.data.replace(l,o):-1===t.data.indexOf(o)&&(t.data=a?o+t.data:t.data+o),n},g=(e,t,r)=>e.reduce((e,a,s)=>{let o=t[s];if(o&&o.call){let e=o(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+a+(null==o?"":o)},"");function y(e){let t=this||{},r=e.call?e(t.p):e;return f(r.unshift?r.raw?g(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}y.bind({g:1});let b,x,v,k=y.bind({k:1});function w(e,t){let r=this||{};return function(){let a=arguments;function s(o,i){let n=Object.assign({},o),l=n.className||s.className;r.p=Object.assign({theme:x&&x()},n),r.o=/ *go\d+/.test(l),n.className=y.apply(r,a)+(l?" "+l:""),t&&(n.ref=i);let c=e;return e[0]&&(c=n.as||e,delete n.as),v&&c[0]&&v(n),b(c,n)}return t?t(s):s}}var E=e=>"function"==typeof e,j=(e,t)=>E(e)?e(t):e,C=(a=0,()=>(++a).toString()),T=()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s},D="default",N=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return N(e,{type:e.toasts.find(e=>e.id===a.id)?1:0,toast:a});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},S=[],P={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},I={},z=(e,t=D)=>{I[t]=N(I[t]||P,e),S.forEach(([e,r])=>{e===t&&r(I[t])})},O=e=>Object.keys(I).forEach(t=>z(e,t)),A=e=>Object.keys(I).find(t=>I[t].toasts.some(t=>t.id===e)),$=(e=D)=>t=>{z(t,e)},L={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},U=(e={},t=D)=>{let[r,a]=(0,i.useState)(I[t]||P),s=(0,i.useRef)(I[t]);(0,i.useEffect)(()=>(s.current!==I[t]&&a(I[t]),S.push([t,a]),()=>{let e=S.findIndex(([e])=>e===t);e>-1&&S.splice(e,1)}),[t]);let o=r.toasts.map(t=>{var r,a,s;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(r=e[t.type])?void 0:r.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||L[t.type],style:{...e.style,...null==(s=e[t.type])?void 0:s.style,...t.style}}});return{...r,toasts:o}},M=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||C()}),F=e=>(t,r)=>{let a=M(t,e,r);return $(a.toasterId||A(a.id))({type:2,toast:a}),a.id},R=(e,t)=>F("blank")(e,t);R.error=F("error"),R.success=F("success"),R.loading=F("loading"),R.custom=F("custom"),R.dismiss=(e,t)=>{let r={type:3,toastId:e};t?$(t)(r):O(r)},R.dismissAll=e=>R.dismiss(void 0,e),R.remove=(e,t)=>{let r={type:4,toastId:e};t?$(t)(r):O(r)},R.removeAll=e=>R.remove(void 0,e),R.promise=(e,t,r)=>{let a=R.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let s=t.success?j(t.success,e):void 0;return s?R.success(s,{id:a,...r,...null==r?void 0:r.success}):R.dismiss(a),e}).catch(e=>{let s=t.error?j(t.error,e):void 0;s?R.error(s,{id:a,...r,...null==r?void 0:r.error}):R.dismiss(a)}),e};var _=1e3,W=(e,t="default")=>{let{toasts:r,pausedAt:a}=U(e,t),s=(0,i.useRef)(new Map).current,o=(0,i.useCallback)((e,t=_)=>{if(s.has(e))return;let r=setTimeout(()=>{s.delete(e),n({type:4,toastId:e})},t);s.set(e,r)},[]);(0,i.useEffect)(()=>{if(a)return;let e=Date.now(),s=r.map(r=>{if(r.duration===1/0)return;let a=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(a<0){r.visible&&R.dismiss(r.id);return}return setTimeout(()=>R.dismiss(r.id,t),a)});return()=>{s.forEach(e=>e&&clearTimeout(e))}},[r,a,t]);let n=(0,i.useCallback)($(t),[t]),l=(0,i.useCallback)(()=>{n({type:5,time:Date.now()})},[n]),c=(0,i.useCallback)((e,t)=>{n({type:1,toast:{id:e,height:t}})},[n]),d=(0,i.useCallback)(()=>{a&&n({type:6,time:Date.now()})},[a,n]),u=(0,i.useCallback)((e,t)=>{let{reverseOrder:a=!1,gutter:s=8,defaultPosition:o}=t||{},i=r.filter(t=>(t.position||o)===(e.position||o)&&t.height),n=i.findIndex(t=>t.id===e.id),l=i.filter((e,t)=>t<n&&e.visible).length;return i.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+s,0)},[r]);return(0,i.useEffect)(()=>{r.forEach(e=>{if(e.dismissed)o(e.id,e.removeDelay);else{let t=s.get(e.id);t&&(clearTimeout(t),s.delete(e.id))}})},[r,o]),{toasts:r,handlers:{updateHeight:c,startPause:l,endPause:d,calculateOffset:u}}},q=k`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,H=k`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Z=k`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,J=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${q} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${H} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Z} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,B=k`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,X=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${B} 1s linear infinite;
`,K=k`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,V=k`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,G=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${K} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${V} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Y=w("div")`
  position: absolute;
`,Q=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ee=k`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,et=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ee} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,er=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?i.createElement(et,null,t):t:"blank"===r?null:i.createElement(Q,null,i.createElement(X,{...a}),"loading"!==r&&i.createElement(Y,null,"error"===r?i.createElement(J,{...a}):i.createElement(G,{...a})))},ea=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,es=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,eo=w("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ei=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,en=(e,t)=>{let r=e.includes("top")?1:-1,[a,s]=T()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ea(r),es(r)];return{animation:t?`${k(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${k(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},el=i.memo(({toast:e,position:t,style:r,children:a})=>{let s=e.height?en(e.position||t||"top-center",e.visible):{opacity:0},o=i.createElement(er,{toast:e}),n=i.createElement(ei,{...e.ariaProps},j(e.message,e));return i.createElement(eo,{className:e.className,style:{...s,...r,...e.style}},"function"==typeof a?a({icon:o,message:n}):i.createElement(i.Fragment,null,o,n))});o=i.createElement,p.p=void 0,b=o,x=void 0,v=void 0;var ec=({id:e,className:t,style:r,onHeightUpdate:a,children:s})=>{let o=i.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return i.createElement("div",{ref:o,className:t,style:r},s)},ed=(e,t)=>{let r=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:T()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...a}},eu=y`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ep=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:s,toasterId:o,containerStyle:n,containerClassName:l})=>{let{toasts:c,handlers:d}=W(r,o);return i.createElement("div",{"data-rht-toaster":o||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},c.map(r=>{let o=r.position||t,n=ed(o,d.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}));return i.createElement(ec,{id:r.id,key:r.id,onHeightUpdate:d.updateHeight,className:r.visible?eu:"",style:n},"custom"===r.type?j(r.message,r):s?s(r):i.createElement(el,{toast:r,position:o}))}))},em=R}}]);