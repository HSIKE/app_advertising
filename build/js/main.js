!function(){function t(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,e=document.querySelector(".page.home"),n=document.querySelector(".home .logo"),o=document.querySelector(".home .slogan"),a=document.querySelector(".home .btns"),c=document.querySelector(".home .guide"),s=document.querySelector(".summary .mobiles"),i=document.querySelectorAll(".summary .mobile"),r=e.offsetHeight,l=Math.min(Math.max(t/r,0),1),d=3.26*(1+1.96*l),m=7.79*(1+.404*l);if(0<=l&&l<1){var u=1-.6*l,f=1-.45*l,y=Math.max(1-5*l,0),w=1-.5*l;n.style.cssText="\n        position:fixed;\n        transform:translateY(".concat(d,"rem) scale(").concat(u,");\n      "),o.style.cssText="\n        position:fixed;\n        transform:translateY(".concat(m,"rem) scale(").concat(f,");\n      "),a.style.cssText="\n        opacity:".concat(y,";\n        position:fixed;\n        visibility:").concat(0<y?"visible":"hidden",";\n        transform:scale(").concat(w,");\n      "),c.style.cssText="\n        visibility: visible;\n        opacity:".concat(1-5*l,";\n        bottom:\n      "),s.style.position="fixed",i.forEach(function(t){var e=t.dataset.topOrigin*(1-l)+t.dataset.top*l,n=t.dataset.leftOrigin*(1-l)+t.dataset.left*l;t.style.cssText="\n          opacity: ".concat(3*l,";\n          transform: translate3D(").concat(n,"rem, ").concat(e,"rem, 0);\n        ")})}else 1<=l&&(n.style.cssText="\n        position:absolute;\n        transform:translateY(".concat(d+r/window.rem,"rem) scale(0.4);\n      "),o.style.cssText="\n        position:absolute;\n        transform:translateY(".concat(m+r/window.rem,"rem) scale(0.55);\n      "),a.style.cssText="opacity:1;position:absolute;",c.style.cssText="visibility:hidden;",s.style.position="absolute",i.forEach(function(t){var e=t.dataset.top,n=t.dataset.left;t.style.cssText="\n          opacity: 1;\n          transform: translate3D(".concat(n,"rem, ").concat(e,"rem, 0);\n        ")}))}document.querySelectorAll("[data-i18n]").forEach(function(t){t.innerHTML=window.i18n[t.dataset.i18n]}),document.querySelectorAll(".img.platform").forEach(function(t){t.src=window.isIOS?t.dataset.srcIos:t.dataset.srcAndroid}),document.querySelectorAll("a.btn").forEach(function(t){t.href=window.isIOS?t.dataset.hrefIos:t.dataset.hrefAndroid}),window.addEventListener("load",function(){document.querySelector(".logo img").classList.add("animate"),document.querySelectorAll(".slogan p").forEach(function(t){t.classList.add("animate")}),document.querySelectorAll(".btn").forEach(function(t){t.classList.add("animate")}),document.querySelectorAll(".rec").forEach(function(t){t.classList.add("animate")})}),setInterval(function(){var t=document.querySelector(".slide-left"),e=document.querySelector(".slide-right"),n=t.getBoundingClientRect(),o=e.getBoundingClientRect();n.left>-16*window.rem?t.style.left="".concat((n.left-1)/window.rem,"rem"):t.style.left="0",o.left<-5.215*window.rem?e.style.left="".concat((o.left+1)/window.rem,"rem"):e.style.left="-21.22rem"},25),window.addEventListener("scroll",t),window.addEventListener("DOMContentLoaded",t)}();