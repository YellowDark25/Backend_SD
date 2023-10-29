-- AlterTable
ALTER TABLE "Participante" ADD COLUMN     "equipeId" INTEGER;

-- CreateTable
CREATE TABLE "Equipe" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "participanteId" INTEGER,

    CONSTRAINT "Equipe_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Participante" ADD CONSTRAINT "Participante_equipeId_fkey" FOREIGN KEY ("equipeId") REFERENCES "Equipe"("id") ON DELETE SET NULL ON UPDATE CASCADE;
