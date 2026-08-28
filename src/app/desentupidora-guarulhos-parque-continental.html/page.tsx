import type { Metadata } from "next";
import Services from "@/components/sections/Services";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { site, waMessages } from "@/lib/site";

/**
 * LANDING DE SEO LOCAL — indexável e canônica de si mesma.
 *
 * Antes renderizava só `<Services />`, ou seja, era uma terceira cópia da página
 * de serviços. Agora tem conteúdo próprio de bairro (título, h1, texto local),
 * que é a única coisa que justifica a existência de uma URL geográfica.
 */
export const metadata: Metadata = {
  title: "Desentupidora no Parque Continental, Guarulhos",
  description:
    "Desentupidora 24h no Parque Continental, Guarulhos. Esgoto, pia, ralo, vaso, caixa de gordura, limpeza de caixa d'água e limpa fossa. Orçamento fechado antes de iniciar e garantia por escrito.",
  keywords: [
    "desentupidora parque continental",
    "desentupidora guarulhos",
    "desentupimento parque continental guarulhos",
    "desentupidora 24h guarulhos",
    "limpeza de caixa d'água guarulhos",
  ],
  alternates: { canonical: "/desentupidora-guarulhos-parque-continental.html" },
  openGraph: {
    url: "/desentupidora-guarulhos-parque-continental.html",
    title: "Desentupidora no Parque Continental, Guarulhos | Raio Desentupidora",
    description:
      "Atendimento 24h no Parque Continental e bairros vizinhos de Guarulhos. Diagnóstico antes do orçamento, preço fechado antes da execução.",
  },
};

/* TODO: confirmar com o cliente a lista de bairros efetivamente atendidos com
   deslocamento prioritário — a lista abaixo veio da região do Parque Continental
   e não foi validada pela operação. */
const bairrosProximos = [
  "Parque Continental I, II e III",
  "Jardim Santa Francisca",
  "Vila Galvão",
  "Gopoúva",
  "Picanço",
  "Jardim São Paulo",
  "Torres Tibagy",
  "Bonsucesso",
];

const situacoes = [
  {
    title: "Retorno de esgoto no térreo do sobrado",
    body:
      "Quando o ramal principal obstrui, o primeiro ponto a transbordar é sempre o mais baixo: ralo da área de serviço, box do banheiro do térreo ou o próprio vaso. Atacamos o ramal, não o ponto que transbordou.",
  },
  {
    title: "Caixa de gordura saturada em cozinha de comércio",
    body:
      "Bar, padaria e restaurante da região saturam a caixa em ciclo curto. Fazemos a sucção e a raspagem e deixamos a periodicidade recomendada por escrito, para virar manutenção programada em vez de emergência.",
  },
  {
    title: "Caixa d'água do prédio com prazo vencido",
    body:
      "Limpeza semestral com certificado para apresentar à vigilância sanitária. Síndico e administradora recebem o registro fotográfico e o comprovante junto do laudo.",
  },
];

export default function DesentupidoraParqueContinental() {
  return (
    <>
      <section className="bg-ink-950">
        <div className="container py-16 sm:py-20 lg:py-24">
          <span className="eyebrow enter text-raio-400">
            Guarulhos · Parque Continental
          </span>
          <h1 className="enter mt-4 text-display-md text-white max-w-measure">
            Desentupidora no Parque Continental, em Guarulhos
          </h1>
          <p
            className="enter mt-5 text-lede text-white/70 max-w-measure"
            style={{ "--enter-delay": "90ms" } as React.CSSProperties}
          >
            Atendimento {site.hours}. Desobstrução de esgoto, pia, ralo, vaso e caixa
            de gordura, limpeza de caixa d&apos;água e limpa fossa — para casa,
            sobrado, condomínio, comércio e indústria da região.
          </p>
          <div
            className="enter mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ "--enter-delay": "160ms" } as React.CSSProperties}
          >
            <Button href={site.phone.tel} size="lg">
              Ligar {site.phone.display}
            </Button>
            <Button
              href={site.whatsapp.with(waMessages.emergencia)}
              external
              variant="onDark"
              size="lg"
            >
              Chamar no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <Section id="parque-continental">
        <SectionHeading
          eyebrow="Atendimento local"
          align="left"
          title="O que costuma entupir por aqui"
          description="A base de operação fica na própria região de Guarulhos, o que reduz o tempo entre a ligação e a chegada da equipe no Parque Continental."
        />

        <ul className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3">
          {situacoes.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={i}
              className="rounded-2xl border border-hairline bg-elevated p-6 shadow-e1"
            >
              <h3 className="text-lg font-semibold text-content">{item.title}</h3>
              <p className="mt-3 text-content-muted">{item.body}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12 rounded-2xl border border-hairline bg-surface p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-content">
            Bairros vizinhos atendidos
          </h3>
          <p className="mt-3 max-w-measure text-content-muted">
            Além do Parque Continental, a mesma equipe cobre os bairros no entorno,
            em {site.city} e no restante da {site.region}.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {bairrosProximos.map((bairro) => (
              <li
                key={bairro}
                className="rounded-xl border border-hairline bg-elevated px-3 py-2 text-sm text-content-muted"
              >
                {bairro}
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <Services variant="page" />
    </>
  );
}
