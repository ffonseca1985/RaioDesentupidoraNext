"use client";

import React, { FC } from "react";

// import whatApp from "../assets/images/whatsapp.png"

interface BtnWhatsAppProps {
    variant?: 'default' | 'small';
}

export const BtnWhatsApp: FC<BtnWhatsAppProps> = ({ variant = 'default' }) => {
    const baseStyles = "group relative overflow-hidden bg-green-500 text-white rounded-lg transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:bg-green-600";
    
    const sizeStyles = variant === 'small' 
        ? "px-4 py-2 text-sm"
        : "px-8 py-3";

    return (
        <a
            href="https://wa.me/5511980639525"
            className={`${baseStyles} ${sizeStyles} flex items-center justify-center gap-2`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
        >
            <i className="fa-brands fa-whatsapp text-xl"></i>
            {variant === 'default' && "WhatsApp"}
        </a>
    );
};

export const WhatsAppFlutuante: React.FC = () => {
    const phoneNumber = "5511980639525";
    const message = "Olá, gostaria de fazer um orçamento!";

    const handleWhatsAppClick = () => {
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <a
            href="https://wa.me/5511980639525"
            className="fixed bottom-10 right-10 w-16 h-16 bg-green-500 hover:bg-green-600 
                     text-white rounded-full flex items-center justify-center text-3xl
                     shadow-lg hover:shadow-xl transition-all duration-300 transform 
                     hover:-translate-y-1 z-50"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Flutuante"
        >
            <i className="fa-brands fa-whatsapp"></i>
        </a>
    );
};