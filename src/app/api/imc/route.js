import { NextResponse } from "next/server";
import prisma from "@/../prisma/client";

export async function GET() {
    const imc = await prisma.IMC.findMany();
    return NextResponse.json(imc);
}

export async function POST(request) {
    const body = await request.json();
    const altura = parseFloat(body.altura);
    const peso = parseFloat(body.peso);

    if (isNaN(altura) || isNaN(peso)) {
        return NextResponse.json({ error: 'Altura e peso devem ser numeros validos.' }, { status: 400 })
    }

    const imc = await prisma.IMC.create({
        data: {
            altura: body.altura,
            peso: body.peso
        }
    })
    return NextResponse.json(imc);
}