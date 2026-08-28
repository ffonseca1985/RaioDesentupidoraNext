import { cn } from '@/lib/utils'

type Tone = 'neutral' | 'raio' | 'aqua' | 'emergency' | 'onDark'

const tones: Record<Tone, string> = {
  neutral: "bg-surface text-content-muted border-hairline",
  raio: "bg-raio-50 text-raio-800 border-raio-200 dark:bg-raio-950/50 dark:text-raio-300 dark:border-raio-900",
  aqua: "bg-aqua-50 text-aqua-800 border-aqua-200 dark:bg-aqua-950/50 dark:text-aqua-300 dark:border-aqua-900",
  emergency: "bg-emergency-50 text-emergency-700 border-emergency-200 dark:bg-emergency-950/50 dark:text-emergency-300 dark:border-emergency-900",
  onDark: "bg-white/[0.07] text-white/80 border-white/15 backdrop-blur-md",
}

export default function Badge({
  tone = 'neutral',
  className,
  children,
}: {
  tone?: Tone
  className?: string
  children: React.ReactNode
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-tight",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  )
}

/** Live "operating now" dot — used in the header and hero. */
export function LiveDot({ className }: { className?: string }) {
  return (
    <span className={cn("relative flex h-2 w-2 shrink-0", className)}>
      <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-400" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
    </span>
  )
}
