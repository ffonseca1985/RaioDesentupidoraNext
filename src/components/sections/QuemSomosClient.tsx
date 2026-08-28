import {
  Search,
  FileText,
  Wrench,
  ClipboardCheck,
  Target,
  Compass,
  HeartHandshake,
  Receipt,
  IdCard,
  ShieldCheck,
  Phone,
  MessageCircle,
} from 'lucide-react'

import { Section, SectionHeading } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import Reveal from '@/components/ui/Reveal'
import { site, waMessages } from '@/lib/site'

/**
 * Página institucional (rota /quemsomos). É server component: não sobrou estado
 * nenhum depois que as revelações do framer-motion viraram `Reveal`.
 * O nome do arquivo e o default export ficam como estavam — `quemsomos/page.tsx`
 * importa por este caminho.
 */

/* Como o serviço acontece na prática — é isto que um síndico quer ler. */
const process = [
  {
    icon: Search,
    title: 'Diagnóstico no local',
    description:
      'O técnico identifica o ponto real do entupimento antes de propor qualquer coisa. Sintoma e causa raramente estão no mesmo lugar.',
  },
  {
    icon: FileText,
    title: 'Orçamento fechado',
    description:
      'Valor apresentado antes de iniciar, sem custo pela visita. Nada é executado sem sua aprovação.',
  },
  {
    icon: Wrench,
    title: 'Execução',
    description:
      'Trabalhamos pelos acessos existentes sempre que possível. Se for necessário intervir na estrutura, mostramos o motivo antes.',
  },
  {
    icon: ClipboardCheck,
    title: 'Verificação e garantia',
    description:
      'Testamos o escoamento na sua frente, limpamos a área e entregamos a garantia por escrito do que foi feito.',
  },
]

/* Missão, visão e valores já declarados pela empresa — texto preservado em substância. */
const principles = [
  {
    icon: Target,
    title: 'Missão',
    description:
      'Prestar serviços de desentupimento de forma ágil, eficiente e sustentável, resolvendo o problema do cliente na primeira visita sempre que possível.',
  },
  {
    icon: Compass,
    title: 'Visão',
    description:
      'Ser referência em saneamento predial na Grande São Paulo, reconhecida pela previsibilidade do atendimento e pela clareza do que cobra.',
  },
  {
    icon: HeartHandshake,
    title: 'Valores',
    description:
      'Dedicação, ética, respeito e responsabilidade social no exercício de cada atribuição — dentro e fora do imóvel do cliente.',
  },
]

/* O que sustenta a relação depois que o caminhão vai embora. */
const accountability = [
  {
    icon: Receipt,
    title: 'Nota fiscal em todo serviço',
    description:
      'Pessoa física ou jurídica, atendimento programado ou emergência de madrugada. Sem exceção.',
  },
  {
    icon: IdCard,
    title: 'Equipe identificada',
    description:
      'Você sabe quem entra no imóvel: profissional uniformizado e chamado confirmado antes da chegada.',
  },
  {
    icon: ShieldCheck,
    title: 'Garantia por escrito',
    description:
      'Documento com o serviço executado, o trecho atendido e o prazo de cobertura. Palavra dada não é garantia.',
  },
]

export default function QuemSomosClient() {
  return (
    <main>
      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden bg-ink-950 py-20 text-white sm:py-28">
        <div className="bg-blueprint mask-fade-edges absolute inset-0" aria-hidden />
        <div className="container relative">
          <div className="max-w-3xl">
            <div className="enter">
              <Badge tone="onDark">Institucional</Badge>
            </div>
            <h1
              className="enter mt-6 text-display-lg text-white"
              style={{ '--enter-delay': '60ms' } as React.CSSProperties}
            >
              Quem somos
            </h1>
            <p
              className="enter mt-6 max-w-measure text-lede text-white/70"
              style={{ '--enter-delay': '120ms' } as React.CSSProperties}
            >
              A {site.name} é uma empresa de {site.tagline.toLowerCase()} com base em{' '}
              {site.city} e atendimento em toda a {site.region}. Somos a equipe que
              atende o chamado — não uma central que repassa o serviço a terceiros.
            </p>
            <div
              className="enter mt-9 flex flex-col gap-3 sm:flex-row"
              style={{ '--enter-delay': '180ms' } as React.CSSProperties}
            >
              <Button href={site.phone.tel} size="lg">
                <Phone className="h-4 w-4" aria-hidden />
                {site.phone.display}
              </Button>
              <Button
                href={site.whatsapp.with(waMessages.orcamento)}
                external
                variant="onDark"
                size="lg"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Compromissos ---------------- */}
      <section className="border-b border-hairline bg-surface py-10 sm:py-12">
        <div className="container">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
            {site.commitments.map((item, i) => (
              <Reveal key={item.label} delay={i}>
                <dt className="eyebrow">{item.label}</dt>
                <dd className="mt-3 text-2xl font-semibold tracking-tight text-content nums sm:text-3xl">
                  {item.value}
                </dd>
                <dd className="mt-1 text-sm text-content-subtle">{item.detail}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------------- História ---------------- */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-raio-500/50" />
              Nossa história
            </span>
            <h2 className="mt-4 text-display-sm text-content sm:text-display-md">
              Uma operação de Guarulhos, feita para resolver na primeira visita
            </h2>
          </Reveal>

          <Reveal delay={1} className="space-y-5 text-content-muted">
            {/* TODO: confirmar com o cliente — ano de fundação e origem familiar */}
            <p>
              A <strong className="font-semibold text-content">{site.name}</strong> nasceu
              em 2009 como uma empresa familiar em {site.city}, com uma proposta simples:
              atender desentupimento de urgência a qualquer hora, com preço combinado antes
              de começar.
            </p>
            <p>
              O escopo cresceu junto com os chamados. Hoje cobrimos desentupimento
              residencial, predial e industrial, limpeza de caixa d&apos;água, caixa de
              gordura e fossa, além de manutenção programada para condomínios e empresas
              que não podem depender da sorte.
            </p>
            <p>
              O que não mudou foi o método: diagnosticar antes de vender, cobrar o que foi
              combinado e deixar registrado por escrito o que foi feito. É o que permite ser
              chamado de novo — e é assim que a maior parte do nosso trabalho aparece.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* ---------------- Como operamos ---------------- */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow="Como operamos"
          title="Quatro etapas, sem surpresa no meio"
          description="O mesmo procedimento numa pia de cozinha e numa prumada de dezesseis andares. Muda o equipamento, não o método."
          align="left"
        />

        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i}>
              <Card className="h-full p-6">
                <div className="flex items-center justify-between">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-aqua-50 text-aqua-700 dark:bg-aqua-950/50 dark:text-aqua-300"
                    aria-hidden
                  >
                    <step.icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold text-content-subtle nums">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-semibold tracking-tight text-content">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-content-muted">
                  {step.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* ---------------- Equipe e equipamento ---------------- */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-raio-500/50" />
              Equipe e equipamento
            </span>
            <h2 className="mt-4 text-display-sm text-content">
              Quem chega no seu endereço
            </h2>
            {/* TODO: confirmar com o cliente — composição das equipes e lista de equipamentos */}
            <p className="mt-5 max-w-measure text-content-muted">
              O atendimento é feito por técnicos próprios, com veículo e ferramenta
              dimensionados para o tipo de ocorrência. Chamado de emergência e manutenção
              programada seguem a mesma escala 24h — inclusive fim de semana e feriado.
            </p>
            <p className="mt-4 max-w-measure text-content-muted">
              Para redes prediais e industriais, o trabalho combina desobstrução mecânica e
              hidrojateamento, com inspeção do trecho quando o entupimento é recorrente:
              entupir de novo no mesmo ponto é sinal de causa estrutural, não de falta de
              limpeza.
            </p>
          </Reveal>

          <div className="space-y-4">
            {accountability.map((item, i) => (
              <Reveal key={item.title} delay={i}>
                <Card className="flex gap-4 p-6">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-raio-50 text-raio-700 dark:bg-raio-950/50 dark:text-raio-300"
                    aria-hidden
                  >
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold tracking-tight text-content">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-content-muted">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ---------------- Missão, visão, valores ---------------- */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow="Princípios"
          title="O que a empresa se compromete a ser"
          align="left"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {principles.map((value, i) => (
            <Reveal key={value.title} delay={i}>
              <Card variant="bordered" className="h-full p-6">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-elevated text-content-muted"
                  aria-hidden
                >
                  <value.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-semibold tracking-tight text-content">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-content-muted">
                  {value.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------------- CTA ---------------- */}
      <section className="relative overflow-hidden bg-ink-950 py-20 text-white sm:py-24">
        <div className="bg-blueprint mask-fade-edges absolute inset-0" aria-hidden />
        <div className="container relative">
          <Reveal className="max-w-3xl">
            <h2 className="text-display-sm text-white sm:text-display-md">
              Fale com a operação
            </h2>
            <p className="mt-5 max-w-measure text-lede text-white/65">
              Emergência agora ou contrato de manutenção para o próximo ano — o mesmo número
              atende os dois. {site.hours}.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={site.phone.tel} size="lg">
                <Phone className="h-4 w-4" aria-hidden />
                Ligar: {site.phone.display}
              </Button>
              <Button
                href={site.whatsapp.with(waMessages.corporativo)}
                external
                variant="onDark"
                size="lg"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Falar sobre contrato
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
