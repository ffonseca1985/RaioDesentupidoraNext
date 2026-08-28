import { Building2, Factory, Landmark } from 'lucide-react'
import { Section, SectionHeading } from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { site, waMessages } from '@/lib/site'

type Perfil = {
  id: string
  icon: typeof Building2
  label: string
  title: string
  situacao: string
  execucao: string[]
  formato: string
}

const perfis: Perfil[] = [
  {
    id: 'condominios',
    icon: Building2,
    label: 'Condomínios e administradoras',
    title: 'A mesma prumada entope todo mês e ninguém tem o histórico',
    situacao:
      'O refluxo aparece sempre nos mesmos andares. O síndico descobre pelo grupo do prédio, aciona quem estiver disponível naquela noite e paga o preço de emergência. Na assembleia seguinte, precisa justificar um gasto recorrente sem laudo, sem histórico e sem comparação de fornecedor.',
    execucao: [
      'Videoinspeção da prumada e do ramal para localizar o ponto real da obstrução — raiz, gordura solidificada, desnível ou trecho danificado.',
      'Hidrojateamento programado das colunas de esgoto e da rede das áreas comuns.',
      'Limpeza da caixa de gordura coletiva, caixas de passagem e limpeza e higienização do reservatório.',
      'Relatório por atendimento, com registro do que foi encontrado e do que foi executado.',
    ],
    formato:
      'Contrato com periodicidade definida por prumada e por área comum. Agenda fechada com a administradora, aviso prévio aos moradores e relatório consolidado para a prestação de contas em assembleia.',
  },
  {
    id: 'predios-comerciais',
    icon: Landmark,
    label: 'Prédios comerciais, saúde, educação e varejo',
    title: 'Banheiro interditado no horário de pico é operação parada',
    situacao:
      'Shopping, escola, hospital, laje corporativa: não existe janela para abrir uma caixa de inspeção no meio do expediente. O gestor predial precisa de um prazo de resposta que ele consiga prometer internamente, de uma equipe que saiba circular na operação e de um registro do serviço para o dossiê do prédio.',
    execucao: [
      'Mapeamento da rede de esgoto e águas pluviais do empreendimento, com videoinspeção dos trechos críticos.',
      'Hidrojateamento e desobstrução em janela noturna, de madrugada ou de fim de semana.',
      'Limpeza de caixa de gordura das praças de alimentação e copas, e higienização de reservatório.',
      'Atendimento por chamado com prazo de resposta acordado em contrato.',
    ],
    formato:
      'Plano por unidade ou por portfólio de unidades, com janela de execução acordada, equipe identificada e alinhada ao procedimento de acesso do prédio, e relatório por ocorrência para auditoria interna.',
  },
  {
    id: 'industria',
    icon: Factory,
    label: 'Indústria, cozinha industrial e food service',
    title: 'Gordura saturada vira odor no salão e risco em vistoria',
    situacao:
      'Restaurante, padaria, cozinha industrial e planta fabril geram carga contínua de gordura e efluente. Quando a caixa satura, o retorno chega na pia, o odor chega ao salão e a vistoria sanitária encontra um problema que ninguém consegue provar que trata com frequência.',
    execucao: [
      'Limpeza e sucção de caixa de gordura com periodicidade dimensionada pelo volume real de operação.',
      'Sucção e limpa-fossa, limpeza de caixa de passagem e de caixa de esgoto.',
      'Hidrojateamento das linhas de efluente para remover a camada aderida à parede da tubulação.',
      'Retirada do resíduo do local e comprovante do serviço executado a cada visita.',
    ],
    formato:
      'Periodicidade fixa fora do horário de operação, com registro de cada visita arquivado para apresentação em vistoria e para o controle interno de conformidade.',
  },
]

export default function EmpresasSegmentos() {
  return (
    <Section id="perfis" className="bg-canvas">
      <SectionHeading
        eyebrow="Quem atendemos"
        align="left"
        title="Três operações, três formas de contratar"
        description="O escopo técnico é parecido. O que muda é a janela de execução, a periodicidade e o tipo de documento que você precisa ter em mãos depois."
      />

      <div className="space-y-6">
        {perfis.map((perfil, i) => (
          <Reveal
            key={perfil.id}
            as="article"
            id={perfil.id}
            delay={i}
            className="scroll-mt-28 overflow-hidden rounded-2xl border border-hairline bg-elevated"
          >
            <div className="grid lg:grid-cols-[minmax(0,22rem)_1fr]">
              <div className="border-b border-hairline bg-surface p-6 sm:p-8 lg:border-b-0 lg:border-r">
                <perfil.icon className="h-6 w-6 text-aqua-600 dark:text-aqua-400" aria-hidden />
                <p className="eyebrow mt-5">{perfil.label}</p>
                <h3 className="mt-3 text-xl font-semibold leading-snug text-content sm:text-2xl">
                  {perfil.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-content-muted">{perfil.situacao}</p>
              </div>

              <div className="p-6 sm:p-8">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-content-subtle">
                  O que executamos
                </h4>
                <ul className="mt-4 space-y-3">
                  {perfil.execucao.map((item) => (
                    <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed text-content-muted">
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-raio-500"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="mt-8 text-sm font-semibold uppercase tracking-wider text-content-subtle">
                  Formato de atendimento
                </h4>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-content-muted">
                  {perfil.formato}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button
          href={site.whatsapp.with(waMessages.corporativo)}
          external
          variant="outline"
          size="lg"
          className="w-full sm:w-auto"
        >
          Descrever a sua operação para o comercial
        </Button>
        <span className="text-sm text-content-subtle">
          O diagnóstico inicial não gera compromisso de contrato.
        </span>
      </Reveal>
    </Section>
  )
}
