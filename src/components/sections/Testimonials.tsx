/* TODO: confirmar depoimentos reais com o cliente — nomes, cidades e serviços abaixo
   vieram do site anterior e não têm origem verificável. Antes de publicar, trocar por
   depoimentos com autorização de uso ou por avaliações públicas reais do perfil do Google. */

import { Section, SectionHeading } from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import { site } from '@/lib/site'

interface Testimonial {
  id: number
  name: string
  /** Cidade/bairro informado pelo cliente. */
  location: string
  /** Serviço executado — dá contexto técnico à citação. */
  service: string
  text: string
}

/* Conteúdo textual preservado do site anterior. Nenhum cliente novo foi inventado. */
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maria Silva",
    location: "Guarulhos, SP",
    service: "Desentupimento de vaso sanitário",
    text:
      "Serviço excelente! Chegaram rapidamente e resolveram o problema do meu banheiro em poucos minutos. Equipe muito profissional e educada.",
  },
  {
    id: 2,
    name: "João Santos",
    location: "São Paulo, SP",
    service: "Desentupimento de esgoto",
    text:
      "Atendimento 24h realmente funciona! Tive uma emergência de madrugada e eles vieram imediatamente. Preço justo e serviço de qualidade.",
  },
  {
    id: 3,
    name: "Ana Oliveira",
    location: "Arujá, SP",
    service: "Limpeza de caixa d'água",
    text:
      "Já é a terceira vez que utilizo os serviços da Raio Desentupidora. Sempre pontuais, eficientes e com preços honestos. Recomendo!",
  },
  {
    id: 4,
    name: "Carlos Pereira",
    location: "Mairiporã, SP",
    service: "Desentupimento de rede coletiva",
    text:
      "Problema complexo na rede de esgoto do prédio foi resolvido com máxima eficiência. Profissionais capacitados e equipamentos modernos.",
  },
  {
    id: 5,
    name: "Fernanda Costa",
    location: "Caieiras, SP",
    service: "Desentupimento de pia",
    text:
      "Atendimento impecável! Chegaram no horário marcado, explicaram o problema e resolveram rapidamente. Empresa de confiança!",
  },
  {
    id: 6,
    name: "Roberto Lima",
    location: "Franco da Rocha, SP",
    service: "Desentupimento de ralo",
    text:
      "Excelente custo-benefício! Serviço rápido, eficiente e com garantia. A equipe é muito profissional e deixa tudo limpo após o trabalho.",
  },
]

export default function Testimonials() {
  return (
    <Section id="depoimentos" className="bg-surface">
      <SectionHeading
        eyebrow="Referências"
        title="Quem já chamou"
        description="Relatos de clientes atendidos em Guarulhos, São Paulo e cidades vizinhas, com o serviço executado em cada caso."
        align="center"
      />

      <ul className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, i) => (
          <Reveal as="li" key={item.id} delay={i % 3} className="flex">
            <figure className="flex h-full w-full flex-col">
              <span
                aria-hidden
                className="select-none font-serif text-[3.5rem] leading-[0.7] text-raio-500/25"
              >
                {'“'}
              </span>

              <blockquote className="mt-3 text-[0.9375rem] font-medium leading-relaxed text-content sm:text-base">
                {item.text}
              </blockquote>

              <figcaption className="mt-auto border-t border-hairline pt-5">
                <span className="block text-sm font-semibold text-content">{item.name}</span>
                <span className="mt-0.5 block text-sm text-content-muted">
                  {item.location} · {item.service}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>

      {/* Onde as avaliações podem ser conferidas. Texto neutro: sem nota média inventada,
          sem contagem de avaliações e sem link antes de confirmar o perfil correto.
          TODO: inserir o link do perfil do Google Meu Negócio quando o cliente confirmar. */}
      <Reveal className="mt-14 sm:mt-16">
        <div className="rounded-2xl border border-hairline bg-elevated p-6 sm:p-8">
          <p className="max-w-measure text-sm leading-relaxed text-content-muted">
            As avaliações públicas da {site.name} podem ser consultadas no perfil da empresa no
            Google, buscando por{' '}
            <span className="font-medium text-content">
              &ldquo;{site.name} {site.city}&rdquo;
            </span>
            . Preferimos indicar a fonte a publicar uma nota média aqui.
          </p>

          <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-hairline pt-6 sm:grid-cols-4">
            {site.commitments.map((commitment) => (
              <div key={commitment.label}>
                <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-content-subtle">
                  {commitment.label}
                </dt>
                <dd className="nums mt-1.5 text-lg font-semibold text-content">
                  {commitment.value}
                </dd>
                <dd className="mt-0.5 text-xs leading-relaxed text-content-subtle">
                  {commitment.detail}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </Section>
  )
}
