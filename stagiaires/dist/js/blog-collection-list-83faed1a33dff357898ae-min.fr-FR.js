(function(r){var a={};function n(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:false,exports:{}};r[e].call(t.exports,t,t.exports,n);t.l=true;return t.exports}n.m=r;n.c=a;n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:true,get:r})};n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});Object.defineProperty(e,"__esModule",{value:true})};n.t=function(t,e){1&e&&(t=n(t));if(8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);n.r(r);Object.defineProperty(r,"default",{enumerable:true,value:t});if(2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r};n.n=function(t){var e=t&&t.__esModule?function e(){return t["default"]}:function e(){return t};n.d(e,"a",e);return e};n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};n.p="https://assets.squarespace.com/universal/scripts-compressed/";return n(n.s=10428)})({10428:function(e,t,r){r(7368)},7368:function(e,t){YUI.add("squarespace-blog-collection-list",function(t){var l=t.config.win;var e=l.document;var n=200;var s=t.Squarespace.Template.getTweakValue;var r=function(e){if(!e)return;var t=parseInt(s("tweak-blog-list-columns"),10);var r=parseInt(s("tweak-blog-list-spacing"),10);var a=parseFloat(l.getComputedStyle(e).width);while((a-r*(t-1))/t<n)t--;e.setAttribute("data-columns",t)};var a=function(e){if(!e)return;var t=e.querySelectorAll(".BlogList-item-image img");if("true"===s("tweak-blog-list-item-image-show")){var r="stacked"===s("tweak-blog-list-style").toLowerCase();var a="auto"===s("tweak-blog-list-item-image-aspect-ratio-stacked").toLowerCase();if(r&&a)for(var n=0;n<t.length;n++){var o=t[n];o.style.position=null;o.style.top=null;o.style.right=null;o.style.bottom=null;o.style.left=null;o.style.width=null;o.style.height=null;l.ImageLoader.load(o,{load:true,mode:null})}else for(var i=0;i<t.length;i++)l.ImageLoader.load(t[i],{load:true,mode:"fill"})}};var o=function(e){r(e);a(e)};var i=100;var u=false;var c;var f=function(e){u=u||true;c&&clearTimeout(c);c=setTimeout(function(){if(!t||!t.config||!t.config.win)return;o(e);u=false},i)};var g=["tweak-blog-list-columns","tweak-blog-list-spacing"];var d=["tweak-blog-list-style","tweak-blog-list-columns","tweak-blog-list-spacing","tweak-blog-list-item-image-aspect-ratio-grid","tweak-blog-list-item-image-aspect-ratio-stacked","tweak-blog-list-item-image-show","tweak-blog-list-item-image-width"];var m=function(e){var t=e.getName();g.indexOf(t)>=0&&r();d.indexOf(t)>=0&&a()};t.Global.on("tweak:change",m);var v;var p;t.config.win.Squarespace.onInitialize(t,function(){v=e.querySelector(".BlogList");if(v){o(v);p=f.bind(l,v);l.addEventListener("resize",p)}});t.config.win.Squarespace.onDestroy(t,function(){l.removeEventListener("resize",p)})},"1.0",{requires:[]})}});
//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/blog-collection-list-dbee6d14013f75c31f247-min.fr-FR.js.map