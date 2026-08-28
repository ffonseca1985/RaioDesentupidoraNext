import { ArrowRight, CalendarClock, FileText, UserRound } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { site, waMessages } from '@/lib/site'

/** Above the fold: no Reveal, only `.enter` (CSS, starts at first paint). */
const pillars = [
  {
    icon: CalendarClock,
    title: 'Janela programada',
    body: 'Execução no horário que a sua operação permite — noite, madrugada ou fim de semana.',
  },
  {
    icon: UserRound,
    title: 'Interlocutor único',
    body: 'Um responsável do diagnóstico ao relatório. Você não reexplica o problema a cada chamado.',
  },
  {
    icon: FileText,
    title: 'Serviço documentado',
    body: 'Nota fiscal, relatório do atendimento e garantia por escrito em todo serviço executado.',
  },
]

export default function EmpresasHero() {
  return (
    <section className="relative overflow-hidden bg-ink-950">
      <div aria-hidden className="absolute inset-0 bg-blueprint mask-fade-edges" />

      <div className="container relative py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          <Badge tone="onDark" className="enter">
            Atendimento corporativo — {site.region}
          </Badge>

          <h1
            className="enter mt-6 text-display-md sm:text-display-lg text-white"
            style={{ '--enter-delay': '60ms' } as React.CSSProperties}
          >
            Saneamento predial contratado, sem surpresa operacional.
          </h1>

          <p
            className="enter mt-6 text-lede text-white/70 max-w-measure"
            style={{ '--enter-delay': '120ms' } as React.CSSProperties}
          >
            Manutenção preventiva de esgoto, gordura e reservatório para condomínios, prédios
            comerciais, indústrias e food service. Periodicidade definida em contrato, execução em
            janela combinada e relatório técnico a cada visita.
          </p>

          <div
            className="enter mt-9 flex flex-col sm:flex-row gap-3 sm:items-center"
            style={{ '--enter-delay': '180ms' } as React.CSSProperties}
          >
            <Button
              href={site.whatsapp.with(waMessages.corporativo)}
              external
              size="lg"
              className="w-full sm:w-auto"
            >
              Falar com o comercial
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button href={site.phone.tel} variant="onDark" size="lg" className="w-full sm:w-auto">
              <span className="nums">{site.phone.display}</span>
            </Button>
          </div>

          <p
            className="enter mt-4 text-sm text-white/50"
            style={{ '--enter-delay': '220ms' } as React.CSSProperties}
          >
            Diagnóstico inicial e proposta sem custo. Emergência atendida {site.hours}.
          </p>
        </div>

        <ul
          className="enter mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3"
          style={{ '--enter-delay': '280ms' } as React.CSSProperties}
        >
          {pillars.map((pillar) => (
            <li key={pillar.title} className="bg-ink-950/80 p-6">
              <pillar.icon className="h-5 w-5 text-raio-400" aria-hidden />
              <p className="mt-4 text-base font-semibold text-white">{pillar.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{pillar.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
