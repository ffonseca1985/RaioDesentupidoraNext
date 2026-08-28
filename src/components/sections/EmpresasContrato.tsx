import { Section, SectionHeading } from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'

const etapas = [
  {
    titulo: 'Diagnóstico inicial',
    prazo: 'Visita técnica, sem custo',
    body: 'Visita ao local para levantar o traçado da rede, os pontos de recorrência, o volume de gordura e efluente e as restrições de acesso e de horário. Onde for necessário, videoinspeção dos trechos críticos.',
  },
  {
    titulo: 'Plano e periodicidade',
    prazo: 'Proposta escrita',
    body: 'A partir do diagnóstico, definimos o que é preventivo e o que é corretivo, a frequência de cada frente (prumada, caixa de gordura, reservatório, fossa), a janela de execução e o prazo de resposta para chamados fora da rotina. Valor fechado antes de qualquer serviço.',
  },
  {
    titulo: 'Execução programada',
    prazo: 'Agenda combinada',
    body: 'Cada visita é agendada com antecedência com o síndico, a administradora ou o gestor predial. Equipe identificada, área isolada, aviso prévio quando há impacto para moradores ou usuários.',
  },
  {
    titulo: 'Relatório e histórico',
    prazo: 'A cada atendimento',
    body: 'Relatório do que foi encontrado, do que foi executado e do que precisa de acompanhamento — com registro em imagem quando há videoinspeção. O histórico acumulado é o que sustenta a prestação de contas e a revisão do plano no ciclo seguinte.',
  },
]

export default function EmpresasContrato() {
  return (
    <Section id="contrato" className="bg-canvas">
      <SectionHeading
        eyebrow="Como funciona"
        align="left"
        title="Do primeiro diagnóstico ao histórico documentado"
        description="Quatro etapas. Nenhuma delas começa antes de você aprovar a anterior por escrito."
      />

      <ol className="grid gap-6 sm:grid-cols-2">
        {etapas.map((etapa, i) => (
          <Reveal
            key={etapa.titulo}
            as="li"
            delay={i}
            className="relative rounded-2xl border border-hairline bg-elevated p-6 sm:p-8"
          >
            <div className="flex items-baseline gap-4">
              <span
                className="nums text-4xl font-bold leading-none tracking-tight text-raio-600 dark:text-raio-400"
                aria-hidden
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-content">{etapa.titulo}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-content-subtle">
                  {etapa.prazo}
                </p>
              </div>
            </div>
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-content-muted">{etapa.body}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
