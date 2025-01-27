'use client'

import React, { useEffect } from "react";
import { Metadata } from "next";
import { BtnWhatsApp } from "@/components/whatsApp";
import OrcamentoGratis from "@/components/orcamentoGratis";
import ConversionTracking from '@/components/ConversionTracking';



const Contact: React.FC = () => {
    useEffect(() => {
        // Check if URL has a hash
        if (window.location.hash === '#startOrcamento') {
            // Get the element
            const element = document.getElementById('startOrcamento');
            if (element) {
                // Scroll to element with smooth behavior
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, []);

    return (
        <>
            <ConversionTracking />
            {/* Add JSON-LD to page */}
            
            <main itemScope itemType="https://schema.org/ContactPage">
                {/* Hero Section */}
                <section 
                    className="relative h-[300px] flex items-center justify-center bg-gradient-to-r 
                               from-slate-900 to-sky-900 overflow-hidden"
                    role="banner"
                >
                    {/* Background Pattern */}
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
                            <div className="flex items-center justify-center space-x-2 text-sm mb-2">
                                <span>Contato</span>
                                <span className="fa fa-chevron-right text-xs"></span>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold mb-4">
                                Entre em contato e agende um orçamento
                            </h1>
                            <p className="text-lg text-gray-300 mb-8">
                                Atendimento rápido e profissional
                            </p>
                        </div>

                        {/* Contact Buttons */}
                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <BtnWhatsApp />
                            <a
                                href="tel:+5511980639525"
                                aria-label="Ligue"
                                className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg 
                                         transition-all duration-300 font-bold text-center w-full sm:w-auto
                                         shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                <i className="fa fa-phone mr-2"></i>
                                LIGUE AGORA
                            </a>
                        </div>
                    </div>
                </section>

                {/* Contact Info Section */}
                <section 
                id="startOrcamento"
                    className="py-16 bg-gradient-to-b from-gray-50 to-white"
                    itemScope 
                    itemType="https://schema.org/Organization"
                >
                    
                    <div className="mt-10">
                        <OrcamentoGratis />
                    </div>

                    <div className="container mx-auto px-4 mt-10">
                        <div className="text-center mb-12">
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                                Informações de Contato
                            </h1>
                            <meta itemProp="name" content="Raio Desentupidora" />
                            <p className="text-gray-600 mt-2">
                                Escolha a melhor forma de entrar em contato conosco
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                            {/* Address */}
                            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl 
                                        transition-all duration-300 transform hover:-translate-y-1 
                                        flex flex-col items-center sm:items-start text-center sm:text-left"
                                 itemProp="address" 
                                 itemScope 
                                 itemType="https://schema.org/PostalAddress"
                            >
                                <div className="flex justify-center mb-6">
                                    <span className="fa fa-map-marker text-3xl md:text-4xl text-sky-500 
                                                 bg-sky-50 p-5 rounded-full w-16 h-16 flex items-center justify-center"></span>
                                </div>
                                <div className="w-full">
                                    <h3 className="font-bold text-gray-800 text-lg md:text-xl mb-3">Endereço:</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Rua Nobel de Almeida Kuke, 485<br />
                                        Parque Continental II<br />
                                        Guarulhos - SP
                                    </p>
                                    <meta itemProp="streetAddress" content="Rua Nobel de Almeida Kuke, 485" />
                                    <meta itemProp="addressLocality" content="Guarulhos" />
                                    <meta itemProp="addressRegion" content="SP" />
                                    <meta itemProp="postalCode" content="07084-210" />
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl 
                                        transition-all duration-300 transform hover:-translate-y-1
                                        flex flex-col items-center sm:items-start text-center sm:text-left">
                                <div className="flex justify-center mb-6">
                                    <span className="fa fa-phone text-3xl md:text-4xl text-sky-500 
                                                 bg-sky-50 p-5 rounded-full w-16 h-16 flex items-center justify-center"></span>
                                </div>
                                <div className="w-full">
                                    <h3 className="font-bold text-gray-800 text-lg md:text-xl mb-3">Telefone:</h3>
                                    <div className="space-y-3">
                                        <a href="tel://5511980639525" 
                                           className="flex items-center justify-center sm:justify-start 
                                                    text-gray-600 hover:text-sky-500 transition-colors">
                                            <i className="fa fa-whatsapp mr-2 text-green-500"></i>
                                            (11) 98063-9525
                                        </a>
                                        <a href="tel://5511980639525" 
                                           className="flex items-center justify-center sm:justify-start 
                                                    text-gray-600 hover:text-sky-500 transition-colors">
                                            <i className="fa fa-whatsapp mr-2 text-green-500"></i>
                                            (11) 98039-9879
                                        </a>
                                    </div>
                                    <meta itemProp="telephone" content="+55-11-98063-9525" />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl 
                                        transition-all duration-300 transform hover:-translate-y-1
                                        flex flex-col items-center sm:items-start text-center sm:text-left">
                                <div className="flex justify-center mb-6">
                                    <span className="fa fa-envelope text-3xl md:text-4xl text-sky-500 
                                                 bg-sky-50 p-5 rounded-full w-16 h-16 flex items-center justify-center"></span>
                                </div>
                                <div className="w-full">
                                    <h3 className="font-bold text-gray-800 text-lg md:text-xl mb-3">Email:</h3>
                                    <a href="mailto:contato@raiodesentupidora.com.br"
                                       className="text-gray-600 hover:text-sky-500 transition-colors break-words 
                                                inline-block">
                                        contato@raiodesentupidora.com.br
                                    </a>
                                    <meta itemProp="email" content="contato@raiodesentupidora.com.br" />
                                </div>
                            </div>

                            {/* Website */}
                            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl 
                                        transition-all duration-300 transform hover:-translate-y-1
                                        flex flex-col items-center sm:items-start text-center sm:text-left">
                                <div className="flex justify-center mb-6">
                                    <span className="fa fa-globe text-3xl md:text-4xl text-sky-500 
                                                 bg-sky-50 p-5 rounded-full w-16 h-16 flex items-center justify-center"></span>
                                </div>
                                <div className="w-full">
                                    <h3 className="font-bold text-gray-800 text-lg md:text-xl mb-3">Website:</h3>
                                    <a href="https://www.raiodesentupidora.com.br" 
                                       className="text-gray-600 hover:text-sky-500 transition-colors">
                                        www.raiodesentupidora.com.br
                                    </a>
                                    <meta itemProp="url" content="https://www.raiodesentupidora.com.br" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Orçamento Form with improved spacing */}
                    
                </section>
            </main>
        </>
    );
}

export default Contact;