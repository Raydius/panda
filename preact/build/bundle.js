!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=2)}([function(t,e,n){"use strict";function o(){}function r(t,e){var n,r,i,a,u=L;for(a=arguments.length;a-- >2;)R.push(arguments[a]);for(e&&null!=e.children&&(R.length||R.push(e.children),delete e.children);R.length;)if((r=R.pop())&&void 0!==r.pop)for(a=r.length;a--;)R.push(r[a]);else"boolean"==typeof r&&(r=null),(i="function"!=typeof t)&&(null==r?r="":"number"==typeof r?r+="":"string"!=typeof r&&(i=!1)),i&&n?u[u.length-1]+=r:u===L?u=[r]:u.push(r),n=i;var l=new o;return l.nodeName=t,l.children=u,l.attributes=null==e?void 0:e,l.key=null==e?void 0:e.key,void 0!==E.vnode&&E.vnode(l),l}function i(t,e){for(var n in e)t[n]=e[n];return t}function a(t,e){return r(t.nodeName,i(i({},t.attributes),e),arguments.length>2?[].slice.call(arguments,2):t.children)}function u(t){!t._dirty&&(t._dirty=!0)&&1==D.push(t)&&(E.debounceRendering||W)(l)}function l(){var t,e=D;for(D=[];t=e.pop();)t._dirty&&j(t)}function c(t,e,n){return"string"==typeof e||"number"==typeof e?void 0!==t.splitText:"string"==typeof e.nodeName?!t._componentConstructor&&s(t,e.nodeName):n||t._componentConstructor===e.nodeName}function s(t,e){return t.normalizedNodeName===e||t.nodeName.toLowerCase()===e.toLowerCase()}function p(t){var e=i({},t.attributes);e.children=t.children;var n=t.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===e[o]&&(e[o]=n[o]);return e}function f(t,e){var n=e?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t);return n.normalizedNodeName=t,n}function d(t){var e=t.parentNode;e&&e.removeChild(t)}function h(t,e,n,o,r){if("className"===e&&(e="class"),"key"===e);else if("ref"===e)n&&n(null),o&&o(t);else if("class"!==e||r)if("style"===e){if(o&&"string"!=typeof o&&"string"!=typeof n||(t.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var i in n)i in o||(t.style[i]="");for(var i in o)t.style[i]="number"==typeof o[i]&&!1===A.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===e)o&&(t.innerHTML=o.__html||"");else if("o"==e[0]&&"n"==e[1]){var a=e!==(e=e.replace(/Capture$/,""));e=e.toLowerCase().substring(2),o?n||t.addEventListener(e,m,a):t.removeEventListener(e,m,a),(t._listeners||(t._listeners={}))[e]=o}else if("list"!==e&&"type"!==e&&!r&&e in t)v(t,e,null==o?"":o),null!=o&&!1!==o||t.removeAttribute(e);else{var u=r&&e!==(e=e.replace(/^xlink\:?/,""));null==o||!1===o?u?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.removeAttribute(e):"function"!=typeof o&&(u?t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),o):t.setAttribute(e,o))}else t.className=o||""}function v(t,e,n){try{t[e]=n}catch(t){}}function m(t){return this._listeners[t.type](E.event&&E.event(t)||t)}function y(){for(var t;t=I.pop();)E.afterMount&&E.afterMount(t),t.componentDidMount&&t.componentDidMount()}function _(t,e,n,o,r,i){B++||(H=null!=r&&void 0!==r.ownerSVGElement,K=null!=t&&!("__preactattr_"in t));var a=b(t,e,n,o,i);return r&&a.parentNode!==r&&r.appendChild(a),--B||(K=!1,i||y()),a}function b(t,e,n,o,r){var i=t,a=H;if(null!=e&&"boolean"!=typeof e||(e=""),"string"==typeof e||"number"==typeof e)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||r)?t.nodeValue!=e&&(t.nodeValue=e):(i=document.createTextNode(e),t&&(t.parentNode&&t.parentNode.replaceChild(i,t),w(t,!0))),i.__preactattr_=!0,i;var u=e.nodeName;if("function"==typeof u)return M(t,e,n,o);if(H="svg"===u||"foreignObject"!==u&&H,u+="",(!t||!s(t,u))&&(i=f(u,H),t)){for(;t.firstChild;)i.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(i,t),w(t,!0)}var l=i.firstChild,c=i.__preactattr_,p=e.children;if(null==c){c=i.__preactattr_={};for(var d=i.attributes,h=d.length;h--;)c[d[h].name]=d[h].value}return!K&&p&&1===p.length&&"string"==typeof p[0]&&null!=l&&void 0!==l.splitText&&null==l.nextSibling?l.nodeValue!=p[0]&&(l.nodeValue=p[0]):(p&&p.length||null!=l)&&g(i,p,n,o,K||null!=c.dangerouslySetInnerHTML),x(i,e.attributes,c),H=a,i}function g(t,e,n,o,r){var i,a,u,l,s,p=t.childNodes,f=[],h={},v=0,m=0,y=p.length,_=0,g=e?e.length:0;if(0!==y)for(var C=0;y>C;C++){var x=p[C],k=x.__preactattr_,O=g&&k?x._component?x._component.__key:k.key:null;null!=O?(v++,h[O]=x):(k||(void 0!==x.splitText?!r||x.nodeValue.trim():r))&&(f[_++]=x)}if(0!==g)for(var C=0;g>C;C++){l=e[C],s=null;var O=l.key;if(null!=O)v&&void 0!==h[O]&&(s=h[O],h[O]=void 0,v--);else if(!s&&_>m)for(i=m;_>i;i++)if(void 0!==f[i]&&c(a=f[i],l,r)){s=a,f[i]=void 0,i===_-1&&_--,i===m&&m++;break}s=b(s,l,n,o),u=p[C],s&&s!==t&&s!==u&&(null==u?t.appendChild(s):s===u.nextSibling?d(u):t.insertBefore(s,u))}if(v)for(var C in h)void 0!==h[C]&&w(h[C],!1);for(;_>=m;)void 0!==(s=f[_--])&&w(s,!1)}function w(t,e){var n=t._component;n?P(n):(null!=t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),!1!==e&&null!=t.__preactattr_||d(t),C(t))}function C(t){for(t=t.lastChild;t;){var e=t.previousSibling;w(t,!0),t=e}}function x(t,e,n){var o;for(o in n)e&&null!=e[o]||null==n[o]||h(t,o,n[o],n[o]=void 0,H);for(o in e)"children"===o||"innerHTML"===o||o in n&&e[o]===("value"===o||"checked"===o?t[o]:n[o])||h(t,o,n[o],n[o]=e[o],H)}function k(t){var e=t.constructor.name;($[e]||($[e]=[])).push(t)}function O(t,e,n){var o,r=$[t.name];if(t.prototype&&t.prototype.render?(o=new t(e,n),S.call(o,e,n)):(o=new S(e,n),o.constructor=t,o.render=U),r)for(var i=r.length;i--;)if(r[i].constructor===t){o.nextBase=r[i].nextBase,r.splice(i,1);break}return o}function U(t,e,n){return this.constructor(t,n)}function N(t,e,n,o,r){t._disable||(t._disable=!0,(t.__ref=e.ref)&&delete e.ref,(t.__key=e.key)&&delete e.key,!t.base||r?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(e,o),o&&o!==t.context&&(t.prevContext||(t.prevContext=t.context),t.context=o),t.prevProps||(t.prevProps=t.props),t.props=e,t._disable=!1,0!==n&&(1!==n&&!1===E.syncComponentUpdates&&t.base?u(t):j(t,1,r)),t.__ref&&t.__ref(t))}function j(t,e,n,o){if(!t._disable){var r,a,u,l=t.props,c=t.state,s=t.context,f=t.prevProps||l,d=t.prevState||c,h=t.prevContext||s,v=t.base,m=t.nextBase,b=v||m,g=t._component,C=!1;if(v&&(t.props=f,t.state=d,t.context=h,2!==e&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(l,c,s)?C=!0:t.componentWillUpdate&&t.componentWillUpdate(l,c,s),t.props=l,t.state=c,t.context=s),t.prevProps=t.prevState=t.prevContext=t.nextBase=null,t._dirty=!1,!C){r=t.render(l,c,s),t.getChildContext&&(s=i(i({},s),t.getChildContext()));var x,k,U=r&&r.nodeName;if("function"==typeof U){var M=p(r);a=g,a&&a.constructor===U&&M.key==a.__key?N(a,M,1,s,!1):(x=a,t._component=a=O(U,M,s),a.nextBase=a.nextBase||m,a._parentComponent=t,N(a,M,0,s,!1),j(a,1,n,!0)),k=a.base}else u=b,x=g,x&&(u=t._component=null),(b||1===e)&&(u&&(u._component=null),k=_(u,r,s,n||!v,b&&b.parentNode,!0));if(b&&k!==b&&a!==g){var S=b.parentNode;S&&k!==S&&(S.replaceChild(k,b),x||(b._component=null,w(b,!1)))}if(x&&P(x),t.base=k,k&&!o){for(var T=t,R=t;R=R._parentComponent;)(T=R).base=k;k._component=T,k._componentConstructor=T.constructor}}if(!v||n?I.unshift(t):C||(t.componentDidUpdate&&t.componentDidUpdate(f,d,h),E.afterUpdate&&E.afterUpdate(t)),null!=t._renderCallbacks)for(;t._renderCallbacks.length;)t._renderCallbacks.pop().call(t);B||o||y()}}function M(t,e,n,o){for(var r=t&&t._component,i=r,a=t,u=r&&t._componentConstructor===e.nodeName,l=u,c=p(e);r&&!l&&(r=r._parentComponent);)l=r.constructor===e.nodeName;return r&&l&&(!o||r._component)?(N(r,c,3,n,o),t=r.base):(i&&!u&&(P(i),t=a=null),r=O(e.nodeName,c,n),t&&!r.nextBase&&(r.nextBase=t,a=null),N(r,c,1,n,o),t=r.base,a&&t!==a&&(a._component=null,w(a,!1))),t}function P(t){E.beforeUnmount&&E.beforeUnmount(t);var e=t.base;t._disable=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var n=t._component;n?P(n):e&&(e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),t.nextBase=e,d(e),k(t),C(e)),t.__ref&&t.__ref(null)}function S(t,e){this._dirty=!0,this.context=e,this.props=t,this.state=this.state||{}}function T(t,e,n){return _(n,t,{},!1,e,!1)}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"h",function(){return r}),n.d(e,"createElement",function(){return r}),n.d(e,"cloneElement",function(){return a}),n.d(e,"Component",function(){return S}),n.d(e,"render",function(){return T}),n.d(e,"rerender",function(){return l}),n.d(e,"options",function(){return E});var E={},R=[],L=[],W="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,A=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,D=[],I=[],B=0,H=!1,K=!1,$={};i(S.prototype,{setState:function(t,e){var n=this.state;this.prevState||(this.prevState=i({},n)),i(n,"function"==typeof t?t(n,this.props):t),e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),u(this)},forceUpdate:function(t){t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),j(this,2)},render:function(){}}),e.default={h:r,createElement:r,cloneElement:a,Component:S,render:T,rerender:l,options:E}},function(t,e,n){"use strict";function o(t,e){for(var n in e)t[n]=e[n];return t}function r(t,e,n){var o,r=/(?:\?([^#]*))?(#.*)?$/,i=t.match(r),a={};if(i&&i[1])for(var l=i[1].split("&"),c=0;l.length>c;c++){var s=l[c].split("=");a[decodeURIComponent(s[0])]=decodeURIComponent(s.slice(1).join("="))}t=u(t.replace(r,"")),e=u(e||"");for(var p=Math.max(t.length,e.length),f=0;p>f;f++)if(e[f]&&":"===e[f].charAt(0)){var d=e[f].replace(/(^\:|[+*?]+$)/g,""),h=(e[f].match(/[+*?]+$/)||x)[0]||"",v=~h.indexOf("+"),m=~h.indexOf("*"),y=t[f]||"";if(!y&&!m&&(0>h.indexOf("?")||v)){o=!1;break}if(a[d]=decodeURIComponent(y),v||m){a[d]=t.slice(f).map(decodeURIComponent).join("/");break}}else if(e[f]!==t[f]){o=!1;break}return(!0===n.default||!1!==o)&&a}function i(t,e){return e.rank>t.rank?1:t.rank>e.rank?-1:t.index-e.index}function a(t,e){return t.index=e,t.rank=s(t),t.attributes}function u(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function l(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}function c(t){return u(t).map(l).join("")}function s(t){return t.attributes.default?0:c(t.attributes.path)}function p(t){return null!=t.__preactattr_||"undefined"!=typeof Symbol&&null!=t[Symbol.for("preactattr")]}function f(t,e){void 0===e&&(e="push"),k&&k[e]?k[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}function d(){var t;return t=k&&k.location?k.location:k&&k.getCurrentLocation?k.getCurrentLocation():"undefined"!=typeof location?location:N,""+(t.pathname||"")+(t.search||"")}function h(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),v(t)&&f(t,e?"replace":"push"),m(t)}function v(t){for(var e=O.length;e--;)if(O[e].canRoute(t))return!0;return!1}function m(t){for(var e=!1,n=0;O.length>n;n++)!0===O[n].routeTo(t)&&(e=!0);for(var o=U.length;o--;)U[o](t);return e}function y(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return h(e)}}function _(t){if(0==t.button)return y(t.currentTarget||t.target||this),b(t)}function b(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function g(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===(e.nodeName+"").toUpperCase()&&e.getAttribute("href")&&p(e)){if(e.hasAttribute("native"))return;if(y(e))return b(t)}}while(e=e.parentNode)}}function w(){j||("function"==typeof addEventListener&&(k||addEventListener("popstate",function(){m(d())}),addEventListener("click",g)),j=!0)}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"subscribers",function(){return U}),n.d(e,"getCurrentUrl",function(){return d}),n.d(e,"route",function(){return h}),n.d(e,"Router",function(){return M}),n.d(e,"Route",function(){return S}),n.d(e,"Link",function(){return P});var C=n(0),x={},k=null,O=[],U=[],N={},j=!1,M=function(t){function e(e){t.call(this,e),e.history&&(k=e.history),this.state={url:e.url||d()},w()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){return this.getMatchingChildren(this.props.children,t,!1).length>0},e.prototype.routeTo=function(t){return this._didRoute=!1,this.setState({url:t}),this.updating?this.canRoute(t):(this.forceUpdate(),this._didRoute)},e.prototype.componentWillMount=function(){O.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;k&&(this.unlisten=k.listen(function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))})),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),O.splice(O.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(a).sort(i).map(function(t){var i=r(e,t.attributes.path,t.attributes);if(i){if(!1!==n){var a={url:e,matches:i};return o(a,i),delete a.ref,delete a.key,Object(C.cloneElement)(t,a)}return t}}).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,o=t.onChange,r=e.url,i=this.getMatchingChildren(n,r,!0),a=i[0]||null;this._didRoute=!!a;var u=this.previousUrl;return r!==u&&(this.previousUrl=r,"function"==typeof o&&o({router:this,url:r,previous:u,active:i,current:a})),a},e}(C.Component),P=function(t){return Object(C.h)("a",o({onClick:_},t))},S=function(t){return Object(C.h)(t.component,t)};M.subscribers=U,M.getCurrentUrl=d,M.route=h,M.Router=M,M.Route=S,M.Link=P,e.default=M},function(t,e,n){"use strict";function o(){var t=n(4).default;i=(0,r.render)((0,r.h)(t,null),document.body,i)}var r=n(0);n(3);var i=void 0;n(13),o()},function(){},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0,e.default=void 0;var u=n(0),l=n(1),c=n(5),s=o(c),p=n(7),f=o(p),d=n(9),h=o(d),v=n(11),m=o(v);e.default=function(t){function e(){var n,o,a;r(this,e);for(var u=arguments.length,l=Array(u),c=0;u>c;c++)l[c]=arguments[c];return n=o=i(this,t.call.apply(t,[this].concat(l))),o.handleRoute=function(t){o.currentUrl=t.url},a=n,i(o,a)}return a(e,t),e.prototype.render=function(){return(0,u.h)("div",{id:"app"},(0,u.h)(s.default,null),(0,u.h)(l.Router,{onChange:this.handleRoute},(0,u.h)(f.default,{path:"/"}),(0,u.h)(m.default,{path:"/multiply/"}),(0,u.h)(h.default,{path:"/profile/",user:"me"}),(0,u.h)(h.default,{path:"/profile/:user"})))},e}(u.Component)},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0,e.default=void 0;var a=n(0),u=n(1),l=n(6),c=function(t){return t&&t.__esModule?t:{default:t}}(l);e.default=function(t){function e(){return o(this,e),r(this,t.apply(this,arguments))}return i(e,t),e.prototype.render=function(){return(0,a.h)("header",{class:c.default.header},(0,a.h)("h1",null,"Preact App"),(0,a.h)("nav",null,(0,a.h)(u.Link,{href:"/"},"Home"),(0,a.h)(u.Link,{href:"/multiply/"},"Multiply"),(0,a.h)(u.Link,{href:"/profile"},"Me"),(0,a.h)(u.Link,{href:"/profile/john"},"John")))},e}(a.Component)},function(t){t.exports={header:"_3fP58XuPgCmDWOEWzAZZKf"}},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0,e.default=void 0;var a=n(0),u=n(8),l=function(t){return t&&t.__esModule?t:{default:t}}(u);e.default=function(t){function e(){return o(this,e),r(this,t.apply(this,arguments))}return i(e,t),e.prototype.render=function(){return(0,a.h)("div",{class:l.default.home},(0,a.h)("h1",null,"Home"),(0,a.h)("p",null,"This is the Home component."))},e}(a.Component)},function(t){t.exports={home:"_2xyY27-hSytDZNDhO4G8vI"}},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0,e.default=void 0;var a=n(0),u=n(10),l=function(t){return t&&t.__esModule?t:{default:t}}(u);e.default=function(t){function e(){var n,i,a;o(this,e);for(var u=arguments.length,l=Array(u),c=0;u>c;c++)l[c]=arguments[c];return n=i=r(this,t.call.apply(t,[this].concat(l))),i.state={count:0},i.updateTime=function(){var t=(new Date).toLocaleString();i.setState({time:t})},a=n,r(i,a)}return i(e,t),e.prototype.componentDidMount=function(){this.timer=setInterval(this.updateTime,1e3),this.updateTime(),this.setState({count:this.state.count+1})},e.prototype.componentWillUnmount=function(){clearInterval(this.timer)},e.prototype.render=function(t,e){var n=t.user,o=e.time,r=e.count;return(0,a.h)("div",{class:l.default.profile},(0,a.h)("h1",null,"Profile: ",n),(0,a.h)("p",null,"This is the user profile for a user named ",n,"."),(0,a.h)("div",null,"Current time: ",o),(0,a.h)("div",null,"Profile route mounted ",r," times."))},e}(a.Component)},function(t){t.exports={profile:"JmD9RgpseyQdqQb9x-LXt"}},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0,e.default=void 0;var a=n(0),u=n(12),l=function(t){return t&&t.__esModule?t:{default:t}}(u);e.default=function(t){function e(n){o(this,e);var i=r(this,t.call(this,n));return i.updateTime=function(){var t=(new Date).toLocaleString();i.setState({time:t})},i.handleChange=function(t){var e,n=t.target,o="checkbox"===n.type?n.checked:parseInt(n.value),r=n.name;i.setState((e={},e[r]=isNaN(o)?1:o,e)),i.setState({product:i.state.value1*i.state.value2})},i.state={count:0,value1:1,value2:1,product:1},i}return i(e,t),e.prototype.componentDidMount=function(){this.timer=setInterval(this.updateTime,1e3),this.updateTime(),this.setState({count:this.state.count+1})},e.prototype.componentWillUnmount=function(){clearInterval(this.timer)},e.prototype.render=function(t,e){var n=e.product;return(0,a.h)("div",{class:l.default.profile},(0,a.h)("h1",null,"Multiplier"),(0,a.h)("p",null,"This is a form that multiplies two values and arrives at a product."),(0,a.h)("div",{class:l.default.equation},(0,a.h)("span",null,(0,a.h)("input",{name:"value1",type:"text",value:this.state.value1,onKeyUp:this.handleChange}))," x",(0,a.h)("span",null,(0,a.h)("input",{name:"value2",type:"text",value:this.state.value2,onKeyUp:this.handleChange}))," =",(0,a.h)("span",null,n)))},e}(a.Component)},function(t){t.exports={profile:"zlpyyat-Dspe8eByERnF3",equation:"_3Ar7aERu28z5uvxQyLIc3c"}},function(t,e,n){"use strict";var o=n(14),r=function(t){return t&&t.__esModule?t:{default:t}}(o);r.default.install({onUpdateReady:function(){r.default.applyUpdate()},onUpdated:function(){location.reload()}})},function(t,e){function n(){return"serviceWorker"in navigator&&(window.fetch||"imageRendering"in document.documentElement.style)&&("https:"===window.location.protocol||"localhost"===window.location.hostname||0===window.location.hostname.indexOf("127."))}function o(t){if(t||(t={}),n()){var e=navigator.serviceWorker.register("/sw.js"),o=function(t){function e(){switch(a.state){case"redundant":r("onUpdateFailed"),a.onstatechange=null;break;case"installing":o||r("onUpdating");break;case"installed":i||r("onUpdateReady");break;case"activated":r("onUpdated"),a.onstatechange=null}}function n(){switch(a.state){case"redundant":a.onstatechange=null;break;case"installing":case"installed":break;case"activated":r("onInstalled"),a.onstatechange=null}}var o,i,a=t.installing||t.waiting;if(a&&!a.onstatechange){var u;t.active?(e(),u=e):(n(),u=n),o=!0,t.waiting&&(i=!0),a.onstatechange=u}},r=function(e){"function"==typeof t[e]&&t[e]({source:"ServiceWorker"})};return void e.then(function(t){t&&(o(t),t.onupdatefound=function(){o(t)})}).catch(function(t){return r("onError"),Promise.reject(t)})}}function r(t,e){if(n())return void navigator.serviceWorker.getRegistration().then(function(n){if(!n||!n.waiting)return void(e&&e());n.waiting.postMessage({action:"skipWaiting"}),t&&t()})}function i(){n()&&navigator.serviceWorker.getRegistration().then(function(t){if(t)return t.update()})}e.install=o,e.applyUpdate=r,e.update=i}]);