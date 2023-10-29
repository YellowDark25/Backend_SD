-- CreateTable
CREATE TABLE "Participante" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "salaId" INTEGER,

    CONSTRAINT "Participante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sala" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "capacidade" INTEGER NOT NULL,
    "participanteId" INTEGER,

    CONSTRAINT "Sala_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Participante_id_key" ON "Participante"("id");

-- AddForeignKey
ALTER TABLE "Participante" ADD CONSTRAINT "Participante_salaId_fkey" FOREIGN KEY ("salaId") REFERENCES "Sala"("id") ON DELETE SET NULL ON UPDATE CASCADE;
