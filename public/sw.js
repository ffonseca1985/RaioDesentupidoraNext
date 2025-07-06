// Service Worker for Raio Desentupidora - Advanced Caching Strategy
const CACHE_NAME = 'raio-desentupidora-v1.0.0'
const STATIC_CACHE = 'static-v1'
const DYNAMIC_CACHE = 'dynamic-v1'
const IMAGE_CACHE = 'images-v1'

// Critical resources to cache immediately
const CRITICAL_RESOURCES = [
  '/',
  '/contato',
  '/nossosservicos',
  '/quemsomos',
  '/favicon.ico',
  '/manifest.json',
  '/robots.txt'
]

// Static assets to cache
const STATIC_ASSETS = [
  '/favicon.ico',
  '/icon.svg',
  '/apple-touch-icon.png',
  '/manifest.json'
]

// External resources to cache
const EXTERNAL_RESOURCES = [
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
]

// Install event - cache critical resources
self.addEventListener('install', event => {
  console.log('Service Worker installing...')
  
  event.waitUntil(
    Promise.all([
      // Cache critical resources
      caches.open(CACHE_NAME).then(cache => {
        return cache.addAll(CRITICAL_RESOURCES)
      }),
      
      // Cache static assets
      caches.open(STATIC_CACHE).then(cache => {
        return cache.addAll(STATIC_ASSETS)
      }),
      
      // Cache external resources
      caches.open(STATIC_CACHE).then(cache => {
        return Promise.all(
          EXTERNAL_RESOURCES.map(url => {
            return cache.add(url).catch(err => {
              console.warn('Failed to cache external resource:', url, err)
            })
          })
        )
      })
    ]).then(() => {
      console.log('Service Worker installed successfully')
      self.skipWaiting()
    })
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker activating...')
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME && 
              cacheName !== STATIC_CACHE && 
              cacheName !== DYNAMIC_CACHE && 
              cacheName !== IMAGE_CACHE) {
            console.log('Deleting old cache:', cacheName)
            return caches.delete(cacheName)
          }
        })
      )
    }).then(() => {
      console.log('Service Worker activated')
      self.clients.claim()
    })
  )
})

// Fetch event - implement caching strategies
self.addEventListener('fetch', event => {
  const { request } = event
  const url = new URL(request.url)
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return
  }
  
  // Skip Chrome extensions and other protocols
  if (!url.protocol.startsWith('http')) {
    return
  }
  
  // Skip Google Analytics and other tracking scripts
  if (url.hostname.includes('google-analytics.com') || 
      url.hostname.includes('googletagmanager.com') ||
      url.hostname.includes('facebook.com') ||
      url.hostname.includes('twitter.com')) {
    return
  }
  
  event.respondWith(
    handleRequest(request)
  )
})

// Main request handler with different strategies
async function handleRequest(request) {
  const url = new URL(request.url)
  
  try {
    // Strategy 1: Cache First for static assets
    if (isStaticAsset(url)) {
      return await cacheFirst(request, STATIC_CACHE)
    }
    
    // Strategy 2: Cache First for images
    if (isImage(url)) {
      return await cacheFirst(request, IMAGE_CACHE)
    }
    
    // Strategy 3: Stale While Revalidate for pages
    if (isPage(url)) {
      return await staleWhileRevalidate(request, CACHE_NAME)
    }
    
    // Strategy 4: Network First for API calls
    if (isApiCall(url)) {
      return await networkFirst(request, DYNAMIC_CACHE)
    }
    
    // Strategy 5: Cache First for external resources
    if (isExternalResource(url)) {
      return await cacheFirst(request, STATIC_CACHE)
    }
    
    // Default: Network First
    return await networkFirst(request, DYNAMIC_CACHE)
    
  } catch (error) {
    console.error('Request failed:', error)
    return await getOfflineFallback(request)
  }
}

// Cache First strategy
async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName)
  const cached = await cache.match(request)
  
  if (cached) {
    return cached
  }
  
  try {
    const response = await fetch(request)
    if (response.ok) {
      cache.put(request, response.clone())
    }
    return response
  } catch (error) {
    throw error
  }
}

// Network First strategy
async function networkFirst(request, cacheName) {
  const cache = await caches.open(cacheName)
  
  try {
    const response = await fetch(request)
    if (response.ok) {
      cache.put(request, response.clone())
    }
    return response
  } catch (error) {
    const cached = await cache.match(request)
    if (cached) {
      return cached
    }
    throw error
  }
}

// Stale While Revalidate strategy
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName)
  const cached = await cache.match(request)
  
  // Always try to update in background
  const fetchPromise = fetch(request).then(response => {
    if (response.ok) {
      cache.put(request, response.clone())
    }
    return response
  }).catch(error => {
    console.warn('Background fetch failed:', error)
  })
  
  // Return cached version immediately if available
  if (cached) {
    return cached
  }
  
  // Otherwise wait for network
  return await fetchPromise
}

// Helper functions
function isStaticAsset(url) {
  return url.pathname.match(/\.(css|js|woff|woff2|ttf|eot|ico|svg)$/)
}

function isImage(url) {
  return url.pathname.match(/\.(jpg|jpeg|png|gif|webp|avif)$/)
}

function isPage(url) {
  return url.pathname.match(/\/$/) || 
         url.pathname.match(/\/(contato|nossosservicos|quemsomos|servicos)/)
}

function isApiCall(url) {
  return url.pathname.startsWith('/api/')
}

function isExternalResource(url) {
  return url.hostname !== self.location.hostname
}

// Offline fallback
async function getOfflineFallback(request) {
  const url = new URL(request.url)
  
  // Return cached page if available
  if (isPage(url)) {
    const cache = await caches.open(CACHE_NAME)
    const cached = await cache.match('/')
    if (cached) {
      return cached
    }
  }
  
  // Return offline page
  return new Response(
    `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Offline - Raio Desentupidora</title>
      <style>
        body { 
          font-family: system-ui, sans-serif; 
          text-align: center; 
          padding: 2rem; 
          background: linear-gradient(135deg, #0284c7, #0369a1);
          color: white;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0;
        }
        .container {
          max-width: 500px;
          background: rgba(255,255,255,0.1);
          padding: 2rem;
          border-radius: 1rem;
          backdrop-filter: blur(10px);
        }
        h1 { margin-bottom: 1rem; }
        p { margin-bottom: 1.5rem; line-height: 1.6; }
        .phone {
          font-size: 1.5rem;
          font-weight: bold;
          color: #fbbf24;
          margin: 1rem 0;
        }
        .btn {
          background: rgba(255,255,255,0.2);
          color: white;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          font-size: 1rem;
          margin: 0.5rem;
        }
        .btn:hover {
          background: rgba(255,255,255,0.3);
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🚫 Você está offline</h1>
        <p>Não foi possível carregar a página. Verifique sua conexão com a internet.</p>
        <p>Para emergências, ligue agora:</p>
        <div class="phone">📞 (11) 98063-9525</div>
        <div class="phone">📞 (11) 98039-9879</div>
        <p>Atendimento 24h para desentupimento emergencial!</p>
        <button class="btn" onclick="window.location.reload()">
          🔄 Tentar novamente
        </button>
        <button class="btn" onclick="window.history.back()">
          ← Voltar
        </button>
      </div>
    </body>
    </html>
    `,
    {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-cache'
      }
    }
  )
}

// Background sync for offline actions
self.addEventListener('sync', event => {
  if (event.tag === 'contact-form') {
    event.waitUntil(syncContactForm())
  }
})

async function syncContactForm() {
  // Handle offline form submissions
  const forms = await getStoredForms()
  
  for (const form of forms) {
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      
      // Remove from storage after successful sync
      await removeStoredForm(form.id)
    } catch (error) {
      console.error('Failed to sync form:', error)
    }
  }
}

// Helper functions for background sync
async function getStoredForms() {
  // Implementation depends on your storage method
  return []
}

async function removeStoredForm(id) {
  // Implementation depends on your storage method
}

// Performance monitoring
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'PERFORMANCE_REPORT') {
    console.log('Performance report:', event.data.metrics)
  }
})

console.log('Service Worker loaded successfully') 