import { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contato - Raio Desentupidora",
  description: "Entre em contato com a Raio Desentupidora. Atendimento 24h, orçamento gratuito. Desentupimento em São Paulo e região.",
  keywords: ["contato desentupidora", "orçamento desentupimento", "contato raio desentupidora"],
};

export default function Contact() {
  return (
    <main className="min-h-screen pt-20">
      <ContactForm />
    </main>
  );
}