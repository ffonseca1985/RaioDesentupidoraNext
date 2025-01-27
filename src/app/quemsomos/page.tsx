import React from "react"
import { BtnWhatsApp } from "@/components/whatsApp";
import BntFaleConosco from "@/components/faleConosco";

const values = [
    {
        icon: "home",
        title: "Missão",
        description: "Prestar serviços de Saneamento Ambiental de forma sustentável."
    },
    {
        icon: "line-chart",
        title: "Visão",
        description: "Ser uma empresa de excelência, referência no mercado de dedetização e desentupimento comprometida com o bem-estar do cliente."
    },
    {
        icon: "check-circle",
        title: "Valores",
        description: "Exercer suas atribuições com dedicação, ética e respeito."
    }
];

const QuemSomos: React.FC = () => {
    return (
        <main className="bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <section className="relative min-h-[400px] bg-gradient-to-br from-sky-900 via-blue-900 to-slate-900 
                              flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:20px_20px]"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white">
                        {/* Hero Icon */}
                        <div className="flex items-center justify-center mb-8">
                            <div className="relative group">
                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-50 
                                              group-hover:opacity-75 transition-opacity duration-300"></div>
                                {/* Icon Container */}
                                <div className="relative flex items-center justify-center w-24 h-24
                                              bg-gradient-to-br from-sky-500 to-blue-600 
                                              rounded-full shadow-lg transform 
                                              transition-all duration-300 group-hover:scale-110">
                                    {/* Icon */}
                                    <i className="fas fa-building-user text-4xl text-white 
                                               group-hover:rotate-12 transform transition-all duration-300"></i>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center space-x-2 text-sm mb-4">
                            <span className="text-sky-300">Conheça Nossa História</span>
                            <i className="fas fa-chevron-right text-xs text-sky-300"></i>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold mb-8">QUEM SOMOS</h1>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <BtnWhatsApp />
                            <BntFaleConosco />
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl 
                                    min-h-[400px] flex items-center justify-center text-white">
                            <i className="fa fa-building text-6xl opacity-25"></i>
                        <div className="text-center p-8">
                            <h3 className="text-2xl font-bold mb-4">Nossa História</h3>
                            <p className="text-lg leading-relaxed">
                                Fundada em 2019, a Raio Desentupidora começou como uma pequena empresa familiar em Guarulhos, 
                                com o objetivo de oferecer serviços de desentupimento de alta qualidade e atendimento emergencial 24 horas. 
                                Ao longo dos anos, expandimos nossos serviços e nossa equipe, sempre mantendo o compromisso com a excelência 
                                e a satisfação do cliente.
                            </p>
                            <p className="text-lg leading-relaxed mt-4">
                                Hoje, somos uma das principais empresas de desentupimento da região, reconhecida pela nossa eficiência, 
                                profissionalismo e dedicação. Continuamos a investir em tecnologia e treinamento para garantir que nossos 
                                clientes recebam o melhor serviço possível.
                            </p>
                        </div>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <span className="text-sky-600 font-medium mb-2 block">Quem Somos</span>
                            <p className="text-xl font-semibold text-gray-800 mb-6">
                                &quot;Somos movidos pelo desafio de promover a cada dia serviços de qualidade e eficiência&quot;
                                </p>



                            <div className="space-y-8">
                                {values.map((item, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-sky-100 rounded-lg 
                                                      flex items-center justify-center">
                                            <i className={`fa fa-${item.icon} text-xl text-sky-500`}></i>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                                            <p className="text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8">
                                <p className="text-sky-600 font-medium mb-2">
                                    Comprometida com o bem-estar do cliente.
                                </p>
                                <p className="text-gray-600">
                                    Somos movidos pelo desafio de promover a cada dia serviços de qualidade e eficiência,
                                    fazendo a diferença, respeitando o consumidor, garantindo por escrito serviços de
                                    qualidade a sociedade com competência, ética, cordialidade e respeito à diversidade.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default QuemSomos;