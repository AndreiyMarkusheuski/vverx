import{g as d}from"./onload-8de1ddf8.js";import{j as t,S as u,P as m,N as x,f as p,a as f,c as h,R as w,b as S,d as j}from"./vendor-52cd8544.js";const L=[{name:"Подъемники",id:"lifts"},{name:"Виброплиты",id:"plits"},{name:"Телескопические погрузчики",id:"telehandlers"},{name:"Экскаваторы-погрузчики",id:"backhoe_loaders"}];function c(){return t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:t.jsx("path",{d:"M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM16.3301 8.70711C16.7207 8.31658 16.7207 7.68342 16.3301 7.29289L9.96619 0.928932C9.57566 0.538408 8.9425 0.538408 8.55197 0.928932C8.16145 1.31946 8.16145 1.95262 8.55197 2.34315L14.2088 8L8.55197 13.6569C8.16145 14.0474 8.16145 14.6805 8.55197 15.0711C8.9425 15.4616 9.57566 15.4616 9.96619 15.0711L16.3301 8.70711ZM1 9H15.623V7H1V9Z",fill:"#FFF"})})}const N=({id:e,name:s})=>t.jsx(f,{className:"products-swiper-item",children:t.jsxs("a",{href:`./catalog/?type=rent&equipment=${e}`,children:[t.jsx("img",{className:"products-swiper-img",src:d(e),alt:e}),t.jsx("p",{className:"products-swiper-text",children:s})]})},e);function _(){return t.jsxs(t.Fragment,{children:[t.jsx("button",{className:"products-swiper-button-prev button",children:t.jsx(c,{})}),t.jsx(u,{pagination:{clickable:!0},modules:[m,x,p],className:"products-swiper",navigation:{nextEl:".products-swiper-button-next",prevEl:".products-swiper-button-prev"},breakpoints:{200:{centeredSlides:!0,spaceBetween:0,slidesPerView:"auto",freeMode:!1},1e3:{freeMode:!0,centeredSlides:!1,slidesPerView:4,spaceBetween:20}},children:L.map(N)}),t.jsx("button",{className:"products-swiper-button-next button",children:t.jsx(c,{})})]})}h.createRoot(document.getElementById("products_swiper")).render(t.jsx(w.StrictMode,{children:t.jsx(_,{})}));const k=[{id:1,title:"У НАС ЛУЧШИЕ ОПЕРАТОРЫ",text:"Наши сотрудники позаботятся о том, чтобы работа была выполнена максимально качественно и в срок",svg:"headphones"},{id:2,title:"МЫ ПОСТОЯННО РАЗВИВАЕМСЯ",text:"Мы пополняем наш парк новейшей техникой, регулярно повышаем квалификацию сотрудников и следим за новыми технологиями, чтобы идти в ногу со временем",svg:"trending-up"},{id:3,title:"НАМ МОЖНО ДОВЕРЯТЬ",text:"Мы постоянно расширяем список наших партнеров, в числе наших заказчиков множество крупных строительных компаний",svg:"award"}];const E=({id:e,title:s,text:r,svg:n})=>t.jsxs(f,{className:"about_us-swiper-item",children:[t.jsx("img",{className:"about_us-swiper-img",src:d(n),alt:n}),t.jsx("h3",{className:"about_us-swiper-title",children:s}),t.jsx("p",{className:"about_us-swiper-text",children:r})]},e);function F(){return t.jsx(t.Fragment,{children:t.jsx(u,{slidesPerView:"auto",spaceBetween:30,pagination:{clickable:!0},modules:[m,p],className:"about_us-swiper",breakpoints:{200:{centeredSlides:!0},1e3:{centeredSlides:!1,freeMode:!0}},children:k.map(E)})})}h.createRoot(document.getElementById("about_us-cards")).render(t.jsx(w.StrictMode,{children:t.jsx(F,{})}));const C=document.querySelectorAll(".form-field-input"),B=document.querySelector("#form_btn-submit"),o=document.querySelector("#contact_form"),l=e=>e.value?(e.closest(".form-field").classList.remove("warning"),!0):(e.closest(".form-field").classList.add("warning"),!1),y=()=>{const e=document.forms.contact_form.name,s=document.forms.contact_form.phone,r=l(e),n=l(s);return r&&n},M=e=>{e.target.parentNode.parentNode.classList.add("focus")},q=e=>{const s=e.target.parentNode.parentNode;e.target.value===""&&s.classList.remove("focus")},A=e=>{e.preventDefault(),y()&&o!==void 0&&o!==null&&(o.submit(),o.reset())};B.addEventListener("click",A);C.forEach(e=>{e.addEventListener("focus",M),e.addEventListener("blur",q)});new S(".describe-carusel",{slidesPerView:"auto",spaceBetween:20,freeMode:{enabled:!0,sticky:!0}});const I=document.querySelectorAll(".header-nav-link"),g=document.querySelector(".header-nav-links"),P=()=>{I.forEach(e=>{e.classList.remove("active")})},R=e=>{e.classList.remove("dark"),e.classList.remove("light")},V=()=>{P(),R(g)};window.onload=()=>{const e={root:null,rootMargin:"0px",threshold:.51},s=new IntersectionObserver(n=>{n.forEach(i=>{if(i.isIntersecting){V();const a=i.target,v=a.id,b=a.getAttribute("data-theme");document.querySelector(`#${v}-link`).classList.add("active"),g.classList.add(b)}})},e);document.querySelectorAll(".smooth_scroll-section").forEach(n=>{s.observe(n)})};new j("#smooth_scroll",{licenseKey:"C7F41B00-5E824594-9A5EFB99-B556A3D5",anchors:["describe","products","about_us","contacts_footer"],menu:"#menu",scrollingSpeed:1200,scrollOverflow:!0,easing:"easeInOutCubic",responsiveWidth:876,afterResize:function(){this.reBuild()}});
