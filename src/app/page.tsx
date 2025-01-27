'use client'

import React from "react";
import { BtnWhatsApp } from "@/components/whatsApp";
import BntFaleConosco from "@/components/faleConosco";
import Link from "next/link";

const highlights = [
    {
        icon: "wrench",
        title: "Desentupimento 24h",
        description: "Atendimento emergencial disponível 24 horas por dia, 7 dias por semana."
    },
    {
        icon: "tint",
        title: "Limpeza de Caixa D'água",
        description: "Serviço profissional de limpeza e higienização de caixas d'água."
    },
    {
        icon: "check-circle",
        title: "Garantia de Serviço",
        description: "Todos os serviços com garantia e profissionais qualificados."
    }
];

const quickServices = [
    {
        icon: "home",
        title: "Residencial",
        description: "Atendimento especializado para sua residência"
    },
    {
        icon: "building",
        title: "Comercial",
        description: "Soluções para empresas e comércios"
    },
    {
        icon: "industry",
        title: "Industrial",
        description: "Serviços de grande porte para indústrias"
    }
];

const Home: React.FC = () => {
    return (
        <main>
            {/* Hero Section */}
            <section className="relative min-h-[600px] bg-gradient-to-br from-sky-900 via-blue-900 to-slate-900 
                              flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]"></div>
                
                <div className="container mx-auto px-4 relative z-10 mb-12">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 mt-12">
                            Desentupidora em SP e Grande SP 
                            <span className="block text-sky-400 mt-2">Atendimento 24 Horas</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-gray-200">
                            Serviços de desentupimento com qualidade e rapidez
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                            <BtnWhatsApp />
                            <BntFaleConosco />
                            <a
                                href="tel:+5511980639525"
                                className="group relative overflow-hidden bg-white/10 backdrop-blur-sm
                                         text-white px-8 py-3 rounded-lg transition-all duration-300 
                                         font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5
                                         border border-white/20 hover:bg-white/20
                                         w-full sm:w-auto flex items-center justify-center gap-2"
                            >
                                <i className="fa fa-phone"></i>
                                (11) 98063-9525
                            </a>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                            {highlights.map((item, index) => (
                                <div key={index} 
                                     className="bg-white/10 backdrop-blur-sm rounded-lg p-6 
                                              border border-white/20 hover:bg-white/20 
                                              transition-all duration-300">
                                    <div className="text-sky-400 text-3xl mb-4">
                                        <i className={`fa fa-${item.icon}`}></i>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-gray-300">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Services Section */}
            <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Nossos Serviços
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Soluções completas em desentupimento e limpeza
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {quickServices.map((service, index) => (
                            <div key={index} 
                                 className="group bg-white rounded-xl shadow-lg p-8 
                                          hover:shadow-xl transition-all duration-300 
                                          transform hover:-translate-y-1">
                                <div className="text-4xl text-sky-500 mb-6 
                                              group-hover:scale-110 transition-transform duration-300">
                                    <i className={`fa fa-${service.icon}`}></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    {service.description}
                                </p>
                                <Link href="/nossosservicos" 
                                      className="text-sky-500 hover:text-sky-600 font-medium 
                                               inline-flex items-center gap-2">
                                    Saiba mais
                                    <i className="fa fa-arrow-right"></i>
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link href="/nossosservicos"
                              className="inline-flex items-center justify-center gap-2 
                                       bg-sky-500 hover:bg-sky-600 text-white 
                                       px-8 py-3 rounded-lg transition-all duration-300 
                                       font-bold shadow-lg hover:shadow-xl 
                                       transform hover:-translate-y-0.5">
                            Ver todos os serviços
                            <i className="fa fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-sky-900 via-blue-900 to-slate-900 relative">
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Precisa de um serviço emergencial?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Entre em contato agora mesmo e receba atendimento prioritário
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <BtnWhatsApp />
                            <BntFaleConosco />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
