const V='bam-gio-v3';
const FILES=['./','index.html','manifest.json','icon-192.png','icon-512.png','ung-ho-mb.png','ung-ho-momo.png','og-image.png'];
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(V).then(c=>Promise.all(FILES.map(f=>c.add(f).catch(()=>{})))).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
// Ưu tiên bản mới từ mạng. Mất mạng hoặc mạng quá chậm (hơn 4 giây) thì dùng bản đã lưu
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  if(new URL(e.request.url).origin!==location.origin)return;
  const fallback=()=>caches.match(e.request).then(m=>m||caches.match('index.html'));
  const net=fetch(e.request).then(r=>{
    if(r&&r.ok){const cp=r.clone();caches.open(V).then(c=>c.put(e.request,cp))}
    return r;
  });
  const slow=new Promise(res=>setTimeout(()=>res(caches.match(e.request).then(m=>m||net)),4000));
  e.respondWith(Promise.race([net.catch(fallback),slow]));
});
