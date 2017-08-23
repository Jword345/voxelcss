"use strict";var _slicedToArray=function(){function t(t,e){var r=[],a=!0,o=!1,s=void 0;try{for(var n,i=t[Symbol.iterator]();!(a=(n=i.next()).done)&&(r.push(n.value),!(e&&r.length===e));a=!0);}catch(t){o=!0,s=t}finally{try{!a&&i["return"]&&i["return"]()}finally{if(o)throw s}}return r}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function _defineProperty(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}(function(t){if("object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?this:self:global:window,e.voxelcss=t()}})(function(){var t=Math.max,e=Math.PI;return function m(c,t,e){function r(i,o){if(!t[i]){if(!c[i]){var n="function"==typeof require&&require;if(!o&&n)return n(i,!0);if(s)return s(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var x=t[i]={exports:{}};c[i][0].call(x.exports,function(t){var e=c[i][1][t];return r(e?e:t)},x,x.exports,m,c,t,e)}return t[i].exports}for(var s="function"==typeof require&&require,a=0;a<e.length;a++)r(e[a]);return r}({1:[function(t,e){var r=".voxelcss-scene {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  -webkit-perspective-origin: 50% 50%;\n  perspective-origin: 50% 50%;\n  cursor: move;\n}\n.voxelcss-scene .camera,\n.voxelcss-scene .zoom {\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  overflow: visible;\n}\n.voxelcss-cube,\n.voxelcss-scene .camera,\n.voxelcss-scene .zoom {\n  position: absolute;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n}\n.voxelcss-cube:hover img {\n  visibility: hidden!important;\n}\n.voxelcss-cube:hover .voxelcss-face {\n  background: rgba(0,0,0,.3)!important;\n}\n.voxelcss-cube:hover .voxelcss-face .shader {\n  opacity: 0!important;\n}\n.voxelcss-cube .animated-down,\n.voxelcss-cube .animated-up {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n}\n.voxelcss-cube .animated-up {\n  -webkit-animation: a 1s linear both;\n  animation: a 1s linear both;\n}\n.voxelcss-cube .animated-down {\n  -webkit-animation: b 1s linear both;\n  animation: b 1s linear both;\n}\n.voxelcss-face {\n  display: block;\n  position: absolute;\n  outline: none;\n  border: none;\n  margin-left: -18px;\n  margin-top: -18px;\n  width: 36px;\n  height: 36px;\n  cursor: pointer;\n}\n.voxelcss-face img {\n  width: 100%;\n  height: 100%;\n}\n.voxelcss-face img.colored {\n  visibility: hidden;\n}\n.voxelcss-face .shader {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0;\n}\n@-webkit-keyframes a {\n  0% {\n    opacity: 0;\n    -webkit-transform: matrix(1,0,0,1,0,300);\n    transform: matrix(1,0,0,1,0,300);\n  }\n\n  1.3% {\n    -webkit-transform: matrix(1,0,0,3.905,0,237.02);\n    transform: matrix(1,0,0,3.905,0,237.02);\n  }\n\n  2.55% {\n    -webkit-transform: matrix(1,0,0,4.554,0,182.798);\n    transform: matrix(1,0,0,4.554,0,182.798);\n  }\n\n  4.1% {\n    -webkit-transform: matrix(1,0,0,4.025,0,125.912);\n    transform: matrix(1,0,0,4.025,0,125.912);\n  }\n\n  5.71% {\n    -webkit-transform: matrix(1,0,0,3.039,0,79.596);\n    transform: matrix(1,0,0,3.039,0,79.596);\n  }\n\n  8.11% {\n    opacity: 1;\n    -webkit-transform: matrix(1,0,0,1.82,0,31.647);\n    transform: matrix(1,0,0,1.82,0,31.647);\n  }\n\n  8.81% {\n    -webkit-transform: matrix(1,0,0,1.581,0,21.84);\n    transform: matrix(1,0,0,1.581,0,21.84);\n  }\n\n  11.96% {\n    -webkit-transform: matrix(1,0,0,1.034,0,-4.825);\n    transform: matrix(1,0,0,1.034,0,-4.825);\n  }\n\n  12.11% {\n    -webkit-transform: matrix(1,0,0,1.023,0,-5.53);\n    transform: matrix(1,0,0,1.023,0,-5.53);\n  }\n\n  15.07% {\n    -webkit-transform: matrix(1,0,0,.947,0,-12.662);\n    transform: matrix(1,0,0,.947,0,-12.662);\n  }\n\n  16.12% {\n    -webkit-transform: matrix(1,0,0,.951,0,-13.007);\n    transform: matrix(1,0,0,.951,0,-13.007);\n  }\n\n  27.23% {\n    -webkit-transform: matrix(1,0,0,1.001,0,-2.352);\n    transform: matrix(1,0,0,1.001,0,-2.352);\n  }\n\n  27.58% {\n    -webkit-transform: matrix(1,0,0,1.001,0,-2.121);\n    transform: matrix(1,0,0,1.001,0,-2.121);\n  }\n\n  38.34% {\n    -webkit-transform: matrix(1,0,0,1,0,.311);\n    transform: matrix(1,0,0,1,0,.311);\n  }\n\n  40.09% {\n    -webkit-transform: matrix(1,0,0,1,0,.291);\n    transform: matrix(1,0,0,1,0,.291);\n  }\n\n  50% {\n    -webkit-transform: matrix(1,0,0,1,0,.048);\n    transform: matrix(1,0,0,1,0,.048);\n  }\n\n  60.56% {\n    -webkit-transform: matrix(1,0,0,1,0,-.007);\n    transform: matrix(1,0,0,1,0,-.007);\n  }\n\n  82.78% {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n\n  to {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n}\n@keyframes a {\n  0% {\n    opacity: 0;\n    -webkit-transform: matrix(1,0,0,1,0,300);\n    transform: matrix(1,0,0,1,0,300);\n  }\n\n  1.3% {\n    -webkit-transform: matrix(1,0,0,3.905,0,237.02);\n    transform: matrix(1,0,0,3.905,0,237.02);\n  }\n\n  2.55% {\n    -webkit-transform: matrix(1,0,0,4.554,0,182.798);\n    transform: matrix(1,0,0,4.554,0,182.798);\n  }\n\n  4.1% {\n    -webkit-transform: matrix(1,0,0,4.025,0,125.912);\n    transform: matrix(1,0,0,4.025,0,125.912);\n  }\n\n  5.71% {\n    -webkit-transform: matrix(1,0,0,3.039,0,79.596);\n    transform: matrix(1,0,0,3.039,0,79.596);\n  }\n\n  8.11% {\n    opacity: 1;\n    -webkit-transform: matrix(1,0,0,1.82,0,31.647);\n    transform: matrix(1,0,0,1.82,0,31.647);\n  }\n\n  8.81% {\n    -webkit-transform: matrix(1,0,0,1.581,0,21.84);\n    transform: matrix(1,0,0,1.581,0,21.84);\n  }\n\n  11.96% {\n    -webkit-transform: matrix(1,0,0,1.034,0,-4.825);\n    transform: matrix(1,0,0,1.034,0,-4.825);\n  }\n\n  12.11% {\n    -webkit-transform: matrix(1,0,0,1.023,0,-5.53);\n    transform: matrix(1,0,0,1.023,0,-5.53);\n  }\n\n  15.07% {\n    -webkit-transform: matrix(1,0,0,.947,0,-12.662);\n    transform: matrix(1,0,0,.947,0,-12.662);\n  }\n\n  16.12% {\n    -webkit-transform: matrix(1,0,0,.951,0,-13.007);\n    transform: matrix(1,0,0,.951,0,-13.007);\n  }\n\n  27.23% {\n    -webkit-transform: matrix(1,0,0,1.001,0,-2.352);\n    transform: matrix(1,0,0,1.001,0,-2.352);\n  }\n\n  27.58% {\n    -webkit-transform: matrix(1,0,0,1.001,0,-2.121);\n    transform: matrix(1,0,0,1.001,0,-2.121);\n  }\n\n  38.34% {\n    -webkit-transform: matrix(1,0,0,1,0,.311);\n    transform: matrix(1,0,0,1,0,.311);\n  }\n\n  40.09% {\n    -webkit-transform: matrix(1,0,0,1,0,.291);\n    transform: matrix(1,0,0,1,0,.291);\n  }\n\n  50% {\n    -webkit-transform: matrix(1,0,0,1,0,.048);\n    transform: matrix(1,0,0,1,0,.048);\n  }\n\n  60.56% {\n    -webkit-transform: matrix(1,0,0,1,0,-.007);\n    transform: matrix(1,0,0,1,0,-.007);\n  }\n\n  82.78% {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n\n  to {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n}\n@-webkit-keyframes b {\n  0% {\n    opacity: 0;\n    -webkit-transform: matrix(1,0,0,1,0,-300);\n    transform: matrix(1,0,0,1,0,-300);\n  }\n\n  1.3% {\n    -webkit-transform: matrix(1,0,0,3.905,0,-237.02);\n    transform: matrix(1,0,0,3.905,0,-237.02);\n  }\n\n  2.55% {\n    -webkit-transform: matrix(1,0,0,4.554,0,-182.798);\n    transform: matrix(1,0,0,4.554,0,-182.798);\n  }\n\n  4.1% {\n    -webkit-transform: matrix(1,0,0,4.025,0,-125.912);\n    transform: matrix(1,0,0,4.025,0,-125.912);\n  }\n\n  5.71% {\n    -webkit-transform: matrix(1,0,0,3.039,0,-79.596);\n    transform: matrix(1,0,0,3.039,0,-79.596);\n  }\n\n  8.11% {\n    opacity: 1;\n    -webkit-transform: matrix(1,0,0,1.82,0,-31.647);\n    transform: matrix(1,0,0,1.82,0,-31.647);\n  }\n\n  8.81% {\n    -webkit-transform: matrix(1,0,0,1.581,0,-21.84);\n    transform: matrix(1,0,0,1.581,0,-21.84);\n  }\n\n  11.96% {\n    -webkit-transform: matrix(1,0,0,1.034,0,4.825);\n    transform: matrix(1,0,0,1.034,0,4.825);\n  }\n\n  12.11% {\n    -webkit-transform: matrix(1,0,0,1.023,0,5.53);\n    transform: matrix(1,0,0,1.023,0,5.53);\n  }\n\n  15.07% {\n    -webkit-transform: matrix(1,0,0,.947,0,12.662);\n    transform: matrix(1,0,0,.947,0,12.662);\n  }\n\n  16.12% {\n    -webkit-transform: matrix(1,0,0,.951,0,13.007);\n    transform: matrix(1,0,0,.951,0,13.007);\n  }\n\n  27.23% {\n    -webkit-transform: matrix(1,0,0,1.001,0,2.352);\n    transform: matrix(1,0,0,1.001,0,2.352);\n  }\n\n  27.58% {\n    -webkit-transform: matrix(1,0,0,1.001,0,2.121);\n    transform: matrix(1,0,0,1.001,0,2.121);\n  }\n\n  38.34% {\n    -webkit-transform: matrix(1,0,0,1,0,-.311);\n    transform: matrix(1,0,0,1,0,-.311);\n  }\n\n  40.09% {\n    -webkit-transform: matrix(1,0,0,1,0,-.291);\n    transform: matrix(1,0,0,1,0,-.291);\n  }\n\n  50% {\n    -webkit-transform: matrix(1,0,0,1,0,-.048);\n    transform: matrix(1,0,0,1,0,-.048);\n  }\n\n  60.56% {\n    -webkit-transform: matrix(1,0,0,1,0,.007);\n    transform: matrix(1,0,0,1,0,.007);\n  }\n\n  82.78% {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n\n  to {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n}\n@keyframes b {\n  0% {\n    opacity: 0;\n    -webkit-transform: matrix(1,0,0,1,0,-300);\n    transform: matrix(1,0,0,1,0,-300);\n  }\n\n  1.3% {\n    -webkit-transform: matrix(1,0,0,3.905,0,-237.02);\n    transform: matrix(1,0,0,3.905,0,-237.02);\n  }\n\n  2.55% {\n    -webkit-transform: matrix(1,0,0,4.554,0,-182.798);\n    transform: matrix(1,0,0,4.554,0,-182.798);\n  }\n\n  4.1% {\n    -webkit-transform: matrix(1,0,0,4.025,0,-125.912);\n    transform: matrix(1,0,0,4.025,0,-125.912);\n  }\n\n  5.71% {\n    -webkit-transform: matrix(1,0,0,3.039,0,-79.596);\n    transform: matrix(1,0,0,3.039,0,-79.596);\n  }\n\n  8.11% {\n    opacity: 1;\n    -webkit-transform: matrix(1,0,0,1.82,0,-31.647);\n    transform: matrix(1,0,0,1.82,0,-31.647);\n  }\n\n  8.81% {\n    -webkit-transform: matrix(1,0,0,1.581,0,-21.84);\n    transform: matrix(1,0,0,1.581,0,-21.84);\n  }\n\n  11.96% {\n    -webkit-transform: matrix(1,0,0,1.034,0,4.825);\n    transform: matrix(1,0,0,1.034,0,4.825);\n  }\n\n  12.11% {\n    -webkit-transform: matrix(1,0,0,1.023,0,5.53);\n    transform: matrix(1,0,0,1.023,0,5.53);\n  }\n\n  15.07% {\n    -webkit-transform: matrix(1,0,0,.947,0,12.662);\n    transform: matrix(1,0,0,.947,0,12.662);\n  }\n\n  16.12% {\n    -webkit-transform: matrix(1,0,0,.951,0,13.007);\n    transform: matrix(1,0,0,.951,0,13.007);\n  }\n\n  27.23% {\n    -webkit-transform: matrix(1,0,0,1.001,0,2.352);\n    transform: matrix(1,0,0,1.001,0,2.352);\n  }\n\n  27.58% {\n    -webkit-transform: matrix(1,0,0,1.001,0,2.121);\n    transform: matrix(1,0,0,1.001,0,2.121);\n  }\n\n  38.34% {\n    -webkit-transform: matrix(1,0,0,1,0,-.311);\n    transform: matrix(1,0,0,1,0,-.311);\n  }\n\n  40.09% {\n    -webkit-transform: matrix(1,0,0,1,0,-.291);\n    transform: matrix(1,0,0,1,0,-.291);\n  }\n\n  50% {\n    -webkit-transform: matrix(1,0,0,1,0,-.048);\n    transform: matrix(1,0,0,1,0,-.048);\n  }\n\n  60.56% {\n    -webkit-transform: matrix(1,0,0,1,0,.007);\n    transform: matrix(1,0,0,1,0,.007);\n  }\n\n  82.78% {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n\n  to {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n}\n";t("browserify-css").createStyle(r,{href:"dist/voxelcss.css"},{insertAt:"bottom"}),e.exports=r},{"browserify-css":15}],2:[function(t,e){"use strict";function r(){function t(){var o=arguments[0],s="undefined"==typeof o?"undefined":_typeof(o),n=e,m=o;if(1===arguments.length&&"number"!==s)"string"===s&&(n=function(e){return t(i(e))});else{var c=Array.prototype.slice.call(arguments),l=c[0],x=c[1],f=c[2],d=c[3];m={r:l,g:x,b:f,a:d}}n(m)}function e(t){var e=t.r,i=t.g,m=t.b,c=t.a;if([e,i,m].every(s))return x.trigger("change",{target:x}),o(l,{r:e,g:i,b:m,a:s(c)?c:1});if([e,i,m].every(n))return l;throw"Face color RGB values must be numbers"}var l={r:0,g:0,b:0,a:1},x=o(this,c,{setColor:t,getColor:function getColor(){return l},getHex:function getHex(){return m(l)},clone:function clone(){return new r(l)},serialize:function serialize(){return JSON.stringify(l)}});t.apply(void 0,arguments)}var o=Object.assign,a=t("./common"),s=a.isNumber,n=a.isUndefined,i=a.hexToRgb,m=a.rgbToHex,c=t("./events");e.exports=r,r.loadFromSerial=function(t){var e=JSON.parse(t);return new r(e)}},{"./common":10,"./events":11}],3:[function(t,e){"use strict";var r=Object.assign;e.exports=function(t,e){function a(e){return e.off(),c(e),t.add(e),n.canAutoSave()&&t.save(),n}function o(e){return t.remove(e)&&e.off(),n.canAutoSave()&&t.save(),n}function s(t,e){if(n.isEnabled()){var r,o=t.target,s=o.getDimension();e=e.map(function(t){return t*s}),a((r=o.clone()).translate.apply(r,_toConsumableArray(e)))}}if(t===void 0)throw"Editor requires World instance for initialization";var n=this,i=e!==void 0&&!0===e.autosave,m=!0,c=function(t){return t.on({"change:mesh":function changeMesh(){return n.canAutoSave()&&n.save()},contextmenu:function contextmenu(t){return n.isEnabled()&&o(t.target)},"click:top":function clickTop(t){return s(t,[0,1,0])},"click:bottom":function clickBottom(t){return s(t,[0,-1,0])},"click:front":function clickFront(t){return s(t,[0,0,1])},"click:back":function clickBack(t){return s(t,[0,0,-1])},"click:left":function clickLeft(t){return s(t,[-1,0,0])},"click:right":function clickRight(t){return s(t,[1,0,0])}})},l=function(){return t.getVoxels().forEach(c)};r(n,{add:a,remove:o,getWorld:function getWorld(){return t},isEnabled:function isEnabled(){return m},enable:function enable(){return m=!0},disable:function disable(){return m=!1},canAutoSave:function canAutoSave(){return i},enableAutoSave:function enableAutoSave(){return i=!0},disableAutoSave:function disableAutoSave(){return i=!1},isSaved:function isSaved(){return t.isSaved()},deleteSave:function deleteSave(){return t.deleteSave()},export:function _export(){return t.export()},import:function _import(e){t.import(e),l()},save:function save(){return t.save()},load:function load(){t.load(),l()}}),l()}},{}],4:[function(t,e){"use strict";function r(t){function e(t){return t&&(n=t,m.trigger("change",{target:m})),n}var n=s,i=function(){return n},m=a(this,o,{setSource:e,getSource:i,serialize:i,clone:function clone(){return new r(n)}});e(t)}var a=Object.assign,o=t("./events"),s="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";e.exports=r,r.loadFromSerial=function(t){return new r(t)}},{"./events":11}],5:[function(t,e){"use strict";var r=Object.assign,a=t("./common"),o=a.isNumber,s=t("./events"),n=t("./positioned");e.exports=function(t,e){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:0.2,i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:1,m=500,c=1,l=0,x=r(n(r(this,s)),{setBrightness:function(t,e){return o(e)&&(c=e),o(t)&&(l=t),[t,e].some(o)&&x.trigger("change",{target:x}),x},getBrightness:function getBrightness(){return[l,c]},setTravelDistance:function(t){return o(t)&&(m=t,x.trigger("change",{target:x})),x},getTravelDistance:function getTravelDistance(){return m}});x.setPosition(t).setTravelDistance(e).setBrightness(a,i)}},{"./common":10,"./events":11,"./positioned":14}],6:[function(t,e){"use strict";function r(t){function e(t){return i(f,t)}function r(t){return!!e(t.constructor)}function a(t){var e=s();if(t){r(t)&&(t=m(s(),n(t))),w=!1;var a=t,o=a.front,i=a.back,c=a.left,l=a.right,x=a.top,f=a.bottom;A.setFront(o).setBack(i).setLeft(c).setRight(l).setTop(x).setBottom(f),d(),w=!0}return e}function s(){return{front:p,back:h,left:b,right:v,top:u,bottom:k}}function x(t){return e(t.constructor)+"("+t.serialize()+")"}function g(){d()}function d(){var t=s();A.trigger("change",{target:A,faces:t})}var p,h,b,v,u,k,w=!0,y=function(t){return t!==void 0&&r(t)},A=o(this,c,{setFront:function(t){return y(t)&&(p=t,p.on("change",g),w&&d()),A},setBack:function(t){return y(t)&&(h=t,h.on("change",g),w&&d()),A},setLeft:function(t){return y(t)&&(b=t,b.on("change",g),w&&d()),A},setRight:function(t){return y(t)&&(v=t,v.on("change",g),w&&d()),A},setTop:function(t){return y(t)&&(u=t,u.on("change",g),w&&d()),A},setBottom:function(t){return y(t)&&(k=t,k.on("change",g),w&&d()),A},setFaces:a,getFaces:s,serialize:function(){return JSON.stringify(m(s(),x))},getFront:function getFront(){return p},getBack:function getBack(){return h},getLeft:function getLeft(){return b},getRight:function getRight(){return v},getTop:function getTop(){return u},getBottom:function getBottom(){return k}});a(t||new l)}function a(t){var e=t.indexOf("("),r=t.slice(0,e),a=t.slice(e+1,-1);return f[r].loadFromSerial(a)}var o=Object.assign,s=t("./common"),n=s.constant,i=s.findKeyWithValue,m=s.mapValues,c=t("./events"),l=t("./ImageFace"),x=t("./ColorFace"),f={image:l,color:x};e.exports=r,r.loadFromSerial=function(t){return new r(m(JSON.parse(t),a))}},{"./ColorFace":2,"./ImageFace":4,"./common":10,"./events":11}],7:[function(t,r){"use strict";var a=Object.assign,o=t("./common"),s=o.isNumber,n=o.isShiftKey,i=o.not,m=t("./events"),c=function(t){return t.x||t.clientX},l=function(t){return t.y||t.clientY};r.exports=function(){function t(t,e){return s(e)&&(X[t]+=e,L()),G}function r(t,e){return s(e)&&(X[t]=e,L()),G}function o(t,e,r){f("x",t),f("y",e),f("z",r)}function f(t,e){return s(e)&&(O[t]+=e,L()),G}function g(t,e){return s(e)&&(O[t]=e,L()),G}function d(){return O}function p(t){return s(t)&&(N+=t,L()),G}function h(){return N}function b(t){var e=c(t),r=l(t);V.start={x:e,y:r},V.current={x:e,y:r},window.addEventListener("mousemove",k),window.addEventListener("mouseup",v)}function v(){S()}function u(){return{rotation:K(),pan:d(),zoom:h(),target:G}}function k(t){var r=c(t),a=l(t),s=r-V.current.x,n=a-V.current.y;if(V.current={x:r,y:a},V.lastMove={dx:s,dy:n},H&&V.shiftDown)o(s,n),L(),G.trigger("pan",u());else if(W){var i=2*e*2;X.y+=s/window.innerWidth*i,X.x-=n/window.innerHeight*i,L(),G.trigger("rotate",u())}}function w(t){if(j){p(t.deltaY/500),t.preventDefault(),G.trigger("zoom",u())}return!1}function A(){I.addEventListener("mousedown",b),I.addEventListener("mousewheel",w),I.addEventListener("wheel",w)}function E(){window.addEventListener("keydown",F),window.addEventListener("keyup",_)}function S(){window.removeEventListener("mousemove",k),window.removeEventListener("mouseup",v)}function P(){window.removeEventListener("keydown",F),window.removeEventListener("keyup",_)}function F(t){V.shiftDown=n(t)}function _(t){V.shiftDown=i(n)(t)}function L(){var t=K(),e=t.x,r=t.y,a=t.z,o=h(),s=d();R.style.transform="rotateX("+e+"rad) rotateY("+r+"rad) rotateZ("+a+"rad)",Z.style.transform="scale("+o+", "+o+") translateX("+s.x+"px) translateY("+s.y+"px) translateZ("+s.z+"px)",C()}function C(){0!==U.length&&q.forEach(function(t){return t.updateLightSource(U)})}var T,I,Z,R,M=!1,D=0,B=0,Y=0,X={x:D,y:B,z:Y},O={x:D,y:B,z:Y},N=1,V={start:{x:D,y:B},current:{x:D,y:B},lastMove:{x:D,y:B},shiftDown:!1},W=!0,H=!0,j=!0,U=[],q=[],K=function(){return X},G=a(this,m,{attach:function(t){if(!M)T=t,t.appendChild(I),M=!0;else throw"Cannot attach currently attached scene"},detach:function(){if(M){M=!1;var t=I,e=t.parentElement;e&&e.removeChild(I)}else throw"Cannot detach currently detached scene"},add:function(t){R.appendChild(t.getDomElement()),q.push(t),t.setParentScene(G),0!==U.length&&t.updateLightSource(U)},remove:function(t){R.removeChild(t.getDomElement()),q.splice(q.indexOf(t),1),t.removeParentScene()},getVoxels:function getVoxels(){return q},pan:o,setPan:function(t,e,r){return g("x",t),g("y",e),g("z",r),L(),G},getPan:d,rotate:function(e,r,a){return t("x",e),t("y",r),t("z",a),G},setRotation:function(t,e,a){return r("x",t),r("y",e),r("z",a),L(),G},getRotation:K,zoom:p,setZoom:function(t){return s(t)&&(N=t,L()),G},getZoom:h,addLightSource:function(t){var e=U.indexOf(t);return!(-1!==e)&&(t.on("change move",C),U.push(t),C(),!0)},getLightSources:function getLightSources(){return U},removeLightSource:function(t){var e=U.indexOf(t);return-1!==e&&(t.off("change move"),U.splice(e,1),C(),!0)},canRotate:function canRotate(){return W},canPan:function canPan(){return H},canZoom:function canZoom(){return j},enableRotate:function enableRotate(){return W=!0},enablePan:function enablePan(){return H=!0},enableZoom:function enableZoom(){return j=!0},disableRotate:function disableRotate(){return W=!1},disablePan:function disablePan(){return H=!1},disableZoom:function disableZoom(){return j=!1},isAttached:function isAttached(){return M},getRotationX:function getRotationX(){return X.x},getRotationY:function getRotationY(){return X.y},getRotationZ:function getRotationZ(){return X.z},rotateX:function rotateX(e){return t("x",e)},rotateY:function rotateY(e){return t("y",e)},rotateZ:function rotateZ(e){return t("z",e)},setRotationX:function setRotationX(t){return r("x",t)},setRotationY:function setRotationY(t){return r("y",t)},setRotationZ:function setRotationZ(t){return r("z",t)},panX:function panX(t){return f("x",t)},panY:function panY(t){return f("y",t)},panZ:function panZ(t){return f("z",t)},setPanX:function setPanX(t){return g("x",t)},setPanY:function setPanY(t){return g("y",t)},setPanZ:function setPanZ(t){return g("z",t)},getElement:function getElement(){return I},getParentElement:function getParentElement(){return T},getInteractionState:function getInteractionState(t){return t?V[t]:V},bind:function bind(){A(),E()},unbind:function unbind(){S(),P()}});(function(){I=document.createElement("div"),Z=document.createElement("div"),R=document.createElement("div"),I.setAttribute("class","voxelcss-scene"),Z.setAttribute("class","zoom"),R.setAttribute("class","camera"),I.appendChild(Z),Z.appendChild(R)})(),A(),E()}},{"./common":10,"./events":11}],8:[function(r,a){"use strict";function o(){var L=0<arguments.length&&arguments[0]!==void 0?arguments[0]:[0,0,0],C=1<arguments.length&&arguments[1]!==void 0?arguments[1]:E,T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},I=void 0,Z=void 0,R=void 0,M=void 0,D={},B=0,Y=s(k(s(this,u)),{clone:function(){return new o([Y.getPositionX(),Y.getPositionY(),Y.getPositionZ()],B,{mesh:M})},animUp:function(t){if(t)R=t,Z.setAttribute("class","animated-up"),e();else throw"Scene required to add voxel to scene"},animDown:function(t){if(t)R=t,Z.setAttribute("class","animated-down"),e();else throw"Scene required to add voxel to scene"},addToScene:function(t){if(t)R=t,Z.setAttribute("class","animated"),e();else throw"Scene required to add voxel to scene"},removeFromScene:function(){R&&R.remove(Y)},setParentScene:function(t){R=t},removeParentScene:function(){R=void 0},setDimension:r,getDimension:a,updateLightSource:function(t){var e=function(t){return f(t,3)},r=1,a=1,o=1,s=1,i=1,m=1;t.forEach(function(t){var n=[t.getPositionX(),t.getPositionY(),t.getPositionZ()],g=t.getBrightness(),p=t.getTravelDistance(),h=g[1]-g[0],b=1-g[1],v=function(t){var r=_slicedToArray(t,3),a=r[0],o=r[1],s=r[2],i=d(n,{A:a,B:o,C:s}),m=i.angle,c=i.direction,g=i.distance,v=0>c?1:l(1,e(1-m/(x/2))+f(g/p,6));return 1-(v*h+b)};a=c(0,a-v([0,0,-1])),r=c(0,r-v([0,0,1])),o=c(0,o-v([-1,0,0])),s=c(0,s-v([1,0,0])),i=c(0,i-v([0,1,0])),m=c(0,m-v([0,-1,0]))});var g={front:r,back:a,left:o,right:s,top:i,bottom:m};n(g).forEach(function(t){D[t].shader.style.opacity=g[t]})},setMesh:t,getMesh:function getMesh(){return M},getDomElement:function getDomElement(){return I},getAnimatedElement:function getAnimatedElement(){return Z}});function t(){var t=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};if(t.constructor===w){var e=M;e&&e.off("change"),M=t,M.on("change",function(){z();Y.trigger("change:mesh",{target:Y,mesh:M})}),z()}}function e(){R.add(Y)}function r(t){h(t)&&(B=t)}function a(){return B}function d(t,e){var r=R.getRotationX(),o=R.getRotationY(),s=R.getRotationZ(),n=p(r,-o,s),c=e.A,l=e.B,d=e.C,h=P(t,n);h={x:h.x-Y.getPositionX()-c*a()/2,y:h.y-Y.getPositionY()-l*a()/2,z:h.z-Y.getPositionZ()-d*a()/2};var b=h,v=b.x,x=b.y,u=b.z,k=g(f(v,2)+f(x,2)+f(u,2)),w=1===i(d)?d*u:1===i(l)?l*x:c*v,y=m(i(v*c+x*l+u*d)/k);return{angle:y,direction:w,distance:k}}function P(t,e){var r=_slicedToArray(t,3),a=r[0],o=r[1],s=r[2],n=v(e,[[a],[o],[s]]);return{x:n[0][0],y:n[1][0],z:n[2][0]}}function z(){var t=M.getFaces();S.forEach(function(e){var r=t[e],a=D[e];if(r instanceof y&&(a.src=r.getSource(),a.removeAttribute("class")),r instanceof A){var o=a.parentElement;o.style.background="#"+r.getHex(),a.setAttribute("class","colored")}})}function F(t){var e=function(t){return t+"px"},r=B/2,a=S.reduce(function(t,e){return s(t,_defineProperty({},e,function(){return Y.trigger("click:"+e,{target:Y})}))},{}),o=_("img",""),n=_("div","shader"),i=_("div","voxelcss-face "+t);D[t]=s(o,{shader:n}),s(i.style,{width:e(B),height:e(B),marginLeft:e(-1*r),marginTop:e(-1*r),transform:{top:"rotateX(90deg) translateZ("+r+"px)",bottom:"rotateX(90deg) translateZ(-"+r+"px)",left:"rotateY(90deg) translateZ(-"+r+"px)",right:"rotateY(90deg) translateZ("+r+"px)",front:"translateZ("+r+"px)",back:"translateZ(-"+r+"px)"}[t]}),i.addEventListener("click",a[t]),i.addEventListener("contextmenu",function(t){t.preventDefault();return Y.trigger("contextmenu",{target:Y}),!1}),i.appendChild(o),i.appendChild(n),Z.appendChild(i)}function _(t,e){var r=document.createElement(t);return r.setAttribute("class",e),r}Y.on("move",function(){var t=Y.getPosition(),e=t.x,r=t.y,a=t.z;I.style.transform="translate3d("+e+"px, "+-r+"px, "+a+"px)"}),r(C),function(){I=_("div","voxelcss-cube"),Z=_("div","animated"),S.forEach(function(t){return F(t)}),I.appendChild(Z)}(),Y.setPosition(L),t(b(T.mesh)?new w:T.mesh)}var s=Object.assign,n=Object.keys,i=Math.abs,m=Math.asin,c=t,l=Math.min,x=e,f=Math.pow,g=Math.sqrt,d=r("./common"),p=d.generateRotationMatrix,h=d.isNumber,b=d.isUndefined,v=d.multiplyMatrices,u=r("./events"),k=r("./positioned"),w=r("./Mesh"),y=r("./ImageFace"),A=r("./ColorFace"),E=50,S=["top","bottom","front","back","left","right"];a.exports=o},{"./ColorFace":2,"./ImageFace":4,"./Mesh":6,"./common":10,"./events":11,"./positioned":14}],9:[function(t,e){"use strict";var r=Object.assign,a=t("./Mesh"),o=t("./Voxel");e.exports=function(t,e){function s(e){return x.push(e),t.add(e)}function n(e){var r=x.indexOf(e),a=-1<r;return a&&(t.remove(e),x.splice(r,1)),a}function i(){for(;0<x.length;)n(x[0])}function m(){return JSON.stringify(x.map(function(t){return l(t)}))}function c(t){if("string"==typeof t)try{i(),JSON.parse(t).forEach(function(t){var e=t.dimension,r=t.mesh,n=t.position,i=n.x,m=n.y,c=n.z,l=new o([i,m,c],e);l.setMesh(a.loadFromSerial(r)),s(l)})}catch(t){throw"Cannot import voxel data"}else throw"Only serialized data can be imported"}function l(t){return{position:t.getPosition(),dimension:t.getDimension(),mesh:t.getMesh().serialize()}}if(t===void 0)throw"World cannot be instantiated without a Scene instance";var x=[],f=function(){return"savedWorld<"+(e||"*")+">"};r(this,{add:s,remove:n,clear:i,getScene:function getScene(){return t},getVoxels:function getVoxels(){return x},import:c,export:m,load:function load(){return c(localStorage.getItem(f())||"[]")},isSaved:function isSaved(){return!!localStorage.getItem(f())},save:function save(){return localStorage.setItem(f(),m())},deleteSave:function deleteSave(){return localStorage.setItem(f(),"")}})}},{"./Mesh":6,"./Voxel":8}],10:[function(t,e){"use strict";function r(t,e){for(var a=t.length,o=t[0].length,s=e[0].length,n=Array(a),m=0;m<a;++m){n[m]=Array(s);for(var r=0;r<s;++r){n[m][r]=0;for(var c=0;c<o;++c)n[m][r]+=t[m][c]*e[c][r]}}return n}var a=Math.cos,o=Math.sin,s=16,n=16,i=function(t){return"number"==typeof t};e.exports={findKeyWithValue:function(t,e){var r=Object.keys(t),a=r.map(function(r,a){return t[r]===e&&a}).find(i);return r[a]},generateRotationMatrix:function(t,e,s){var n=[[1,0,0],[0,a(t),-o(t)],[0,o(t),a(t)]],i=[[a(e),0,o(e)],[0,1,0],[-o(e),0,a(e)]],m=[[a(s),-o(s),0],[o(s),a(s),0],[0,0,1]];return r(r(m,i),n)},hexToRgb:function(t){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;t=t.replace(e,function(t,e,r,a){return e+e+r+r+a+a});var r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return r?{r:parseInt(r[1],s),g:parseInt(r[2],s),b:parseInt(r[3],s)}:null},isNumber:i,isShiftKey:function isShiftKey(t){return t.keyCode===n||t.which===n},isUndefined:function isUndefined(t){return t===void 0},mapValues:function(t,e){return Object.keys(t).map(function(r){return _defineProperty({},r,e(t[r]))}).reduce(function(t,e){return Object.assign(t,e)},{})},not:function(t){return function(){return!t.apply(void 0,arguments)}},multiplyMatrices:r,rgbToHex:function(t){var e=t.r,r=t.g,a=t.b;return""+(16777216+(e<<16)+(r<<8)+a).toString(16).slice(1)},constant:function constant(t){return function(){return t}},identity:function identity(t){return t}}},{}],11:[function(e,r){"use strict";function a(t,e){this.id=t._listenId,this.listener=t,this.obj=e,this.interop=!0,this.count=0,this._events=void 0}var o=Object.assign,s=/\s+/,n=0,i=function(t){return t+ ++n+""},m=function(t){var e,r=2;return function(){return 0<--r&&(e=t.apply(this,arguments)),1>=r&&(t=null),e}},c=function(t){return function(e){return null===e?void 0:e[t]}},l=function(t){var e=c("length")(t);return"number"==typeof e&&0<=e&&e<=Number.MAX_SAFE_INTEGER},x=function(t){var e="undefined"==typeof t?"undefined":_typeof(t);return"function"===e||"object"===e&&!!t},f=function(t){return!(null!==t)||(l(t)&&(Array.isArray(t)||"string"==typeof t)?0===t.length:0===Object.keys(t).length)},g=function(t,e,r,a){try{t.on(e,r,a)}catch(t){return t}},d=void 0,p=function(t,e,r,a){if(r){var o=t[e]||(t[e]=[]),s=a.context,n=a.ctx,i=a.listening;n=s||n,i&&i.count++,o.push({callback:r,context:s,ctx:n,listening:i})}return t},h=function(t,e,r,a){if(t){var o=a.context,s=a.listeners,n=void 0;return e||o||r?(n=e?[e]:Object.keys(t),n.forEach(function(e){var a=t[e];if(a){var s=[];a.forEach(function(t){if(r&&r!==t.callback&&r!==t.callback._callback||o&&o!==t.context)s.push(t);else{var a=t.listening;a&&a.off(e,r)}}),s.length?t[e]=s:delete t[e]}}),t):(n=x(s)?Object.keys(s):[],void n.forEach(function(t){return s[t].cleanup()}))}},b=function(t,e,r,a){if(r){var o=t[e]=m(function(){a(e,o),r.apply(this,arguments)});o._callback=r}return t},v=function(t,e,r,a,o){var n=r&&"object"===("undefined"==typeof r?"undefined":_typeof(r));if(n){var i=void 0!==a&&"context"in o&&void 0===o.context;i&&(o.context=a),Object.keys(r).forEach(function(a){e=v(t,e,a,r[a],o)})}else r&&s.test(r)?r.split(s).forEach(function(r){e=t(e,r,a,o)}):e=t(e,r,a,o);return e},u=function(t,e){var r,a=-1,o=t.length,s=_slicedToArray(e,3),n=s[0],i=s[1],m=s[2];switch(e.length){case 0:for(;++a<o;)(r=t[a]).callback.call(r.ctx);break;case 1:for(;++a<o;)(r=t[a]).callback.call(r.ctx,n);break;case 2:for(;++a<o;)(r=t[a]).callback.call(r.ctx,n,i);break;case 3:for(;++a<o;)(r=t[a]).callback.call(r.ctx,n,i,m);break;default:for(;++a<o;)(r=t[a]).callback.apply(r.ctx,e);}},k=function(t,e,r,a){if(t){var o=t[e],s=t.all;o&&s&&(s=s.slice()),o&&u(o,a),s&&u(s,[e].concat(a))}return t},w={on:function on(t,e,r){if(this._events=v(p,this._events||{},t,e,{context:r,ctx:this,listening:d}),d){var a=this._listeners||(this._listeners={});a[d.id]=d,d.interop=!1}return this},off:function off(t,e,r){return this._events?(this._events=v(h,this._events,t,e,{context:r,listeners:this._listeners}),this):this},once:function(t,e,r){var a=v(b,{},t,e,this.off.bind(this));return"string"==typeof t&&null===r&&(e=void 0),this.on(a,e,r)},trigger:function trigger(e){if(this._events){for(var r=t(0,arguments.length-1),a=Array(r),o=0;o<r;o++)a[o]=arguments[o+1];v(k,this._events,e,void 0,a)}return this},listenTo:function listenTo(t,e,r){if(t){var o=t._listenId||(t._listenId=i("l")),s=this._listeningTo||(this._listeningTo={}),n=d=s[o];n||(this._listenId||(this._listenId=i("l")),n=d=s[o]=new a(this,t));var m=g(t,e,r,this);if(d=void 0,m)throw m;n.interop&&n.on(e,r)}return this},listenToOnce:function listenToOnce(t,e,r){var a=v(b,{},e,r,this.stopListening.bind(this,t));return this.listenTo(t,a)},stopListening:function stopListening(t,e,r){var a=this,o=this._listeningTo;if(o){var s=t?[t._listenId]:Object.keys(o);s.forEach(function(t){var s=o[t];s&&(s.obj.off(e,r,a),s.interop&&s.off(e,r))}),f(o)&&(this._listeningTo=void 0)}return this}};o(a.prototype,{on:w.on,off:function off(t,e){var r;this.interop?(this._events=v(h,this._events,t,e,{context:void 0,listeners:void 0}),r=!this._events):(this.count--,r=0===this.count),r&&this.cleanup()},cleanup:function cleanup(){delete this.listener._listeningTo[this.obj._listenId],this.interop||delete this.obj._listeners[this.id]}}),r.exports=w},{}],12:[function(t,e){"use strict";t("../dist/voxelcss.css");var r=t("./ColorFace"),a=t("./Editor"),o=t("./ImageFace"),s=t("./LightSource"),n=t("./Mesh"),i=t("./meshes"),m=t("./Scene"),c=t("./Voxel"),l=t("./World");e.exports={ColorFace:r,Editor:a,ImageFace:o,LightSource:s,Mesh:n,meshes:i,Scene:m,Voxel:c,World:l}},{"../dist/voxelcss.css":1,"./ColorFace":2,"./Editor":3,"./ImageFace":4,"./LightSource":5,"./Mesh":6,"./Scene":7,"./Voxel":8,"./World":9,"./meshes":13}],13:[function(t,e){"use strict";var r=t("./Mesh"),a=t("./ImageFace");e.exports={dirt:new r(new a("http://voxelcss.com/res/dirt/main.png")),grass:new r({top:new a("http://voxelcss.com/res/grass/top.png"),bottom:new a("http://voxelcss.com/res/grass/bottom.png"),front:new a("http://voxelcss.com/res/grass/side.png"),back:new a("http://voxelcss.com/res/grass/side.png"),left:new a("http://voxelcss.com/res/grass/side.png"),right:new a("http://voxelcss.com/res/grass/side.png")}),water:new r(new a("http://voxelcss.com/res/water/main.png")),waterFall:new r({top:new a("http://voxelcss.com/res/water/main.png"),bottom:new a("http://voxelcss.com/res/water/main.png"),front:new a("http://voxelcss.com/res/water/fall.png"),back:new a("http://voxelcss.com/res/water/fall.png"),left:new a("http://voxelcss.com/res/water/fall.png"),right:new a("http://voxelcss.com/res/water/fall.png")}),waterFallTop:new r({top:new a("http://voxelcss.com/res/water/main.png"),bottom:new a("http://voxelcss.com/res/water/main.png"),front:new a("http://voxelcss.com/res/water/falltop.png"),back:new a("http://voxelcss.com/res/water/falltop.png"),left:new a("http://voxelcss.com/res/water/falltop.png"),right:new a("http://voxelcss.com/res/water/falltop.png")}),waterFallCrash:new r({top:new a("http://voxelcss.com/res/water/main.png"),bottom:new a("http://voxelcss.com/res/water/main.png"),front:new a("http://voxelcss.com/res/water/crash.png"),back:new a("http://voxelcss.com/res/water/crash.png"),left:new a("http://voxelcss.com/res/water/crash.png"),right:new a("http://voxelcss.com/res/water/crash.png")}),treeTrunk:new r({top:new a("http://voxelcss.com/res/tree/rings.png"),bottom:new a("http://voxelcss.com/res/tree/rings.png"),front:new a("http://voxelcss.com/res/tree/bark.png"),back:new a("http://voxelcss.com/res/tree/bark.png"),left:new a("http://voxelcss.com/res/tree/bark.png"),right:new a("http://voxelcss.com/res/tree/bark.png")}),treeLeaves:new r(new a("http://voxelcss.com/res/tree/leaves.png"))}},{"./ImageFace":4,"./Mesh":6}],14:[function(t,e){"use strict";var r=Object.assign,a=t("./common"),o=a.isNumber;e.exports=function(t){function e(t){return o(t)?void(l.x=t,f&&c.trigger("move")):l.x}function a(t){return o(t)?void(l.y=t,f&&c.trigger("move")):l.y}function s(t){return o(t)?void(l.z=t,f&&c.trigger("move")):l.z}function n(t){return o(t)?e(t+l.x):l.x}function i(t){return o(t)?a(t+l.y):l.y}function m(t){return o(t)?s(t+l.z):l.z}var c=t||new Function,l={x:0,y:0,z:0},f=!0;return r(c,{setPosition:function(t){var r=_slicedToArray(t,3),o=r[0],n=r[1],i=r[2];return f=!1,e(o),a(n),s(i),f=!0,c.trigger("move"),c},setPositionX:e,setPositionY:a,setPositionZ:s,getPosition:function(){return l},getPositionX:function(){return l.x},getPositionY:function(){return l.y},getPositionZ:function(){return l.z},translate:function(t,e,r){return f=!1,n(t),i(e),m(r),f=!0,c.trigger("move"),c},translateX:n,translateY:i,translateZ:m}),c}},{"./common":10}],15:[function(t,e){"use strict";var r=[],a=function(t,e){var a=document.head||document.getElementsByTagName("head")[0],o=r[r.length-1];if(e=e||{},e.insertAt=e.insertAt||"bottom","top"===e.insertAt)o?o.nextSibling?a.insertBefore(t,o.nextSibling):a.appendChild(t):a.insertBefore(t,a.firstChild),r.push(t);else if("bottom"===e.insertAt)a.appendChild(t);else throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.")};e.exports={createLink:function createLink(t,e){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("link");for(var o in a.href=t,a.rel="stylesheet",e)if(e.hasOwnProperty(o)){var s=e[o];a.setAttribute("data-"+o,s)}r.appendChild(a)},createStyle:function createStyle(t,e,r){r=r||{};var o=document.createElement("style");for(var s in o.type="text/css",e)if(e.hasOwnProperty(s)){var n=e[s];o.setAttribute("data-"+s,n)}o.sheet?(o.innerHTML=t,o.sheet.cssText=t,a(o,{insertAt:r.insertAt})):o.styleSheet?(a(o,{insertAt:r.insertAt}),o.styleSheet.cssText=t):(o.appendChild(document.createTextNode(t)),a(o,{insertAt:r.insertAt}))}}},{}]},{},[12])(12)});
