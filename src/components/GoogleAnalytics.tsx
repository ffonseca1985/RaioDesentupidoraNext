'use client'

import Script from 'next/script'

export const GTM_ID = 'GTM-K5R9M4QD'

/**
 * O container do GTM cria `window.dataLayer`. Tipamos aqui uma única vez para
 * que ninguém precise de `any` — e para que empurrar um evento antes do GTM
 * carregar continue funcionando (o array é criado sob demanda).
 */
declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

/**
 * Empurra um evento para o dataLayer sem depender do GTM já ter carregado.
 * Se o script do GTM for bloqueado (adblock, rede), a chamada é inofensiva:
 * o evento fica no array e nada quebra.
 */
export function pushToDataLayer(event: Record<string, unknown>): void {
  if (typeof window === 'undefined') return
  try {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(event)
  } catch {
    // dataLayer indisponível — telemetria nunca deve derrubar a página.
  }
}

/**
 * Carrega o Google Tag Manager fora do caminho crítico de render.
 *
 * Antes: `<script dangerouslySetInnerHTML>` inline no <head>, que disparava o
 * download do gtm.js concorrendo com o CSS e o JS da própria página (e violava
 * a regra `@next/next/next-script-for-ga` do ESLint).
 *
 * Agora: `next/script` com `afterInteractive` — o GTM só começa a baixar
 * depois que a página está interativa, então não compete com FCP/LCP.
 */
export default function GoogleTagManagerHeader() {
  return (
    <Script id="gtm-loader" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
    </Script>
  )
}
