/* Lion Strike offline cache — a new build changes VERSION, so phones pick up the update on their next launch */
const VERSION='ls-857b71ee59';
const FILES=["index.html", "manifest.webmanifest", "icons/apple-touch-icon.png", "icons/favicon-32.png", "icons/favicon-64.png", "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-192.png", "icons/maskable-512.png", "music/b03-bonecrusher.mp3", "music/b04-fighters.mp3", "music/b05-action-speed-fighting.mp3", "music/b06-electro-vortex.mp3", "music/b07-caesium-beam.mp3", "music/b08-fracture-signal.mp3", "music/b09-first-strike.mp3", "music/b10-destiny.mp3", "music/boss.mp3", "music/day-dreaming-again.mp3", "music/hangar.mp3", "music/lethal.mp3", "music/level.mp3", "music/s01-ready-for-action.mp3", "music/s02-the-breaking-news.mp3", "music/s03-cadence.mp3", "music/s04-heroic.mp3", "music/s05-pressure-drop.mp3", "music/s07-within-the-grids.mp3", "music/s09-dirty-ride.mp3", "music/s10-astronaut.mp3", "music/title.mp3", "music/ur-luv.mp3"];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FILES.map(f=>new Request(f,{cache:'reload'})))).then(()=>self.skipWaiting())); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener('fetch',e=>{ const r=e.request; if(r.method!=='GET') return;
  if(r.mode==='navigate'){ e.respondWith(caches.match('index.html',{cacheName:VERSION}).then(c=>c||fetch(r))); return; }
  e.respondWith(caches.match(r,{ignoreSearch:true}).then(c=>c?ranged(r,c):fetch(r))); });
/* audio asks for byte ranges (Safari insists on 206 answers), so cut the cached file to the range asked for */
async function ranged(r,c){ const h=r.headers.get('range'); if(!h) return c; const buf=await c.arrayBuffer(), n=buf.byteLength, m=/bytes=(\d*)-(\d*)/.exec(h);
  let s=0,e=n-1; if(m){ if(m[1]) { s=+m[1]; if(m[2]) e=Math.min(n-1,+m[2]); } else if(m[2]) { s=Math.max(0,n-(+m[2])); } }
  return new Response(buf.slice(s,e+1),{status:206,statusText:'Partial Content',headers:{'Content-Type':c.headers.get('Content-Type')||'audio/mpeg','Content-Range':'bytes '+s+'-'+e+'/'+n,'Content-Length':String(e-s+1),'Accept-Ranges':'bytes'}}); }
