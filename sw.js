const CACHE_NAME = 'quiz-master-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/icon-192.png',
  '/icon-512.png'
];

// 서비스 워커 설치 및 리소스 캐싱
self.addEventListener('install', (event) => {
  event.waitUntil(
	caches.open(CACHE_NAME)
	  .then((cache) => {
		console.log('퀴즈 리소스 캐싱 중...');
		return cache.addAll(ASSETS_TO_CACHE);
	  })
	  .then(() => self.skipWaiting())
  );
});

// 오래된 캐시 삭제
self.addEventListener('activate', (event) => {
  event.waitUntil(
	caches.keys().then((cacheNames) => {
	  return Promise.all(
		cacheNames
		  .filter((name) => name !== CACHE_NAME)
		  .map((name) => caches.delete(name))
	  );
	}).then(() => self.clients.claim())
  );
});

// 네트워크 요청 가로채기 (캐시 우선 전략)
self.addEventListener('fetch', (event) => {
  event.respondWith(
	caches.match(event.request)
	  .then((cachedResponse) => {
		if (cachedResponse) {
		  return cachedResponse;
		}
		return fetch(event.request).then((response) => {
		  // 정상적인 GET 요청만 다시 캐싱
		  if (!response || response.status !== 200 || event.request.method !== 'GET') {
			return response;
		  }
		  const responseToCache = response.clone();
		  caches.open(CACHE_NAME).then((cache) => {
			cache.put(event.request, responseToCache);
		  });
		  return response;
		});
	  })
	  .catch(() => caches.match('/index.html')) // 오프라인 시 메인 페이지 반환
  );
});