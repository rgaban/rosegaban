(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,c=void 0!==o&&o;return n||a&&c}},"20a2":function(e,t,n){e.exports=n("nOHt")},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),i=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,c=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){c=!0;var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var s=0,u=d.length;s<u;s++){var l=d[s];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var f=a.props[l],p=r[l]||new Set;"name"===l&&c||!p.has(f)?(p.add(f),r[l]=p):o=!1}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,a.useContext)(c.AmpStateContext),r=(0,a.useContext)(i.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}m.rewind=function(){};var v=m;t.default=v},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},CafY:function(e,t,n){"use strict";n.d(t,"b",(function(){return k})),n.d(t,"a",(function(){return C}));var r=n("nKUr"),a=n("g4pe"),o=n.n(a),c=n("YFqc"),i=n.n(c),s=n("Tred"),u=n.n(s),l=n("rePB");function f(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=n("20a2"),p=n("q1tI"),m=n.n(p);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=Object(d.withRouter)((function(e){var t=e.router,n=e.children,a=f(e,["router","children"]),o=p.Children.only(n),c=o.props.className||"";return t.pathname===a.href&&a.activeClassName&&(c="".concat(c," ").concat(a.activeClassName).trim()),delete a.activeClassName,Object(r.jsx)(i.a,h(h({},a),{},{children:m.a.cloneElement(o,{className:c})}))})),y=n("azwh"),g=n.n(y);function j(e){Object(d.useRouter)();return Object(r.jsx)("li",{className:g.a.navigationItem,children:Object(r.jsx)(b,{activeClassName:"active",href:e.href,children:Object(r.jsx)("a",{children:e.name})})})}var O=n("rst+"),_=n.n(O);function x(){return Object(r.jsxs)("ul",{className:_.a.navigationItems,children:[Object(r.jsx)(j,{href:"/",name:"about"}),Object(r.jsx)(j,{href:"/skills-and-tools",name:"skills & tools"}),Object(r.jsx)(j,{href:"/projects",name:"projects"}),Object(r.jsx)(j,{href:"/contact",name:"contact"})]})}var w=n("I9Kx"),M=n.n(w);function I(){return Object(r.jsxs)("header",{className:M.a.toolbar,children:[Object(r.jsx)("div",{className:M.a.logo}),Object(r.jsx)("div",{className:M.a.mobile}),Object(r.jsx)("nav",{className:M.a.desktop,children:Object(r.jsx)(x,{})})]})}var k="Rose Gaban: Front-End Developer";function C(e){var t=e.children;e.home;return Object(r.jsxs)("div",{className:u.a.container,children:[Object(r.jsxs)(o.a,{children:[Object(r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Homemade+Apple&family=Mada&display=swap",rel:"stylesheet"}),Object(r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,600;0,700;1,400&display=swap",rel:"stylesheet"}),Object(r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),Object(r.jsx)("meta",{name:"description",content:k}),Object(r.jsx)("meta",{property:"og:image",content:"https://og-image.vercel.app/".concat(encodeURI(k),".png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg")}),Object(r.jsx)("meta",{name:"og:title",content:k}),Object(r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),Object(r.jsx)("title",{children:k})]}),Object(r.jsx)(I,{}),Object(r.jsx)("main",{className:u.a.main,children:t}),Object(r.jsx)("footer",{className:u.a.footer,children:"\xa9 Designed & Developed by Rose Gaban <3"})]})}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},I9Kx:function(e,t,n){e.exports={toolbar:"toolbar_toolbar__3vVU2",logo:"toolbar_logo__1YPGo",desktop:"toolbar_desktop__PY_XO"}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||c()}},Tred:function(e,t,n){e.exports={container:"layout_container__2t4v2",main:"layout_main__26dVU",footer:"layout_footer__127N0"}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),i=n("a1gu"),s=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){c(n,e);var t=u(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},azwh:function(e,t,n){e.exports={navigationItem:"navigationItem_navigationItem__3uRUj",active:"navigationItem_active__2_EYa"}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o=a(n("q1tI")),c=n("elyg"),i=n("nOHt"),s=n("vNVm"),u={};function l(e,t,n,r){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),a=n&&n.pathname||"/",f=o.default.useMemo((function(){var t=(0,c.resolveHref)(a,e.href,!0),n=r(t,2),o=n[0],i=n[1];return{href:o,as:e.as?(0,c.resolveHref)(a,e.as):i||o}}),[a,e.href,e.as]),d=f.href,p=f.as,m=e.children,v=e.replace,h=e.shallow,b=e.scroll,y=e.locale;"string"===typeof m&&(m=o.default.createElement("a",null,m));var g=o.Children.only(m),j=g&&"object"===typeof g&&g.ref,O=(0,s.useIntersection)({rootMargin:"200px"}),_=r(O,2),x=_[0],w=_[1],M=o.default.useCallback((function(e){x(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,x]);(0,o.useEffect)((function(){var e=w&&t&&(0,c.isLocalURL)(d),r="undefined"!==typeof y?y:n&&n.locale,a=u[d+"%"+p+(r?"%"+r:"")];e&&!a&&l(n,d,p,{locale:r})}),[p,d,w,y,t,n]);var I={ref:M,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o,locale:s,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,n,d,p,v,h,b,y)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),l(n,d,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var k="undefined"!==typeof y?y:n&&n.locale,C=(0,c.getDomainLocale)(p,k,n&&n.locales,n&&n.domainLocales);I.href=C||(0,c.addBasePath)((0,c.addLocale)(p,k,n&&n.defaultLocale))}return o.default.cloneElement(g,I)};t.default=f},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},"rst+":function(e,t,n){e.exports={navigationItems:"navigation_navigationItems__FYdcs"}},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),a=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,a=(0,o.useRef)(),u=(0,o.useState)(!1),l=r(u,2),f=l[0],d=l[1],p=(0,o.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),n||f||e&&e.tagName&&(a.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,c=r.elements;return c.set(e,t),o.observe(e),function(){c.delete(e),o.unobserve(e),0===c.size&&(o.disconnect(),s.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){i||f||(0,c.default)((function(){return d(!0)}))}),[f]),[p,f]};var o=n("q1tI"),c=a(n("0G5g")),i="undefined"!==typeof IntersectionObserver;var s=new Map}}]);