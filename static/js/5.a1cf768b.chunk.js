(this["webpackJsonpr34-browser"]=this["webpackJsonpr34-browser"]||[]).push([[5],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var c=n(4),r=(n(0),n(45)),o=n(8),i=n(2),a=n(14),s=n(3);function b(e){const t=Object(i.f)();return Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 12.7 12.7",children:Object(s.jsxs)("g",{transform:"translate(0,-284.3)",children:[Object(s.jsx)("circle",{id:"path18",cx:"6.3499999",cy:"290.65002",fill:"none",stroke:t.colors.accentColor,strokeWidth:"0.50848764",strokeMiterlimit:"4",strokeDasharray:"none",strokeOpacity:"1",r:"6.0957561"}),Object(s.jsx)("text",{fontStyle:"normal",fontWeight:"normal",fontSize:"8.3113203px",fontFamily:"sansSerif",letterSpacing:"0px",wordSpacing:"0px",fill:t.colors.accentColor,fillOpacity:"1",x:"2.1363549",y:"289.02704",id:"text4533",transform:"scale(0.98538224,1.0148346)",children:Object(s.jsx)("tspan",{id:"tspan4531",x:"2",y:"289.1",fontStyle:"normal",fontVariant:"normal",fontWeight:"300",fontStretch:"normal",fontFamily:"Calibri",fill:t.colors.accentColor,fillOpacity:"1",children:"34"})})]})})}var j,l,d,u,O=n(20),h=n(92),f=n(90);const g=i.d.header((({theme:e})=>Object(i.c)(j||(j=Object(c.a)(["\n    ","\n    ","\n  "])),Object(O.g)(),Object(O.h)(e.dimensions.bigSpacing)))),m=i.d.div((({theme:e})=>Object(i.c)(l||(l=Object(c.a)(["\n    ","\n    justify-content: center;\n    background: ",";\n    padding: "," 0;\n    ","\n  "])),Object(O.l)({theme:e}),e.colors.layerBgSolid,e.dimensions.gutter,Object(O.b)({theme:e})))),p=i.d.nav((({theme:e})=>Object(i.c)(d||(d=Object(c.a)(["\n    display: flex;\n    justify-content: center;\n    padding: ",";\n    ","\n  "])),e.dimensions.bigSpacing,Object(O.k)(e.dimensions.hugeSpacing)))),x=Object(i.d)(r.b)((({to:e,current:t,theme:n})=>Object(i.c)(u||(u=Object(c.a)(["\n    color: ",";\n  "])),e===t?n.colors.accentColor:n.colors.backgroundColor2)));function v(){const e=Object(o.f)().pathname;return Object(s.jsxs)(g,{role:"cell",children:[Object(s.jsxs)(m,{children:[Object(s.jsx)(b,{size:32}),Object(s.jsx)(h.b,{}),Object(s.jsxs)(f.a,{children:[Object(s.jsx)("span",{children:"Browse"})," ",Object(s.jsx)("a",{href:"https://rule34.xxx",children:"Rule34"})]})]}),Object(s.jsxs)(p,{role:"cell",children:[Object(s.jsx)(x,{current:e,to:a.g.SEARCH,children:"Search"}),Object(s.jsx)(h.b,{}),Object(s.jsx)(x,{current:e,to:a.g.HELP,children:"Help"}),Object(s.jsx)(h.b,{}),Object(s.jsx)(x,{current:e,to:a.g.SETTINGS,children:"Settings"})]})]})}},101:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var c,r,o,i,a=n(4),s=(n(0),n(2)),b=n(29),j=n(20),l=n(3);const d=s.d.div((e=>Object(s.c)(c||(c=Object(a.a)(["\n    height: 24px;\n    width: 50px;\n    ","\n    border-radius: 30px;\n    background-color: ",";\n    transition: transform "," ease-in-out;\n  "])),Object(j.e)(e),e.theme.colors.backgroundColor,e.theme.timings.longTransitionTime)));const u=s.d.div((e=>Object(s.c)(i||(i=Object(a.a)(["\n    ","\n    background-color: ",";\n    border-radius: 100px;\n    transition: all 0.2s ease-in-out;\n    transform: translate(",");\n  "])),b.a?Object(s.c)(r||(r=Object(a.a)(["\n        height: 100%;\n        aspect-ratio: 1/1;\n      "]))):Object(s.c)(o||(o=Object(a.a)(["\n        height: 100%;\n        width: 22px;\n      "]))),e.value?e.theme.colors.accentColor:e.theme.colors.backgroundColor2,e.value?"26px":"0px")));function O(e){const t=e.value,n=e.onToggle;return Object(l.jsx)(d,{onClick:n,children:Object(l.jsx)(u,{value:t})})}},102:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(0),r=n(24),o=n(7),i=n(9);function a(e){const t=Object(r.b)(),n=Object(r.c)(i.r),a=Object(c.useCallback)((n=>t(Object(o.x)(e,n))),[t,e]);return[n[e],a]}},103:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c,r=n(84),o=n(4),i=n(0),a=n(2),s=n(20),b=n(3);const j=a.d.input((({theme:e})=>Object(a.c)(c||(c=Object(o.a)(["\n    width: 50px;\n    ","\n    background-color: ",";\n    ","\n    text-align: center;\n  "])),Object(s.e)({theme:e}),e.colors.backgroundColor2,Object(s.d)({theme:e}))));function l(e){const t=e.value,n=e.onSubmit,c=Object(i.useState)(t.toString()),o=Object(r.a)(c,2),a=o[0],s=o[1];Object(i.useEffect)((()=>{t&&s(t.toString())}),[t]);const l=Object(i.useCallback)((e=>{s(e.target.value)}),[]),d=Object(i.useCallback)((()=>{n(Number(a))}),[a,n]),u=Object(i.useCallback)((e=>{"Enter"===e.key&&n(Number(a))}),[a,n]);return Object(b.jsx)(j,{type:"number",value:a,onChange:l,onBlur:d,onKeyDown:u})}},125:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Q}));var c,r,o,i=n(84),a=n(4),s=n(0),b=n(2),j=n(29),l=n(14),d=n(28),u=n(102),O=n(91),h=n(20),f=n(98),g=n(92),m=n(3);const p=b.d.div((({theme:e})=>Object(b.c)(c||(c=Object(a.a)(["\n    width: 100px;\n    height: ",";\n  "])),e.dimensions.blockHeight))),x=b.d.select((({theme:e})=>Object(b.c)(r||(r=Object(a.a)(["\n    ","\n    ","\n    width: 100%;\n    height: 100%;\n    background-color: ",";\n  "])),Object(h.e)({theme:e}),Object(h.d)({theme:e}),e.colors.backgroundColor2))),v=b.d.option((({theme:e})=>Object(b.c)(o||(o=Object(a.a)(["\n    ","\n    background-color: ",";\n    ","\n  "])),Object(h.e)({theme:e}),e.colors.backgroundColor2,Object(h.d)({theme:e}))));function w(e){const t=e.options,n=e.value,c=e.onChange;return Object(m.jsx)(p,{children:Object(m.jsx)(x,{value:n,onChange:c,children:Object.entries(t).map((([e,t])=>Object(m.jsx)(v,{value:e,children:t},e)))})})}var y,S,k,C,z=n(90);const T=b.d.div(y||(y=Object(a.a)(["\n  ","\n  grid-template-columns: 1fr auto;\n  grid-template-rows: auto auto;\n"])),h.n),A=Object(b.d)(z.c)((({theme:e})=>Object(b.c)(S||(S=Object(a.a)(["\n    grid-column: 1/2;\n    grid-row: 1/2;\n  "]))))),I=Object(b.d)(z.b)((({theme:e})=>Object(b.c)(k||(k=Object(a.a)(["\n    grid-column: 1/2;\n    grid-row: 2/3;\n  "]))))),E=b.d.div((({theme:e})=>Object(b.c)(C||(C=Object(a.a)(["\n    grid-column: 2/3;\n    grid-row: 1/3;\n  "])))));function N({title:e,description:t,children:n}){return Object(m.jsxs)(T,{children:[Object(m.jsx)(A,{children:e}),Object(m.jsx)(I,{children:t}),Object(m.jsx)(E,{children:n})]})}var L,G,R,B,D,P,U=n(103),V=n(95),_=n(101),H=n(100),F=n(48);const M={[l.f.INFINITE_COLUMN]:"Infinite",[l.f.PAGES]:"Pages"},W=Object(b.d)(V.a)((({theme:e})=>Object(b.c)(L||(L=Object(a.a)(["\n    padding: ",";\n    ",";\n  "])),e.dimensions.hugeSpacing,Object(h.m)(e.dimensions.hugeSpacing)))),J=b.d.div(G||(G=Object(a.a)(["\n  ","\n  flex-grow: 1;\n  justify-content: center;\n  min-height: 50px;\n"])),h.l),Y=Object(b.d)(f.a)(R||(R=Object(a.a)(["\n  flex-grow: 1;\n"]))),Z=b.d.code((({theme:e})=>Object(b.c)(B||(B=Object(a.a)(["\n    ","\n    ","\n    padding: ",";\n    border-radius: ",";\n  "])),Object(h.p)({theme:e}),Object(h.m)(e.dimensions.gutter),e.dimensions.gutter,e.dimensions.borderRadius))),K=b.d.span(D||(D=Object(a.a)(["\n  color: limegreen;\n"]))),$=b.d.span(P||(P=Object(a.a)(["\n  color: red;\n"])));function q(e){return e?Object(m.jsx)(K,{children:"Yes"}):Object(m.jsx)($,{children:"No"})}function Q(){const e=Object(b.f)(),t=Object(u.a)(l.e.RESULTS_LAYOUT),n=Object(i.a)(t,2),c=n[0],r=n[1],o=Object(u.a)(l.e.PAGE_SIZE),a=Object(i.a)(o,2),h=a[0],p=a[1],x=Object(u.a)(l.e.ORIGINALS),v=Object(i.a)(x,2),y=v[0],S=v[1],k=Object(u.a)(l.e.PRELOAD_VIDEOS),C=Object(i.a)(k,2),T=C[0],A=C[1],I=Object(u.a)(l.e.TAG_SUGGESTIONS_COUNT),E=Object(i.a)(I,2),L=E[0],G=E[1],R=Object(s.useCallback)((()=>A(!T)),[T,A]),B=Object(s.useCallback)((()=>S(!y)),[y,S]),D=Object(s.useCallback)((e=>r(e.target.value)),[r]),P=Object(d.c)(),V="unknown"===P?"Latest Release":"Version ".concat(P);return Object(m.jsxs)(f.b,{children:[Object(m.jsx)(H.a,{}),Object(m.jsxs)(Y,{children:[Object(m.jsxs)(W,{children:[Object(m.jsx)(z.d,{children:"General"}),Object(m.jsx)(g.a,{}),Object(m.jsx)(N,{title:"Results Layout",description:"Choose how your results are displayed.",children:Object(m.jsx)(w,{options:M,value:c,onChange:D})}),Object(m.jsx)(N,{title:"Preload Videos",description:"Start loading videos immediately instead of just-in-time. This can improve the viewing experience but will consume a LOT of data. Only use with WIFI.",children:Object(m.jsx)(_.a,{value:T,onToggle:R})}),Object(m.jsx)(N,{title:"Load original sizes",description:"Display images and videos at their original resolution. This will consume more data but provides a nicer experience.",children:Object(m.jsx)(_.a,{value:y,onToggle:B})}),Object(m.jsx)(N,{title:"Number of Tag suggestions",description:"Controls the number of tags displayed when searching. Increase this when searching for niche tags.",children:Object(m.jsx)(U.a,{value:L,onSubmit:G})}),Object(m.jsx)(N,{title:"Page size",description:"Controls the number of posts loaded at once.",children:Object(m.jsx)(U.a,{value:h,onSubmit:p})}),Object(m.jsx)(z.d,{children:"Developer"}),Object(m.jsx)(g.a,{}),Object(m.jsx)(z.c,{children:"Debug Info"}),Object(m.jsxs)(Z,{children:[Object(m.jsxs)("p",{children:["Supports grid-gap: ",q(j.c)]}),Object(m.jsxs)("p",{children:["Supports flex-gap: ",q(j.b)]}),Object(m.jsxs)("p",{children:["Supports aspect-ratio: ",q(j.a)]}),Object(m.jsxs)("p",{children:["Supports object-fit: ",q(j.d)]})]}),Object(m.jsx)(F.a,{})]}),Object(m.jsxs)(J,{children:[Object(m.jsx)(O.f,{color:e.colors.subduedText}),Object(m.jsx)(z.b,{children:V})]})]})]})}},84:function(e,t,n){"use strict";function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,c=new Array(t);n<t;n++)c[n]=e[n];return c}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],c=!0,r=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(c=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);c=!0);}catch(s){r=!0,o=s}finally{try{c||null==a.return||a.return()}finally{if(r)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return r}))},90:function(e,t,n){"use strict";n.d(t,"d",(function(){return j})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return u}));var c,r,o,i,a=n(4),s=n(2),b=n(20);const j=s.d.h2((({theme:e})=>Object(s.c)(c||(c=Object(a.a)(["\n    font-size: ",";\n    font-weight: lighter;\n    text-align: center;\n  "])),e.fontSizes.bigTitle))),l=s.d.h1((({theme:e})=>Object(s.c)(r||(r=Object(a.a)(["\n    ","\n\n    justify-content: center;\n    font-size: ",";\n    font-weight: lighter;\n    text-align: center;\n  "])),Object(b.l)({theme:e}),e.fontSizes.bigTitle))),d=s.d.h3((({theme:e})=>Object(s.c)(o||(o=Object(a.a)(["\n    font-size: ",";\n  "])),e.fontSizes.content))),u=s.d.span((({theme:e})=>Object(s.c)(i||(i=Object(a.a)(["\n    color: ",";\n  "])),e.colors.subduedText)))},91:function(e,t,n){"use strict";n.d(t,"d",(function(){return I})),n.d(t,"b",(function(){return E})),n.d(t,"g",(function(){return N})),n.d(t,"e",(function(){return L})),n.d(t,"i",(function(){return G})),n.d(t,"j",(function(){return R})),n.d(t,"h",(function(){return B})),n.d(t,"p",(function(){return D})),n.d(t,"o",(function(){return P})),n.d(t,"k",(function(){return U})),n.d(t,"l",(function(){return V})),n.d(t,"c",(function(){return _})),n.d(t,"n",(function(){return H})),n.d(t,"m",(function(){return F})),n.d(t,"a",(function(){return M})),n.d(t,"f",(function(){return W}));var c,r,o,i,a,s,b,j,l,d,u,O,h,f,g,m,p,x,v=n(25),w=n(4),y=n(0),S=n(2),k=n(14),C=n(3);const z=S.d.i((e=>Object(S.c)(c||(c=Object(w.a)(["\n    color: ",";\n    min-width: ","px;\n    height: ","px;\n\n    svg {\n      color: ",";\n    }\n  "])),e.color,e.size,e.size,e.color))),T=S.d.svg((e=>Object(S.c)(r||(r=Object(w.a)(["\n    width: ","px;\n    height: ","px;\n  "])),e.size,e.size))),A=e=>{const t=e.icon,n=e.className,c=void 0===n?"":n,r=e.color,o=void 0===r?"black":r,i=e.size,a=void 0===i?14:i,s=e.onClick,b=void 0===s?k.c:s,j=e.prefix,l=void 0===j?"fas":j;return"pixiv"===t?Object(C.jsx)(J,Object(v.a)({},e)):Object(C.jsx)("div",{onClick:b,className:c,children:Object(C.jsx)(z,{className:"".concat(l," ").concat(t),color:o,size:a})})},I=Object(S.d)(A).attrs({icon:"fa-user"})(o||(o=Object(w.a)([""]))),E=Object(S.d)(A).attrs({icon:"fa-pen"})(i||(i=Object(w.a)([""]))),N=Object(S.d)(A).attrs({icon:"fa-copyright"})(a||(a=Object(w.a)([""]))),L=Object(S.d)(A).attrs({icon:"fa-times"})(s||(s=Object(w.a)([""]))),G=Object(S.d)(A).attrs({icon:"fa-expand"})(b||(b=Object(w.a)([""]))),R=Object(S.d)(A).attrs({icon:"fa-external-link-alt"})(j||(j=Object(w.a)([""]))),B=Object(S.d)(A).attrs({icon:"fa-download"})(l||(l=Object(w.a)([""]))),D=Object(S.d)(A).attrs({icon:"fa-hashtag"})(d||(d=Object(w.a)([""]))),P=Object(S.d)(A).attrs({icon:"fa-registered"})(u||(u=Object(w.a)([""]))),U=Object(S.d)(A).attrs({icon:"fa-heart"})(O||(O=Object(w.a)([""]))),V=Object(S.d)(A).attrs({icon:"fa-link"})(h||(h=Object(w.a)([""]))),_=Object(S.d)(A).attrs({prefix:"fab"})(f||(f=Object(w.a)([""]))),H=Object(y.memo)(Object(S.d)(A).attrs({icon:"fa-play"})(g||(g=Object(w.a)([""])))),F=Object(y.memo)(Object(S.d)(A).attrs({icon:"fa-pause"})(m||(m=Object(w.a)([""])))),M=Object(S.d)(A).attrs({icon:"fa-caret-down"})(p||(p=Object(w.a)([""]))),W=Object(S.d)(A).attrs({icon:" fa-code-branch"})(x||(x=Object(w.a)([""]))),J=e=>{const t=e.color,n=void 0===t?"black":t,c=e.size,r=void 0===c?14:c,o=e.onClick,i=void 0===o?k.c:o;return Object(C.jsx)(T,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",size:r,onClick:i,children:Object(C.jsx)("path",{fill:n,d:"M4.935 0A4.924 4.924 0 0 0 0 4.935v14.13A4.924 4.924 0 0 0 4.935 24h14.13A4.924 4.924 0 0 0 24 19.065V4.935A4.924 4.924 0 0 0 19.065 0zm7.81 4.547c2.181 0 4.058.676 5.399 1.847a6.118 6.118 0 0 1 2.116 4.66c.005 1.854-.88 3.476-2.257 4.563-1.375 1.092-3.225 1.697-5.258 1.697-2.314 0-4.46-.842-4.46-.842v2.718c.397.116 1.048.365.635.779H5.79c-.41-.41.19-.65.644-.779V7.666c-1.053.81-1.593 1.51-1.868 2.031.32 1.02-.284.969-.284.969l-1.09-1.73s3.868-4.39 9.553-4.39zm-.19.971c-1.423-.003-3.184.473-4.27 1.244v8.646c.988.487 2.484.832 4.26.832h.01c1.596 0 2.98-.593 3.93-1.533.952-.948 1.486-2.183 1.492-3.683-.005-1.54-.504-2.864-1.42-3.86-.918-.992-2.274-1.645-4.002-1.646Z"})})}},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return s}));var c,r,o=n(4),i=n(2);const a=i.d.div((e=>Object(i.c)(c||(c=Object(o.a)(["\n    align-self: stretch;\n    height: 1px;\n    background: ",";\n  "])),e.theme.colors.layerBg))),s=i.d.div((e=>Object(i.c)(r||(r=Object(o.a)(["\n    width: 1px;\n    align-self: stretch;\n    background: ",";\n  "])),e.theme.colors.layerBg)))},95:function(e,t,n){"use strict";var c,r=n(4),o=n(2),i=n(20);t.a=o.d.div(c||(c=Object(r.a)(["\n  display: grid;\n  ","\n  ","\n  ","\n  ","\n  width: 100%;\n"])),i.o,i.p,i.b,i.a)},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c,r,o=n(4),i=n(2),a=n(20);const s=i.d.div(c||(c=Object(o.a)(["\n  ","\n  width: 100%;\n  min-height: 100%;\n"])),a.g);t.b=s;const b=Object(i.d)(s)(r||(r=Object(o.a)(["\n  ","\n  ","\n"])),a.o,a.c)}}]);
//# sourceMappingURL=5.a1cf768b.chunk.js.map