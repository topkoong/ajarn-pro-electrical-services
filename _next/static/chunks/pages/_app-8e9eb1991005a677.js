(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{9246:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(6269)}])},6626:function(e,t){"use strict";function r(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=r,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},813:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(553).Z;r(2359).default,Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(7022).Z,a=r(5997).Z,l=o(r(959)),u=r(166),i=r(8430),c=r(509),s=r(8949),f=r(4043),d=r(6626),p=r(7812),$=void 0!==l.default.useTransition,v={};function h(e,t,r,n){if(e&&u.isLocalURL(t)){Promise.resolve(e.prefetch(t,r,n)).catch(function(e){});var o=n&&void 0!==n.locale?n.locale:e&&e.locale;v[t+"%"+r+(o?"%"+o:"")]=!0}}var x=l.default.forwardRef(function(e,t){var r,o,x=e.href,m=e.as,_=e.children,g=e.prefetch,y=e.passHref,b=e.replace,j=e.shallow,k=e.scroll,w=e.locale,C=e.onClick,M=e.onMouseEnter,L=e.onTouchStart,N=e.legacyBehavior,P=void 0===N?!0!==Boolean(!1):N,R=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=_,P&&("string"==typeof r||"number"==typeof r)&&(r=l.default.createElement("a",null,r));var E=!1!==g,S=n($?l.default.useTransition():[],2)[1],T=l.default.useContext(c.RouterContext),H=l.default.useContext(s.AppRouterContext);H&&(T=H);var O=l.default.useMemo(function(){var e=n(u.resolveHref(T,x,!0),2),t=e[0],r=e[1];return{href:t,as:m?u.resolveHref(T,m):r||t}},[T,x,m]),A=O.href,I=O.as,U=l.default.useRef(A),B=l.default.useRef(I);P&&(o=l.default.Children.only(r));var D=P?o&&"object"==typeof o&&o.ref:t,Z=n(f.useIntersection({rootMargin:"200px"}),3),z=Z[0],K=Z[1],F=Z[2],G=l.default.useCallback(function(e){(B.current!==I||U.current!==A)&&(F(),B.current=I,U.current=A),z(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[I,D,A,F,z]);l.default.useEffect(function(){var e=K&&E&&u.isLocalURL(A),t=void 0!==w?w:T&&T.locale,r=v[A+"%"+I+(t?"%"+t:"")];e&&!r&&h(T,A,I,{locale:t})},[I,A,K,w,E,T]);var X={ref:G,onClick:function(e){P||"function"!=typeof C||C(e),P&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,l,i,c,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(d=(f=e).currentTarget.target)||"_self"===d)&&!f.metaKey&&!f.ctrlKey&&!f.shiftKey&&!f.altKey&&(!f.nativeEvent||2!==f.nativeEvent.which)&&u.isLocalURL(r)){e.preventDefault();var f,d,p=function(){"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:a,locale:i,scroll:l}):t[o?"replace":"push"](r,{forceOptimisticNavigation:!s})};c?c(p):p()}}(e,T,A,I,b,j,k,w,H?S:void 0,E)},onMouseEnter:function(e){P||"function"!=typeof M||M(e),P&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),!(!E&&H)&&u.isLocalURL(A)&&h(T,A,I,{priority:!0})},onTouchStart:function(e){P||"function"!=typeof L||L(e),P&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),!(!E&&H)&&u.isLocalURL(A)&&h(T,A,I,{priority:!0})}};if(!P||y||"a"===o.type&&!("href"in o.props)){var q=void 0!==w?w:T&&T.locale,W=T&&T.isLocaleDomain&&d.getDomainLocale(I,q,T.locales,T.domainLocales);X.href=W||p.addBasePath(i.addLocale(I,q,T&&T.defaultLocale))}return P?l.default.cloneElement(o,X):l.default.createElement("a",Object.assign({},R,X),r)});t.default=x,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4043:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(553).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,c=e.disabled||!l,s=n(o.useState(!1),2),f=s[0],d=s[1],p=n(o.useState(null),2),$=p[0],v=p[1];return o.useEffect(function(){if(l){if(!c&&!f&&$&&$.tagName){var e,n,o,s,p,v,h;return e=$,n=function(e){return e&&d(e)},p=(s=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=i.find(function(e){return e.root===r.root&&e.margin===r.margin});if(n&&(t=u.get(n)))return t;var o=new Map;return t={id:r,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},i.push(r),u.set(r,t),t}(o={root:null==t?void 0:t.current,rootMargin:r})).id,v=s.observer,(h=s.elements).set(e,n),v.observe(e),function(){if(h.delete(e),v.unobserve(e),0===h.size){v.disconnect(),u.delete(p);var t=i.findIndex(function(e){return e.root===p.root&&e.margin===p.margin});t>-1&&i.splice(t,1)}}}}else if(!f){var x=a.requestIdleCallback(function(){return d(!0)});return function(){return a.cancelIdleCallback(x)}}},[$,c,r,t,f]),[v,f,o.useCallback(function(){d(!1)},[])]};var o=r(959),a=r(5843),l="function"==typeof IntersectionObserver,u=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8949:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var n=(0,r(7022).Z)(r(959)),o=n.default.createContext(null);t.AppRouterContext=o;var a=n.default.createContext(null);t.LayoutRouterContext=a;var l=n.default.createContext(null);t.GlobalLayoutRouterContext=l},6269:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t),r.d(t,{default:function(){return d}});var o=r(1527);r(5773),r(7468);var a=r(4256),l=r.n(a),u=r(4588),i=r.n(u),c=r(959),s=function(){var e=(0,c.useState)(!1),t=e[0],r=e[1];return(0,o.jsx)("header",{children:(0,o.jsx)("nav",{className:"bg-white px-2 sm:px-4 py-2.5",children:(0,o.jsxs)("div",{className:"flex flex-wrap justify-between items-center mx-auto",children:[(0,o.jsx)(i(),{href:"/",children:(0,o.jsxs)("div",{className:"flex items-center",children:[(0,o.jsx)("img",{src:"/icons/logo.svg",className:"mr-3 h-6 sm:h-9",alt:'Ajarn "PRO" Electrical Services Logo'}),(0,o.jsx)("span",{className:"self-center text-xl font-semibold whitespace-nowrap",children:"Electrical Services"})]})}),(0,o.jsx)("button",{"data-collapse-toggle":"navbar-default",type:"button",className:"inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600","aria-controls":"navbar-default","aria-expanded":"false",onClick:function(){return r(!t)},children:t?(0,o.jsx)("svg",{className:"fill-current h-6 w-6 lg:hidden",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3",d:"M6 18L18 6M6 6l12 12"})}):(0,o.jsx)("svg",{className:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})})}),(0,o.jsx)("div",{className:"".concat(t?"block":"hidden"," w-full md:block md:w-auto"),id:"navbar-default",children:(0,o.jsxs)("ul",{className:"flex flex-col p-4 mt-4 bg-white rounded-lg md:flex-row md:space-x-8 md:mt-0",children:[(0,o.jsx)("li",{className:"uppercase font-medium text-base block py-2 pr-4 pl-3 text-black rounded md:p-0",children:(0,o.jsx)(i(),{href:"/","aria-current":"page",children:"Home"})}),(0,o.jsx)("li",{className:"uppercase font-medium text-base block py-2 pr-4 pl-3 text-black rounded md:p-0",children:(0,o.jsx)(i(),{href:"/about",children:"About"})}),(0,o.jsx)("li",{className:"uppercase font-medium text-base block py-2 pr-4 pl-3 text-black rounded md:p-0",children:(0,o.jsx)(i(),{href:"/services",children:"Services"})}),(0,o.jsx)("li",{className:"uppercase font-medium text-base block py-2 pr-4 pl-3 text-black rounded md:p-0",children:(0,o.jsx)(i(),{href:"/pricing",children:"Pricing"})}),(0,o.jsx)("li",{className:"uppercase font-medium text-base block py-2 pr-4 pl-3 text-black rounded md:p-0",children:(0,o.jsx)(i(),{href:"/contact",children:"Contact"})})]})})]})})})},f=function(e){var t=e.children;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s,{}),t]})},d=function(e){var t=e.Component,r=e.pageProps;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(l(),{children:[(0,o.jsx)("title",{children:'Ajarn "PRO" - Electrical Services - รับออกแบบติดตั้งงานระบบไฟฟ้า'}),(0,o.jsx)("meta",{name:"description",content:"รับออกแบบ ติดตั้ง งานระบบไฟฟ้า - งานบำรุงรักษา ปรับปรุงตู้ไฟฟ้า เหมาไฟฟ้า เดินสายไฟ เดินไฟเมน วางระบบไฟฟ้า เดินไฟโรงงาน งานไฟฟ้า ตรวจไฟฟ้า ประกอบตู้ไฟฟ้า ตู้คอนโทรลไฟฟ้า หม้อแปลงไฟฟ้า"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,o.jsx)(f,{children:(0,o.jsx)(t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.forEach(function(t){n(e,t,r[t])})}return e}({},r))})]})}},7468:function(){},5773:function(){},4256:function(e,t,r){e.exports=r(330)},4588:function(e,t,r){e.exports=r(813)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(9246),t(9203)}),_N_E=e.O()}]);