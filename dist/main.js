!function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var s=()=>{const e=document.querySelectorAll(".open-popup"),t=document.querySelectorAll(".popup");t.forEach(e=>{e.style.display="none"}),e.forEach(e=>{e.addEventListener("click",e=>{let t=e.target.closest(".open-popup");t.classList.add("active");let n=t.dataset.popup,s=document.querySelector(n);s.style.display="none"===s.style.display?"block":"none",t.closest(".fixed-gift")&&(t.style.display="none")})}),t.forEach(e=>{e.addEventListener("click",e=>{if(e.target.closest(".close-form, .overlay, nav.popup-menu ul li a,.close-btn")){document.querySelectorAll(".open-popup").forEach(e=>{e.classList.remove("active")}),t.forEach(e=>{(e.style.display="block")&&(e.style.display="none")})}})})};var i=(e,t,n)=>{const s=document.querySelector(`.${e}-slider`),i=document.querySelectorAll(`.${e}-slider .slide`);let o,l=0;if(n){const e=e=>{const t=document.createElement("div");t.classList.add("slider-arrow",e),s.append(t),t.innerHTML='<span><?xml version="1.0" encoding="iso-8859-1"?><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve">\n    <g>\n        <path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5\n            c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z\n            "/>\n    </g>\n    </svg></span>'};e("prev"),e("next")}let r=[],d=document.createElement("ul");d.classList.add("dots"),s.append(d);for(let e=0;e<i.length;e++){let t=document.createElement("li");t.classList.add("dot"),r[e]=t,d.append(t)}r[l].classList.add("dot-active");const a=(e,t,n)=>{e[t].classList.remove(n)},c=(e,t,n)=>{e[t].classList.add(n)},p=()=>{a(i,l,"active"),a(r,l,"dot-active"),l++,l>=i.length&&(l=0),c(i,l,"active"),c(r,l,"dot-active")},h=(e=1500)=>{o=setInterval(p,e)};s.addEventListener("click",e=>{e.preventDefault();let t=e.target;a(i,l,"active"),a(r,l,"dot-active"),t.closest(".next")?l++:t.closest(".prev")?l--:t.matches(".dot")&&r.forEach((e,n)=>{e===t&&(l=n)}),l>=i.length&&(l=0),l<0&&(l=i.length-1),c(i,l,"active"),c(r,l,"dot-active")}),s.addEventListener("mouseover",e=>{(e.target.closest(".slider-arrow")||e.target.matches(".dot"))&&clearInterval(o)}),s.addEventListener("mouseout",e=>{(e.target.closest(".slider-arrow")||e.target.matches(".dot"))&&h()}),h(t)};var o=()=>{const e=document.documentElement.clientWidth,t=document.querySelector(".top-menu"),n=t.getBoundingClientRect().top+window.pageYOffset,s=()=>{t.classList.contains("sticky")&&t.classList.remove("sticky")},i=()=>{(window.pageYOffset||document.documentElement.scrollTop)>=n?t.classList.add("sticky"):t.classList.remove("sticky")};e<768&&window.addEventListener("scroll",(function(){i()})),window.addEventListener("resize",(function(){let e=document.documentElement.clientWidth;e>=768?(s(),window.addEventListener("scroll",(function(){s()}))):e<768&&(i(),window.addEventListener("scroll",(function(){i()})))}))};var l=()=>{const e=document.getElementById("totop");e.style.display="none";const t=document.querySelector(".header-main").getBoundingClientRect().height;window.addEventListener("scroll",(function(){let n=window.pageYOffset||document.documentElement.scrollTop;e.style.display=n>=t?"block":"none"}))};var r=()=>{const e=document.getElementById("price-total");if(e){const t=document.getElementById("card_order"),n={mozaika:[1999,9900,13900,19900],schelkovo:[2999,14990,21990,24990]},s=document.getElementById("promocode");let i=0,o=n.mozaika,l=n.mozaika[0];e.innerHTML=l,t.addEventListener("click",t=>{let r=t.target;r.closest(".time")&&"LABEL"===r.tagName&&(i=+r.getAttribute("for").slice(1,r.length)-1),r.closest(".club")&&"INPUT"===r.tagName&&(o=n[r.getAttribute("value")]),l=o[i],"ТЕЛО2019"===s.value&&(l=Math.ceil(.7*l),e.innerHTML=l),e.innerHTML=l}),(()=>{s.addEventListener("input",()=>{"ТЕЛО2019"===s.value&&(l=Math.ceil(.7*l),e.innerHTML=l)})})()}};var d=(e,t)=>{const n=document.getElementById(e),s=document.createElement("div");s.style.cssText="font-size: 20px;padding-top:10px;color:#ff7100;max-width:400px;margin: 0 auto;",n.appendChild(s);const i=document.createElement("div"),o='<div class="container-load">\n                        <div class="item-1"></div>\n                        <div class="item-2"></div>\n                        <div class="item-3"></div>\n                        <div class="item-4"></div>\n                        <div class="item-5"></div>\n                    </div>';i.style.cssText="font-size: 20px;padding-top:10px;color:#ff7100;max-width:400px;margin: 0 auto;",n.appendChild(i);const l=document.getElementById("thanks"),r=document.querySelector("#thanks .form-content"),d="Необходимо подтвердить согласие на обработку персональных данных";let a;!1!==t&&(a=document.getElementById(t),a.addEventListener("change",()=>{a&&!1===a.checked?s.textContent=d:s.textContent=""}));const c=document.getElementById("footer_form"),p=document.querySelectorAll('#footer_form .club > input[type="radio"]');let h=!1;p.forEach(e=>{e.checked&&(h=!0)}),h||c.addEventListener("click",e=>{e.target.closest(".club")&&(s.textContent="",h=!0),p.forEach(e=>{e.checked&&(h=!0)})}),n.addEventListener("submit",l=>{l.preventDefault();let r=l.target;n.appendChild(s),n.appendChild(i),i.innerHTML=o;const c=new FormData(n);let p={};if(c.forEach((e,t)=>{p[t]=e}),!1!==t){if(a&&!1===a.checked)return s.textContent=d,void(i.innerHTML="");s.textContent="",i.innerHTML=o}if(r.closest("#footer_form")){if(!h)return void(s.textContent="Пожалуйста, выберите клуб");s.textContent=""}if(p.phone&&p.phone.length<4)return s.textContent="номер телефона не может быть меньше 4",void(i.innerHTML="");u(p),m(e)});const u=e=>{const t=new XMLHttpRequest;t.addEventListener("readystatechange",()=>{4===t.readyState&&(200===t.status?(l.style.display="block",i.innerHTML=""):(l.style.display="block",r.innerHTML='<div class="form-content">\n                    <h4>Извините!</h4>\n                    <p>Что-то пошло не так.<br> Ваша заявка не отправлена.</p>\n                    <button class="btn close-btn">Закрыть</button>\n                </div>'))}),t.open("POST","./server.php"),t.setRequestHeader("Content-Type","application/json"),t.send(JSON.stringify(e))},m=e=>{document.getElementById(e).querySelectorAll("input").forEach(e=>{"form_name"===e.name&&"card-type"===e.name||(e.value="")})}};var a=()=>{document.querySelectorAll(".textValid").forEach(e=>{e.addEventListener("input",()=>{e.value=e.value.replace(/[a-z\d]/g,"")})})};var c=function(e,t="+7 (___) ___-__-__"){function n(e){const n=e.keyCode,s=t,i=s.replace(/\D/g,""),o=this.value.replace(/\D/g,"");let l=0,r=s.replace(/[_\d]/g,(function(e){return l<o.length?o.charAt(l++)||i.charAt(l):e}));l=r.indexOf("_"),-1!=l&&(r=r.slice(0,l));let d=s.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");d=new RegExp("^"+d+"$"),(!d.test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=r),"blur"==e.type&&this.value.length<5&&(this.value="")}document.querySelectorAll(e).forEach(e=>{e.addEventListener("input",n),e.addEventListener("focus",n),e.addEventListener("blur",n)})};var p=class{constructor({main:e,wrap:t,next:n,prev:s,infinity:i=!1,position:o=0,slidesToShow:l=4,responsive:r=[]}){this.main=document.querySelector(e),this.wrap=document.querySelector(t),this.slides=document.querySelector(t).children,this.next=document.querySelector(n),this.prev=document.querySelector(s),this.slidesToShow=l,this.options={position:o,infinity:i,widthSlide:Math.floor(100/this.slidesToShow)},this.responsive=r}init(){this.addCssClass(),this.addStyle(),this.prev&&this.next?this.controlSlider():(this.addArrow(),this.controlSlider()),this.responsive&&this.responseInit()}addCssClass(){this.main.classList.add("xs-slider"),this.wrap.classList.add("xs-slider__wrap");for(const e of this.slides)e.classList.add("xs-slider__item")}addStyle(){let e=document.getElementById("sliderCarousel-style");e||(e=document.createElement("style"),e.id="sliderCarousel-style"),e.textContent=`\n            .xs-slider {\n                overflow: hidden;\n            }\n            .xs-slider__wrap {\n                display: flex;\n                transition: transform .5s;\n                will-change: transform;\n            }\n            .xs-slider__item {\n                flex: 0 0 ${this.options.widthSlide}%;\n                margin: auto 0;\n            }            \n        `,document.head.appendChild(e)}controlSlider(){this.prev.addEventListener("click",this.prevSlide.bind(this)),this.next.addEventListener("click",this.nextSlide.bind(this))}prevSlide(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.slides.length-this.slidesToShow),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}nextSlide(){(this.options.infinity||this.options.position<this.slides.length-this.slidesToShow)&&(++this.options.position,this.options.position>this.slides.length-this.slidesToShow&&(this.options.position=0),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}addArrow(){this.prev=document.createElement("div"),this.next=document.createElement("div"),this.prev.innerHTML="<span><</span>",this.next.innerHTML="<span>></span>",this.prev.classList.add("slider-arrow","xs-slider__prev"),this.next.classList.add("slider-arrow","xs-slider__next"),this.main.appendChild(this.prev),this.main.appendChild(this.next)}responseInit(){const e=this.slidesToShow,t=this.responsive.map(e=>e.breakpoint),n=Math.max(...t),s=()=>{const s=document.documentElement.clientWidth;if(s<n)for(let e=0;e<t.length;e++)s<t[e]&&(this.slidesToShow=this.responsive[e].slidesToShow,this.options.widthSlide=Math.floor(100/this.slidesToShow),this.addStyle());else this.slidesToShow=e,this.options.widthSlide=Math.floor(100/this.slidesToShow),this.addStyle()};s(),window.addEventListener("resize",s)}};(()=>{const e=document.querySelector(".club-select p"),t=document.querySelector(".club-select ul");e.addEventListener("click",e=>{e.target&&(t.style.display=""===t.style.display?"block":"")})})(),s(),i("main",5e3,!1),i("gallery",1500,!0),o(),l(),r(),d("banner-form","check1"),d("footer_form",!1),d("card_order","card_check"),d("form1","check"),d("form2","check2"),a(),c('input[type="tel"]'),new p({main:"#services .wrapper",wrap:".services-slider",slidesToShow:4,infinity:!0,responsive:[{breakpoint:1024,slidesToShow:3},{breakpoint:768,slidesToShow:2},{breakpoint:576,slidesToShow:1}]}).init()}]);