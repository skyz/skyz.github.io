"use strict";var precacheConfig=[["/assets/css/main.71e92371.css","71e92371c3edad089c35177cb09289a1"],["/assets/media/Expertise_zeminsiz.477eb799.png","477eb799285bf2a3ec481c9085e337d0"],["/assets/media/bannerBackground.251defc5.png","251defc5396bd238255b09ee68689fba"],["/assets/media/cardImage.3c223bf2.jpg","3c223bf274425ede6524260a8198ba29"],["/assets/media/cardImage2.240bf5dc.png","240bf5dc81cc92d0b63597e6772147a7"],["/assets/media/cardImage3.c68608a9.png","c68608a9f607c42e465fa6bfc3fad600"],["/assets/media/cardImage4.e68ce33d.png","e68ce33dbdd653b881903743303fb7bd"],["/assets/media/contact_banner.17f4342a.png","17f4342aa590c4da7b68356ee846d390"],["/assets/media/creer_zeminsiz.e5a82e81.png","e5a82e81925b69d684504dc297e28f00"],["/assets/media/doubleBgSmall.7af2f630.png","7af2f6300e6c20166384e30ab6970104"],["/assets/media/gp.0023e6f5.pdf","0023e6f5c9bbbffc332383f10a56c454"],["/assets/media/homepage_zeminsiz.35adb38c.png","35adb38c92b297784081bf970c5ba178"],["/assets/media/kvkk_a.c0128168.pdf","c01281686e40dd4ce755b12e14289f49"],["/assets/media/kvkk_b.f0acb7f3.pdf","f0acb7f36ded88c09bafb2b7ca893b83"],["/assets/media/sekomiletisim.dfa2a297.png","dfa2a297e9160f611693db8aa92a07d1"],["/assets/media/skyz colorful.af9cec72.png","af9cec7243b6201237c25f2fd4f1189a"],["/assets/media/soitronsibergüvenlik.3c720e35.png","3c720e35f9f5a75b0fd178498d503752"],["/assets/media/techCard1.63e3ef54.png","63e3ef54e2a97efb8e3ec0072a59a6f0"],["/assets/media/techCard2.cc5976c2.png","cc5976c2e9a2811b570b8bf63f589212"],["/assets/media/techCard3.9f9ac7fc.png","9f9ac7fc5762585593479db38e72998a"],["/assets/media/technology_zeminsiz2.03f794ae.png","03f794ae139914ffcbca579021638724"],["/index.html","aff62be80b9d58329364cf11a7c1c78f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var s=new URL(e);return n&&s.pathname.match(n)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),s=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var s="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(s,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});