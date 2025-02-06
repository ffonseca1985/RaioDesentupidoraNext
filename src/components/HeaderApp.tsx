"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from 'next/image';
import { BtnWhatsApp, WhatsAppFlutuante } from "./whatsApp";

const HeaderApp: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { href: "/", label: "HOME", icon: "home" },
        { href: "/quemsomos", label: "QUEM SOMOS", icon: "building" },
        { href: "/nossosservicos", label: "NOSSOS SERVIÇOS", icon: "wrench" },
        { href: "/contato", label: "CONTATO", icon: "envelope" }
    ];

    return (
        <>
            <nav className="relative bg-white text-sky-700 shadow-lg">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between py-4">
                        {/* Logo Section */}
                        <Link 
                            href="/" 
                            aria-label="Home" 
                            className="flex items-center space-x-3 group"
                        >
                            <img 
                                src="https://d36p6ty9wanxdj.cloudfront.net/images/Logo.png" 
                                alt="logo" 
                                className="w-22 h-12 transition-transform duration-300 group-hover:scale-105" 
                            />
                            <span className="text-xl font-bold text-sky-700">
                                <span className="text-sky-500">Raio Desentupidora</span>
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    aria-label={link.label}
                                    className={`relative font-bold transition-colors duration-300 py-2
                                              group flex items-center gap-2
                                              ${pathname === link.href 
                                                  ? 'text-sky-600' 
                                                  : 'text-sky-700 hover:text-sky-500'}
                                              ${pathname === link.href 
                                                  ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-sky-500' 
                                                  : ''}`}
                                >
                                    <i className={`fa fa-${link.icon} text-sm 
                                               group-hover:scale-110 transition-transform duration-300
                                               ${pathname === link.href ? 'text-sky-600' : ''}`}></i>
                                    <span>{link.label}</span>
                                </Link>
                            ))}
                            
                            {/* Contact Button */}
                            <a
                                href="tel:+5511980639525"
                                className="flex items-center space-x-2 bg-sky-600 text-white 
                                         px-4 py-2 rounded-lg transition-all duration-300 font-bold
                                         hover:-translate-y-0.5 hover:bg-sky-700"
                                aria-label="Telefone de contato"
                            >
                                <span className="fa fa-phone"></span>
                                <span>(11) 98063-9525</span>
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button 
                            className="lg:hidden p-2 rounded-lg hover:bg-sky-50 
                                     transition-colors duration-300 text-sky-700"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle navigation"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Menu</span>
                            <i className={`fa fa-${isMenuOpen ? 'times' : 'bars'} text-xl`}></i>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <div 
                        className={`
                            lg:hidden 
                            absolute 
                            top-full 
                            left-0 
                            right-0 
                            bg-white
                            border-t 
                            border-sky-100
                            shadow-lg
                            z-50
                            ${isMenuOpen 
                                ? 'translate-y-0 opacity-100 visible' 
                                : 'translate-y-[-10px] opacity-0 invisible'}
                            transition-all 
                            duration-300 
                            ease-in-out
                        `}
                    >
                        <div className="py-2 space-y-1 px-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    aria-label={link.label}
                                    className={`block w-full px-4 py-3 
                                              font-bold transition-colors duration-300 rounded-lg
                                              ${pathname === link.href 
                                                  ? 'bg-sky-50 text-sky-600' 
                                                  : 'text-sky-700 hover:bg-sky-50'}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <span className="flex items-center gap-3">
                                        <i className={`fa fa-${link.icon} ${pathname === link.href ? 'text-sky-600' : ''}`}></i>
                                        <span>{link.label}</span>
                                    </span>
                                </Link>
                            ))}
                            
                            {/* Mobile Contact Buttons */}
                            <div className="space-y-2 pt-2 border-t border-gray-100">
                                <BtnWhatsApp />
                                <a
                                    href="tel:+5511980639525"
                                    className="block w-full text-center bg-sky-600 text-white 
                                             py-3 px-4 rounded-lg hover:bg-sky-700
                                             transition-colors duration-300"
                                    aria-label="Telefone de contato"
                                >
                                    <span className="flex items-center justify-center gap-2">
                                        <i className="fa fa-phone"></i>
                                        <span className="font-bold">(11) 98063-9525</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <WhatsAppFlutuante />
        </>
    );
}

export default HeaderApp;