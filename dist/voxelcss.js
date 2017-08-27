"use strict";var _slicedToArray=function(){function t(t,e){var r=[],a=!0,o=!1,n=void 0;try{for(var s,i=t[Symbol.iterator]();!(a=(s=i.next()).done)&&(r.push(s.value),!(e&&r.length===e));a=!0);}catch(t){o=!0,n=t}finally{try{!a&&i["return"]&&i["return"]()}finally{if(o)throw n}}return r}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function _defineProperty(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}(function(t){if("object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?this:self:global:window,e.voxelcss=t()}})(function(){var t=Math.sqrt,e=Math.pow,r=Math.max,a=Math.PI;return function m(c,t,e){function r(s,o){if(!t[s]){if(!c[s]){var i="function"==typeof require&&require;if(!o&&i)return i(s,!0);if(n)return n(s,!0);var a=new Error("Cannot find module '"+s+"'");throw a.code="MODULE_NOT_FOUND",a}var x=t[s]={exports:{}};c[s][0].call(x.exports,function(t){var e=c[s][1][t];return r(e?e:t)},x,x.exports,m,c,t,e)}return t[s].exports}for(var n="function"==typeof require&&require,a=0;a<e.length;a++)r(e[a]);return r}({1:[function(t,e){var r=".voxelcss-scene {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  -webkit-perspective-origin: 50% 50%;\n  perspective-origin: 50% 50%;\n  cursor: move;\n}\n.voxelcss-scene .camera,\n.voxelcss-scene .zoom {\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  overflow: visible;\n}\n.voxelcss-cube,\n.voxelcss-scene .camera,\n.voxelcss-scene .zoom {\n  position: absolute;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n}\n.voxelcss-cube:hover img {\n  visibility: hidden!important;\n}\n.voxelcss-cube:hover .voxelcss-face {\n  background: rgba(0,0,0,.3)!important;\n}\n.voxelcss-cube:hover .voxelcss-face .shader {\n  opacity: 0!important;\n}\n.voxelcss-cube .animated-down,\n.voxelcss-cube .animated-up {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n}\n.voxelcss-cube .animated-up {\n  -webkit-animation: a 1s linear both;\n  animation: a 1s linear both;\n}\n.voxelcss-cube .animated-down {\n  -webkit-animation: b 1s linear both;\n  animation: b 1s linear both;\n}\n.voxelcss-face {\n  display: block;\n  position: absolute;\n  outline: none;\n  border: none;\n  margin-left: -18px;\n  margin-top: -18px;\n  width: 36px;\n  height: 36px;\n  cursor: pointer;\n}\n.voxelcss-face img {\n  width: 100%;\n  height: 100%;\n}\n.voxelcss-face img.colored {\n  visibility: hidden;\n}\n.voxelcss-face .shader {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0;\n}\n@-webkit-keyframes a {\n  0% {\n    opacity: 0;\n    -webkit-transform: matrix(1,0,0,1,0,300);\n    transform: matrix(1,0,0,1,0,300);\n  }\n\n  1.3% {\n    -webkit-transform: matrix(1,0,0,3.905,0,237.02);\n    transform: matrix(1,0,0,3.905,0,237.02);\n  }\n\n  2.55% {\n    -webkit-transform: matrix(1,0,0,4.554,0,182.798);\n    transform: matrix(1,0,0,4.554,0,182.798);\n  }\n\n  4.1% {\n    -webkit-transform: matrix(1,0,0,4.025,0,125.912);\n    transform: matrix(1,0,0,4.025,0,125.912);\n  }\n\n  5.71% {\n    -webkit-transform: matrix(1,0,0,3.039,0,79.596);\n    transform: matrix(1,0,0,3.039,0,79.596);\n  }\n\n  8.11% {\n    opacity: 1;\n    -webkit-transform: matrix(1,0,0,1.82,0,31.647);\n    transform: matrix(1,0,0,1.82,0,31.647);\n  }\n\n  8.81% {\n    -webkit-transform: matrix(1,0,0,1.581,0,21.84);\n    transform: matrix(1,0,0,1.581,0,21.84);\n  }\n\n  11.96% {\n    -webkit-transform: matrix(1,0,0,1.034,0,-4.825);\n    transform: matrix(1,0,0,1.034,0,-4.825);\n  }\n\n  12.11% {\n    -webkit-transform: matrix(1,0,0,1.023,0,-5.53);\n    transform: matrix(1,0,0,1.023,0,-5.53);\n  }\n\n  15.07% {\n    -webkit-transform: matrix(1,0,0,.947,0,-12.662);\n    transform: matrix(1,0,0,.947,0,-12.662);\n  }\n\n  16.12% {\n    -webkit-transform: matrix(1,0,0,.951,0,-13.007);\n    transform: matrix(1,0,0,.951,0,-13.007);\n  }\n\n  27.23% {\n    -webkit-transform: matrix(1,0,0,1.001,0,-2.352);\n    transform: matrix(1,0,0,1.001,0,-2.352);\n  }\n\n  27.58% {\n    -webkit-transform: matrix(1,0,0,1.001,0,-2.121);\n    transform: matrix(1,0,0,1.001,0,-2.121);\n  }\n\n  38.34% {\n    -webkit-transform: matrix(1,0,0,1,0,.311);\n    transform: matrix(1,0,0,1,0,.311);\n  }\n\n  40.09% {\n    -webkit-transform: matrix(1,0,0,1,0,.291);\n    transform: matrix(1,0,0,1,0,.291);\n  }\n\n  50% {\n    -webkit-transform: matrix(1,0,0,1,0,.048);\n    transform: matrix(1,0,0,1,0,.048);\n  }\n\n  60.56% {\n    -webkit-transform: matrix(1,0,0,1,0,-.007);\n    transform: matrix(1,0,0,1,0,-.007);\n  }\n\n  82.78% {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n\n  to {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n}\n@keyframes a {\n  0% {\n    opacity: 0;\n    -webkit-transform: matrix(1,0,0,1,0,300);\n    transform: matrix(1,0,0,1,0,300);\n  }\n\n  1.3% {\n    -webkit-transform: matrix(1,0,0,3.905,0,237.02);\n    transform: matrix(1,0,0,3.905,0,237.02);\n  }\n\n  2.55% {\n    -webkit-transform: matrix(1,0,0,4.554,0,182.798);\n    transform: matrix(1,0,0,4.554,0,182.798);\n  }\n\n  4.1% {\n    -webkit-transform: matrix(1,0,0,4.025,0,125.912);\n    transform: matrix(1,0,0,4.025,0,125.912);\n  }\n\n  5.71% {\n    -webkit-transform: matrix(1,0,0,3.039,0,79.596);\n    transform: matrix(1,0,0,3.039,0,79.596);\n  }\n\n  8.11% {\n    opacity: 1;\n    -webkit-transform: matrix(1,0,0,1.82,0,31.647);\n    transform: matrix(1,0,0,1.82,0,31.647);\n  }\n\n  8.81% {\n    -webkit-transform: matrix(1,0,0,1.581,0,21.84);\n    transform: matrix(1,0,0,1.581,0,21.84);\n  }\n\n  11.96% {\n    -webkit-transform: matrix(1,0,0,1.034,0,-4.825);\n    transform: matrix(1,0,0,1.034,0,-4.825);\n  }\n\n  12.11% {\n    -webkit-transform: matrix(1,0,0,1.023,0,-5.53);\n    transform: matrix(1,0,0,1.023,0,-5.53);\n  }\n\n  15.07% {\n    -webkit-transform: matrix(1,0,0,.947,0,-12.662);\n    transform: matrix(1,0,0,.947,0,-12.662);\n  }\n\n  16.12% {\n    -webkit-transform: matrix(1,0,0,.951,0,-13.007);\n    transform: matrix(1,0,0,.951,0,-13.007);\n  }\n\n  27.23% {\n    -webkit-transform: matrix(1,0,0,1.001,0,-2.352);\n    transform: matrix(1,0,0,1.001,0,-2.352);\n  }\n\n  27.58% {\n    -webkit-transform: matrix(1,0,0,1.001,0,-2.121);\n    transform: matrix(1,0,0,1.001,0,-2.121);\n  }\n\n  38.34% {\n    -webkit-transform: matrix(1,0,0,1,0,.311);\n    transform: matrix(1,0,0,1,0,.311);\n  }\n\n  40.09% {\n    -webkit-transform: matrix(1,0,0,1,0,.291);\n    transform: matrix(1,0,0,1,0,.291);\n  }\n\n  50% {\n    -webkit-transform: matrix(1,0,0,1,0,.048);\n    transform: matrix(1,0,0,1,0,.048);\n  }\n\n  60.56% {\n    -webkit-transform: matrix(1,0,0,1,0,-.007);\n    transform: matrix(1,0,0,1,0,-.007);\n  }\n\n  82.78% {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n\n  to {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n}\n@-webkit-keyframes b {\n  0% {\n    opacity: 0;\n    -webkit-transform: matrix(1,0,0,1,0,-300);\n    transform: matrix(1,0,0,1,0,-300);\n  }\n\n  1.3% {\n    -webkit-transform: matrix(1,0,0,3.905,0,-237.02);\n    transform: matrix(1,0,0,3.905,0,-237.02);\n  }\n\n  2.55% {\n    -webkit-transform: matrix(1,0,0,4.554,0,-182.798);\n    transform: matrix(1,0,0,4.554,0,-182.798);\n  }\n\n  4.1% {\n    -webkit-transform: matrix(1,0,0,4.025,0,-125.912);\n    transform: matrix(1,0,0,4.025,0,-125.912);\n  }\n\n  5.71% {\n    -webkit-transform: matrix(1,0,0,3.039,0,-79.596);\n    transform: matrix(1,0,0,3.039,0,-79.596);\n  }\n\n  8.11% {\n    opacity: 1;\n    -webkit-transform: matrix(1,0,0,1.82,0,-31.647);\n    transform: matrix(1,0,0,1.82,0,-31.647);\n  }\n\n  8.81% {\n    -webkit-transform: matrix(1,0,0,1.581,0,-21.84);\n    transform: matrix(1,0,0,1.581,0,-21.84);\n  }\n\n  11.96% {\n    -webkit-transform: matrix(1,0,0,1.034,0,4.825);\n    transform: matrix(1,0,0,1.034,0,4.825);\n  }\n\n  12.11% {\n    -webkit-transform: matrix(1,0,0,1.023,0,5.53);\n    transform: matrix(1,0,0,1.023,0,5.53);\n  }\n\n  15.07% {\n    -webkit-transform: matrix(1,0,0,.947,0,12.662);\n    transform: matrix(1,0,0,.947,0,12.662);\n  }\n\n  16.12% {\n    -webkit-transform: matrix(1,0,0,.951,0,13.007);\n    transform: matrix(1,0,0,.951,0,13.007);\n  }\n\n  27.23% {\n    -webkit-transform: matrix(1,0,0,1.001,0,2.352);\n    transform: matrix(1,0,0,1.001,0,2.352);\n  }\n\n  27.58% {\n    -webkit-transform: matrix(1,0,0,1.001,0,2.121);\n    transform: matrix(1,0,0,1.001,0,2.121);\n  }\n\n  38.34% {\n    -webkit-transform: matrix(1,0,0,1,0,-.311);\n    transform: matrix(1,0,0,1,0,-.311);\n  }\n\n  40.09% {\n    -webkit-transform: matrix(1,0,0,1,0,-.291);\n    transform: matrix(1,0,0,1,0,-.291);\n  }\n\n  50% {\n    -webkit-transform: matrix(1,0,0,1,0,-.048);\n    transform: matrix(1,0,0,1,0,-.048);\n  }\n\n  60.56% {\n    -webkit-transform: matrix(1,0,0,1,0,.007);\n    transform: matrix(1,0,0,1,0,.007);\n  }\n\n  82.78% {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n\n  to {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n}\n@keyframes b {\n  0% {\n    opacity: 0;\n    -webkit-transform: matrix(1,0,0,1,0,-300);\n    transform: matrix(1,0,0,1,0,-300);\n  }\n\n  1.3% {\n    -webkit-transform: matrix(1,0,0,3.905,0,-237.02);\n    transform: matrix(1,0,0,3.905,0,-237.02);\n  }\n\n  2.55% {\n    -webkit-transform: matrix(1,0,0,4.554,0,-182.798);\n    transform: matrix(1,0,0,4.554,0,-182.798);\n  }\n\n  4.1% {\n    -webkit-transform: matrix(1,0,0,4.025,0,-125.912);\n    transform: matrix(1,0,0,4.025,0,-125.912);\n  }\n\n  5.71% {\n    -webkit-transform: matrix(1,0,0,3.039,0,-79.596);\n    transform: matrix(1,0,0,3.039,0,-79.596);\n  }\n\n  8.11% {\n    opacity: 1;\n    -webkit-transform: matrix(1,0,0,1.82,0,-31.647);\n    transform: matrix(1,0,0,1.82,0,-31.647);\n  }\n\n  8.81% {\n    -webkit-transform: matrix(1,0,0,1.581,0,-21.84);\n    transform: matrix(1,0,0,1.581,0,-21.84);\n  }\n\n  11.96% {\n    -webkit-transform: matrix(1,0,0,1.034,0,4.825);\n    transform: matrix(1,0,0,1.034,0,4.825);\n  }\n\n  12.11% {\n    -webkit-transform: matrix(1,0,0,1.023,0,5.53);\n    transform: matrix(1,0,0,1.023,0,5.53);\n  }\n\n  15.07% {\n    -webkit-transform: matrix(1,0,0,.947,0,12.662);\n    transform: matrix(1,0,0,.947,0,12.662);\n  }\n\n  16.12% {\n    -webkit-transform: matrix(1,0,0,.951,0,13.007);\n    transform: matrix(1,0,0,.951,0,13.007);\n  }\n\n  27.23% {\n    -webkit-transform: matrix(1,0,0,1.001,0,2.352);\n    transform: matrix(1,0,0,1.001,0,2.352);\n  }\n\n  27.58% {\n    -webkit-transform: matrix(1,0,0,1.001,0,2.121);\n    transform: matrix(1,0,0,1.001,0,2.121);\n  }\n\n  38.34% {\n    -webkit-transform: matrix(1,0,0,1,0,-.311);\n    transform: matrix(1,0,0,1,0,-.311);\n  }\n\n  40.09% {\n    -webkit-transform: matrix(1,0,0,1,0,-.291);\n    transform: matrix(1,0,0,1,0,-.291);\n  }\n\n  50% {\n    -webkit-transform: matrix(1,0,0,1,0,-.048);\n    transform: matrix(1,0,0,1,0,-.048);\n  }\n\n  60.56% {\n    -webkit-transform: matrix(1,0,0,1,0,.007);\n    transform: matrix(1,0,0,1,0,.007);\n  }\n\n  82.78% {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n\n  to {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n}\n";t("browserify-css").createStyle(r,{href:"dist/voxelcss.css"},{insertAt:"bottom"}),e.exports=r},{"browserify-css":15}],2:[function(t,e){"use strict";function r(){function t(){var o=arguments[0],n="undefined"==typeof o?"undefined":_typeof(o),s=e,m=o;if(1===arguments.length&&"number"!==n)"string"===n&&(s=function(e){return t(i(e))});else{var c=Array.prototype.slice.call(arguments),l=c[0],x=c[1],f=c[2],d=c[3];m={r:l,g:x,b:f,a:d}}s(m)}function e(t){var e=t.r,i=t.g,m=t.b,c=t.a;if([e,i,m].every(n))return x.trigger("change",{target:x}),o(l,{r:e,g:i,b:m,a:n(c)?c:1});if([e,i,m].every(s))return l;throw"Face color RGB values must be numbers"}var l={r:0,g:0,b:0,a:1},x=o(this,c,{setColor:t,getColor:function getColor(){return l},getHex:function getHex(){return m(l)},clone:function clone(){return new r(l)},serialize:function serialize(){return JSON.stringify(l)}});t.apply(void 0,arguments)}var o=Object.assign,a=t("./common"),n=a.isNumber,s=a.isUndefined,i=a.hexToRgb,m=a.rgbToHex,c=t("./events");e.exports=r,r.loadFromSerial=function(t){var e=JSON.parse(t);return new r(e)}},{"./common":10,"./events":11}],3:[function(t,e){"use strict";var r=Object.assign;e.exports=function(t,e){function a(e){return e.off(),c(e),t.add(e),s.canAutoSave()&&t.save(),s}function o(e){return t.remove(e)&&e.off(),s.canAutoSave()&&t.save(),s}function n(t,e){if(s.isEnabled()){var r,o=t.target,n=o.getDimension();e=e.map(function(t){return t*n}),a((r=o.clone()).translate.apply(r,_toConsumableArray(e)))}}if(t===void 0)throw"Editor requires World instance for initialization";var s=this,i=e!==void 0&&!0===e.autosave,m=!0,c=function(t){return t.on({"change:mesh":function changeMesh(){return s.canAutoSave()&&s.save()},contextmenu:function contextmenu(t){return s.isEnabled()&&o(t.target)},"click:top":function clickTop(t){return n(t,[0,1,0])},"click:bottom":function clickBottom(t){return n(t,[0,-1,0])},"click:front":function clickFront(t){return n(t,[0,0,1])},"click:back":function clickBack(t){return n(t,[0,0,-1])},"click:left":function clickLeft(t){return n(t,[-1,0,0])},"click:right":function clickRight(t){return n(t,[1,0,0])}})},l=function(){return t.getVoxels().forEach(c)};r(s,{add:a,remove:o,getWorld:function getWorld(){return t},isEnabled:function isEnabled(){return m},enable:function enable(){return m=!0},disable:function disable(){return m=!1},canAutoSave:function canAutoSave(){return i},enableAutoSave:function enableAutoSave(){return i=!0},disableAutoSave:function disableAutoSave(){return i=!1},isSaved:function isSaved(){return t.isSaved()},deleteSave:function deleteSave(){return t.deleteSave()},export:function _export(){return t.export()},import:function _import(e){t.import(e),l()},save:function save(){return t.save()},load:function load(){t.load(),l()}}),l()}},{}],4:[function(t,e){"use strict";function r(t){function e(t){return t&&(s=t,m.trigger("change",{target:m})),s}var s=n,i=function(){return s},m=a(this,o,{setSource:e,getSource:i,serialize:i,clone:function clone(){return new r(s)}});e(t)}var a=Object.assign,o=t("./events"),n="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";e.exports=r,r.loadFromSerial=function(t){return new r(t)}},{"./events":11}],5:[function(t,e){"use strict";var r=Object.assign,a=t("./common"),o=a.isNumber,n=t("./events"),s=t("./positioned");e.exports=function(t,e){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:0.2,i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:1,m=500,c=1,l=0,x=r(s(r(this,n)),{setBrightness:function(t,e){return o(e)&&(c=e),o(t)&&(l=t),[t,e].some(o)&&x.trigger("change",{target:x}),x},getBrightness:function getBrightness(){return[l,c]},setTravelDistance:function(t){return o(t)&&(m=t,x.trigger("change",{target:x})),x},getTravelDistance:function getTravelDistance(){return m}});x.setPosition(t).setTravelDistance(e).setBrightness(a,i)}},{"./common":10,"./events":11,"./positioned":14}],6:[function(t,e){"use strict";function r(t){function e(t){return i(g,t)}function r(t){return!!e(t.constructor)}function a(t){var e=n();if(t){r(t)&&(t=m(n(),s(t))),w=!1;var a=t,o=a.front,i=a.back,c=a.left,l=a.right,x=a.top,g=a.bottom;A.setFront(o).setBack(i).setLeft(c).setRight(l).setTop(x).setBottom(g),d(),w=!0}return e}function n(){return{front:p,back:h,left:b,right:v,top:u,bottom:k}}function x(t){return e(t.constructor)+"("+t.serialize()+")"}function f(){d()}function d(){var t=n();A.trigger("change",{target:A,faces:t})}var p,h,b,v,u,k,w=!0,y=function(t){return t!==void 0&&r(t)},A=o(this,c,{setFront:function(t){return y(t)&&(p=t,p.on("change",f),w&&d()),A},setBack:function(t){return y(t)&&(h=t,h.on("change",f),w&&d()),A},setLeft:function(t){return y(t)&&(b=t,b.on("change",f),w&&d()),A},setRight:function(t){return y(t)&&(v=t,v.on("change",f),w&&d()),A},setTop:function(t){return y(t)&&(u=t,u.on("change",f),w&&d()),A},setBottom:function(t){return y(t)&&(k=t,k.on("change",f),w&&d()),A},setFaces:a,getFaces:n,serialize:function(){return JSON.stringify(m(n(),x))},getFront:function getFront(){return p},getBack:function getBack(){return h},getLeft:function getLeft(){return b},getRight:function getRight(){return v},getTop:function getTop(){return u},getBottom:function getBottom(){return k}});a(t||new l)}function a(t){var e=t.indexOf("("),r=t.slice(0,e),a=t.slice(e+1,-1);return g[r].loadFromSerial(a)}var o=Object.assign,n=t("./common"),s=n.constant,i=n.findKeyWithValue,m=n.mapValues,c=t("./events"),l=t("./ImageFace"),x=t("./ColorFace"),g={image:l,color:x};e.exports=r,r.loadFromSerial=function(t){return new r(m(JSON.parse(t),a))}},{"./ColorFace":2,"./ImageFace":4,"./common":10,"./events":11}],7:[function(t,e){"use strict";var r=Object.assign,o=t("./common"),n=o.getDistance,s=o.isNumber,i=o.isShiftKey,m=o.not,c=t("./events"),l=function(t){return t.x||t.clientX||t.touches[0].pageX},g=function(t){return t.y||t.clientY||t.touches[0].pageY};e.exports=function(){function t(t,e){return s(e)&&(H[t]+=e,D()),rt}function e(t,e){return s(e)&&(H[t]=e,D()),rt}function o(t,e,r){f("x",t),f("y",e),f("z",r)}function f(t,e){return s(e)&&(j[t]+=e,D()),rt}function d(t,e){return s(e)&&(j[t]=e,D()),rt}function p(){return j}function h(t){return s(t)&&(q+=t,D()),rt}function b(){return q}function v(t){M(t),window.addEventListener("mousemove",k),window.addEventListener("mouseup",u)}function u(){L()}function k(t){var e=l(t),r=g(t),n=e-U.current.x,s=r-U.current.y;if(U.current={x:e,y:r},Q&&U.shiftDown)o(n,s),D(),rt.trigger("pan",T());else if(G){var i=2*a*2;H.y+=n/window.innerWidth*i,H.x-=s/window.innerHeight*i,D(),rt.trigger("rotate",T())}}function w(t){t.preventDefault();var e=t.touches;M(t),window.addEventListener("touchmove",A,{passive:!1}),1<e.length&&(K=I(e))}function A(t){t.preventDefault();var e=l(t),r=g(t),n=e-U.current.x,s=r-U.current.y;U.current={x:e,y:r};var i=t.touches;if(1===i.length&&G){var m=2*a*2;H.y+=n/window.innerWidth*m,H.x-=s/window.innerHeight*m,D(),rt.trigger("rotate",T())}else if(2===i.length&&J){var c=I(i),f=0<c-K,d=f?1:-1;h(d*c/(K*100)),K=c}else 3===i.length&&Q&&(o(n,s),D(),rt.trigger("pan",T()))}function E(t){return J&&(h(t.deltaY/500),t.preventDefault(),rt.trigger("zoom",T())),!1}function S(){Z.addEventListener("mousedown",v),Z.addEventListener("mousewheel",E),Z.addEventListener("wheel",E),Z.addEventListener("touchstart",w)}function P(){window.addEventListener("keydown",_),window.addEventListener("keyup",C)}function L(){window.removeEventListener("mousemove",k),window.removeEventListener("mouseup",u)}function F(){window.removeEventListener("keydown",_),window.removeEventListener("keyup",C)}function _(t){U.shiftDown=i(t)}function C(t){U.shiftDown=m(i)(t)}function T(){return{rotation:et(),pan:p(),zoom:b(),target:rt}}function I(t){var e=[l,g],r=e.map(function(e){return e(t.item(0))}),a=_slicedToArray(r,2),o=a[0],s=a[1],i=e.map(function(e){return e(t.item(1))}),m=_slicedToArray(i,2),c=m[0],x=m[1];return n(c-o,x-s)}function D(){var t=et(),e=t.x,r=t.y,a=t.z,o=b(),n=p();Y.style.transform="rotateX("+e+"rad) rotateY("+r+"rad) rotateZ("+a+"rad)",X.style.transform="scale("+o+", "+o+") translateX("+n.x+"px) translateY("+n.y+"px) translateZ("+n.z+"px)",R()}function R(){0!==$.length&&tt.forEach(function(t){return t.updateLightSource($)})}function M(t){var e=l(t),r=g(t);U.current={x:e,y:r}}var B,Z,X,Y,O=!1,N=0,V=0,W=0,H={x:N,y:V,z:W},j={x:N,y:V,z:W},q=1,U={current:{x:N,y:V},shiftDown:!1},K=0,G=!0,Q=!0,J=!0,$=[],tt=[],et=function(){return H},rt=r(this,c,{attach:function(t){if(!O)B=t,t.appendChild(Z),O=!0;else throw"Cannot attach currently attached scene"},detach:function(){if(O){O=!1;var t=Z,e=t.parentElement;e&&e.removeChild(Z)}else throw"Cannot detach currently detached scene"},add:function(t){Y.appendChild(t.getDomElement()),tt.push(t),t.setParentScene(rt),0!==$.length&&t.updateLightSource($)},remove:function(t){Y.removeChild(t.getDomElement()),tt.splice(tt.indexOf(t),1),t.removeParentScene()},getVoxels:function getVoxels(){return tt},pan:o,setPan:function(t,e,r){return d("x",t),d("y",e),d("z",r),D(),rt},getPan:p,rotate:function(e,r,a){return t("x",e),t("y",r),t("z",a),rt},setRotation:function(t,r,a){return e("x",t),e("y",r),e("z",a),D(),rt},getRotation:et,zoom:h,setZoom:function(t){return s(t)&&(q=t,D()),rt},getZoom:b,addLightSource:function(t){var e=$.indexOf(t);return!(-1!==e)&&(t.on("change move",R),$.push(t),R(),!0)},getLightSources:function getLightSources(){return $},removeLightSource:function(t){var e=$.indexOf(t);return-1!==e&&(t.off("change move"),$.splice(e,1),R(),!0)},canRotate:function canRotate(){return G},canPan:function canPan(){return Q},canZoom:function canZoom(){return J},enableRotate:function enableRotate(){return G=!0},enablePan:function enablePan(){return Q=!0},enableZoom:function enableZoom(){return J=!0},disableRotate:function disableRotate(){return G=!1},disablePan:function disablePan(){return Q=!1},disableZoom:function disableZoom(){return J=!1},isAttached:function isAttached(){return O},getRotationX:function getRotationX(){return H.x},getRotationY:function getRotationY(){return H.y},getRotationZ:function getRotationZ(){return H.z},rotateX:function rotateX(e){return t("x",e)},rotateY:function rotateY(e){return t("y",e)},rotateZ:function rotateZ(e){return t("z",e)},setRotationX:function setRotationX(t){return e("x",t)},setRotationY:function setRotationY(t){return e("y",t)},setRotationZ:function setRotationZ(t){return e("z",t)},panX:function panX(t){return f("x",t)},panY:function panY(t){return f("y",t)},panZ:function panZ(t){return f("z",t)},setPanX:function setPanX(t){return d("x",t)},setPanY:function setPanY(t){return d("y",t)},setPanZ:function setPanZ(t){return d("z",t)},getElement:function getElement(){return Z},getParentElement:function getParentElement(){return B},getInteractionState:function getInteractionState(t){return t?U[t]:U},bind:function bind(){S(),P()},unbind:function unbind(){L(),F()}});(function(){Z=document.createElement("div"),X=document.createElement("div"),Y=document.createElement("div"),Z.setAttribute("class","voxelcss-scene"),X.setAttribute("class","zoom"),Y.setAttribute("class","camera"),Z.appendChild(X),X.appendChild(Y)})(),S(),P()}},{"./common":10,"./events":11}],8:[function(o,n){"use strict";function s(){var R=0<arguments.length&&arguments[0]!==void 0?arguments[0]:[0,0,0],M=1<arguments.length&&arguments[1]!==void 0?arguments[1]:P,B=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},Z=void 0,X=void 0,Y=void 0,O=void 0,N=void 0,V={},W=0,H=i(y(i(this,w)),{clone:function(){return new s([H.getPositionX(),H.getPositionY(),H.getPositionZ()],W,{mesh:N})},animUp:function(t){if(t)O=t,Y.setAttribute("class","animated-up"),e();else throw"Scene required to add voxel to scene"},animDown:function(t){if(t)O=t,Y.setAttribute("class","animated-down"),e();else throw"Scene required to add voxel to scene"},addToScene:function(t){if(t)O=t,Y.setAttribute("class","animated"),e();else throw"Scene required to add voxel to scene"},removeFromScene:function(){O&&O.remove(H)},setParentScene:function(t){O=t},removeParentScene:function(){O=void 0},setDimension:r,getDimension:a,updateLightSource:function(t){var e=function(t){return d(t,3)},r=1,a=1,n=1,s=1,i=1,c=1;t.forEach(function(t){var m=[t.getPositionX(),t.getPositionY(),t.getPositionZ()],l=t.getBrightness(),p=t.getTravelDistance(),h=l[1]-l[0],b=1-l[1],v=function(t){var r=_slicedToArray(t,3),a=r[0],n=r[1],s=r[2],i=o(m,{A:a,B:n,C:s}),c=i.angle,l=i.direction,x=i.distance,v=0>l?1:g(1,e(1-c/(f/2))+d(x/p,6));return 1-(v*h+b)};a=x(0,a-v([0,0,-1])),r=x(0,r-v([0,0,1])),n=x(0,n-v([-1,0,0])),s=x(0,s-v([1,0,0])),i=x(0,i-v([0,1,0])),c=x(0,c-v([0,-1,0]))});var l={front:r,back:a,left:n,right:s,top:i,bottom:c};m(l).forEach(function(t){V[t].shader.style.opacity=l[t]})},setMesh:t,getMesh:function getMesh(){return N},getDomElement:function getDomElement(){return X},getAnimatedElement:function getAnimatedElement(){return Y}});function t(){var t=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};if(t.constructor===A){var e=N;e&&e.off("change"),N=t,N.on("change",function(){h();H.trigger("change:mesh",{target:H,mesh:N})}),h()}}function e(){O.add(H)}function r(t){v(t)&&(W=t)}function a(){return W}function o(t,e){var r=O.getRotationX(),o=O.getRotationY(),s=O.getRotationZ(),i=b(r,-o,s),m=e.A,g=e.B,f=e.C,h=n(t,i);h={x:h.x-H.getPositionX()-m*a()/2,y:h.y-H.getPositionY()-g*a()/2,z:h.z-H.getPositionZ()-f*a()/2};var v=h,u=v.x,x=v.y,k=v.z,w=p(d(u,2)+d(x,2)+d(k,2)),y=1===c(f)?f*k:1===c(g)?g*x:m*u,A=l(c(u*m+x*g+k*f)/w);return{angle:A,direction:y,distance:w}}function n(t,e){var r=_slicedToArray(t,3),a=r[0],o=r[1],n=r[2],s=k(e,[[a],[o],[n]]);return{x:s[0][0],y:s[1][0],z:s[2][0]}}function h(){var t=N.getFaces();L.forEach(function(e){var r=t[e],a=V[e];if(r instanceof E&&(a.src=r.getSource(),a.removeAttribute("class")),r instanceof S){var o=a.parentElement;o.style.background="#"+r.getHex(),a.setAttribute("class","colored")}})}function I(t){var e={top:C(W/2),bottom:C(-W/2),left:T(-W/2),right:T(W/2),front:_(W/2),back:_(-W/2)},r=L.reduce(function(t,e){return i(t,_defineProperty({},e,function(){return H.trigger("click:"+e,{target:H})}))},{}),a=D("img",""),o=D("div","shader"),n=D("div","voxelcss-face "+t);V[t]=i(a,{shader:o}),i(n.style,{width:F(W),height:F(W),marginLeft:F(-1*W/2),marginTop:F(-1*W/2),transform:e[t]}),n.addEventListener("click",r[t]),n.addEventListener("contextmenu",function(t){return t.preventDefault(),H.trigger("contextmenu",{target:H}),!1}),n.addEventListener("touchstart",function(){Z=setTimeout(function(){return H.trigger("contextmenu",{target:H})},z)}),n.addEventListener("touchend",function(a){a.preventDefault(),clearTimeout(Z),r[t]()}),n.appendChild(a),n.appendChild(o),Y.appendChild(n)}function D(t,e){var r=document.createElement(t);return r.setAttribute("class",e),r}H.on("move",function(){var t=H.getPosition(),e=t.x,r=t.y,a=t.z;X.style.transform="translate3d("+e+"px, "+-r+"px, "+a+"px)"}),r(M),function(){X=D("div","voxelcss-cube"),Y=D("div","animated"),L.forEach(function(t){return I(t)}),X.appendChild(Y)}(),H.setPosition(R),t(u(B.mesh)?new A:B.mesh)}var i=Object.assign,m=Object.keys,c=Math.abs,l=Math.asin,x=r,g=Math.min,f=a,d=e,p=t,h=o("./common"),b=h.generateRotationMatrix,v=h.isNumber,u=h.isUndefined,k=h.multiplyMatrices,w=o("./events"),y=o("./positioned"),A=o("./Mesh"),E=o("./ImageFace"),S=o("./ColorFace"),z=250,P=50,L=["top","bottom","front","back","left","right"],F=function(t){return t+"px"},_=function(t){return"translateZ("+t+"px)"},C=function(t){return"rotateX(90deg) "+_(t)},T=function(t){return"rotateY(90deg) "+_(t)};n.exports=s},{"./ColorFace":2,"./ImageFace":4,"./Mesh":6,"./common":10,"./events":11,"./positioned":14}],9:[function(t,e){"use strict";var r=Object.assign,a=t("./Mesh"),o=t("./Voxel");e.exports=function(t,e){function n(e){return x.push(e),t.add(e)}function s(e){var r=x.indexOf(e),a=-1<r;return a&&(t.remove(e),x.splice(r,1)),a}function i(){for(;0<x.length;)s(x[0])}function m(){return JSON.stringify(x.map(function(t){return l(t)}))}function c(t){if("string"==typeof t)try{i(),JSON.parse(t).forEach(function(t){var e=t.dimension,r=t.mesh,s=t.position,i=s.x,m=s.y,c=s.z,l=new o([i,m,c],e);l.setMesh(a.loadFromSerial(r)),n(l)})}catch(t){throw"Cannot import voxel data"}else throw"Only serialized data can be imported"}function l(t){return{position:t.getPosition(),dimension:t.getDimension(),mesh:t.getMesh().serialize()}}if(t===void 0)throw"World cannot be instantiated without a Scene instance";var x=[],g=function(){return"savedWorld<"+(e||"*")+">"};r(this,{add:n,remove:s,clear:i,getScene:function getScene(){return t},getVoxels:function getVoxels(){return x},import:c,export:m,load:function load(){return c(localStorage.getItem(g())||"[]")},isSaved:function isSaved(){return!!localStorage.getItem(g())},save:function save(){return localStorage.setItem(g(),m())},deleteSave:function deleteSave(){return localStorage.setItem(g(),"")}})}},{"./Mesh":6,"./Voxel":8}],10:[function(r,a){"use strict";function o(t,e){for(var a=t.length,o=t[0].length,n=e[0].length,s=Array(a),m=0;m<a;++m){s[m]=Array(n);for(var r=0;r<n;++r){s[m][r]=0;for(var c=0;c<o;++c)s[m][r]+=t[m][c]*e[c][r]}}return s}var n=Math.cos,s=Math.sin,i=16,m=16,c=function(t){return"number"==typeof t},l=function(t){return e(t,2)};a.exports={findKeyWithValue:function(t,e){var r=Object.keys(t),a=r.map(function(r,a){return t[r]===e&&a}).find(c);return r[a]},generateRotationMatrix:function(t,e,r){var a=[[1,0,0],[0,n(t),-s(t)],[0,s(t),n(t)]],i=[[n(e),0,s(e)],[0,1,0],[-s(e),0,n(e)]],m=[[n(r),-s(r),0],[s(r),n(r),0],[0,0,1]];return o(o(m,i),a)},hexToRgb:function(t){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;t=t.replace(e,function(t,e,r,a){return e+e+r+r+a+a});var r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return r?{r:parseInt(r[1],i),g:parseInt(r[2],i),b:parseInt(r[3],i)}:null},isNumber:c,isShiftKey:function isShiftKey(t){return t.keyCode===m||t.which===m},isUndefined:function isUndefined(t){return t===void 0},mapValues:function(t,e){return Object.keys(t).map(function(r){return _defineProperty({},r,e(t[r]))}).reduce(function(t,e){return Object.assign(t,e)},{})},not:function(t){return function(){return!t.apply(void 0,arguments)}},multiplyMatrices:o,rgbToHex:function(t){var e=t.r,r=t.g,a=t.b;return""+(16777216+(e<<16)+(r<<8)+a).toString(16).slice(1)},squared:l,constant:function constant(t){return function(){return t}},getDistance:function getDistance(e,r){return t(l(e)+l(r))},identity:function identity(t){return t}}},{}],11:[function(t,e){"use strict";function a(t,e){this.id=t._listenId,this.listener=t,this.obj=e,this.interop=!0,this.count=0,this._events=void 0}var o=Object.assign,n=/\s+/,s=0,i=function(t){return t+ ++s+""},m=function(t){var e,r=2;return function(){return 0<--r&&(e=t.apply(this,arguments)),1>=r&&(t=null),e}},c=function(t){return function(e){return null===e?void 0:e[t]}},l=function(t){var e=c("length")(t);return"number"==typeof e&&0<=e&&e<=Number.MAX_SAFE_INTEGER},x=function(t){var e="undefined"==typeof t?"undefined":_typeof(t);return"function"===e||"object"===e&&!!t},g=function(t){return!(null!==t)||(l(t)&&(Array.isArray(t)||"string"==typeof t)?0===t.length:0===Object.keys(t).length)},f=function(t,e,r,a){try{t.on(e,r,a)}catch(t){return t}},d=void 0,p=function(t,e,r,a){if(r){var o=t[e]||(t[e]=[]),n=a.context,s=a.ctx,i=a.listening;s=n||s,i&&i.count++,o.push({callback:r,context:n,ctx:s,listening:i})}return t},h=function(t,e,r,a){if(t){var o=a.context,n=a.listeners,s=void 0;return e||o||r?(s=e?[e]:Object.keys(t),s.forEach(function(e){var a=t[e];if(a){var n=[];a.forEach(function(t){if(r&&r!==t.callback&&r!==t.callback._callback||o&&o!==t.context)n.push(t);else{var a=t.listening;a&&a.off(e,r)}}),n.length?t[e]=n:delete t[e]}}),t):(s=x(n)?Object.keys(n):[],void s.forEach(function(t){return n[t].cleanup()}))}},b=function(t,e,r,a){if(r){var o=t[e]=m(function(){a(e,o),r.apply(this,arguments)});o._callback=r}return t},v=function(t,e,r,a,o){var s=r&&"object"===("undefined"==typeof r?"undefined":_typeof(r));if(s){var i=void 0!==a&&"context"in o&&void 0===o.context;i&&(o.context=a),Object.keys(r).forEach(function(a){e=v(t,e,a,r[a],o)})}else r&&n.test(r)?r.split(n).forEach(function(r){e=t(e,r,a,o)}):e=t(e,r,a,o);return e},u=function(t,e){var r,a=-1,o=t.length,n=_slicedToArray(e,3),s=n[0],i=n[1],m=n[2];switch(e.length){case 0:for(;++a<o;)(r=t[a]).callback.call(r.ctx);break;case 1:for(;++a<o;)(r=t[a]).callback.call(r.ctx,s);break;case 2:for(;++a<o;)(r=t[a]).callback.call(r.ctx,s,i);break;case 3:for(;++a<o;)(r=t[a]).callback.call(r.ctx,s,i,m);break;default:for(;++a<o;)(r=t[a]).callback.apply(r.ctx,e);}},k=function(t,e,r,a){if(t){var o=t[e],n=t.all;o&&n&&(n=n.slice()),o&&u(o,a),n&&u(n,[e].concat(a))}return t},w={on:function on(t,e,r){if(this._events=v(p,this._events||{},t,e,{context:r,ctx:this,listening:d}),d){var a=this._listeners||(this._listeners={});a[d.id]=d,d.interop=!1}return this},off:function off(t,e,r){return this._events?(this._events=v(h,this._events,t,e,{context:r,listeners:this._listeners}),this):this},once:function(t,e,r){var a=v(b,{},t,e,this.off.bind(this));return"string"==typeof t&&null===r&&(e=void 0),this.on(a,e,r)},trigger:function trigger(t){if(this._events){for(var e=r(0,arguments.length-1),a=Array(e),o=0;o<e;o++)a[o]=arguments[o+1];v(k,this._events,t,void 0,a)}return this},listenTo:function listenTo(t,e,r){if(t){var o=t._listenId||(t._listenId=i("l")),n=this._listeningTo||(this._listeningTo={}),s=d=n[o];s||(this._listenId||(this._listenId=i("l")),s=d=n[o]=new a(this,t));var m=f(t,e,r,this);if(d=void 0,m)throw m;s.interop&&s.on(e,r)}return this},listenToOnce:function listenToOnce(t,e,r){var a=v(b,{},e,r,this.stopListening.bind(this,t));return this.listenTo(t,a)},stopListening:function stopListening(t,e,r){var a=this,o=this._listeningTo;if(o){var n=t?[t._listenId]:Object.keys(o);n.forEach(function(t){var n=o[t];n&&(n.obj.off(e,r,a),n.interop&&n.off(e,r))}),g(o)&&(this._listeningTo=void 0)}return this}};o(a.prototype,{on:w.on,off:function off(t,e){var r;this.interop?(this._events=v(h,this._events,t,e,{context:void 0,listeners:void 0}),r=!this._events):(this.count--,r=0===this.count),r&&this.cleanup()},cleanup:function cleanup(){delete this.listener._listeningTo[this.obj._listenId],this.interop||delete this.obj._listeners[this.id]}}),e.exports=w},{}],12:[function(t,e){"use strict";t("../dist/voxelcss.css");var r=t("./ColorFace"),a=t("./Editor"),o=t("./ImageFace"),n=t("./LightSource"),s=t("./Mesh"),i=t("./meshes"),m=t("./Scene"),c=t("./Voxel"),l=t("./World");e.exports={ColorFace:r,Editor:a,ImageFace:o,LightSource:n,Mesh:s,meshes:i,Scene:m,Voxel:c,World:l}},{"../dist/voxelcss.css":1,"./ColorFace":2,"./Editor":3,"./ImageFace":4,"./LightSource":5,"./Mesh":6,"./Scene":7,"./Voxel":8,"./World":9,"./meshes":13}],13:[function(t,e){"use strict";var r=t("./Mesh"),a=t("./ImageFace");e.exports={dirt:new r(new a("http://voxelcss.com/res/dirt/main.png")),grass:new r({top:new a("http://voxelcss.com/res/grass/top.png"),bottom:new a("http://voxelcss.com/res/grass/bottom.png"),front:new a("http://voxelcss.com/res/grass/side.png"),back:new a("http://voxelcss.com/res/grass/side.png"),left:new a("http://voxelcss.com/res/grass/side.png"),right:new a("http://voxelcss.com/res/grass/side.png")}),water:new r(new a("http://voxelcss.com/res/water/main.png")),waterFall:new r({top:new a("http://voxelcss.com/res/water/main.png"),bottom:new a("http://voxelcss.com/res/water/main.png"),front:new a("http://voxelcss.com/res/water/fall.png"),back:new a("http://voxelcss.com/res/water/fall.png"),left:new a("http://voxelcss.com/res/water/fall.png"),right:new a("http://voxelcss.com/res/water/fall.png")}),waterFallTop:new r({top:new a("http://voxelcss.com/res/water/main.png"),bottom:new a("http://voxelcss.com/res/water/main.png"),front:new a("http://voxelcss.com/res/water/falltop.png"),back:new a("http://voxelcss.com/res/water/falltop.png"),left:new a("http://voxelcss.com/res/water/falltop.png"),right:new a("http://voxelcss.com/res/water/falltop.png")}),waterFallCrash:new r({top:new a("http://voxelcss.com/res/water/main.png"),bottom:new a("http://voxelcss.com/res/water/main.png"),front:new a("http://voxelcss.com/res/water/crash.png"),back:new a("http://voxelcss.com/res/water/crash.png"),left:new a("http://voxelcss.com/res/water/crash.png"),right:new a("http://voxelcss.com/res/water/crash.png")}),treeTrunk:new r({top:new a("http://voxelcss.com/res/tree/rings.png"),bottom:new a("http://voxelcss.com/res/tree/rings.png"),front:new a("http://voxelcss.com/res/tree/bark.png"),back:new a("http://voxelcss.com/res/tree/bark.png"),left:new a("http://voxelcss.com/res/tree/bark.png"),right:new a("http://voxelcss.com/res/tree/bark.png")}),treeLeaves:new r(new a("http://voxelcss.com/res/tree/leaves.png"))}},{"./ImageFace":4,"./Mesh":6}],14:[function(t,e){"use strict";var r=Object.assign,a=t("./common"),o=a.isNumber;e.exports=function(t){function e(t){return o(t)?void(l.x=t,g&&c.trigger("move")):l.x}function a(t){return o(t)?void(l.y=t,g&&c.trigger("move")):l.y}function n(t){return o(t)?void(l.z=t,g&&c.trigger("move")):l.z}function s(t){return o(t)?e(t+l.x):l.x}function i(t){return o(t)?a(t+l.y):l.y}function m(t){return o(t)?n(t+l.z):l.z}var c=t||new Function,l={x:0,y:0,z:0},g=!0;return r(c,{setPosition:function(t){var r=_slicedToArray(t,3),o=r[0],s=r[1],i=r[2];return g=!1,e(o),a(s),n(i),g=!0,c.trigger("move"),c},setPositionX:e,setPositionY:a,setPositionZ:n,getPosition:function(){return l},getPositionX:function(){return l.x},getPositionY:function(){return l.y},getPositionZ:function(){return l.z},translate:function(t,e,r){return g=!1,s(t),i(e),m(r),g=!0,c.trigger("move"),c},translateX:s,translateY:i,translateZ:m}),c}},{"./common":10}],15:[function(t,e){"use strict";var r=[],a=function(t,e){var a=document.head||document.getElementsByTagName("head")[0],o=r[r.length-1];if(e=e||{},e.insertAt=e.insertAt||"bottom","top"===e.insertAt)o?o.nextSibling?a.insertBefore(t,o.nextSibling):a.appendChild(t):a.insertBefore(t,a.firstChild),r.push(t);else if("bottom"===e.insertAt)a.appendChild(t);else throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.")};e.exports={createLink:function createLink(t,e){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("link");for(var o in a.href=t,a.rel="stylesheet",e)if(e.hasOwnProperty(o)){var n=e[o];a.setAttribute("data-"+o,n)}r.appendChild(a)},createStyle:function createStyle(t,e,r){r=r||{};var o=document.createElement("style");for(var n in o.type="text/css",e)if(e.hasOwnProperty(n)){var s=e[n];o.setAttribute("data-"+n,s)}o.sheet?(o.innerHTML=t,o.sheet.cssText=t,a(o,{insertAt:r.insertAt})):o.styleSheet?(a(o,{insertAt:r.insertAt}),o.styleSheet.cssText=t):(o.appendChild(document.createTextNode(t)),a(o,{insertAt:r.insertAt}))}}},{}]},{},[12])(12)});
