"use strict";var _slicedToArray=function(){function a(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{!d&&h["return"]&&h["return"]()}finally{if(e)throw f}}return c}return function(b,c){if(Array.isArray(b))return b;if(Symbol.iterator in Object(b))return a(b,c);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};(function(a){if("object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?this:self:global:window,b.voxelcss=a()}})(function(){var a=Math.PI;return function b(c,d,e){function a(h,i){if(!d[h]){if(!c[h]){var j="function"==typeof require&&require;if(!i&&j)return j(h,!0);if(g)return g(h,!0);var k=new Error("Cannot find module '"+h+"'");throw k.code="MODULE_NOT_FOUND",k}var f=d[h]={exports:{}};c[h][0].call(f.exports,function(b){var d=c[h][1][b];return a(d?d:b)},f,f.exports,b,c,d,e)}return d[h].exports}for(var g="function"==typeof require&&require,f=0;f<e.length;f++)a(e[f]);return a}({1:[function(a,b){var c=".scene {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  -webkit-perspective-origin: 50% 50%;\n  perspective-origin: 50% 50%;\n  cursor: move;\n}\n.scene .camera,\n.scene .zoom {\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  overflow: visible;\n}\n.cube,\n.scene .camera,\n.scene .zoom {\n  position: absolute;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n}\n.cube:hover img {\n  visibility: hidden!important;\n}\n.cube:hover .face {\n  background: rgba(0,0,0,.3)!important;\n}\n.cube:hover .face .shader {\n  opacity: 0!important;\n}\n.cube .anim {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n}\n.cube .anim.down {\n  -webkit-animation: b 1s linear both;\n  animation: b 1s linear both;\n}\n.cube .anim.up {\n  -webkit-animation: a 1s linear both;\n  animation: a 1s linear both;\n}\n.face {\n  display: block;\n  position: absolute;\n  outline: none;\n  border: none;\n  margin-left: -18px;\n  margin-top: -18px;\n  width: 36px;\n  height: 36px;\n  cursor: pointer;\n}\n.face img {\n  width: 100%;\n  height: 100%;\n}\n.face img.colored {\n  visibility: hidden;\n}\n.face .shader {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0;\n}\n@-webkit-keyframes a {\n  0% {\n    opacity: 0;\n    -webkit-transform: matrix(1,0,0,1,0,300);\n    transform: matrix(1,0,0,1,0,300);\n  }\n\n  1.3% {\n    -webkit-transform: matrix(1,0,0,3.905,0,237.02);\n    transform: matrix(1,0,0,3.905,0,237.02);\n  }\n\n  2.55% {\n    -webkit-transform: matrix(1,0,0,4.554,0,182.798);\n    transform: matrix(1,0,0,4.554,0,182.798);\n  }\n\n  4.1% {\n    -webkit-transform: matrix(1,0,0,4.025,0,125.912);\n    transform: matrix(1,0,0,4.025,0,125.912);\n  }\n\n  5.71% {\n    -webkit-transform: matrix(1,0,0,3.039,0,79.596);\n    transform: matrix(1,0,0,3.039,0,79.596);\n  }\n\n  8.11% {\n    opacity: 1;\n    -webkit-transform: matrix(1,0,0,1.82,0,31.647);\n    transform: matrix(1,0,0,1.82,0,31.647);\n  }\n\n  8.81% {\n    -webkit-transform: matrix(1,0,0,1.581,0,21.84);\n    transform: matrix(1,0,0,1.581,0,21.84);\n  }\n\n  11.96% {\n    -webkit-transform: matrix(1,0,0,1.034,0,-4.825);\n    transform: matrix(1,0,0,1.034,0,-4.825);\n  }\n\n  12.11% {\n    -webkit-transform: matrix(1,0,0,1.023,0,-5.53);\n    transform: matrix(1,0,0,1.023,0,-5.53);\n  }\n\n  15.07% {\n    -webkit-transform: matrix(1,0,0,.947,0,-12.662);\n    transform: matrix(1,0,0,.947,0,-12.662);\n  }\n\n  16.12% {\n    -webkit-transform: matrix(1,0,0,.951,0,-13.007);\n    transform: matrix(1,0,0,.951,0,-13.007);\n  }\n\n  27.23% {\n    -webkit-transform: matrix(1,0,0,1.001,0,-2.352);\n    transform: matrix(1,0,0,1.001,0,-2.352);\n  }\n\n  27.58% {\n    -webkit-transform: matrix(1,0,0,1.001,0,-2.121);\n    transform: matrix(1,0,0,1.001,0,-2.121);\n  }\n\n  38.34% {\n    -webkit-transform: matrix(1,0,0,1,0,.311);\n    transform: matrix(1,0,0,1,0,.311);\n  }\n\n  40.09% {\n    -webkit-transform: matrix(1,0,0,1,0,.291);\n    transform: matrix(1,0,0,1,0,.291);\n  }\n\n  50% {\n    -webkit-transform: matrix(1,0,0,1,0,.048);\n    transform: matrix(1,0,0,1,0,.048);\n  }\n\n  60.56% {\n    -webkit-transform: matrix(1,0,0,1,0,-.007);\n    transform: matrix(1,0,0,1,0,-.007);\n  }\n\n  82.78% {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n\n  to {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n}\n@keyframes a {\n  0% {\n    opacity: 0;\n    -webkit-transform: matrix(1,0,0,1,0,300);\n    transform: matrix(1,0,0,1,0,300);\n  }\n\n  1.3% {\n    -webkit-transform: matrix(1,0,0,3.905,0,237.02);\n    transform: matrix(1,0,0,3.905,0,237.02);\n  }\n\n  2.55% {\n    -webkit-transform: matrix(1,0,0,4.554,0,182.798);\n    transform: matrix(1,0,0,4.554,0,182.798);\n  }\n\n  4.1% {\n    -webkit-transform: matrix(1,0,0,4.025,0,125.912);\n    transform: matrix(1,0,0,4.025,0,125.912);\n  }\n\n  5.71% {\n    -webkit-transform: matrix(1,0,0,3.039,0,79.596);\n    transform: matrix(1,0,0,3.039,0,79.596);\n  }\n\n  8.11% {\n    opacity: 1;\n    -webkit-transform: matrix(1,0,0,1.82,0,31.647);\n    transform: matrix(1,0,0,1.82,0,31.647);\n  }\n\n  8.81% {\n    -webkit-transform: matrix(1,0,0,1.581,0,21.84);\n    transform: matrix(1,0,0,1.581,0,21.84);\n  }\n\n  11.96% {\n    -webkit-transform: matrix(1,0,0,1.034,0,-4.825);\n    transform: matrix(1,0,0,1.034,0,-4.825);\n  }\n\n  12.11% {\n    -webkit-transform: matrix(1,0,0,1.023,0,-5.53);\n    transform: matrix(1,0,0,1.023,0,-5.53);\n  }\n\n  15.07% {\n    -webkit-transform: matrix(1,0,0,.947,0,-12.662);\n    transform: matrix(1,0,0,.947,0,-12.662);\n  }\n\n  16.12% {\n    -webkit-transform: matrix(1,0,0,.951,0,-13.007);\n    transform: matrix(1,0,0,.951,0,-13.007);\n  }\n\n  27.23% {\n    -webkit-transform: matrix(1,0,0,1.001,0,-2.352);\n    transform: matrix(1,0,0,1.001,0,-2.352);\n  }\n\n  27.58% {\n    -webkit-transform: matrix(1,0,0,1.001,0,-2.121);\n    transform: matrix(1,0,0,1.001,0,-2.121);\n  }\n\n  38.34% {\n    -webkit-transform: matrix(1,0,0,1,0,.311);\n    transform: matrix(1,0,0,1,0,.311);\n  }\n\n  40.09% {\n    -webkit-transform: matrix(1,0,0,1,0,.291);\n    transform: matrix(1,0,0,1,0,.291);\n  }\n\n  50% {\n    -webkit-transform: matrix(1,0,0,1,0,.048);\n    transform: matrix(1,0,0,1,0,.048);\n  }\n\n  60.56% {\n    -webkit-transform: matrix(1,0,0,1,0,-.007);\n    transform: matrix(1,0,0,1,0,-.007);\n  }\n\n  82.78% {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n\n  to {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n}\n@-webkit-keyframes b {\n  0% {\n    opacity: 0;\n    -webkit-transform: matrix(1,0,0,1,0,-300);\n    transform: matrix(1,0,0,1,0,-300);\n  }\n\n  1.3% {\n    -webkit-transform: matrix(1,0,0,3.905,0,-237.02);\n    transform: matrix(1,0,0,3.905,0,-237.02);\n  }\n\n  2.55% {\n    -webkit-transform: matrix(1,0,0,4.554,0,-182.798);\n    transform: matrix(1,0,0,4.554,0,-182.798);\n  }\n\n  4.1% {\n    -webkit-transform: matrix(1,0,0,4.025,0,-125.912);\n    transform: matrix(1,0,0,4.025,0,-125.912);\n  }\n\n  5.71% {\n    -webkit-transform: matrix(1,0,0,3.039,0,-79.596);\n    transform: matrix(1,0,0,3.039,0,-79.596);\n  }\n\n  8.11% {\n    opacity: 1;\n    -webkit-transform: matrix(1,0,0,1.82,0,-31.647);\n    transform: matrix(1,0,0,1.82,0,-31.647);\n  }\n\n  8.81% {\n    -webkit-transform: matrix(1,0,0,1.581,0,-21.84);\n    transform: matrix(1,0,0,1.581,0,-21.84);\n  }\n\n  11.96% {\n    -webkit-transform: matrix(1,0,0,1.034,0,4.825);\n    transform: matrix(1,0,0,1.034,0,4.825);\n  }\n\n  12.11% {\n    -webkit-transform: matrix(1,0,0,1.023,0,5.53);\n    transform: matrix(1,0,0,1.023,0,5.53);\n  }\n\n  15.07% {\n    -webkit-transform: matrix(1,0,0,.947,0,12.662);\n    transform: matrix(1,0,0,.947,0,12.662);\n  }\n\n  16.12% {\n    -webkit-transform: matrix(1,0,0,.951,0,13.007);\n    transform: matrix(1,0,0,.951,0,13.007);\n  }\n\n  27.23% {\n    -webkit-transform: matrix(1,0,0,1.001,0,2.352);\n    transform: matrix(1,0,0,1.001,0,2.352);\n  }\n\n  27.58% {\n    -webkit-transform: matrix(1,0,0,1.001,0,2.121);\n    transform: matrix(1,0,0,1.001,0,2.121);\n  }\n\n  38.34% {\n    -webkit-transform: matrix(1,0,0,1,0,-.311);\n    transform: matrix(1,0,0,1,0,-.311);\n  }\n\n  40.09% {\n    -webkit-transform: matrix(1,0,0,1,0,-.291);\n    transform: matrix(1,0,0,1,0,-.291);\n  }\n\n  50% {\n    -webkit-transform: matrix(1,0,0,1,0,-.048);\n    transform: matrix(1,0,0,1,0,-.048);\n  }\n\n  60.56% {\n    -webkit-transform: matrix(1,0,0,1,0,.007);\n    transform: matrix(1,0,0,1,0,.007);\n  }\n\n  82.78% {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n\n  to {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n}\n@keyframes b {\n  0% {\n    opacity: 0;\n    -webkit-transform: matrix(1,0,0,1,0,-300);\n    transform: matrix(1,0,0,1,0,-300);\n  }\n\n  1.3% {\n    -webkit-transform: matrix(1,0,0,3.905,0,-237.02);\n    transform: matrix(1,0,0,3.905,0,-237.02);\n  }\n\n  2.55% {\n    -webkit-transform: matrix(1,0,0,4.554,0,-182.798);\n    transform: matrix(1,0,0,4.554,0,-182.798);\n  }\n\n  4.1% {\n    -webkit-transform: matrix(1,0,0,4.025,0,-125.912);\n    transform: matrix(1,0,0,4.025,0,-125.912);\n  }\n\n  5.71% {\n    -webkit-transform: matrix(1,0,0,3.039,0,-79.596);\n    transform: matrix(1,0,0,3.039,0,-79.596);\n  }\n\n  8.11% {\n    opacity: 1;\n    -webkit-transform: matrix(1,0,0,1.82,0,-31.647);\n    transform: matrix(1,0,0,1.82,0,-31.647);\n  }\n\n  8.81% {\n    -webkit-transform: matrix(1,0,0,1.581,0,-21.84);\n    transform: matrix(1,0,0,1.581,0,-21.84);\n  }\n\n  11.96% {\n    -webkit-transform: matrix(1,0,0,1.034,0,4.825);\n    transform: matrix(1,0,0,1.034,0,4.825);\n  }\n\n  12.11% {\n    -webkit-transform: matrix(1,0,0,1.023,0,5.53);\n    transform: matrix(1,0,0,1.023,0,5.53);\n  }\n\n  15.07% {\n    -webkit-transform: matrix(1,0,0,.947,0,12.662);\n    transform: matrix(1,0,0,.947,0,12.662);\n  }\n\n  16.12% {\n    -webkit-transform: matrix(1,0,0,.951,0,13.007);\n    transform: matrix(1,0,0,.951,0,13.007);\n  }\n\n  27.23% {\n    -webkit-transform: matrix(1,0,0,1.001,0,2.352);\n    transform: matrix(1,0,0,1.001,0,2.352);\n  }\n\n  27.58% {\n    -webkit-transform: matrix(1,0,0,1.001,0,2.121);\n    transform: matrix(1,0,0,1.001,0,2.121);\n  }\n\n  38.34% {\n    -webkit-transform: matrix(1,0,0,1,0,-.311);\n    transform: matrix(1,0,0,1,0,-.311);\n  }\n\n  40.09% {\n    -webkit-transform: matrix(1,0,0,1,0,-.291);\n    transform: matrix(1,0,0,1,0,-.291);\n  }\n\n  50% {\n    -webkit-transform: matrix(1,0,0,1,0,-.048);\n    transform: matrix(1,0,0,1,0,-.048);\n  }\n\n  60.56% {\n    -webkit-transform: matrix(1,0,0,1,0,.007);\n    transform: matrix(1,0,0,1,0,.007);\n  }\n\n  82.78% {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n\n  to {\n    -webkit-transform: matrix(1,0,0,1,0,0);\n    transform: matrix(1,0,0,1,0,0);\n  }\n}\n";a("browserify-css").createStyle(c,{href:"dist/voxelcss.css"},{insertAt:"bottom"}),b.exports=c},{"browserify-css":15}],2:[function(a,b){"use strict";function c(){function a(){return 1===arguments.length&&arguments[0].constructor!==Number?arguments[0].constructor===String?i(arguments[0]):h(arguments[0]):b.apply(this,arguments)}function d(){return l}function b(c,e,f,b){var a=d();return void 0!==c&&c.constructor===Number&&(l.r=c),void 0!==e&&e.constructor===Number&&(l.g=e),void 0!==f&&f.constructor===Number&&(l.b=f),void 0!==b&&b.constructor===Number&&(l.a=b),j(),a}function h(a){return void 0===a?d():b(a.r,a.g,a.b,a.a)}function i(a){return a&&a.constructor===String?(l=e(a),l.a=1,j(),d()):d()}function j(){k.triggerEvent("change",{target:k})}var k=this,l={r:0,g:0,b:0,a:1};Object.assign(k,{setColor:a,getColor:d,getHex:function getHex(){return f(l.r,l.g,l.b)},serialize:function serialize(){return JSON.stringify(l)},clone:function clone(){return new c(l)}}),function(){g(k),a.apply(this,arguments)}.apply(k,arguments)}var d=a("./common"),e=d.hexToRgb,f=d.rgbToHex,g=a("./eventListener");b.exports=c,c.loadFromSerial=function(a){var b=JSON.parse(a);return new c(b)}},{"./common":10,"./eventListener":11}],3:[function(a,b){"use strict";b.exports=function(){function a(){r=!0}function b(){p.save()}function c(a){e(a);var c=p.add(a);return r&&b(),c}function d(a){var c=p.remove(a);return c&&f(a),r&&b(),c}function e(a){a.addEventListener("VoxelClick",g),a.addEventListener("TopClick",h),a.addEventListener("BottomClick",i),a.addEventListener("FrontClick",j),a.addEventListener("BackClick",k),a.addEventListener("LeftClick",l),a.addEventListener("RightClick",m),a.addEventListener("MeshChange",function(){r&&b()})}function f(a){a.removeEventListener("VoxelClick",g),a.removeEventListener("TopClick",h),a.removeEventListener("BottomClick",i),a.removeEventListener("FrontClick",j),a.removeEventListener("BackClick",k),a.removeEventListener("LeftClick",l),a.removeEventListener("RightClick",m)}function g(a){if(s){var b=a.target;d(b)}}function h(a){if(s){var b=a.target;n(b,0,1,0)}}function i(a){if(s){var b=a.target;n(b,0,-1,0)}}function j(a){if(s){var b=a.target;n(b,0,0,1)}}function k(a){if(s){var b=a.target;n(b,0,0,-1)}}function l(a){if(s){var b=a.target;n(b,-1,0,0)}}function m(a){if(s){var b=a.target;n(b,1,0,0)}}function n(a,b,d,e){var f=a.clone(),g=f.getDimension();f.setMesh(t.mesh),f.translate(b*g,d*g,e*g),c(f)}function o(){for(var a,b=0;a=p.getVoxels()[b++];)e(a)}var p,q=this,r=!1,s=!0,t={mesh:{}};q.enable=function(){s=!0},q.disable=function(){s=!1},q.isEnabled=function(){return s},q.enableAutoSave=a,q.disableAutoSave=function(){r=!1},q.canAutoSave=function(){return r},q.save=b,q.load=function(){var a=p.load();return o(),a},q.isSaved=function(){return p.isSaved()},q.deleteSave=function(){return p.deleteSave()},q.export=function(){return p.export()},q.import=function(a){var b=p.import(a);return o(),b},q.add=c,q.remove=d,q.getWorld=function(){return p},q.setToolMesh=function(a){if(void 0===a)return t.mesh;var b=t.mesh;return t.mesh=a,b},function(b,c){if(b===void 0)throw"Editor requires World instance for initialization";p=b,c!==void 0&&!0===c.autosave&&a(),o()}.apply(q,arguments)}},{}],4:[function(a,b){"use strict";function c(){function a(a){if(!a)return f;var c=f;return f=a,b.triggerEvent("change",{target:b}),c}var b=this,f=e;b.setSource=a,b.getSource=function(){return f},b.serialize=function(){return f},b.clone=function(){return new c(f)},function(c){d(b),a(c)}.apply(b,arguments)}var d=a("./eventListener"),e="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";b.exports=c,c.loadFromSerial=function(a){return new c(a)}},{"./eventListener":11}],5:[function(a,b){"use strict";var c=a("./eventListener"),d=a("./positioned");b.exports=function(){function a(a){if(void 0===a||"number"!=typeof a)return g;var b=g;return g=a,f.triggerEvent("change",{target:f}),b}function b(a,b){var c=e();return"number"==typeof b&&(h=b),"number"==typeof a&&(i=a),f.triggerEvent("change",{target:f}),c}function e(){return[i,h]}var f=this,g=500,h=1,i=0;Object.assign(f,{setTravelDistance:a,getTravelDistance:function(){return g},setBrightness:b,getBrightness:e}),function(e,g,h,i,j,k){d(c(f)),f.setPosition(e,g,h),a(i),b(j,k)}.apply(f,arguments)}},{"./eventListener":11,"./positioned":14}],6:[function(a,b){"use strict";function c(){function a(a){if(void 0!==a&&m(a)){var b=q;return!b||b.removeEventListener("change",o),q=a,q.addEventListener("change",o),x&&p(),b}}function b(a){if(void 0!==a&&m(a)){var b=r;return!b||b.removeEventListener("change",o),r=a,r.addEventListener("change",o),x&&p(),b}}function c(a){if(void 0!==a&&m(a)){var b=s;return!b||b.removeEventListener("change",o),s=a,s.addEventListener("change",o),x&&p(),b}}function d(a){if(void 0!==a&&m(a)){var b=t;return!b||b.removeEventListener("change",o),t=a,t.addEventListener("change",o),x&&p(),b}}function g(a){if(void 0!==a&&m(a)){var b=u;return!b||b.removeEventListener("change",o),u=a,u.addEventListener("change",o),x&&p(),b}}function i(a){if(void 0!==a&&m(a)){var b=v;return!b||b.removeEventListener("change",o),v=a,v.addEventListener("change",o),x&&p(),b}}function j(e){var f=k();return void 0===e?f:(m(e)&&(e={front:e,back:e,top:e,bottom:e,left:e,right:e}),x=!1,a(e.front),b(e.back),c(e.left),d(e.right),g(e.top),i(e.bottom),p(),x=!0,f)}function k(){return{front:q,back:r,left:s,right:t,top:u,bottom:v}}function l(a){return n(a.constructor)+"("+a.serialize()+")"}function m(a){return!!n(a.constructor)}function n(a){for(var b in h){var c=h[b];if(c===a)return b}return null}function o(){p()}function p(){w.triggerEvent("change",{target:w,faces:k()})}var q,r,s,t,u,v,w=this,x=!0;Object.assign(w,{setFront:a,setBack:b,setLeft:c,setRight:d,setTop:g,setBottom:i,getFront:function(){return q},getBack:function(){return r},getLeft:function(){return s},getRight:function(){return t},getTop:function(){return u},getBottom:function(){return v},setFaces:j,getFaces:k,serialize:function(){return JSON.stringify({front:l(q),back:l(r),left:l(s),right:l(t),top:l(u),bottom:l(v)})}}),function(a){e(w),j(new f),j(a)}.apply(w,arguments)}function d(a){var b=a.indexOf("("),c=a.slice(0,b),d=a.slice(b+1,-1);return h[c].loadFromSerial(d)}var e=a("./eventListener"),f=a("./ImageFace"),g=a("./ColorFace"),h={image:f,color:g};b.exports=c,c.loadFromSerial=function(a){var b=JSON.parse(a),e=b.front,f=b.back,g=b.left,h=b.right,i=b.top,j=b.bottom;return new c({front:d(e),back:d(f),left:d(g),right:d(h),top:d(i),bottom:d(j)})}},{"./ColorFace":2,"./ImageFace":4,"./eventListener":11}],7:[function(b,c){"use strict";var d=b("./eventListener"),e=16;c.exports=function(){function b(a){if(void 0===a||"number"!=typeof a)return T.x;var b=T.x;return T.x+=a,I(),b}function c(a){if(void 0===a||"number"!=typeof a)return T.y;var b=T.y;return T.y+=a,I(),b}function f(a){if(void 0===a||"number"!=typeof a)return T.z;var b=T.z;return T.z+=a,I(),b}function g(a){if(void 0===a||"number"!=typeof a)return T.x;var b=T.x;return T.x=a,I(),b}function h(a){if(void 0===a||"number"!=typeof a)return T.y;var b=T.y;return T.y=a,I(),b}function i(a){if(void 0===a||"number"!=typeof a)return T.z;var b=T.z;return T.z=a,I(),b}function j(){return{x:k(),y:l(),z:m()}}function k(){return T.x}function l(){return T.y}function m(){return T.z}function n(a,b,c){return{x:o(a),y:p(b),z:q(c)}}function o(a){if(void 0===a||"number"!=typeof a)return U.x;var b=U.x;return U.x+=a,I(),b}function p(a){if(void 0===a||"number"!=typeof a)return U.y;var b=U.y;return U.y+=a,I(),b}function q(a){if(void 0===a||"number"!=typeof a)return U.z;var b=U.z;return U.z+=a,I(),b}function r(a){if(void 0===a||"number"!=typeof a)return U.x;var b=U.x;return U.x=a,I(),b}function s(a){if(void 0===a||"number"!=typeof a)return U.y;var b=U.y;return U.y=a,I(),b}function t(a){if(void 0===a||"number"!=typeof a)return U.z;var b=U.z;return U.z=a,I(),b}function u(){return{x:U.x,y:U.y,z:U.z}}function v(){return V}function w(){L=document.createElement("div"),L.setAttribute("class","scene"),M=document.createElement("div"),M.setAttribute("class","zoom"),N=document.createElement("div"),N.setAttribute("class","camera"),L.appendChild(M),M.appendChild(N)}function A(){L.addEventListener("mousedown",B),L.addEventListener("mousewheel",E),L.addEventListener("wheel",E)}function B(a){W.start.x=a.x||a.clientX,W.start.y=a.y||a.clientY,W.current.x=a.x||a.clientX,W.current.y=a.y||a.clientY,window.addEventListener("mousemove",D),window.addEventListener("mouseup",C)}function C(){window.removeEventListener("mousemove",D),window.removeEventListener("mouseup",C)}function D(b){if(W.lastMove.dx=(b.x||b.clientX)-W.current.x,W.lastMove.dy=(b.y||b.clientY)-W.current.y,W.current.x=b.x||b.clientX,W.current.y=b.y||b.clientY,Y&&W.shiftDown)n(W.lastMove.dx,W.lastMove.dy),I(),O.triggerEvent("pan",{rotation:j(),pan:u(),zoom:v(),target:O});else if(X){var c=2*a*2;T.y+=W.lastMove.dx/window.innerWidth*c,T.x-=W.lastMove.dy/window.innerHeight*c,I(),O.triggerEvent("orbit",{rotation:j(),pan:u(),zoom:v(),target:O})}}function E(a){if(Z){return V+=a.deltaY/50,I(),a.preventDefault(),O.triggerEvent("zoom",{rotation:j(),pan:u(),zoom:v(),target:O}),!1}}function F(){window.addEventListener("keydown",G),window.addEventListener("keyup",H)}function G(a){W.shiftDown=a.keyCode===e||a.which===e}function H(a){W.shiftDown=a.keyCode!==e&&a.which!==e}function I(){N.style.transform="rotateX("+T.x+"rad) rotateY("+T.y+"rad) rotateZ("+T.z+"rad)",M.style.transform="scale("+V+", "+V+")",M.style.transform+=" translateX("+U.x+"px) translateY("+U.y+"px) translateZ("+U.z+"px)",J()}function J(){if(0!==$.length)for(var a,b=0;a=_[b++];)a.updateLightSource($)}var K,L,M,N,O=this,P=!1,Q=0,R=0,S=0,T={x:Q,y:R,z:S},U={x:Q,y:R,z:S},V=1,W={start:{x:Q,y:R},current:{x:Q,y:R},lastMove:{x:Q,y:R},shiftDown:!1},X=!0,Y=!0,Z=!0,$=[],_=[];O.rotate=function(a,d,e){return{x:b(a),y:c(d),z:f(e)}},O.rotateX=b,O.rotateY=c,O.rotateZ=f,O.pan=n,O.panX=o,O.panY=p,O.panZ=q,O.setPan=function(a,b,c){var d={x:r(a),y:s(b),z:t(c)};return I(),d},O.setPanX=r,O.setPanY=s,O.setPanZ=t,O.getPan=u,O.zoom=function(a){if(void 0===a||"number"!=typeof a)return V;var b=V;return V+=a,I(),b},O.setZoom=function(a){return void 0===a||"number"!=typeof a?V:(V=a,I(),V)},O.getZoom=v,O.attach=function(a){if(P)throw"Cannot attach currently attached scene";K=a,a.appendChild(L),P=!0},O.detach=function(){if(!P)throw"Cannot detach currently detached scene";P=!1,L.parentElement.removeChild(L)},O.isAttached=function(){return P},O.getParentElement=function(){return K},O.enableOrbit=function(){X||(X=!0)},O.disableOrbit=function(){X&&(X=!1)},O.canOrbit=function(){return X},O.enablePan=function(){Y||(Y=!0)},O.disablePan=function(){Y&&(Y=!1)},O.canPan=function(){return Y},O.enableZoom=function(){Z||(Z=!0)},O.disableZoom=function(){Z&&(Z=!1)},O.canZoom=function(){return Z},O.add=function(a){N.appendChild(a.getDomElement()),_.push(a),a.setParentScene(O),0!==$.length&&a.updateLightSource($)},O.remove=function(a){N.removeChild(a.getDomElement()),_.splice(_.indexOf(a),1),a.removeParentScene()},Object.assign(O,{getVoxels:function(){return _.concat([])},setRotation:function(a,b,c){var d={x:g(a),y:h(b),z:i(c)};return I(),d},setRotationX:g,setRotationY:h,setRotationZ:i,getRotation:j,getRotationX:k,getRotationY:l,getRotationZ:m,addLightSource:function(a){var b=$.indexOf(a);return!(-1!==b)&&(a.addEventListener("change",J),a.addEventListener("move",J),$.push(a),J(),!0)},getLightSources:function(){return $},removeLightSource:function(a){var b=$.indexOf(a);return-1!==b&&(a.removeEventListener("change",J),a.removeEventListener("move",J),$.splice(b,1),J(),!0)}}),function(){d(O),w(),A(),F()}.apply(O,arguments)}},{"./eventListener":11}],8:[function(b,c){"use strict";function d(){function a(a){if(void 0!==a&&a.constructor===s){var b=F;return!b||b.removeEventListener("change",B),F=a,F.addEventListener("change",B),v(),b}}function b(a){if(void 0===a||"number"!=typeof a)return J;var b=J;return J=a,b}function c(a,b,c,d){var e=p(G.getRotationX(),-G.getRotationY(),G.getRotationZ()),f=n({x:a,y:b,z:c},e);f={x:f.x-H.getPositionX()-d.A*H.getDimension()/2,y:f.y-H.getPositionY()-d.B*H.getDimension()/2,z:f.z-H.getPositionZ()-d.C*H.getDimension()/2};var i=m(l(f.x,2)+l(f.y,2)+l(f.z,2)),j=1===g(d.C)?d.C*f.z:1===g(d.B)?d.B*f.y:d.A*f.x,k=h(g(f.x*d.A+f.y*d.B+f.z*d.C)/i);return{angle:k,direction:j,distance:i}}function n(a,b){var c=[[a.x],[a.y],[a.z]],d=o(b,c);return{x:d[0][0],y:d[1][0],z:d[2][0]}}function v(){var a=F.getFaces();for(var b in I){var c=a[b];if(c instanceof t)I[b].src=c.getSource(),I[b].removeAttribute("class");else if(c instanceof u){var d=I[b].parentElement;d.style.background="#"+c.getHex(),I[b].setAttribute("class","colored")}}}function w(){D=y("div","cube"),E=y("div","anim"),x("top"),x("bottom"),x("front"),x("back"),x("left"),x("right"),D.appendChild(E)}function x(a){var b=function(a){return a+"px"},c=J/2,d=H,f=y("img",""),g=y("div","shader"),h=y("div","face "+a);I[a]=e(f,{shader:g}),e(h.style,{width:b(J),height:b(J),marginLeft:b(-1*c),marginTop:b(-1*c),transform:{top:"rotateX(90deg) translateZ("+c+"px)",bottom:"rotateX(90deg) translateZ(-"+c+"px)",left:"rotateY(90deg) translateZ(-"+c+"px)",right:"rotateY(90deg) translateZ("+c+"px)",front:"translateZ("+c+"px)",back:"translateZ(-"+c+"px)"}[a]}),h.addEventListener("click",{top:function top(){return H.triggerEvent("TopClick",{target:d})},bottom:function bottom(){return H.triggerEvent("BottomClick",{target:d})},left:function left(){return H.triggerEvent("LeftClick",{target:d})},right:function right(){return H.triggerEvent("RightClick",{target:d})},front:function front(){return H.triggerEvent("FrontClick",{target:d})},back:function back(){return H.triggerEvent("BackClick",{target:d})}}[a]),h.addEventListener("contextmenu",C),h.appendChild(f),h.appendChild(g),E.appendChild(h)}function y(a,b){var c=document.createElement(a);return c.setAttribute("class",b),c}function A(){var a=H.getPosition();D.style.transform="translate3d("+a.x+"px, "+-a.y+"px, "+a.z+"px)"}function z(){G.add(H)}function B(){v(),H.triggerEvent("MeshChange",{target:H,mesh:F})}function C(a){return a.preventDefault(),H.triggerEvent("VoxelClick",{target:H}),!1}var D,E,F,G,H=this,I={},J=0;e(H,{setMesh:a,getMesh:function(){return F},animUp:function(a){if(a===void 0)throw"Scene required to add voxel to scene";G=a,E.setAttribute("class","anim up"),z()},animDown:function(a){if(a===void 0)throw"Scene required to add voxel to scene";G=a,E.setAttribute("class","anim down"),z()},addToScene:function(a){if(a===void 0)throw"Scene required to add voxel to scene";G=a,E.setAttribute("class","anim"),z()},removeFromScene:function(){void 0===G||G.remove(H)},setParentScene:function(a){G=a},removeParentScene:function(){G=void 0},setDimension:b,getDimension:function(){return J},getDomElement:function(){return D},updateLightSource:function(a){var b=function(a){return l(a,3)},d=1,e=1,g=1,h=1,m=1,n=1;a.forEach(function(a){var f=[a.getPositionX(),a.getPositionY(),a.getPositionZ()],o=a.getBrightness(),p=a.getTravelDistance(),q=o[1]-o[0],r=1-o[1],s=function(a){var d=_slicedToArray(a,3),e=d[0],g=d[1],h=d[2],i=c.apply(void 0,f.concat([{A:e,B:g,C:h}])),m=i.angle,n=i.direction,o=i.distance,s=0>n?1:j(1,b(1-m/(k/2))+l(o/p,6));return 1-(s*q+r)};e=i(0,e-s([0,0,-1])),d=i(0,d-s([0,0,1])),g=i(0,g-s([-1,0,0])),h=i(0,h-s([1,0,0])),m=i(0,m-s([0,1,0])),n=i(0,n-s([0,-1,0]))});var o={front:d,back:e,left:g,right:h,top:m,bottom:n};f(o).forEach(function(a){I[a].shader.style.opacity=o[a]})},clone:function(){return new d(H.getPositionX(),H.getPositionY(),H.getPositionZ(),J,{mesh:F})}}),function(c,d,e,f,g){r(q(H)),H.addEventListener("move",A),b(f),w(),H.setPosition(c,d,e),a(new s),g!==void 0&&g.mesh!==void 0&&a(g.mesh)}.apply(H,arguments)}var e=Object.assign,f=Object.keys,g=Math.abs,h=Math.asin,i=Math.max,j=Math.min,k=a,l=Math.pow,m=Math.sqrt,n=b("./common"),o=n.multiplyMatrices,p=n.generateRotationMatrix,q=b("./eventListener"),r=b("./positioned"),s=b("./Mesh"),t=b("./ImageFace"),u=b("./ColorFace");c.exports=d},{"./ColorFace":2,"./ImageFace":4,"./Mesh":6,"./common":10,"./eventListener":11,"./positioned":14}],9:[function(a,b){"use strict";var c=a("./Mesh"),d=a("./Voxel");b.exports=function(){function a(a){return l.push(a),i.add(a)}function b(a){var b=l.indexOf(a);return!(0>b)&&(i.remove(a),l.splice(b,1),!0)}function e(){for(var a,b=[],c=0;a=l[c++];)b.push({position:a.getPosition(),dimension:a.getDimension(),mesh:a.getMesh().serialize()});return JSON.stringify(b)}function f(b){g();for(var e,f,h=JSON.parse(b+""),j=0;e=h[j++];)f=new d(e.position.x,e.position.y,e.position.z,e.dimension),f.setMesh(c.loadFromSerial(e.mesh)),a(f)}function g(){for(;0<l.length;)b(l[0])}function h(){return"savedWorld<"+k+">"}var i,j=this,k="*",l=[];j.add=a,j.remove=b,j.export=e,j.import=f,j.save=function(){localStorage.setItem(h(),e())},j.load=function(){f(localStorage.getItem(h())||"[]")},j.isSaved=function(){return!!localStorage.getItem(h())},j.deleteSave=function(){localStorage.setItem(h(),"")},j.getScene=function(){return i},j.getVoxels=function(){return l.concat([])},function(a,b){if(a===void 0)throw"World cannot be instantiated without a Scene instance";i=a,b!==void 0&&(k=b)}.apply(j,arguments)}},{"./Mesh":6,"./Voxel":8}],10:[function(a,b){"use strict";function c(d,a){for(var b=d.length,e=d[0].length,f=a[0].length,g=Array(b),h=0;h<b;++h){g[h]=Array(f);for(var j=0;j<f;++j){g[h][j]=0;for(var c=0;c<e;++c)g[h][j]+=d[h][c]*a[c][j]}}return g}var d=Math.cos,e=Math.sin,f=16;b.exports={hexToRgb:function(a){var b=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;a=a.replace(b,function(a,c,d,e){return c+c+d+d+e+e});var c=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);return c?{r:parseInt(c[1],f),g:parseInt(c[2],f),b:parseInt(c[3],f)}:null},rgbToHex:function(a,c,d){return""+(16777216+(a<<16)+(c<<8)+d).toString(16).slice(1)},generateRotationMatrix:function(a,b,f){var g=[[1,0,0],[0,d(a),-e(a)],[0,e(a),d(a)]],h=[[d(b),0,e(b)],[0,1,0],[-e(b),0,d(b)]],i=[[d(f),-e(f),0],[e(f),d(f),0],[0,0,1]];return c(c(i,h),g)},multiplyMatrices:c}},{}],11:[function(a,b){"use strict";b.exports=function(a){var b=a||new Function,c={};return b.addEventListener=function(a,b){(a="on"+a,"function"==typeof b)&&(c[a]||(c[a]=[]),-1<c[a].indexOf(b)||c[a].push(b))},b.removeEventListener=function(a,b){a="on"+a,c[a]&&c[a].splice(c[a].indexOf(b),1)},b.triggerEvent=function(a,b){a="on"+a;var d=c[a];if(d)for(var e,f=0;e=d[f++];)e(b)},b}},{}],12:[function(a,b){"use strict";a("../dist/voxelcss.css");var c=a("./ColorFace"),d=a("./Editor"),e=a("./eventListener"),f=a("./ImageFace"),g=a("./LightSource"),h=a("./Mesh"),i=a("./meshes"),j=a("./positioned"),k=a("./Scene"),l=a("./Voxel"),m=a("./World");b.exports={ColorFace:c,Editor:d,eventListener:e,ImageFace:f,LightSource:g,Mesh:h,meshes:i,Positioned:j,Scene:k,Voxel:l,World:m}},{"../dist/voxelcss.css":1,"./ColorFace":2,"./Editor":3,"./ImageFace":4,"./LightSource":5,"./Mesh":6,"./Scene":7,"./Voxel":8,"./World":9,"./eventListener":11,"./meshes":13,"./positioned":14}],13:[function(a,b){"use strict";var c=a("./Mesh"),d=a("./ImageFace");b.exports={dirt:new c(new d("http://voxelcss.com/res/dirt/main.png")),grass:new c({top:new d("http://voxelcss.com/res/grass/top.png"),bottom:new d("http://voxelcss.com/res/grass/bottom.png"),front:new d("http://voxelcss.com/res/grass/side.png"),back:new d("http://voxelcss.com/res/grass/side.png"),left:new d("http://voxelcss.com/res/grass/side.png"),right:new d("http://voxelcss.com/res/grass/side.png")}),water:new c(new d("http://voxelcss.com/res/water/main.png")),waterFall:new c({top:new d("http://voxelcss.com/res/water/main.png"),bottom:new d("http://voxelcss.com/res/water/main.png"),front:new d("http://voxelcss.com/res/water/fall.png"),back:new d("http://voxelcss.com/res/water/fall.png"),left:new d("http://voxelcss.com/res/water/fall.png"),right:new d("http://voxelcss.com/res/water/fall.png")}),waterFallTop:new c({top:new d("http://voxelcss.com/res/water/main.png"),bottom:new d("http://voxelcss.com/res/water/main.png"),front:new d("http://voxelcss.com/res/water/falltop.png"),back:new d("http://voxelcss.com/res/water/falltop.png"),left:new d("http://voxelcss.com/res/water/falltop.png"),right:new d("http://voxelcss.com/res/water/falltop.png")}),waterFallCrash:new c({top:new d("http://voxelcss.com/res/water/main.png"),bottom:new d("http://voxelcss.com/res/water/main.png"),front:new d("http://voxelcss.com/res/water/crash.png"),back:new d("http://voxelcss.com/res/water/crash.png"),left:new d("http://voxelcss.com/res/water/crash.png"),right:new d("http://voxelcss.com/res/water/crash.png")}),treeTrunk:new c({top:new d("http://voxelcss.com/res/tree/rings.png"),bottom:new d("http://voxelcss.com/res/tree/rings.png"),front:new d("http://voxelcss.com/res/tree/bark.png"),back:new d("http://voxelcss.com/res/tree/bark.png"),left:new d("http://voxelcss.com/res/tree/bark.png"),right:new d("http://voxelcss.com/res/tree/bark.png")}),treeLeaves:new c(new d("http://voxelcss.com/res/tree/leaves.png"))}},{"./ImageFace":4,"./Mesh":6}],14:[function(a,b){"use strict";b.exports=function(a){function b(a){if(void 0===a||"number"!=typeof a)return i.x;var b=i.x;return i.x=a,j&&h.triggerEvent("move"),b}function c(a){if(void 0===a||"number"!=typeof a)return i.y;var b=i.y;return i.y=a,j&&h.triggerEvent("move"),b}function d(a){if(void 0===a||"number"!=typeof a)return i.z;var b=i.z;return i.z=a,j&&h.triggerEvent("move"),b}function e(a){return void 0===a||"number"!=typeof a?i.x:b(a+i.x)}function f(a){return void 0===a||"number"!=typeof a?i.y:c(a+i.y)}function g(a){return void 0===a||"number"!=typeof a?i.z:d(a+i.z)}var h=a||new Function,i={x:0,y:0,z:0},j=!0;return Object.assign(h,{setPosition:function(a,e,f){j=!1;var g={x:b(a),y:c(e),z:d(f)};return j=!0,h.triggerEvent("move"),g},setPositionX:b,setPositionY:c,setPositionZ:d,getPosition:function(){return{x:i.x,y:i.y,z:i.z}},getPositionX:function(){return i.x},getPositionY:function(){return i.y},getPositionZ:function(){return i.z},translate:function(a,b,c){j=!1;var d={x:e(a),y:f(b),z:g(c)};return j=!0,h.triggerEvent("move"),d},translateX:e,translateY:f,translateZ:g}),h}},{}],15:[function(a,b){"use strict";var c=[],d=function(a,b){var d=document.head||document.getElementsByTagName("head")[0],e=c[c.length-1];if(b=b||{},b.insertAt=b.insertAt||"bottom","top"===b.insertAt)e?e.nextSibling?d.insertBefore(a,e.nextSibling):d.appendChild(a):d.insertBefore(a,d.firstChild),c.push(a);else if("bottom"===b.insertAt)d.appendChild(a);else throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.")};b.exports={createLink:function createLink(a,b){var c=document.head||document.getElementsByTagName("head")[0],d=document.createElement("link");for(var e in d.href=a,d.rel="stylesheet",b)if(b.hasOwnProperty(e)){var f=b[e];d.setAttribute("data-"+e,f)}c.appendChild(d)},createStyle:function createStyle(a,b,c){c=c||{};var e=document.createElement("style");for(var f in e.type="text/css",b)if(b.hasOwnProperty(f)){var g=b[f];e.setAttribute("data-"+f,g)}e.sheet?(e.innerHTML=a,e.sheet.cssText=a,d(e,{insertAt:c.insertAt})):e.styleSheet?(d(e,{insertAt:c.insertAt}),e.styleSheet.cssText=a):(e.appendChild(document.createTextNode(a)),d(e,{insertAt:c.insertAt}))}}},{}]},{},[12])(12)});
