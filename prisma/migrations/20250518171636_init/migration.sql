-- CreateTable
CREATE TABLE "IMC" (
    "id" SERIAL NOT NULL,
    "peso" INTEGER NOT NULL,
    "altura" INTEGER NOT NULL,

    CONSTRAINT "IMC_pkey" PRIMARY KEY ("id")
);
