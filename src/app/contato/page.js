"use client";

import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Aqui você pode integrar com o backend ou serviço de email
        alert("Mensagem enviada com sucesso!");
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
            <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-5xl grid md:grid-cols-2 gap-8">

                {/* Informações de contato */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold">Vamos conversar</h2>
                    <p className="text-gray-600">
                        Estou interessado em oportunidades freelance ou posições em tempo integral. Entre em contato!
                    </p>

                    <div className="space-y-4 text-gray-700">
                        <div className="flex items-center gap-3">
                            <span className="text-blue-500 text-2xl">@</span>
                            <span>rafaelsilvagomesreal@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-blue-500 text-2xl">📞</span>
                            <span>(62) 995743263</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-blue-500 text-2xl">📍</span>
                            <span>Itinga - Maranhão, Brasil</span>
                        </div>
                    </div>
                </div>

                {/* Formulário */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                        type="text"
                        name="name"
                        placeholder="Seu Nome Completo"
                        className="w-full p-4 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Seu Email"
                        className="w-full p-4 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Seu Telefone"
                        className="w-full p-4 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        rows="4"
                        placeholder="Conte um pouco sobre seu projeto..."
                        className="w-full p-4 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 p-4 bg-green-500 hover:bg-green-600 text-white rounded-lg transition transform hover:scale-105"
                    >
                        Enviar Mensagem 📩
                    </button>
                </form>
            </div>
        </section>
    );
}
