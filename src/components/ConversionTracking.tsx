'use client'

import { useEffect } from 'react'
import { pushToDataLayer } from './GoogleAnalytics'

/** Rótulo de conversão do Google Ads configurado no container do GTM. */
const CONVERSION_SEND_TO = 'AW-11562746309/skWBCIXGzogaEMWDxokr'

/**
 * Dispara uma conversão do Google Ads via dataLayer.
 *
 * Antes este componente injetava um `<Script>` inline chamando `gtag(...)`
 * direto. Dois problemas: (1) `gtag` não existe até o GTM carregar — o script
 * quebrava com ReferenceError quando o GTM era bloqueado ou lento; (2) o evento
 * era acoplado à renderização, não ao ato de converter.
 *
 * O dataLayer é o canal nativo do GTM: aceita eventos antes do container
 * carregar e nunca lança. Dispare isto no clique real (ligar / WhatsApp /
 * enviar formulário), com o gatilho correspondente configurado no GTM.
 */
export function trackConversion(label?: string): void {
  pushToDataLayer({
    event: 'conversion',
    send_to: CONVERSION_SEND_TO,
    conversion_label: label,
  })
}

/**
 * Versão componente: dispara uma conversão ao montar.
 *
 * Use APENAS em página de obrigado/confirmação. Não monte no layout —
 * marcaria toda visita como conversão.
 */
export default function ConversionTracking({ label }: { label?: string }) {
  useEffect(() => {
    trackConversion(label)
  }, [label])

  return null
}
