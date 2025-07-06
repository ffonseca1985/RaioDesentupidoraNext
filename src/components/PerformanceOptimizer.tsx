"use client"

import { useEffect } from 'react'

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Simple performance optimizations
    const optimizePerformance = () => {
      try {
        // 1. Optimize images with lazy loading
        const images = document.querySelectorAll('img:not([loading])')
        images.forEach(img => {
          const imgElement = img as HTMLImageElement
          imgElement.setAttribute('loading', 'lazy')
          imgElement.setAttribute('decoding', 'async')
        })

        // 2. Register service worker for caching
        if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
          navigator.serviceWorker.register('/sw.js')
            .then(registration => {
              console.log('SW registered: ', registration)
            })
            .catch(registrationError => {
              console.log('SW registration failed: ', registrationError)
            })
        }

        // 3. Preload critical resources
        const criticalResources = [
          { href: '/favicon.ico', as: 'image', type: 'image/x-icon' },
        ]

        criticalResources.forEach(resource => {
          const existingLink = document.querySelector(`link[href="${resource.href}"]`)
          if (!existingLink) {
            const link = document.createElement('link')
            link.rel = 'preload'
            link.href = resource.href
            link.as = resource.as
            if (resource.type) link.type = resource.type
            document.head.appendChild(link)
          }
        })
      } catch (error) {
        console.warn('Performance optimization error:', error)
      }
    }

    // Run optimizations after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', optimizePerformance)
    } else {
      setTimeout(optimizePerformance, 100)
    }

    // Cleanup
    return () => {
      document.removeEventListener('DOMContentLoaded', optimizePerformance)
    }
  }, [])

  return null
} 