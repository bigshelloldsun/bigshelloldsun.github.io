import{r as l,j as r,L as M,u as le,a as rr,b as tr,A as or,o as nr,c as sr,C as ar,d as lr,s as ie,U as ce,e as ir}from"./index-D_nyL9Sq.js";import{c as j,b as cr,u as P,P as A,S as dr,B as V,C as de,a as ue,d as N,e as fe,f as he,g as pe,H as ur}from"./Header-DGP9AxYa.js";import{c as me,C as fr,a as ge,b as ve,A as xe,d as x,P as _,h as hr,R as pr,u as mr,F as gr,D as vr,e as xr,f as br,g as wr,i as jr,j as Sr,k as Pr,l as Cr,m as y,n as Rr,o as yr,p as Ar,q as Er,r as Nr,s as Tr,t as Lr,v as _r,w as Dr,M as Or,S as be,x as Ir,y as Mr,z as kr,B as Fr}from"./dropdown-menu-CgiNG1w4.js";import{L as zr,I as Ur}from"./label-BSQQQy7D.js";/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hr=me("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wr=me("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]),we=({className:e,...t})=>r.jsx("nav",{role:"navigation","aria-label":"pagination",className:j("mx-auto flex w-full justify-center",e),...t});we.displayName="Pagination";const je=l.forwardRef(({className:e,...t},o)=>r.jsx("ul",{ref:o,className:j("flex flex-row items-center gap-1",e),...t}));je.displayName="PaginationContent";const I=l.forwardRef(({className:e,...t},o)=>r.jsx("li",{ref:o,className:j("",e),...t}));I.displayName="PaginationItem";const $=({className:e,isActive:t,size:o="icon",...s})=>r.jsx(M,{"aria-current":t?"page":void 0,className:j(cr({variant:t?"outline":"ghost",size:o}),e),...s});$.displayName="PaginationLink";const Se=({className:e,...t})=>r.jsxs($,{"aria-label":"Go to previous page",size:"default",className:j("gap-1 pl-2.5",e),...t,children:[r.jsx(Hr,{className:"h-4 w-4"}),r.jsx("span",{children:"Previous"})]});Se.displayName="PaginationPrevious";const Pe=({className:e,...t})=>r.jsxs($,{"aria-label":"Go to next page",size:"default",className:j("gap-1 pr-2.5",e),...t,children:[r.jsx("span",{children:"Next"}),r.jsx(fr,{className:"h-4 w-4"})]});Pe.displayName="PaginationNext";const Ce=({className:e,...t})=>r.jsxs("span",{"aria-hidden":!0,className:j("flex h-9 w-9 items-center justify-center",e),...t,children:[r.jsx(Wr,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"More pages"})]});Ce.displayName="PaginationEllipsis";function Br(e,t){const o=[],s=e-2>0?e-2:1;for(let n=s;n<s+5;n++)n<=t&&o.push(n);if(o.length<5){if(o[2]===e)for(let n=o[0]-1;o.length<5&&n>0;n--)o.unshift(n);if(o[o.length-1]<t)for(let n=o[0]-1;o.length<5;n--)n>0&&o.unshift(n)}return o}function Q(e,t){return e<1?1:e>=t?t:e}var ee="Popover",[Re,kt]=ge(ee,[ve]),k=ve(),[Vr,C]=Re(ee),ye=e=>{const{__scopePopover:t,children:o,open:s,defaultOpen:n,onOpenChange:a,modal:i=!1}=e,c=k(t),d=l.useRef(null),[f,u]=l.useState(!1),[p=!1,h]=jr({prop:s,defaultProp:n,onChange:a});return r.jsx(Sr,{...c,children:r.jsx(Vr,{scope:t,contentId:Pr(),triggerRef:d,open:p,onOpenChange:h,onOpenToggle:l.useCallback(()=>h(m=>!m),[h]),hasCustomAnchor:f,onCustomAnchorAdd:l.useCallback(()=>u(!0),[]),onCustomAnchorRemove:l.useCallback(()=>u(!1),[]),modal:i,children:o})})};ye.displayName=ee;var Ae="PopoverAnchor",Yr=l.forwardRef((e,t)=>{const{__scopePopover:o,...s}=e,n=C(Ae,o),a=k(o),{onCustomAnchorAdd:i,onCustomAnchorRemove:c}=n;return l.useEffect(()=>(i(),()=>c()),[i,c]),r.jsx(xe,{...a,...s,ref:t})});Yr.displayName=Ae;var Ee="PopoverTrigger",Ne=l.forwardRef((e,t)=>{const{__scopePopover:o,...s}=e,n=C(Ee,o),a=k(o),i=P(t,n.triggerRef),c=r.jsx(A.button,{type:"button","aria-haspopup":"dialog","aria-expanded":n.open,"aria-controls":n.contentId,"data-state":Ie(n.open),...s,ref:i,onClick:x(e.onClick,n.onOpenToggle)});return n.hasCustomAnchor?c:r.jsx(xe,{asChild:!0,...a,children:c})});Ne.displayName=Ee;var re="PopoverPortal",[Xr,$r]=Re(re,{forceMount:void 0}),Te=e=>{const{__scopePopover:t,forceMount:o,children:s,container:n}=e,a=C(re,t);return r.jsx(Xr,{scope:t,forceMount:o,children:r.jsx(_,{present:o||a.open,children:r.jsx(wr,{asChild:!0,container:n,children:s})})})};Te.displayName=re;var T="PopoverContent",Le=l.forwardRef((e,t)=>{const o=$r(T,e.__scopePopover),{forceMount:s=o.forceMount,...n}=e,a=C(T,e.__scopePopover);return r.jsx(_,{present:s||a.open,children:a.modal?r.jsx(Gr,{...n,ref:t}):r.jsx(qr,{...n,ref:t})})});Le.displayName=T;var Gr=l.forwardRef((e,t)=>{const o=C(T,e.__scopePopover),s=l.useRef(null),n=P(t,s),a=l.useRef(!1);return l.useEffect(()=>{const i=s.current;if(i)return hr(i)},[]),r.jsx(pr,{as:dr,allowPinchZoom:!0,children:r.jsx(_e,{...e,ref:n,trapFocus:o.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:x(e.onCloseAutoFocus,i=>{i.preventDefault(),a.current||o.triggerRef.current?.focus()}),onPointerDownOutside:x(e.onPointerDownOutside,i=>{const c=i.detail.originalEvent,d=c.button===0&&c.ctrlKey===!0,f=c.button===2||d;a.current=f},{checkForDefaultPrevented:!1}),onFocusOutside:x(e.onFocusOutside,i=>i.preventDefault(),{checkForDefaultPrevented:!1})})})}),qr=l.forwardRef((e,t)=>{const o=C(T,e.__scopePopover),s=l.useRef(!1),n=l.useRef(!1);return r.jsx(_e,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{e.onCloseAutoFocus?.(a),a.defaultPrevented||(s.current||o.triggerRef.current?.focus(),a.preventDefault()),s.current=!1,n.current=!1},onInteractOutside:a=>{e.onInteractOutside?.(a),a.defaultPrevented||(s.current=!0,a.detail.originalEvent.type==="pointerdown"&&(n.current=!0));const i=a.target;o.triggerRef.current?.contains(i)&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&n.current&&a.preventDefault()}})}),_e=l.forwardRef((e,t)=>{const{__scopePopover:o,trapFocus:s,onOpenAutoFocus:n,onCloseAutoFocus:a,disableOutsidePointerEvents:i,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:u,...p}=e,h=C(T,o),m=k(o);return mr(),r.jsx(gr,{asChild:!0,loop:!0,trapped:s,onMountAutoFocus:n,onUnmountAutoFocus:a,children:r.jsx(vr,{asChild:!0,disableOutsidePointerEvents:i,onInteractOutside:u,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:f,onDismiss:()=>h.onOpenChange(!1),children:r.jsx(xr,{"data-state":Ie(h.open),role:"dialog",id:h.contentId,...m,...p,ref:t,style:{...p.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),De="PopoverClose",Oe=l.forwardRef((e,t)=>{const{__scopePopover:o,...s}=e,n=C(De,o);return r.jsx(A.button,{type:"button",...s,ref:t,onClick:x(e.onClick,()=>n.onOpenChange(!1))})});Oe.displayName=De;var Kr="PopoverArrow",Zr=l.forwardRef((e,t)=>{const{__scopePopover:o,...s}=e,n=k(o);return r.jsx(br,{...n,...s,ref:t})});Zr.displayName=Kr;function Ie(e){return e?"open":"closed"}var Jr=ye,Qr=Ne,et=Te,Me=Le;const rt=Jr,tt=Qr,ke=l.forwardRef(({className:e,align:t="center",sideOffset:o=4,...s},n)=>r.jsx(et,{children:r.jsx(Me,{ref:n,align:t,sideOffset:o,className:j("z-50 w-72 rounded-md border border-neutral-200 bg-white p-4 text-neutral-950 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50",e),...s})}));ke.displayName=Me.displayName;function ot(e,[t,o]){return Math.min(o,Math.max(t,e))}function nt(e,t){return l.useReducer((o,s)=>t[o][s]??o,e)}var te="ScrollArea",[Fe,Ft]=ge(te),[st,b]=Fe(te),ze=l.forwardRef((e,t)=>{const{__scopeScrollArea:o,type:s="hover",dir:n,scrollHideDelay:a=600,...i}=e,[c,d]=l.useState(null),[f,u]=l.useState(null),[p,h]=l.useState(null),[m,v]=l.useState(null),[D,K]=l.useState(null),[R,F]=l.useState(0),[Z,z]=l.useState(0),[U,O]=l.useState(!1),[H,W]=l.useState(!1),g=P(t,E=>d(E)),w=Cr(n);return r.jsx(st,{scope:o,type:s,dir:w,scrollHideDelay:a,scrollArea:c,viewport:f,onViewportChange:u,content:p,onContentChange:h,scrollbarX:m,onScrollbarXChange:v,scrollbarXEnabled:U,onScrollbarXEnabledChange:O,scrollbarY:D,onScrollbarYChange:K,scrollbarYEnabled:H,onScrollbarYEnabledChange:W,onCornerWidthChange:F,onCornerHeightChange:z,children:r.jsx(A.div,{dir:w,...i,ref:g,style:{position:"relative","--radix-scroll-area-corner-width":R+"px","--radix-scroll-area-corner-height":Z+"px",...e.style}})})});ze.displayName=te;var Ue="ScrollAreaViewport",He=l.forwardRef((e,t)=>{const{__scopeScrollArea:o,children:s,nonce:n,...a}=e,i=b(Ue,o),c=l.useRef(null),d=P(t,c,i.onViewportChange);return r.jsxs(r.Fragment,{children:[r.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:n}),r.jsx(A.div,{"data-radix-scroll-area-viewport":"",...a,ref:d,style:{overflowX:i.scrollbarXEnabled?"scroll":"hidden",overflowY:i.scrollbarYEnabled?"scroll":"hidden",...e.style},children:r.jsx("div",{ref:i.onContentChange,style:{minWidth:"100%",display:"table"},children:s})})]})});He.displayName=Ue;var S="ScrollAreaScrollbar",oe=l.forwardRef((e,t)=>{const{forceMount:o,...s}=e,n=b(S,e.__scopeScrollArea),{onScrollbarXEnabledChange:a,onScrollbarYEnabledChange:i}=n,c=e.orientation==="horizontal";return l.useEffect(()=>(c?a(!0):i(!0),()=>{c?a(!1):i(!1)}),[c,a,i]),n.type==="hover"?r.jsx(at,{...s,ref:t,forceMount:o}):n.type==="scroll"?r.jsx(lt,{...s,ref:t,forceMount:o}):n.type==="auto"?r.jsx(We,{...s,ref:t,forceMount:o}):n.type==="always"?r.jsx(ne,{...s,ref:t}):null});oe.displayName=S;var at=l.forwardRef((e,t)=>{const{forceMount:o,...s}=e,n=b(S,e.__scopeScrollArea),[a,i]=l.useState(!1);return l.useEffect(()=>{const c=n.scrollArea;let d=0;if(c){const f=()=>{window.clearTimeout(d),i(!0)},u=()=>{d=window.setTimeout(()=>i(!1),n.scrollHideDelay)};return c.addEventListener("pointerenter",f),c.addEventListener("pointerleave",u),()=>{window.clearTimeout(d),c.removeEventListener("pointerenter",f),c.removeEventListener("pointerleave",u)}}},[n.scrollArea,n.scrollHideDelay]),r.jsx(_,{present:o||a,children:r.jsx(We,{"data-state":a?"visible":"hidden",...s,ref:t})})}),lt=l.forwardRef((e,t)=>{const{forceMount:o,...s}=e,n=b(S,e.__scopeScrollArea),a=e.orientation==="horizontal",i=q(()=>d("SCROLL_END"),100),[c,d]=nt("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return l.useEffect(()=>{if(c==="idle"){const f=window.setTimeout(()=>d("HIDE"),n.scrollHideDelay);return()=>window.clearTimeout(f)}},[c,n.scrollHideDelay,d]),l.useEffect(()=>{const f=n.viewport,u=a?"scrollLeft":"scrollTop";if(f){let p=f[u];const h=()=>{const m=f[u];p!==m&&(d("SCROLL"),i()),p=m};return f.addEventListener("scroll",h),()=>f.removeEventListener("scroll",h)}},[n.viewport,a,d,i]),r.jsx(_,{present:o||c!=="hidden",children:r.jsx(ne,{"data-state":c==="hidden"?"hidden":"visible",...s,ref:t,onPointerEnter:x(e.onPointerEnter,()=>d("POINTER_ENTER")),onPointerLeave:x(e.onPointerLeave,()=>d("POINTER_LEAVE"))})})}),We=l.forwardRef((e,t)=>{const o=b(S,e.__scopeScrollArea),{forceMount:s,...n}=e,[a,i]=l.useState(!1),c=e.orientation==="horizontal",d=q(()=>{if(o.viewport){const f=o.viewport.offsetWidth<o.viewport.scrollWidth,u=o.viewport.offsetHeight<o.viewport.scrollHeight;i(c?f:u)}},10);return L(o.viewport,d),L(o.content,d),r.jsx(_,{present:s||a,children:r.jsx(ne,{"data-state":a?"visible":"hidden",...n,ref:t})})}),ne=l.forwardRef((e,t)=>{const{orientation:o="vertical",...s}=e,n=b(S,e.__scopeScrollArea),a=l.useRef(null),i=l.useRef(0),[c,d]=l.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),f=$e(c.viewport,c.content),u={...s,sizes:c,onSizesChange:d,hasThumb:f>0&&f<1,onThumbChange:h=>a.current=h,onThumbPointerUp:()=>i.current=0,onThumbPointerDown:h=>i.current=h};function p(h,m){return ht(h,i.current,c,m)}return o==="horizontal"?r.jsx(it,{...u,ref:t,onThumbPositionChange:()=>{if(n.viewport&&a.current){const h=n.viewport.scrollLeft,m=ae(h,c,n.dir);a.current.style.transform=`translate3d(${m}px, 0, 0)`}},onWheelScroll:h=>{n.viewport&&(n.viewport.scrollLeft=h)},onDragScroll:h=>{n.viewport&&(n.viewport.scrollLeft=p(h,n.dir))}}):o==="vertical"?r.jsx(ct,{...u,ref:t,onThumbPositionChange:()=>{if(n.viewport&&a.current){const h=n.viewport.scrollTop,m=ae(h,c);a.current.style.transform=`translate3d(0, ${m}px, 0)`}},onWheelScroll:h=>{n.viewport&&(n.viewport.scrollTop=h)},onDragScroll:h=>{n.viewport&&(n.viewport.scrollTop=p(h))}}):null}),it=l.forwardRef((e,t)=>{const{sizes:o,onSizesChange:s,...n}=e,a=b(S,e.__scopeScrollArea),[i,c]=l.useState(),d=l.useRef(null),f=P(t,d,a.onScrollbarXChange);return l.useEffect(()=>{d.current&&c(getComputedStyle(d.current))},[d]),r.jsx(Ve,{"data-orientation":"horizontal",...n,ref:f,sizes:o,style:{bottom:0,left:a.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:a.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":G(o)+"px",...e.style},onThumbPointerDown:u=>e.onThumbPointerDown(u.x),onDragScroll:u=>e.onDragScroll(u.x),onWheelScroll:(u,p)=>{if(a.viewport){const h=a.viewport.scrollLeft+u.deltaX;e.onWheelScroll(h),qe(h,p)&&u.preventDefault()}},onResize:()=>{d.current&&a.viewport&&i&&s({content:a.viewport.scrollWidth,viewport:a.viewport.offsetWidth,scrollbar:{size:d.current.clientWidth,paddingStart:X(i.paddingLeft),paddingEnd:X(i.paddingRight)}})}})}),ct=l.forwardRef((e,t)=>{const{sizes:o,onSizesChange:s,...n}=e,a=b(S,e.__scopeScrollArea),[i,c]=l.useState(),d=l.useRef(null),f=P(t,d,a.onScrollbarYChange);return l.useEffect(()=>{d.current&&c(getComputedStyle(d.current))},[d]),r.jsx(Ve,{"data-orientation":"vertical",...n,ref:f,sizes:o,style:{top:0,right:a.dir==="ltr"?0:void 0,left:a.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":G(o)+"px",...e.style},onThumbPointerDown:u=>e.onThumbPointerDown(u.y),onDragScroll:u=>e.onDragScroll(u.y),onWheelScroll:(u,p)=>{if(a.viewport){const h=a.viewport.scrollTop+u.deltaY;e.onWheelScroll(h),qe(h,p)&&u.preventDefault()}},onResize:()=>{d.current&&a.viewport&&i&&s({content:a.viewport.scrollHeight,viewport:a.viewport.offsetHeight,scrollbar:{size:d.current.clientHeight,paddingStart:X(i.paddingTop),paddingEnd:X(i.paddingBottom)}})}})}),[dt,Be]=Fe(S),Ve=l.forwardRef((e,t)=>{const{__scopeScrollArea:o,sizes:s,hasThumb:n,onThumbChange:a,onThumbPointerUp:i,onThumbPointerDown:c,onThumbPositionChange:d,onDragScroll:f,onWheelScroll:u,onResize:p,...h}=e,m=b(S,o),[v,D]=l.useState(null),K=P(t,g=>D(g)),R=l.useRef(null),F=l.useRef(""),Z=m.viewport,z=s.content-s.viewport,U=y(u),O=y(d),H=q(p,10);function W(g){if(R.current){const w=g.clientX-R.current.left,E=g.clientY-R.current.top;f({x:w,y:E})}}return l.useEffect(()=>{const g=w=>{const E=w.target;v?.contains(E)&&U(w,z)};return document.addEventListener("wheel",g,{passive:!1}),()=>document.removeEventListener("wheel",g,{passive:!1})},[Z,v,z,U]),l.useEffect(O,[s,O]),L(v,H),L(m.content,H),r.jsx(dt,{scope:o,scrollbar:v,hasThumb:n,onThumbChange:y(a),onThumbPointerUp:y(i),onThumbPositionChange:O,onThumbPointerDown:y(c),children:r.jsx(A.div,{...h,ref:K,style:{position:"absolute",...h.style},onPointerDown:x(e.onPointerDown,g=>{g.button===0&&(g.target.setPointerCapture(g.pointerId),R.current=v.getBoundingClientRect(),F.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",m.viewport&&(m.viewport.style.scrollBehavior="auto"),W(g))}),onPointerMove:x(e.onPointerMove,W),onPointerUp:x(e.onPointerUp,g=>{const w=g.target;w.hasPointerCapture(g.pointerId)&&w.releasePointerCapture(g.pointerId),document.body.style.webkitUserSelect=F.current,m.viewport&&(m.viewport.style.scrollBehavior=""),R.current=null})})})}),Y="ScrollAreaThumb",Ye=l.forwardRef((e,t)=>{const{forceMount:o,...s}=e,n=Be(Y,e.__scopeScrollArea);return r.jsx(_,{present:o||n.hasThumb,children:r.jsx(ut,{ref:t,...s})})}),ut=l.forwardRef((e,t)=>{const{__scopeScrollArea:o,style:s,...n}=e,a=b(Y,o),i=Be(Y,o),{onThumbPositionChange:c}=i,d=P(t,p=>i.onThumbChange(p)),f=l.useRef(),u=q(()=>{f.current&&(f.current(),f.current=void 0)},100);return l.useEffect(()=>{const p=a.viewport;if(p){const h=()=>{if(u(),!f.current){const m=pt(p,c);f.current=m,c()}};return c(),p.addEventListener("scroll",h),()=>p.removeEventListener("scroll",h)}},[a.viewport,u,c]),r.jsx(A.div,{"data-state":i.hasThumb?"visible":"hidden",...n,ref:d,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...s},onPointerDownCapture:x(e.onPointerDownCapture,p=>{const m=p.target.getBoundingClientRect(),v=p.clientX-m.left,D=p.clientY-m.top;i.onThumbPointerDown({x:v,y:D})}),onPointerUp:x(e.onPointerUp,i.onThumbPointerUp)})});Ye.displayName=Y;var se="ScrollAreaCorner",Xe=l.forwardRef((e,t)=>{const o=b(se,e.__scopeScrollArea),s=!!(o.scrollbarX&&o.scrollbarY);return o.type!=="scroll"&&s?r.jsx(ft,{...e,ref:t}):null});Xe.displayName=se;var ft=l.forwardRef((e,t)=>{const{__scopeScrollArea:o,...s}=e,n=b(se,o),[a,i]=l.useState(0),[c,d]=l.useState(0),f=!!(a&&c);return L(n.scrollbarX,()=>{const u=n.scrollbarX?.offsetHeight||0;n.onCornerHeightChange(u),d(u)}),L(n.scrollbarY,()=>{const u=n.scrollbarY?.offsetWidth||0;n.onCornerWidthChange(u),i(u)}),f?r.jsx(A.div,{...s,ref:t,style:{width:a,height:c,position:"absolute",right:n.dir==="ltr"?0:void 0,left:n.dir==="rtl"?0:void 0,bottom:0,...e.style}}):null});function X(e){return e?parseInt(e,10):0}function $e(e,t){const o=e/t;return isNaN(o)?0:o}function G(e){const t=$e(e.viewport,e.content),o=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,s=(e.scrollbar.size-o)*t;return Math.max(s,18)}function ht(e,t,o,s="ltr"){const n=G(o),a=n/2,i=t||a,c=n-i,d=o.scrollbar.paddingStart+i,f=o.scrollbar.size-o.scrollbar.paddingEnd-c,u=o.content-o.viewport,p=s==="ltr"?[0,u]:[u*-1,0];return Ge([d,f],p)(e)}function ae(e,t,o="ltr"){const s=G(t),n=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,a=t.scrollbar.size-n,i=t.content-t.viewport,c=a-s,d=o==="ltr"?[0,i]:[i*-1,0],f=ot(e,d);return Ge([0,i],[0,c])(f)}function Ge(e,t){return o=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const s=(t[1]-t[0])/(e[1]-e[0]);return t[0]+s*(o-e[0])}}function qe(e,t){return e>0&&e<t}var pt=(e,t=()=>{})=>{let o={left:e.scrollLeft,top:e.scrollTop},s=0;return function n(){const a={left:e.scrollLeft,top:e.scrollTop},i=o.left!==a.left,c=o.top!==a.top;(i||c)&&t(),o=a,s=window.requestAnimationFrame(n)}(),()=>window.cancelAnimationFrame(s)};function q(e,t){const o=y(e),s=l.useRef(0);return l.useEffect(()=>()=>window.clearTimeout(s.current),[]),l.useCallback(()=>{window.clearTimeout(s.current),s.current=window.setTimeout(o,t)},[o,t])}function L(e,t){const o=y(t);Rr(()=>{let s=0;if(e){const n=new ResizeObserver(()=>{cancelAnimationFrame(s),s=window.requestAnimationFrame(o)});return n.observe(e),()=>{window.cancelAnimationFrame(s),n.unobserve(e)}}},[e,o])}var Ke=ze,mt=He,gt=Xe;const Ze=l.forwardRef(({className:e,children:t,...o},s)=>r.jsxs(Ke,{ref:s,className:j("relative overflow-hidden",e),...o,children:[r.jsx(mt,{className:"h-full w-full rounded-[inherit]",children:t}),r.jsx(Je,{}),r.jsx(gt,{})]}));Ze.displayName=Ke.displayName;const Je=l.forwardRef(({className:e,orientation:t="vertical",...o},s)=>r.jsx(oe,{ref:s,orientation:t,className:j("flex touch-none select-none transition-colors",t==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-[1px]",t==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",e),...o,children:r.jsx(Ye,{className:"relative flex-1 rounded-full bg-neutral-200 dark:bg-neutral-800"})}));Je.displayName=oe.displayName;function vt({children:e,pageCount:t}){return r.jsxs(rt,{children:[e,r.jsx(ke,{className:"w-min",children:r.jsx(Ze,{className:"h-80",children:r.jsx("div",{className:"grid gap-2",children:Array(t).fill(null).map((o,s)=>r.jsx(Oe,{asChild:!0,children:r.jsx(V,{asChild:!0,variant:"outline",children:r.jsx(M,{to:`?page=${Q(s+1,t).toString()}`,children:s+1})})},s+1))})})})]})}function xt({children:e}){return r.jsx(tt,{children:e})}function bt({currentPage:e,pageCount:t}){const o=Br(e,t);return r.jsx(we,{children:r.jsxs(je,{className:"h-min w-full justify-center gap-3 border-t border-neutral-200 bg-neutral-50 p-3 shadow-2xl",children:[r.jsx(I,{children:r.jsx(Se,{to:`?page=${Q(e-1,t).toString()}`})}),r.jsx("div",{className:"flex gap-3 overflow-x-auto",children:o.map(s=>r.jsx(I,{children:r.jsx($,{to:`/?page=${s.toString()}`,isActive:s===e,children:s})},s))}),t>5&&r.jsx(I,{children:r.jsx(vt,{pageCount:t,children:r.jsx(xt,{children:r.jsx(Ce,{})})})}),r.jsx(I,{children:r.jsx(Pe,{to:`?page=${Q(e+1,t).toString()}`})})]})})}function wt({children:e}){const t=le({key:"article-create"});return r.jsxs(yr,{children:[e,r.jsxs(Ar,{children:[r.jsxs(Er,{children:[r.jsx(Nr,{children:"Create Article"}),r.jsx(Tr,{children:"The article will be loaded after submission."})]}),r.jsxs(t.Form,{method:"POST",children:[r.jsxs("div",{children:[r.jsx(zr,{htmlFor:"url",children:"URL:"}),r.jsx(Ur,{id:"url",name:"url",placeholder:"https://google.com/"})]}),r.jsx(Lr,{children:r.jsx(_r,{asChild:!0,children:r.jsx(V,{type:"submit",children:"Save"})})})]})]})]})}function jt({children:e}){return r.jsx(Dr,{asChild:!0,children:e})}function Qe({...e}){return r.jsxs("svg",{viewBox:"0 0 24 24",role:"img","aria-describedby":"desc",...e,children:[r.jsx("title",{id:"title",children:"Read/Unread Status"}),r.jsx("desc",{id:"desc",children:"This article has been read."}),r.jsx("path",{d:"M21.03 6.29L12 .64L2.97 6.29C2.39 6.64 2 7.27 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-.73-.39-1.36-.97-1.71M20 18H4v-8l8 5l8-5zm-8-5L4 8l8-5l8 5z"})]})}function er({...e}){return r.jsxs("svg",{viewBox:"0 0 24 24",role:"img","aria-describedby":"desc",...e,children:[r.jsx("title",{id:"title",children:"Read/Unread Status"}),r.jsx("desc",{id:"desc",children:"This article has not been read."}),r.jsx("path",{d:"M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"})]})}function St({...e}){return r.jsx("svg",{viewBox:"0 0 32 32",...e,children:r.jsx("path",{d:"M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z"})})}function Pt({...e}){return r.jsx("svg",{viewBox:"0 0 32 32",...e,children:r.jsx("path",{d:"M4 6h24v2H4zm0 18h24v2H4zm0-12h24v2H4zm0 6h24v2H4z"})})}function Ct({article:e}){return r.jsxs(de,{className:"grid overflow-hidden border-neutral-300/85 bg-neutral-50 shadow sm:grid-flow-col sm:grid-cols-[1fr_2fr]",children:[e.imgUrl&&e.imgUrl instanceof Blob?r.jsx("img",{src:URL.createObjectURL(e.imgUrl),loading:"lazy",alt:"An image preview of the article.",className:"h-60 w-full object-cover sm:w-80"}):r.jsx("div",{className:"grid h-60 place-items-center bg-neutral-100 sm:max-w-80",children:r.jsx(Or,{className:"max-h-40 fill-neutral-200"})}),r.jsxs("div",{className:"flex flex-col",children:[r.jsx(ue,{children:r.jsxs("div",{className:"flex justify-between",children:[r.jsx(N,{children:new Date(e.timestamp).toLocaleString()}),r.jsx(N,{children:e.read?r.jsx(Qe,{className:"h-full fill-neutral-500"}):r.jsx(er,{className:"h-full fill-neutral-500"})})]})}),r.jsx(fe,{children:e.title&&r.jsx(he,{className:"line-clamp-3",children:e.title})}),r.jsxs(pe,{className:"grid",children:[e.title&&r.jsx(be,{}),r.jsx(N,{className:e.title?"line-clamp-1":"",children:e.url})]})]})]})}function Rt(e,t,o){return(e-1)*t+o+1}function B({className:e,...t}){return r.jsx("div",{className:j("animate-pulse rounded-md bg-neutral-100 dark:bg-neutral-800",e),...t})}function yt({state:e,article:t}){const{status:o}=e;return o!=="idle"?r.jsxs(de,{"aria-label":"Loading the new article",className:"grid overflow-hidden border-neutral-300/85 bg-neutral-50 shadow sm:grid-flow-col sm:grid-cols-[1fr_2fr]",children:[t.imgUrl&&t.imgUrl instanceof Blob?r.jsx("img",{src:URL.createObjectURL(t.imgUrl),loading:"lazy",alt:"An image preview of the article.",className:"h-60 w-full object-cover sm:w-80"}):r.jsx(B,{className:"h-60 w-full rounded-none bg-neutral-300 sm:w-80"}),o==="fetching"&&e.payload.target==="image"?r.jsxs("div",{className:"flex flex-col",children:[r.jsx(ue,{children:r.jsxs("div",{className:"flex justify-between",children:[r.jsx(N,{children:new Date(t.timestamp).toLocaleString()}),r.jsx(N,{children:t.read?r.jsx(Qe,{className:"h-full fill-neutral-500"}):r.jsx(er,{className:"h-full fill-neutral-500"})})]})}),r.jsx(fe,{children:t.title&&r.jsx(he,{className:"line-clamp-3",children:t.title})}),r.jsxs(pe,{className:"grid",children:[t.title&&r.jsx(be,{}),r.jsx(N,{className:t.title?"line-clamp-1":"",children:t.url})]})]}):r.jsxs("div",{className:"flex flex-col gap-3",children:[r.jsx(B,{className:"h-4 w-full bg-neutral-300 sm:w-80"}),r.jsx(B,{className:"h-12 w-full bg-neutral-300 sm:w-80"}),r.jsx(B,{className:"h-6 w-full bg-neutral-300 sm:w-80"})]})]}):r.jsx(r.Fragment,{})}function At({list:e,count:t,page:o,state:s}){return r.jsx("section",{role:"feed","aria-label":"Article Feed","aria-live":"polite","aria-busy":s.status!=="idle",className:"grid h-full w-full grid-cols-1 gap-4 px-3 py-4",children:e.length>0?e.map((n,a)=>r.jsx("article",{"aria-setsize":t,"aria-posinset":Rt(o.current,o.articleLimit,a),children:r.jsx(M,{to:n.id,children:s.status!=="idle"&&s.payload.id===n.id?r.jsx(yt,{state:s,article:n}):r.jsx(Ct,{article:n})})},n.id)):r.jsxs("div",{className:"grid h-full place-content-center text-center text-neutral-700",children:[r.jsx("p",{children:"You currently have no articles to display."}),r.jsxs("p",{children:["Add one by selecting the"," ",r.jsx("span",{className:"font-semibold italic",children:"'Create new article'"})," button."]})]})})}function Et({children:e}){const t=l.useRef(null);return l.useEffect(()=>{t.current&&(t.current.popover="manual",t.current.showPopover())},[t.current]),r.jsx("div",{ref:t,role:"group",className:"rounded-full bg-transparent p-0 [inset-block:auto_4.5rem] [inset-inline:auto_0.5rem]",children:e})}function zt(){const{articleList:e,articleCount:t,page:o}=rr(),{session:s}=tr(),n=le({key:"article-create"}),[a,i]=l.useState({status:"idle"});l.useEffect(()=>{if(console.log(n),n.state!=="idle")return;const d=n.data;if(!d)return;const{status:f,id:u,url:p}=d;f==="creating"&&(i({status:"creating",payload:{id:u}}),n.submit({status:"fetch-metadata",id:u,url:p},{method:"POST"})),f==="fetch-image"&&(i({status:"fetching",payload:{id:u,target:"image"}}),n.submit({status:"fetch-image",id:u,imageURL:n.data.imageURL},{method:"POST"})),n.state==="idle"&&n.data&&n.data.status==="idle"&&i({status:"idle"})},[n]);const c=d=>i(d.data);return l.useEffect(()=>(navigator.serviceWorker.addEventListener("message",c),()=>{navigator.serviceWorker.removeEventListener("message",c)}),[navigator.serviceWorker.controller]),r.jsxs(r.Fragment,{children:[r.jsx(ur,{children:r.jsxs(Ir,{children:[r.jsx(Mr,{asChild:!0,children:r.jsx(V,{type:"button",title:"Menu",children:r.jsx(Pt,{className:"h-full fill-neutral-50"})})}),r.jsx(kr,{children:r.jsx(Fr,{children:s?r.jsx(M,{to:"logout",children:"Sign-out"}):r.jsx(M,{to:"login",children:"Sign-in / Register"})})})]})}),r.jsxs("main",{className:"mx-auto flex w-full flex-col justify-between overflow-y-auto [scrollbar-width:thin] md:max-w-[1024px]",children:[r.jsx(l.Suspense,{fallback:r.jsx("p",{children:"Loading articles..."}),children:r.jsx(or,{resolve:e,errorElement:r.jsx("p",{children:"Error loading articles!"}),children:d=>r.jsx(At,{list:d,count:t,page:o,state:a})})}),r.jsx(Et,{children:r.jsx(wt,{children:r.jsx(jt,{children:r.jsx(V,{type:"button","aria-label":"Create new article",title:"Create new article",className:"size-20 rounded-full fill-neutral-50",children:r.jsx(St,{})})})})})]}),o.count>1&&r.jsx("footer",{children:r.jsx(bt,{currentPage:o.current,pageCount:o.count})})]})}async function*Nt(e,t){let{promise:o,reject:s,resolve:n}=Promise.withResolvers();const a=await nr(),d=sr(a,"articles","readonly").objectStore("articles").index("by_timestamp").openCursor(null,"prev"),f=()=>{n(d.result)},u=()=>{s(d.error)};d.addEventListener("error",u),d.addEventListener("success",f);const p=e*t;let h=!1;for(let m=0;m<t;m++){const v=await o;if(v)p>0&&!h?(h=!0,v.advance(p)):(yield v.value,v.continue()),{promise:o,reject:s,resolve:n}=Promise.withResolvers();else break}d.removeEventListener("success",f),d.removeEventListener("error",u)}const J=20;async function Ut({request:e}){const t=new URL(e.url);if(!t.searchParams.get("page"))throw new Error("Missing Article Feed page query");const o=await ar("articles"),s=Math.ceil(o/J),n=s===0?1:parseInt(t.searchParams.get("page")??"1",10),a=n<=0&&s!==0;if(n>s&&s!==0||a)throw new Error("Invalid Articled Feed page");const c={articleList:Array.fromAsync(Nt(n-1,J)),articleCount:o,page:{count:s,articleLimit:J,current:n}};return lr(c)}async function Tt({id:e,imageURL:t}){const{data:o,error:s}=await ie.storage.from("images").download(t);return s?(console.error("Function: saveImage()"),console.error(s),!1):(await ce("articles",e,{imgUrl:o}),!0)}async function Ht({request:e}){if(e.method!=="POST")throw new Error("Invalid request method");const t=Lt(await e.formData());if(t.url&&!t.status){const o={timestamp:Date.now(),id:crypto.randomUUID(),read:!1,url:t.url};return{status:"creating",id:await ir("articles",o),url:t.url}}if(t.status==="fetch-metadata"){const o=await ie.functions.invoke("fetch-url-metadata",{body:{url:t.url}});if(o.error)return console.error("Function: fetchArticleInfo()"),console.error(o.error),{type:"done"};if(!o.data)return console.error("Unable to fetch metadata"),{type:"done"};const{title:s,description:n,imageURL:a}=o.data;return await ce("articles",t.id,{title:s,description:n}),a?{status:"fetch-image",id:t.id,url:void 0,imageURL:a}:{status:"idle"}}if(t.status==="fetch-image")return await Tt({id:t.id,imageURL:t.imageURL}),{status:"idle"}}function Lt(e){return Object.fromEntries(e)}export{zt as HomePage,Ht as action,Ut as loader};
