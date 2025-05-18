'use client'
import IMC from "@/components/imc";
import { useState, useEffect } from "react";


export default function Settings() {

    const [form, setForm] = useState(
        {
            peso: "",
            altura: ""
        }
    );

    const [mostraIMC, setMostraIMC] = useState(false);

    const handleCalcImc = () => {

        if (!form.peso || !form.altura) {
            alert(`peso e altura invalido`);
            setMostraIMC(false);
            return;
        }
        // setForm({ peso: "", altura: "" });
        setMostraIMC(true);
    }
    return (
        <main className="p-4 bg-zinc-100 w-full text-black">
            <div className="justify-between">
                <label>Peso:
                    <input placeholder="Exemplo 70" className="ml-2" name="peso" step="any" type="number" value={form.peso} onChange={(e) => setForm({ ...form, peso: e.target.value })} />
                </label>
                <label>
                    altura:
                    <input placeholder="Exemplo 1.70" className="ml-2" type="number" step="any" name="altura" value={form.altura} onChange={(e) => setForm({ ...form, altura: e.target.value })} />
                </label>
            </div>
            {
                mostraIMC && (
                    <div className="p-2">
                        Sua classificacao Corporal
                        <IMC peso={form.peso} altura={form.altura} />
                    </div>
                )
            }
            <div>
                <button onClick={handleCalcImc} className="cursor-pointer bg-blue-400 text-white p-3 rounded-md">Calcular IMC</button>
            </div>
        </main>
    )
}