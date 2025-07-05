import { Metadata } from "next";
import QuemSomosClient from "@/components/sections/QuemSomosClient";

export const metadata: Metadata = {
  title: "Quem Somos - Raio Desentupidora",
  description: "Conheça a história da Raio Desentupidora. Empresa especializada em desentupimento 24h com mais de 15 anos de experiência em São Paulo.",
  keywords: ["raio desentupidora", "empresa desentupimento", "história empresa", "desentupidora guarulhos"],
};

export default function QuemSomos() {
  return <QuemSomosClient />;
}