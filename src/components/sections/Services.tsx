import type { LucideIcon } from 'lucide-react'
import {
  Waves,
  Droplets,
  ShowerHead,
  Container,
  Droplet,
  Truck,
  Home,
  Building2,
  Factory,
} from 'lucide-react'

import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Section, SectionHeading } from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import { site, waMessages } from '@/lib/site'

/* TODO: confirmar com o cliente — método, equipamentos e itens listados em "Incluído"
   descrevem o padrão de execução declarado pela empresa. Emissão de laudo de limpeza de
   reservatório e comprovante de destinação de resíduo precisam de confirmação documental. */

interface ServiceItem {
  icon: LucideIcon
  title: string
  /** O que o cliente percebe antes de ligar. */
  symptom: string
  /** Como o serviço é executado — o que diferencia de quem só "joga produto". */
  method: string
  /** O que está incluído no preço fechado. */
  includes: string[]
}

const services: ServiceItem[] = [
  {
    icon: Waves,
    title: "Esgoto — rede predial e coletiva",
    symptom:
      "Refluxo nos ralos do térreo, odor persistente na área de serviço ou mais de um ponto entupido ao mesmo tempo. Quando vários aparelhos param juntos, a obstrução está no ramal coletivo, não na louça.",
    method:
      "Inspeção das caixas de passagem e de gordura antes de abrir qualquer ponto. Hidrojateamento de alta pressão ou rotativa elétrica, escolhidos pelo diâmetro e pelo material da tubulação.",
    includes: [
      "Localização do trecho obstruído antes de iniciar",
      "Teste de escoamento com o cliente presente",
      "Garantia por escrito do trecho desobstruído",
    ],
  },
  {
    icon: Droplets,
    title: "Pia e ramal de cozinha",
    symptom:
      "Água que desce devagar e volta, gorgolejo no sifão, cheiro de gordura. Quase sempre é gordura saturada no ramal horizontal, não na válvula.",
    method:
      "Rotativa flexível introduzida pelo próprio ramal, sem quebra de piso, parede ou bancada. Se a gordura já endureceu no trecho, hidrojateamento de bico reduzido.",
    includes: [
      "Sem quebra de piso, parede ou bancada",
      "Retirada do resíduo removido do ramal",
      "Orientação sobre a causa do entupimento",
    ],
  },
  {
    icon: ShowerHead,
    title: "Vaso sanitário e ramal de banheiro",
    symptom:
      "Descarga que sobe, esvazia devagar ou não desce. Normalmente há objeto, papel compactado ou resíduo endurecido preso na curva do sifão da louça.",
    method:
      "Equipamento próprio para louça sanitária, sem alavancar a peça e sem soda cáustica — produto agressivo trinca a cerâmica e ataca a vedação do anel.",
    includes: [
      "Sem retirar o vaso, quando o acesso permite",
      "Teste de descarga antes de encerrar",
      "Higienização da área ao final do serviço",
    ],
  },
  {
    icon: Container,
    title: "Ralos, calhas e caixa de gordura",
    symptom:
      "Poça parada no box, ralo de garagem transbordando em dia de chuva, caixa de gordura acima do nível normal e odor no quintal.",
    method:
      "Limpeza mecânica do ralo e do ramal, sucção e raspagem da caixa de gordura, conferência da declividade e da vedação da tampa de inspeção.",
    includes: [
      "Retirada e destinação do resíduo",
      "Verificação dos ramais ligados ao mesmo ponto",
      "Periodicidade recomendada de limpeza",
    ],
  },
  {
    icon: Droplet,
    title: "Limpeza de caixa d'água e reservatório",
    symptom:
      "Água com cor ou sabor alterados, sedimento no fundo, ou simplesmente o prazo semestral vencido — é a manutenção que a vigilância sanitária cobra do condomínio.",
    method:
      "Esvaziamento, remoção do sedimento, escovação sem abrasivo e desinfecção com solução clorada em concentração controlada, seguida de enxágue e descarte da primeira água.",
    includes: [
      "Certificado de limpeza para apresentação à vigilância",
      "Verificação de tampa, extravasor e vedação",
      "Registro fotográfico antes e depois",
    ],
  },
  {
    icon: Truck,
    title: "Limpa fossa e sucção de resíduos",
    symptom:
      "Fossa transbordando, retorno nos ralos internos, mau cheiro constante no terreno. Em imóvel sem ligação na rede pública, é o sinal de que o volume saturou.",
    method:
      "Caminhão a vácuo dimensionado para o volume do reservatório, com sucção do lodo e lavagem interna. Pode ser emergencial ou entrar em calendário de esvaziamento.",
    includes: [
      "Destinação do resíduo em estação licenciada",
      "Comprovante de coleta e destinação",
      "Agenda preventiva quando o consumo é recorrente",
    ],
  },
]

interface SegmentItem {
  icon: LucideIcon
  title: string
  description: string
  points: string[]
  cta: { label: string; href: string; external?: boolean }
}

const segments: SegmentItem[] = [
  {
    icon: Home,
    title: "Residencial",
    description:
      "Casa ou apartamento com problema agora. A prioridade é chegar, diagnosticar e fechar preço antes de encostar na tubulação.",
    points: [
      "Orçamento fechado antes de iniciar",
      "Atendimento 24h, inclusive feriados",
      "Sem quebra desnecessária de piso ou parede",
    ],
    cta: {
      label: "Pedir orçamento no WhatsApp",
      href: site.whatsapp.with(waMessages.orcamento),
      external: true,
    },
  },
  {
    icon: Building2,
    title: "Condomínios e comércio",
    description:
      "Síndico, zelador e gestor predial precisam de previsibilidade: mesma equipe, relatório do que foi feito e nota fiscal.",
    points: [
      "Contrato de manutenção preventiva",
      "Relatório técnico por atendimento",
      "Nota fiscal e emissão para pessoa jurídica",
    ],
    cta: { label: "Ver atendimento para empresas", href: "/empresas" },
  },
  {
    icon: Factory,
    title: "Industrial",
    description:
      "Galpão, indústria e cozinha de grande porte, onde parar a operação custa mais do que o serviço. Atendimento programado fora do turno.",
    points: [
      "Hidrojateamento de alto desempenho",
      "Atendimento programado fora do horário produtivo",
      "Registro documental para auditoria e conformidade",
    ],
    cta: { label: "Falar sobre contrato", href: "/empresas" },
  },
]

const labelClass =
  "text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-content-subtle"

function Bullet() {
  return (
    <span
      aria-hidden
      className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-raio-500"
    />
  )
}

interface ServicesProps {
  /**
   * `section` (padrão) — bloco da home, sobre a faixa alternada.
   * `page` — conteúdo principal de uma página de serviços; adiciona a faixa de contato final.
   */
  variant?: 'section' | 'page'
}

export default function Services({ variant = 'section' }: ServicesProps) {
  const isPage = variant === 'page'

  return (
    <Section id="servicos" className={isPage ? undefined : "bg-surface"}>
      <SectionHeading
        eyebrow="Serviços"
        title={
          isPage
            ? "Todos os serviços de desentupimento e saneamento predial"
            : "O que fazemos, e como fazemos"
        }
        description="Desobstrução, limpeza de reservatório e sucção de resíduos em Guarulhos e na Grande São Paulo. Diagnóstico antes do orçamento, preço fechado antes da execução."
        align="center"
      />

      <ul className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal as="li" key={service.title} delay={i % 3} className="flex">
            <Card hover className="flex h-full w-full flex-col p-6 sm:p-7">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-aqua-50 dark:bg-aqua-950/40">
                <service.icon aria-hidden className="h-5 w-5 text-aqua-600 dark:text-aqua-400" />
              </span>

              <h3 className="mt-5 text-lg font-semibold text-content">{service.title}</h3>

              <p className="mt-3 text-sm leading-relaxed text-content-muted">{service.symptom}</p>

              <div className="mt-5 border-t border-hairline pt-4">
                <p className={labelClass}>Como resolvemos</p>
                <p className="mt-2 text-sm leading-relaxed text-content-muted">{service.method}</p>
              </div>

              <div className="mt-5 border-t border-hairline pt-4">
                <p className={labelClass}>Incluído</p>
                <ul className="mt-2.5 space-y-2">
                  {service.includes.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-content-muted">
                      <Bullet />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </Reveal>
        ))}
      </ul>

      {/* ---- Segmentos atendidos ------------------------------------------------ */}
      <div className="mt-20 sm:mt-24">
        <Reveal className="mb-10 max-w-measure sm:mb-12">
          <h3 className="text-display-sm text-content">Quem atendemos</h3>
          <p className="mt-4 text-content-muted">
            O mesmo serviço técnico, com rotas de contratação diferentes: emergência residencial
            resolve por telefone; condomínio e indústria resolvem por contrato.
          </p>
        </Reveal>

        <ul className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3">
          {segments.map((segment, i) => (
            <Reveal as="li" key={segment.title} delay={i} className="flex">
              <Card className="flex h-full w-full flex-col p-6 sm:p-7">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-aqua-50 dark:bg-aqua-950/40">
                  <segment.icon aria-hidden className="h-5 w-5 text-aqua-600 dark:text-aqua-400" />
                </span>

                <h4 className="mt-5 text-lg font-semibold text-content">{segment.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-content-muted">{segment.description}</p>

                <ul className="mt-5 space-y-2 border-t border-hairline pt-4">
                  {segment.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-content-muted">
                      <Bullet />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <Button
                    href={segment.cta.href}
                    external={segment.cta.external}
                    variant="outline"
                    size="md"
                    className="w-full"
                  >
                    {segment.cta.label}
                  </Button>
                </div>
              </Card>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-6">
          <p className="text-sm text-content-muted">
            Emergência residencial agora?{' '}
            <a
              href={site.phone.tel}
              className="nums font-semibold text-raio-600 underline-offset-4 hover:underline dark:text-raio-400"
            >
              {site.phone.display}
            </a>{' '}
            — atendimento 24h, todos os dias.
          </p>
        </Reveal>
      </div>

      {/* ---- Faixa de contato: só nas páginas dedicadas, para não duplicar o CTA da home ---- */}
      {isPage && (
        <Reveal className="mt-20 sm:mt-24">
          <div className="rounded-2xl border border-hairline bg-ink-950 p-8 sm:p-10 lg:p-12">
            <h3 className="text-display-sm text-white">Precisa resolver hoje?</h3>
            <p className="mt-4 max-w-measure text-white/65">
              Atendimento 24h em Guarulhos e na Grande São Paulo. Orçamento sem custo, fechado
              antes de iniciar o serviço, e garantia por escrito do que for executado.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={site.phone.tel} size="lg" className="nums">
                Ligar {site.phone.display}
              </Button>
              <Button
                href={site.whatsapp.with(waMessages.emergencia)}
                external
                variant="onDark"
                size="lg"
              >
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </Reveal>
      )}
    </Section>
  )
}
