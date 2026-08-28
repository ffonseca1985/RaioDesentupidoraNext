'use client'

import { useEffect } from 'react'

/**
 * Registra o service worker (`public/sw.js`) — e nada mais.
 *
 * O que este arquivo fazia antes, e por que saiu:
 *
 *  - `img:not([loading])` → `loading="lazy"` em TODAS as imagens. Rodava depois
 *    da hidratação, quando o navegador já tinha iniciado (ou concluído) o
 *    download — inútil no melhor caso. No pior, marcava a imagem do hero como
 *    lazy e piorava o LCP. `next/image` já define loading/decoding corretos.
 *  - `<link rel="preload" href="/favicon.ico">` injetado via DOM. O favicon já
 *    é buscado pelo navegador sem preload, e o layout já tinha o mesmo link no
 *    <head>. Resultado: fetch duplicado + aviso de "preload não utilizado".
 *  - `console.log` do registro do SW em produção.
 *
 * O registro do SW ficou, mas fora do caminho crítico: depois do `load` e em
 * tempo ocioso. Antes competia com o carregamento da própria página.
 */
export default function PerformanceOptimizer() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return
    if (!('serviceWorker' in navigator)) return

    let cancelled = false

    const register = () => {
      if (cancelled) return
      navigator.serviceWorker.register('/sw.js').catch(() => {
        // Sem SW o site funciona igual; falha aqui não é erro do usuário.
      })
    }

    const whenIdle = () => {
      if (cancelled) return
      // Safari < 16.4 não tem requestIdleCallback; daí o fallback por timeout.
      if (typeof window.requestIdleCallback === 'function') {
        window.requestIdleCallback(register, { timeout: 5000 })
      } else {
        window.setTimeout(register, 2000)
      }
    }

    if (document.readyState === 'complete') {
      whenIdle()
    } else {
      window.addEventListener('load', whenIdle, { once: true, passive: true })
    }

    return () => {
      cancelled = true
      window.removeEventListener('load', whenIdle)
    }
  }, [])

  return null
}
