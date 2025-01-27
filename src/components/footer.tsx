import Link from "next/link";

const AppFooter: React.FC = () => {
    return (
        <footer className="bg-gradient-to-b from-slate-800 to-slate-900 text-white py-16 mt-12 border-t border-slate-700">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* About Section */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-sky-500">Sobre Nós</h2>
                        <p className="text-slate-300 leading-relaxed">
                            Raio Desentupidora - Somos movido pelo desafio de promover a cada dia serviços de qualidade e
                            eficiência, fazendo a diferença, respeitando o consumidor, garantindo por escrito serviços
                            de qualidade a sociedade com competência, ética, cordialidade e respeito à diversidade.
                        </p>
                        <ul className="flex space-x-6 mt-4">
                            {[
                                { icon: 'twitter', label: 'Twitter' },
                                { icon: 'facebook', label: 'Facebook' },
                                { icon: 'instagram', label: 'Instagram' }
                            ].map((social) => (
                                <li key={social.icon}>
                                    <a 
                                        href="https://www.facebook.com/raiodesentupidoradedetizadora/" 
                                        aria-label={social.label}
                                        className="text-slate-400 hover:text-sky-500 transform hover:scale-110 transition-all duration-300"
                                    >
                                        <span className={`fa fa-${social.icon} text-2xl`}></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Institutional Links */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-sky-500">Institucional</h2>
                        <ul className="space-y-4">
                            {[
                                { href: "/", label: "HOME" },
                                { href: "/quemsomos", label: "QUEM SOMOS" },
                                { href: "/nossosservicos", label: "NOSSOS SERVIÇOS" },
                                { href: "/contato", label: "CONTATOS" }
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link 
                                        href={link.href} 
                                        aria-label={link.label} 
                                        className="text-slate-300 hover:text-sky-500 flex items-center group transition-colors duration-300"
                                    >
                                        <span className="fa fa-chevron-right mr-2 text-sky-500 group-hover:translate-x-1 transition-transform duration-300"></span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact and Payment */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-sky-500">Contato(s)</h2>
                            <ul className="space-y-4">
                                {[
                                    { tel: "5511980639525", label: "(11) 98063-9525" },
                                    { tel: "5511980639525", label: "(11) 98039-9879" }
                                ].map((phone, index) => (
                                    <li key={index}>
                                        <a 
                                            href={`tel://${phone.tel}`} 
                                            aria-label={`Telefone ${index + 1}`} 
                                            className="text-slate-300 hover:text-sky-500 flex items-center group transition-colors duration-300"
                                        >
                                            <span className="fa fa-phone mr-2 text-sky-500"></span>
                                            Tel: {phone.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-sky-500">Formas de Pagamento</h2>
                            <ul className="space-y-4">
                                {['Cartões', 'Cheque', 'Dinheiro', 'Deposito bancário', 'Parcelamos também!'].map((item) => (
                                    <li key={item} className="flex items-center text-slate-300 group">
                                        <span className="material-icons mr-2 text-sky-500 text-sm">payments</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Email and Address */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-sky-500">E-mail</h2>
                            <a 
                                href="mailto:contato@raiodesentupidora.com.br" 
                                aria-label="Email Contato" 
                                className="text-slate-300 hover:text-sky-500 flex items-center group transition-colors duration-300"
                            >
                                <span className="fa fa-envelope mr-2 text-sky-500"></span>
                                contato@raiodesentupidora.com.br
                            </a>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-sky-500">Endereço</h2>
                            <div className="text-slate-300 space-y-2">
                                <p className="flex items-start">
                                    <span className="fa fa-map-marker mr-2 text-sky-500 mt-1"></span>
                                    <span>
                                        Rua Nobel Almeida Kuke, 485,<br />
                                        Guarulhos - São Paulo<br />
                                        CEP: 07084-210
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
                <p>&copy; {new Date().getFullYear()} Raio Desentupidora. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}

export default AppFooter; 