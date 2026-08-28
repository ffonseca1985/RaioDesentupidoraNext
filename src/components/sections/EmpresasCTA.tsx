import { ArrowRight, Mail, Phone } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { site, waMessages } from '@/lib/site'

export default function EmpresasCTA() {
  return (
    <section id="contato-comercial" className="relative overflow-hidden bg-ink-950">
      <div aria-hidden className="absolute inset-0 bg-blueprint mask-fade-edges" />

      <div className="container relative section">
        <Reveal className="max-w-3xl">
          <span className="eyebrow text-raio-400">
            <span aria-hidden className="h-px w-6 bg-raio-400/60" />
            Contato comercial
          </span>
          <h2 className="mt-5 text-display-sm sm:text-display-md text-white">
            Comece pelo diagnóstico. A proposta sai do que for encontrado.
          </h2>
          <p className="mt-5 text-lede text-white/65">
            Visita técnica sem custo, escopo e periodicidade por escrito, valor fechado antes de
            qualquer execução. Se o plano não fizer sentido para a sua operação, você fica com o
            diagnóstico do mesmo jeito.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
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
              <Phone className="h-4 w-4" aria-hidden />
              <span className="nums">{site.phone.display}</span>
            </Button>
          </div>

          <p className="mt-6 flex flex-wrap items-center gap-2 text-sm text-white/50">
            <Mail className="h-4 w-4" aria-hidden />
            <span>Cotação por e-mail e envio de documentação:</span>
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent('Contrato de manutenção preventiva')}`}
              className="inline-flex min-h-11 items-center break-all font-medium text-white/80 underline underline-offset-4 transition-colors hover:text-raio-400"
            >
              {site.email}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
