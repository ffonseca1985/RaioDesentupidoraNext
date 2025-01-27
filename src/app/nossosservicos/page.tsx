'use client'

import React from "react";
import { BtnWhatsApp } from "@/components/whatsApp";
// import servicosjpg from "../assets/images/servicos.jpg"
// import LimpezadaCaixadaguajpg from "../assets/images/Limpeza-da-Caixa-dágua.jpg"
// import img19050019092018jpg from "../assets/images/19050019092018.jpg"
// import piajpg from "../assets/images/pia.jpg"
// import Ralojpg from "../assets/images/Ralo.jpg"
// import desentupidoradecanojpg from "../assets/images/desentupidora-de-cano.jpg"
// import empresadesaneamentjpg from "../assets/images/empresa-de-saneamento.jpg"

const services = [
    {
        icon: "wrench",
        iconBg: "from-blue-500 to-blue-600",
        title: "DESENTUPIMENTO DE ESGOTOS",
        description: "A Raio Desentupidora é especialista em todo o tipo de desentupimento. Atuando em diferentes tipos de encanamento possui uma equipe técnica capacitada para sempre achar o problema de maneira rápida, prática e eficiente."
    },
    {
        icon: "tint",  // Water drop icon
        iconBg: "from-cyan-500 to-cyan-600",
        title: "LIMPEZA DE CAIXA D'ÁGUA",
        description: "Serviço de Limpeza de Caixa D'água para residências, comércios, indústrias e condomínios."
    },
    {
        icon: "shower",
        iconBg: "from-sky-500 to-sky-600",
        title: "DESENTUPIMENTO DE VASOS SANITÁRIOS, PIA, RALOS E OUTROS",
        description: "Esgotamento, transporte e descarte de efluentes líquidos e pastosos, Limpeza de caixa de gorduras. Removendo toda sujeira, desobstruindo o encanamento."
    }
];

const stats = [
    { number: "+500", label: "Clientes Satisfeitos" },
    { number: "+1100", label: "Serviços Feitos" },
    { number: "+5", label: "Anos de Experiência" }
];

const serviceTypes = [
    { 
        title: "Caixa D'água", 
        subtitle: "Limpeza de Caixa D'água",
        icon: "tint",
        description: "Limpeza e higienização completa de caixas d'água para residências e empresas. Garantimos água limpa e segura para sua família ou negócio."
    },
    { 
        title: "Desentupimento", 
        subtitle: "Desentupimento em Geral",
        icon: "wrench",
        description: "Serviços completos de desentupimento com equipamentos modernos e técnicos especializados. Atendimento 24 horas para emergências."
    },
    { 
        title: "Pias", 
        subtitle: "Desentupimento de Pia de Cozinha",
        icon: "sink",
        description: "Desentupimento de pias de cozinha e lavatórios, eliminando acúmulo de gordura e resíduos. Serviço rápido e eficiente."
    },
    { 
        title: "Ralo", 
        subtitle: "Desentupimento de Ralo",
        icon: "filter",
        description: "Limpeza e desobstrução de ralos em banheiros, áreas de serviço e demais ambientes. Prevenção contra transbordamentos e mau cheiro."
    },
    { 
        title: "Cano", 
        subtitle: "Desentupimento de Cano",
        icon: "plug",
        description: "Desentupimento de tubulações e encanamentos com equipamentos especializados. Resolução definitiva de problemas em sua rede hidráulica."
    },
    { 
        title: "Saneamento Básico", 
        subtitle: "Empresa de Saneamento",
        icon: "recycle",
        description: "Serviços completos de saneamento básico, incluindo limpeza de fossas, caixas de gordura e manutenção preventiva."
    }
];

const NossosServicos: React.FC = () => {
    return (
        <main className="bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <section className="relative min-h-[400px] bg-gradient-to-br from-sky-900 via-blue-900 to-slate-900 
                              flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239BA9B4' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                            backgroundSize: '24px 24px'
                        }}
                    ></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white">

                        <div className="flex items-center justify-center space-x-2 text-sm mb-4">
                            <span>Nossos Serviços</span>
                            <i className="fa fa-chevron-right text-xs"></i>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-8">NOSSOS SERVIÇOS  <i className="fa fa-wrench text-5xl md:text-6xl text-white 
                                                transform group-hover:rotate-12 transition-transform 
                                                duration-300"></i></h1>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <BtnWhatsApp />
                            <a
                                href="tel:+5511980639525"
                                aria-label="Ligue Agora"
                                className="group relative overflow-hidden bg-gradient-to-r from-sky-600 to-sky-500 
                                         text-white px-8 py-3 rounded-lg transition-all duration-300 
                                         font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5
                                         focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2
                                         w-full sm:w-auto text-center"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    LIGUE AGORA
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-sky-700 to-sky-600 
                                              transform scale-x-0 origin-left transition-transform duration-300 
                                              ease-out group-hover:scale-x-100">
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 bg-gradient-to-b from-white via-gray-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index}
                                className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl 
                                          transition-all duration-300 transform hover:-translate-y-1
                                          backdrop-blur-sm bg-white/90">
                                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                                    <div className={`flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br ${service.iconBg}
                                                  flex items-center justify-center transform group-hover:scale-110 
                                                  transition-all duration-300 shadow-lg`}>
                                        <i className={`fa fa-${service.icon} text-4xl text-white`}></i>
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-sky-600 
                                                     transition-colors text-center md:text-left">
                                            {service.title}
                                        </h2>
                                        <p className="text-gray-600 leading-relaxed text-center md:text-left">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gradient-to-br from-sky-900 via-blue-900 to-slate-900 relative">
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index}
                                className="p-8 bg-white/10 backdrop-blur-sm rounded-xl 
                                          shadow-lg hover:shadow-xl border border-white/10
                                          transition-all duration-300 transform hover:-translate-y-1 
                                          text-center">
                                <div className="text-4xl font-bold text-white mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-200">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Types Grid */}
            <section className="py-16 bg-gradient-to-b from-white via-gray-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {serviceTypes.map((service, index) => (
                            <div key={index}
                                className="group bg-white rounded-xl shadow-lg overflow-hidden 
                                          hover:shadow-xl transition-all duration-300 transform 
                                          hover:-translate-y-1">
                                <div className="h-20 bg-gradient-to-br from-sky-600 via-blue-600 to-sky-700 
                                      flex items-center justify-center relative overflow-hidden">
                                    {/* Background Pattern */}
                                    <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:20px_20px]"></div>
                                    
                                    {/* Background Circles */}
                                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full 
                                                  -translate-x-1/2 -translate-y-1/2"></div>
                                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/5 rounded-full 
                                                  translate-x-1/2 translate-y-1/2"></div>
                                    
                                    {/* Icon Background Glow */}
                                    <div className="absolute inset-0 opacity-75 bg-gradient-radial from-white/20 via-transparent to-transparent"></div>
                                    
                                    {/* Icon */}
                                    <div className="relative transform group-hover:scale-110 
                                                  transition-all duration-500 group-hover:rotate-12">
                                        <div className="absolute inset-0 blur-2xl bg-white/20 scale-110"></div>
                                        <i className={`fa fa-${service.icon} text-[300rem] text-white opacity-90 
                                                  relative z-10 drop-shadow-2xl`}></i>
                                    </div>
                                </div>
                                <div className="p-8 bg-white">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-3 
                                                 group-hover:text-sky-600 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 mb-2 text-lg">{service.subtitle}</p>
                                    <p className="text-gray-500 mb-6 text-sm leading-relaxed">{service.description}</p>
                                    <div className="flex justify-start space-x-6">
                                        {['whatsapp', 'phone'].map((icon) => (
                                            <a
                                                key={icon}
                                                href={icon === 'whatsapp' 
                                                    ? "https://wa.me/5511980639525" 
                                                    : "tel:+5511980639525"}
                                                className="text-gray-400 hover:text-sky-500 
                                                         transition-all duration-300 transform hover:scale-110
                                                         hover:-translate-y-1"
                                                aria-label={icon === 'whatsapp' ? "WhatsApp" : "Telefone"}
                                            >
                                                <i className={`fa fa-${icon} text-2xl`}></i>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

const styles = `
@keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
}

.animate-float {
    animation: float 3s ease-in-out infinite;
}
`;

export default NossosServicos;