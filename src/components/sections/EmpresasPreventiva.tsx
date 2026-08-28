import { AlertTriangle, ShieldCheck } from 'lucide-react'
import { Section, SectionHeading } from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'

const criterios = [
  {
    criterio: 'Custo',
    reativo: 'Definido sob pressão, com a operação parada e sem tempo de comparar fornecedor.',
    preventivo: 'Valor por periodicidade acordado antes, em orçamento fechado. Entra no orçamento anual.',
  },
  {
    criterio: 'Agenda',
    reativo: 'No horário em que o problema aparece — em geral o pior deles.',
    preventivo: 'Janela combinada: noite, madrugada, fim de semana ou período de menor movimento.',
  },
  {
    criterio: 'Operação',
    reativo: 'Banheiro, cozinha ou andar interditado por tempo indeterminado.',
    preventivo: 'Intervenção planejada, com área isolada e retorno previsto.',
  },
  {
    criterio: 'Conhecimento da rede',
    reativo: 'Equipe nova a cada chamado, descobrindo a tubulação no lugar de resolver.',
    preventivo: 'Mesmo time, com o traçado da rede e o histórico de cada ponto crítico mapeados.',
  },
  {
    criterio: 'Prestação de contas',
    reativo: 'Nota avulsa, sem laudo e sem histórico para levar à assembleia ou à auditoria.',
    preventivo: 'Relatório por visita e histórico acumulado do prédio, prontos para apresentar.',
  },
]

export default function EmpresasPreventiva() {
  return (
    <Section id="preventiva" className="bg-surface">
      <SectionHeading
        eyebrow="O argumento econômico"
        align="left"
        title="Emergência é o mesmo serviço, comprado no pior momento possível"
        description="Entupimento em rede predial raramente é evento isolado: é acúmulo. A escolha real não é entre gastar e não gastar — é entre um gasto que você agenda e um gasto que te agenda."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal className="rounded-2xl border border-hairline bg-elevated p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-emergency-600 dark:text-emergency-400" aria-hidden />
            <h3 className="text-lg font-semibold text-content">Chamado reativo</h3>
          </div>
          <p className="mt-2 text-sm text-content-subtle">Você aciona quando já transbordou.</p>
          <dl className="mt-6 space-y-5">
            {criterios.map((linha) => (
              <div key={linha.criterio} className="border-t border-hairline pt-4">
                <dt className="text-xs font-semibold uppercase tracking-wider text-content-subtle">
                  {linha.criterio}
                </dt>
                <dd className="mt-1.5 text-[0.9375rem] leading-relaxed text-content-muted">
                  {linha.reativo}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal
          delay={1}
          className="rounded-2xl border border-raio-200 bg-elevated p-6 shadow-e2 dark:border-raio-900 sm:p-8"
        >
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-raio-600 dark:text-raio-400" aria-hidden />
            <h3 className="text-lg font-semibold text-content">Contrato preventivo</h3>
          </div>
          <p className="mt-2 text-sm text-content-subtle">Você define quando o serviço acontece.</p>
          <dl className="mt-6 space-y-5">
            {criterios.map((linha) => (
              <div key={linha.criterio} className="border-t border-hairline pt-4">
                <dt className="text-xs font-semibold uppercase tracking-wider text-content-subtle">
                  {linha.criterio}
                </dt>
                <dd className="mt-1.5 text-[0.9375rem] leading-relaxed text-content-muted">
                  {linha.preventivo}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <Reveal className="mt-8 rounded-2xl border border-hairline bg-elevated p-6 sm:p-8">
        <p className="max-w-measure text-[0.9375rem] leading-relaxed text-content-muted">
          <strong className="font-semibold text-content">
            Manutenção preventiva não elimina a emergência.
          </strong>{' '}
          Ela reduz a chance de o problema aparecer no horário errado e muda a natureza do chamado:
          quando acontece, o fornecedor já está definido, a rede já está mapeada e o preço já foi
          acordado. Deixa de ser uma decisão de madrugada e vira execução de contrato.
        </p>
      </Reveal>
    </Section>
  )
}
