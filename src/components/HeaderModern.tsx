'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, MessageCircle, Sun, Moon, Zap } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useTheme } from '@/contexts/ThemeContext'
import { site, waMessages } from '@/lib/site'
import { cn } from '@/lib/utils'

/**
 * Shell de navegação.
 *
 * Sem animação de entrada: o header é markup estático no primeiro paint
 * (o `motion.nav initial={{y:-100}}` antigo fazia a barra "cair" a cada
 * carregamento e dependia da hidratação). O drawer também é CSS puro:
 * fica montado e alterna via transição + `inert`, o que removeu
 * framer-motion do bundle compartilhado de TODAS as rotas.
 *
 * A altura vem de `--header-h` (4rem / 4.75rem ≥sm), a mesma variável que
 * o `scroll-padding-top` usa em globals.css. O espaçador logo abaixo do
 * header compensa o `position: fixed` em TODAS as rotas — nenhuma página
 * precisa saber a altura da barra.
 */

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/nossosservicos', label: 'Serviços' },
  { href: '/empresas', label: 'Empresas' },
  { href: '/quemsomos', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
] as const

const MENU_ID = 'menu-principal'

function isActive(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname.startsWith(href)
}

/** Marca. "Raio" é relâmpago — o símbolo é o acento âmbar sobre navy. */
function Logo() {
  return (
    <Link
      href="/"
      className="group -ml-1 flex items-center gap-2.5 rounded-xl px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-raio-500"
    >
      <span
        aria-hidden
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-ink-950 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 sm:h-10 sm:w-10"
      >
        <Zap className="h-[1.125rem] w-[1.125rem] fill-raio-500 text-raio-500 sm:h-5 sm:w-5" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[0.9375rem] font-semibold tracking-tight text-content sm:text-base">
          Raio Desentupidora
        </span>
        <span className="mt-0.5 hidden text-[0.6875rem] font-medium tracking-tight text-content-subtle sm:block">
          Atendimento 24h
        </span>
      </span>
    </Link>
  )
}

/**
 * O tema já foi resolvido antes do paint pelo script inline; `mounted`
 * evita renderizar o ícone errado por um frame. O espaço do ícone fica
 * reservado desde o servidor, então não há layout shift.
 */
function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme, mounted } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Alternar tema claro e escuro"
      className={cn(
        'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-content-muted',
        'transition-colors duration-200 ease-out hover:bg-surface hover:text-content',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-raio-500',
        className,
      )}
    >
      <span className="flex h-[1.125rem] w-[1.125rem] items-center justify-center">
        {mounted ? (
          theme === 'dark' ? (
            <Sun className="h-[1.125rem] w-[1.125rem]" aria-hidden />
          ) : (
            <Moon className="h-[1.125rem] w-[1.125rem]" aria-hidden />
          )
        ) : null}
      </span>
    </button>
  )
}

export default function HeaderModern() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const panelRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  /* Listener leve: só liga/desliga um booleano. */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Fecha ao navegar. */
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
    triggerRef.current?.focus()
  }, [])

  /* Escape, foco preso e trava de scroll do body enquanto o drawer está aberto. */
  useEffect(() => {
    if (!isMenuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setIsMenuOpen(false)
        triggerRef.current?.focus()
        return
      }
      if (event.key !== 'Tab') return

      const root = panelRef.current
      if (!root) return
      const focusables = Array.from(
        root.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
      ).filter((el) => el.offsetParent !== null)
      if (focusables.length === 0) return

      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      const active = document.activeElement

      if (event.shiftKey && (active === first || !root.contains(active))) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && active === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    const focusTimer = window.setTimeout(() => {
      panelRef.current?.querySelector<HTMLElement>('a[href], button')?.focus()
    }, 80)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      window.clearTimeout(focusTimer)
      document.body.style.overflow = previousOverflow
    }
  }, [isMenuOpen])

  const solid = isScrolled || isMenuOpen

  return (
    <>
      <header
        className={cn(
          'safe-area-top fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ease-out',
          solid
            ? 'border-b border-hairline bg-canvas/80 shadow-e1 backdrop-blur-xl'
            : 'border-b border-transparent bg-canvas',
        )}
      >
        <div className="container">
          <div className="flex h-[var(--header-h)] items-center justify-between gap-3">
            <Logo />

            {/* Navegação — desktop */}
            <nav aria-label="Navegação principal" className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {navLinks.map((link) => {
                  const active = isActive(pathname, link.href)
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={active ? 'page' : undefined}
                        className={cn(
                          'relative inline-flex h-11 items-center rounded-xl px-3.5 text-[0.9375rem] font-medium tracking-tight',
                          'transition-colors duration-200 ease-out',
                          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-raio-500',
                          active ? 'text-content' : 'text-content-muted hover:text-content',
                        )}
                      >
                        {link.label}
                        <span
                          aria-hidden
                          className={cn(
                            'absolute inset-x-3.5 bottom-1.5 h-0.5 rounded-full bg-raio-500 transition-opacity duration-200 ease-out',
                            active ? 'opacity-100' : 'opacity-0',
                          )}
                        />
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>

            {/* Ações */}
            <div className="flex items-center gap-1 sm:gap-1.5 lg:gap-2">
              <ThemeToggle className="hidden sm:inline-flex" />

              {/* WhatsApp — secundário, desktop */}
              <Button
                href={site.whatsapp.with(waMessages.orcamento)}
                external
                variant="outline"
                size="sm"
                className="hidden h-11 lg:inline-flex"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                WhatsApp
              </Button>

              {/* Telefone — CTA primário, desktop */}
              <Button
                href={site.phone.tel}
                variant="primary"
                size="sm"
                className="hidden h-11 lg:inline-flex"
              >
                <Phone className="h-4 w-4" aria-hidden />
                <span className="nums">{site.phone.display}</span>
              </Button>

              {/* Telefone — tablet: só ícone. Abaixo de md a MobileActionBar assume. */}
              <Button
                href={site.phone.tel}
                variant="primary"
                size="sm"
                aria-label={`Ligar agora para ${site.phone.display}`}
                className="hidden h-11 w-11 p-0 md:inline-flex lg:hidden"
              >
                <Phone className="h-[1.125rem] w-[1.125rem]" aria-hidden />
              </Button>

              <button
                ref={triggerRef}
                type="button"
                onClick={() => setIsMenuOpen((open) => !open)}
                aria-expanded={isMenuOpen}
                aria-controls={MENU_ID}
                aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                className={cn(
                  'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-content',
                  'transition-colors duration-200 ease-out hover:bg-surface',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-raio-500',
                  'lg:hidden',
                )}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" aria-hidden />
                ) : (
                  <Menu className="h-5 w-5" aria-hidden />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Drawer mobile */}
        <div
          ref={panelRef}
          id={MENU_ID}
          inert={!isMenuOpen}
          className={cn(
            // `absolute top-full` é obrigatório: como filho em fluxo, o painel
            // entrava na altura do <header>, que é fixed e pintado — o fundo
            // da barra cobria ~500px do hero mesmo com o menu fechado.
            'absolute inset-x-0 top-full origin-top',
            'max-h-[calc(100dvh-var(--header-h))] overflow-y-auto border-t border-hairline bg-canvas shadow-e3 lg:hidden',
            'transition-[opacity,transform] duration-200 ease-out motion-reduce:transition-none',
            isMenuOpen
              ? 'translate-y-0 opacity-100'
              : 'pointer-events-none -translate-y-2 opacity-0',
          )}
        >
              <div className="container py-5">
                <nav aria-label="Navegação principal">
                  <ul className="flex flex-col">
                    {navLinks.map((link) => {
                      const active = isActive(pathname, link.href)
                      return (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            aria-current={active ? 'page' : undefined}
                            className={cn(
                              'flex h-14 items-center justify-between rounded-xl px-3 text-base font-medium tracking-tight',
                              'transition-colors duration-200 ease-out',
                              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-raio-500',
                              active
                                ? 'text-content'
                                : 'text-content-muted hover:bg-surface hover:text-content',
                            )}
                          >
                            {link.label}
                            {active && (
                              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-raio-500" />
                            )}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </nav>

                <div className="mt-4 flex flex-col gap-2.5 border-t border-hairline pt-5">
                  <Button href={site.phone.tel} variant="primary" size="lg" className="w-full">
                    <Phone className="h-5 w-5" aria-hidden />
                    Ligar {site.phone.display}
                  </Button>
                  <Button
                    href={site.whatsapp.with(waMessages.orcamento)}
                    external
                    variant="outline"
                    size="lg"
                    className="w-full"
                  >
                    <MessageCircle className="h-5 w-5" aria-hidden />
                    Pedir orçamento no WhatsApp
                  </Button>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-hairline pt-4 sm:hidden">
                  <span className="text-sm text-content-subtle">Tema</span>
                  <ThemeToggle />
                </div>
          </div>
        </div>
      </header>

      {/* Fundo do drawer — fora do <header> de propósito: como filho dele,
          um z-index negativo pintaria por cima do próprio fundo da barra. */}
      <div
        aria-hidden
        onClick={closeMenu}
        className={cn(
          'fixed inset-0 z-[45] bg-ink-950/50 transition-opacity duration-200 ease-out lg:hidden',
          'motion-reduce:transition-none',
          isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      />

      {/* Compensa o header fixo. Vale para todas as rotas — nenhuma página
          precisa aplicar padding próprio. Inclui o recorte do notch. */}
      <div
        aria-hidden
        style={{
          height: 'calc(var(--header-h) + env(safe-area-inset-top, 0px))',
        }}
      />
    </>
  )
}
