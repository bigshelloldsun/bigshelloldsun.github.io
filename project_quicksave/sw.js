try{self["workbox:core:7.0.0"]&&_()}catch{}const I=(o,...e)=>{let t=o;return e.length>0&&(t+=` :: ${JSON.stringify(e)}`),t},A=I;class f extends Error{constructor(e,t){const s=A(e,t);super(s),this.name=e,this.details=t}}const p={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:typeof registration<"u"?registration.scope:""},x=o=>[p.prefix,o,p.suffix].filter(e=>e&&e.length>0).join("-"),M=o=>{for(const e of Object.keys(p))o(e)},U={updateDetails:o=>{M(e=>{typeof o[e]=="string"&&(p[e]=o[e])})},getGoogleAnalyticsName:o=>o||x(p.googleAnalytics),getPrecacheName:o=>o||x(p.precache),getPrefix:()=>p.prefix,getRuntimeName:o=>o||x(p.runtime),getSuffix:()=>p.suffix};function K(o,e){const t=e();return o.waitUntil(t),t}try{self["workbox:precaching:7.0.0"]&&_()}catch{}const W="__WB_REVISION__";function H(o){if(!o)throw new f("add-to-cache-list-unexpected-type",{entry:o});if(typeof o=="string"){const n=new URL(o,location.href);return{cacheKey:n.href,url:n.href}}const{revision:e,url:t}=o;if(!t)throw new f("add-to-cache-list-unexpected-type",{entry:o});if(!e){const n=new URL(t,location.href);return{cacheKey:n.href,url:n.href}}const s=new URL(t,location.href),r=new URL(t,location.href);return s.searchParams.set(W,e),{cacheKey:s.href,url:r.href}}class F{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if(e.type==="install"&&t&&t.originalRequest&&t.originalRequest instanceof Request){const r=t.originalRequest.url;s?this.notUpdatedURLs.push(r):this.updatedURLs.push(r)}return s}}}class B{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:t,params:s})=>{const r=s?.cacheKey||this._precacheController.getCacheKeyForURL(t.url);return r?new Request(r,{headers:t.headers}):t},this._precacheController=e}}let R;function $(){if(R===void 0){const o=new Response("");if("body"in o)try{new Response(o.body),R=!0}catch{R=!1}R=!1}return R}async function V(o,e){let t=null;if(o.url&&(t=new URL(o.url).origin),t!==self.location.origin)throw new f("cross-origin-copy-response",{origin:t});const s=o.clone(),n={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},a=$()?s.body:await s.blob();return new Response(a,n)}const G=o=>new URL(String(o),location.href).href.replace(new RegExp(`^${location.origin}`),"");function j(o,e){const t=new URL(o);for(const s of e)t.searchParams.delete(s);return t.href}async function z(o,e,t,s){const r=j(e.url,t);if(e.url===r)return o.match(e,s);const n=Object.assign(Object.assign({},s),{ignoreSearch:!0}),a=await o.keys(e,n);for(const c of a){const i=j(c.url,t);if(r===i)return o.match(c,s)}}class Q{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}const J=new Set;async function X(){for(const o of J)await o()}function Y(o){return new Promise(e=>setTimeout(e,o))}try{self["workbox:strategies:7.0.0"]&&_()}catch{}function L(o){return typeof o=="string"?new Request(o):o}class Z{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new Q,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const s of this._plugins)this._pluginStateMap.set(s,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let s=L(e);if(s.mode==="navigate"&&t instanceof FetchEvent&&t.preloadResponse){const a=await t.preloadResponse;if(a)return a}const r=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const a of this.iterateCallbacks("requestWillFetch"))s=await a({request:s.clone(),event:t})}catch(a){if(a instanceof Error)throw new f("plugin-error-request-will-fetch",{thrownErrorMessage:a.message})}const n=s.clone();try{let a;a=await fetch(s,s.mode==="navigate"?void 0:this._strategy.fetchOptions);for(const c of this.iterateCallbacks("fetchDidSucceed"))a=await c({event:t,request:n,response:a});return a}catch(a){throw r&&await this.runCallbacks("fetchDidFail",{error:a,event:t,originalRequest:r.clone(),request:n.clone()}),a}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=L(e);let s;const{cacheName:r,matchOptions:n}=this._strategy,a=await this.getCacheKey(t,"read"),c=Object.assign(Object.assign({},n),{cacheName:r});s=await caches.match(a,c);for(const i of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await i({cacheName:r,matchOptions:n,cachedResponse:s,request:a,event:this.event})||void 0;return s}async cachePut(e,t){const s=L(e);await Y(0);const r=await this.getCacheKey(s,"write");if(!t)throw new f("cache-put-with-no-response",{url:G(r.url)});const n=await this._ensureResponseSafeToCache(t);if(!n)return!1;const{cacheName:a,matchOptions:c}=this._strategy,i=await self.caches.open(a),l=this.hasCallback("cacheDidUpdate"),u=l?await z(i,r.clone(),["__WB_REVISION__"],c):null;try{await i.put(r,l?n.clone():n)}catch(h){if(h instanceof Error)throw h.name==="QuotaExceededError"&&await X(),h}for(const h of this.iterateCallbacks("cacheDidUpdate"))await h({cacheName:a,oldResponse:u,newResponse:n.clone(),request:r,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let r=e;for(const n of this.iterateCallbacks("cacheKeyWillBeUsed"))r=L(await n({mode:t,request:r,event:this.event,params:this.params}));this._cacheKeys[s]=r}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if(typeof t[e]=="function"){const s=this._pluginStateMap.get(t);yield n=>{const a=Object.assign(Object.assign({},n),{state:s});return t[e](a)}}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const r of this.iterateCallbacks("cacheWillUpdate"))if(t=await r({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&t.status!==200&&(t=void 0),t}}class ee{constructor(e={}){this.cacheName=U.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s=typeof e.request=="string"?new Request(e.request):e.request,r="params"in e?e.params:void 0,n=new Z(this,{event:t,request:s,params:r}),a=this._getResponse(n,s,t),c=this._awaitComplete(a,n,s,t);return[a,c]}async _getResponse(e,t,s){await e.runCallbacks("handlerWillStart",{event:s,request:t});let r;try{if(r=await this._handle(t,e),!r||r.type==="error")throw new f("no-response",{url:t.url})}catch(n){if(n instanceof Error){for(const a of e.iterateCallbacks("handlerDidError"))if(r=await a({error:n,event:s,request:t}),r)break}if(!r)throw n}for(const n of e.iterateCallbacks("handlerWillRespond"))r=await n({event:s,request:t,response:r});return r}async _awaitComplete(e,t,s,r){let n,a;try{n=await e}catch{}try{await t.runCallbacks("handlerDidRespond",{event:r,request:s,response:n}),await t.doneWaiting()}catch(c){c instanceof Error&&(a=c)}if(await t.runCallbacks("handlerDidComplete",{event:r,request:s,response:n,error:a}),t.destroy(),a)throw a}}class m extends ee{constructor(e={}){e.cacheName=U.getPrecacheName(e.cacheName),super(e),this._fallbackToNetwork=e.fallbackToNetwork!==!1,this.plugins.push(m.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&t.event.type==="install"?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;const r=t.params||{};if(this._fallbackToNetwork){const n=r.integrity,a=e.integrity,c=!a||a===n;s=await t.fetch(new Request(e,{integrity:e.mode!=="no-cors"?a||n:void 0})),n&&c&&e.mode!=="no-cors"&&(this._useDefaultCacheabilityPluginIfNeeded(),await t.cachePut(e,s.clone()))}else throw new f("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const s=await t.fetch(e);if(!await t.cachePut(e,s.clone()))throw new f("bad-precaching-response",{url:e.url,status:s.status});return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,r]of this.plugins.entries())r!==m.copyRedirectedCacheableResponsesPlugin&&(r===m.defaultPrecacheCacheabilityPlugin&&(e=s),r.cacheWillUpdate&&t++);t===0?this.plugins.push(m.defaultPrecacheCacheabilityPlugin):t>1&&e!==null&&this.plugins.splice(e,1)}}m.defaultPrecacheCacheabilityPlugin={async cacheWillUpdate({response:o}){return!o||o.status>=400?null:o}};m.copyRedirectedCacheableResponsesPlugin={async cacheWillUpdate({response:o}){return o.redirected?await V(o):o}};class te{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new m({cacheName:U.getPrecacheName(e),plugins:[...t,new B({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const s of e){typeof s=="string"?t.push(s):s&&s.revision===void 0&&t.push(s.url);const{cacheKey:r,url:n}=H(s),a=typeof s!="string"&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==r)throw new f("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:r});if(typeof s!="string"&&s.integrity){if(this._cacheKeysToIntegrities.has(r)&&this._cacheKeysToIntegrities.get(r)!==s.integrity)throw new f("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(r,s.integrity)}if(this._urlsToCacheKeys.set(n,r),this._urlsToCacheModes.set(n,a),t.length>0){const c=`Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(c)}}}install(e){return K(e,async()=>{const t=new F;this.strategy.plugins.push(t);for(const[n,a]of this._urlsToCacheKeys){const c=this._cacheKeysToIntegrities.get(a),i=this._urlsToCacheModes.get(n),l=new Request(n,{integrity:c,cache:i,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:a},request:l,event:e}))}const{updatedURLs:s,notUpdatedURLs:r}=t;return{updatedURLs:s,notUpdatedURLs:r}})}activate(e){return K(e,async()=>{const t=await self.caches.open(this.strategy.cacheName),s=await t.keys(),r=new Set(this._urlsToCacheKeys.values()),n=[];for(const a of s)r.has(a.url)||(await t.delete(a),n.push(a.url));return{deletedURLs:n}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s)return(await self.caches.open(this.strategy.cacheName)).match(s)}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new f("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params=Object.assign({cacheKey:t},s.params),this.strategy.handle(s))}}let P;const k=()=>(P||(P=new te),P);try{self["workbox:routing:7.0.0"]&&_()}catch{}const N="GET",E=o=>o&&typeof o=="object"?o:{handle:o};class y{constructor(e,t,s=N){this.handler=E(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=E(e)}}class se extends y{constructor(e,t,s){const r=({url:n})=>{const a=e.exec(n.href);if(a&&!(n.origin!==location.origin&&a.index!==0))return a.slice(1)};super(r,t,s)}}class re{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&e.data.type==="CACHE_URLS"){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map(r=>{typeof r=="string"&&(r=[r]);const n=new Request(...r);return this.handleRequest({request:n,event:e})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const r=s.origin===location.origin,{params:n,route:a}=this.findMatchingRoute({event:t,request:e,sameOrigin:r,url:s});let c=a&&a.handler;const i=e.method;if(!c&&this._defaultHandlerMap.has(i)&&(c=this._defaultHandlerMap.get(i)),!c)return;let l;try{l=c.handle({url:s,request:e,event:t,params:n})}catch(h){l=Promise.reject(h)}const u=a&&a.catchHandler;return l instanceof Promise&&(this._catchHandler||u)&&(l=l.catch(async h=>{if(u)try{return await u.handle({url:s,request:e,event:t,params:n})}catch(d){d instanceof Error&&(h=d)}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw h})),l}findMatchingRoute({url:e,sameOrigin:t,request:s,event:r}){const n=this._routes.get(s.method)||[];for(const a of n){let c;const i=a.match({url:e,sameOrigin:t,request:s,event:r});if(i)return c=i,(Array.isArray(c)&&c.length===0||i.constructor===Object&&Object.keys(i).length===0||typeof i=="boolean")&&(c=void 0),{route:a,params:c}}return{}}setDefaultHandler(e,t=N){this._defaultHandlerMap.set(t,E(e))}setCatchHandler(e){this._catchHandler=E(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new f("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(t>-1)this._routes.get(e.method).splice(t,1);else throw new f("unregister-route-route-not-registered")}}let b;const ne=()=>(b||(b=new re,b.addFetchListener(),b.addCacheListener()),b);function O(o,e,t){let s;if(typeof o=="string"){const n=new URL(o,location.href),a=({url:c})=>c.href===n.href;s=new y(a,e,t)}else if(o instanceof RegExp)s=new se(o,e,t);else if(typeof o=="function")s=new y(o,e,t);else if(o instanceof y)s=o;else throw new f("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});return ne().registerRoute(s),s}function oe(o,e=[]){for(const t of[...o.searchParams.keys()])e.some(s=>s.test(t))&&o.searchParams.delete(t);return o}function*ae(o,{ignoreURLParametersMatching:e=[/^utm_/,/^fbclid$/],directoryIndex:t="index.html",cleanURLs:s=!0,urlManipulation:r}={}){const n=new URL(o,location.href);n.hash="",yield n.href;const a=oe(n,e);if(yield a.href,t&&a.pathname.endsWith("/")){const c=new URL(a.href);c.pathname+=t,yield c.href}if(s){const c=new URL(a.href);c.pathname+=".html",yield c.href}if(r){const c=r({url:n});for(const i of c)yield i.href}}class ce extends y{constructor(e,t){const s=({request:r})=>{const n=e.getURLsToCacheKeys();for(const a of ae(r.url,t)){const c=n.get(a);if(c){const i=e.getIntegrityForCacheKey(c);return{cacheKey:c,integrity:i}}}};super(s,e.strategy)}}function ie(o){const e=k(),t=new ce(e,o);O(t)}const le="-precache-",he=async(o,e=le)=>{const s=(await self.caches.keys()).filter(r=>r.includes(e)&&r.includes(self.registration.scope)&&r!==o);return await Promise.all(s.map(r=>self.caches.delete(r))),s};function ue(){self.addEventListener("activate",o=>{const e=U.getPrecacheName();o.waitUntil(he(e).then(t=>{}))})}function de(o){return k().createHandlerBoundToURL(o)}function fe(o){k().precache(o)}function pe(o,e){fe(o),ie(e)}function ge(){self.addEventListener("activate",()=>self.clients.claim())}class we extends y{constructor(e,{allowlist:t=[/./],denylist:s=[]}={}){super(r=>this._match(r),e),this._allowlist=t,this._denylist=s}_match({url:e,request:t}){if(t&&t.mode!=="navigate")return!1;const s=e.pathname+e.search;for(const r of this._denylist)if(r.test(s))return!1;return!!this._allowlist.some(r=>r.test(s))}}class C{constructor(e,t,s){this.name=e,this.version=t,this.storeList=s}static async new(e,t=1,s){const r=await C.initialize(e,t,s),n=s?C.getStoreList(r):[];return r.close(),new C(r.name,r.version,n)}async create(e,t){const s=await this.open(),r=this.startTransaction(s,e,"readwrite"),a=r.objectStore(e).add(t),c={passive:!0,once:!0},i=await new Promise((l,u)=>{const h=()=>{r.abort(),s.close(),u(new Error(a.error?.message,{cause:a.error?.cause}))},d=()=>{l(a.result)};a.addEventListener("error",h,c),a.addEventListener("success",d,c)});return r.commit(),s.close(),i}async read(e,t){const s=await this.open(),r=this.startTransaction(s,e,"readonly"),a=r.objectStore(e).get(t),c={passive:!0,once:!0},i=await new Promise((l,u)=>{const h=()=>{u(new Error(a.error?.message,{cause:a.error?.cause}))},d=()=>{l(a.result)};a.addEventListener("error",h,c),a.addEventListener("success",d,c)});return r.commit(),s.close(),i===void 0?null:i}async update(e,t,s){const r=await this.read(e,t);if(r===null)return!1;for(const[u,h]of Object.entries(s))r[u]=h;const n=await this.open(),a=this.startTransaction(n,e,"readwrite"),i=a.objectStore(e).put(r),l={passive:!0,once:!0};return await new Promise((u,h)=>{const d=()=>{h(new Error(i.error?.message,{cause:i.error?.cause}))},g=()=>{u(i.result)};i.addEventListener("error",d,l),i.addEventListener("success",g,l)}),a.commit(),n.close(),!0}async delete(e,t){if(await this.read(e,t)===null)return!1;const r=await this.open(),n=this.startTransaction(r,e,"readwrite"),c=n.objectStore(e).delete(t),i={passive:!0,once:!0};return await new Promise((l,u)=>{const h=()=>{u(new Error(c.error?.message,{cause:c.error?.cause}))},d=()=>{l(c.result)};c.addEventListener("error",h,i),c.addEventListener("success",d,i)}),n.commit(),r.close(),!0}async readList(e,t=null,s,r=0){const n=await this.open(),a=n.transaction(e,"readonly"),c=a.objectStore(e),i=t?c.index(t):null,l=i?i.openCursor(null,"next"):c.openCursor(null,"next"),u={passive:!0},h=await new Promise((d,g)=>{const w=[];let T=0,S=r>0;const q=()=>{a.abort(),n.close(),g(new Error(l.error?.message,{cause:l.error?.cause}))},D=()=>{const v=l.result;v&&T<s?S?(S=!1,v.advance(r)):(w.push(v.value),T+=1,v.continue()):d(w)};l.addEventListener("error",q,u),l.addEventListener("success",D,u)});return a.commit(),n.close(),h}async count(e){const t=await this.open(),s=t.transaction(e,"readonly"),n=s.objectStore(e).count(),a={passive:!0,once:!0},c=await new Promise((i,l)=>{const u=()=>{s.abort(),t.close(),l(new Error(n.error?.message,{cause:n.error?.cause}))},h=()=>{i(n.result)};n.addEventListener("error",u,a),n.addEventListener("success",h,a)});return s.commit(),t.close(),c}static async initialize(e,t,s){const r=indexedDB.open(e,t),n={passive:!0,once:!0};return new Promise((a,c)=>{const i=()=>{c(new Error(r.error?.message,{cause:r.error?.cause}))},l=()=>{a(r.result)},u=()=>{if(!s)return;const h=r.result;for(const d of s){let g;if(h.objectStoreNames.contains(d.name)&&r.transaction?g=r.transaction.objectStore(d.name):g=h.createObjectStore(d.name,d.options),d.indexes.length>0)for(const w of d.indexes)g.indexNames.contains(w.name)||g.createIndex(w.name,w.keyPath,w.options)}};r.addEventListener("error",i,n),r.addEventListener("success",l,n),r.addEventListener("upgradeneeded",u,n)})}startTransaction(e,t,s){const r=e.transaction(t,s),n={passive:!0,once:!0},a=()=>{console.error("Transaction error:",r.error)},c=()=>{console.error("Transaction aborted:",r.error)},i=()=>{console.info("Transaction completed")};return r.addEventListener("error",a,n),r.addEventListener("abort",c,n),r.addEventListener("complete",i,n),r}static getStoreList(e){const t=Object.values(e.objectStoreNames),s=e.transaction(t,"readonly"),r=()=>{console.error("Transaction error:",s.error)},n=()=>{console.error("Transaction aborted:",s.error)},a=()=>{console.info("Transaction completed")},c={passive:!0,once:!0};s.addEventListener("abort",n,c),s.addEventListener("error",r,c),s.addEventListener("complete",a,c);const i=[];for(const l of t){const u=s.objectStore(l),h=Object.values(u.indexNames);i.push({name:l,indexList:h})}return s.commit(),i}upgrade(e){const t=indexedDB.open(this.name,this.version),s={passive:!0,once:!0};return new Promise((r,n)=>{const a=()=>{n(new Error(t.error?.message,{cause:t.error?.cause}))},c=()=>{r(t.result)};t.addEventListener("error",a,s),t.addEventListener("success",c,s),t.addEventListener("upgradeneeded",e,s)})}open(){const e=indexedDB.open(this.name,this.version),t={passive:!0,once:!0};return new Promise((s,r)=>{const n=()=>{r(new Error(e.error?.message,{cause:e.error?.cause}))},a=()=>{const c=e.result,i=()=>{console.error("Database operation error:",e.error)},l=()=>{console.error("Database operation aborted:",e.error)},u=()=>{console.info("Database closed")},h=()=>{console.info("Database version changed")};c.addEventListener("error",i,t),c.addEventListener("abort",l,t),c.addEventListener("close",u,t),c.addEventListener("versionchange",h,t),s(c)};e.addEventListener("error",n,t),e.addEventListener("success",a,t)})}}ge();ue();pe([{"revision":null,"url":"assets/index-B6CEimE4.css"},{"revision":null,"url":"assets/index-CN_2Jcsn.js"},{"revision":"9651445b0ce93f5e71addb097e86b4f8","url":"index.html"},{"revision":"30371f4db407e26724be5c4f1e93f0cf","url":"pwa-192x192.png"},{"revision":"4d0675b766f8b92d40d90342565ac7bd","url":"pwa-512x512.png"},{"revision":"2d095c2c82bda5524036790d8bca571f","url":"manifest.webmanifest"}]);let me;O(new we(de("index.html"),{allowlist:me}));const ye=o=>{const e={title:"",text:"",url:""},t=o.get("title"),s=o.get("text"),r=o.get("url");if(e.title=t??"",r)e.url=r,e.text=s??"";else if(s){const n=s.slice(0);if(typeof n=="string"){const a=n.split(" "),c=a.pop();c&&URL.canParse(c)?(e.url=c,e.text=a.join(" ")):e.text=s}}return e};self.addEventListener("install",()=>{self.skipWaiting()});self.addEventListener("fetch",o=>{const e=new URL(o.request.url);o.request.method==="POST"&&e.pathname==="/project_quicksave/share"&&o.respondWith((async()=>{const t=await o.request.formData(),{title:s,text:r,url:n}=ye(t),a=await C.new("QuickSaveDB",2),c=Date.now();return await a.create("articles",{id:crypto.randomUUID(),title:s,url:n,description:r,timestamp:c}),Response.redirect("/project_quicksave/")})())});
