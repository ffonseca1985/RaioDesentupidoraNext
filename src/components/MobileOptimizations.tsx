"use client"

import { useEffect, useState } from 'react'

export default function MobileOptimizations() {
  const [isMobile, setIsMobile] = useState(false)
  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    // Detectar dispositivo mobile
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera
      setIsMobile(window.innerWidth <= 768)
      setIsIOS(/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Otimizações específicas para mobile
    if (typeof window !== 'undefined') {
      // Prevent zoom on input focus (iOS)
      const viewport = document.querySelector('meta[name="viewport"]')
      if (viewport && isMobile) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover')
      }

      // Smooth scrolling for iOS
      if (isIOS) {
        (document.documentElement.style as any).webkitOverflowScrolling = 'touch'
      }

      // Prevent pull-to-refresh on mobile
      document.body.style.overscrollBehavior = 'none'
      
      // Optimize touch events
      document.body.style.touchAction = 'manipulation'
      
      // Prevent text selection on mobile for better UX
      if (isMobile) {
        (document.body.style as any).webkitUserSelect = 'none'
        document.body.style.userSelect = 'none'
      }
    }

    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [isMobile, isIOS])

  // Adicionar meta tags específicas para mobile
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Apple-specific meta tags
      const appleMeta = [
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'apple-mobile-web-app-title', content: 'Raio Desentupidora' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'format-detection', content: 'telephone=no' }
      ]

      appleMeta.forEach(meta => {
        let existingMeta = document.querySelector(`meta[name="${meta.name}"]`)
        if (!existingMeta) {
          existingMeta = document.createElement('meta')
          existingMeta.setAttribute('name', meta.name)
          document.head.appendChild(existingMeta)
        }
        existingMeta.setAttribute('content', meta.content)
      })
    }
  }, [])

  return null
} 