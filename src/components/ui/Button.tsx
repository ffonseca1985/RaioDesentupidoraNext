"use client"

import { forwardRef } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'onDark' | 'onDarkGhost'
type Size = 'sm' | 'md' | 'lg' | 'xl'

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-xl font-semibold tracking-tight " +
  "transition-all duration-200 ease-out select-none " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-raio-500 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas " +
  "disabled:opacity-55 disabled:pointer-events-none " +
  "active:translate-y-px"

const variants: Record<Variant, string> = {
  /* The single highest-intent action on any screen. Lightning amber. */
  primary:
    "bg-raio-500 text-ink-950 shadow-raio hover:bg-raio-400 hover:shadow-e3 hover:-translate-y-0.5",
  secondary:
    "bg-ink-950 text-white shadow-e2 hover:bg-ink-900 hover:shadow-e3 hover:-translate-y-0.5 dark:bg-white dark:text-ink-950 dark:hover:bg-ink-50",
  outline:
    "border border-hairline bg-elevated text-content hover:border-ink-300 hover:bg-surface dark:hover:border-ink-700",
  ghost:
    "text-content-muted hover:text-content hover:bg-surface",
  danger:
    "bg-emergency-600 text-white shadow-e2 hover:bg-emergency-500 hover:-translate-y-0.5",
  /* For placement over the dark hero / dark CTA bands */
  onDark:
    "bg-white/[0.08] text-white border border-white/20 backdrop-blur-md hover:bg-white/[0.16] hover:border-white/35 focus-visible:ring-offset-ink-950",
  onDarkGhost:
    "text-white/85 hover:text-white hover:bg-white/[0.08] focus-visible:ring-offset-ink-950",
}

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-[3.25rem] px-7 text-base",
  xl: "h-[3.75rem] px-9 text-lg",
}

interface CommonProps {
  variant?: Variant
  size?: Size
  isLoading?: boolean
  className?: string
  children?: React.ReactNode
  /** Renders an anchor instead of a button. Use this for tel:/wa.me/route links —
   *  never nest an <a> inside a <Button>. */
  href?: string
  external?: boolean
}

type ButtonProps = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps>

const Spinner = () => (
  <span
    aria-hidden
    className="h-4 w-4 shrink-0 animate-spin rounded-full border-2 border-current border-t-transparent opacity-70"
  />
)

export const Button = forwardRef<HTMLButtonElement & HTMLAnchorElement, ButtonProps>(
  (
    { className, variant = 'primary', size = 'md', isLoading, children, href, external, ...props },
    ref
  ) => {
    const classes = cn(base, variants[variant], sizes[size], className)

    if (href) {
      const isRoute = href.startsWith('/') || href.startsWith('#')
      const rel = external ? 'noopener noreferrer' : undefined
      const target = external ? '_blank' : undefined

      if (isRoute && !href.startsWith('#')) {
        return (
          <Link ref={ref} href={href} className={classes} {...(props as Record<string, unknown>)}>
            {children}
          </Link>
        )
      }
      return (
        <a ref={ref} href={href} target={target} rel={rel} className={classes} {...(props as Record<string, unknown>)}>
          {children}
        </a>
      )
    }

    return (
      <button
        ref={ref}
        className={classes}
        disabled={isLoading || (props as React.ButtonHTMLAttributes<HTMLButtonElement>).disabled}
        aria-busy={isLoading || undefined}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {isLoading && <Spinner />}
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"
