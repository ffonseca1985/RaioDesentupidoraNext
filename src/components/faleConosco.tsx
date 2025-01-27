import Link from "next/link"
import { FC } from "react"

interface FaleConoscoProps {
    className?: string;
    variant?: 'primary' | 'secondary';
}

const ButtonContent = () => (
    <>
        <span className="relative z-10 flex items-center justify-center gap-2">
            <i className="fa fa-envelope-o text-lg" aria-hidden="true"></i>
            ENVIE UMA MENSAGEM
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-sky-700 to-sky-600 
                      transform scale-x-0 origin-left transition-transform duration-300 
                      ease-out group-hover:scale-x-100">
        </div>
    </>
);

const getButtonStyles = (variant: 'primary' | 'secondary' = 'primary') => {
    const baseStyles = `
        group relative overflow-hidden text-white px-6 py-3 rounded-lg 
        transition-all duration-300 font-bold shadow-lg hover:shadow-xl 
        transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 
        focus:ring-offset-2
    `;

    const variantStyles = {
        primary: `bg-gradient-to-r from-sky-600 to-sky-500 focus:ring-sky-500`,
        secondary: `bg-gradient-to-r from-red-600 to-red-500 focus:ring-red-500`
    };

    return `${baseStyles} ${variantStyles[variant]}`;
};

const BntFaleConosco: FC<FaleConoscoProps> = ({ className, variant = 'primary' }) => {
    return (
        <div className={`inline-flex ${className ?? ''}`}>
            <Link 
                href="/contato" 
                className={getButtonStyles(variant)}
                aria-label="Enviar mensagem"
            >
                <ButtonContent />
            </Link>
        </div>
    )
}

export const BntFaleConoscoMobile: FC<FaleConoscoProps> = ({ className, variant = 'primary' }) => {
    return (
        <div className={`w-full ${className ?? ''}`}>
            <Link 
                href="/contato" 
                className={`${getButtonStyles(variant)} w-full sm:w-auto inline-flex justify-center`}
                aria-label="Enviar mensagem"
            >
                <ButtonContent />
            </Link>
        </div>
    )
}

export default BntFaleConosco; 