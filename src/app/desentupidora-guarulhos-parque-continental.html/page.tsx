import { Metadata } from "next";
import Services from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "Desentupidora Guarulhos Parque Continental - Raio Desentupidora",
  description: "Desentupidora em Guarulhos no Parque Continental. Serviços de desentupimento 24h com garantia. Raio Desentupidora - Qualidade e confiança.",
  keywords: ["desentupidora guarulhos", "desentupimento parque continental", "desentupidora guarulhos parque continental", "raio desentupidora"],
};

export default function DesentupidoraGuarulhosParqueContinental() {
  return (
    <main className="min-h-screen pt-20">
      <Services />
    </main>
  );
}