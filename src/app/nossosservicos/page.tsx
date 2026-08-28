import type { Metadata } from "next";
import Services from "@/components/sections/Services";
import { Button } from "@/components/ui/Button";
import { site, waMessages } from "@/lib/site";

/**
 * URL CANÔNICA de serviços.
 *
 * `/servicos.html` é a variante legada e aponta o canonical para cá — escolhida
 * por já ser a URL usada na navegação, no manifest e no sitemap.
 */
export const metadata: Metadata = {
  title: "Serviços de desentupimento e saneamento predial",
  description:
    "Desentupimento de esgoto, pias, ralos e vasos sanitários, limpeza de caixa d'água e limpa fossa em Guarulhos e Grande São Paulo. Atendimento 24h, residencial e corporativo, com orçamento fechado antes de iniciar.",
  keywords: [
    "desentupimento",
    "limpeza caixa d'água",
    "desentupimento esgoto",
    "desentupimento pia",
    "limpa fossa",
    "serviços desentupidora guarulhos",
  ],
  alternates: { canonical: "/nossosservicos" },
  openGraph: {
    url: "/nossosservicos",
    title: "Serviços de desentupimento e saneamento predial | Raio Desentupidora",
    description:
      "Esgoto, pias, ralos, vasos, caixa d'água e limpa fossa em Guarulhos e Grande São Paulo. Atendimento 24h.",
  },
};

export default function NossosServicos() {
  return (
    <>
      <section className="bg-ink-950">
        <div className="container py-16 sm:py-20 lg:py-24">
          <span className="eyebrow enter text-raio-400">Serviços</span>
          <h1 className="enter mt-4 text-display-md text-white max-w-measure">
            Desobstrução, limpeza de reservatório e sucção de resíduos
          </h1>
          <p
            className="enter mt-5 text-lede text-white/70 max-w-measure"
            style={{ "--enter-delay": "90ms" } as React.CSSProperties}
          >
            Atendimento 24h em {site.city} e na {site.region}, para imóvel residencial,
            condomínio, comércio e indústria. Diagnóstico antes do orçamento, preço
            fechado antes da execução e garantia por escrito.
          </p>
          <div
            className="enter mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ "--enter-delay": "160ms" } as React.CSSProperties}
          >
            <Button href={site.phone.tel} size="lg">
              Ligar {site.phone.display}
            </Button>
            <Button
              href={site.whatsapp.with(waMessages.orcamento)}
              external
              variant="onDark"
              size="lg"
            >
              Pedir orçamento no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <Services variant="page" />
    </>
  );
}
