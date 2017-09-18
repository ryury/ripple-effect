!function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s="./ripple.js")}({"./page.scss":function(e,t){},"./ripple.js":function(e,t,n){"use strict";var i=n("./ripple/Ripple.js"),r=function(e){return e&&e.__esModule?e:{default:e}}(i);n("./ripple/ripple.scss"),n("./page.scss");new r.default},"./ripple/Ripple.js":function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"[data-ripple]",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,e),this.ripples="string"==typeof t?document.querySelectorAll(t):t,this.opts=Object.assign({},this.constructor.defaults(),n),this.initialize()}return r(e,[{key:"initialize",value:function(){this.addHandler()}},{key:"addHandler",value:function(){var e=this;Array.from(this.ripples).forEach(function(t){t.addEventListener(e.opts.eventType,e.createRipple.bind(e),!1)})}},{key:"createRipple",value:function(e){e.stopPropagation();var t=e.currentTarget.closest("["+this.opts.selector+"]"),n=t.getBoundingClientRect(),i=n.width,r=n.height,o=e.clientX-t.offsetLeft,a=e.clientY-t.offsetTop,s=o>i>>1?0:i,p=a>r>>1?0:r,l=Math.sqrt(Math.pow(Math.abs(s-o),2)+Math.pow(Math.abs(p-a),2)),u=t.style,c=u.position;c&&"static"!==c||(u.position="relative");var d=document.createElement("div");d.classList.add(this.opts.rippleClassName);var f=document.createElement("span");f.style.cssText="background:"+t.getAttribute(this.opts.selector)+";width:"+l+"px;height:"+l+"px;left:"+(o-l/2)+"px;top:"+(a-l/2)+"px;",f.addEventListener(this.opts.animationEndEvent,this.rippleEnd.bind(this),!1),d.appendChild(f),t.insertBefore(d,t.firstChild)}},{key:"rippleEnd",value:function(e){var t=e.target.closest("."+this.opts.rippleClassName);t.parentNode.removeChild(t)}}],[{key:"defaults",value:function(){return{eventType:"mousedown",selector:"data-ripple",rippleClassName:"ripple",animationEndEvent:function(){var e=document.createElement("fake"),t={animation:"animationend",OAnimation:"oanimationend",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(var n in t)if(void 0!==e.style[n])return t[n]}()}}}]),e}();t.default=o},"./ripple/ripple.scss":function(e,t){}});