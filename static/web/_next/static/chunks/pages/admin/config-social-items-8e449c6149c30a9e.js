(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[30],{27561:function(e,t,n){var a=n(67990),l=/^\s+/;e.exports=function(e){return e?e.slice(0,a(e)+1).replace(l,""):e}},67990:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},23279:function(e,t,n){var a=n(13218),l=n(7771),i=n(14841),r=Math.max,s=Math.min;e.exports=function(e,t,n){var o,c,u,d,f,m,p=0,h=!1,v=!1,x=!0;if("function"!=typeof e)throw TypeError("Expected a function");function j(t){var n=o,a=c;return o=c=void 0,p=t,d=e.apply(a,n)}function N(e){var n=e-m,a=e-p;return void 0===m||n>=t||n<0||v&&a>=u}function b(){var e,n,a,i=l();if(N(i))return y(i);f=setTimeout(b,(e=i-m,n=i-p,a=t-e,v?s(a,u-n):a))}function y(e){return(f=void 0,x&&o)?j(e):(o=c=void 0,d)}function g(){var e,n=l(),a=N(n);if(o=arguments,c=this,m=n,a){if(void 0===f)return p=e=m,f=setTimeout(b,t),h?j(e):d;if(v)return clearTimeout(f),f=setTimeout(b,t),j(m)}return void 0===f&&(f=setTimeout(b,t)),d}return t=i(t)||0,a(n)&&(h=!!n.leading,u=(v="maxWait"in n)?r(i(n.maxWait)||0,t):u,x="trailing"in n?!!n.trailing:x),g.cancel=function(){void 0!==f&&clearTimeout(f),p=0,o=m=c=f=void 0},g.flush=function(){return void 0===f?d:y(l())},g}},13218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},7771:function(e,t,n){var a=n(55639);e.exports=function(){return a.Date.now()}},14841:function(e,t,n){var a=n(27561),l=n(13218),i=n(33448),r=0/0,s=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return r;if(l(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=l(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=a(e);var n=o.test(e);return n||c.test(e)?u(e.slice(2),n?2:8):s.test(e)?r:+e}},81009:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/config-social-items",function(){return n(35688)}])},31512:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var a=n(85893),l=n(67294),i=n(23657),r=n(56469),s=n(20133),o=n(27043),c=n(77786),u=n(5152),d=n.n(u),f=n(87528),m=n(70869);let p=e=>{let{iconList:t,selectedOption:n,onSelected:l}=e,i=""===n?null:n;return(0,a.jsxs)("div",{className:"social-dropdown-container",children:[(0,a.jsx)("p",{className:"description",children:"If you are looking for a platform name not on this list, please select Other and type in your own name. A logo will not be provided."}),(0,a.jsxs)("div",{className:"formfield-container",children:[(0,a.jsx)("div",{className:"label-side",children:(0,a.jsx)("span",{className:"formfield-label",children:"Social Platform"})}),(0,a.jsx)("div",{className:"input-side",children:(0,a.jsxs)(f.default,{style:{width:240},className:"social-dropdown",placeholder:"Social platform...",defaultValue:i,value:i,onSelect:e=>{l&&l(e)},children:[t.map(e=>{let{platform:t,icon:n,key:l}=e;return(0,a.jsxs)(f.default.Option,{className:"social-option",value:l,children:[(0,a.jsx)("span",{className:"option-icon",children:(0,a.jsx)("img",{src:n,alt:"",className:"option-icon"})}),(0,a.jsx)("span",{className:"option-label",children:t})]},"platform-".concat(l))}),(0,a.jsx)(f.default.Option,{className:"social-option",value:m.z_,children:"Other..."},"platform-".concat(m.z_))]})})]})]})};var h=n(11992),v=n(4481),x=n(11),j=n(25510),N=n(28700),b=n(17586);let{Title:y}=i.default,g=d()(()=>Promise.all([n.e(3247),n.e(9036)]).then(n.t.bind(n,9036,23)),{loadableGenerated:{webpack:()=>[9036]},ssr:!1}),w=d()(()=>Promise.all([n.e(3247),n.e(3061)]).then(n.t.bind(n,93061,23)),{loadableGenerated:{webpack:()=>[93061]},ssr:!1}),E=d()(()=>Promise.all([n.e(3247),n.e(1506)]).then(n.t.bind(n,81506,23)),{loadableGenerated:{webpack:()=>[81506]},ssr:!1});function Z(){var e,t;let[n,i]=(0,l.useState)([]),[u,d]=(0,l.useState)([]),[f,Z]=(0,l.useState)(!1),[k,S]=(0,l.useState)(!1),[C,O]=(0,l.useState)(!1),[_,P]=(0,l.useState)(-1),[T,z]=(0,l.useState)(m.wC),[I,D]=(0,l.useState)(null),{serverConfig:$,setFieldInConfigState:H}=(0,l.useContext)(v.a)||{},{instanceDetails:L}=$,{socialHandles:M}=L,A=async()=>{try{let e=await (0,h.rQ)(h.$i,{auth:!1}),t=Object.keys(e).map(t=>({key:t,...e[t]}));i(t)}catch(e){console.log(e)}},Q=e=>n.find(t=>t.key===e)||!1,G=""!==T.platform&&!n.find(e=>e.key===T.platform);(0,l.useEffect)(()=>{A()},[]),(0,l.useEffect)(()=>{L.socialHandles&&d(M)},[L]);let R=()=>{D(null),clearTimeout(null)},U=()=>{Z(!1),P(-1),S(!1),O(!1),z({...m.wC})},V=()=>{U()},K=(e,t)=>{z({...T,[e]:t})},W=async e=>{await (0,m.Si)({apiPath:m.c9,data:{value:e},onSuccess:()=>{H({fieldName:"socialHandles",value:e,path:"instanceDetails"}),O(!1),V(),D((0,N.kg)(N.zv)),setTimeout(R,m.sI)},onError:e=>{D((0,N.kg)(N.Un,"There was an error: ".concat(e))),O(!1),setTimeout(R,m.sI)}})},X=e=>{let t=[...u];t.splice(e,1),W(t)},Y=e=>{if(e<=0||e>=u.length)return;let t=[...u],n=t[e-1];t[e-1]=t[e],t[e]=n,W(t)},B=e=>{if(e<0||e>=u.length-1)return;let t=[...u],n=t[e+1];t[e+1]=t[e],t[e]=n,W(t)},F=[{title:"Social Link",dataIndex:"",key:"combo",render:(e,t)=>{let{platform:n,url:l}=t,i=Q(n);if(!i)return(0,a.jsx)("div",{className:"social-handle-cell",children:(0,a.jsxs)("p",{className:"option-label",children:[(0,a.jsx)("strong",{children:n}),(0,a.jsx)("span",{className:"handle-url",title:l,children:l})]})});let{icon:r,platform:s}=i;return(0,a.jsxs)("div",{className:"social-handle-cell",children:[(0,a.jsx)("span",{className:"option-icon",children:(0,a.jsx)("img",{src:r,alt:"",className:"option-icon"})}),(0,a.jsxs)("p",{className:"option-label",children:[(0,a.jsx)("strong",{children:s}),(0,a.jsx)("span",{className:"handle-url",title:l,children:l})]})]})}},{title:"",dataIndex:"",key:"edit",render:(e,t,n)=>(0,a.jsxs)("div",{className:"actions",children:[(0,a.jsx)(r.Z,{size:"small",onClick:()=>{let e=u[n];P(n),z({...e}),Z(!0),Q(e.platform)||S(!0)},children:"Edit"}),(0,a.jsx)(r.Z,{icon:(0,a.jsx)(w,{}),size:"small",hidden:0===n,onClick:()=>Y(n)}),(0,a.jsx)(r.Z,{icon:(0,a.jsx)(g,{}),size:"small",hidden:n===u.length-1,onClick:()=>B(n)}),(0,a.jsx)(r.Z,{className:"delete-button",icon:(0,a.jsx)(E,{}),size:"small",onClick:()=>X(n)})]})}],q={disabled:(e=T.url,!(""!==(t=T.platform)&&("xmpp"===t?(0,x.Kf)(e,"xmpp"):(0,x.jv)(e))))},J=(0,a.jsxs)("div",{className:"other-field-container formfield-container",children:[(0,a.jsx)("div",{className:"label-side"}),(0,a.jsx)("div",{className:"input-side",children:(0,a.jsx)(s.default,{placeholder:"Other platform name",defaultValue:T.platform,onChange:e=>{let{value:t}=e.target;K("platform",t)}})})]});return(0,a.jsxs)("div",{className:"social-links-edit-container",children:[(0,a.jsx)(y,{level:3,className:"section-title",children:"Your Social Handles"}),(0,a.jsx)("p",{className:"description",children:"Add all your social media handles and links to your other profiles here."}),(0,a.jsx)(b.E,{status:I}),(0,a.jsx)(o.Z,{className:"social-handles-table",pagination:!1,size:"small",rowKey:e=>"".concat(e.platform,"-").concat(e.url),columns:F,dataSource:u}),(0,a.jsx)(c.default,{title:"Edit Social Handle",open:f,onOk:()=>{O(!0);let e=u.length?[...u]:[];-1===_?e.push(T):e.splice(_,1,T),W(e)},onCancel:V,confirmLoading:C,okButtonProps:q,children:(0,a.jsxs)("div",{className:"social-handle-modal-content",children:[(0,a.jsx)(p,{iconList:n,selectedOption:G?m.z_:T.platform,onSelected:e=>{e===m.z_?(S(!0),K("platform","")):(S(!1),K("platform",e))}}),k&&J,(0,a.jsx)("br",{}),(0,a.jsx)(j.nv,{fieldName:"social-url",label:"URL",placeholder:{mastodon:"https://mastodon.social/@username",twitter:"https://twitter.com/username"}[T.platform]||"Url to page",value:T.url,onChange:e=>{let{value:t}=e;K("url",t)},useTrim:!0,type:"url",pattern:x.ax}),(0,a.jsx)(b.E,{status:I})]})}),(0,a.jsx)("br",{}),(0,a.jsx)(r.Z,{type:"primary",onClick:()=>{U(),Z(!0)},children:"Add a new social link"})]})}},64773:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(97685),l=n(67294);function i(){var e=l.useReducer(function(e){return e+1},0);return(0,a.Z)(e,2)[1]}},23061:function(e,t,n){"use strict";var a=n(67294),l=n(64773),i=n(98947);t.Z=function(){var e=!(arguments.length>0)||void 0===arguments[0]||arguments[0],t=(0,a.useRef)({}),n=(0,l.Z)();return(0,a.useEffect)(function(){var a=i.ZP.subscribe(function(a){t.current=a,e&&n()});return function(){return i.ZP.unsubscribe(a)}},[]),t.current}},65765:function(e,t,n){"use strict";var a=n(61185),l=n(59408),i=a.ZP;i.Header=a.h4,i.Footer=a.$_,i.Content=a.VY,i.Sider=l.Z,i._InternalSiderContext=l.D,t.default=i},93879:function(e,t,n){"use strict";var a=n(87462),l=n(4942),i=n(97685),r=n(93967),s=n.n(r),o=n(23279),c=n.n(o),u=n(97485),d=n(67294),f=n(17399),m=n(84476),p=n(3227),h=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)0>t.indexOf(a[l])&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]]);return n};(0,p.b)("small","default","large");var v=null,x=function(e){var t=e.spinPrefixCls,n=e.spinning,r=void 0===n||n,o=e.delay,p=e.className,x=e.size,j=void 0===x?"default":x,N=e.tip,b=e.wrapperClassName,y=e.style,g=e.children,w=h(e,["spinPrefixCls","spinning","delay","className","size","tip","wrapperClassName","style","children"]),E=d.useState(function(){return r&&(!r||!o||!!isNaN(Number(o)))}),Z=(0,i.Z)(E,2),k=Z[0],S=Z[1];return d.useEffect(function(){var e=c()(function(){S(r)},o);return e(),function(){var t;null===(t=null==e?void 0:e.cancel)||void 0===t||t.call(e)}},[o,r]),d.createElement(f.C,null,function(n){var i,r,o=n.direction,c=s()(t,(0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)({},"".concat(t,"-sm"),"small"===j),"".concat(t,"-lg"),"large"===j),"".concat(t,"-spinning"),k),"".concat(t,"-show-text"),!!N),"".concat(t,"-rtl"),"rtl"===o),p),f=(0,u.Z)(w,["indicator","prefixCls"]),h=d.createElement("div",(0,a.Z)({},f,{style:y,className:c,"aria-live":"polite","aria-busy":k}),(i=e.indicator,r="".concat(t,"-dot"),null===i?null:(0,m.l$)(i)?(0,m.Tm)(i,{className:s()(i.props.className,r)}):(0,m.l$)(v)?(0,m.Tm)(v,{className:s()(v.props.className,r)}):d.createElement("span",{className:s()(r,"".concat(t,"-dot-spin"))},d.createElement("i",{className:"".concat(t,"-dot-item")}),d.createElement("i",{className:"".concat(t,"-dot-item")}),d.createElement("i",{className:"".concat(t,"-dot-item")}),d.createElement("i",{className:"".concat(t,"-dot-item")}))),N?d.createElement("div",{className:"".concat(t,"-text")},N):null);if(void 0!==g){var x=s()("".concat(t,"-container"),(0,l.Z)({},"".concat(t,"-blur"),k));return d.createElement("div",(0,a.Z)({},f,{className:s()("".concat(t,"-nested-loading"),b)}),k&&d.createElement("div",{key:"loading"},h),d.createElement("div",{className:x,key:"container"},g))}return h})},j=function(e){var t=e.prefixCls,n=(0,d.useContext(f.E_).getPrefixCls)("spin",t),l=(0,a.Z)((0,a.Z)({},e),{spinPrefixCls:n});return d.createElement(x,(0,a.Z)({},l))};j.setDefaultIndicator=function(e){v=e},t.Z=j},35688:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var a=n(85893);n(67294);var l=n(23657),i=n(31512),r=n(25889);let{Title:s}=l.default;function o(){return(0,a.jsxs)("div",{className:"config-social-items",children:[(0,a.jsx)(s,{children:"Social Items"}),(0,a.jsx)(i.Z,{})]})}o.getLayout=function(e){return(0,a.jsx)(r.l,{page:e})}},11163:function(e,t,n){e.exports=n(43079)},1554:function(e,t,n){"use strict";function a(e){return t=>{let n=(e?Math[e]:Math.trunc)(t);return 0===n?0:n}}n.d(t,{u:function(){return a}})},58005:function(e,t,n){"use strict";n.d(t,{_:function(){return l}});var a=n(63923);function l(e,t){return+(0,a.Q)(e)-+(0,a.Q)(t)}},65476:function(e,t,n){"use strict";n.d(t,{c:function(){return i}});var a=n(1554),l=n(58005);function i(e,t,n){let i=(0,l._)(e,t)/1e3;return(0,a.u)(null==n?void 0:n.roundingMethod)(i)}},63923:function(e,t,n){"use strict";function a(e){let t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new e.constructor(+e):new Date("number"==typeof e||"[object Number]"===t||"string"==typeof e||"[object String]"===t?e:NaN)}n.d(t,{Q:function(){return a}})}},function(e){e.O(0,[83,1287,9796,443,7786,9904,3657,6167,2502,7528,9532,449,7043,5889,2888,9774,179],function(){return e(e.s=81009)}),_N_E=e.O()}]);