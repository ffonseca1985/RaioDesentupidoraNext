import { Metadata } from "next";
import Services from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "Serviços - Raio Desentupidora",
  description: "Conheça todos os serviços da Raio Desentupidora: desentupimento de esgoto, pia, vaso sanitário, limpeza de caixa d'água e mais. Atendimento 24h.",
  keywords: ["desentupimento", "limpeza caixa d'água", "desentupimento esgoto", "desentupimento pia", "serviços desentupidora"],
};

export default function ServicosHTML() {
  return (
    <main className="min-h-screen pt-20">
      <Services />
    </main>
  );
}