"use strict";var precacheConfig=[["./cn.html","572b47db468685faaf4e4e3303ffab5a"],["./index.html","8e3041d9fe9fad661f1fce2fe1bb4490"],["./static/css/cn.fb9dfd08.css","956b8f005795c2569d823cddbc15d24c"],["./static/css/index.fb9dfd08.css","414d16d757eb45e170251798229d649f"],["./static/js/0.e188c2b9.chunk.js","99b9de3d094e889d770188bc750ce033"],["./static/js/1.c2f38371.chunk.js","8f2eb049de8e98d53979270834d56865"],["./static/js/10.1391c26b.chunk.js","a35ee0d4366392c76ba7d6be3e3bfb1a"],["./static/js/11.38ff3b1b.chunk.js","3c4f15e5688c08a90e20afcc56b94b26"],["./static/js/12.4233b2a2.chunk.js","33e4451b9891f51112d25be90e1a636f"],["./static/js/13.68d709fd.chunk.js","63f8e9359c30f7102ac34e31a84df147"],["./static/js/14.7bf0869f.chunk.js","3e9527525e028de4a089bd4d69b40608"],["./static/js/15.659d6674.chunk.js","f5ba5c031dacf1ab3e69ed6c4d1d3ece"],["./static/js/16.01976d1e.chunk.js","0afac8e1cb8dc5b2520ee49d6e6af036"],["./static/js/17.b7dc499e.chunk.js","4cd6b4eaf321b0897d3faf812e29689a"],["./static/js/18.b0ebd3fc.chunk.js","b2a96f2e5903d02a0d1c66f2c8f7adf5"],["./static/js/19.bb4b6010.chunk.js","e60fa948cbf1da0e57095582315380b6"],["./static/js/2.b49c7338.chunk.js","9ecf5daf817c166fa1f90d970840ed3e"],["./static/js/20.0cf55312.chunk.js","90871f4d2264ae0fde7eaee3c2b0e773"],["./static/js/3.df2dd208.chunk.js","8b65af8a9d3efbe5425ed6b87b92773c"],["./static/js/4.63b41871.chunk.js","d326332805b9f5d64874a2b6ec241a3e"],["./static/js/5.f5d7afbb.chunk.js","f12c6c5c71d87696007a8639248b8f20"],["./static/js/6.f2dce616.chunk.js","a0938d5c861afabc033e1ec8618c7977"],["./static/js/7.76f313f2.chunk.js","d94a3aee2202649ddaeea2170131f2c8"],["./static/js/8.6eb3e8e2.chunk.js","2e515cfff4a40ae9a2f89097d018e135"],["./static/js/9.bd7d4954.chunk.js","78caf75ef0aa96f11f41ff27a36cc709"],["./static/js/cn.096a64b7.js","c0f49a338ca58dbb4626ffe5bdbe543c"],["./static/js/index.cf168468.js","40e3ab4323453275cf8a0b4208375bf4"],["./static/media/omi-logo2019.923166c3.svg","923166c362dce831a15c447b19a622f9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return c.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!c.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,c=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,a),e=urlsToCacheKeys.has(c));var n="./index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(c=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(c)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});