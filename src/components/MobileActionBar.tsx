import { Phone, MessageCircle } from 'lucide-react'
import { site, waMessages } from '@/lib/site'

/**
 * Barra de ação fixa no rodapé — só no mobile (`md:hidden`).
 *
 * Site de emergência: as duas ações de maior intenção (ligar e WhatsApp)
 * ficam sempre ao alcance do polegar, sem depender de rolagem.
 *
 * Server component de propósito — são dois links, não há estado.
 *
 * O espaçador irmão reserva a altura da barra para que ela nunca cubra o
 * fim do conteúdo (rodapé, último CTA). Como o layout não pode ser tocado
 * por este componente, a compensação vive aqui dentro.
 */

const itemClass =
  'flex min-h-[3rem] flex-1 items-center justify-center gap-2 rounded-xl px-4 ' +
  'text-[0.9375rem] font-semibold tracking-tight transition-colors duration-200 ease-out ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-raio-500 focus-visible:ring-offset-2 focus-visible:ring-offset-elevated'

export default function MobileActionBar() {
  return (
    <>
      {/* Reserva a altura da barra: 3rem de alvo + 1.25rem de padding + borda
          + o recorte inferior do aparelho. */}
      <div
        aria-hidden
        className="md:hidden"
        style={{ height: 'calc(4.3125rem + env(safe-area-inset-bottom, 0px))' }}
      />

      <div className="safe-area-bottom fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-elevated/95 backdrop-blur-xl md:hidden">
        <nav aria-label="Ações rápidas" className="flex items-stretch gap-2 px-4 py-2.5">
          <a
            href={site.phone.tel}
            className={`${itemClass} bg-raio-500 text-ink-950 shadow-raio active:bg-raio-400`}
          >
            <Phone className="h-[1.125rem] w-[1.125rem] shrink-0" aria-hidden />
            Ligar agora
          </a>
          <a
            href={site.whatsapp.with(waMessages.emergencia)}
            target="_blank"
            rel="noopener noreferrer"
            className={`${itemClass} border border-hairline bg-surface text-content active:bg-canvas`}
          >
            <MessageCircle className="h-[1.125rem] w-[1.125rem] shrink-0" aria-hidden />
            WhatsApp
          </a>
        </nav>
      </div>
    </>
  )
}
