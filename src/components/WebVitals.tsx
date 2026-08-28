'use client'

import { useEffect } from 'react'
import type { Metric } from 'web-vitals'
import { pushToDataLayer } from './GoogleAnalytics'

/**
 * Reporta Core Web Vitals para o GTM.
 *
 * Três correções em relação à versão anterior:
 *
 *  1. `web-vitals` era importado no topo → entrava no chunk compartilhado de
 *     TODAS as rotas. Agora é `import()` dinâmico: sai do bundle inicial e só
 *     baixa quando o navegador está ocioso.
 *  2. Enviava para `window.gtag`, que não existe neste site (usamos GTM, não
 *     gtag.js direto) — as métricas iam para lugar nenhum. Agora vai para o
 *     `dataLayer`, o canal nativo do GTM.
 *  3. `metric: any` → `Metric` tipado (import type, custo zero em runtime).
 *
 * Só roda em produção: medir na build de dev mede o dev server, não o site.
 */
export default function WebVitals() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return

    let cancelled = false

    const report = (metric: Metric) => {
      pushToDataLayer({
        event: 'web_vitals',
        metric_name: metric.name,
        metric_id: metric.id,
        metric_rating: metric.rating,
        // CLS é fracionário; multiplicamos para não perder precisão no inteiro.
        metric_value: Math.round(
          metric.name === 'CLS' ? metric.value * 1000 : metric.value
        ),
      })
    }

    const load = () => {
      if (cancelled) return
      import('web-vitals')
        .then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
          if (cancelled) return
          onLCP(report)
          onINP(report)
          onCLS(report)
          onFCP(report)
          onTTFB(report)
        })
        .catch(() => {
          // Telemetria nunca deve derrubar a página.
        })
    }

    // Espera o thread principal ficar livre — nada disso é urgente.
    // Safari < 16.4 não tem requestIdleCallback; daí o fallback por timeout.
    const hasIdle = typeof window.requestIdleCallback === 'function'
    const handle = hasIdle
      ? window.requestIdleCallback(load, { timeout: 4000 })
      : window.setTimeout(load, 2000)

    return () => {
      cancelled = true
      if (hasIdle) window.cancelIdleCallback(handle)
      else window.clearTimeout(handle)
    }
  }, [])

  return null
}
