import { BadgeCheck, ClipboardList, FileText, Receipt, Recycle } from 'lucide-react'
import { Section, SectionHeading } from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import { site } from '@/lib/site'

const itens = [
  {
    icon: Receipt,
    titulo: 'Nota fiscal do serviço',
    /* TODO: confirmar com o cliente — regime tributário, retenções e prazo de faturamento */
    body: 'Faturamento no CNPJ do contratante, com descrição do escopo executado. O documento fiscal acompanha o relatório técnico do atendimento.',
  },
  {
    icon: BadgeCheck,
    titulo: 'Equipe identificada e uniformizada',
    /* TODO: confirmar com o cliente — se há crachá nominal, relação prévia de acesso e política de EPI documentada */
    body: 'Profissionais uniformizados e informados antes do acesso, alinhados ao procedimento de portaria e ao controle de entrada do empreendimento.',
  },
  {
    icon: FileText,
    titulo: 'Relatório técnico do atendimento',
    body: 'O que foi encontrado, o que foi executado e o que precisa de acompanhamento no próximo ciclo. Com registro em imagem quando o serviço inclui videoinspeção.',
  },
  {
    icon: ClipboardList,
    titulo: 'Garantia por escrito',
    body: `Garantia ${site.commitments[3].value} ${site.commitments[3].detail}, com prazo e escopo declarados na proposta antes do início — não depois.`,
  },
  {
    icon: Recycle,
    titulo: 'Destinação do resíduo',
    /* TODO: confirmar com o cliente — licença ambiental, CADRI, transportadora contratada e emissão de MTR */
    body: 'O resíduo retirado da caixa de gordura, da fossa ou do poço de efluente sai do local sob responsabilidade da execução, com comprovante do serviço prestado a cada visita.',
  },
]

export default function EmpresasGovernanca() {
  return (
    <Section id="governanca" className="bg-canvas">
      <SectionHeading
        eyebrow="Governança e conformidade"
        align="left"
        title="O que fica documentado depois que a equipe vai embora"
        description="Para quem assina o contrato, o serviço não termina com a tubulação desobstruída — termina com o papel que sustenta a decisão em assembleia, auditoria ou vistoria."
      />

      <ul className="grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2 xl:grid-cols-3">
        {itens.map((item, i) => (
          <Reveal
            key={item.titulo}
            as="li"
            delay={i % 3}
            className="bg-elevated p-6 sm:p-7"
          >
            <item.icon className="h-5 w-5 text-aqua-600 dark:text-aqua-400" aria-hidden />
            <h3 className="mt-4 text-base font-semibold text-content">{item.titulo}</h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-content-muted">{item.body}</p>
          </Reveal>
        ))}

        {/* TODO: confirmar com o cliente — quais documentos a empresa efetivamente emite hoje
            (ART, licença ambiental do transportador, PGRS, PPRA da equipe). Enquanto não
            confirmado, a página trata o tema como item de proposta, nunca como certificação. */}
        <Reveal as="li" delay={2} className="bg-surface p-6 sm:p-7">
          <h3 className="text-base font-semibold text-content">Exigência específica do seu contrato</h3>
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-content-muted">
            Documentos que o seu jurídico, a administradora ou a auditoria exigirem — modelo de
            contrato, cobertura, comprovações e periodicidade mínima — são tratados na proposta,
            antes da assinatura. Se algum item não puder ser atendido, você fica sabendo nessa
            etapa.
          </p>
        </Reveal>
      </ul>
    </Section>
  )
}
