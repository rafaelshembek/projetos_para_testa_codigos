import { NextResponse } from "next/server";
import prisma from "@prisma/client";

// export async function GET() {
//     const imc = prisma.user.findMany();
//     return NextResponse.json(imc);
// }

export async function POST(request) {
    const body = await request.json();
    const imc = await prisma.user.create({
        data: {
            altura: body.altura,
            peso: body.peso
        }
    })
    return NextResponse.json(imc);
}