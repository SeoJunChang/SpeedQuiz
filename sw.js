const CACHE_NAME = 'speed-quiz-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './words.json',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// 설치 이벤트: 파일 캐싱
self.addEventListener('install', (event) => {
  event.waitUntil(
	caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

// 네트워크 요청 처리: 캐시 우선 방식
self.addEventListener('fetch', (event) => {
  event.respondWith(
	caches.match(event.request).then((response) => {
	  return response || fetch(event.request);
	})
  );
});