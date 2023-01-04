(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function ga(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function zh(t,e,n){return e&&ga(t.prototype,e),n&&ga(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}/*!
 * Splide.js
 * Version  : 4.1.4
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */var ma="(prefers-reduced-motion: reduce)",Jt=1,Kh=2,sn=3,vn=4,ar=5,Br=6,Wr=7,Hh={CREATED:Jt,MOUNTED:Kh,IDLE:sn,MOVING:vn,SCROLLING:ar,DRAGGING:Br,DESTROYED:Wr};function ot(t){t.length=0}function At(t,e,n){return Array.prototype.slice.call(t,e,n)}function te(t){return t.bind.apply(t,[null].concat(At(arguments,1)))}var ku=setTimeout,ys=function(){};function pa(t){return requestAnimationFrame(t)}function yi(t,e){return typeof e===t}function Bn(t){return!Xs(t)&&yi("object",t)}var Ys=Array.isArray,Ou=te(yi,"function"),yt=te(yi,"string"),ur=te(yi,"undefined");function Xs(t){return t===null}function xu(t){try{return t instanceof(t.ownerDocument.defaultView||window).HTMLElement}catch{return!1}}function cr(t){return Ys(t)?t:[t]}function $e(t,e){cr(t).forEach(e)}function Js(t,e){return t.indexOf(e)>-1}function $r(t,e){return t.push.apply(t,cr(e)),t}function et(t,e,n){t&&$e(e,function(r){r&&t.classList[n?"add":"remove"](r)})}function Qe(t,e){et(t,yt(e)?e.split(" "):e,!0)}function lr(t,e){$e(e,t.appendChild.bind(t))}function Zs(t,e){$e(t,function(n){var r=(e||n).parentNode;r&&r.insertBefore(n,e)})}function $n(t,e){return xu(t)&&(t.msMatchesSelector||t.matches).call(t,e)}function Mu(t,e){var n=t?At(t.children):[];return e?n.filter(function(r){return $n(r,e)}):n}function hr(t,e){return e?Mu(t,e)[0]:t.firstElementChild}var qn=Object.keys;function Mt(t,e,n){return t&&(n?qn(t).reverse():qn(t)).forEach(function(r){r!=="__proto__"&&e(t[r],r)}),t}function jn(t){return At(arguments,1).forEach(function(e){Mt(e,function(n,r){t[r]=e[r]})}),t}function ft(t){return At(arguments,1).forEach(function(e){Mt(e,function(n,r){Ys(n)?t[r]=n.slice():Bn(n)?t[r]=ft({},Bn(t[r])?t[r]:{},n):t[r]=n})}),t}function ya(t,e){$e(e||qn(t),function(n){delete t[n]})}function Ye(t,e){$e(t,function(n){$e(e,function(r){n&&n.removeAttribute(r)})})}function K(t,e,n){Bn(e)?Mt(e,function(r,i){K(t,i,r)}):$e(t,function(r){Xs(n)||n===""?Ye(r,e):r.setAttribute(e,String(n))})}function en(t,e,n){var r=document.createElement(t);return e&&(yt(e)?Qe(r,e):K(r,e)),n&&lr(n,r),r}function qe(t,e,n){if(ur(n))return getComputedStyle(t)[e];Xs(n)||(t.style[e]=""+n)}function Gn(t,e){qe(t,"display",e)}function Pu(t){t.setActive&&t.setActive()||t.focus({preventScroll:!0})}function je(t,e){return t.getAttribute(e)}function va(t,e){return t&&t.classList.contains(e)}function Fe(t){return t.getBoundingClientRect()}function Vt(t){$e(t,function(e){e&&e.parentNode&&e.parentNode.removeChild(e)})}function Fu(t){return hr(new DOMParser().parseFromString(t,"text/html").body)}function Ze(t,e){t.preventDefault(),e&&(t.stopPropagation(),t.stopImmediatePropagation())}function Vu(t,e){return t&&t.querySelector(e)}function eo(t,e){return e?At(t.querySelectorAll(e)):[]}function tt(t,e){et(t,e,!1)}function vs(t){return t.timeStamp}function Rt(t){return yt(t)?t:t?t+"px":""}var fr="splide",to="data-"+fr;function On(t,e){if(!t)throw new Error("["+fr+"] "+(e||""))}var vt=Math.min,Qr=Math.max,Yr=Math.floor,zn=Math.ceil,xe=Math.abs;function Uu(t,e,n){return xe(t-e)<n}function qr(t,e,n,r){var i=vt(e,n),s=Qr(e,n);return r?i<t&&t<s:i<=t&&t<=s}function Wt(t,e,n){var r=vt(e,n),i=Qr(e,n);return vt(Qr(r,t),i)}function Es(t){return+(t>0)-+(t<0)}function ws(t,e){return $e(e,function(n){t=t.replace("%s",""+n)}),t}function no(t){return t<10?"0"+t:""+t}var Ea={};function Wh(t){return""+t+no(Ea[t]=(Ea[t]||0)+1)}function Bu(){var t=[];function e(o,a,u,c){i(o,a,function(l,h,f){var d="addEventListener"in l,g=d?l.removeEventListener.bind(l,h,u,c):l.removeListener.bind(l,u);d?l.addEventListener(h,u,c):l.addListener(u),t.push([l,h,f,u,g])})}function n(o,a,u){i(o,a,function(c,l,h){t=t.filter(function(f){return f[0]===c&&f[1]===l&&f[2]===h&&(!u||f[3]===u)?(f[4](),!1):!0})})}function r(o,a,u){var c,l=!0;return typeof CustomEvent=="function"?c=new CustomEvent(a,{bubbles:l,detail:u}):(c=document.createEvent("CustomEvent"),c.initCustomEvent(a,l,!1,u)),o.dispatchEvent(c),c}function i(o,a,u){$e(o,function(c){c&&$e(a,function(l){l.split(" ").forEach(function(h){var f=h.split(".");u(c,f[0],f[1])})})})}function s(){t.forEach(function(o){o[4]()}),ot(t)}return{bind:e,unbind:n,dispatch:r,destroy:s}}var jt="mounted",wa="ready",Et="move",dr="moved",$u="click",Qh="active",Yh="inactive",Xh="visible",Jh="hidden",ge="refresh",Me="updated",Kn="resize",ro="resized",Zh="drag",ef="dragging",tf="dragged",io="scroll",En="scrolled",nf="overflow",qu="destroy",rf="arrows:mounted",sf="arrows:updated",of="pagination:mounted",af="pagination:updated",ju="navigation:mounted",Gu="autoplay:play",uf="autoplay:playing",zu="autoplay:pause",Ku="lazyload:loaded",Hu="sk",Wu="sh",Xr="ei";function ae(t){var e=t?t.event.bus:document.createDocumentFragment(),n=Bu();function r(s,o){n.bind(e,cr(s).join(" "),function(a){o.apply(o,Ys(a.detail)?a.detail:[])})}function i(s){n.dispatch(e,s,At(arguments,1))}return t&&t.event.on(qu,n.destroy),jn(n,{bus:e,on:r,off:te(n.unbind,e),emit:i})}function vi(t,e,n,r){var i=Date.now,s,o=0,a,u=!0,c=0;function l(){if(!u){if(o=t?vt((i()-s)/t,1):1,n&&n(o),o>=1&&(e(),s=i(),r&&++c>=r))return f();a=pa(l)}}function h(w){w||g(),s=i()-(w?o*t:0),u=!1,a=pa(l)}function f(){u=!0}function d(){s=i(),o=0,n&&n(o)}function g(){a&&cancelAnimationFrame(a),o=0,a=0,u=!0}function m(w){t=w}function y(){return u}return{start:h,rewind:d,pause:f,cancel:g,set:m,isPaused:y}}function cf(t){var e=t;function n(i){e=i}function r(i){return Js(cr(i),e)}return{set:n,is:r}}function lf(t,e){var n=vi(e||0,t,null,1);return function(){n.isPaused()&&n.start()}}function hf(t,e,n){var r=t.state,i=n.breakpoints||{},s=n.reducedMotion||{},o=Bu(),a=[];function u(){var g=n.mediaQuery==="min";qn(i).sort(function(m,y){return g?+m-+y:+y-+m}).forEach(function(m){l(i[m],"("+(g?"min":"max")+"-width:"+m+"px)")}),l(s,ma),h()}function c(g){g&&o.destroy()}function l(g,m){var y=matchMedia(m);o.bind(y,"change",h),a.push([g,y])}function h(){var g=r.is(Wr),m=n.direction,y=a.reduce(function(w,v){return ft(w,v[1].matches?v[0]:{})},{});ya(n),d(y),n.destroy?t.destroy(n.destroy==="completely"):g?(c(!0),t.mount()):m!==n.direction&&t.refresh()}function f(g){matchMedia(ma).matches&&(g?ft(n,s):ya(n,qn(s)))}function d(g,m,y){ft(n,g),m&&ft(Object.getPrototypeOf(n),g),(y||!r.is(Jt))&&t.emit(Me,n)}return{setup:u,destroy:c,reduce:f,set:d}}var Ei="Arrow",wi=Ei+"Left",Ti=Ei+"Right",Qu=Ei+"Up",Yu=Ei+"Down",Ta="rtl",Ii="ttb",Ji={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[Qu,Ti],ArrowRight:[Yu,wi]};function ff(t,e,n){function r(s,o,a){a=a||n.direction;var u=a===Ta&&!o?1:a===Ii?0:-1;return Ji[s]&&Ji[s][u]||s.replace(/width|left|right/i,function(c,l){var h=Ji[c.toLowerCase()][u]||c;return l>0?h.charAt(0).toUpperCase()+h.slice(1):h})}function i(s){return s*(n.direction===Ta?1:-1)}return{resolve:r,orient:i}}var rt="role",tn="tabindex",df="disabled",ze="aria-",gr=ze+"controls",Xu=ze+"current",Ia=ze+"selected",Ue=ze+"label",so=ze+"labelledby",Ju=ze+"hidden",oo=ze+"orientation",Hn=ze+"roledescription",ba=ze+"live",Sa=ze+"busy",Aa=ze+"atomic",ao=[rt,tn,df,gr,Xu,Ue,so,Ju,oo,Hn],Je=fr+"__",Ct="is-",Zi=fr,Ca=Je+"track",gf=Je+"list",bi=Je+"slide",Zu=bi+"--clone",mf=bi+"__container",uo=Je+"arrows",Si=Je+"arrow",ec=Si+"--prev",tc=Si+"--next",Ai=Je+"pagination",nc=Ai+"__page",pf=Je+"progress",yf=pf+"__bar",vf=Je+"toggle",Ef=Je+"spinner",wf=Je+"sr",Tf=Ct+"initialized",Ut=Ct+"active",rc=Ct+"prev",ic=Ct+"next",Ts=Ct+"visible",Is=Ct+"loading",sc=Ct+"focus-in",oc=Ct+"overflow",If=[Ut,Ts,rc,ic,Is,sc,oc],bf={slide:bi,clone:Zu,arrows:uo,arrow:Si,prev:ec,next:tc,pagination:Ai,page:nc,spinner:Ef};function Sf(t,e){if(Ou(t.closest))return t.closest(e);for(var n=t;n&&n.nodeType===1&&!$n(n,e);)n=n.parentElement;return n}var Af=5,_a=200,ac="touchstart mousedown",es="touchmove mousemove",ts="touchend touchcancel mouseup click";function Cf(t,e,n){var r=ae(t),i=r.on,s=r.bind,o=t.root,a=n.i18n,u={},c=[],l=[],h=[],f,d,g;function m(){T(),P(),v()}function y(){i(ge,w),i(ge,m),i(Me,v),s(document,ac+" keydown",function(I){g=I.type==="keydown"},{capture:!0}),s(o,"focusin",function(){et(o,sc,!!g)})}function w(I){var x=ao.concat("style");ot(c),tt(o,l),tt(f,h),Ye([f,d],x),Ye(o,I?x:["style",Hn])}function v(){tt(o,l),tt(f,h),l=$(Zi),h=$(Ca),Qe(o,l),Qe(f,h),K(o,Ue,n.label),K(o,so,n.labelledby)}function T(){f=L("."+Ca),d=hr(f,"."+gf),On(f&&d,"A track/list element is missing."),$r(c,Mu(d,"."+bi+":not(."+Zu+")")),Mt({arrows:uo,pagination:Ai,prev:ec,next:tc,bar:yf,toggle:vf},function(I,x){u[x]=L("."+I)}),jn(u,{root:o,track:f,list:d,slides:c})}function P(){var I=o.id||Wh(fr),x=n.role;o.id=I,f.id=f.id||I+"-track",d.id=d.id||I+"-list",!je(o,rt)&&o.tagName!=="SECTION"&&x&&K(o,rt,x),K(o,Hn,a.carousel),K(d,rt,"presentation")}function L(I){var x=Vu(o,I);return x&&Sf(x,"."+Zi)===o?x:void 0}function $(I){return[I+"--"+n.type,I+"--"+n.direction,n.drag&&I+"--draggable",n.isNavigation&&I+"--nav",I===Zi&&Ut]}return jn(u,{setup:m,mount:y,destroy:w})}var on="slide",wn="loop",mr="fade";function _f(t,e,n,r){var i=ae(t),s=i.on,o=i.emit,a=i.bind,u=t.Components,c=t.root,l=t.options,h=l.isNavigation,f=l.updateOnMove,d=l.i18n,g=l.pagination,m=l.slideFocus,y=u.Direction.resolve,w=je(r,"style"),v=je(r,Ue),T=n>-1,P=hr(r,"."+mf),L;function $(){T||(r.id=c.id+"-slide"+no(e+1),K(r,rt,g?"tabpanel":"group"),K(r,Hn,d.slide),K(r,Ue,v||ws(d.slideLabel,[e+1,t.length]))),I()}function I(){a(r,"click",te(o,$u,j)),a(r,"keydown",te(o,Hu,j)),s([dr,Wu,En],A),s(ju,W),f&&s(Et,V)}function x(){L=!0,i.destroy(),tt(r,If),Ye(r,ao),K(r,"style",w),K(r,Ue,v||"")}function W(){var F=t.splides.map(function(S){var M=S.splide.Components.Slides.getAt(e);return M?M.slide.id:""}).join(" ");K(r,Ue,ws(d.slideX,(T?n:e)+1)),K(r,gr,F),K(r,rt,m?"button":""),m&&Ye(r,Hn)}function V(){L||A()}function A(){if(!L){var F=t.index;C(),N(),et(r,rc,e===F-1),et(r,ic,e===F+1)}}function C(){var F=H();F!==va(r,Ut)&&(et(r,Ut,F),K(r,Xu,h&&F||""),o(F?Qh:Yh,j))}function N(){var F=ce(),S=!F&&(!H()||T);if(t.state.is([vn,ar])||K(r,Ju,S||""),K(eo(r,l.focusableNodes||""),tn,S?-1:""),m&&K(r,tn,S?-1:0),F!==va(r,Ts)&&(et(r,Ts,F),o(F?Xh:Jh,j)),!F&&document.activeElement===r){var M=u.Slides.getAt(t.index);M&&Pu(M.slide)}}function z(F,S,M){qe(M&&P||r,F,S)}function H(){var F=t.index;return F===e||l.cloneStatus&&F===n}function ce(){if(t.is(mr))return H();var F=Fe(u.Elements.track),S=Fe(r),M=y("left",!0),X=y("right",!0);return Yr(F[M])<=zn(S[M])&&Yr(S[X])<=zn(F[X])}function oe(F,S){var M=xe(F-e);return!T&&(l.rewind||t.is(wn))&&(M=vt(M,t.length-M)),M<=S}var j={index:e,slideIndex:n,slide:r,container:P,isClone:T,mount:$,destroy:x,update:A,style:z,isWithin:oe};return j}function Df(t,e,n){var r=ae(t),i=r.on,s=r.emit,o=r.bind,a=e.Elements,u=a.slides,c=a.list,l=[];function h(){f(),i(ge,d),i(ge,f)}function f(){u.forEach(function(A,C){m(A,C,-1)})}function d(){L(function(A){A.destroy()}),ot(l)}function g(){L(function(A){A.update()})}function m(A,C,N){var z=_f(t,C,N,A);z.mount(),l.push(z),l.sort(function(H,ce){return H.index-ce.index})}function y(A){return A?$(function(C){return!C.isClone}):l}function w(A){var C=e.Controller,N=C.toIndex(A),z=C.hasFocus()?1:n.perPage;return $(function(H){return qr(H.index,N,N+z-1)})}function v(A){return $(A)[0]}function T(A,C){$e(A,function(N){if(yt(N)&&(N=Fu(N)),xu(N)){var z=u[C];z?Zs(N,z):lr(c,N),Qe(N,n.classes.slide),x(N,te(s,Kn))}}),s(ge)}function P(A){Vt($(A).map(function(C){return C.slide})),s(ge)}function L(A,C){y(C).forEach(A)}function $(A){return l.filter(Ou(A)?A:function(C){return yt(A)?$n(C.slide,A):Js(cr(A),C.index)})}function I(A,C,N){L(function(z){z.style(A,C,N)})}function x(A,C){var N=eo(A,"img"),z=N.length;z?N.forEach(function(H){o(H,"load error",function(){--z||C()})}):C()}function W(A){return A?u.length:l.length}function V(){return l.length>n.perPage}return{mount:h,destroy:d,update:g,register:m,get:y,getIn:w,getAt:v,add:T,remove:P,forEach:L,filter:$,style:I,getLength:W,isEnough:V}}function Nf(t,e,n){var r=ae(t),i=r.on,s=r.bind,o=r.emit,a=e.Slides,u=e.Direction.resolve,c=e.Elements,l=c.root,h=c.track,f=c.list,d=a.getAt,g=a.style,m,y,w;function v(){T(),s(window,"resize load",lf(te(o,Kn))),i([Me,ge],T),i(Kn,P)}function T(){m=n.direction===Ii,qe(l,"maxWidth",Rt(n.width)),qe(h,u("paddingLeft"),L(!1)),qe(h,u("paddingRight"),L(!0)),P(!0)}function P(j){var F=Fe(l);(j||y.width!==F.width||y.height!==F.height)&&(qe(h,"height",$()),g(u("marginRight"),Rt(n.gap)),g("width",x()),g("height",W(),!0),y=F,o(ro),w!==(w=oe())&&(et(l,oc,w),o(nf,w)))}function L(j){var F=n.padding,S=u(j?"right":"left");return F&&Rt(F[S]||(Bn(F)?0:F))||"0px"}function $(){var j="";return m&&(j=I(),On(j,"height or heightRatio is missing."),j="calc("+j+" - "+L(!1)+" - "+L(!0)+")"),j}function I(){return Rt(n.height||Fe(f).width*n.heightRatio)}function x(){return n.autoWidth?null:Rt(n.fixedWidth)||(m?"":V())}function W(){return Rt(n.fixedHeight)||(m?n.autoHeight?null:V():I())}function V(){var j=Rt(n.gap);return"calc((100%"+(j&&" + "+j)+")/"+(n.perPage||1)+(j&&" - "+j)+")"}function A(){return Fe(f)[u("width")]}function C(j,F){var S=d(j||0);return S?Fe(S.slide)[u("width")]+(F?0:H()):0}function N(j,F){var S=d(j);if(S){var M=Fe(S.slide)[u("right")],X=Fe(f)[u("left")];return xe(M-X)+(F?0:H())}return 0}function z(j){return N(t.length-1)-N(0)+C(0,j)}function H(){var j=d(0);return j&&parseFloat(qe(j.slide,u("marginRight")))||0}function ce(j){return parseFloat(qe(h,u("padding"+(j?"Right":"Left"))))||0}function oe(){return t.is(mr)||z(!0)>A()}return{mount:v,resize:P,listSize:A,slideSize:C,sliderSize:z,totalSize:N,getPadding:ce,isOverflow:oe}}var Rf=2;function Lf(t,e,n){var r=ae(t),i=r.on,s=e.Elements,o=e.Slides,a=e.Direction.resolve,u=[],c;function l(){i(ge,h),i([Me,Kn],d),(c=y())&&(g(c),e.Layout.resize(!0))}function h(){f(),l()}function f(){Vt(u),ot(u),r.destroy()}function d(){var w=y();c!==w&&(c<w||!w)&&r.emit(ge)}function g(w){var v=o.get().slice(),T=v.length;if(T){for(;v.length<w;)$r(v,v);$r(v.slice(-w),v.slice(0,w)).forEach(function(P,L){var $=L<w,I=m(P.slide,L);$?Zs(I,v[0].slide):lr(s.list,I),$r(u,I),o.register(I,L-w+($?0:T),P.index)})}}function m(w,v){var T=w.cloneNode(!0);return Qe(T,n.classes.clone),T.id=t.root.id+"-clone"+no(v+1),T}function y(){var w=n.clones;if(!t.is(wn))w=0;else if(ur(w)){var v=n[a("fixedWidth")]&&e.Layout.slideSize(0),T=v&&zn(Fe(s.track)[a("width")]/v);w=T||n[a("autoWidth")]&&t.length||n.perPage*Rf}return w}return{mount:l,destroy:f}}function kf(t,e,n){var r=ae(t),i=r.on,s=r.emit,o=t.state.set,a=e.Layout,u=a.slideSize,c=a.getPadding,l=a.totalSize,h=a.listSize,f=a.sliderSize,d=e.Direction,g=d.resolve,m=d.orient,y=e.Elements,w=y.list,v=y.track,T;function P(){T=e.Transition,i([jt,ro,Me,ge],L)}function L(){e.Controller.isBusy()||(e.Scroll.cancel(),I(t.index),e.Slides.update())}function $(S,M,X,Se){S!==M&&j(S>X)&&(A(),x(V(z(),S>X),!0)),o(vn),s(Et,M,X,S),T.start(M,function(){o(sn),s(dr,M,X,S),Se&&Se()})}function I(S){x(N(S,!0))}function x(S,M){if(!t.is(mr)){var X=M?S:W(S);qe(w,"transform","translate"+g("X")+"("+X+"px)"),S!==X&&s(Wu)}}function W(S){if(t.is(wn)){var M=C(S),X=M>e.Controller.getEnd(),Se=M<0;(Se||X)&&(S=V(S,X))}return S}function V(S,M){var X=S-oe(M),Se=f();return S-=m(Se*(zn(xe(X)/Se)||1))*(M?1:-1),S}function A(){x(z(),!0),T.cancel()}function C(S){for(var M=e.Slides.get(),X=0,Se=1/0,we=0;we<M.length;we++){var ht=M[we].index,b=xe(N(ht,!0)-S);if(b<=Se)Se=b,X=ht;else break}return X}function N(S,M){var X=m(l(S-1)-ce(S));return M?H(X):X}function z(){var S=g("left");return Fe(w)[S]-Fe(v)[S]+m(c(!1))}function H(S){return n.trimSpace&&t.is(on)&&(S=Wt(S,0,m(f(!0)-h()))),S}function ce(S){var M=n.focus;return M==="center"?(h()-u(S,!0))/2:+M*u(S)||0}function oe(S){return N(S?e.Controller.getEnd():0,!!n.trimSpace)}function j(S){var M=m(V(z(),S));return S?M>=0:M<=w[g("scrollWidth")]-Fe(v)[g("width")]}function F(S,M){M=ur(M)?z():M;var X=S!==!0&&m(M)<m(oe(!1)),Se=S!==!1&&m(M)>m(oe(!0));return X||Se}return{mount:P,move:$,jump:I,translate:x,shift:V,cancel:A,toIndex:C,toPosition:N,getPosition:z,getLimit:oe,exceededLimit:F,reposition:L}}function Of(t,e,n){var r=ae(t),i=r.on,s=r.emit,o=e.Move,a=o.getPosition,u=o.getLimit,c=o.toPosition,l=e.Slides,h=l.isEnough,f=l.getLength,d=n.omitEnd,g=t.is(wn),m=t.is(on),y=te(z,!1),w=te(z,!0),v=n.start||0,T,P=v,L,$,I;function x(){W(),i([Me,ge,Xr],W),i(ro,V)}function W(){L=f(!0),$=n.perMove,I=n.perPage,T=j();var b=Wt(v,0,d?T:L-1);b!==v&&(v=b,o.reposition())}function V(){T!==j()&&s(Xr)}function A(b,ee,Oe){if(!ht()){var le=N(b),Le=oe(le);Le>-1&&(ee||Le!==v)&&(X(Le),o.move(le,Le,P,Oe))}}function C(b,ee,Oe,le){e.Scroll.scroll(b,ee,Oe,function(){var Le=oe(o.toIndex(a()));X(d?vt(Le,T):Le),le&&le()})}function N(b){var ee=v;if(yt(b)){var Oe=b.match(/([+\-<>])(\d+)?/)||[],le=Oe[1],Le=Oe[2];le==="+"||le==="-"?ee=H(v+ +(""+le+(+Le||1)),v):le===">"?ee=Le?F(+Le):y(!0):le==="<"&&(ee=w(!0))}else ee=g?b:Wt(b,0,T);return ee}function z(b,ee){var Oe=$||(we()?1:I),le=H(v+Oe*(b?-1:1),v,!($||we()));return le===-1&&m&&!Uu(a(),u(!b),1)?b?0:T:ee?le:oe(le)}function H(b,ee,Oe){if(h()||we()){var le=ce(b);le!==b&&(ee=b,b=le,Oe=!1),b<0||b>T?!$&&(qr(0,b,ee,!0)||qr(T,ee,b,!0))?b=F(S(b)):g?b=Oe?b<0?-(L%I||I):L:b:n.rewind?b=b<0?T:0:b=-1:Oe&&b!==ee&&(b=F(S(ee)+(b<ee?-1:1)))}else b=-1;return b}function ce(b){if(m&&n.trimSpace==="move"&&b!==v)for(var ee=a();ee===c(b,!0)&&qr(b,0,t.length-1,!n.rewind);)b<v?--b:++b;return b}function oe(b){return g?(b+L)%L||0:b}function j(){for(var b=L-(we()||g&&$?1:I);d&&b-- >0;)if(c(L-1,!0)!==c(b,!0)){b++;break}return Wt(b,0,L-1)}function F(b){return Wt(we()?b:I*b,0,T)}function S(b){return we()?vt(b,T):Yr((b>=T?L-1:b)/I)}function M(b){var ee=o.toIndex(b);return m?Wt(ee,0,T):ee}function X(b){b!==v&&(P=v,v=b)}function Se(b){return b?P:v}function we(){return!ur(n.focus)||n.isNavigation}function ht(){return t.state.is([vn,ar])&&!!n.waitForTransition}return{mount:x,go:A,scroll:C,getNext:y,getPrev:w,getAdjacent:z,getEnd:j,setIndex:X,getIndex:Se,toIndex:F,toPage:S,toDest:M,hasFocus:we,isBusy:ht}}var xf="http://www.w3.org/2000/svg",Mf="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",kr=40;function Pf(t,e,n){var r=ae(t),i=r.on,s=r.bind,o=r.emit,a=n.classes,u=n.i18n,c=e.Elements,l=e.Controller,h=c.arrows,f=c.track,d=h,g=c.prev,m=c.next,y,w,v={};function T(){L(),i(Me,P)}function P(){$(),T()}function L(){var C=n.arrows;C&&!(g&&m)&&W(),g&&m&&(jn(v,{prev:g,next:m}),Gn(d,C?"":"none"),Qe(d,w=uo+"--"+n.direction),C&&(I(),A(),K([g,m],gr,f.id),o(rf,g,m)))}function $(){r.destroy(),tt(d,w),y?(Vt(h?[g,m]:d),g=m=null):Ye([g,m],ao)}function I(){i([jt,dr,ge,En,Xr],A),s(m,"click",te(x,">")),s(g,"click",te(x,"<"))}function x(C){l.go(C,!0)}function W(){d=h||en("div",a.arrows),g=V(!0),m=V(!1),y=!0,lr(d,[g,m]),!h&&Zs(d,f)}function V(C){var N='<button class="'+a.arrow+" "+(C?a.prev:a.next)+'" type="button"><svg xmlns="'+xf+'" viewBox="0 0 '+kr+" "+kr+'" width="'+kr+'" height="'+kr+'" focusable="false"><path d="'+(n.arrowPath||Mf)+'" />';return Fu(N)}function A(){if(g&&m){var C=t.index,N=l.getPrev(),z=l.getNext(),H=N>-1&&C<N?u.last:u.prev,ce=z>-1&&C>z?u.first:u.next;g.disabled=N<0,m.disabled=z<0,K(g,Ue,H),K(m,Ue,ce),o(sf,g,m,N,z)}}return{arrows:v,mount:T,destroy:$,update:A}}var Ff=to+"-interval";function Vf(t,e,n){var r=ae(t),i=r.on,s=r.bind,o=r.emit,a=vi(n.interval,t.go.bind(t,">"),I),u=a.isPaused,c=e.Elements,l=e.Elements,h=l.root,f=l.toggle,d=n.autoplay,g,m,y=d==="pause";function w(){d&&(v(),f&&K(f,gr,c.track.id),y||T(),$())}function v(){n.pauseOnHover&&s(h,"mouseenter mouseleave",function(W){g=W.type==="mouseenter",L()}),n.pauseOnFocus&&s(h,"focusin focusout",function(W){m=W.type==="focusin",L()}),f&&s(f,"click",function(){y?T():P(!0)}),i([Et,io,ge],a.rewind),i(Et,x)}function T(){u()&&e.Slides.isEnough()&&(a.start(!n.resetProgress),m=g=y=!1,$(),o(Gu))}function P(W){W===void 0&&(W=!0),y=!!W,$(),u()||(a.pause(),o(zu))}function L(){y||(g||m?P(!1):T())}function $(){f&&(et(f,Ut,!y),K(f,Ue,n.i18n[y?"play":"pause"]))}function I(W){var V=c.bar;V&&qe(V,"width",W*100+"%"),o(uf,W)}function x(W){var V=e.Slides.getAt(W);a.set(V&&+je(V.slide,Ff)||n.interval)}return{mount:w,destroy:a.cancel,play:T,pause:P,isPaused:u}}function Uf(t,e,n){var r=ae(t),i=r.on;function s(){n.cover&&(i(Ku,te(a,!0)),i([jt,Me,ge],te(o,!0)))}function o(u){e.Slides.forEach(function(c){var l=hr(c.container||c.slide,"img");l&&l.src&&a(u,l,c)})}function a(u,c,l){l.style("background",u?'center/cover no-repeat url("'+c.src+'")':"",!0),Gn(c,u?"none":"")}return{mount:s,destroy:te(o,!1)}}var Bf=10,$f=600,qf=.6,jf=1.5,Gf=800;function zf(t,e,n){var r=ae(t),i=r.on,s=r.emit,o=t.state.set,a=e.Move,u=a.getPosition,c=a.getLimit,l=a.exceededLimit,h=a.translate,f=t.is(on),d,g,m=1;function y(){i(Et,P),i([Me,ge],L)}function w(I,x,W,V,A){var C=u();if(P(),W&&(!f||!l())){var N=e.Layout.sliderSize(),z=Es(I)*N*Yr(xe(I)/N)||0;I=a.toPosition(e.Controller.toDest(I%N))+z}var H=Uu(C,I,1);m=1,x=H?0:x||Qr(xe(I-C)/jf,Gf),g=V,d=vi(x,v,te(T,C,I,A),1),o(ar),s(io),d.start()}function v(){o(sn),g&&g(),s(En)}function T(I,x,W,V){var A=u(),C=I+(x-I)*$(V),N=(C-A)*m;h(A+N),f&&!W&&l()&&(m*=qf,xe(N)<Bf&&w(c(l(!0)),$f,!1,g,!0))}function P(){d&&d.cancel()}function L(){d&&!d.isPaused()&&(P(),v())}function $(I){var x=n.easingFunc;return x?x(I):1-Math.pow(1-I,4)}return{mount:y,destroy:P,scroll:w,cancel:L}}var Qt={passive:!1,capture:!0};function Kf(t,e,n){var r=ae(t),i=r.on,s=r.emit,o=r.bind,a=r.unbind,u=t.state,c=e.Move,l=e.Scroll,h=e.Controller,f=e.Elements.track,d=e.Media.reduce,g=e.Direction,m=g.resolve,y=g.orient,w=c.getPosition,v=c.exceededLimit,T,P,L,$,I,x=!1,W,V,A;function C(){o(f,es,ys,Qt),o(f,ts,ys,Qt),o(f,ac,z,Qt),o(f,"click",oe,{capture:!0}),o(f,"dragstart",Ze),i([jt,Me],N)}function N(){var R=n.drag;da(!R),$=R==="free"}function z(R){if(W=!1,!V){var ie=Le(R);le(R.target)&&(ie||!R.button)&&(h.isBusy()?Ze(R,!0):(A=ie?f:window,I=u.is([vn,ar]),L=null,o(A,es,H,Qt),o(A,ts,ce,Qt),c.cancel(),l.cancel(),j(R)))}}function H(R){if(u.is(Br)||(u.set(Br),s(Zh)),R.cancelable)if(I){c.translate(T+Oe(we(R)));var ie=ht(R)>_a,Nt=x!==(x=v());(ie||Nt)&&j(R),W=!0,s(ef),Ze(R)}else M(R)&&(I=S(R),Ze(R))}function ce(R){u.is(Br)&&(u.set(sn),s(tf)),I&&(F(R),Ze(R)),a(A,es,H),a(A,ts,ce),I=!1}function oe(R){!V&&W&&Ze(R,!0)}function j(R){L=P,P=R,T=w()}function F(R){var ie=X(R),Nt=Se(ie),Dn=n.rewind&&n.rewindByDrag;d(!1),$?h.scroll(Nt,0,n.snap):t.is(mr)?h.go(y(Es(ie))<0?Dn?"<":"-":Dn?">":"+"):t.is(on)&&x&&Dn?h.go(v(!0)?">":"<"):h.go(h.toDest(Nt),!0),d(!0)}function S(R){var ie=n.dragMinThreshold,Nt=Bn(ie),Dn=Nt&&ie.mouse||0,Gh=(Nt?ie.touch:+ie)||10;return xe(we(R))>(Le(R)?Gh:Dn)}function M(R){return xe(we(R))>xe(we(R,!0))}function X(R){if(t.is(wn)||!x){var ie=ht(R);if(ie&&ie<_a)return we(R)/ie}return 0}function Se(R){return w()+Es(R)*vt(xe(R)*(n.flickPower||600),$?1/0:e.Layout.listSize()*(n.flickMaxPages||1))}function we(R,ie){return ee(R,ie)-ee(b(R),ie)}function ht(R){return vs(R)-vs(b(R))}function b(R){return P===R&&L||P}function ee(R,ie){return(Le(R)?R.changedTouches[0]:R)["page"+m(ie?"Y":"X")]}function Oe(R){return R/(x&&t.is(on)?Af:1)}function le(R){var ie=n.noDrag;return!$n(R,"."+nc+", ."+Si)&&(!ie||!$n(R,ie))}function Le(R){return typeof TouchEvent<"u"&&R instanceof TouchEvent}function jh(){return I}function da(R){V=R}return{mount:C,disable:da,isDragging:jh}}var Hf={Spacebar:" ",Right:Ti,Left:wi,Up:Qu,Down:Yu};function co(t){return t=yt(t)?t:t.key,Hf[t]||t}var Da="keydown";function Wf(t,e,n){var r=ae(t),i=r.on,s=r.bind,o=r.unbind,a=t.root,u=e.Direction.resolve,c,l;function h(){f(),i(Me,d),i(Me,f),i(Et,m)}function f(){var w=n.keyboard;w&&(c=w==="global"?window:a,s(c,Da,y))}function d(){o(c,Da)}function g(w){l=w}function m(){var w=l;l=!0,ku(function(){l=w})}function y(w){if(!l){var v=co(w);v===u(wi)?t.go("<"):v===u(Ti)&&t.go(">")}}return{mount:h,destroy:d,disable:g}}var xn=to+"-lazy",jr=xn+"-srcset",Qf="["+xn+"], ["+jr+"]";function Yf(t,e,n){var r=ae(t),i=r.on,s=r.off,o=r.bind,a=r.emit,u=n.lazyLoad==="sequential",c=[dr,En],l=[];function h(){n.lazyLoad&&(f(),i(ge,f))}function f(){ot(l),d(),u?w():(s(c),i(c,g),g())}function d(){e.Slides.forEach(function(v){eo(v.slide,Qf).forEach(function(T){var P=je(T,xn),L=je(T,jr);if(P!==T.src||L!==T.srcset){var $=n.classes.spinner,I=T.parentElement,x=hr(I,"."+$)||en("span",$,I);l.push([T,v,x]),T.src||Gn(T,"none")}})})}function g(){l=l.filter(function(v){var T=n.perPage*((n.preloadPages||1)+1)-1;return v[1].isWithin(t.index,T)?m(v):!0}),l.length||s(c)}function m(v){var T=v[0];Qe(v[1].slide,Is),o(T,"load error",te(y,v)),K(T,"src",je(T,xn)),K(T,"srcset",je(T,jr)),Ye(T,xn),Ye(T,jr)}function y(v,T){var P=v[0],L=v[1];tt(L.slide,Is),T.type!=="error"&&(Vt(v[2]),Gn(P,""),a(Ku,P,L),a(Kn)),u&&w()}function w(){l.length&&m(l.shift())}return{mount:h,destroy:te(ot,l),check:g}}function Xf(t,e,n){var r=ae(t),i=r.on,s=r.emit,o=r.bind,a=e.Slides,u=e.Elements,c=e.Controller,l=c.hasFocus,h=c.getIndex,f=c.go,d=e.Direction.resolve,g=u.pagination,m=[],y,w;function v(){T(),i([Me,ge,Xr],v);var V=n.pagination;g&&Gn(g,V?"":"none"),V&&(i([Et,io,En],W),P(),W(),s(of,{list:y,items:m},x(t.index)))}function T(){y&&(Vt(g?At(y.children):y),tt(y,w),ot(m),y=null),r.destroy()}function P(){var V=t.length,A=n.classes,C=n.i18n,N=n.perPage,z=l()?c.getEnd()+1:zn(V/N);y=g||en("ul",A.pagination,u.track.parentElement),Qe(y,w=Ai+"--"+I()),K(y,rt,"tablist"),K(y,Ue,C.select),K(y,oo,I()===Ii?"vertical":"");for(var H=0;H<z;H++){var ce=en("li",null,y),oe=en("button",{class:A.page,type:"button"},ce),j=a.getIn(H).map(function(S){return S.slide.id}),F=!l()&&N>1?C.pageX:C.slideX;o(oe,"click",te(L,H)),n.paginationKeyboard&&o(oe,"keydown",te($,H)),K(ce,rt,"presentation"),K(oe,rt,"tab"),K(oe,gr,j.join(" ")),K(oe,Ue,ws(F,H+1)),K(oe,tn,-1),m.push({li:ce,button:oe,page:H})}}function L(V){f(">"+V,!0)}function $(V,A){var C=m.length,N=co(A),z=I(),H=-1;N===d(Ti,!1,z)?H=++V%C:N===d(wi,!1,z)?H=(--V+C)%C:N==="Home"?H=0:N==="End"&&(H=C-1);var ce=m[H];ce&&(Pu(ce.button),f(">"+H),Ze(A,!0))}function I(){return n.paginationDirection||n.direction}function x(V){return m[c.toPage(V)]}function W(){var V=x(h(!0)),A=x(h());if(V){var C=V.button;tt(C,Ut),Ye(C,Ia),K(C,tn,-1)}if(A){var N=A.button;Qe(N,Ut),K(N,Ia,!0),K(N,tn,"")}s(af,{list:y,items:m},V,A)}return{items:m,mount:v,destroy:T,getAt:x,update:W}}var Jf=[" ","Enter"];function Zf(t,e,n){var r=n.isNavigation,i=n.slideFocus,s=[];function o(){t.splides.forEach(function(g){g.isParent||(c(t,g.splide),c(g.splide,t))}),r&&l()}function a(){s.forEach(function(g){g.destroy()}),ot(s)}function u(){a(),o()}function c(g,m){var y=ae(g);y.on(Et,function(w,v,T){m.go(m.is(wn)?T:w)}),s.push(y)}function l(){var g=ae(t),m=g.on;m($u,f),m(Hu,d),m([jt,Me],h),s.push(g),g.emit(ju,t.splides)}function h(){K(e.Elements.list,oo,n.direction===Ii?"vertical":"")}function f(g){t.go(g.index)}function d(g,m){Js(Jf,co(m))&&(f(g),Ze(m))}return{setup:te(e.Media.set,{slideFocus:ur(i)?r:i},!0),mount:o,destroy:a,remount:u}}function ed(t,e,n){var r=ae(t),i=r.bind,s=0;function o(){n.wheel&&i(e.Elements.track,"wheel",a,Qt)}function a(c){if(c.cancelable){var l=c.deltaY,h=l<0,f=vs(c),d=n.wheelMinThreshold||0,g=n.wheelSleep||0;xe(l)>d&&f-s>g&&(t.go(h?"<":">"),s=f),u(h)&&Ze(c)}}function u(c){return!n.releaseWheel||t.state.is(vn)||e.Controller.getAdjacent(c)!==-1}return{mount:o}}var td=90;function nd(t,e,n){var r=ae(t),i=r.on,s=e.Elements.track,o=n.live&&!n.isNavigation,a=en("span",wf),u=vi(td,te(l,!1));function c(){o&&(f(!e.Autoplay.isPaused()),K(s,Aa,!0),a.textContent="…",i(Gu,te(f,!0)),i(zu,te(f,!1)),i([dr,En],te(l,!0)))}function l(d){K(s,Sa,d),d?(lr(s,a),u.start()):(Vt(a),u.cancel())}function h(){Ye(s,[ba,Aa,Sa]),Vt(a)}function f(d){o&&K(s,ba,d?"off":"polite")}return{mount:c,disable:f,destroy:h}}var rd=Object.freeze({__proto__:null,Media:hf,Direction:ff,Elements:Cf,Slides:Df,Layout:Nf,Clones:Lf,Move:kf,Controller:Of,Arrows:Pf,Autoplay:Vf,Cover:Uf,Scroll:zf,Drag:Kf,Keyboard:Wf,LazyLoad:Yf,Pagination:Xf,Sync:Zf,Wheel:ed,Live:nd}),id={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},sd={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:bf,i18n:id,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function od(t,e,n){var r=e.Slides;function i(){ae(t).on([jt,ge],s)}function s(){r.forEach(function(a){a.style("transform","translateX(-"+100*a.index+"%)")})}function o(a,u){r.style("transition","opacity "+n.speed+"ms "+n.easing),ku(u)}return{mount:i,start:o,cancel:ys}}function ad(t,e,n){var r=e.Move,i=e.Controller,s=e.Scroll,o=e.Elements.list,a=te(qe,o,"transition"),u;function c(){ae(t).bind(o,"transitionend",function(d){d.target===o&&u&&(h(),u())})}function l(d,g){var m=r.toPosition(d,!0),y=r.getPosition(),w=f(d);xe(m-y)>=1&&w>=1?n.useScroll?s.scroll(m,w,!1,g):(a("transform "+w+"ms "+n.easing),r.translate(m,!0),u=g):(r.jump(d),g())}function h(){a(""),s.cancel()}function f(d){var g=n.rewindSpeed;if(t.is(on)&&g){var m=i.getIndex(!0),y=i.getEnd();if(m===0&&d>=y||m>=y&&d===0)return g}return n.speed}return{mount:c,start:l,cancel:h}}var ud=function(){function t(n,r){this.event=ae(),this.Components={},this.state=cf(Jt),this.splides=[],this._o={},this._E={};var i=yt(n)?Vu(document,n):n;On(i,i+" is invalid."),this.root=i,r=ft({label:je(i,Ue)||"",labelledby:je(i,so)||""},sd,t.defaults,r||{});try{ft(r,JSON.parse(je(i,to)))}catch{On(!1,"Invalid JSON")}this._o=Object.create(ft({},r))}var e=t.prototype;return e.mount=function(r,i){var s=this,o=this.state,a=this.Components;On(o.is([Jt,Wr]),"Already mounted!"),o.set(Jt),this._C=a,this._T=i||this._T||(this.is(mr)?od:ad),this._E=r||this._E;var u=jn({},rd,this._E,{Transition:this._T});return Mt(u,function(c,l){var h=c(s,a,s._o);a[l]=h,h.setup&&h.setup()}),Mt(a,function(c){c.mount&&c.mount()}),this.emit(jt),Qe(this.root,Tf),o.set(sn),this.emit(wa),this},e.sync=function(r){return this.splides.push({splide:r}),r.splides.push({splide:this,isParent:!0}),this.state.is(sn)&&(this._C.Sync.remount(),r.Components.Sync.remount()),this},e.go=function(r){return this._C.Controller.go(r),this},e.on=function(r,i){return this.event.on(r,i),this},e.off=function(r){return this.event.off(r),this},e.emit=function(r){var i;return(i=this.event).emit.apply(i,[r].concat(At(arguments,1))),this},e.add=function(r,i){return this._C.Slides.add(r,i),this},e.remove=function(r){return this._C.Slides.remove(r),this},e.is=function(r){return this._o.type===r},e.refresh=function(){return this.emit(ge),this},e.destroy=function(r){r===void 0&&(r=!0);var i=this.event,s=this.state;return s.is(Jt)?ae(this).on(wa,this.destroy.bind(this,r)):(Mt(this._C,function(o){o.destroy&&o.destroy(r)},!0),i.emit(qu),i.destroy(),r&&ot(this.splides),s.set(Wr)),this},zh(t,[{key:"options",get:function(){return this._o},set:function(r){this._C.Media.set(r,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),t}(),lo=ud;lo.defaults={};lo.STATES=Hh;class cd{constructor(e){this.$nav=document.getElementById(e.navElement),this.activateNavStyle()}activateNavStyle(){const e=this.$nav.getElementsByTagName("a"),n=window.location.href;let r=!0;for(let i=0;i<e.length;i++){const s=e[i].dataset.page;n.indexOf(s)!==-1&&(e[i].className+=" is-active",r=!1)}r&&(e[0].className+=" is-active")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ld=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},cc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;u||(d=64,o||(f=64)),r.push(n[l],n[h],n[f],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(uc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ld(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw Error();const f=s<<2|a>>4;if(r.push(f),c!==64){const d=a<<4&240|c>>2;if(r.push(d),h!==64){const g=c<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},hd=function(t){const e=uc(t);return cc.encodeByteArray(e,!0)},Jr=function(t){return hd(t).replace(/\./g,"")},fd=function(t){try{return cc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Zr(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!dd(n)||(t[n]=Zr(t[n],e[n]));return t}function dd(t){return t!=="__proto__"}function gd(){return typeof self=="object"&&self.self===self}function md(){try{return typeof indexedDB=="object"}catch{return!1}}function pd(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function yd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd=()=>yd().__FIREBASE_DEFAULTS__,Ed=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},wd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&fd(t[1]);return e&&JSON.parse(e)},lc=()=>{try{return vd()||Ed()||wd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Td=t=>{var e,n;return(n=(e=lc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Id=t=>{const e=Td(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},bd=()=>{var t;return(t=lc())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Jr(JSON.stringify(n)),Jr(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd="FirebaseError";class Gt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Cd,Object.setPrototypeOf(this,Gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ci.prototype.create)}}class Ci{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?_d(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Gt(i,a,r)}}function _d(t,e){return t.replace(Dd,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Dd=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function bs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ra(s)&&Ra(o)){if(!bs(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ra(t){return t!==null&&typeof t=="object"}function Nd(t,e){const n=new Rd(t,e);return n.subscribe.bind(n)}class Rd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ld(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ns),i.error===void 0&&(i.error=ns),i.complete===void 0&&(i.complete=ns);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ld(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ns(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(t){return t&&t._delegate?t._delegate:t}class un{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Sd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xd(e))try{this.getOrInitializeService({instanceIdentifier:Lt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Lt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Lt){return this.instances.has(e)}getOptions(e=Lt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Od(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Lt){return this.component?this.component.multipleInstances?e:Lt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Od(t){return t===Lt?void 0:t}function xd(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new kd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=[];var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const hc={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},Pd=J.INFO,Fd={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},Vd=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Fd[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fo{constructor(e){this.name=e,this._logLevel=Pd,this._logHandler=Vd,this._userLogHandler=null,ho.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}function Ud(t){ho.forEach(e=>{e.setLogLevel(t)})}function Bd(t,e){for(const n of ho){let r=null;e&&e.level&&(r=hc[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r??i.logLevel)&&t({level:J[s].toLowerCase(),message:a,args:o,type:i.name})}}}const $d=(t,e)=>e.some(n=>t instanceof n);let La,ka;function qd(){return La||(La=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jd(){return ka||(ka=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fc=new WeakMap,Ss=new WeakMap,dc=new WeakMap,rs=new WeakMap,go=new WeakMap;function Gd(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(dt(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&fc.set(n,t)}).catch(()=>{}),go.set(e,t),e}function zd(t){if(Ss.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ss.set(t,e)}let As={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ss.get(t);if(e==="objectStoreNames")return t.objectStoreNames||dc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Kd(t){As=t(As)}function Hd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(is(this),e,...n);return dc.set(r,e.sort?e.sort():[e]),dt(r)}:jd().includes(t)?function(...e){return t.apply(is(this),e),dt(fc.get(this))}:function(...e){return dt(t.apply(is(this),e))}}function Wd(t){return typeof t=="function"?Hd(t):(t instanceof IDBTransaction&&zd(t),$d(t,qd())?new Proxy(t,As):t)}function dt(t){if(t instanceof IDBRequest)return Gd(t);if(rs.has(t))return rs.get(t);const e=Wd(t);return e!==t&&(rs.set(t,e),go.set(e,t)),e}const is=t=>go.get(t);function Qd(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=dt(o);return r&&o.addEventListener("upgradeneeded",u=>{r(dt(o.result),u.oldVersion,u.newVersion,dt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Yd=["get","getKey","getAll","getAllKeys","count"],Xd=["put","add","delete","clear"],ss=new Map;function Oa(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ss.get(e))return ss.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Xd.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Yd.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return ss.set(e,s),s}Kd(t=>({...t,get:(e,n,r)=>Oa(e,n)||t.get(e,n,r),has:(e,n)=>!!Oa(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Zd(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Zd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cs="@firebase/app",xa="0.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt=new fo("@firebase/app"),eg="@firebase/app-compat",tg="@firebase/analytics-compat",ng="@firebase/analytics",rg="@firebase/app-check-compat",ig="@firebase/app-check",sg="@firebase/auth",og="@firebase/auth-compat",ag="@firebase/database",ug="@firebase/database-compat",cg="@firebase/functions",lg="@firebase/functions-compat",hg="@firebase/installations",fg="@firebase/installations-compat",dg="@firebase/messaging",gg="@firebase/messaging-compat",mg="@firebase/performance",pg="@firebase/performance-compat",yg="@firebase/remote-config",vg="@firebase/remote-config-compat",Eg="@firebase/storage",wg="@firebase/storage-compat",Tg="@firebase/firestore",Ig="@firebase/firestore-compat",bg="firebase",Sg="9.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="[DEFAULT]",Ag={[Cs]:"fire-core",[eg]:"fire-core-compat",[ng]:"fire-analytics",[tg]:"fire-analytics-compat",[ig]:"fire-app-check",[rg]:"fire-app-check-compat",[sg]:"fire-auth",[og]:"fire-auth-compat",[ag]:"fire-rtdb",[ug]:"fire-rtdb-compat",[cg]:"fire-fn",[lg]:"fire-fn-compat",[hg]:"fire-iid",[fg]:"fire-iid-compat",[dg]:"fire-fcm",[gg]:"fire-fcm-compat",[mg]:"fire-perf",[pg]:"fire-perf-compat",[yg]:"fire-rc",[vg]:"fire-rc-compat",[Eg]:"fire-gcs",[wg]:"fire-gcs-compat",[Tg]:"fire-fst",[Ig]:"fire-fst-compat","fire-js":"fire-js",[bg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt=new Map,Wn=new Map;function ei(t,e){try{t.container.addComponent(e)}catch(n){Bt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gc(t,e){t.container.addOrOverwriteComponent(e)}function cn(t){const e=t.name;if(Wn.has(e))return Bt.debug(`There were multiple attempts to register component ${e}.`),!1;Wn.set(e,t);for(const n of Tt.values())ei(n,t);return!0}function mo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Cg(t,e,n=wt){mo(t,e).clearInstance(n)}function _g(){Wn.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},it=new Ci("app","Firebase",Dg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ng=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw it.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po=Sg;function yo(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:wt,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw it.create("bad-app-name",{appName:String(i)});if(n||(n=bd()),!n)throw it.create("no-options");const s=Tt.get(i);if(s){if(bs(n,s.options)&&bs(r,s.config))return s;throw it.create("duplicate-app",{appName:i})}const o=new Md(i);for(const u of Wn.values())o.addComponent(u);const a=new Ng(n,r,o);return Tt.set(i,a),a}function mc(t=wt){const e=Tt.get(t);if(!e&&t===wt)return yo();if(!e)throw it.create("no-app",{appName:t});return e}function Rg(){return Array.from(Tt.values())}async function pc(t){const e=t.name;Tt.has(e)&&(Tt.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function gt(t,e,n){var r;let i=(r=Ag[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bt.warn(a.join(" "));return}cn(new un(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function yc(t,e){if(t!==null&&typeof t!="function")throw it.create("invalid-log-argument");Bd(t,e)}function vc(t){Ud(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg="firebase-heartbeat-database",kg=1,Qn="firebase-heartbeat-store";let os=null;function Ec(){return os||(os=Qd(Lg,kg,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Qn)}}}).catch(t=>{throw it.create("idb-open",{originalErrorMessage:t.message})})),os}async function Og(t){try{return(await Ec()).transaction(Qn).objectStore(Qn).get(wc(t))}catch(e){if(e instanceof Gt)Bt.warn(e.message);else{const n=it.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Bt.warn(n.message)}}}async function Ma(t,e){try{const r=(await Ec()).transaction(Qn,"readwrite");return await r.objectStore(Qn).put(e,wc(t)),r.done}catch(n){if(n instanceof Gt)Bt.warn(n.message);else{const r=it.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Bt.warn(r.message)}}}function wc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=1024,Mg=30*24*60*60*1e3;class Pg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Vg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Pa();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Mg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Pa(),{heartbeatsToSend:n,unsentEntries:r}=Fg(this._heartbeatsCache.heartbeats),i=Jr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Pa(){return new Date().toISOString().substring(0,10)}function Fg(t,e=xg){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Fa(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Fa(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Vg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return md()?pd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Og(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ma(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ma(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Fa(t){return Jr(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(t){cn(new un("platform-logger",e=>new Jd(e),"PRIVATE")),cn(new un("heartbeat",e=>new Pg(e),"PRIVATE")),gt(Cs,xa,t),gt(Cs,xa,"esm2017"),gt("fire-js","")}Ug("");const Bg=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:po,_DEFAULT_ENTRY_NAME:wt,_addComponent:ei,_addOrOverwriteComponent:gc,_apps:Tt,_clearComponents:_g,_components:Wn,_getProvider:mo,_registerComponent:cn,_removeServiceInstance:Cg,deleteApp:pc,getApp:mc,getApps:Rg,initializeApp:yo,onLog:yc,registerVersion:gt,setLogLevel:vc,FirebaseError:Gt},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,n){this._delegate=e,this.firebase=n,ei(e,new un("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),pc(this._delegate)))}_getService(e,n=wt){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=wt){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){ei(this._delegate,e)}_addOrOverwriteComponent(e){gc(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Va=new Ci("app-compat","Firebase",qg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:gt,setLogLevel:vc,onLog:yc,apps:null,SDK_VERSION:po,INTERNAL:{registerComponent:a,removeApp:r,useAsService:u,modularAPIs:Bg}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||wt,!Na(e,c))throw Va.create("no-app",{appName:c});return e[c]}i.App=t;function s(c,l={}){const h=yo(c,l);if(Na(e,h.name))return e[h.name];const f=new t(h,n);return e[h.name]=f,f}function o(){return Object.keys(e).map(c=>e[c])}function a(c){const l=c.name,h=l.replace("-compat","");if(cn(c)&&c.type==="PUBLIC"){const f=(d=i())=>{if(typeof d[h]!="function")throw Va.create("invalid-app-argument",{appName:l});return d[h]()};c.serviceProps!==void 0&&Zr(f,c.serviceProps),n[h]=f,t.prototype[h]=function(...d){return this._getService.bind(this,l).apply(this,c.multipleInstances?d:[])}}return c.type==="PUBLIC"?n[h]:null}function u(c,l){return l==="serverAuth"?null:l}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(){const t=jg($g);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:Tc,extendNamespace:e,createSubscribe:Nd,ErrorFactory:Ci,deepExtend:Zr});function e(n){Zr(t,n)}return t}const Gg=Tc();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua=new fo("@firebase/app-compat"),zg="@firebase/app-compat",Kg="0.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(t){gt(zg,Kg,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(gd()&&self.firebase!==void 0){Ua.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Ua.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const vo=Gg;Hg();var Wg="firebase",Qg="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vo.registerVersion(Wg,Qg,"app-compat");var Yg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,Eo=Eo||{},B=Yg||self;function ti(){}function _i(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function pr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Xg(t){return Object.prototype.hasOwnProperty.call(t,as)&&t[as]||(t[as]=++Jg)}var as="closure_uid_"+(1e9*Math.random()>>>0),Jg=0;function Zg(t,e,n){return t.call.apply(t.bind,arguments)}function em(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function De(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?De=Zg:De=em,De.apply(null,arguments)}function Or(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function be(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function _t(){this.s=this.s,this.o=this.o}var tm=0;_t.prototype.s=!1;_t.prototype.na=function(){!this.s&&(this.s=!0,this.M(),tm!=0)&&Xg(this)};_t.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ic=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function wo(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Ba(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(_i(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Ne(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ne.prototype.h=function(){this.defaultPrevented=!0};var nm=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{B.addEventListener("test",ti,e),B.removeEventListener("test",ti,e)}catch{}return t}();function ni(t){return/^[\s\xa0]*$/.test(t)}var $a=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function us(t,e){return t<e?-1:t>e?1:0}function Di(){var t=B.navigator;return t&&(t=t.userAgent)?t:""}function Ke(t){return Di().indexOf(t)!=-1}function To(t){return To[" "](t),t}To[" "]=ti;function rm(t){var e=om;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var im=Ke("Opera"),ln=Ke("Trident")||Ke("MSIE"),bc=Ke("Edge"),_s=bc||ln,Sc=Ke("Gecko")&&!(Di().toLowerCase().indexOf("webkit")!=-1&&!Ke("Edge"))&&!(Ke("Trident")||Ke("MSIE"))&&!Ke("Edge"),sm=Di().toLowerCase().indexOf("webkit")!=-1&&!Ke("Edge");function Ac(){var t=B.document;return t?t.documentMode:void 0}var ri;e:{var cs="",ls=function(){var t=Di();if(Sc)return/rv:([^\);]+)(\)|;)/.exec(t);if(bc)return/Edge\/([\d\.]+)/.exec(t);if(ln)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(sm)return/WebKit\/(\S+)/.exec(t);if(im)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ls&&(cs=ls?ls[1]:""),ln){var hs=Ac();if(hs!=null&&hs>parseFloat(cs)){ri=String(hs);break e}}ri=cs}var om={};function am(){return rm(function(){let t=0;const e=$a(String(ri)).split("."),n=$a("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=us(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||us(i[2].length==0,s[2].length==0)||us(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Ds;if(B.document&&ln){var qa=Ac();Ds=qa||parseInt(ri,10)||void 0}else Ds=void 0;var um=Ds;function Yn(t,e){if(Ne.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Sc){e:{try{To(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:cm[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Yn.X.h.call(this)}}be(Yn,Ne);var cm={2:"touch",3:"pen",4:"mouse"};Yn.prototype.h=function(){Yn.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var yr="closure_listenable_"+(1e6*Math.random()|0),lm=0;function hm(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++lm,this.ba=this.ea=!1}function Ni(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Io(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Cc(t){const e={};for(const n in t)e[n]=t[n];return e}const ja="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _c(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<ja.length;s++)n=ja[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ri(t){this.src=t,this.g={},this.h=0}Ri.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Rs(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new hm(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function Ns(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Ic(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ni(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Rs(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var bo="closure_lm_"+(1e6*Math.random()|0),fs={};function Dc(t,e,n,r,i){if(r&&r.once)return Rc(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Dc(t,e[s],n,r,i);return null}return n=Co(n),t&&t[yr]?t.N(e,n,pr(r)?!!r.capture:!!r,i):Nc(t,e,n,!1,r,i)}function Nc(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=pr(i)?!!i.capture:!!i,a=Ao(t);if(a||(t[bo]=a=new Ri(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=fm(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)nm||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(kc(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function fm(){function t(n){return e.call(t.src,t.listener,n)}const e=dm;return t}function Rc(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Rc(t,e[s],n,r,i);return null}return n=Co(n),t&&t[yr]?t.O(e,n,pr(r)?!!r.capture:!!r,i):Nc(t,e,n,!0,r,i)}function Lc(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Lc(t,e[s],n,r,i);else r=pr(r)?!!r.capture:!!r,n=Co(n),t&&t[yr]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Rs(s,n,r,i),-1<n&&(Ni(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ao(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Rs(e,n,r,i)),(n=-1<t?e[t]:null)&&So(n))}function So(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[yr])Ns(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(kc(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ao(e))?(Ns(n,t),n.h==0&&(n.src=null,e[bo]=null)):Ni(t)}}}function kc(t){return t in fs?fs[t]:fs[t]="on"+t}function dm(t,e){if(t.ba)t=!0;else{e=new Yn(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&So(t),t=n.call(r,e)}return t}function Ao(t){return t=t[bo],t instanceof Ri?t:null}var ds="__closure_events_fn_"+(1e9*Math.random()>>>0);function Co(t){return typeof t=="function"?t:(t[ds]||(t[ds]=function(e){return t.handleEvent(e)}),t[ds])}function Ee(){_t.call(this),this.i=new Ri(this),this.P=this,this.I=null}be(Ee,_t);Ee.prototype[yr]=!0;Ee.prototype.removeEventListener=function(t,e,n,r){Lc(this,t,e,n,r)};function Ie(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Ne(e,t);else if(e instanceof Ne)e.target=e.target||t;else{var i=e;e=new Ne(r,t),_c(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=xr(o,r,!0,e)&&i}if(o=e.g=t,i=xr(o,r,!0,e)&&i,i=xr(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=xr(o,r,!1,e)&&i}Ee.prototype.M=function(){if(Ee.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ni(n[r]);delete t.g[e],t.h--}}this.I=null};Ee.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ee.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function xr(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,u=o.ha||o.src;o.ea&&Ns(t.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var _o=B.JSON.stringify;function gm(){var t=Mc;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class mm{constructor(){this.h=this.g=null}add(e,n){const r=Oc.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Oc=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new pm,t=>t.reset());class pm{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function ym(t){B.setTimeout(()=>{throw t},0)}function xc(t,e){Ls||vm(),ks||(Ls(),ks=!0),Mc.add(t,e)}var Ls;function vm(){var t=B.Promise.resolve(void 0);Ls=function(){t.then(Em)}}var ks=!1,Mc=new mm;function Em(){for(var t;t=gm();){try{t.h.call(t.g)}catch(n){ym(n)}var e=Oc;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ks=!1}function Li(t,e){Ee.call(this),this.h=t||1,this.g=e||B,this.j=De(this.lb,this),this.l=Date.now()}be(Li,Ee);D=Li.prototype;D.ca=!1;D.R=null;D.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ie(this,"tick"),this.ca&&(Do(this),this.start()))}};D.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Do(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}D.M=function(){Li.X.M.call(this),Do(this),delete this.g};function No(t,e,n){if(typeof t=="function")n&&(t=De(t,n));else if(t&&typeof t.handleEvent=="function")t=De(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:B.setTimeout(t,e||0)}function Pc(t){t.g=No(()=>{t.g=null,t.i&&(t.i=!1,Pc(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class wm extends _t{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Pc(this)}M(){super.M(),this.g&&(B.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xn(t){_t.call(this),this.h=t,this.g={}}be(Xn,_t);var Ga=[];function Fc(t,e,n,r){Array.isArray(n)||(n&&(Ga[0]=n.toString()),n=Ga);for(var i=0;i<n.length;i++){var s=Dc(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Vc(t){Io(t.g,function(e,n){this.g.hasOwnProperty(n)&&So(e)},t),t.g={}}Xn.prototype.M=function(){Xn.X.M.call(this),Vc(this)};Xn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ki(){this.g=!0}ki.prototype.Aa=function(){this.g=!1};function Tm(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+c+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Im(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Zt(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Sm(t,n)+(r?" "+r:"")})}function bm(t,e){t.info(function(){return"TIMEOUT: "+e})}ki.prototype.info=function(){};function Sm(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return _o(n)}catch{return e}}var zt={},za=null;function Oi(){return za=za||new Ee}zt.Pa="serverreachability";function Uc(t){Ne.call(this,zt.Pa,t)}be(Uc,Ne);function Jn(t){const e=Oi();Ie(e,new Uc(e))}zt.STAT_EVENT="statevent";function Bc(t,e){Ne.call(this,zt.STAT_EVENT,t),this.stat=e}be(Bc,Ne);function ke(t){const e=Oi();Ie(e,new Bc(e,t))}zt.Qa="timingevent";function $c(t,e){Ne.call(this,zt.Qa,t),this.size=e}be($c,Ne);function vr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return B.setTimeout(function(){t()},e)}var xi={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},qc={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Ro(){}Ro.prototype.h=null;function Ka(t){return t.h||(t.h=t.i())}function jc(){}var Er={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Lo(){Ne.call(this,"d")}be(Lo,Ne);function ko(){Ne.call(this,"c")}be(ko,Ne);var Os;function Mi(){}be(Mi,Ro);Mi.prototype.g=function(){return new XMLHttpRequest};Mi.prototype.i=function(){return{}};Os=new Mi;function wr(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Xn(this),this.O=Am,t=_s?125:void 0,this.T=new Li(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Gc}function Gc(){this.i=null,this.g="",this.h=!1}var Am=45e3,xs={},ii={};D=wr.prototype;D.setTimeout=function(t){this.O=t};function Ms(t,e,n){t.K=1,t.v=Fi(at(e)),t.s=n,t.P=!0,zc(t,null)}function zc(t,e){t.F=Date.now(),Tr(t),t.A=at(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),Zc(n.i,"t",r),t.C=0,n=t.l.H,t.h=new Gc,t.g=wl(t.l,n?e:null,!t.s),0<t.N&&(t.L=new wm(De(t.La,t,t.g),t.N)),Fc(t.S,t.g,"readystatechange",t.ib),e=t.H?Cc(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Jn(),Tm(t.j,t.u,t.A,t.m,t.U,t.s)}D.ib=function(t){t=t.target;const e=this.L;e&&nt(t)==3?e.l():this.La(t)};D.La=function(t){try{if(t==this.g)e:{const l=nt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||_s||this.g&&(this.h.h||this.g.fa()||Ya(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Jn(3):Jn(2)),Pi(this);var n=this.g.aa();this.Y=n;t:if(Kc(this)){var r=Ya(this.g);t="";var i=r.length,s=nt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){kt(this),Mn(this);var o="";break t}this.h.i=new B.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Im(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ni(a)){var c=a;break t}}c=null}if(n=c)Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ps(this,n);else{this.i=!1,this.o=3,ke(12),kt(this),Mn(this);break e}}this.P?(Hc(this,l,o),_s&&this.i&&l==3&&(Fc(this.S,this.T,"tick",this.hb),this.T.start())):(Zt(this.j,this.m,o,null),Ps(this,o)),l==4&&kt(this),this.i&&!this.I&&(l==4?pl(this.l,this):(this.i=!1,Tr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ke(12)):(this.o=0,ke(13)),kt(this),Mn(this)}}}catch{}finally{}};function Kc(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Hc(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=Cm(t,n),i==ii){e==4&&(t.o=4,ke(14),r=!1),Zt(t.j,t.m,null,"[Incomplete Response]");break}else if(i==xs){t.o=4,ke(15),Zt(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Zt(t.j,t.m,i,null),Ps(t,i);Kc(t)&&i!=ii&&i!=xs&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ke(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Uo(e),e.K=!0,ke(11))):(Zt(t.j,t.m,n,"[Invalid Chunked Response]"),kt(t),Mn(t))}D.hb=function(){if(this.g){var t=nt(this.g),e=this.g.fa();this.C<e.length&&(Pi(this),Hc(this,t,e),this.i&&t!=4&&Tr(this))}};function Cm(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?ii:(n=Number(e.substring(n,r)),isNaN(n)?xs:(r+=1,r+n>e.length?ii:(e=e.substr(r,n),t.C=r+n,e)))}D.cancel=function(){this.I=!0,kt(this)};function Tr(t){t.V=Date.now()+t.O,Wc(t,t.O)}function Wc(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=vr(De(t.gb,t),e)}function Pi(t){t.B&&(B.clearTimeout(t.B),t.B=null)}D.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(bm(this.j,this.A),this.K!=2&&(Jn(),ke(17)),kt(this),this.o=2,Mn(this)):Wc(this,this.V-t)};function Mn(t){t.l.G==0||t.I||pl(t.l,t)}function kt(t){Pi(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Do(t.T),Vc(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ps(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Fs(n.h,t))){if(!t.J&&Fs(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ai(n),Bi(n);else break e;Vo(n),ke(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=vr(De(n.cb,n),6e3));if(1>=nl(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Ot(n,11)}else if((t.J||n.g==t)&&ai(n),!ni(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const l=c[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=t.g;if(d){const g=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.h;s.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Oo(s,s.h),s.h=null))}if(r.D){const m=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(r.za=m,se(r.F,r.D,m))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=El(r,r.H?r.ka:null,r.V),o.J){rl(r.h,o);var a=o,u=r.J;u&&a.setTimeout(u),a.B&&(Pi(a),Tr(a)),r.g=o}else gl(r);0<n.i.length&&$i(n)}else c[0]!="stop"&&c[0]!="close"||Ot(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Ot(n,7):Fo(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}Jn(4)}catch{}}function _m(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(_i(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Dm(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(_i(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Qc(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(_i(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Dm(t),r=_m(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var Yc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Nm(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Pt(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Pt){this.h=e!==void 0?e:t.h,si(this,t.j),this.s=t.s,this.g=t.g,oi(this,t.m),this.l=t.l,e=t.i;var n=new Zn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ha(this,n),this.o=t.o}else t&&(n=String(t).match(Yc))?(this.h=!!e,si(this,n[1]||"",!0),this.s=Rn(n[2]||""),this.g=Rn(n[3]||"",!0),oi(this,n[4]),this.l=Rn(n[5]||"",!0),Ha(this,n[6]||"",!0),this.o=Rn(n[7]||"")):(this.h=!!e,this.i=new Zn(null,this.h))}Pt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ln(e,Wa,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ln(e,Wa,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ln(n,n.charAt(0)=="/"?km:Lm,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ln(n,xm)),t.join("")};function at(t){return new Pt(t)}function si(t,e,n){t.j=n?Rn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function oi(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ha(t,e,n){e instanceof Zn?(t.i=e,Mm(t.i,t.h)):(n||(e=Ln(e,Om)),t.i=new Zn(e,t.h))}function se(t,e,n){t.i.set(e,n)}function Fi(t){return se(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Rn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ln(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Rm),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Rm(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Wa=/[#\/\?@]/g,Lm=/[#\?:]/g,km=/[#\?]/g,Om=/[#\?@]/g,xm=/#/g;function Zn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Dt(t){t.g||(t.g=new Map,t.h=0,t.i&&Nm(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=Zn.prototype;D.add=function(t,e){Dt(this),this.i=null,t=Tn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Xc(t,e){Dt(t),e=Tn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Jc(t,e){return Dt(t),e=Tn(t,e),t.g.has(e)}D.forEach=function(t,e){Dt(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};D.oa=function(){Dt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};D.W=function(t){Dt(this);let e=[];if(typeof t=="string")Jc(this,t)&&(e=e.concat(this.g.get(Tn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return Dt(this),this.i=null,t=Tn(this,t),Jc(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Zc(t,e,n){Xc(t,e),0<n.length&&(t.i=null,t.g.set(Tn(t,e),wo(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Tn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Mm(t,e){e&&!t.j&&(Dt(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Xc(this,r),Zc(this,i,n))},t)),t.j=e}var Pm=class{constructor(e,n){this.h=e,this.g=n}};function el(t){this.l=t||Fm,B.PerformanceNavigationTiming?(t=B.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(B.g&&B.g.Ga&&B.g.Ga()&&B.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Fm=10;function tl(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function nl(t){return t.h?1:t.g?t.g.size:0}function Fs(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Oo(t,e){t.g?t.g.add(e):t.h=e}function rl(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}el.prototype.cancel=function(){if(this.i=il(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function il(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return wo(t.i)}function xo(){}xo.prototype.stringify=function(t){return B.JSON.stringify(t,void 0)};xo.prototype.parse=function(t){return B.JSON.parse(t,void 0)};function Vm(){this.g=new xo}function Um(t,e,n){const r=n||"";try{Qc(t,function(i,s){let o=i;pr(i)&&(o=_o(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Bm(t,e){const n=new ki;if(B.Image){const r=new Image;r.onload=Or(Mr,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Or(Mr,n,r,"TestLoadImage: error",!1,e),r.onabort=Or(Mr,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Or(Mr,n,r,"TestLoadImage: timeout",!1,e),B.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Mr(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Ir(t){this.l=t.ac||null,this.j=t.jb||!1}be(Ir,Ro);Ir.prototype.g=function(){return new Vi(this.l,this.j)};Ir.prototype.i=function(t){return function(){return t}}({});function Vi(t,e){Ee.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Mo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}be(Vi,Ee);var Mo=0;D=Vi.prototype;D.open=function(t,e){if(this.readyState!=Mo)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,er(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||B).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,br(this)),this.readyState=Mo};D.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,er(this)),this.g&&(this.readyState=3,er(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof B.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;sl(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function sl(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}D.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?br(this):er(this),this.readyState==3&&sl(this)}};D.Va=function(t){this.g&&(this.response=this.responseText=t,br(this))};D.Ua=function(t){this.g&&(this.response=t,br(this))};D.ga=function(){this.g&&br(this)};function br(t){t.readyState=4,t.l=null,t.j=null,t.A=null,er(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function er(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Vi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var $m=B.JSON.parse;function ue(t){Ee.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ol,this.K=this.L=!1}be(ue,Ee);var ol="",qm=/^https?$/i,jm=["POST","PUT"];D=ue.prototype;D.Ka=function(t){this.L=t};D.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Os.g(),this.C=this.u?Ka(this.u):Ka(Os),this.g.onreadystatechange=De(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Qa(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=B.FormData&&t instanceof B.FormData,!(0<=Ic(jm,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{cl(this),0<this.B&&((this.K=Gm(this.g))?(this.g.timeout=this.B,this.g.ontimeout=De(this.qa,this)):this.A=No(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Qa(this,s)}};function Gm(t){return ln&&am()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.qa=function(){typeof Eo<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ie(this,"timeout"),this.abort(8))};function Qa(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,al(t),Ui(t)}function al(t){t.D||(t.D=!0,Ie(t,"complete"),Ie(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ie(this,"complete"),Ie(this,"abort"),Ui(this))};D.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ui(this,!0)),ue.X.M.call(this)};D.Ha=function(){this.s||(this.F||this.v||this.l?ul(this):this.fb())};D.fb=function(){ul(this)};function ul(t){if(t.h&&typeof Eo<"u"&&(!t.C[1]||nt(t)!=4||t.aa()!=2)){if(t.v&&nt(t)==4)No(t.Ha,0,t);else if(Ie(t,"readystatechange"),nt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(Yc)[1]||null;if(!i&&B.self&&B.self.location){var s=B.self.location.protocol;i=s.substr(0,s.length-1)}r=!qm.test(i?i.toLowerCase():"")}n=r}if(n)Ie(t,"complete"),Ie(t,"success");else{t.m=6;try{var o=2<nt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",al(t)}}finally{Ui(t)}}}}function Ui(t,e){if(t.g){cl(t);const n=t.g,r=t.C[0]?ti:null;t.g=null,t.C=null,e||Ie(t,"ready");try{n.onreadystatechange=r}catch{}}}function cl(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(B.clearTimeout(t.A),t.A=null)}function nt(t){return t.g?t.g.readyState:0}D.aa=function(){try{return 2<nt(this)?this.g.status:-1}catch{return-1}};D.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),$m(e)}};function Ya(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case ol:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}D.Ea=function(){return this.m};D.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ll(t){let e="";return Io(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Po(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=ll(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):se(t,e,n))}function Nn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function hl(t){this.Ca=0,this.i=[],this.j=new ki,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Nn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Nn("baseRetryDelayMs",5e3,t),this.bb=Nn("retryDelaySeedMs",1e4,t),this.$a=Nn("forwardChannelMaxRetries",2,t),this.ta=Nn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new el(t&&t.concurrentRequestLimit),this.Fa=new Vm,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}D=hl.prototype;D.ma=8;D.G=1;function Fo(t){if(fl(t),t.G==3){var e=t.U++,n=at(t.F);se(n,"SID",t.I),se(n,"RID",e),se(n,"TYPE","terminate"),Sr(t,n),e=new wr(t,t.j,e,void 0),e.K=2,e.v=Fi(at(n)),n=!1,B.navigator&&B.navigator.sendBeacon&&(n=B.navigator.sendBeacon(e.v.toString(),"")),!n&&B.Image&&(new Image().src=e.v,n=!0),n||(e.g=wl(e.l,null),e.g.da(e.v)),e.F=Date.now(),Tr(e)}vl(t)}function Bi(t){t.g&&(Uo(t),t.g.cancel(),t.g=null)}function fl(t){Bi(t),t.u&&(B.clearTimeout(t.u),t.u=null),ai(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&B.clearTimeout(t.m),t.m=null)}function $i(t){tl(t.h)||t.m||(t.m=!0,xc(t.Ja,t),t.C=0)}function zm(t,e){return nl(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=vr(De(t.Ja,t,e),yl(t,t.C)),t.C++,!0)}D.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new wr(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=Cc(s),_c(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=dl(this,i,e),n=at(this.F),se(n,"RID",t),se(n,"CVER",22),this.D&&se(n,"X-HTTP-Session-Id",this.D),Sr(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(ll(s)))+"&"+e:this.o&&Po(n,this.o,s)),Oo(this.h,i),this.Ya&&se(n,"TYPE","init"),this.O?(se(n,"$req",e),se(n,"SID","null"),i.Z=!0,Ms(i,n,null)):Ms(i,n,e),this.G=2}}else this.G==3&&(t?Xa(this,t):this.i.length==0||tl(this.h)||Xa(this))};function Xa(t,e){var n;e?n=e.m:n=t.U++;const r=at(t.F);se(r,"SID",t.I),se(r,"RID",n),se(r,"AID",t.T),Sr(t,r),t.o&&t.s&&Po(r,t.o,t.s),n=new wr(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=dl(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Oo(t.h,n),Ms(n,r,e)}function Sr(t,e){t.ia&&Io(t.ia,function(n,r){se(e,r,n)}),t.l&&Qc({},function(n,r){se(e,r,n)})}function dl(t,e,n){n=Math.min(t.i.length,n);var r=t.l?De(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let c=i[u].h;const l=i[u].g;if(c-=s,0>c)s=Math.max(0,i[u].h-100),a=!1;else try{Um(l,o,"req"+c+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function gl(t){t.g||t.u||(t.Z=1,xc(t.Ia,t),t.A=0)}function Vo(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=vr(De(t.Ia,t),yl(t,t.A)),t.A++,!0)}D.Ia=function(){if(this.u=null,ml(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=vr(De(this.eb,this),t)}};D.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ke(10),Bi(this),ml(this))};function Uo(t){t.B!=null&&(B.clearTimeout(t.B),t.B=null)}function ml(t){t.g=new wr(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=at(t.sa);se(e,"RID","rpc"),se(e,"SID",t.I),se(e,"CI",t.L?"0":"1"),se(e,"AID",t.T),se(e,"TYPE","xmlhttp"),Sr(t,e),t.o&&t.s&&Po(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Fi(at(e)),n.s=null,n.P=!0,zc(n,t)}D.cb=function(){this.v!=null&&(this.v=null,Bi(this),Vo(this),ke(19))};function ai(t){t.v!=null&&(B.clearTimeout(t.v),t.v=null)}function pl(t,e){var n=null;if(t.g==e){ai(t),Uo(t),t.g=null;var r=2}else if(Fs(t.h,e))n=e.D,rl(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Oi(),Ie(r,new $c(r,n)),$i(t)}else gl(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&zm(t,e)||r==2&&Vo(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Ot(t,5);break;case 4:Ot(t,10);break;case 3:Ot(t,6);break;default:Ot(t,2)}}}function yl(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Ot(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=De(t.kb,t);n||(n=new Pt("//www.google.com/images/cleardot.gif"),B.location&&B.location.protocol=="http"||si(n,"https"),Fi(n)),Bm(n.toString(),r)}else ke(2);t.G=0,t.l&&t.l.va(e),vl(t),fl(t)}D.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ke(2)):(this.j.info("Failed to ping google.com"),ke(1))};function vl(t){if(t.G=0,t.la=[],t.l){const e=il(t.h);(e.length!=0||t.i.length!=0)&&(Ba(t.la,e),Ba(t.la,t.i),t.h.i.length=0,wo(t.i),t.i.length=0),t.l.ua()}}function El(t,e,n){var r=n instanceof Pt?at(n):new Pt(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),oi(r,r.m);else{var i=B.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Pt(null,void 0);r&&si(s,r),e&&(s.g=e),i&&oi(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&se(r,n,e),se(r,"VER",t.ma),Sr(t,r),r}function wl(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ue(new Ir({jb:!0})):new ue(t.ra),e.Ka(t.H),e}function Tl(){}D=Tl.prototype;D.xa=function(){};D.wa=function(){};D.va=function(){};D.ua=function(){};D.Ra=function(){};function ui(){if(ln&&!(10<=Number(um)))throw Error("Environmental error: no available transport.")}ui.prototype.g=function(t,e){return new Pe(t,e)};function Pe(t,e){Ee.call(this),this.g=new hl(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!ni(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ni(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new In(this)}be(Pe,Ee);Pe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ke(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=El(t,null,t.V),$i(t)};Pe.prototype.close=function(){Fo(this.g)};Pe.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=_o(t),t=n);e.i.push(new Pm(e.ab++,t)),e.G==3&&$i(e)};Pe.prototype.M=function(){this.g.l=null,delete this.j,Fo(this.g),delete this.g,Pe.X.M.call(this)};function Il(t){Lo.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}be(Il,Lo);function bl(){ko.call(this),this.status=1}be(bl,ko);function In(t){this.g=t}be(In,Tl);In.prototype.xa=function(){Ie(this.g,"a")};In.prototype.wa=function(t){Ie(this.g,new Il(t))};In.prototype.va=function(t){Ie(this.g,new bl)};In.prototype.ua=function(){Ie(this.g,"b")};ui.prototype.createWebChannel=ui.prototype.g;Pe.prototype.send=Pe.prototype.u;Pe.prototype.open=Pe.prototype.m;Pe.prototype.close=Pe.prototype.close;xi.NO_ERROR=0;xi.TIMEOUT=8;xi.HTTP_ERROR=6;qc.COMPLETE="complete";jc.EventType=Er;Er.OPEN="a";Er.CLOSE="b";Er.ERROR="c";Er.MESSAGE="d";Ee.prototype.listen=Ee.prototype.N;ue.prototype.listenOnce=ue.prototype.O;ue.prototype.getLastError=ue.prototype.Oa;ue.prototype.getLastErrorCode=ue.prototype.Ea;ue.prototype.getStatus=ue.prototype.aa;ue.prototype.getResponseJson=ue.prototype.Sa;ue.prototype.getResponseText=ue.prototype.fa;ue.prototype.send=ue.prototype.da;ue.prototype.setWithCredentials=ue.prototype.Ka;var Km=function(){return new ui},Hm=function(){return Oi()},gs=xi,Wm=qc,Qm=zt,Ja={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Ym=Ir,Pr=jc,Xm=ue;const Za="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ae.UNAUTHENTICATED=new Ae(null),Ae.GOOGLE_CREDENTIALS=new Ae("google-credentials-uid"),Ae.FIRST_PARTY=new Ae("first-party-uid"),Ae.MOCK_USER=new Ae("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bn="9.15.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t=new fo("@firebase/firestore");function eu(){return $t.logLevel}function k(t,...e){if($t.logLevel<=J.DEBUG){const n=e.map(Bo);$t.debug(`Firestore (${bn}): ${t}`,...n)}}function ut(t,...e){if($t.logLevel<=J.ERROR){const n=e.map(Bo);$t.error(`Firestore (${bn}): ${t}`,...n)}}function Vs(t,...e){if($t.logLevel<=J.WARN){const n=e.map(Bo);$t.warn(`Firestore (${bn}): ${t}`,...n)}}function Bo(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t="Unexpected state"){const e=`FIRESTORE (${bn}) INTERNAL ASSERTION FAILED: `+t;throw ut(e),new Error(e)}function ne(t,e){t||U()}function G(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends Gt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Jm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ae.UNAUTHENTICATED))}shutdown(){}}class Zm{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ep{constructor(e){this.t=e,this.currentUser=Ae.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new mt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new mt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new mt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ne(typeof r.accessToken=="string"),new Sl(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ne(e===null||typeof e=="string"),new Ae(e)}}class tp{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=Ae.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ne(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class np{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new tp(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Ae.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ip{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,k("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ne(typeof n.token=="string"),this.A=n.token,new rp(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=sp(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Z(t,e){return t<e?-1:t>e?1:0}function hn(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new _(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new _(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new _(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new _(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return me.fromMillis(Date.now())}static fromDate(e){return me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new me(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new q(e)}static min(){return new q(new me(0,0))}static max(){return new q(new me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,n,r){n===void 0?n=0:n>e.length&&U(),r===void 0?r=e.length-n:r>e.length-n&&U(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return tr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof tr?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class re extends tr{construct(e,n,r){return new re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new _(p.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new re(n)}static emptyPath(){return new re([])}}const op=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _e extends tr{construct(e,n,r){return new _e(e,n,r)}static isValidIdentifier(e){return op.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new _e(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new _(p.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new _(p.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new _(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new _(p.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _e(n)}static emptyPath(){return new _e([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(re.fromString(e))}static fromName(e){return new O(re.fromString(e).popFirst(5))}static empty(){return new O(re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new re(e.slice()))}}function ap(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=q.fromTimestamp(r===1e9?new me(n+1,0):new me(n,r));return new It(i,O.empty(),e)}function up(t){return new It(t.readTime,t.key,-1)}class It{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new It(q.min(),O.empty(),-1)}static max(){return new It(q.max(),O.empty(),-1)}}function cp(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=O.comparator(t.documentKey,e.documentKey),n!==0?n:Z(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ar(t){if(t.code!==p.FAILED_PRECONDITION||t.message!==lp)throw t;k("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new E((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof E?n:E.resolve(n)}catch(n){return E.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):E.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):E.reject(n)}static resolve(e){return new E((n,r)=>{n(e)})}static reject(e){return new E((n,r)=>{r(e)})}static waitFor(e){return new E((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=E.resolve(!1);for(const r of e)n=n.next(i=>i?E.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new E((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(l=>{o[c]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(e,n){return new E((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Cr(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}$o.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e,n,r,i,s,o,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class nr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new nr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof nr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Sn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Cl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(t){return t==null}function ci(t){return t===0&&1/t==-1/0}function dp(t){return typeof t=="number"&&Number.isInteger(t)&&!ci(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Re(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Re(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Re.EMPTY_BYTE_STRING=new Re("");const gp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bt(t){if(ne(!!t),typeof t=="string"){let e=0;const n=gp.exec(t);if(ne(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:fe(t.seconds),nanos:fe(t.nanos)}}function fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function fn(t){return typeof t=="string"?Re.fromBase64String(t):Re.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Dl(t){const e=t.mapValue.fields.__previous_value__;return _l(e)?Dl(e):e}function rr(t){const e=bt(t.mapValue.fields.__local_write_time__.timestampValue);return new me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function qt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?_l(t)?4:mp(t)?9007199254740991:10:U()}function Xe(t,e){if(t===e)return!0;const n=qt(t);if(n!==qt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return rr(t).isEqual(rr(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=bt(r.timestampValue),o=bt(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return fn(r.bytesValue).isEqual(fn(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return fe(r.geoPointValue.latitude)===fe(i.geoPointValue.latitude)&&fe(r.geoPointValue.longitude)===fe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return fe(r.integerValue)===fe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=fe(r.doubleValue),o=fe(i.doubleValue);return s===o?ci(s)===ci(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return hn(t.arrayValue.values||[],e.arrayValue.values||[],Xe);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(tu(s)!==tu(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Xe(s[a],o[a])))return!1;return!0}(t,e);default:return U()}}function ir(t,e){return(t.values||[]).find(n=>Xe(n,e))!==void 0}function dn(t,e){if(t===e)return 0;const n=qt(t),r=qt(e);if(n!==r)return Z(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Z(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=fe(i.integerValue||i.doubleValue),a=fe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return nu(t.timestampValue,e.timestampValue);case 4:return nu(rr(t),rr(e));case 5:return Z(t.stringValue,e.stringValue);case 6:return function(i,s){const o=fn(i),a=fn(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let u=0;u<o.length&&u<a.length;u++){const c=Z(o[u],a[u]);if(c!==0)return c}return Z(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Z(fe(i.latitude),fe(s.latitude));return o!==0?o:Z(fe(i.longitude),fe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let u=0;u<o.length&&u<a.length;++u){const c=dn(o[u],a[u]);if(c)return c}return Z(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Fr.mapValue&&s===Fr.mapValue)return 0;if(i===Fr.mapValue)return 1;if(s===Fr.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=s.fields||{},c=Object.keys(u);a.sort(),c.sort();for(let l=0;l<a.length&&l<c.length;++l){const h=Z(a[l],c[l]);if(h!==0)return h;const f=dn(o[a[l]],u[c[l]]);if(f!==0)return f}return Z(a.length,c.length)}(t.mapValue,e.mapValue);default:throw U()}}function nu(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Z(t,e);const n=bt(t),r=bt(e),i=Z(n.seconds,r.seconds);return i!==0?i:Z(n.nanos,r.nanos)}function gn(t){return Us(t)}function Us(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=bt(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?fn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,O.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Us(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Us(r.fields[a])}`;return s+"}"}(t.mapValue):U();var e,n}function ru(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Bs(t){return!!t&&"integerValue"in t}function qo(t){return!!t&&"arrayValue"in t}function iu(t){return!!t&&"nullValue"in t}function su(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Gr(t){return!!t&&"mapValue"in t}function Pn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Sn(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Pn(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Pn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function mp(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n){this.position=e,this.inclusive=n}}function ou(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=O.comparator(O.fromName(o.referenceValue),n.key):r=dn(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function au(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Xe(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{}class de extends Nl{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new vp(e,n,r):n==="array-contains"?new Tp(e,r):n==="in"?new Ip(e,r):n==="not-in"?new bp(e,r):n==="array-contains-any"?new Sp(e,r):new de(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Ep(e,r):new wp(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(dn(n,this.value)):n!==null&&qt(this.value)===qt(n)&&this.matchesComparison(dn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ge extends Nl{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Ge(e,n)}matches(e){return Rl(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Rl(t){return t.op==="and"}function pp(t){return yp(t)&&Rl(t)}function yp(t){for(const e of t.filters)if(e instanceof Ge)return!1;return!0}function Ll(t){if(t instanceof de)return t.field.canonicalString()+t.op.toString()+gn(t.value);{const e=t.filters.map(n=>Ll(n)).join(",");return`${t.op}(${e})`}}function kl(t,e){return t instanceof de?function(n,r){return r instanceof de&&n.op===r.op&&n.field.isEqual(r.field)&&Xe(n.value,r.value)}(t,e):t instanceof Ge?function(n,r){return r instanceof Ge&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&kl(s,r.filters[o]),!0):!1}(t,e):void U()}function Ol(t){return t instanceof de?function(e){return`${e.field.canonicalString()} ${e.op} ${gn(e.value)}`}(t):t instanceof Ge?function(e){return e.op.toString()+" {"+e.getFilters().map(Ol).join(" ,")+"}"}(t):"Filter"}class vp extends de{constructor(e,n,r){super(e,n,r),this.key=O.fromName(r.referenceValue)}matches(e){const n=O.comparator(e.key,this.key);return this.matchesComparison(n)}}class Ep extends de{constructor(e,n){super(e,"in",n),this.keys=xl("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class wp extends de{constructor(e,n){super(e,"not-in",n),this.keys=xl("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function xl(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>O.fromName(r.referenceValue))}class Tp extends de{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return qo(n)&&ir(n.arrayValue,this.value)}}class Ip extends de{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ir(this.value.arrayValue,n)}}class bp extends de{constructor(e,n){super(e,"not-in",n)}matches(e){if(ir(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ir(this.value.arrayValue,n)}}class Sp extends de{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!qo(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ir(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,n="asc"){this.field=e,this.dir=n}}function Ap(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,n){this.comparator=e,this.root=n||Te.EMPTY}insert(e,n){return new ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Te.BLACK,null,null))}remove(e){return new ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Te.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vr(this.root,e,this.comparator,!0)}}class Vr{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Te{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Te.RED,this.left=i??Te.EMPTY,this.right=s??Te.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Te(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Te.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Te.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}Te.EMPTY=null,Te.RED=!0,Te.BLACK=!1;Te.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Te(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.comparator=e,this.data=new ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new uu(this.data.getIterator())}getIteratorFrom(e){return new uu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof pe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new pe(this.comparator);return n.data=e,n}}class uu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.fields=e,e.sort(_e.comparator)}static empty(){return new He([])}unionWith(e){let n=new pe(_e.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new He(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return hn(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.value=e}static empty(){return new Ve({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Gr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Pn(n)}setAll(e){let n=_e.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Pn(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Gr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Xe(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Gr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Sn(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ve(Pn(this.value))}}function Ml(t){const e=[];return Sn(t.fields,(n,r)=>{const i=new _e([n]);if(Gr(r)){const s=Ml(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new He(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ce(e,0,q.min(),q.min(),q.min(),Ve.empty(),0)}static newFoundDocument(e,n,r,i){return new Ce(e,1,n,q.min(),r,i,0)}static newNoDocument(e,n){return new Ce(e,2,n,q.min(),q.min(),Ve.empty(),0)}static newUnknownDocument(e,n){return new Ce(e,3,n,q.min(),q.min(),Ve.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ve.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ve.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function cu(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Cp(t,e,n,r,i,s,o)}function jo(t){const e=G(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ll(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),qi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>gn(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>gn(r)).join(",")),e.ft=n}return e.ft}function Go(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ap(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!kl(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!au(t.startAt,e.startAt)&&au(t.endAt,e.endAt)}function $s(t){return O.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.dt=null,this._t=null,this.startAt,this.endAt}}function _p(t,e,n,r,i,s,o,a){return new _r(t,e,n,r,i,s,o,a)}function Pl(t){return new _r(t)}function lu(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Fl(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function zo(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Vl(t){return t.collectionGroup!==null}function nn(t){const e=G(t);if(e.dt===null){e.dt=[];const n=zo(e),r=Fl(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new Fn(n)),e.dt.push(new Fn(_e.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Fn(_e.keyField(),s))}}}return e.dt}function ct(t){const e=G(t);if(!e._t)if(e.limitType==="F")e._t=cu(e.path,e.collectionGroup,nn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of nn(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Fn(s.field,o))}const r=e.endAt?new li(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new li(e.startAt.position,e.startAt.inclusive):null;e._t=cu(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function qs(t,e){e.getFirstInequalityField(),zo(t);const n=t.filters.concat([e]);return new _r(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function js(t,e,n){return new _r(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ji(t,e){return Go(ct(t),ct(e))&&t.limitType===e.limitType}function Ul(t){return`${jo(ct(t))}|lt:${t.limitType}`}function Gs(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>Ol(r)).join(", ")}]`),qi(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>gn(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>gn(r)).join(",")),`Target(${n})`}(ct(t))}; limitType=${t.limitType})`}function Ko(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):O.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of nn(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=ou(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,nn(n),r)||n.endAt&&!function(i,s,o){const a=ou(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,nn(n),r))}(t,e)}function Dp(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Bl(t){return(e,n)=>{let r=!1;for(const i of nn(t)){const s=Np(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Np(t,e,n){const r=t.field.isKeyField()?O.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),u=o.data.field(i);return a!==null&&u!==null?dn(a,u):U()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ci(e)?"-0":e}}function ql(t){return{integerValue:""+t}}function Rp(t,e){return dp(e)?ql(e):$l(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(){this._=void 0}}function Lp(t,e,n){return t instanceof hi?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof sr?Gl(t,e):t instanceof or?zl(t,e):function(r,i){const s=jl(r,i),o=hu(s)+hu(r.gt);return Bs(s)&&Bs(r.gt)?ql(o):$l(r.yt,o)}(t,e)}function kp(t,e,n){return t instanceof sr?Gl(t,e):t instanceof or?zl(t,e):n}function jl(t,e){return t instanceof fi?Bs(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class hi extends Gi{}class sr extends Gi{constructor(e){super(),this.elements=e}}function Gl(t,e){const n=Kl(e);for(const r of t.elements)n.some(i=>Xe(i,r))||n.push(r);return{arrayValue:{values:n}}}class or extends Gi{constructor(e){super(),this.elements=e}}function zl(t,e){let n=Kl(e);for(const r of t.elements)n=n.filter(i=>!Xe(i,r));return{arrayValue:{values:n}}}class fi extends Gi{constructor(e,n){super(),this.yt=e,this.gt=n}}function hu(t){return fe(t.integerValue||t.doubleValue)}function Kl(t){return qo(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Op(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof sr&&r instanceof sr||n instanceof or&&r instanceof or?hn(n.elements,r.elements,Xe):n instanceof fi&&r instanceof fi?Xe(n.gt,r.gt):n instanceof hi&&r instanceof hi}(t.transform,e.transform)}class xp{constructor(e,n){this.version=e,this.transformResults=n}}class st{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new st}static exists(e){return new st(void 0,e)}static updateTime(e){return new st(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class zi{}function Hl(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ql(t.key,st.none()):new Dr(t.key,t.data,st.none());{const n=t.data,r=Ve.empty();let i=new pe(_e.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Kt(t.key,r,new He(i.toArray()),st.none())}}function Mp(t,e,n){t instanceof Dr?function(r,i,s){const o=r.value.clone(),a=du(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Kt?function(r,i,s){if(!zr(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=du(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(Wl(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Vn(t,e,n,r){return t instanceof Dr?function(i,s,o,a){if(!zr(i.precondition,s))return o;const u=i.value.clone(),c=gu(i.fieldTransforms,a,s);return u.setAll(c),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Kt?function(i,s,o,a){if(!zr(i.precondition,s))return o;const u=gu(i.fieldTransforms,a,s),c=s.data;return c.setAll(Wl(i)),c.setAll(u),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(t,e,n,r):function(i,s,o){return zr(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function Pp(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=jl(r.transform,i||null);s!=null&&(n===null&&(n=Ve.empty()),n.set(r.field,s))}return n||null}function fu(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&hn(n,r,(i,s)=>Op(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Dr extends zi{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Kt extends zi{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Wl(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function du(t,e,n){const r=new Map;ne(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,kp(o,a,n[i]))}return r}function gu(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Lp(s,o,e))}return r}class Ql extends zi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Fp extends zi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he,Y;function Up(t){switch(t){default:return U();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function Yl(t){if(t===void 0)return ut("GRPC error has no .code"),p.UNKNOWN;switch(t){case he.OK:return p.OK;case he.CANCELLED:return p.CANCELLED;case he.UNKNOWN:return p.UNKNOWN;case he.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case he.INTERNAL:return p.INTERNAL;case he.UNAVAILABLE:return p.UNAVAILABLE;case he.UNAUTHENTICATED:return p.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case he.NOT_FOUND:return p.NOT_FOUND;case he.ALREADY_EXISTS:return p.ALREADY_EXISTS;case he.PERMISSION_DENIED:return p.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case he.ABORTED:return p.ABORTED;case he.OUT_OF_RANGE:return p.OUT_OF_RANGE;case he.UNIMPLEMENTED:return p.UNIMPLEMENTED;case he.DATA_LOSS:return p.DATA_LOSS;default:return U()}}(Y=he||(he={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Sn(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Cl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp=new ye(O.comparator);function lt(){return Bp}const Xl=new ye(O.comparator);function kn(...t){let e=Xl;for(const n of t)e=e.insert(n.key,n);return e}function Jl(t){let e=Xl;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function xt(){return Un()}function Zl(){return Un()}function Un(){return new An(t=>t.toString(),(t,e)=>t.isEqual(e))}const $p=new ye(O.comparator),qp=new pe(O.comparator);function Q(...t){let e=qp;for(const n of t)e=e.add(n);return e}const jp=new pe(Z);function eh(){return jp}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Nr.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ki(q.min(),i,eh(),lt(),Q())}}class Nr{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Nr(r,n,Q(),Q(),Q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,n,r,i){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=i}}class th{constructor(e,n){this.targetId=e,this.Et=n}}class nh{constructor(e,n,r=Re.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class mu{constructor(){this.At=0,this.Rt=yu(),this.bt=Re.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=Q(),n=Q(),r=Q();return this.Rt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:U()}}),new Nr(this.bt,this.Pt,e,n,r)}xt(){this.vt=!1,this.Rt=yu()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class Gp{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=lt(),this.qt=pu(),this.Ut=new pe(Z)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const r=this.Wt(n);switch(e.state){case 0:this.zt(n)&&r.Dt(e.resumeToken);break;case 1:r.Mt(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.Mt(),r.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(r.Ft(),r.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:U()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,i)=>{this.zt(i)&&n(i)})}Jt(e){const n=e.targetId,r=e.Et.count,i=this.Yt(n);if(i){const s=i.target;if($s(s))if(r===0){const o=new O(s.path);this.Qt(n,o,Ce.newNoDocument(o,q.min()))}else ne(r===1);else this.Xt(n)!==r&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&$s(a.target)){const u=new O(a.target.path);this.Lt.get(u)!==null||this.te(o,u)||this.Qt(o,u,Ce.newNoDocument(u,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let r=Q();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Yt(u);return!c||c.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const i=new Ki(e,n,this.Ut,this.Lt,r);return this.Lt=lt(),this.qt=pu(),this.Ut=new pe(Z),i}Gt(e,n){if(!this.zt(e))return;const r=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.zt(e))return;const i=this.Wt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new mu,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new pe(Z),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||k("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new mu),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function pu(){return new ye(O.comparator)}function yu(){return new ye(O.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Kp=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Hp=(()=>({and:"AND",or:"OR"}))();class Wp{constructor(e,n){this.databaseId=e,this.wt=n}}function di(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rh(t,e){return t.wt?e.toBase64():e.toUint8Array()}function Qp(t,e){return di(t,e.toTimestamp())}function We(t){return ne(!!t),q.fromTimestamp(function(e){const n=bt(e);return new me(n.seconds,n.nanos)}(t))}function Ho(t,e){return function(n){return new re(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function ih(t){const e=re.fromString(t);return ne(uh(e)),e}function zs(t,e){return Ho(t.databaseId,e.path)}function ms(t,e){const n=ih(e);if(n.get(1)!==t.databaseId.projectId)throw new _(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new _(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new O(sh(n))}function Ks(t,e){return Ho(t.databaseId,e)}function Yp(t){const e=ih(t);return e.length===4?re.emptyPath():sh(e)}function Hs(t){return new re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function sh(t){return ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function vu(t,e,n){return{name:zs(t,e),fields:n.value.mapValue.fields}}function Xp(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.wt?(ne(c===void 0||typeof c=="string"),Re.fromBase64String(c||"")):(ne(c===void 0||c instanceof Uint8Array),Re.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?p.UNKNOWN:Yl(u.code);return new _(c,u.message||"")}(o);n=new nh(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ms(t,r.document.name),s=We(r.document.updateTime),o=r.document.createTime?We(r.document.createTime):q.min(),a=new Ve({mapValue:{fields:r.document.fields}}),u=Ce.newFoundDocument(i,s,o,a),c=r.targetIds||[],l=r.removedTargetIds||[];n=new Kr(c,l,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ms(t,r.document),s=r.readTime?We(r.readTime):q.min(),o=Ce.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Kr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ms(t,r.document),s=r.removedTargetIds||[];n=new Kr([],s,i,null)}else{if(!("filter"in e))return U();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new Vp(i),o=r.targetId;n=new th(o,s)}}return n}function Jp(t,e){let n;if(e instanceof Dr)n={update:vu(t,e.key,e.value)};else if(e instanceof Ql)n={delete:zs(t,e.key)};else if(e instanceof Kt)n={update:vu(t,e.key,e.data),updateMask:ay(e.fieldMask)};else{if(!(e instanceof Fp))return U();n={verify:zs(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof hi)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof sr)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof or)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof fi)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw U()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:Qp(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:U()}(t,e.precondition)),n}function Zp(t,e){return t&&t.length>0?(ne(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?We(r.updateTime):We(i);return s.isEqual(q.min())&&(s=We(i)),new xp(s,r.transformResults||[])}(n,e))):[]}function ey(t,e){return{documents:[Ks(t,e.path)]}}function ty(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Ks(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ks(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(u){if(u.length!==0)return ah(Ge.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(c=>function(l){return{field:Yt(l.field),direction:iy(l.dir)}}(c))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(u,c){return u.wt||qi(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),n}function ny(t){let e=Yp(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ne(r===1);const l=n.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];n.where&&(s=function(l){const h=oh(l);return h instanceof Ge&&pp(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Fn(Xt(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,qi(h)?null:h}(n.limit));let u=null;n.startAt&&(u=function(l){const h=!!l.before,f=l.values||[];return new li(f,h)}(n.startAt));let c=null;return n.endAt&&(c=function(l){const h=!l.before,f=l.values||[];return new li(f,h)}(n.endAt)),_p(e,i,o,s,a,"F",u,c)}function ry(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return U()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function oh(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Xt(e.unaryFilter.field);return de.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Xt(e.unaryFilter.field);return de.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Xt(e.unaryFilter.field);return de.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Xt(e.unaryFilter.field);return de.create(s,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(t):t.fieldFilter!==void 0?function(e){return de.create(Xt(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Ge.create(e.compositeFilter.filters.map(n=>oh(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return U()}}(e.compositeFilter.op))}(t):U()}function iy(t){return zp[t]}function sy(t){return Kp[t]}function oy(t){return Hp[t]}function Yt(t){return{fieldPath:t.canonicalString()}}function Xt(t){return _e.fromServerFormat(t.fieldPath)}function ah(t){return t instanceof de?function(e){if(e.op==="=="){if(su(e.value))return{unaryFilter:{field:Yt(e.field),op:"IS_NAN"}};if(iu(e.value))return{unaryFilter:{field:Yt(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(su(e.value))return{unaryFilter:{field:Yt(e.field),op:"IS_NOT_NAN"}};if(iu(e.value))return{unaryFilter:{field:Yt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yt(e.field),op:sy(e.op),value:e.value}}}(t):t instanceof Ge?function(e){const n=e.getFilters().map(r=>ah(r));return n.length===1?n[0]:{compositeFilter:{op:oy(e.op),filters:n}}}(t):U()}function ay(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function uh(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Mp(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Vn(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Vn(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Zl();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=Hl(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Q())}isEqual(e){return this.batchId===e.batchId&&hn(this.mutations,e.mutations,(n,r)=>fu(n,r))&&hn(this.baseMutations,e.baseMutations,(n,r)=>fu(n,r))}}class Wo{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ne(e.mutations.length===r.length);let i=$p;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Wo(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,n,r,i,s=q.min(),o=q.min(),a=Re.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Ft(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Ft(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e){this.ie=e}}function hy(t){const e=ny({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?js(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(){this.Je=new dy}addToCollectionParentIndex(e,n){return this.Je.add(n),E.resolve()}getCollectionParents(e,n){return E.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return E.resolve()}deleteFieldIndex(e,n){return E.resolve()}getDocumentsMatchingTarget(e,n){return E.resolve(null)}getIndexType(e,n){return E.resolve(0)}getFieldIndexes(e,n){return E.resolve([])}getNextCollectionGroupToUpdate(e){return E.resolve(null)}getMinOffset(e,n){return E.resolve(It.min())}getMinOffsetFromCollectionGroup(e,n){return E.resolve(It.min())}updateCollectionGroup(e,n,r){return E.resolve()}updateIndexEntries(e,n){return E.resolve()}}class dy{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new pe(re.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new pe(re.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new mn(0)}static vn(){return new mn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(){this.changes=new An(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ce.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?E.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Vn(r.mutation,i,He.empty(),me.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Q()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Q()){const i=xt();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=kn();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=xt();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Q()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=lt();const o=Un(),a=Un();return n.forEach((u,c)=>{const l=r.get(c.key);i.has(c.key)&&(l===void 0||l.mutation instanceof Kt)?s=s.insert(c.key,c):l!==void 0&&(o.set(c.key,l.mutation.getFieldMask()),Vn(l.mutation,c,l.mutation.getFieldMask(),me.now()))}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,l)=>o.set(c,l)),n.forEach((c,l)=>{var h;return a.set(c,new my(l,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Un();let i=new ye((o,a)=>o-a),s=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let l=r.get(u)||He.empty();l=a.applyToLocalView(c,l),r.set(u,l);const h=(i.get(a.batchId)||Q()).add(u);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,l=u.value,h=Zl();l.forEach(f=>{if(!s.has(f)){const d=Hl(n.get(f),r.get(f));d!==null&&h.set(f,d),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return E.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return O.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Vl(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):E.resolve(xt());let a=-1,u=s;return o.next(c=>E.forEach(c,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?E.resolve():this.remoteDocumentCache.getEntry(e,l).next(f=>{u=u.insert(l,f)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,Q())).next(l=>({batchId:a,changes:Jl(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new O(n)).next(r=>{let i=kn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=kn();return this.indexManager.getCollectionParents(e,i).next(o=>E.forEach(o,a=>{const u=function(c,l){return new _r(l,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r).next(c=>{c.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,u)=>{const c=u.getKey();i.get(c)===null&&(i=i.insert(c,Ce.newInvalidDocument(c)))});let o=kn();return i.forEach((a,u)=>{const c=s.get(a);c!==void 0&&Vn(c.mutation,u,He.empty(),me.now()),Ko(n,u)&&(o=o.insert(a,u))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return E.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:We(r.createTime)}),E.resolve()}getNamedQuery(e,n){return E.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:hy(r.bundledQuery),readTime:We(r.readTime)}}(n)),E.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(){this.overlays=new ye(O.comparator),this.es=new Map}getOverlay(e,n){return E.resolve(this.overlays.get(n))}getOverlays(e,n){const r=xt();return E.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.oe(e,n,s)}),E.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),E.resolve()}getOverlaysForCollection(e,n,r){const i=xt(),s=n.length+1,o=new O(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return E.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ye((c,l)=>c-l);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let l=s.get(c.largestBatchId);l===null&&(l=xt(),s=s.insert(c.largestBatchId,l)),l.set(c.getKey(),c)}}const a=xt(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,l)=>a.set(c,l)),!(a.size()>=i)););return E.resolve(a)}oe(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new cy(n,r));let s=this.es.get(n);s===void 0&&(s=Q(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(){this.ns=new pe(ve.ss),this.rs=new pe(ve.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new ve(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new ve(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new O(new re([])),r=new ve(n,e),i=new ve(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new O(new re([])),r=new ve(n,e),i=new ve(n,e+1);let s=Q();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ve(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ve{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return O.comparator(e.key,n.key)||Z(e._s,n._s)}static os(e,n){return Z(e._s,n._s)||O.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new pe(ve.ss)}checkEmpty(e){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new uy(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new ve(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(e,n){return E.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return E.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ve(n,0),i=new ve(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),E.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new pe(Z);return n.forEach(i=>{const s=new ve(i,0),o=new ve(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),E.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;O.isDocumentKey(s)||(s=s.child(""));const o=new ve(new O(s),0);let a=new pe(Z);return this.gs.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u._s)),!0)},o),E.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ne(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return E.forEach(n.mutations,i=>{const s=new ve(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new ve(n,0),i=this.gs.firstAfterOrEqual(r);return E.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,E.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e){this.Es=e,this.docs=new ye(O.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return E.resolve(r?r.document.mutableCopy():Ce.newInvalidDocument(n))}getEntries(e,n){let r=lt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ce.newInvalidDocument(i))}),E.resolve(r)}getAllFromCollection(e,n,r){let i=lt();const s=new O(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:u}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||cp(up(u),r)<=0||(i=i.insert(u.key,u.mutableCopy()))}return E.resolve(i)}getAllFromCollectionGroup(e,n,r,i){U()}As(e,n){return E.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Ty(this)}getSize(e){return E.resolve(this.size)}}class Ty extends gy{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),E.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e){this.persistence=e,this.Rs=new An(n=>jo(n),Go),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Qo,this.targetCount=0,this.vs=mn.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),E.resolve()}getLastRemoteSnapshotVersion(e){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return E.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),E.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new mn(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,E.resolve()}updateTargetData(e,n){return this.Dn(n),E.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,E.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),E.waitFor(s).next(()=>i)}getTargetCount(e){return E.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return E.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),E.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),E.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),E.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return E.resolve(r)}containsKey(e,n){return E.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new $o(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Iy(this),this.indexManager=new fy,this.remoteDocumentCache=function(r){return new wy(r)}(r=>this.referenceDelegate.xs(r)),this.yt=new ly(n),this.Ns=new yy(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new vy,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new Ey(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){k("MemoryPersistence","Starting transaction:",e);const i=new Sy(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return E.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class Sy extends hp{constructor(e){super(),this.currentSequenceNumber=e}}class Yo{constructor(e){this.persistence=e,this.Fs=new Qo,this.$s=null}static Bs(e){return new Yo(e)}get Ls(){if(this.$s)return this.$s;throw U()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),E.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),E.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),E.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.Ls,r=>{const i=O.fromPath(r);return this.qs(e,i).next(s=>{s||n.removeEntry(i,q.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return E.or([()=>E.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=Q(),i=Q();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Xo(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(lu(n))return E.resolve(null);let r=ct(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=js(n,null,"F"),r=ct(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Q(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Fi(n,a);return this.$i(n,c,o,u.readTime)?this.ki(e,js(n,null,"F")):this.Bi(e,c,n,u)}))})))}Oi(e,n,r,i){return lu(n)||i.isEqual(q.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(e,n):(eu()<=J.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Gs(n)),this.Bi(e,o,n,ap(i,-1)))})}Fi(e,n){let r=new pe(Bl(e));return n.forEach((i,s)=>{Ko(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return eu()<=J.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",Gs(n)),this.Ni.getDocumentsMatchingQuery(e,n,It.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.yt=i,this.qi=new ye(Z),this.Ui=new An(s=>jo(s),Go),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new py(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function _y(t,e,n,r){return new Cy(t,e,n,r)}async function ch(t,e){const n=G(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=Q();for(const c of i){o.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}for(const c of s){a.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}return n.localDocuments.getDocuments(r,u).next(c=>({ji:c,removedBatchIds:o,addedBatchIds:a}))})})}function Dy(t,e){const n=G(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,c){const l=u.batch,h=l.keys();let f=E.resolve();return h.forEach(d=>{f=f.next(()=>c.getEntry(a,d)).next(g=>{const m=u.docVersions.get(d);ne(m!==null),g.version.compareTo(m)<0&&(l.applyToRemoteDocument(g,u),g.isValidDocument()&&(g.setReadTime(u.commitVersion),c.addEntry(g)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=Q();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function lh(t){const e=G(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function Ny(t,e){const n=G(t),r=e.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const a=[];e.targetChanges.forEach((l,h)=>{const f=i.get(h);if(!f)return;a.push(n.Cs.removeMatchingKeys(s,l.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,l.addedDocuments,h)));let d=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?d=d.withResumeToken(Re.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):l.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(l.resumeToken,r)),i=i.insert(h,d),function(g,m,y){return g.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(f,d,l)&&a.push(n.Cs.updateTargetData(s,d))});let u=lt(),c=Q();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(Ry(s,o,e.documentUpdates).next(l=>{u=l.Wi,c=l.zi})),!r.isEqual(q.min())){const l=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return E.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.qi=i,s))}function Ry(t,e,n){let r=Q(),i=Q();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=lt();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(q.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):k("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Wi:o,zi:i}})}function Ly(t,e){const n=G(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ky(t,e){const n=G(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,E.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new Ft(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.qi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(r.targetId,r),n.Ui.set(e,r.targetId)),r})}async function Ws(t,e,n){const r=G(t),i=r.qi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Cr(o))throw o;k("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.qi=r.qi.remove(e),r.Ui.delete(i.target)}function Eu(t,e,n){const r=G(t);let i=q.min(),s=Q();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,u,c){const l=G(a),h=l.Ui.get(c);return h!==void 0?E.resolve(l.qi.get(h)):l.Cs.getTargetData(u,c)}(r,o,ct(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:q.min(),n?s:Q())).next(a=>(Oy(r,Dp(e),a),{documents:a,Hi:s})))}function Oy(t,e,n){let r=t.Ki.get(e)||q.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class wu{constructor(){this.activeTargetIds=eh()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class xy{constructor(){this.Lr=new wu,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,r){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new wu,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){k("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){k("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Py={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const o=this.ho(e,n);k("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(u=>(k("RestConnection","Received: ",u),u),u=>{throw Vs("RestConnection",`${e} failed with error: `,u,"url: ",o,"request:",r),u})}_o(e,n,r,i,s,o){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+bn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=Py[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new Xm;a.setWithCredentials(!0),a.listenOnce(Wm.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case gs.NO_ERROR:const c=a.getResponseJson();k("Connection","XHR received:",JSON.stringify(c)),s(c);break;case gs.TIMEOUT:k("Connection",'RPC "'+e+'" timed out'),o(new _(p.DEADLINE_EXCEEDED,"Request time out"));break;case gs.HTTP_ERROR:const l=a.getStatus();if(k("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const f=h==null?void 0:h.error;if(f&&f.status&&f.message){const d=function(g){const m=g.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(m)>=0?m:p.UNKNOWN}(f.status);o(new _(d,f.message))}else o(new _(p.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new _(p.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{k("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Km(),o=Hm(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Ym({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const u=i.join("");k("Connection","Creating WebChannel: "+u,a);const c=s.createWebChannel(u,a);let l=!1,h=!1;const f=new Fy({Hr:g=>{h?k("Connection","Not sending because WebChannel is closed:",g):(l||(k("Connection","Opening WebChannel transport."),c.open(),l=!0),k("Connection","WebChannel sending:",g),c.send(g))},Jr:()=>c.close()}),d=(g,m,y)=>{g.listen(m,w=>{try{y(w)}catch(v){setTimeout(()=>{throw v},0)}})};return d(c,Pr.EventType.OPEN,()=>{h||k("Connection","WebChannel transport opened.")}),d(c,Pr.EventType.CLOSE,()=>{h||(h=!0,k("Connection","WebChannel transport closed"),f.io())}),d(c,Pr.EventType.ERROR,g=>{h||(h=!0,Vs("Connection","WebChannel transport errored:",g),f.io(new _(p.UNAVAILABLE,"The operation could not be completed")))}),d(c,Pr.EventType.MESSAGE,g=>{var m;if(!h){const y=g.data[0];ne(!!y);const w=y,v=w.error||((m=w[0])===null||m===void 0?void 0:m.error);if(v){k("Connection","WebChannel received error:",v);const T=v.status;let P=function($){const I=he[$];if(I!==void 0)return Yl(I)}(T),L=v.message;P===void 0&&(P=p.INTERNAL,L="Unknown error status: "+T+" with message "+v.message),h=!0,f.io(new _(P,L)),c.close()}else k("Connection","WebChannel received:",y),f.ro(y)}}),d(o,Qm.STAT_EVENT,g=>{g.stat===Ja.PROXY?k("Connection","Detected buffering proxy"):g.stat===Ja.NOPROXY&&k("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function ps(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(t){return new Wp(t,!0)}class hh{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&k("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,n,r,i,s,o,a,u){this.Hs=e,this.vo=r,this.Vo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new hh(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===p.RESOURCE_EXHAUSTED?(ut(n.toString()),ut("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new _(p.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return k("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(k("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Uy extends fh{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.yt=s}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=Xp(this.yt,e),r=function(i){if(!("targetChange"in i))return q.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?q.min():s.readTime?We(s.readTime):q.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=Hs(this.yt),n.addTarget=function(i,s){let o;const a=s.target;return o=$s(a)?{documents:ey(i,a)}:{query:ty(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=rh(i,s.resumeToken):s.snapshotVersion.compareTo(q.min())>0&&(o.readTime=di(i,s.snapshotVersion.toTimestamp())),o}(this.yt,e);const r=ry(this.yt,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=Hs(this.yt),n.removeTarget=e,this.Bo(n)}}class By extends fh{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.yt=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=Zp(e.writeResults,e.commitTime),r=We(e.commitTime);return this.listener.Zo(r,n)}return ne(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Hs(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Jp(this.yt,r))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.yt=i,this.nu=!1}su(){if(this.nu)throw new _(p.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new _(p.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection._o(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new _(p.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class qy{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(ut(n),this.ou=!1):k("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.Ur(o=>{r.enqueueAndForget(async()=>{Ht(this)&&(k("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=G(a);u._u.add(4),await Rr(u),u.gu.set("Unknown"),u._u.delete(4),await Wi(u)}(this))})}),this.gu=new qy(r,i)}}async function Wi(t){if(Ht(t))for(const e of t.wu)await e(!0)}async function Rr(t){for(const e of t.wu)await e(!1)}function dh(t,e){const n=G(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),ea(n)?Zo(n):Cn(n).ko()&&Jo(n,e))}function gh(t,e){const n=G(t),r=Cn(n);n.du.delete(e),r.ko()&&mh(n,e),n.du.size===0&&(r.ko()?r.Fo():Ht(n)&&n.gu.set("Unknown"))}function Jo(t,e){t.yu.Ot(e.targetId),Cn(t).zo(e)}function mh(t,e){t.yu.Ot(e),Cn(t).Ho(e)}function Zo(t){t.yu=new Gp({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),Cn(t).start(),t.gu.uu()}function ea(t){return Ht(t)&&!Cn(t).No()&&t.du.size>0}function Ht(t){return G(t)._u.size===0}function ph(t){t.yu=void 0}async function Gy(t){t.du.forEach((e,n)=>{Jo(t,e)})}async function zy(t,e){ph(t),ea(t)?(t.gu.hu(e),Zo(t)):t.gu.set("Unknown")}async function Ky(t,e,n){if(t.gu.set("Online"),e instanceof nh&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){k("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await gi(t,r)}else if(e instanceof Kr?t.yu.Kt(e):e instanceof th?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(q.min()))try{const r=await lh(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.Zt(s);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.du.get(u);c&&i.du.set(u,c.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const u=i.du.get(a);if(!u)return;i.du.set(a,u.withResumeToken(Re.EMPTY_BYTE_STRING,u.snapshotVersion)),mh(i,a);const c=new Ft(u.target,a,1,u.sequenceNumber);Jo(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){k("RemoteStore","Failed to raise snapshot:",r),await gi(t,r)}}async function gi(t,e,n){if(!Cr(e))throw e;t._u.add(1),await Rr(t),t.gu.set("Offline"),n||(n=()=>lh(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{k("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Wi(t)})}function yh(t,e){return e().catch(n=>gi(t,n,e))}async function Qi(t){const e=G(t),n=St(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;Hy(e);)try{const i=await Ly(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,Wy(e,i)}catch(i){await gi(e,i)}vh(e)&&Eh(e)}function Hy(t){return Ht(t)&&t.fu.length<10}function Wy(t,e){t.fu.push(e);const n=St(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function vh(t){return Ht(t)&&!St(t).No()&&t.fu.length>0}function Eh(t){St(t).start()}async function Qy(t){St(t).eu()}async function Yy(t){const e=St(t);for(const n of t.fu)e.Xo(n.mutations)}async function Xy(t,e,n){const r=t.fu.shift(),i=Wo.from(r,e,n);await yh(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Qi(t)}async function Jy(t,e){e&&St(t).Yo&&await async function(n,r){if(i=r.code,Up(i)&&i!==p.ABORTED){const s=n.fu.shift();St(n).Mo(),await yh(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Qi(n)}var i}(t,e),vh(t)&&Eh(t)}async function Iu(t,e){const n=G(t);n.asyncQueue.verifyOperationInProgress(),k("RemoteStore","RemoteStore received new credentials");const r=Ht(n);n._u.add(3),await Rr(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Wi(n)}async function Zy(t,e){const n=G(t);e?(n._u.delete(2),await Wi(n)):e||(n._u.add(2),await Rr(n),n.gu.set("Unknown"))}function Cn(t){return t.pu||(t.pu=function(e,n,r){const i=G(e);return i.su(),new Uy(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(t.datastore,t.asyncQueue,{Yr:Gy.bind(null,t),Zr:zy.bind(null,t),Wo:Ky.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),ea(t)?Zo(t):t.gu.set("Unknown")):(await t.pu.stop(),ph(t))})),t.pu}function St(t){return t.Iu||(t.Iu=function(e,n,r){const i=G(e);return i.su(),new By(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(t.datastore,t.asyncQueue,{Yr:Qy.bind(null,t),Zr:Jy.bind(null,t),tu:Yy.bind(null,t),Zo:Xy.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await Qi(t)):(await t.Iu.stop(),t.fu.length>0&&(k("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new mt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new ta(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _(p.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function na(t,e){if(ut("AsyncQueue",`${e}: ${t}`),Cr(t))return new _(p.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.comparator=e?(n,r)=>e(n,r)||O.comparator(n.key,r.key):(n,r)=>O.comparator(n.key,r.key),this.keyedMap=kn(),this.sortedSet=new ye(this.comparator)}static emptySet(e){return new rn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof rn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new rn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(){this.Tu=new ye(O.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):U():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class pn{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new pn(e,n,rn.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ji(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(){this.Au=void 0,this.listeners=[]}}class tv{constructor(){this.queries=new An(e=>Ul(e),ji),this.onlineState="Unknown",this.Ru=new Set}}async function nv(t,e){const n=G(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new ev),i)try{s.Au=await n.onListen(r)}catch(o){const a=na(o,`Initialization of query '${Gs(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&ra(n)}async function rv(t,e){const n=G(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function iv(t,e){const n=G(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&ra(n)}function sv(t,e,n){const r=G(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function ra(t){t.Ru.forEach(e=>{e.next()})}class ov{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new pn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=pn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e){this.key=e}}class Th{constructor(e){this.key=e}}class av{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Q(),this.mutatedKeys=Q(),this.Gu=Bl(e),this.Qu=new rn(this.Gu)}get ju(){return this.qu}Wu(e,n){const r=n?n.zu:new bu,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const f=i.get(l),d=Ko(this.query,h)?h:null,g=!!f&&this.mutatedKeys.has(f.key),m=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let y=!1;f&&d?f.data.isEqual(d.data)?g!==m&&(r.track({type:3,doc:d}),y=!0):this.Hu(f,d)||(r.track({type:2,doc:d}),y=!0,(u&&this.Gu(d,u)>0||c&&this.Gu(d,c)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),y=!0):f&&!d&&(r.track({type:1,doc:f}),y=!0,(u||c)&&(a=!0)),y&&(d?(o=o.add(d),s=m?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Eu();s.sort((c,l)=>function(h,f){const d=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return d(h)-d(f)}(c.type,l.type)||this.Gu(c.doc,l.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,u=a!==this.Uu;return this.Uu=a,s.length!==0||u?{snapshot:new pn(this.query,e.Qu,i,s,e.mutatedKeys,a===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new bu,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Q(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new Th(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new wh(r))}),n}tc(e){this.qu=e.Hi,this.Ku=Q();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return pn.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class uv{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class cv{constructor(e){this.key=e,this.nc=!1}}class lv{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new An(a=>Ul(a),ji),this.rc=new Map,this.oc=new Set,this.uc=new ye(O.comparator),this.cc=new Map,this.ac=new Qo,this.hc={},this.lc=new Map,this.fc=mn.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function hv(t,e){const n=Tv(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await ky(n.localStore,ct(e));n.isPrimaryClient&&dh(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await fv(n,e,r,a==="current",o.resumeToken)}return i}async function fv(t,e,n,r,i){t._c=(h,f,d)=>async function(g,m,y,w){let v=m.view.Wu(y);v.$i&&(v=await Eu(g.localStore,m.query,!1).then(({documents:L})=>m.view.Wu(L,v)));const T=w&&w.targetChanges.get(m.targetId),P=m.view.applyChanges(v,g.isPrimaryClient,T);return Au(g,m.targetId,P.Xu),P.snapshot}(t,h,f,d);const s=await Eu(t.localStore,e,!0),o=new av(e,s.Hi),a=o.Wu(s.documents),u=Nr.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);Au(t,n,c.Xu);const l=new uv(e,n,o);return t.ic.set(e,l),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),c.snapshot}async function dv(t,e){const n=G(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!ji(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ws(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),gh(n.remoteStore,r.targetId),Qs(n,r.targetId)}).catch(Ar)):(Qs(n,r.targetId),await Ws(n.localStore,r.targetId,!0))}async function gv(t,e,n){const r=Iv(t);try{const i=await function(s,o){const a=G(s),u=me.now(),c=o.reduce((f,d)=>f.add(d.key),Q());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=lt(),g=Q();return a.Gi.getEntries(f,c).next(m=>{d=m,d.forEach((y,w)=>{w.isValidDocument()||(g=g.add(y))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(m=>{l=m;const y=[];for(const w of o){const v=Pp(w,l.get(w.key).overlayedDocument);v!=null&&y.push(new Kt(w.key,v,Ml(v.value.mapValue),st.exists(!0)))}return a.mutationQueue.addMutationBatch(f,u,y,o)}).next(m=>{h=m;const y=m.applyToLocalDocumentSet(l,g);return a.documentOverlayCache.saveOverlays(f,m.batchId,y)})}).then(()=>({batchId:h.batchId,changes:Jl(l)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let u=s.hc[s.currentUser.toKey()];u||(u=new ye(Z)),u=u.insert(o,a),s.hc[s.currentUser.toKey()]=u}(r,i.batchId,n),await Lr(r,i.changes),await Qi(r.remoteStore)}catch(i){const s=na(i,"Failed to persist write");n.reject(s)}}async function Ih(t,e){const n=G(t);try{const r=await Ny(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(ne(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?ne(o.nc):i.removedDocuments.size>0&&(ne(o.nc),o.nc=!1))}),await Lr(n,r,e)}catch(r){await Ar(r)}}function Su(t,e,n){const r=G(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=G(s);a.onlineState=o;let u=!1;a.queries.forEach((c,l)=>{for(const h of l.listeners)h.bu(o)&&(u=!0)}),u&&ra(a)}(r.eventManager,e),i.length&&r.sc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function mv(t,e,n){const r=G(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new ye(O.comparator);o=o.insert(s,Ce.newNoDocument(s,q.min()));const a=Q().add(s),u=new Ki(q.min(),new Map,new pe(Z),o,a);await Ih(r,u),r.uc=r.uc.remove(s),r.cc.delete(e),ia(r)}else await Ws(r.localStore,e,!1).then(()=>Qs(r,e,n)).catch(Ar)}async function pv(t,e){const n=G(t),r=e.batch.batchId;try{const i=await Dy(n.localStore,e);Sh(n,r,null),bh(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Lr(n,i)}catch(i){await Ar(i)}}async function yv(t,e,n){const r=G(t);try{const i=await function(s,o){const a=G(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return a.mutationQueue.lookupMutationBatch(u,o).next(l=>(ne(l!==null),c=l.keys(),a.mutationQueue.removeMutationBatch(u,l))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>a.localDocuments.getDocuments(u,c))})}(r.localStore,e);Sh(r,e,n),bh(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Lr(r,i)}catch(i){await Ar(i)}}function bh(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Sh(t,e,n){const r=G(t);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function Qs(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||Ah(t,r)})}function Ah(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(gh(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),ia(t))}function Au(t,e,n){for(const r of n)r instanceof wh?(t.ac.addReference(r.key,e),vv(t,r)):r instanceof Th?(k("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||Ah(t,r.key)):U()}function vv(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(k("SyncEngine","New document in limbo: "+n),t.oc.add(r),ia(t))}function ia(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new O(re.fromString(e)),r=t.fc.next();t.cc.set(r,new cv(n)),t.uc=t.uc.insert(n,r),dh(t.remoteStore,new Ft(ct(Pl(n.path)),r,2,$o.at))}}async function Lr(t,e,n){const r=G(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,u)=>{o.push(r._c(u,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const l=Xo.Ci(u.targetId,c);s.push(l)}}))}),await Promise.all(o),r.sc.Wo(i),await async function(a,u){const c=G(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>E.forEach(u,h=>E.forEach(h.Si,f=>c.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>E.forEach(h.Di,f=>c.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!Cr(l))throw l;k("LocalStore","Failed to update sequence numbers: "+l)}for(const l of u){const h=l.targetId;if(!l.fromCache){const f=c.qi.get(h),d=f.snapshotVersion,g=f.withLastLimboFreeSnapshotVersion(d);c.qi=c.qi.insert(h,g)}}}(r.localStore,s))}async function Ev(t,e){const n=G(t);if(!n.currentUser.isEqual(e)){k("SyncEngine","User change. New user:",e.toKey());const r=await ch(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new _(p.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Lr(n,r.ji)}}function wv(t,e){const n=G(t),r=n.cc.get(e);if(r&&r.nc)return Q().add(r.key);{let i=Q();const s=n.rc.get(e);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function Tv(t){const e=G(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ih.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=wv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mv.bind(null,e),e.sc.Wo=iv.bind(null,e.eventManager),e.sc.wc=sv.bind(null,e.eventManager),e}function Iv(t){const e=G(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=pv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yv.bind(null,e),e}class bv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Hi(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return _y(this.persistence,new Ay,e.initialUser,this.yt)}yc(e){return new by(Yo.Bs,this.yt)}gc(e){return new xy}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Sv{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Su(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ev.bind(null,this.syncEngine),await Zy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new tv}createDatastore(e){const n=Hi(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new Vy(i));var i;return function(s,o,a,u){return new $y(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Su(this.syncEngine,a,0),o=Tu.C()?new Tu:new My,new jy(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,u,c){const l=new lv(r,i,s,o,a,u);return c&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=G(e);k("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Rr(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(t,e,n){if(!n)throw new _(p.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Av(t,e,n,r){if(e===!0&&r===!0)throw new _(p.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Cu(t){if(!O.isDocumentKey(t))throw new _(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function _u(t){if(O.isDocumentKey(t))throw new _(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Yi(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":U()}function mi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new _(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Yi(t);throw new _(p.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du=new Map;class Nu{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new _(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new _(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Av("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new _(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new _(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nu(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Jm;switch(n.type){case"gapi":const r=n.client;return new np(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new _(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Du.get(e);n&&(k("ComponentProvider","Removing Datastore"),Du.delete(e),n.terminate())}(this),Promise.resolve()}}function Cv(t,e,n,r={}){var i;const s=(t=mi(t,Xi))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Vs("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Ae.MOCK_USER;else{o=Ad(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new _(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ae(u)}t._authCredentials=new Zm(new Sl(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Be(this.firestore,e,this._key)}}class _n{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new _n(this.firestore,e,this._query)}}class pt extends _n{constructor(e,n,r){super(e,n,Pl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Be(this.firestore,null,new O(e))}withConverter(e){return new pt(this.firestore,e,this._path)}}function _h(t,e,...n){if(t=an(t),Ch("collection","path",e),t instanceof Xi){const r=re.fromString(e,...n);return _u(r),new pt(t,null,r)}{if(!(t instanceof Be||t instanceof pt))throw new _(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(re.fromString(e,...n));return _u(r),new pt(t.firestore,null,r)}}function _v(t,e,...n){if(t=an(t),arguments.length===1&&(e=Al.R()),Ch("doc","path",e),t instanceof Xi){const r=re.fromString(e,...n);return Cu(r),new Be(t,null,new O(r))}{if(!(t instanceof Be||t instanceof pt))throw new _(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(re.fromString(e,...n));return Cu(r),new Be(t.firestore,t instanceof pt?t.converter:null,new O(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):ut("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ae.UNAUTHENTICATED,this.clientId=Al.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{k("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(k("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=na(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Rv(t,e){t.asyncQueue.verifyOperationInProgress(),k("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ch(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Lv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await kv(t);k("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Iu(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Iu(e.remoteStore,s)),t.onlineComponents=e}async function kv(t){return t.offlineComponents||(k("FirestoreClient","Using default OfflineComponentProvider"),await Rv(t,new bv)),t.offlineComponents}async function Dh(t){return t.onlineComponents||(k("FirestoreClient","Using default OnlineComponentProvider"),await Lv(t,new Sv)),t.onlineComponents}function Ov(t){return Dh(t).then(e=>e.syncEngine)}async function xv(t){const e=await Dh(t),n=e.eventManager;return n.onListen=hv.bind(null,e.syncEngine),n.onUnlisten=dv.bind(null,e.syncEngine),n}function Mv(t,e,n={}){const r=new mt;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const c=new Dv({next:h=>{s.enqueueAndForget(()=>rv(i,l)),h.fromCache&&a.source==="server"?u.reject(new _(p.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),l=new ov(o,c,{includeMetadataChanges:!0,Nu:!0});return nv(i,l)}(await xv(t),t.asyncQueue,e,n,r)),r.promise}class Pv{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new hh(this,"async_queue_retry"),this.Wc=()=>{const n=ps();n&&k("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=ps();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=ps();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new mt;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Cr(e))throw e;k("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw ut("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=ta.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.Uc.push(i),i}zc(){this.Kc&&U()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class sa extends Xi{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Pv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Lh(this),this._firestoreClient.terminate()}}function Nh(t,e){const n=typeof t=="object"?t:mc(),r=typeof t=="string"?t:e||"(default)",i=mo(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Id("firestore");s&&Cv(i,...s)}return i}function Rh(t){return t._firestoreClient||Lh(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Lh(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new fp(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Nv(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yn(Re.fromBase64String(e))}catch(n){throw new _(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new yn(Re.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new _(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new _(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new _(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv=/^__.*__$/;class Vv{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Kt(e,this.data,this.fieldMask,n,this.fieldTransforms):new Dr(e,this.data,n,this.fieldTransforms)}}function Oh(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class ua{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.yt=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new ua(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return pi(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Oh(this.sa)&&Fv.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class Uv{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=r||Hi(e)}da(e,n,r,i=!1){return new ua({sa:e,methodName:n,fa:r,path:_e.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function xh(t){const e=t._freezeSettings(),n=Hi(t._databaseId);return new Uv(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Bv(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);Fh("Data must be an object, but it was:",o,r);const a=Mh(r,o);let u,c;if(s.merge)u=new He(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const f=qv(e,h,n);if(!o.contains(f))throw new _(p.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Gv(l,f)||l.push(f)}u=new He(l),c=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,c=o.fieldTransforms;return new Vv(new Ve(a),u,c)}function $v(t,e,n,r=!1){return ca(n,t.da(r?4:3,e))}function ca(t,e){if(Ph(t=an(t)))return Fh("Unsupported field value:",e,t),Mh(t,e);if(t instanceof kh)return function(n,r){if(!Oh(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=ca(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=an(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Rp(r.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=me.fromDate(n);return{timestampValue:di(r.yt,i)}}if(n instanceof me){const i=new me(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:di(r.yt,i)}}if(n instanceof aa)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof yn)return{bytesValue:rh(r.yt,n._byteString)};if(n instanceof Be){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ho(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${Yi(n)}`)}(t,e)}function Mh(t,e){const n={};return Cl(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Sn(t,(r,i)=>{const s=ca(i,e.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Ph(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof me||t instanceof aa||t instanceof yn||t instanceof Be||t instanceof kh)}function Fh(t,e,n){if(!Ph(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Yi(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function qv(t,e,n){if((e=an(e))instanceof oa)return e._internalPath;if(typeof e=="string")return Vh(t,e);throw pi("Field path arguments must be of type string or ",t,!1,void 0,n)}const jv=new RegExp("[~\\*/\\[\\]]");function Vh(t,e,n){if(e.search(jv)>=0)throw pi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new oa(...e.split("."))._internalPath}catch{throw pi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function pi(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new _(p.INVALID_ARGUMENT,a+t+u)}function Gv(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new zv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Bh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class zv extends Uh{data(){return super.data()}}function Bh(t,e){return typeof e=="string"?Vh(t,e):e instanceof oa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new _(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class la{}class Hv extends la{}function Wv(t,e,...n){let r=[];e instanceof la&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof fa).length,o=i.filter(a=>a instanceof ha).length;if(s>1||s>0&&o>0)throw new _(p.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class ha extends Hv{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ha(e,n,r)}_apply(e){const n=this._parse(e);return $h(e._query,n),new _n(e.firestore,e.converter,qs(e._query,n))}_parse(e){const n=xh(e.firestore);return function(i,s,o,a,u,c,l){let h;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new _(p.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Lu(l,c);const f=[];for(const d of l)f.push(Ru(a,i,d));h={arrayValue:{values:f}}}else h=Ru(a,i,l)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Lu(l,c),h=$v(o,s,l,c==="in"||c==="not-in");return de.create(u,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class fa extends la{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new fa(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ge.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)$h(s,a),s=qs(s,a)}(e._query,n),new _n(e.firestore,e.converter,qs(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ru(t,e,n){if(typeof(n=an(n))=="string"){if(n==="")throw new _(p.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Vl(e)&&n.indexOf("/")!==-1)throw new _(p.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(re.fromString(n));if(!O.isDocumentKey(r))throw new _(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ru(t,new O(r))}if(n instanceof Be)return ru(t,n._key);throw new _(p.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Yi(n)}.`)}function Lu(t,e){if(!Array.isArray(t)||t.length===0)throw new _(p.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new _(p.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function $h(t,e){if(e.isInequality()){const r=zo(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new _(p.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Fl(t);s!==null&&Qv(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new _(p.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new _(p.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Qv(t,e,n){if(!n.isEqual(e))throw new _(p.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Yv{convertValue(e,n="none"){switch(qt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(fn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw U()}}convertObject(e,n){const r={};return Sn(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new aa(fe(e.latitude),fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Dl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(rr(e));default:return null}}convertTimestamp(e){const n=bt(e);return new me(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=re.fromString(e);ne(uh(r));const i=new nr(r.get(1),r.get(3)),s=new O(r.popFirst(5));return i.isEqual(n)||ut(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Jv extends Uh{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Hr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Bh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Hr extends Jv{data(e={}){return super.data(e)}}class Zv{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ur(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Hr(this._firestore,this._userDataWriter,r.key,r,new Ur(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new _(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Hr(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ur(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Hr(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ur(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,c=-1;return o.type!==0&&(u=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),c=s.indexOf(o.doc.key)),{type:eE(o.type),doc:a,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function eE(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}class tE extends Yv{constructor(e){super(),this.firestore=e}convertBytes(e){return new yn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Be(this.firestore,null,n)}}function nE(t){t=mi(t,_n);const e=mi(t.firestore,sa),n=Rh(e),r=new tE(e);return Kv(t._query),Mv(n,t._query).then(i=>new Zv(e,r,t,i))}function rE(t,e){const n=mi(t.firestore,sa),r=_v(t),i=Xv(t.converter,e);return iE(n,[Bv(xh(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,st.exists(!1))]).then(()=>r)}function iE(t,e){return function(n,r){const i=new mt;return n.asyncQueue.enqueueAndForget(async()=>gv(await Ov(n),r,i)),i.promise}(Rh(t),e)}(function(t,e=!0){(function(n){bn=n})(po),cn(new un("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new sa(new ep(n.getProvider("auth-internal")),new ip(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new _(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new nr(a.options.projectId,u)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),gt(Za,"3.8.0",t),gt(Za,"3.8.0","esm2017")})();const qh={apiKey:{}.API_KEY,appId:{}.APP_ID,authDomain:"db-test-6a682.firebaseapp.com",projectId:"db-test-6a682",storageBucket:"db-test-6a682.appspot.com",messagingSenderId:"747176992339",measurementId:"G-S8L5L31DJY"};class sE{constructor(e){const n=vo.initializeApp(qh);this.db=Nh(n),this.dbName=e.dbName,this.tableId=e.tableId}async showData(){const e=Wv(_h(this.db,this.dbName)),n=await nE(e),r=document.getElementById(this.tableId);n.forEach(i=>{const s=document.createElement("tr"),o=[i.data().first,i.data().last,i.data().born];for(let a=0;a<o.length;a++){const u=document.createElement("td");u.textContent=o[a],s.insertAdjacentElement("beforeend",u)}r.insertAdjacentElement("afterbegin",s)})}}class oE{constructor(e){const n=vo.initializeApp(qh);this.db=Nh(n),this.dbName=e.dbName,this.$form=document.getElementById(e.formId),this.$form.addEventListener("submit",r=>this.handleClick(r))}async insertNewUser(){await rE(_h(this.db,this.dbName),{first:this.$form.querySelector("input[name=first]").value,last:this.$form.querySelector("input[name=last]").value,born:this.$form.querySelector("input[name=born]").value}).then(e=>{window.alert(`Success! ... ID: ${e.id}`)}).catch(e=>{window.alert(`Error! ... ${e}`)})}handleClick(e){e.preventDefault(),this.insertNewUser()}}document.getElementById("js-nav")!==null&&new cd({navElement:"js-nav"});document.getElementsByClassName("splide")[0]&&new lo(".splide").mount();document.getElementById("js-firebase-form")!==null&&new oE({dbName:"users",formId:"js-firebase-form"});document.getElementById("js-firebase-table")!==null&&new sE({dbName:"users",tableId:"js-firebase-table"}).showData();
