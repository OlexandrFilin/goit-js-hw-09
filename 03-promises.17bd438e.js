!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequired7c6=i);var r=i("6JpON"),u=document.querySelector(".form");document.querySelector("button");function f(n,o){var t=Math.random()>.3;new Promise((function(e,n){setTimeout((function(){t?e("Fulfilled promisek"):n("Rejected promise")}),o)})).then((function(){e(r).Notify.init({info:{background:"#219721"}}),e(r).Notify.info("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(){e(r).Notify.init({info:{background:"#e02525"}}),e(r).Notify.info("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))}u.addEventListener("submit",(function(e){e.preventDefault();for(var n=1;n<=u.amount.value;n+=1){var o=Number(u.delay.value)+Number(u.step.value)*(n-1);f(n,o)}}))}();
//# sourceMappingURL=03-promises.17bd438e.js.map
