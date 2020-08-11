(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(6),i=(n(0),n(144)),a={id:"initialDODOOffering",title:"Initial DODO Offering",sidebar_label:"Initial DODO Offering"},l={id:"initialDODOOffering",isDocsHomePage:!1,title:"Initial DODO Offering",description:"Initial DODO Offering (IDO) is a brand new asset issuing approach.",source:"@site/docs/IDO.md",permalink:"/docs/docs/initialDODOOffering",editUrl:"https://github.com/DODOEX/docs/edit/master/docs/IDO.md",sidebar_label:"Initial DODO Offering",sidebar:"someSidebar",previous:{title:"Audit",permalink:"/docs/docs/audit"},next:{title:"Authority",permalink:"/docs/docs/authority"}},c=[{value:"All you need is your own token",id:"all-you-need-is-your-own-token",children:[]}],u={rightToc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Initial DODO Offering (IDO) is a brand new asset issuing approach."),Object(i.b)("p",null,"Unlike offering assets at CEX or other DEX, cost of offering assets at DODO is incredible cheap. It's totally free!"),Object(i.b)("p",null,"DODO employs a brand new algorithm called Proactive Market Maker (PMM). Normally the algorithm requires a price oracle to provide liquidity. But when there is no outside market, you could simply set the price oracle to a const price and start an initial DODO offering."),Object(i.b)("h2",{id:"all-you-need-is-your-own-token"},"All you need is your own token"),Object(i.b)("p",null,"Unlike AMM, DODO do not require quote token (for example, in ETH-USDC trading pair, USDC is quote token). The only thing you need to do is to deposit your own token to the pool. After deposit, PMM creates ask side depth. The more token you deposit, the better the liquidity is."),Object(i.b)("p",null,"Because there is no quote token in the pool, there is no bid side depth. But, no need to worry. There is also no base token in the market and no one intends to sell.\nIf you are familiar with Auction, you may see IDO as another type of Auction. You're right! But that is not the full picture."),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://dodoex.github.io/docs/img/dodo_long_tail_1.jpeg",alt:null}))),Object(i.b)("p",null,"Remember the const price you set in oracle? It would be the initial offering price. As users buy a token, the price rises and quote token flows into the pool. This amount of quote token produces bid side depth as a result. Maybe we could call it bidirectional auction \ud83e\udd14"),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://dodoex.github.io/docs/img/dodo_long_tail_2.jpeg",alt:null}))),Object(i.b)("p",null,"Compared with AMM based platforms, issuing assets on DODO provides more benefits:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Sell token from a given price without capital requirement"),Object(i.b)("li",{parentName:"ul"},"Sufficient liquidity"),Object(i.b)("li",{parentName:"ul"},"Flexible parameter (DIY your price curve)")))}s.isMDXComponent=!0},144:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,O=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return n?o.a.createElement(O,l(l({ref:t},u),{},{components:n})):o.a.createElement(O,l({ref:t},u))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);