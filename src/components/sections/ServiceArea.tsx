import { MapPin } from 'lucide-react'

import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Section, SectionHeading } from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import { site, waMessages } from '@/lib/site'

/* TODO: confirmar com o cliente — endereço da base operacional e a lista de bairros de
   Guarulhos / zonas de São Paulo. Bairros vieram do site anterior e das páginas locais já
   publicadas; se algum não for atendido, remover antes de indexar. */

interface Coverage {
  /** Título indexável da região. */
  name: string
  /** Frase real sobre como a região é atendida — não repetir "atendimento rápido". */
  note: string
  places: string[]
}

const coverage: Coverage[] = [
  {
    name: "Guarulhos e bairros",
    note:
      "Base operacional da empresa. É a região com o menor deslocamento e onde os atendimentos noturnos e de fim de semana saem primeiro.",
    places: [
      "Parque Continental",
      "Vila Galvão",
      "Bom Clima",
      "Picanço",
      "Jardim São Paulo",
      "Taboão",
      "Bonsucesso",
      "Cumbica",
      "Vila Augusta",
      "Pimentas",
    ],
  },
  {
    name: "São Paulo — Zona Norte",
    note:
      "Atendimento residencial e de condomínio na faixa entre a Marginal Tietê e a Serra da Cantareira.",
    places: ["Santana", "Tucuruvi", "Vila Maria", "Casa Verde", "Jaçanã", "Vila Guilherme"],
  },
  {
    name: "São Paulo — Zona Leste",
    note:
      "Cobertura para imóveis residenciais, comércio de rua e cozinhas industriais da região.",
    places: ["Penha", "Tatuapé", "Itaquera", "São Miguel Paulista", "Vila Matilde", "Ermelino Matarazzo"],
  },
  {
    name: "Vetor norte metropolitano",
    note:
      "Cidades vizinhas a Guarulhos, atendidas com a mesma equipe e o mesmo padrão de orçamento fechado.",
    places: ["Arujá", "Mairiporã", "Caieiras", "Franco da Rocha", "Santa Isabel"],
  },
  {
    name: "Alto Tietê",
    note:
      "Região leste metropolitana. Para fossa e sucção, o atendimento costuma ser agendado por causa do porte do equipamento.",
    places: ["Mogi das Cruzes", "Suzano", "Ferraz de Vasconcelos", "Poá", "Itaquaquecetuba"],
  },
  {
    name: "Bragantina e Serra",
    note:
      "Atendimento mediante consulta de agenda, com prioridade para limpeza de reservatório e limpa fossa programados.",
    places: [
      "Atibaia",
      "Bom Jesus dos Perdões",
      "Nazaré Paulista",
      "Igaratá",
      "Piracaia",
      "Joanópolis",
      "Vargem",
      "Tuiuti",
    ],
  },
]

export default function ServiceArea() {
  return (
    <Section id="area-atuacao">
      <SectionHeading
        eyebrow="Cobertura"
        title="Onde a Raio Desentupidora atende"
        description="Guarulhos, São Paulo capital e cidades da Grande São Paulo. A lista abaixo é a área em que operamos de fato — não é uma promessa de mapa."
        align="center"
      />

      {/* Compromisso operacional — texto único vindo de site.commitments */}
      <Reveal>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-6 rounded-2xl border border-hairline bg-elevated p-6 sm:p-8 lg:grid-cols-4">
          {site.commitments.map((commitment) => (
            <div key={commitment.label}>
              <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-content-subtle">
                {commitment.label}
              </dt>
              <dd className="nums mt-1.5 text-xl font-semibold text-content">{commitment.value}</dd>
              <dd className="mt-1 text-xs leading-relaxed text-content-subtle">
                {commitment.detail}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>

      {/* Regiões — headings reais e texto indexável, não só chips */}
      <div className="mt-12 sm:mt-16">
        <ul className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coverage.map((region, i) => (
            <Reveal as="li" key={region.name} delay={i % 3} className="flex">
              <Card className="flex h-full w-full flex-col p-6 sm:p-7">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-aqua-50 dark:bg-aqua-950/40">
                    <MapPin aria-hidden className="h-4 w-4 text-aqua-600 dark:text-aqua-400" />
                  </span>
                  <h3 className="mt-1 text-base font-semibold text-content">{region.name}</h3>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-content-muted">{region.note}</p>

                <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-1.5 border-t border-hairline pt-4 text-sm text-content-muted">
                  {region.places.map((place, index) => (
                    <li key={place} className="flex items-center gap-2">
                      <span>{place}</span>
                      {index < region.places.length - 1 && (
                        <span aria-hidden className="text-content-subtle">
                          ·
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </ul>
      </div>

      {/* Base operacional + CTA */}
      <Reveal className="mt-12 sm:mt-16">
        <div className="grid grid-cols-1 gap-8 rounded-2xl border border-hairline bg-surface p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12 lg:p-10">
          <div>
            <h3 className="text-xl font-semibold text-content">Não encontrou seu bairro?</h3>
            <p className="mt-3 max-w-measure text-sm leading-relaxed text-content-muted">
              A lista cobre as regiões de rotina. Fora delas, atendemos mediante consulta de
              agenda — principalmente limpeza de reservatório e limpa fossa, que são
              programados. Diga o endereço e o problema, e respondemos se conseguimos ir e em
              quanto tempo.
            </p>
            <address className="mt-5 border-t border-hairline pt-4 text-sm not-italic leading-relaxed text-content-subtle">
              Base operacional: Rua Nobel Almeida Kuke, 485 — {site.city}/SP, 07084-210
            </address>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0 lg:flex-col">
            <Button
              href={site.whatsapp.with(waMessages.orcamento)}
              external
              variant="secondary"
              size="md"
              className="lg:w-full"
            >
              Consultar meu endereço
            </Button>
            <Button href={site.phone.tel} variant="outline" size="md" className="nums lg:w-full">
              {site.phone.display}
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
