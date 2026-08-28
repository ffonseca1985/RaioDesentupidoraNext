'use client'

import type { FC } from 'react'
import { MessageCircle } from 'lucide-react'
import { site, waMessages } from '@/lib/site'
import { cn } from '@/lib/utils'

interface BtnWhatsAppProps {
  variant?: 'default' | 'small'
  className?: string
}

/** Botão de WhatsApp inline. Sóbrio, sem gradiente nem sombra exagerada. */
export const BtnWhatsApp: FC<BtnWhatsAppProps> = ({ variant = 'default', className }) => (
  <a
    href={site.whatsapp.with(waMessages.orcamento)}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar no WhatsApp"
    className={cn(
      'inline-flex items-center justify-center gap-2 rounded-xl font-semibold tracking-tight',
      'bg-emerald-600 text-white transition-colors duration-200 ease-out hover:bg-emerald-700',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-raio-500 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas',
      variant === 'small' ? 'h-11 px-4 text-sm' : 'h-[3.25rem] px-6 text-base',
      className,
    )}
  >
    <MessageCircle className="h-[1.125rem] w-[1.125rem] shrink-0" aria-hidden />
    {variant === 'default' && 'WhatsApp'}
  </a>
)

/**
 * Bolha flutuante de WhatsApp.
 *
 * DESKTOP-ONLY (`hidden md:flex`): abaixo de `md` a `MobileActionBar` já
 * ocupa o rodapé com Ligar + WhatsApp, e duas ações sobrepostas no mesmo
 * canto competem entre si e cobrem conteúdo.
 *
 * Sem `animate-ping` e sem badge de "notificação" falsa — ruído visual que
 * não combina com o público que assina contrato.
 */
export const WhatsAppFlutuante: FC = () => (
  <a
    href={site.whatsapp.with(waMessages.orcamento)}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar no WhatsApp"
    className={cn(
      'safe-area-bottom fixed bottom-6 right-6 z-40 hidden h-14 w-14 md:flex',
      'items-center justify-center rounded-full bg-emerald-600 text-white shadow-e3',
      'transition-colors duration-200 ease-out hover:bg-emerald-700',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-raio-500 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas',
    )}
  >
    <MessageCircle className="h-6 w-6" aria-hidden />
  </a>
)
