(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[955,1496],{20550:function(e,n,t){"use strict";t.d(n,{Z:function(){return g}});var o=t(4942),r=t(87462),i=t(97685),c=t(97937),a=t(94184),u=t.n(a),l=t(98423),s=t(67294),f=t(53124),d=t(98787),v=t(68349),p=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>n.indexOf(o)&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>n.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]]);return t},y=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>n.indexOf(o)&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>n.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]]);return t},m=RegExp("^(".concat(d.Y.join("|"),")(-inverse)?$")),h=RegExp("^(".concat(d.E.join("|"),")$")),b=s.forwardRef(function(e,n){var t,a=e.prefixCls,d=e.className,p=e.style,b=e.children,g=e.icon,k=e.color,w=e.onClose,C=e.closeIcon,E=e.closable,x=y(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),O=s.useContext(f.E_),j=O.getPrefixCls,L=O.direction,P=s.useState(!0),A=(0,i.Z)(P,2),Z=A[0],N=A[1];s.useEffect(function(){"visible"in x&&N(x.visible)},[x.visible]);var _=function(){return!!k&&(m.test(k)||h.test(k))},S=(0,r.Z)({backgroundColor:k&&!_()?k:void 0},p),T=_(),R=j("tag",a),I=u()(R,(t={},(0,o.Z)(t,"".concat(R,"-").concat(k),T),(0,o.Z)(t,"".concat(R,"-has-color"),k&&!T),(0,o.Z)(t,"".concat(R,"-hidden"),!Z),(0,o.Z)(t,"".concat(R,"-rtl"),"rtl"===L),t),d),K=function(e){e.stopPropagation(),null==w||w(e),!e.defaultPrevented&&("visible"in x||N(!1))},M="onClick"in x||b&&"a"===b.type,D=(0,l.Z)(x,["visible"]),H=g||null,J=H?s.createElement(s.Fragment,null,H,s.createElement("span",null,b)):b,B=s.createElement("span",(0,r.Z)({},D,{ref:n,className:I,style:S}),J,void 0!==E&&E?C?s.createElement("span",{className:"".concat(R,"-close-icon"),onClick:K},C):s.createElement(c.Z,{className:"".concat(R,"-close-icon"),onClick:K}):null);return M?s.createElement(v.Z,null,B):B});b.CheckableTag=function(e){var n,t=e.prefixCls,i=e.className,c=e.checked,a=e.onChange,l=e.onClick,d=p(e,["prefixCls","className","checked","onChange","onClick"]),v=(0,s.useContext(f.E_).getPrefixCls)("tag",t),y=u()(v,(n={},(0,o.Z)(n,"".concat(v,"-checkable"),!0),(0,o.Z)(n,"".concat(v,"-checkable-checked"),c),n),i);return s.createElement("span",(0,r.Z)({},d,{className:y,onClick:function(e){null==a||a(!c),null==l||l(e)}}))};var g=b},23279:function(e,n,t){var o=t(13218),r=t(7771),i=t(14841),c=Math.max,a=Math.min;e.exports=function(e,n,t){var u,l,s,f,d,v,p=0,y=!1,m=!1,h=!0;if("function"!=typeof e)throw TypeError("Expected a function");function b(n){var t=u,o=l;return u=l=void 0,p=n,f=e.apply(o,t)}function g(e){var t=e-v,o=e-p;return void 0===v||t>=n||t<0||m&&o>=s}function k(){var e,t,o,i=r();if(g(i))return w(i);d=setTimeout(k,(e=i-v,t=i-p,o=n-e,m?a(o,s-t):o))}function w(e){return(d=void 0,h&&u)?b(e):(u=l=void 0,f)}function C(){var e,t=r(),o=g(t);if(u=arguments,l=this,v=t,o){if(void 0===d)return p=e=v,d=setTimeout(k,n),y?b(e):f;if(m)return clearTimeout(d),d=setTimeout(k,n),b(v)}return void 0===d&&(d=setTimeout(k,n)),f}return n=i(n)||0,o(t)&&(y=!!t.leading,s=(m="maxWait"in t)?c(i(t.maxWait)||0,n):s,h="trailing"in t?!!t.trailing:h),C.cancel=function(){void 0!==d&&clearTimeout(d),p=0,u=v=l=d=void 0},C.flush=function(){return void 0===d?f:w(r())},C}},7771:function(e,n,t){var o=t(55639);e.exports=function(){return o.Date.now()}},30672:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/embed/chat/readwrite",function(){return t(34986)}])},34986:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var o=t(85893),r=t(4480),i=t(94977),c=t(77466),a=t(37527);function u(){let e=(0,r.sJ)(c.db),n=(0,r.sJ)(c.pH),t=(0,r.sJ)(c.g1),{name:u,chatDisabled:l}=t;if(!e)return null;let{id:s,displayName:f,isModerator:d}=e;return(0,o.jsxs)("div",{children:[(0,o.jsx)(c.me,{}),(0,o.jsx)(a.Z,{name:u,chatAvailable:!0,chatDisabled:l}),(0,o.jsx)(i.ChatContainer,{messages:n,usernameToHighlight:f,chatUserId:s,isModerator:d,showInput:!0,height:"80vh"})]})}},46977:function(e,n,t){"use strict";t.d(n,{y1:function(){return k}});var o=t(67294);function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}t(85893);var i=["shift","alt","meta","mod"],c={esc:"escape",return:"enter",".":"period",",":"comma","-":"slash"," ":"space","#":"backslash","+":"bracketright",ShiftLeft:"shift",ShiftRight:"shift",AltLeft:"alt",AltRight:"alt",MetaLeft:"meta",MetaRight:"meta",ControlLeft:"ctrl",ControlRight:"ctrl"};function a(e){return(c[e]||e).trim().toLowerCase().replace("key","").replace("digit","").replace("numpad","").replace("arrow","")}function u(e,n){return(void 0===n&&(n=","),"string"==typeof e)?e.split(n):e}function l(e,n){void 0===n&&(n="+");var t=e.toLocaleLowerCase().split(n).map(function(e){return a(e)});return r({},{alt:t.includes("alt"),shift:t.includes("shift"),meta:t.includes("meta"),mod:t.includes("mod")},{keys:t.filter(function(e){return!i.includes(e)})})}var s=new Set;function f(e,n){return void 0===n&&(n=","),(Array.isArray(e)?e:e.split(n)).every(function(e){return s.has(e.trim().toLowerCase())})}function d(e){var n=Array.isArray(e)?e:[e];s.has("meta")&&s.forEach(function(e){return!i.includes(e)&&s.delete(e.toLowerCase())}),n.forEach(function(e){return s.add(e.toLowerCase())})}function v(e){var n=Array.isArray(e)?e:[e];"meta"===e?s.clear():n.forEach(function(e){return s.delete(e.toLowerCase())})}function p(e,n){var t=e.target;void 0===n&&(n=!1);var o=t&&t.tagName;return n instanceof Array?Boolean(o&&n&&n.some(function(e){return e.toLowerCase()===o.toLowerCase()})):Boolean(o&&n&&!0===n)}"undefined"!=typeof document&&(document.addEventListener("keydown",function(e){void 0!==e.key&&d([a(e.key),a(e.code)])}),document.addEventListener("keyup",function(e){void 0!==e.key&&v([a(e.key),a(e.code)])})),"undefined"!=typeof window&&window.addEventListener("blur",function(){s.clear()});var y=function(e,n,t){void 0===t&&(t=!1);var o=n.alt,r=n.meta,i=n.mod,c=n.shift,u=n.keys,l=e.key,s=e.code,d=f("alt"),v=f("shift"),p=f("meta"),y=f("ctrl"),m=a(s),h=l.toLowerCase();if(!t){if(d!==o&&"alt"!==h||v!==c&&"shift"!==h)return!1;if(i){if(!p&&!y)return!1}else if(p!==r&&y!==r&&"meta"!==m&&"ctrl"!==m)return!1}return!!(u&&1===u.length&&(u.includes(h)||u.includes(m)))||(u?f(u):!u)},m=(0,o.createContext)(void 0),h=(0,o.createContext)({hotkeys:[],enabledScopes:[],toggleScope:function(){},enableScope:function(){},disableScope:function(){}}),b=function(e){e.stopPropagation(),e.preventDefault(),e.stopImmediatePropagation()},g="undefined"!=typeof window?o.useLayoutEffect:o.useEffect;function k(e,n,t,r){var i,c=(0,o.useRef)(null),s=(0,o.useRef)(!1),f=t instanceof Array?r instanceof Array?void 0:r:t,k=(0,o.useCallback)(n,[].concat(t instanceof Array?t:r instanceof Array?r:[])),w=(!function e(n,t){return n&&t&&"object"==typeof n&&"object"==typeof t?Object.keys(n).length===Object.keys(t).length&&Object.keys(n).reduce(function(o,r){return o&&e(n[r],t[r])},!0):n===t}((i=(0,o.useRef)(void 0)).current,f)&&(i.current=f),i.current),C=(0,o.useContext)(h).enabledScopes,E=(0,o.useContext)(m);return g(function(){if((null==w?void 0:w.enabled)!==!1&&(n=C,t=null==w?void 0:w.scopes,0===n.length&&t?(console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'),!0):!!(!t||n.some(function(e){return t.includes(e)})||n.includes("*")))){var n,t,o=function(n,t){var o;if(void 0===t&&(t=!1),!p(n,["input","textarea","select"])||p(n,null==w?void 0:w.enableOnFormTags)){if(null!==c.current&&document.activeElement!==c.current&&!c.current.contains(document.activeElement)){b(n);return}(null==(o=n.target)||!o.isContentEditable||null!=w&&w.enableOnContentEditable)&&u(e,null==w?void 0:w.splitKey).forEach(function(e){var o,r,i,c=l(e,null==w?void 0:w.combinationKey);if((y(n,c,null==w?void 0:w.ignoreModifiers)||null!=(i=c.keys)&&i.includes("*"))&&!s.current){if(("function"==typeof(o=null==w?void 0:w.preventDefault)&&o(n,c)||!0===o)&&n.preventDefault(),"function"==typeof(r=null==w?void 0:w.enabled)?!r(n,c):!0!==r&&void 0!==r){b(n);return}k(n,c),t||(s.current=!0)}})}},r=function(e){void 0!==e.key&&(d(a(e.code)),((null==w?void 0:w.keydown)===void 0&&(null==w?void 0:w.keyup)!==!0||null!=w&&w.keydown)&&o(e))},i=function(e){void 0!==e.key&&(v(a(e.code)),s.current=!1,null!=w&&w.keyup&&o(e,!0))};return(c.current||(null==f?void 0:f.document)||document).addEventListener("keyup",i),(c.current||(null==f?void 0:f.document)||document).addEventListener("keydown",r),E&&u(e,null==w?void 0:w.splitKey).forEach(function(e){return E.addHotkey(l(e,null==w?void 0:w.combinationKey))}),function(){(c.current||(null==f?void 0:f.document)||document).removeEventListener("keyup",i),(c.current||(null==f?void 0:f.document)||document).removeEventListener("keydown",r),E&&u(e,null==w?void 0:w.splitKey).forEach(function(e){return E.removeHotkey(l(e,null==w?void 0:w.combinationKey))})}}},[e,k,w,C]),c}}},function(e){e.O(0,[1272,8700,1407,611,1577,3763,5212,4759,3903,6395,411,8006,7466,4977,7527,9774,2888,179],function(){return e(e.s=30672)}),_N_E=e.O()}]);
//# sourceMappingURL=readwrite-b43cf98d358c762c.js.map