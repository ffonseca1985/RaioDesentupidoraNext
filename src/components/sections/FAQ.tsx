import { ChevronDown } from 'lucide-react'

import { Section, SectionHeading } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import { site, waMessages } from '@/lib/site'

/**
 * Server component de propósito: `<details>`/`<summary>` nativo entrega o
 * accordion sem uma linha de JS, é acessível por padrão e mantém a resposta no
 * HTML — o Google indexa o texto mesmo com o item fechado.
 */

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: 'Quanto custa um desentupimento?',
    answer:
      'Depende do ponto entupido, do acesso e do método necessário. Por isso a avaliação é feita no local e sem custo: o técnico verifica o caso e apresenta um preço fechado. O serviço só começa depois que você aprova esse valor.',
  },
  {
    question: 'Em quanto tempo a equipe chega?',
    answer:
      'O atendimento é 24 horas, todos os dias, inclusive feriados. Na Grande São Paulo trabalhamos com chegada em até 60 minutos a partir da confirmação do chamado — trânsito e distância podem alterar esse prazo, e informamos por telefone quando isso acontece.',
  },
  {
    question: 'Vai ser preciso quebrar piso ou parede?',
    answer:
      'Na maioria dos casos, não. O desentupimento é feito pelos acessos que já existem: ralos, caixas de inspeção, caixa de gordura. Quebra só entra em cena quando a tubulação está rompida ou colapsada — e, nesse caso, mostramos o problema e apresentamos o custo antes de qualquer intervenção.',
  },
  {
    question: 'O serviço tem garantia?',
    answer:
      'Sim, garantia por escrito em todo serviço executado. O documento entregue no fim do atendimento descreve o que foi feito, o trecho atendido e o prazo de cobertura.',
  },
  {
    question: 'Vocês emitem nota fiscal?',
    answer:
      'Sim. Emitimos nota fiscal para pessoa física e jurídica em todos os serviços — inclusive nos atendimentos de emergência fora do horário comercial.',
  },
  {
    question: 'O que eu faço até a equipe chegar?',
    answer:
      'Pare de usar a rede afetada (pia, vaso, máquina) para o nível não subir. Não jogue soda cáustica nem desentupidor químico: aquece a tubulação, atrapalha o trabalho e é risco para quem está no local. Se houver refluxo, desligue bombas e isole a área.',
  },
  {
    question: 'Atendem condomínio e empresa com contrato?',
    answer:
      'Sim. Além do chamado avulso, trabalhamos com manutenção programada — limpeza preventiva de caixa de gordura, ralos e prumadas em periodicidade definida, com relatório por atendimento para prestação de contas ao síndico ou ao setor de facilities.',
  },
  {
    question: 'Quais regiões vocês atendem?',
    answer:
      'Guarulhos, onde fica nossa base, e toda a Grande São Paulo. Se estiver na dúvida sobre o seu endereço, é mais rápido perguntar pelo WhatsApp do que preencher formulário.',
  },
  {
    question: 'Como funciona o pagamento?',
    answer:
      /* TODO: confirmar com o cliente — formas de pagamento aceitas e parcelamento */
      'O pagamento é feito depois do serviço concluído, sobre o valor aprovado no orçamento. Confirme as formas aceitas no momento do agendamento.',
  },
]

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

export default function FAQ() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <Section id="faq">
        <SectionHeading
          eyebrow="Dúvidas"
          title="O que perguntam antes de contratar"
          description="As respostas que damos por telefone todos os dias — para morador com problema agora e para quem decide por um prédio inteiro."
        />

        <div className="mx-auto max-w-3xl border-t border-hairline">
          {faqData.map((item, index) => (
            <Reveal key={item.question} delay={Math.min(index, 5)}>
              <details className="group border-b border-hairline">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left transition-colors duration-200 ease-out hover:text-raio-600 dark:hover:text-raio-400 [&::-webkit-details-marker]:hidden">
                  <h3 className="text-base font-semibold tracking-tight text-content sm:text-lg">
                    {item.question}
                  </h3>
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-content-subtle transition-transform duration-300 ease-out group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <p className="max-w-measure pb-6 pr-9 text-content-muted">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-12 max-w-3xl">
          <div className="flex flex-col gap-5 rounded-2xl border border-hairline bg-surface p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div>
              <p className="font-semibold tracking-tight text-content">
                Sua dúvida não está aqui?
              </p>
              <p className="mt-1 text-content-muted">
                Ligue ou mande mensagem. Quem responde é a operação, não um robô.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Button href={site.phone.tel} variant="secondary">
                {site.phone.display}
              </Button>
              <Button
                href={site.whatsapp.with(waMessages.orcamento)}
                external
                variant="outline"
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
