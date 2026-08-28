import { cn } from '@/lib/utils'

interface RevealProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  /** Stagger index. Multiplied by 70ms. Keep under ~6 or the last item feels late. */
  delay?: number
  as?: 'div' | 'li' | 'section' | 'article' | 'span' | 'header'
}

/**
 * Scroll reveal — pure CSS, zero JS on the render path.
 *
 * Renders visible markup. The engine in `bootScript` (inline, pre-paint) adds
 * `html.js`, which is what actually arms the hidden state, then adds
 * `.is-visible` on intersection. So the page never depends on React hydration
 * to become readable, and reduced-motion users skip the whole mechanism.
 *
 * This is a server component on purpose — do not add "use client".
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
  style,
  ...props
}: RevealProps) {
  return (
    <Tag
      className={cn('reveal', className)}
      style={delay ? ({ '--reveal-delay': `${delay * 70}ms`, ...style } as React.CSSProperties) : style}
      {...props}
    >
      {children}
    </Tag>
  )
}
