import { cn } from '@/lib/utils'
import Reveal from './Reveal'

interface SectionHeadingProps {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: 'left' | 'center'
  onDark?: boolean
  className?: string
}

/** The one heading block every section uses. Keeps vertical rhythm identical site-wide. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  onDark = false,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mb-12 sm:mb-16",
        align === 'center' ? "text-center mx-auto max-w-3xl" : "max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <span className={cn("eyebrow mb-4", onDark && "text-raio-400")}>
          <span className={cn("h-px w-6", onDark ? "bg-raio-400/60" : "bg-raio-500/50")} />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-display-sm sm:text-display-md",
          onDark ? "text-white" : "text-content"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-lede",
            align === 'center' && "mx-auto",
            onDark ? "text-white/65" : "text-content-muted"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}

export function Section({
  id,
  className,
  children,
}: {
  id?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className={cn("section", className)}>
      <div className="container">{children}</div>
    </section>
  )
}
