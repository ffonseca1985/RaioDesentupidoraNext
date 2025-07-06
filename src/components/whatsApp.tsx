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
    return (
        <a
            href="https://wa.me/5511980639525"
            className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 
                     rounded-full flex items-center justify-center 
                     text-white text-2xl shadow-lg hover:bg-green-600 
                     transition-all duration-300 transform hover:scale-105 
                     hover:-translate-y-1 z-50 cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Flutuante"
        >
            <i className="fa-brands fa-whatsapp"></i>
            
            {/* Pulse Effect */}
            <span className="absolute inline-flex h-full w-full rounded-full 
                           bg-green-500 opacity-75 animate-ping"></span>
        </a>
    );
};