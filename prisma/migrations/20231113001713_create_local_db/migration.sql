-- CreateTable
CREATE TABLE "Participante" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "salaId" INTEGER,
    "vida" INTEGER NOT NULL,
    "vidaMaxima" INTEGER NOT NULL,
    "equipeId" INTEGER,
    CONSTRAINT "Participante_salaId_fkey" FOREIGN KEY ("salaId") REFERENCES "Sala" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Participante_equipeId_fkey" FOREIGN KEY ("equipeId") REFERENCES "Equipe" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Sala" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "capacidade" INTEGER NOT NULL,
    "participanteId" INTEGER,
    "equipeId" INTEGER,
    CONSTRAINT "Sala_equipeId_fkey" FOREIGN KEY ("equipeId") REFERENCES "Equipe" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Equipe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "participanteId" INTEGER,
    "saladaId" INTEGER
);

-- CreateIndex
CREATE UNIQUE INDEX "Participante_id_key" ON "Participante"("id");
