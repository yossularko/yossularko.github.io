(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4731)}])},4731:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return $}});var n=r(5893),i=r(4430),a=r.n(i),o=r(9008),l=r.n(o),s=r(6384),c=r(5059),u=(0,s.m)("div");u.displayName="Box";var d=(0,c.G)(function(e,t){let{size:r,centerContent:i=!0,...a}=e;return(0,n.jsx)(u,{ref:t,boxSize:r,__css:{...i?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...a})});d.displayName="Square",(0,c.G)(function(e,t){let{size:r,...i}=e;return(0,n.jsx)(d,{size:r,ref:t,borderRadius:"9999px",...i})}).displayName="Circle";var f=r(2498),m=(0,c.G)(function(e,t){let{direction:r,align:i,justify:a,wrap:o,basis:l,grow:c,shrink:u,...d}=e;return(0,n.jsx)(s.m.div,{ref:t,__css:{display:"flex",flexDirection:r,alignItems:i,justifyContent:a,flexWrap:o,flexBasis:l,flexGrow:c,flexShrink:u},...d})});m.displayName="Flex";var p=r(7294);let h=()=>(0,n.jsx)(u,{position:"absolute",w:"404px",h:"800px",left:"20%",top:"5%",background:"rgba(149, 66, 232, 0.35)",transform:"rotate(-114.2deg)",filter:"blur(175px)"}),x=()=>(0,n.jsx)(u,{position:"absolute",w:"200px",h:"438px",top:0,right:0,background:"#7aebfb",filter:"blur(190px)"});function b(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var g=r(917),j=r(1607);function v(){let e=b(["\n    75%, 100% { transform: scale(2); opacity: 0; }\n"]);return v=function(){return e},e}function y(){let e=b(["\n    0%, 100% { opacity: 1; }\n    50% { opacity: .5; }\n"]);return y=function(){return e},e}function w(){let e=b(["\n    from { transform: rotate(360deg); }\n    to { transform: rotate(0deg); }\n"]);return w=function(){return e},e}let _=(0,g.F4)(v()),N=(0,g.F4)(y()),k=(0,g.F4)(w()),C=()=>{let e=function(e){let[t]=function(e,t={}){let{ssr:r=!0,fallback:n}=t,{getWindow:i}=(0,j.O)(),a=Array.isArray(e)?e:[e],o=Array.isArray(n)?n:[n];o=o.filter(e=>null!=e);let[l,s]=(0,p.useState)(()=>a.map((e,t)=>({media:e,matches:r?!!o[t]:i().matchMedia(e).matches})));return(0,p.useEffect)(()=>{let e=i();s(a.map(t=>({media:t,matches:e.matchMedia(t).matches})));let t=a.map(t=>e.matchMedia(t)),r=e=>{s(t=>t.slice().map(t=>t.media===e.media?{...t,matches:e.matches}:t))};return t.forEach(e=>{"function"==typeof e.addListener?e.addListener(r):e.addEventListener("change",r)}),()=>{t.forEach(e=>{"function"==typeof e.removeListener?e.removeListener(r):e.removeEventListener("change",r)})}},[i]),l.map(e=>e.matches)}("(prefers-reduced-motion: reduce)",void 0);return t}();return{ping:e?void 0:"".concat(_," 1s cubic-bezier(0, 0, 0.2, 1) infinite"),pulse:e?void 0:"".concat(N," 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"),rotate:e?void 0:"".concat(k," 6s linear infinite")}},E=()=>{let{ping:e,pulse:t}=C(),r=(0,f.ff)("gray.300","whiteAlpha.200");return(0,n.jsx)(u,{position:"relative",w:"100%",h:"100vh",overflow:"hidden",children:(0,n.jsxs)(m,{position:"relative",flexDir:"column",justifyContent:"center",alignItems:"center",h:"100%",children:[(0,n.jsx)(u,{position:"absolute",borderWidth:1,borderColor:r,borderRadius:"full",h:200,w:200,animation:e}),(0,n.jsx)(u,{position:"absolute",borderWidth:1,borderColor:r,borderRadius:"full",h:300,w:300}),(0,n.jsx)(u,{position:"absolute",borderWidth:1,borderColor:r,borderRadius:"full",h:500,w:500}),(0,n.jsx)(u,{position:"absolute",borderWidth:1,borderColor:"#f37055",borderRadius:"full",h:650,w:650,opacity:20,animation:t}),(0,n.jsx)(u,{position:"absolute",borderWidth:1,borderColor:r,borderRadius:"full",h:800,w:800})]})})};var S=r(1628),O=r(3179),I=r(5432),z=r(888),B=(0,c.G)(function(e,t){let r=(0,S.mq)("Text",e),{className:i,align:a,decoration:o,casing:l,...c}=(0,O.Lr)(e),u=(0,z.oA)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,n.jsx)(s.m.p,{ref:t,className:(0,I.cx)("chakra-text",e.className),...u,...c,__css:r})});B.displayName="Text";let G=e=>{let{title:t,href:r,gradient:i,boxSize:a,innerBoxSize:o,...l}=e,{rotate:s}=C();return(0,n.jsxs)(m,{flexDir:"column",alignItems:"center",justifyContent:"center",w:a||100,h:a||100,position:"relative",role:"group",...l,children:[(0,n.jsx)(u,{w:"full",h:"full",children:(0,n.jsx)(u,{w:"full",h:"full",borderRadius:"full",background:i||"linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)",cursor:"pointer",filter:"blur(15px)",opacity:0,transition:"0.3s opacity ease-in-out",_groupHover:{opacity:1,filter:"blur(25px)"}})}),(0,n.jsx)(u,{position:"absolute",w:"full",h:"full",borderRadius:"full",background:i||"linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)",filter:"blur(1px)",animation:s,cursor:"pointer"}),(0,n.jsx)(m,{position:"absolute",flexDir:"column",w:o||"98%",h:o||"98%",bg:"rgb(19, 20, 22)",borderRadius:"full",alignItems:"center",justifyContent:"center",as:"a",href:r,cursor:"pointer",children:(0,n.jsx)(B,{color:"gray.300",textAlign:"center",fontSize:"sm",ml:1,textTransform:"uppercase",letterSpacing:"6px",children:t})})]})};var[R,A]=(0,r(5227).k)({strict:!1,name:"ButtonGroupContext"});function M(e){let{children:t,className:r,...i}=e,a=(0,p.isValidElement)(t)?(0,p.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,o=(0,I.cx)("chakra-button__icon",r);return(0,n.jsx)(s.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...i,className:o,children:a})}M.displayName="ButtonIcon";var P=r(295);function T(e){let{label:t,placement:r,spacing:i="0.5rem",children:a=(0,n.jsx)(P.$,{color:"currentColor",width:"1em",height:"1em"}),className:o,__css:l,...c}=e,u=(0,I.cx)("chakra-button__spinner",o),d="start"===r?"marginEnd":"marginStart",f=(0,p.useMemo)(()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[d]:t?i:0,fontSize:"1em",lineHeight:"normal",...l}),[l,t,d,i]);return(0,n.jsx)(s.m.div,{className:u,...c,__css:f,children:a})}T.displayName="ButtonSpinner";var D=(0,c.G)((e,t)=>{let r=A(),i=(0,S.mq)("Button",{...r,...e}),{isDisabled:a=null==r?void 0:r.isDisabled,isLoading:o,isActive:l,children:c,leftIcon:u,rightIcon:d,loadingText:f,iconSpacing:m="0.5rem",type:h,spinner:x,spinnerPlacement:b="start",className:g,as:j,...v}=(0,O.Lr)(e),y=(0,p.useMemo)(()=>{let e={...null==i?void 0:i._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...i,...!!r&&{_focus:e}}},[i,r]),{ref:w,type:_}=function(e){let[t,r]=(0,p.useState)(!e),n=(0,p.useCallback)(e=>{e&&r("BUTTON"===e.tagName)},[]);return{ref:n,type:t?"button":void 0}}(j),N={rightIcon:d,leftIcon:u,iconSpacing:m,children:c};return(0,n.jsxs)(s.m.button,{ref:function(...e){return(0,p.useMemo)(()=>(function(...e){return t=>{e.forEach(e=>{!function(e,t){if(null!=e){if("function"==typeof e){e(t);return}try{e.current=t}catch(r){throw Error(`Cannot assign value '${t}' to ref '${e}'`)}}}(e,t)})}})(...e),e)}(t,w),as:j,type:null!=h?h:_,"data-active":(0,I.PB)(l),"data-loading":(0,I.PB)(o),__css:y,className:(0,I.cx)("chakra-button",g),...v,disabled:a||o,children:[o&&"start"===b&&(0,n.jsx)(T,{className:"chakra-button__spinner--start",label:f,placement:"start",spacing:m,children:x}),o?f||(0,n.jsx)(s.m.span,{opacity:0,children:(0,n.jsx)(F,{...N})}):(0,n.jsx)(F,{...N}),o&&"end"===b&&(0,n.jsx)(T,{className:"chakra-button__spinner--end",label:f,placement:"end",spacing:m,children:x})]})});function F(e){let{leftIcon:t,rightIcon:r,children:i,iconSpacing:a}=e;return(0,n.jsxs)(n.Fragment,{children:[t&&(0,n.jsx)(M,{marginEnd:a,children:t}),i,r&&(0,n.jsx)(M,{marginStart:a,children:r})]})}D.displayName="Button";var L=(0,c.G)((e,t)=>{let{icon:r,children:i,isRound:a,"aria-label":o,...l}=e,s=r||i,c=(0,p.isValidElement)(s)?(0,p.cloneElement)(s,{"aria-hidden":!0,focusable:!1}):null;return(0,n.jsx)(D,{padding:"0",borderRadius:a?"full":void 0,ref:t,"aria-label":o,...l,children:c})});L.displayName="IconButton";var W=r(3750);let q=()=>{let{colorMode:e,toggleColorMode:t}=(0,f.If)();return(0,n.jsx)(L,{variant:"ghost","aria-label":"Toggle Color Mode",icon:"light"===e?(0,n.jsx)(W.gxG,{}):(0,n.jsx)(W.eSY,{}),onClick:t})};function $(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l(),{children:[(0,n.jsx)("title",{children:"Muhammad Yos Sularko"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)("main",{className:a().className,children:(0,n.jsxs)(u,{h:"100vh",bg:(0,f.ff)("gray.100","rgb(19, 20, 22)"),position:"relative",overflow:"hidden",children:[(0,n.jsx)(h,{}),(0,n.jsx)(x,{}),(0,n.jsxs)(m,{flexDir:"column",alignItems:"center",justifyContent:"center",w:"100%",h:"100vh",children:[(0,n.jsx)(E,{}),(0,n.jsx)(m,{position:"absolute",flexDir:"column",alignItems:"center",minW:180,children:(0,n.jsx)(u,{position:"relative",children:(0,n.jsx)(G,{title:"Click Me",gradient:"linear-gradient(60deg, #7aebfb, rgba(149, 66, 232, 0.8), rgba(45, 72, 152, 0.75))",href:"https://muhammad-yos-sularko.vercel.app/"})})})]}),(0,n.jsx)(u,{position:"absolute",top:10,right:10,children:(0,n.jsx)(q,{})})]})})]})}},4430:function(e){e.exports={style:{fontFamily:"'__Inter_9c9965', '__Inter_Fallback_9c9965'",fontStyle:"normal"},className:"__className_9c9965"}},9008:function(e,t,r){e.exports=r(3121)},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return s}});var n=r(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(i),o=function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};function s(e){return function(t){return n.createElement(c,o({attr:o({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,o({key:r},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var r,i=e.attr,a=e.size,s=e.title,c=l(e,["attr","size","title"]),u=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,c,{className:r,style:o(o({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==a?n.createElement(a.Consumer,null,function(e){return t(e)}):t(i)}}},function(e){e.O(0,[13,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);