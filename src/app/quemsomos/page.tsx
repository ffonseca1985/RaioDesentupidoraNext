import type { Metadata } from "next";
import QuemSomosClient from "@/components/sections/QuemSomosClient";

export const metadata: Metadata = {
  title: "Quem somos",
  description:
    "A Raio Desentupidora atende Guarulhos e a Grande São Paulo em desentupimento e saneamento predial, 24h. Equipe própria, nota fiscal em todo serviço, orçamento fechado antes de iniciar e garantia por escrito.",
  keywords: [
    "raio desentupidora",
    "empresa de desentupimento guarulhos",
    "desentupidora com nota fiscal",
    "desentupidora para condomínio",
  ],
  alternates: { canonical: "/quemsomos" },
  openGraph: {
    url: "/quemsomos",
    title: "Quem somos | Raio Desentupidora",
    description:
      "Equipe própria, nota fiscal, orçamento fechado antes de iniciar e garantia por escrito, em Guarulhos e Grande São Paulo.",
  },
};

export default function QuemSomos() {
  return <QuemSomosClient />;
}
