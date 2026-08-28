import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Camera,
  Factory,
  FileText,
  House,
  MessageCircle,
  Phone,
  ScrollText,
  ShieldCheck,
  Truck,
  Waves,
  Wrench,
} from 'lucide-react'

import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { Section, SectionHeading } from '@/components/ui/Section'
import Badge, { LiveDot } from '@/components/ui/Badge'
import Reveal from '@/components/ui/Reveal'
import { site, waMessages } from '@/lib/site'

import Services from '@/components/sections/Services'
import Testimonials from '@/components/sections/Testimonials'
import ServiceArea from '@/components/sections/ServiceArea'
import ContactForm from '@/components/sections/ContactForm'
import FAQ from '@/components/sections/FAQ'

/* Faixa de confiança — critérios objetivos, verificáveis pelo cliente antes de contratar.
   TODO: confirmar com o cliente (uniforme identificado / frota e equipamento próprios). */
const trustPoints = [
  { icon: FileText, label: 'CNPJ ativo e nota fiscal em todo serviço' },
  { icon: BadgeCheck, label: 'Equipe uniformizada e identificada' },
  { icon: Truck, label: 'Equipamento próprio, sem terceirização' },
  { icon: ShieldCheck, label: 'Garantia por escrito no orçamento' },
]

const segments = [
  {
    id: 'residencial',
    icon: House,
    title: 'Residencial',
    summary:
      'Pia, ralo, vaso, caixa de gordura e ramal de esgoto entupidos — inclusive de madrugada e em feriado.',
    bullets: [
      'Atendimento imediato, 24h',
      'Diagnóstico antes de quebrar piso ou parede',
      'Preço fechado por serviço, não por hora',
    ],
    cta: { label: 'Chamar no WhatsApp', href: site.whatsapp.with(waMessages.emergencia), external: true },
    variant: 'outline' as const,
  },
  {
    id: 'condominios',
    icon: Building2,
    title: 'Condomínios',
    summary:
      'Prumada, ramal coletivo, ralo de garagem, caixa de gordura e limpeza de caixa d’água — com o síndico informado do início ao fim.',
    bullets: [
      'Atendimento programado fora do horário de pico',
      'Relatório da ocorrência e registro fotográfico',
      'Nota fiscal e interlocutor único para a administradora',
    ],
    cta: { label: 'Atendimento a condomínios', href: site.segments.condominios.href, external: false },
    variant: 'secondary' as const,
  },
  {
    id: 'empresas',
    icon: Factory,
    title: 'Empresas e Indústria',
    summary:
      'Rede enterrada, caixa de inspeção, fossa, separador de gordura e linhas de processo — onde a parada da operação custa mais que o serviço.',
    bullets: [
      'Contrato de manutenção preventiva com visita programada',
      'SLA de atendimento acordado em contrato',
      'Laudo técnico com inspeção por câmera',
    ],
    cta: { label: 'Falar sobre contrato', href: site.segments.empresas.href, external: false },
    variant: 'secondary' as const,
  },
]

const steps = [
  {
    n: '01',
    title: 'Contato',
    text: 'Você liga ou manda mensagem. Perguntamos o tipo de imóvel, o que está acontecendo e há quanto tempo — isso define qual equipe e qual equipamento saem.',
  },
  {
    n: '02',
    title: 'Diagnóstico no local',
    text: 'O técnico avalia antes de qualquer intervenção. Quando o ponto de obstrução não é evidente, inspecionamos por câmera em vez de abrir piso ou parede.',
  },
  {
    n: '03',
    title: 'Orçamento fechado',
    text: 'Escopo e preço por escrito antes de começar. Se o diagnóstico mudar o escopo, o serviço para e o novo valor é aprovado por você.',
  },
  {
    n: '04',
    title: 'Execução e garantia',
    text: 'Serviço executado, área entregue limpa, garantia por escrito e nota fiscal. Se o problema voltar dentro da garantia, voltamos sem custo.',
  },
]

const equipment = [
  {
    icon: Camera,
    title: 'Inspeção por câmera HD',
    text: 'Percorre a tubulação e mostra o ponto exato da obstrução, trincas, desalinhamento e infiltração de raiz. Evita quebra exploratória e serve de base para laudo técnico e para cobrança de terceiros.',
  },
  {
    icon: Waves,
    title: 'Hidrojateamento de alta pressão',
    text: 'Remove gordura, incrustação e raiz aderidas à parede do tubo, devolvendo o diâmetro original. É o que trata a reincidência: desobstruir sem limpar a parede do tubo traz o problema de volta em semanas.',
  },
  {
    icon: Wrench,
    title: 'Rotocleaner e molas rotativas',
    text: 'Rompe obstrução sólida e raiz em ramais longos e curvas fechadas, onde o jato sozinho não alcança. Usado em conjunto com o hidrojato em redes antigas.',
  },
]

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-ink-950">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-blueprint mask-fade-edges"
        />

        <div className="container relative py-16 sm:py-20 lg:py-28">
          <div className="max-w-4xl">
            <Badge tone="onDark" className="enter">
              <LiveDot />
              Plantão 24h · atendemos agora
            </Badge>

            <h1
              className="enter mt-6 text-display-lg text-white sm:text-display-xl"
              style={{ '--enter-delay': '60ms' } as React.CSSProperties}
            >
              Desentupimento e saneamento predial em Guarulhos e na Grande SP,{' '}
              <span className="gradient-text">24 horas</span>.
            </h1>

            <p
              className="enter mt-6 max-w-measure text-lede text-white/70"
              style={{ '--enter-delay': '120ms' } as React.CSSProperties}
            >
              Emergência em casa, prumada de condomínio ou rede industrial parada: equipe
              própria, diagnóstico antes de quebrar e orçamento fechado antes de iniciar o
              serviço.
            </p>

            <div
              className="enter mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ '--enter-delay': '180ms' } as React.CSSProperties}
            >
              <Button href={site.phone.tel} variant="primary" size="lg">
                <Phone className="h-5 w-5" aria-hidden />
                Ligar agora · {site.phone.display}
              </Button>

              <Button
                href={site.whatsapp.with(waMessages.emergencia)}
                external
                variant="onDark"
                size="lg"
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                WhatsApp
              </Button>
            </div>

            <div
              className="enter mt-5"
              style={{ '--enter-delay': '240ms' } as React.CSSProperties}
            >
              <Button href={site.segments.empresas.href} variant="onDarkGhost" size="md">
                Condomínios e empresas: contrato de manutenção
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </div>

          {/* Compromissos operacionais — a camada de confiança, em hairline */}
          <dl
            className="enter mt-14 grid grid-cols-2 gap-px border-y border-white/10 bg-white/10 sm:mt-16 lg:grid-cols-4"
            style={{ '--enter-delay': '300ms' } as React.CSSProperties}
          >
            {site.commitments.map((c) => (
              <div key={c.label} className="bg-ink-950 px-5 py-6">
                <dt className="text-eyebrow uppercase text-white/45">{c.label}</dt>
                <dd className="nums mt-2 text-xl font-semibold text-white sm:text-2xl">
                  {c.value}
                </dd>
                <dd className="mt-1 text-sm leading-snug text-white/55">{c.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Faixa de confiança ───────────────────────────────── */}
      <section aria-label="Condições comerciais" className="border-b border-hairline bg-canvas">
        <div className="container">
          <ul className="grid grid-cols-1 gap-x-8 gap-y-3 py-5 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((p) => (
              <li
                key={p.label}
                className="flex items-center gap-2.5 text-sm leading-snug text-content-muted"
              >
                <p.icon className="h-4 w-4 shrink-0 text-raio-600 dark:text-raio-400" aria-hidden />
                {p.label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Serviços ─────────────────────────────────────────── */}
      <Services />

      {/* ── Segmentos de atendimento ─────────────────────────── */}
      <Section id="segmentos" className="bg-surface">
        <SectionHeading
          eyebrow="Como atendemos"
          title="Cada tipo de imóvel tem um problema diferente"
          description="A obstrução de uma pia e a parada de uma rede coletiva não se resolvem do mesmo jeito — nem se contratam do mesmo jeito."
          align="center"
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {segments.map((s, i) => (
            <Reveal key={s.id} delay={i} className="h-full">
              <Card variant="elevated" hover className="flex h-full flex-col">
                <CardContent className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-hairline bg-surface">
                      <s.icon className="h-5 w-5 text-aqua-600 dark:text-aqua-400" aria-hidden />
                    </span>
                    <h3 className="text-xl font-semibold tracking-tight text-content">
                      {s.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-content-muted">
                    {s.summary}
                  </p>

                  <ul className="mt-5 space-y-2.5 border-t border-hairline pt-5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5 text-sm text-content-muted">
                        <ScrollText
                          className="mt-0.5 h-4 w-4 shrink-0 text-content-subtle"
                          aria-hidden
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 pt-1">
                    <Button
                      href={s.cta.href}
                      external={s.cta.external}
                      variant={s.variant}
                      size="md"
                      className="w-full"
                    >
                      {s.cta.label}
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Como funciona ────────────────────────────────────── */}
      <Section id="como-funciona" className="bg-canvas">
        <SectionHeading
          eyebrow="Como funciona"
          title="Quatro etapas, sem surpresa no final"
          description="Quem nunca contratou um desentupimento costuma temer duas coisas: a conta aberta e a quebradeira. O processo abaixo existe para eliminar as duas."
          align="center"
        />

        <ol className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i} className="border-t border-hairline pt-6">
              <span className="nums block text-display-sm leading-none text-raio-500/25" aria-hidden>
                {s.n}
              </span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-content">
                {s.title}
              </h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-content-muted">
                {s.text}
              </p>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* ── Capacidade técnica ───────────────────────────────── */}
      <Section id="equipamento" className="bg-surface">
        <SectionHeading
          eyebrow="Capacidade técnica"
          title="O equipamento define se o problema volta"
          description="Desobstruir é o mínimo. O que separa um serviço de um paliativo é diagnosticar a causa e devolver a tubulação ao diâmetro original."
          align="center"
        />

        <div className="grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline lg:grid-cols-3">
          {equipment.map((e, i) => (
            <Reveal key={e.title} delay={i} className="bg-elevated p-7 sm:p-8">
              <e.icon className="h-6 w-6 text-aqua-600 dark:text-aqua-400" aria-hidden />
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-content">
                {e.title}
              </h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-content-muted">
                {e.text}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={3}>
          <p className="mt-6 text-sm text-content-subtle">
            {/* TODO: confirmar com o cliente — equipamento próprio e operação sem terceirização. */}
            Equipamento próprio e operado pela nossa equipe. Para condomínios e indústria, a
            inspeção por câmera é entregue com laudo técnico.
          </p>
        </Reveal>
      </Section>

      {/* ── Prova social e cobertura ─────────────────────────── */}
      <Testimonials />
      <ServiceArea />
      <FAQ />
      <ContactForm />

      {/* ── Decisão final ────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-ink-950">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-blueprint mask-fade-edges"
        />

        <div className="container relative section">
          <div className="max-w-3xl">
            <Reveal>
              <span className="eyebrow mb-4 text-raio-400">
                <span className="h-px w-6 bg-raio-400/60" aria-hidden />
                Atendimento
              </span>
              <h2 className="text-display-sm text-white sm:text-display-md">
                Entupimento não melhora sozinho — e sai mais caro depois.
              </h2>
              <p className="mt-5 max-w-measure text-lede text-white/65">
                {site.hours}. Ligue e descreva o problema: você recebe o encaminhamento na hora
                e o orçamento fechado antes de qualquer serviço começar.
              </p>
            </Reveal>

            <Reveal delay={1} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={site.phone.tel} variant="primary" size="lg">
                <Phone className="h-5 w-5" aria-hidden />
                {site.phone.display}
              </Button>
              <Button
                href={site.whatsapp.with(waMessages.orcamento)}
                external
                variant="onDark"
                size="lg"
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                Pedir orçamento no WhatsApp
              </Button>
            </Reveal>

            <Reveal delay={2}>
              <p className="mt-6 text-sm text-white/50">
                Condomínio, administradora ou indústria?{' '}
                <a
                  href={site.segments.empresas.href}
                  className="font-medium text-white/80 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white hover:decoration-white/60"
                >
                  Ver contrato de manutenção preventiva
                </a>
                .
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
