const s=async e=>{try{await(await caches.open("dev-v2")).addAll(e)}catch(c){console.error(c)}};self.addEventListener("install",e=>{e.waitUntil(s(["/project_quicksave/","/project_quicksave/index.html","/project_quicksave/style.css","/project_quicksave/main.js","/project_quicksave/pwa-192x192.png","/project_quicksave/pwa-512x512.png","/project_quicksave/manifest.webmanifest"]))});const t=async e=>{const c=new URL(e.url),a=await caches.match(e);return a||(c.pathname.endsWith("share")?fetch(e):Response.redirect("/project_quicksave/"))};self.addEventListener("fetch",e=>{e.respondWith(t(e.request))});
