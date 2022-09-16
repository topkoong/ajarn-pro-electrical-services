(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{4619:function(e,t,i){"use strict";var s,n;i.r(t),i.d(t,{DEFAULT_ID:function(){return r},Loader:function(){return a},LoaderStatus:function(){return s}});let r="__googleMapsScriptId";(n=s||(s={}))[n.INITIALIZED=0]="INITIALIZED",n[n.LOADING=1]="LOADING",n[n.SUCCESS=2]="SUCCESS",n[n.FAILURE=3]="FAILURE";class a{constructor({apiKey:e,authReferrerPolicy:t,channel:i,client:s,id:n=r,language:l,libraries:o=[],mapIds:c,nonce:h,region:d,retries:u=3,url:f="https://maps.googleapis.com/maps/api/js",version:m}){if(this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=e,this.authReferrerPolicy=t,this.channel=i,this.client=s,this.id=n||r,this.language=l,this.libraries=o,this.mapIds=c,this.nonce=h,this.region=d,this.retries=u,this.url=f,this.version=m,a.instance){if(!function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;if(Array.isArray(t)){if((s=t.length)!=i.length)return!1;for(n=s;0!=n--;)if(!e(t[n],i[n]))return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((s=(r=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(n=s;0!=n--;)if(!Object.prototype.hasOwnProperty.call(i,r[n]))return!1;for(n=s;0!=n--;){var s,n,r,a=r[n];if(!e(t[a],i[a]))return!1}return!0}return t!=t&&i!=i}(this.options,a.instance.options))throw Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(a.instance.options)}`);return a.instance}a.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?s.FAILURE:this.done?s.SUCCESS:this.loading?s.LOADING:s.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+=`?callback=${this.CALLBACK}`,this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),this.libraries.length>0&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),this.authReferrerPolicy&&(e+=`&auth_referrer_policy=${this.authReferrerPolicy}`),e}deleteScript(){let e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((e,t)=>{this.loadCallback(i=>{i?t(i.error):e(window.google)})})}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){if(document.getElementById(this.id)){this.callback();return}let e=this.createUrl(),t=document.createElement("script");t.id=this.id,t.type="text/javascript",t.src=e,t.onerror=this.loadErrorCallback.bind(this),t.defer=!0,t.async=!0,this.nonce&&(t.nonce=this.nonce),document.head.appendChild(t)}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){let t=this.errors.length*Math.pow(2,this.errors.length);console.log(`Failed to load Google Maps script, retrying in ${t} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},t)}else this.onerrorEvent=e,this.callback()}setCallback(){window.__googleMapsCallback=this.callback.bind(this)}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version){console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),this.callback();return}this.loading||(this.loading=!0,this.setCallback(),this.setScript())}}}},1883:function(e,t,i){var s;(s=function(e,t,i){"use strict";var s,n,r=(s=i)&&"object"==typeof s&&"default"in s?s:{default:s};e.Status=void 0,(n=e.Status||(e.Status={})).LOADING="LOADING",n.FAILURE="FAILURE",n.SUCCESS="SUCCESS";let a=({children:s,render:n,callback:a,...l})=>{let[o,c]=i.useState(e.Status.LOADING);return(i.useEffect(()=>{let i=new t.Loader(l),s=e=>{a&&a(e,i),c(e)};s(e.Status.LOADING),i.load().then(()=>s(e.Status.SUCCESS),()=>s(e.Status.FAILURE))},[]),o===e.Status.SUCCESS&&s)?r.default.createElement(r.default.Fragment,null,s):n?n(o):r.default.createElement(r.default.Fragment,null)};e.Wrapper=a,Object.defineProperty(e,"__esModule",{value:!0})})(t,i(4619),i(959))},2792:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return i(1837)}])},1837:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return d}});var s=i(1527),n=i(1883),r=i(4256),a=i.n(r),l=i(959),o=function(e){var t=e.center,i=e.zoom,n=e.children,r=(0,l.useRef)(null),a=(0,l.useState)(),o=a[0],c=a[1];return(0,l.useEffect)(function(){r.current&&!o&&c(new window.google.maps.Map(r.current,{center:t,zoom:i}))},[r,o]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"h-96",ref:r,id:"map"}),l.Children.map(n,function(e){if((0,l.isValidElement)(e))return(0,l.cloneElement)(e,{map:o})})]})},c=function(e){var t=(0,l.useState)(),i=t[0],s=t[1];return(0,l.useEffect)(function(){return i||s(new google.maps.Marker),function(){i&&i.setMap(null)}},[i]),(0,l.useEffect)(function(){i&&i.setOptions(e)},[i,e]),null};function h(e){var t=(0,l.useState)(!1),i=t[0],s=t[1];return(0,l.useEffect)(function(){var t=window.matchMedia(e);s(t.matches);var i=function(e){return s(e.matches)};return t.addEventListener("change",i),function(){return t.removeEventListener("change",i)}},[]),i}var d=function(){var e,t=((e={isXs:h("(max-width: 640px)"),isSm:h("(min-width: 641px) and (max-width: 768px)"),isMd:h("(min-width: 769px) and (max-width: 1024px)"),isLg:h("(min-width: 1025px) and (max-width: 1279px)"),isXl:h("(min-width: 1280px) and (max-width: 1535px)"),is2Xl:h("(min-width: 1536px)"),active:"xs"}).isXs&&(e.active="xs"),e.isSm&&(e.active="sm"),e.isMd&&(e.active="md"),e.isLg&&(e.active="lg"),e.isXl&&(e.active="xl"),e.is2Xl&&(e.active="2xl"),e),i=t.isXs,r=t.isSm,l=t.isMd,d=t.isLg,u='อาจารย์ "โปร" Electrical Services',f=function(e){return e===n.Status.LOADING?(0,s.jsxs)("h3",{children:[e," .."]}):e===n.Status.FAILURE?(0,s.jsxs)("h3",{children:[e," ..."]}):(0,s.jsx)("h3",{children:"Not working"})};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a(),{children:[(0,s.jsx)("title",{children:'Ajarn "PRO" - Contact'}),(0,s.jsx)("meta",{name:"description",content:"รับเหมาไฟฟ้า ติดตั้งระบบไฟฟ้า เหมาไฟฟ้า เดินสายไฟ เดินไฟเมน วางระบบไฟฟ้า เดินไฟโรงงาน งานไฟฟ้า ตรวจไฟฟ้า ประกอบตู้ไฟฟ้า ตู้คอนโทรลไฟฟ้า หม้อแปลงไฟฟ้า"}),(0,s.jsx)("meta",{name:"title",content:'Ajarn "PRO" - Electrical Services'}),(0,s.jsx)("meta",{property:"og:title",content:"รับแก้ไขระบบไฟฟ้า รับเดินสายไฟ เดินราง รับลากสาย รับทำ Cable Tray,Wireway Cabinet,Cable Ladder รับซ่อมบำรุง รับปรับปรุง ดูแลระบบไฟฟ้าโรงงาน อุตสาหกรรรม ควบคุม"}),(0,s.jsx)("meta",{property:"og:description",content:"รับตรวจระบบไฟฟ้า ปรับปรุงระบบไฟฟ้า รับทำตู้ Control Panel แบบต่างๆ ตามความต้องการ"})]}),(0,s.jsxs)("main",{className:"container p-8",children:[(0,s.jsxs)("section",{children:[(0,s.jsx)("h1",{className:"text-lg md:text-2xl font-bold text-center my-8 uppercase",children:"Stay in the loop"}),(0,s.jsx)("h2",{className:"my-2 text-center text-[#363845] font-bold text-lg md:text-xl",children:'Address your challenge with Ajarn "PRO" Electric Field Services'})]}),(0,s.jsxs)("section",{className:"p-8 h-full",children:[(0,s.jsx)(n.Wrapper,{apiKey:"AIzaSyCQ4phBfP4OMHkVac-JLhcCLJfA48P1IjI",render:f,children:(0,s.jsx)(o,{center:{lat:13.7677238,lng:100.6776538},zoom:19.51,children:(0,s.jsx)(c,{position:{lat:13.767917497113437,lng:100.67764904834},label:{text:u,fontFamily:"eqTH",fontWeight:"bold",color:"black",fontSize:i?"17px":r?"20px":l?"24px":d?"28px":"32px",className:"text-xl md:text-2xl font-bold text-center uppercase"},title:u})})}),(0,s.jsx)("h2",{className:"my-4 text-center text-[#363845] font-bold text-lg md:text-xl",children:"General Contact"}),(0,s.jsx)("p",{className:"my-4 text-center text-[#363845] font-semibold text-base",children:"Content...."}),(0,s.jsx)("h2",{className:"my-4 text-center text-[#363845] font-bold text-lg md:text-xl",children:"Service Request"}),(0,s.jsx)("p",{className:"my-4 text-center text-[#363845] font-semibold text-base",children:"SUBMIT A SERVICE REQUEST and we will get back to you."})]}),(0,s.jsxs)("section",{className:"p-8",children:[(0,s.jsx)("h2",{className:"my-8 text-center text-[#363845] font-bold text-lg md:text-xl",children:"KEEPING YOUR HOME HAPPY!"}),(0,s.jsx)("p",{className:"my-8 text-center text-[#363845] font-semibold text-base",children:"Schedule Online Today"}),(0,s.jsxs)("ul",{className:"my-8 flex justify-center",children:[(0,s.jsx)("li",{children:(0,s.jsx)("img",{src:"./icons/line.svg",alt:"LineIcon",className:"w-8 h-8 mx-2"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#",children:(0,s.jsx)("img",{src:"./icons/facebook.svg",alt:"FacebookIcon",className:"w-8 h-8 mx-2"})})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#",children:(0,s.jsx)("img",{src:"./icons/instagram.svg",alt:"InstagramIcon",className:"w-8 h-8 mx-2"})})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#",children:(0,s.jsx)("img",{src:"./icons/youtube.svg",alt:"YouTubeIcon",className:"w-8 h-8 mx-2"})})})]})]})]})]})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=2792)}),_N_E=e.O()}]);