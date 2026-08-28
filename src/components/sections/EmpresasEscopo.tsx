import { Camera, Droplets, GaugeCircle, Layers, Truck, Utensils, Waves } from 'lucide-react'
import { Section, SectionHeading } from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'

const servicos = [
  {
    icon: GaugeCircle,
    titulo: 'Hidrojateamento de alta pressão',
    body: 'Água sob pressão remove a camada aderida à parede da tubulação — gordura solidificada, sedimento, raiz fina. Diferente do cabo rotativo, que abre um furo na obstrução, o jato devolve o diâmetro útil do tubo. É o serviço-base de qualquer plano preventivo em rede predial e industrial.',
  },
  {
    icon: Camera,
    titulo: 'Videoinspeção com câmera',
    body: 'Câmera percorre a tubulação e mostra onde está o problema e qual é a sua natureza: entupimento, trecho rompido, contraflecha, invasão de raiz ou ligação irregular. Evita quebrar piso por suposição e é o que transforma "entope sempre" em uma causa identificável.',
  },
  {
    icon: Utensils,
    titulo: 'Limpeza de caixa de gordura',
    body: 'Remoção e sucção do material acumulado em caixas de cozinha coletiva, praça de alimentação, restaurante e copa corporativa. Caixa saturada é a origem mais comum de odor no salão, refluxo em pia e apontamento em vistoria sanitária.',
  },
  {
    icon: Layers,
    titulo: 'Limpeza de caixa de esgoto e de passagem',
    body: 'Limpeza das caixas de inspeção e de passagem que interligam a rede do empreendimento até a ligação pública. É onde o acúmulo se instala silenciosamente antes de virar refluxo nos andares baixos.',
  },
  {
    icon: Droplets,
    titulo: 'Limpeza e higienização de reservatório',
    body: 'Esvaziamento, remoção do sedimento de fundo, escovação das paredes e higienização de caixas d’água e cisternas. É item de rotina de manutenção predial e um dos primeiros documentos cobrados em fiscalização de água potável.',
  },
  {
    icon: Truck,
    titulo: 'Sucção e limpa-fossa',
    body: 'Esgotamento de fossas, sumidouros e poços de efluente com caminhão a vácuo, com retirada do resíduo do local. Indicado onde não há rede pública ou onde o volume da operação exige esvaziamento programado.',
  },
  {
    icon: Waves,
    titulo: 'Desobstrução de coluna e prumada',
    body: 'Intervenção na tubulação vertical que atende vários pavimentos — a causa típica do entupimento que reaparece sempre nos mesmos andares. Tratada por prumada, com identificação do trecho responsável, e não apartamento por apartamento.',
  },
]

export default function EmpresasEscopo() {
  return (
    <Section id="escopo" className="bg-surface">
      <SectionHeading
        eyebrow="Escopo técnico"
        align="left"
        title="O que entra no plano e o que cada serviço resolve"
        description="A composição varia conforme o diagnóstico. Nem todo prédio precisa de tudo — e nenhum plano deveria cobrar por uma frente que a operação não gera."
      />

      <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {servicos.map((servico, i) => (
          <Reveal
            key={servico.titulo}
            as="li"
            delay={i % 3}
            className="rounded-2xl border border-hairline bg-elevated p-6 sm:p-7"
          >
            <servico.icon className="h-6 w-6 text-aqua-600 dark:text-aqua-400" aria-hidden />
            <h3 className="mt-5 text-lg font-semibold leading-snug text-content">{servico.titulo}</h3>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-content-muted">{servico.body}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
