/*
  Warnings:

  - Added the required column `vida` to the `Participante` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vidaMaxima` to the `Participante` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Participante" ADD COLUMN     "vida" INTEGER NOT NULL,
ADD COLUMN     "vidaMaxima" INTEGER NOT NULL;
