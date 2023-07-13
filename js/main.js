"user strict"

// подружить 100vh на главном экране с мобильной версией crome. В CSS написать - height: calc(var(--vh, 1vh) * 100);
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
/*!
 * ScrollSmoother 3.10.2
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * This plugin is a membership benefit of Club GreenSock and is only authorized for use in sites/apps/products developed by individuals/companies with an active Club GreenSock membership. See https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(){return"undefined"!=typeof window}function q(){return P||p()&&(P=window.gsap)&&P.registerPlugin&&P}var P,k,R,_,C,H,M,A,F,B,I,U,t=(ScrollSmoother.register=function register(e){return k||(P=e||q(),p()&&window.document&&(R=window,_=document,C=_.documentElement,H=_.body),P&&(M=P.utils.toArray,A=P.utils.clamp,I=P.parseEase("expo"),F=P.core.globals().ScrollTrigger,P.core.globals("ScrollSmoother",ScrollSmoother),H&&F&&(U=F.core._getVelocityProp,k=1))),k},function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(ScrollSmoother,[{key:"progress",get:function get(){return this.scrollTrigger.animation._time/100}}]),ScrollSmoother);function ScrollSmoother(e){var o=this;k||ScrollSmoother.register(P)||console.warn("Please gsap.registerPlugin(ScrollSmoother)"),e=this.vars=e||{},B&&B.kill(),B=this;function ja(){return T.update(-g)}function la(){return r.style.overflow="visible"}function na(e){var t=e.getTween();t&&(t.pause(),t._time=t._dur,t._tTime=t._tDur),u=!1,e.animation.progress(e.progress,!0)}function oa(e,t){(e!==g&&!l||t)&&(d&&(r.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+e+", 0, 1)"),w=e-g,g=e,F.isUpdating||F.update())}function pa(e){return arguments.length?(l&&(g=-e),x.y=-e,u=!0,h(e),this):-g}function ra(e){v.scrollTop=0,F.isInViewport(e.target)||e.target===f||o.scrollTo(e.target,!1,"center center"),f=e.target}function sa(e){var r,n,o,i;b.forEach(function(t){r=t.pins,i=t.markers,e.forEach(function(e){e.trigger!==t.trigger&&e.pinnedContainer!==t.trigger||t===e||(n=e.start,o=(n-t.start-t.offset)/t.ratio-(n-t.start),r.forEach(function(e){return o-=e.distance/t.ratio-e.distance}),e.setPositions(n+o,e.end+o),e.markerStart&&i.push(P.quickSetter([e.markerStart,e.markerEnd],"y","px")),e.pin&&0<e.end&&(o=e.end-e.start,r.push({start:e.start,end:e.end,distance:o,trig:e}),t.setPositions(t.start,t.end+o),t.vars.onRefresh(t)))})})}function ta(){la(),requestAnimationFrame(la),b&&(b.forEach(function(e){var t=e.start,r=e.auto?Math.min(F.maxScroll(e.scroller),e.end):t+(e.end-t)/e.ratio,n=(r-e.end)/2;t-=n,r-=n,e.offset=n||1e-4,e.pins.length=0,e.setPositions(Math.min(t,r),Math.max(t,r)),e.vars.onRefresh(e)}),sa(F.sort())),T.reset()}function ua(){return b&&b.forEach(function(e){return e.vars.onRefresh(e)})}function va(){return b&&b.forEach(function(e){return e.vars.onRefreshInit(e)}),ua}function wa(t,r,n,o){return function(){var e="function"==typeof r?r(n,o):r;return e||0===e||(e=o.getAttribute("data-"+t)||("speed"===t?1:0)),o.setAttribute("data-"+t,e),"auto"===e?e:parseFloat(e)}}function xa(r,e,t,n){function lb(){e=a(),t=f(),o=parseFloat(e)||1,c=(s="auto"===e)?0:.5,l&&l.kill(),l=t&&P.to(r,{ease:I,overwrite:!1,y:"+=0",duration:t}),i&&(i.ratio=o,i.autoSpeed=s)}function mb(){d.y=h+"px",d.renderTransform(1),lb()}function qb(e){if(s){mb();var t=function _autoDistance(e,t){var r,n,o=e.parentNode||C,i=e.getBoundingClientRect(),a=o.getBoundingClientRect(),s=a.top-i.top,l=a.bottom-i.bottom,c=(Math.abs(s)>Math.abs(l)?s:l)/(1-t),u=-c*t;return 0<c&&(u+=-(n=.5==(r=a.height/(R.innerHeight+a.height))?2*a.height:2*Math.min(a.height,-c*r/(2*r-1)))/2,c+=n),{change:c,offset:u}}(r,A(0,1,-e.start/(e.end-e.start)));m=t.change,u=t.offset}else m=(e.end-e.start)*(1-o),u=0;g.forEach(function(e){return m-=e.distance*(1-o)}),e.vars.onUpdate(e),l&&l.progress(1)}var o,i,s,l,c,u,a=wa("speed",e,n,r),f=wa("lag",t,n,r),h=P.getProperty(r,"y"),d=r._gsap,g=[],p=[],m=0;return lb(),(1!==o||s||l)&&(qb(i=F.create({trigger:s?r.parentNode:r,scroller:v,scrub:!0,refreshPriority:-999,onRefreshInit:mb,onRefresh:qb,onKill:function onKill(e){var t=b.indexOf(e);0<=t&&b.splice(t,1)},onUpdate:function onUpdate(e){var t,r,n,o=h+m*(e.progress-c),i=g.length,a=0;if(e.offset){if(i){for(r=-x.y,n=e.end;i--;){if((t=g[i]).trig.isActive||r>=t.start&&r<=t.end)return void(l&&(t.trig.progress+=t.trig.direction<0?.001:-.001,t.trig.update(0,0,1),l.resetTo("y",parseFloat(d.y),-w,!0),S&&l.progress(1)));r>t.end&&(a+=t.distance),n-=t.distance}o=h+a+m*((P.utils.clamp(e.start,e.end,r)-e.start-a)/(n-e.start)-c)}o=function _round(e){return Math.round(1e5*e)/1e5||0}(o+u),p.length&&!s&&p.forEach(function(e){return e(o-a)}),l?(l.resetTo("y",o,-w,!0),S&&l.progress(1)):(d.y=o+"px",d.renderTransform(1))}}})),P.core.getCache(i.trigger).stRevert=va,i.startY=h,i.pins=g,i.markers=p,i.ratio=o,i.autoSpeed=s,r.style.willChange="transform"),i}var r,v,t,n,b,i,a,s,l,c,u,f,h=F.getScrollFunc(R),d=1===F.isTouch?!0===e.smoothTouch?.8:parseFloat(e.smoothTouch)||0:0===e.smooth||!1===e.smooth?0:parseFloat(e.smooth)||.8,g=0,w=0,S=1,p=e.onUpdate,m=e.onStop,T=U(0),x={y:0};function refreshHeight(){return t=r.clientHeight,r.style.overflow="visible",H.style.height=t+"px",t-R.innerHeight}F.addEventListener("refresh",ta),P.delayedCall(.5,function(){return S=0}),this.scrollTop=pa,this.scrollTo=function(e,t,r){var n=P.utils.clamp(0,F.maxScroll(R),isNaN(e)?o.offset(e,r):+e);t?l?P.to(o,{duration:d,scrollTop:n,overwrite:"auto",ease:I}):h(n):pa(n)},this.offset=function(e,t){e=M(e)[0];var r,n=P.getProperty(e,"y"),o=F.create({trigger:e,start:t||"top top"});return b&&sa([o]),r=o.start,o.kill(!1),P.set(e,{y:n}),r},this.content=function(e){return arguments.length?(r=M(e||"#smooth-content")[0]||H.children[0],s=r.getAttribute("style")||"",P.set(r,{overflow:"visible",width:"100%"}),this):r},this.wrapper=function(e){return arguments.length?(v=M(e||"#smooth-wrapper")[0]||function _wrap(e){var t=_.createElement("div");return t.classList.add("ScrollSmoother-wrapper"),e.parentNode.insertBefore(t,e),t.appendChild(e),t}(r),a=v.getAttribute("style")||"",refreshHeight(),P.set(v,d?{overflow:"hidden",position:"fixed",height:"100%",width:"100%",top:0,left:0,right:0,bottom:0}:{overflow:"visible",position:"relative",width:"100%",height:"auto",top:"auto",bottom:"auto",left:"auto",right:"auto"}),this):v},this.effects=function(e,t){if(b=b||[],!e)return b.slice(0);(e=M(e)).forEach(function(e){for(var t=b.length;t--;)b[t].trigger===e&&(b[t].kill(),b.splice(t,1))});t=t||{};var r,n,o=t.speed,i=t.lag,a=[];for(r=0;r<e.length;r++)(n=xa(e[r],o,i,r))&&a.push(n);return b.push.apply(b,a),a},this.content(e.content),this.wrapper(e.wrapper),this.render=function(e){return oa(e||0===e?e:g)},this.getVelocity=function(){return T.getVelocity(-g)},F.scrollerProxy(v,{scrollTop:pa,scrollHeight:function scrollHeight(){return H.scrollHeight},fixedMarkers:!1!==e.fixedMarkers&&!!d,content:r,getBoundingClientRect:function getBoundingClientRect(){return{top:0,left:0,width:R.innerWidth,height:R.innerHeight}}}),F.defaults({scroller:v});var E=F.getAll().filter(function(e){return e.scroller===R||e.scroller===v});E.forEach(function(e){return e.revert(!0)}),n=F.create({animation:P.to(x,{y:function y(){return R.innerHeight-t},ease:"none",data:"ScrollSmoother",duration:100,onUpdate:function onUpdate(){var e=u;e&&(x.y=g,na(n)),oa(x.y,e),ja(),p&&!l&&p(o)}}),onRefreshInit:function onRefreshInit(){return x.y=0},id:"ScrollSmoother",scroller:R,invalidateOnRefresh:!0,start:0,refreshPriority:-9999,end:refreshHeight,onScrubComplete:function onScrubComplete(){T.reset(),m&&m(o)},scrub:d||!0,onRefresh:function onRefresh(e){na(e),oa(x.y)}}),this.smooth=function(e){return d=e,arguments.length?n.scrubDuration(e):n.getTween()?n.getTween().duration():0},n.getTween()&&(n.getTween().vars.ease=e.ease||I),this.scrollTrigger=n,e.effects&&this.effects(!0===e.effects?"[data-speed], [data-lag]":e.effects,{}),E.forEach(function(e){e.vars.scroller=v,e.init(e.vars,e.animation)}),this.paused=function(e){return arguments.length?(!!l!==e&&(e?(n.getTween()&&n.getTween().pause(),h(-g),T.reset(),(c=F.normalizeScroll())&&c.disable(),l=F.observe({preventDefault:!0,type:"wheel,touch,scroll",debounce:!1,onChangeY:function onChangeY(){return pa(-g)}})):(l.kill(),l=0,c&&c.enable(),n.progress=(-g-n.start)/(n.end-n.start),na(n))),this):!!l},this.kill=function(){o.paused(!1),na(n),n.kill();for(var e=b?b.length:0;e--;)b[e].kill();F.scrollerProxy(v),F.removeEventListener("refresh",ta),v.style.cssText=a,r.style.cssText=s;var t=F.defaults({});t&&t.scroller===v&&F.defaults({scroller:R}),o.observer&&F.normalizeScroll(!1),clearInterval(i),B=null,R.removeEventListener("focusin",ra)},e.normalizeScroll&&(this.observer=F.normalizeScroll({debounce:!0})),F.config(e),"overscrollBehavior"in R.getComputedStyle(H)&&P.set(H,{overscrollBehavior:"none"}),R.addEventListener("focusin",ra),i=setInterval(ja,250),"loading"===_.readyState||requestAnimationFrame(function(){return F.refresh()})}t.version="3.10.2",t.create=function(e){return B&&e&&B.content()===M(e.content)[0]?B:new t(e)},t.get=function(){return B},q()&&P.registerPlugin(t),e.ScrollSmoother=t,e.default=t;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});


// Попап
const popupLinks = document.querySelectorAll('.popup-link');//добавляем данный класс в HTML дополнительно!!! на ссыллки которые ведут к попап окну
const body = document.querySelector('body');//для блокировки скрола при открытом попапе
const lockPadding = document.querySelectorAll(".lock-padding");//добавляем данный класс в HTML дополнительно!!! к фиксированным объектам, например к шапке, чтобы учитывать ширину скролла 

let unlock = true//что бы не было двойных нажатий

const timeout = 800;//цифра должна совпадать с css - transition: 0.8s

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });   
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');//добавляем данный класс в HTML для закрытия попапа
if (popupCloseIcon.length > 0) {    
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener("click", function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });   
    }
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener("click", function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}
function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }   
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;//высчитываем ширину скрола, чтобы при появлении попапа контент не сдвигался
        }
    }    
    body.style.paddingRight = lockPaddingValue;//высчитываем ширину скрола, чтобы при появлении попапа контент не сдвигался
    body.classList.add('_lock');

    unlock = false;
    setTimeout(function() {
        unlock = true;
    }, timeout);
}

function bodyUnLock() {//высчитываем ширину скрола, чтобы при появлении попапа он не сдвигался
    setTimeout(function () {
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
        }    
        body.style.paddingRight = '0px';
        body.classList.remove('_lock');
    }, timeout);

    unlock = false;
    setTimeout(function() {
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
}); 

(function () {
    //проверям поддержку
    if (!Element.prototype.closest) {
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();
(function () {
    if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector;
    }    
})();
window.addEventListener("load", windowLoad);

function windowLoad() {
  //функция инициализации
  function digitsCountersInit(digitsCountersItems) {
    let digitsCounters = digitsCountersItems ? digitsCountersItems : document.querySelectorAll("[data-digits-counter]");
    if (digitsCounters) {
      digitsCounters.forEach(digitsCounter => {
        digitsCountersAnimate(digitsCounter);
      }); 
    }
  }
  //функция анимации
  function digitsCountersAnimate(digitsCounter) {
    let startTimestamp = null;
    const duration = parseInt(digitsCounter.dataset.digitsCounter) ? parseInt(digitsCounter.dataset.digitsCounter) : 3000;// время анимации
    const startValue = parseInt(digitsCounter.innerHTML);
    const startPosition = 0;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      digitsCounter.innerHTML = Math.floor(progress * (startPosition + startValue));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  //Пуск анимации сразу при загрузки страницы
  // digitsCountersInit();

  //Пуск анимации при скролле страницы до секции
  let options = {
    threshold: 0.3//анимация сработает когда нужная секция отпуститься на 30% вниз
  }
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetElement = entry.target;
        const digitsCountersItems = targetElement.querySelectorAll("[data-digits-counter]");
        if (digitsCountersItems.length) {
          digitsCountersInit(digitsCountersItems);
        }
        // если надо чтобы онимация сработала только один раз при загрузке страницы, то включаем:
        // observer.unobserve(targetElement);
      }
    });
  }, options);

  let sections = document.querySelectorAll('.about-us');//родитель где находиться счетчик
  if (sections.length) {
    sections.forEach(section => {
      observer.observe(section);
    });
  } 
}


/* слайдер на главной странице */

// if (document.querySelector('.main-slider')) {
//   const swiper = new Swiper('.main-slider__swiper', {
//     // бесконечная прокрутка
//     loop: true,
//     //автоматическая прокрутка при загрузке страници
//       autoplay:{ 
//           delay: 2500,
//           stopOnLastSlider: true, 
//           disableOninteraction: false
//       },
//     // Скорость прокрутки  
//     speed: 1000,  
//     // базавая пагинация
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     // Количество слайдев для показа
//     slidesPerView: 1,
//       // Стартовый слайд
//       initialSlide: 0,
//       // Паралакс
//       parallax: true,
//       // Упарвление клавиатурой
//       keyboard: {
//         enabled: true,
//         onlyInViewport: true,
//         pageUpDown: true,
//       },
//     // Отключение функционала, если слайдов меньше чем нужно
//     watchOverflow: true,
//     // Обновить свайпер при изменении элементов свайпера
//     observer: true,
//     // Обновить свайпер при изменении дочерних элементов свайпера
//     observeSlideChildren: true,
//     // Обновить свайпер при изменении родительских элементов свайпера
//     observeParents: true,
//     //счётчик слайдеров
//     on: {
//       init: function (swiper) {
//         const allSlides = document.querySelector('.fraction-control__all');
//         const allSlidesItems = document.querySelectorAll('.discription-slider__swiper-slide:not(.swiper-slide-duplicate)');
//         allSlides.innerHTML = allSlidesItems.length < 10 ? `0${allSlidesItems.length}` : allSlidesItems.length;
//       },
//       slideChange: function (swiper) {
//         const currentSlide = document.querySelector('.fraction-control__current');
//         currentSlide.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex + 1;
//       }
//     },
//     //брекпоинты
//     breakpoints: {
//       320: {
//         spaceBetween: 40,
//         autoHeight: true
//       },
//       1260: {
//         spaceBetween: 40
//       },
//     },
//   });
// }


/* slider-main */
const doubleSliders = new Swiper('.slider__double .swiper-container', { // ищем слайдер превью по селектору
	// задаем параметры
	direction: 'vertical', // вертикальная прокрутка
	slidesPerView: 3, // показывать по 1 изображению
	centeredSlides: true,
	spaceBetween: 32, // расстояние между слайдами
	mousewheel: false, // можно прокручивать изображения колёсиком мыши
	navigation: { // задаем кнопки навигации
		nextEl: '.slider__next', // кнопка Next
		prevEl: '.slider__prev' // кнопка Prev
	},
  // slideToClickedSlide: true,
	grabCursor: true, // менять иконку курсора
	// thumbs: { // указываем на превью слайдер
	// 	swiper: sliderThumbs // указываем имя превью слайдера
	// },
	// breakpoints: { // условия для разных размеров окна браузера
	// 	0: { // при 0px и выше
	// 		direction: 'horizontal', // горизонтальная прокрутка
	// 	},
	// 	768: { // при 768px и выше
	// 		direction: 'vertical', // вертикальная прокрутка
	// 	}
	// }
});

const sliderThumbs = new Swiper('.slider-main__thumbs .swiper-container', { // ищем слайдер превью по селектору
	// задаем параметры
	direction: 'vertical', // вертикальная прокрутка
	slidesPerView: 1, // показывать по 3 превью
	loop: true,
	spaceBetween: 24, // расстояние между слайдами
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	navigation: { // задаем кнопки навигации
		nextEl: '.slider__next', // кнопка Next
		prevEl: '.slider__prev' // кнопка Prev
	},
  	thumbs: { // указываем на превью слайдер
		swiper: doubleSliders,
	},
	freeMode: true, // при перетаскивании превью ведет себя как при скролле
	// breakpoints: { // условия для разных размеров окна браузера
	// 	0: { // при 0px и выше
	// 		direction: 'horizontal', // горизонтальная прокрутка
	// 	},
	// 	768: { // при 768px и выше
	// 		direction: 'vertical', // вертикальная прокрутка
	// 	}
	// }
});

/* слайдер reviews */

if (document.querySelector('.reviews')) {
  const swiper = new Swiper('.reviews__swiper', {
    // Скорость прокрутки  
    speed: 1000,  
    // Количество слайдев для показа
    slidesPerView: 4,
	spaceBetween: 6,
      // Паралакс
      parallax: true,
      // Упарвление клавиатурой
	  navigation: { // задаем кнопки навигации
		nextEl: '.reviews__next', // кнопка Next
		prevEl: '.reviews__prev' // кнопка Prev
	},
    // Отключение функционала, если слайдов меньше чем нужно
    watchOverflow: true,
    // Обновить свайпер при изменении элементов свайпера
    observer: true,
    // Обновить свайпер при изменении дочерних элементов свайпера
    observeSlideChildren: true,
    // Обновить свайпер при изменении родительских элементов свайпера
    observeParents: true,
    breakpoints: {
      320: {
        slidesPerView: 2
      },
	  680: {
        slidesPerView: 3
      },
      980: {
        slidesPerView: 4
      },
    },
  });
}
/* спойлеры */
/* 
Для родителя спойлеров пишем атрибут data-spollers
Для заголовка спойлеров пишем атрибут data-spoller
Если нужно вкл\вкл работу спойлеров на различных экранах мониторов
пишем параметры ширены и и тип брейкпоинта
Например:
data-spollers="800,max"

Если нужно чтобы в блоке открывался только один спойлер добавляем атрибут data-one-spoller
*/
const spollersArray = document.querySelectorAll('[data-spollers]');
if (spollersArray.length > 0) {

    // Получение обычных спойлеров
    const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
        return !item.dataset.spollers.split(",")[0];
    });

    // Инициализация обычных спойлеров
    if (spollersRegular.length > 0) {
        initSpollers(spollersRegular);
    }

    // Получение спойлеров с медиа запросами
    const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
        return item.dataset.spollers.split(",")[0];
    });

     // Инициализация спойлеров с медиа запросами
     if (spollersMedia.length > 0) {
        const breakpointsArray = [];
        spollersMedia.forEach(item => {
            const params = item.dataset.spollers;
            const breakpoint = {};
            const paramsArray = params.split(",");
            breakpoint.value = paramsArray[0];
            breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
            breakpoint.item = item;
            breakpointsArray.push(breakpoint);
        });

        // Получаем уникальные брекпоинты
        let mediaQueries = breakpointsArray.map(function (item) {
            return '(' + item.type + "-width: "+ item.value + "px)," + item.value + ',' + item.type;

        });
        mediaQueries = mediaQueries.filter(function (item, index, self) {
            return self.indexOf(item) === index;
        });

        // Работаем с каждым брейкпоинтом
        mediaQueries.forEach(breakpoint => {
            const paramsArray = breakpoint.split(",");
            const mediaBreakpoint = paramsArray[1];
            const mediaType = paramsArray[2];
            const matchMedia = window.matchMedia(paramsArray[0]);

            // Объекты с нужными условиями
            const spollersArray = breakpointsArray.filter(function (item) {
                if (item.value === mediaBreakpoint && item.type === mediaType) {
                    return true;
                }
            }); 
            // Событие
            matchMedia.addListener(function () {
                initSpollers(spollersArray, matchMedia);
            });
            initSpollers(spollersArray, matchMedia);
        });
    }
    // Инициализация
    function initSpollers(spollersArray, matchMedia = false) {
        spollersArray.forEach(spollersBlock => {
            spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
            if (matchMedia.matches || !matchMedia) {
                spollersBlock.classList.add('_init');
                initSpollerBody(spollersBlock);
                spollersBlock.addEventListener("click", setSpollerAction);
            } else {
                spollersBlock.classList.remove('_init');
                initSpollerBody(spollersBlock, false);
                spollersBlock.removeEventListener("click", setSpollerAction);            
            }
        });
    }
    // Работа с контентом
    function initSpollerBody(spollersBlock, hideSpollerBody = true) {
        const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
        if (spollerTitles.length > 0) {
            spollerTitles.forEach(spollerTitles => {
                if (hideSpollerBody) {
                    spollerTitles.removeAttribute('tabindex');
                    if (!spollerTitles.classList.contains('_active')) {
                        spollerTitles.nextElementSibling.hidden = true;
                    }
                } else {
                    spollerTitles.setAttribute('tabindex', '-1');
                    spollerTitles.nextElementSibling.hidden = false;
                }
            });
        }
    }    
    function setSpollerAction(e) {
        const el = e.target;
        if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
            const spollerTitle = el.hasAttribute('data-spoller')  ? el : el.closest('[data-spoller]');
            const spollersBlock = spollerTitle.closest('[data-spollers]');
            const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
            if (!spollersBlock.querySelectorAll('._slide').length) {
                if (oneSpoller && !spollerTitle.classList.contains('_active')) {
                    hideSpollersBody(spollersBlock);
                }
                spollerTitle.classList.toggle('_active');
                _slideToggle(spollerTitle.nextElementSibling, 500);
            }
            e.preventDefault();
        }
    }
    function hideSpollersBody(spollersBlock) {
        const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');
        if (spollerActiveTitle) {
            spollerActiveTitle.classList.remove('_active');
            _slideUp(spollerActiveTitle.nextElementSibling, 500)
        }
    }
} 

let _slideUp = (target, duration = 500) => {
    if (!target.classList.contains('_slide')) {
        target.classList.add('_slide');
        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = duration + 'ms';
        target.style.height = target.offsetHeight + 'px';
        target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        window.setTimeout(() => {
            target.hidden = true;
            target.style.removeProperty('height');
            target.style.removeProperty('padding-top');
            target.style.removeProperty('padding-bottom');
            target.style.removeProperty('margin-top');
            target.style.removeProperty('margin-bottom');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
            target.classList.remove('_slide');     
        }, duration);
    }
}
let _slideDown = (target, duration = 500) => {
    if (!target.classList.contains('_slide')) {
        target.classList.add('_slide');
        if (target.hidden) {
            target.hidden = false;
        }
        let height = target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        target.offsetHeight;
        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = duration + 'ms';
        target.style.height = height + 'px';
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        window.setTimeout(() => {
            target.style.removeProperty('height');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
            target.classList.remove('_slide');
        }, duration);
    }
}
       
let _slideToggle = (target, duration = 500) => {
    if (target.hidden) {
        return _slideDown(target, duration);        
    } else {
        return _slideUp(target, duration);
    }
}

//закрытие спойлера при клике в любой области
document.documentElement.addEventListener("click", function (e){
    if(!e.target.closest('[data-spoller]')) {
        const clos = document.querySelector('[data-spoller]._active');
        clos.classList.remove('_active');
        _slideUp(clos.nextElementSibling, 500)
    }
});

/* .header__burger-icon – иконка меню-бургера
.header__menu – выпадающее меню при нажатии на иконку
_active-burger-menu – изначально меню убрано, при этом классе, оно появляется
_lock – класс, который блокирует скролл на основном сайте при активном меню */

/* бургер-меню */
const iconMenu = document.querySelector('.burger-icon');
const headerMenu = document.querySelector('.menu-header');
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active-burger-menu');
    headerMenu.classList.toggle('_active-burger-menu');
  })
}


/* data-da=".top-menu-haader__call,880,1"
data-da="куда(в какой блок переместить),когда(на каком разрешении),какой(в какое место переместить от 0 до…,first, last)" */

function DynamicAdapt(type) {
	this.type = type;
}

DynamicAdapt.prototype.init = function () {
	const _this = this;
	// массив объектов
	this.оbjects = [];
	this.daClassname = "_dynamic_adapt_";
	// массив DOM-элементов
	this.nodes = document.querySelectorAll("[data-da]");

	// наполнение оbjects объктами
	for (let i = 0; i < this.nodes.length; i++) {
		const node = this.nodes[i];
		const data = node.dataset.da.trim();
		const dataArray = data.split(",");
		const оbject = {};
		оbject.element = node;
		оbject.parent = node.parentNode;
		оbject.destination = document.querySelector(dataArray[0].trim());
		оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
		оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
		оbject.index = this.indexInParent(оbject.parent, оbject.element);
		this.оbjects.push(оbject);
	}

	this.arraySort(this.оbjects);

	// массив уникальных медиа-запросов
	this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
		return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
	}, this);
	this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
		return Array.prototype.indexOf.call(self, item) === index;
	});

	// навешивание слушателя на медиа-запрос
	// и вызов обработчика при первом запуске
	for (let i = 0; i < this.mediaQueries.length; i++) {
		const media = this.mediaQueries[i];
		const mediaSplit = String.prototype.split.call(media, ',');
		const matchMedia = window.matchMedia(mediaSplit[0]);
		const mediaBreakpoint = mediaSplit[1];

		// массив объектов с подходящим брейкпоинтом
		const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
			return item.breakpoint === mediaBreakpoint;
		});
		matchMedia.addListener(function () {
			_this.mediaHandler(matchMedia, оbjectsFilter);
		});
		this.mediaHandler(matchMedia, оbjectsFilter);
	}
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
	if (matchMedia.matches) {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			оbject.index = this.indexInParent(оbject.parent, оbject.element);
			this.moveTo(оbject.place, оbject.element, оbject.destination);
		}
	} else {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			if (оbject.element.classList.contains(this.daClassname)) {
				this.moveBack(оbject.parent, оbject.element, оbject.index);
			}
		}
	}
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
	element.classList.add(this.daClassname);
	if (place === 'last' || place >= destination.children.length) {
		destination.insertAdjacentElement('beforeend', element);
		return;
	}
	if (place === 'first') {
		destination.insertAdjacentElement('afterbegin', element);
		return;
	}
	destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
	element.classList.remove(this.daClassname);
	if (parent.children[index] !== undefined) {
		parent.children[index].insertAdjacentElement('beforebegin', element);
	} else {
		parent.insertAdjacentElement('beforeend', element);
	}
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
	const array = Array.prototype.slice.call(parent.children);
	return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
	if (this.type === "min") {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return -1;
				}

				if (a.place === "last" || b.place === "first") {
					return 1;
				}

				return a.place - b.place;
			}

			return a.breakpoint - b.breakpoint;
		});
	} else {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return 1;
				}

				if (a.place === "last" || b.place === "first") {
					return -1;
				}

				return b.place - a.place;
			}

			return b.breakpoint - a.breakpoint;
		});
		return;
	}
};

const da = new DynamicAdapt("max");
da.init();
// форма для заполнения с отправкой на почту
"use strict"

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        // let formData = new FormData(form);
        // formData.append('image', formImage.files[0]);

        if ( error === 0) {  
            form.classList.add('_sending');// класс для загрузки аннимированной картинки, пока отправляется форма      
            let response = await fetch('sendmail.php', {
                type: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                alert(result.massage);
                formPreview.innerHTML = '';
                form.reset();
                form.classList.remove('_sending');
            } else {
                alert('Ошибка1');
                form.classList.remove('_sending');
            }
        }
        // } else {
        //     alert('заполните обязательные поля');
        // }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');// класс для HTML для подсветки красным полей импутов если они не заполнены

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if (input.classList.contains('_phone')) {
                if (phoneTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input);
                error++;
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }
    function formAddError(input) {
        input.parentElement.classList.add('_error');// класс для scc для подсветки красным полей импутов если они не заполнены
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);// проверка на правельность ввода Email
    }
    function phoneTest(input) {
        return !/^[\d\+][\d\(\)\ -]{4,14}\d$/.test(input.value);// проверка на правельность ввода phone
    }
    const formImage = document.getElementById('formImage');
    const formPreview = document.getElementById('formPreview');
    
    formImage.addEventListener('change', () => {
        upLoadFile(formImage.files[0]);
    });

    function upLoadFile(file) {
        if(!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
            alert('Разрешены только изображения.');
            formImage.value = '';
            return;
        }
        if (file.size > 2 * 1024 * 1024) {
            alert('Файл должен быть меньше 2 Мб.');
            return;
        }

        var reader = new FileReader();
        reader.onload = function (e) {
            formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
        };
        reader.onerror = function (e) {
            alert('Ошибка');
        };
        reader.readAsDataURL(file);
    }
});

const tabsTitle = document.querySelectorAll('.choice-car__sub-link');
const tabsContent = document.querySelectorAll('.choice-car__content');

tabsTitle.forEach(item => item.addEventListener('click', event => {
  const tabsTitleTarget = event.target.getAttribute('data-tab');

  tabsTitle.forEach(element => element.classList.remove('_active-tab'));
  tabsContent.forEach(element => element.classList.add('hidden-tab-content'));

  item.classList.add('_active-tab');
  document.getElementById(tabsTitleTarget).classList.remove('hidden-tab-content');
}));

document.querySelector('[data-tab="tab-1"]').classList.add('_active-tab');
document.querySelector('#tab-1').classList.remove('hidden-tab-content');
// подключаем gsap: метод to - от заданной точки в CSS до точки в JS, метод from - от заданной точки в JS до точки в CSS, метод fromTo - от и до в JS
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

//ScrollSmoother - плавный скролл по сайту
ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
});

const mobile = window.matchMedia('(max-width: 576px)'); 
const laptopScreen = window.matchMedia('(min-width: 767.98px)'); //работает от 767 и выше
const smailTablet = window.matchMedia('(max-width: 768px)'); 
const forDesktop = window.matchMedia('(min-width: 1025px)'); 
const tablet = window.matchMedia('(max-width: 1024px)'); 
const bigDesktop = window.matchMedia('(max-width: 1440px)'); 


// const laptopScreen = window.matchMedia('(min-width: 992px)') 

// if(laptopScreen.matches) {
    //убираем анимацию на экранах менее 992 px
// }

// const tl = gsap.timeline(); поочередная анимация элементов при прокрутки до определенного блока

//----------------------------------home--------------------------------------------//
//анимация элементов при скролле
//чтобы видеть в какое время при скролле будет отрабатывать анимация, добавляем - markers: true
//scrub: true - анимация будет плавной и постепенной привязанной к скроллу и будет постоянной даже при прокрутке вверх
//pin: true - при скролле блок будет как бы на месте 
//stagger: 1 - разница во времени появления одинаковых классов
//end: '+=300px' - анимация будет работать на протяжении 300px
const tl = gsap.timeline();//задаем порядок начала анимации разных элементов

tl.fromTo(
    '.home__title', {y: -200, opacity: 0,}, {y: 0, opacity: 1, duration: 1,}, 0.8//начало через 0.8 с8екунды
).fromTo( 
    '.home__text', {y: 100, opacity: 0,}, {y: 0, opacity: 1, duration: 1,}, 1//начало через 1 секунду
).fromTo( 
    '.header__logo', {opacity: 0, scale:0,}, {opacity: 1, scale:1, duration: 1.5,}, 1//начало через 1.5 секунды
).fromTo( 
    '.menu__list li', {x: -50, opacity: 0,}, {x: 0, opacity: 1, duration: 1, stagger: 0.2,}, 0.4
).fromTo( 
    '.info-header div', {x: 50, opacity: 0,}, {x: 0, opacity: 1, duration: 1, stagger: 0.2,}, 1.4
).fromTo( 
    '.home__icon-telegram', {opacity: 0}, {opacity: 1, duration: 2,}, 1
).fromTo( 
    '.home__icon-whatsApp', {opacity: 0}, {opacity: 1, duration: 2,}, 1.2
).fromTo( 
    '.burger-icon', {x: -50, opacity: 0,}, {x: 0, opacity: 1, duration: 1,}, 0.2
);   

if(laptopScreen.matches) {
    gsap.to('.home__body', {
        scrollTrigger: {
            trigger: '.home', 
            // markers: true, 
            start: 'top top', 
            scrub: true,
        },
            yPercent: 200,
            scale: 0.8,
            opacity: 0,
    });
    gsap.to('.home[style]', {
        scrollTrigger: {
            trigger: '.home', 
            start: 'top top', 
            scrub: true
        },
            scale: 1.2,
    });
    gsap.to('.home__messanger', {
        scrollTrigger: {
            trigger: '.home', 
            start: 'top top', 
            scrub: true
        },
            xPercent: -100, 
            opacity: 0,
            scale: 0.9,
    });
}


//----------------------------------slider-main-------------------------------------------//
const sliderMain = gsap.timeline();

sliderMain.from('.slider-main', {
    scrollTrigger: {
        trigger: '.slider-main', 
        start: '-10% top', 
        scrub: true,
        pin: true,
    },
}).from('.search-slider__text', {
    scrollTrigger: {
        trigger: '.slider-main', 
        start: 'top center', 
        scrub: true,      
    },
    color: '#33b7BC',
    yPercent: -50, 
}).from('.search-slider__input-wrapper', {
    scrollTrigger: {
        trigger: '.slider-main', 
        start: 'top center', 
        scrub: true,      
    },
    opacity: '0',
    xPercent: 100, 
}).from('.slider-main__image', {
    scrollTrigger: {
        trigger: '.slider-main', 
        start: 'top center', 
        scrub: true,      
    },
    width: '100%',
    height: '0',
}).from('.slider-main__info', {
    scrollTrigger: {
        trigger: '.slider-main', 
        start: 'top center', 
        scrub: true,      
    },
    opacity: '0',
    xPercent: -150, 
}).from('.double-sliders__botton', {
    scrollTrigger: {
        trigger: '.slider-main', 
        start: 'top center', 
        scrub: true,      
    },
    opacity: '0',
    yPercent: 100,  
}).from('.slider-main__control', {
    scrollTrigger: {
        trigger: '.slider-main', 
        start: '-200 top', 
        scrub: true,
    },
        scale: 0,
        transformOrigin: 'bottom center',
}).from('.double-sliders__slide', {
    scrollTrigger: {
        trigger: '.slider-main', 
        start: 'top center', 
        scrub: true,
    },
        scale: 0,
        opacity: 0,
        transformOrigin: 'left center',
        xPercent: 100,  
        ease: 'none',
        stagger: 1,
        duration: '3',
});

//----------------------------------choice-car--------------------------------------------//

gsap.from('.choice-car__list li', {
    scrollTrigger: {
        trigger: '.choice-car',  
        start: '-50% top', 
    },
        yPercent: 100,
        scale: 0,
        opacity: 0,
        stagger: 0.5,
});
gsap.from('.choice-car__card', {
    scrollTrigger: {
        trigger: '.choice-car', 
        start: '-50% top', 
    },
        scale: 0,
        transformOrigin: 'right top',
        ease: 'none',
        stagger: 0.5,
        duration: '0.5',
});

//----------------------------------about-us--------------------------------------------//
const aboutUs = gsap.timeline()
aboutUs.from('.about-us__title', {
    scrollTrigger: {
        trigger: '.about-us', 
        start: '-60% top', 
        end: '+=500',
        scrub: true,      
    },
    opacity: 0,
    yPercent: -50,
}).from('.counter__number', {
    scrollTrigger: {
        trigger: '.about-us', 
        start: '-20% top', 
        end: '+=400',
        scrub: true,      
    },
    opacity: 0.2,
    stagger: 0.5,
}).from('.counter__title', {
    scrollTrigger: {
        trigger: '.about-us', 
        start: '-20% top', 
        end: '+=320',
        scrub: true,      
    },
    yPercent: 100,
    opacity: 0,
    stagger: 0.5,
}).from('.counter__text', {
    scrollTrigger: {
        trigger: '.about-us', 
        start: '-20% top', 
        end: '+=320',
        scrub: true,      
    },
    yPercent: 150,
    opacity: 0,
    stagger: 0.5,
}).from('.about-us__quote-bottom', {
    scrollTrigger: {
        trigger: '.about-us', 
        start: 'top 20%', 
        scrub: true,      
    },
    yPercent: 200,
    opacity: 0,
}).from('.about-us__images img', {
    scrollTrigger: {
        trigger: '.about-us', 
        start: 'top center', 
        scrub: true,  
    },
    width: '100%',
    height: '0',
})
//анимация хаотичного появления букв
// .about-us__quote-top div { добавить в HTML!!!!!!!!!!!!!!!!!!!!!!!!!!
// 	display: inline-block;
// }
const text = document.querySelector('.about-us__quote-top p');//нужный класс

const splitText = (el) => {
	el.innerHTML = el.textContent.replace(/(\S*)/g, m => {
  return `<div class="word">` +
			m.replace(/(-|#|@)?\S(-|#|@)?/g, "<div class='letter'>$&</div>") +
			`</div>`;
	});
	return el;
};

const split = splitText(text);

function random(min, max){
  return (Math.random() * (max - min)) + min;
}

Array.from(split.querySelectorAll('.letter')).forEach((el, idx) => {
	TweenMax.from(el, 2.5, {//2,5 - скорость анимации
        scrollTrigger: {
            trigger: '.about-us',//тригер - блок
            start: 'top top', 
            end: '+=600',    
        },
		opacity: 0,
		scale: .1,
		x: random(-500, 500),
		y: random(-500, 500),
		z: random(-500, 500),
		delay: idx * 0.02,
		repeat: 0,
	})
});
//анимация хаотичного появления букв

//----------------------------------reviews--------------------------------------------//

gsap.to('.reviews__title', {
    scrollTrigger: {
        trigger: '.reviews', 
        start: 'top top', 
        scrub: true,
    },
        yPercent: 100,
        scale: 0.8,
        opacity: 0,
});
gsap.to('.reviews__slide[data-speed]', {//для идентичных элементов в HTML задаёт data атрибут, например - data-speed="0.15"
    y: (i, el) =>
    (1- parseFloat(el.getAttribute('data-speed'))) * //если перед скобкой поставить -, анимация в другую сторону
    ScrollTrigger.maxScroll(window) / 10,
    scrollTrigger: {
        trigger: '.reviews', 
        start: '200px top', 
        scrub: 0,
    },
});

//----------------------------------advantages--------------------------------------------//

gsap.to('.advantages__title', {
    scrollTrigger: {
        trigger: '.advantages',  
        start: 'top bottom', 
        scrub: true,
    },
        yPercent: 100,
        scale: 0,
        opacity: 0,
});
gsap.from('.advantages__image', {
    scrollTrigger: {
        trigger: '.advantages', 
        // start: '-10% top', 
        start: 'top bottom', 
        end: '60%',
        scrub: true,
    },
        scale: 0,
        transformOrigin: 'left center',
        ease: 'none',
        stagger: 1,
});

if(smailTablet.matches) {
    gsap.from('.advantages__image', {
        scrollTrigger: {
            trigger: '.advantages', 
            start: 'top bottom', 
            end: '60%',
            scrub: true,
        },
            scale: 0,
            transformOrigin: 'left center',
            ease: 'none',
            stagger: 0.5,
    }); 
}

//----------------------------------feedback-form--------------------------------------------//

gsap.from('.feedback-form__map', {
    scrollTrigger: {
        trigger: '.feedback-form',  
        start: 'center bottom', 
        end: '+=200px',
        scrub: true,
    },
        xPercent: -100,
});
gsap.from('.feedback-form__form', {
    scrollTrigger: {
        trigger: '.feedback-form',  
        start: 'center bottom', 
        end: '+=250px',
        scrub: true,
    },
        xPercent: 100,
});
gsap.to('.form__title', {
    scrollTrigger: {
        trigger: '.feedback-form',  
        scrub: true,
    },
        opacity: 0,
});

//----------------------------------discount--------------------------------------------//

const discount = gsap.timeline()
discount.from('.discount__title', {
    scrollTrigger: {
        trigger: '.discount', 
        start: 'top bottom', 
        scrub: true,      
    },
    opacity: 0,
    yPercent: 50,
}).from('.discount__text', {
    scrollTrigger: {
        trigger: '.discount', 
        start: 'top bottom', 
        end: '+=500',
        scrub: true,      
    },
    opacity: 0,
    scale: 0,
}).from('.discount__input', {
    scrollTrigger: {
        trigger: '.discount', 
        start: 'top center', 
        end: '+=500',
        scrub: true,      
    },
    opacity: 0,
    yPercent: 300,
}).from('.discount__btn', {
    scrollTrigger: {
        trigger: '.discount', 
        start: 'top center', 
        end: '+=500',
        scrub: true,      
    },
    opacity: 0,
    yPercent: 300,
})

//----------------------------------footer--------------------------------------------//

const footer = gsap.timeline()
footer.from('.menu-footer__list--title', {
    scrollTrigger: {
        trigger: '.footer', 
        start: '-100% top', 
        end: '+=200',
        scrub: true,      
    },
    opacity: 0,
    yPercent: 50,
    stagger: 0.2
}).from('.menu-footer__list li', {
    scrollTrigger: {
        trigger: '.footer', 
        start: '-100% top', 
        end: '+=200',
        scrub: true,      
    },
    opacity: 0,
    xPercent: 50,
    stagger: 0.2
}).from('.footer__tel', {
    scrollTrigger: {
        trigger: '.footer', 
        start: '-100%  top', 
        end: '+=300',
        scrub: true,      
    },
    opacity: 0,
    yPercent: 100,
}).from('.footer__icon-telegram', {
    scrollTrigger: {
        trigger: '.footer', 
        start: '-100% top', 
        end: '+=300',
        scrub: true,      
    },
    yPercent: 100,
}).from('.footer__icon-whatsApp', {
    scrollTrigger: {
        trigger: '.footer', 
        start: '-100% top', 
        end: '+=300',
        scrub: true,      
    },
    yPercent: 150,
}).from('.footer__btn-opacity', {
    scrollTrigger: {
        trigger: '.footer', 
        start: '-100% top', 
        end: '+=300',
        scrub: true,      
    },
    xPercent: -100,
    opacity: 0,
}).from('.footer__adress', {
    scrollTrigger: {
        trigger: '.footer', 
        start: '-100% top', 
        end: '+=300',
        scrub: true,      
    },
    opacity: 0,
    yPercent: -100,
}).from('.footer__input-wrapper', {
    scrollTrigger: {
        trigger: '.footer', 
        start: '-90% top', 
        end: '+=300',
        scrub: true,      
    },
    xPercent: 200,
    opacity: 0,
})