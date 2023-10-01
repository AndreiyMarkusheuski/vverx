import{c as O,n as j,e as L,j as l,S as D,P as _,a as R,g as F,b as A,R as q,d as H}from"./onload-3c4ca1fb.js";function z(r){let{swiper:e,extendParams:f,on:c,emit:M}=r;f({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};const m=t=>(Array.isArray(t)?t:[t]).filter(i=>!!i);function T(t){let i;return t&&typeof t=="string"&&e.isElement&&(i=e.el.querySelector(t),i)?i:(t&&(typeof t=="string"&&(i=[...document.querySelectorAll(t)]),e.params.uniqueNavElements&&typeof t=="string"&&i.length>1&&e.el.querySelectorAll(t).length===1&&(i=e.el.querySelector(t))),t&&!i?t:i)}function y(t,i){const s=e.params.navigation;t=m(t),t.forEach(o=>{o&&(o.classList[i?"add":"remove"](...s.disabledClass.split(" ")),o.tagName==="BUTTON"&&(o.disabled=i),e.params.watchOverflow&&e.enabled&&o.classList[e.isLocked?"add":"remove"](s.lockClass))})}function d(){const{nextEl:t,prevEl:i}=e.navigation;if(e.params.loop){y(i,!1),y(t,!1);return}y(i,e.isBeginning&&!e.params.rewind),y(t,e.isEnd&&!e.params.rewind)}function x(t){t.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),M("navigationPrev"))}function a(t){t.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),M("navigationNext"))}function w(){const t=e.params.navigation;if(e.params.navigation=O(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(t.nextEl||t.prevEl))return;let i=T(t.nextEl),s=T(t.prevEl);Object.assign(e.navigation,{nextEl:i,prevEl:s}),i=m(i),s=m(s);const o=(n,h)=>{n&&n.addEventListener("click",h==="next"?a:x),!e.enabled&&n&&n.classList.add(...t.lockClass.split(" "))};i.forEach(n=>o(n,"next")),s.forEach(n=>o(n,"prev"))}function E(){let{nextEl:t,prevEl:i}=e.navigation;t=m(t),i=m(i);const s=(o,n)=>{o.removeEventListener("click",n==="next"?a:x),o.classList.remove(...e.params.navigation.disabledClass.split(" "))};t.forEach(o=>s(o,"next")),i.forEach(o=>s(o,"prev"))}c("init",()=>{e.params.navigation.enabled===!1?p():(w(),d())}),c("toEdge fromEdge lock unlock",()=>{d()}),c("destroy",()=>{E()}),c("enable disable",()=>{let{nextEl:t,prevEl:i}=e.navigation;t=m(t),i=m(i),[...t,...i].filter(s=>!!s).forEach(s=>s.classList[e.enabled?"remove":"add"](e.params.navigation.lockClass))}),c("click",(t,i)=>{let{nextEl:s,prevEl:o}=e.navigation;s=m(s),o=m(o);const n=i.target;if(e.params.navigation.hideOnClick&&!o.includes(n)&&!s.includes(n)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===n||e.pagination.el.contains(n)))return;let h;s.length?h=s[0].classList.contains(e.params.navigation.hiddenClass):o.length&&(h=o[0].classList.contains(e.params.navigation.hiddenClass)),M(h===!0?"navigationShow":"navigationHide"),[...s,...o].filter(b=>!!b).forEach(b=>b.classList.toggle(e.params.navigation.hiddenClass))}});const g=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),w(),d()},p=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),E()};Object.assign(e.navigation,{enable:g,disable:p,update:d,init:w,destroy:E})}function I(r){let{swiper:e,extendParams:f,emit:c,once:M}=r;f({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function m(){if(e.params.cssMode)return;const d=e.getTranslate();e.setTranslate(d),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function T(){if(e.params.cssMode)return;const{touchEventsData:d,touches:x}=e;d.velocities.length===0&&d.velocities.push({position:x[e.isHorizontal()?"startX":"startY"],time:d.touchStartTime}),d.velocities.push({position:x[e.isHorizontal()?"currentX":"currentY"],time:j()})}function y(d){let{currentPos:x}=d;if(e.params.cssMode)return;const{params:a,wrapperEl:w,rtlTranslate:E,snapGrid:g,touchEventsData:p}=e,i=j()-p.touchStartTime;if(x<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(x>-e.maxTranslate()){e.slides.length<g.length?e.slideTo(g.length-1):e.slideTo(e.slides.length-1);return}if(a.freeMode.momentum){if(p.velocities.length>1){const u=p.velocities.pop(),v=p.velocities.pop(),V=u.position-v.position,N=u.time-v.time;e.velocity=V/N,e.velocity/=2,Math.abs(e.velocity)<a.freeMode.minimumVelocity&&(e.velocity=0),(N>150||j()-u.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=a.freeMode.momentumVelocityRatio,p.velocities.length=0;let s=1e3*a.freeMode.momentumRatio;const o=e.velocity*s;let n=e.translate+o;E&&(n=-n);let h=!1,b;const S=Math.abs(e.velocity)*20*a.freeMode.momentumBounceRatio;let C;if(n<e.maxTranslate())a.freeMode.momentumBounce?(n+e.maxTranslate()<-S&&(n=e.maxTranslate()-S),b=e.maxTranslate(),h=!0,p.allowMomentumBounce=!0):n=e.maxTranslate(),a.loop&&a.centeredSlides&&(C=!0);else if(n>e.minTranslate())a.freeMode.momentumBounce?(n-e.minTranslate()>S&&(n=e.minTranslate()+S),b=e.minTranslate(),h=!0,p.allowMomentumBounce=!0):n=e.minTranslate(),a.loop&&a.centeredSlides&&(C=!0);else if(a.freeMode.sticky){let u;for(let v=0;v<g.length;v+=1)if(g[v]>-n){u=v;break}Math.abs(g[u]-n)<Math.abs(g[u-1]-n)||e.swipeDirection==="next"?n=g[u]:n=g[u-1],n=-n}if(C&&M("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(E?s=Math.abs((-n-e.translate)/e.velocity):s=Math.abs((n-e.translate)/e.velocity),a.freeMode.sticky){const u=Math.abs((E?-n:n)-e.translate),v=e.slidesSizesGrid[e.activeIndex];u<v?s=a.speed:u<2*v?s=a.speed*1.5:s=a.speed*2.5}}else if(a.freeMode.sticky){e.slideToClosest();return}a.freeMode.momentumBounce&&h?(e.updateProgress(b),e.setTransition(s),e.setTranslate(n),e.transitionStart(!0,e.swipeDirection),e.animating=!0,L(w,()=>{!e||e.destroyed||!p.allowMomentumBounce||(c("momentumBounce"),e.setTransition(a.speed),setTimeout(()=>{e.setTranslate(b),L(w,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(c("_freeModeNoMomentumRelease"),e.updateProgress(n),e.setTransition(s),e.setTranslate(n),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,L(w,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(n),e.updateActiveIndex(),e.updateSlidesClasses()}else if(a.freeMode.sticky){e.slideToClosest();return}else a.freeMode&&c("_freeModeNoMomentumRelease");(!a.freeMode.momentum||i>=a.longSwipesMs)&&(e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:m,onTouchMove:T,onTouchEnd:y}})}const $=[{id:1,name:"Подъемники",img_url:"lifts"},{id:2,name:"Виброплиты",img_url:"plits"},{id:3,name:"Телескопические погрузчики",img_url:"telehandlers"},{id:4,name:"Экскаваторы-погрузчики",img_url:"backhoe_loaders"},{id:5,name:"Экскаваторы-погрузчики",img_url:"backhoe_loaders"}];function B(){return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:l.jsx("path",{d:"M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM16.3301 8.70711C16.7207 8.31658 16.7207 7.68342 16.3301 7.29289L9.96619 0.928932C9.57566 0.538408 8.9425 0.538408 8.55197 0.928932C8.16145 1.31946 8.16145 1.95262 8.55197 2.34315L14.2088 8L8.55197 13.6569C8.16145 14.0474 8.16145 14.6805 8.55197 15.0711C8.9425 15.4616 9.57566 15.4616 9.96619 15.0711L16.3301 8.70711ZM1 9H15.623V7H1V9Z",fill:"#FFF"})})}const U=({id:r,name:e,img_url:f})=>l.jsxs(R,{className:"products-swiper-item",children:[l.jsx("img",{className:"products-swiper-img",src:F(f),alt:f}),l.jsx("p",{className:"products-swiper-text",children:e})]},r);function Z(){return l.jsxs(l.Fragment,{children:[l.jsx("button",{className:"products-swiper-button-prev button",children:l.jsx(B,{})}),l.jsx(D,{slidesPerView:"auto",pagination:{clickable:!0},modules:[_,z,I],className:"products-swiper",navigation:{nextEl:".products-swiper-button-next",prevEl:".products-swiper-button-prev"},breakpoints:{200:{centeredSlides:!0},876:{centeredSlides:!1,freeMode:!0}},children:$.map(U)}),l.jsx("button",{className:"products-swiper-button-next button",children:l.jsx(B,{})})]})}A.createRoot(document.getElementById("products_swiper")).render(l.jsx(q.StrictMode,{children:l.jsx(Z,{})}));const G=[{id:1,title:"У НАС ЛУЧШИЕ ОПЕРАТОРЫ",text:"Наши сотрудники позаботятся о том, чтобы работа была выполнена максимально качественно и в срок",svg:"headphones"},{id:2,title:"МЫ ПОСТОЯННО РАЗВИВАЕМСЯ",text:"Мы пополняем наш парк новейшей техникой, регулярно повышаем квалификацию сотрудников и следим за новыми технологиями, чтобы идти в ногу со временем",svg:"trending-up"},{id:3,title:"НАМ МОЖНО ДОВЕРЯТЬ",text:"Мы постоянно расширяем список наших партнеров, в числе наших заказчиков множество крупных строительных компаний",svg:"award"}];const X=({id:r,title:e,text:f,svg:c})=>l.jsxs(R,{className:"about_us-swiper-item",children:[l.jsx("img",{className:"about_us-swiper-img",src:F(c),alt:c}),l.jsx("h3",{className:"about_us-swiper-title",children:e}),l.jsx("p",{className:"about_us-swiper-text",children:f})]},r);function Y(){return l.jsx(l.Fragment,{children:l.jsx(D,{slidesPerView:"auto",spaceBetween:30,pagination:{clickable:!0},modules:[_,I],className:"about_us-swiper",breakpoints:{200:{centeredSlides:!0},1199:{centeredSlides:!1,freeMode:!0}},children:G.map(X)})})}A.createRoot(document.getElementById("about_us-cards")).render(l.jsx(q.StrictMode,{children:l.jsx(Y,{})}));const J=document.querySelectorAll(".form-field-input"),K=document.querySelector("#form_btn-submit"),k=document.querySelector("#contact_form"),P=r=>r.value?(r.closest(".form-field").classList.remove("warning"),!0):(r.closest(".form-field").classList.add("warning"),!1),Q=()=>{const r=document.forms.contact_form.name,e=document.forms.contact_form.phone,f=P(r),c=P(e);return f&&c},W=r=>{r.target.parentNode.parentNode.classList.add("focus")},ee=r=>{const e=r.target.parentNode.parentNode;r.target.value===""&&e.classList.remove("focus")},te=r=>{r.preventDefault(),Q()&&k!==void 0&&k!==null&&(k.submit(),k.reset())};K.addEventListener("click",te);J.forEach(r=>{r.addEventListener("focus",W),r.addEventListener("blur",ee)});new H(".describe-carusel",{slidesPerView:"auto",spaceBetween:20,freeMode:{enabled:!0,sticky:!0}});
