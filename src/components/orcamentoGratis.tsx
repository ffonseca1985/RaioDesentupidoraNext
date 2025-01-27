'use client'

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { sendMessage } from "../services/messageSevice";

const MySwal = withReactContent(Swal);
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

type OrcamentoForm = {
    name: string,
    email: string,
    tel: string,
    message: string
}

const OrcamentoGratis: React.FC = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const { register, handleSubmit, reset, control, formState: { errors } } = useForm<OrcamentoForm>({
        mode: 'onBlur'
    });

    const showErrorAlert = (errors: string[]) => {
        return MySwal.fire({
            icon: 'error',
            title: 'Oops...',
            html: (
                <div className="text-left">
                    {errors.map((error, index) => (
                        <p key={index}>{error}</p>
                    ))}
                </div>
            )
        });
    };

    const showSuccessAlert = () => {
        return MySwal.fire({
            icon: 'success',
            title: 'Obrigado por enviar esta mensagem',
            text: "Entraremos em contato o mais rápido possível."
        });
    };

    const showErrorProcessingAlert = () => {
        return MySwal.fire({
            icon: 'error',
            title: 'Estamos com problema ao processar esta mensagem',
            text: "Por favor, tente mais tarde."
        });
    };

    const onSubmit = async (data: OrcamentoForm) => {
        setIsProcessing(true);

        const validations = {
            email: new RegExp(regexEmail).test(data.email),
            name: data.name?.trim(),
            tel: data.tel.replaceAll("_", "").length >= 14,
            message: data.message?.trim()
        };

        const validationErrors = Object.entries(validations)
            .filter(([_, isValid]) => !isValid)
            .map(([field]) => `${field.charAt(0).toUpperCase() + field.slice(1)} inválido`);

        if (validationErrors.length > 0) {
            await showErrorAlert(validationErrors);
            setIsProcessing(false);
            return;
        }

        try {
            await sendMessage(data);
            await showSuccessAlert();
            reset();
        } catch (error) {
            await showErrorProcessingAlert();
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4" id="myanchor">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                        Faça um Orçamento Grátis
                    </h3>
                    <p className="text-gray-600 mt-2">
                        Preencha o formulário abaixo e entraremos em contato o mais breve possível
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                                Nome Completo *
                            </label>
                            <input
                                type="text"
                                {...register("name", { required: true })}
                                className={`w-full px-4 py-2 border rounded-lg transition-colors
                                    ${errors.name 
                                        ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                                        : 'border-gray-300 focus:ring-sky-500 focus:border-sky-500'}
                                    focus:ring-2`}
                                placeholder="Seu nome completo"
                            />
                            {errors.name && (
                                <p className="mt-1 text-sm text-red-600">Nome é obrigatório</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                                Email *
                            </label>
                            <input
                                type="email"
                                {...register("email", { 
                                    required: true,
                                    pattern: regexEmail
                                })}
                                className={`w-full px-4 py-2 border rounded-lg transition-colors
                                    ${errors.email 
                                        ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                                        : 'border-gray-300 focus:ring-sky-500 focus:border-sky-500'}
                                    focus:ring-2`}
                                placeholder="seu@email.com"
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-600">Email válido é obrigatório</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="tel">
                            Telefone *
                        </label>
                        <Controller
                            name="tel"
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange, value } }) => (
                                <PatternFormat
                                    format="(##) #####-####"
                                    mask="_"
                                    value={value}
                                    onValueChange={(values: any) => {
                                        onChange(values.value);
                                    }}
                                    className={`w-full px-4 py-2 border rounded-lg transition-colors
                                        ${errors.tel 
                                            ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                                            : 'border-gray-300 focus:ring-sky-500 focus:border-sky-500'}
                                        focus:ring-2`}
                                    placeholder="(xx) xxxxx-xxxx"
                                />
                            )}
                        />
                        {errors.tel && (
                            <p className="mt-1 text-sm text-red-600">Telefone é obrigatório</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
                            Mensagem *
                        </label>
                        <textarea
                            {...register("message", { required: true })}
                            rows={4}
                            className={`w-full px-4 py-2 border rounded-lg transition-colors
                                ${errors.message 
                                    ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                                    : 'border-gray-300 focus:ring-sky-500 focus:border-sky-500'}
                                focus:ring-2`}
                            placeholder="Descreva o serviço que você precisa..."
                        />
                        {errors.message && (
                            <p className="mt-1 text-sm text-red-600">Mensagem é obrigatória</p>
                        )}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <button
                            type="submit"
                            disabled={isProcessing}
                            className={`
                                px-8 py-3 rounded-lg font-medium text-white
                                transition-all duration-300 transform
                                shadow-lg hover:shadow-xl
                                w-full sm:w-auto
                                ${isProcessing 
                                    ? 'bg-gray-400 cursor-not-allowed' 
                                    : 'bg-sky-500 hover:bg-sky-600 hover:-translate-y-0.5'}
                            `}
                        >
                            {isProcessing ? (
                                <span className="flex items-center justify-center space-x-2">
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>Processando...</span>
                                </span>
                            ) : (
                                "Enviar Formulário"
                            )}
                        </button>
                        
                        <p className="text-sm text-gray-600">
                            * Campos obrigatórios
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default OrcamentoGratis;