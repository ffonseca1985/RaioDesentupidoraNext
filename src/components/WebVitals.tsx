"use client"

import { useEffect } from 'react'
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals'

function sendToAnalytics(metric: any) {
  // Enviar métricas para Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    })
  }

  // Log das métricas para desenvolvimento
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vital:', metric)
  }
}

export default function WebVitals() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Largest Contentful Paint (LCP) - deve ser < 2.5s
      onLCP(sendToAnalytics)
      
      // Interaction to Next Paint (INP) - substitui FID
      onINP(sendToAnalytics)
      
      // Cumulative Layout Shift (CLS) - deve ser < 0.1
      onCLS(sendToAnalytics)
      
      // First Contentful Paint (FCP) - deve ser < 1.8s
      onFCP(sendToAnalytics)
      
      // Time to First Byte (TTFB) - deve ser < 600ms
      onTTFB(sendToAnalytics)
    }
  }, [])

  return null
}

// Declaração de tipos para o Google Analytics
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: {
        event_category?: string
        event_label?: string
        value?: number
        non_interaction?: boolean
        page_title?: string
        page_location?: string
        custom_map?: Record<string, string>
      }
    ) => void
  }
}

export { } 