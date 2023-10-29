-- AlterTable
ALTER TABLE "Equipe" ADD COLUMN     "saladaId" INTEGER;

-- AlterTable
ALTER TABLE "Sala" ADD COLUMN     "equipeId" INTEGER;

-- AddForeignKey
ALTER TABLE "Sala" ADD CONSTRAINT "Sala_equipeId_fkey" FOREIGN KEY ("equipeId") REFERENCES "Equipe"("id") ON DELETE SET NULL ON UPDATE CASCADE;
