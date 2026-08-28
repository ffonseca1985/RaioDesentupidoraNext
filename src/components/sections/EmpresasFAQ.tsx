import { Plus } from 'lucide-react'
import { Section, SectionHeading } from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import { site } from '@/lib/site'

/** Exported so a página possa gerar o JSON-LD de FAQPage a partir da mesma fonte. */
export const empresasFaq = [
  {
    q: 'Qual é o prazo de resposta para um chamado dentro do contrato?',
    a: `O prazo é acordado por escrito no fechamento do plano e varia com a criticidade do ponto: uma prumada que atende cinquenta unidades não tem o mesmo prazo de um ralo de área comum. Fora do plano, o atendimento emergencial funciona ${site.hours}, em toda a ${site.region}.`,
  },
  {
    q: 'Vocês executam fora do horário comercial?',
    a: 'Sim. Em operação que não pode parar — hospital, escola, shopping, indústria, restaurante — a janela noturna, de madrugada ou de fim de semana é o padrão, não a exceção. A janela entra na proposta e é reservada na agenda, não negociada a cada visita.',
  },
  {
    q: 'Como funciona o faturamento?',
    a: 'O serviço é faturado no CNPJ do contratante, com nota fiscal e descrição do escopo executado. O contrato preventivo tem valor por periodicidade acordado antes do início. Chamados fora do plano são orçados e aprovados antes da execução — nunca faturados por surpresa.',
  },
  {
    q: 'Temos várias unidades. Dá para ter um contrato só?',
    a: 'Sim. O plano pode cobrir um portfólio de unidades com um único interlocutor comercial, periodicidades diferentes por unidade e relatório separado por endereço, para que cada gestor local tenha o próprio histórico sem multiplicar contratos.',
  },
  {
    q: 'Já temos fornecedor. Como funciona a troca no meio do ciclo?',
    a: 'Começa pelo diagnóstico: visita técnica e, quando necessário, videoinspeção da rede como ela está hoje. A proposta é construída sobre o que foi encontrado, não sobre um pacote padrão. Essa etapa não gera compromisso de contrato e serve, no mínimo, como segunda opinião sobre a rede.',
  },
  {
    q: 'O que não está incluído no plano preventivo?',
    a: 'Obra civil, substituição de trecho de tubulação, reforma de rede e recuperação de estrutura danificada são orçadas à parte. Quando a videoinspeção mostra que o problema é estrutural e não de acúmulo, isso aparece no relatório — inclusive quando a conclusão é que a limpeza recorrente não vai resolver.',
  },
  {
    q: 'A equipe atende dentro de área controlada ou com restrição de acesso?',
    a: 'Sim. O procedimento de acesso do empreendimento — identificação prévia, liberação de portaria, acompanhamento por um responsável, uso de EPI — é levantado no diagnóstico e incorporado ao plano de execução.',
  },
]

export default function EmpresasFAQ() {
  return (
    <Section id="perguntas" className="bg-surface">
      <SectionHeading
        eyebrow="Perguntas do decisor"
        align="left"
        title="O que costuma decidir a contratação"
        description="Dúvidas que aparecem na mesa do síndico, do gestor predial e do comprador — respondidas antes da primeira ligação."
      />

      <div className="mx-auto max-w-3xl divide-y divide-hairline border-y border-hairline">
        {empresasFaq.map((item, i) => (
          <Reveal key={item.q} delay={i % 4}>
            <details className="group">
              <summary className="flex w-full cursor-pointer list-none items-start justify-between gap-4 py-5 text-left [&::-webkit-details-marker]:hidden">
                <h3 className="text-base font-semibold leading-snug text-content sm:text-lg">
                  {item.q}
                </h3>
                <Plus
                  aria-hidden
                  className="mt-0.5 h-5 w-5 shrink-0 text-content-subtle transition-transform duration-200 ease-out group-open:rotate-45"
                />
              </summary>
              <p className="pb-6 pr-9 text-[0.9375rem] leading-relaxed text-content-muted">
                {item.a}
              </p>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
