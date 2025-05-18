import { PrismaClient } from "@prisma/client";

let prisma;

if (!global.prisma) {
    global.print = new PrismaClient();
}

prisma = global.print;


export default prisma;