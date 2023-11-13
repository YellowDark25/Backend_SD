import express from "express";
import { prisma } from "../prisma";

const sala = express.Router();

sala.get("/salas", async (req, res) => {
  const salas = await prisma.sala.findMany({
    include: {
      participantes: true,
      Equipe: true,
      _count: { select: { participantes: true } },
    },
    orderBy: {
      id: "asc"
    }
  });

  return res.json(salas).status(200);
});
sala.get("/sala/:id", async (req, res) => {
  const { id } = req.params;
  const sala = await prisma.sala.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      participantes: true,
      Equipe: true,
      _count: { select: { participantes: true } },
    },
  });

  return res.json(sala).status(200);
});
sala.post("/sala", async (req, res) => {
  const { nome, capacidade, participanteId } = req.body;
  const sala = await prisma.sala.create({
    data: {
      nome,
      capacidade,
    },
  });

  return res.json(sala).status(201);
});
sala.put("/sala/:id", async (req, res) => {
  const { id } = req.params;
  const { nome, capacidade, participanteId } = req.body;
  const sala = await prisma.sala.update({
    where: {
      id: Number(id),
    },
    data: {
      nome,
      capacidade,
      participantes: { connect: { id: participanteId } },
    },
  });

  return res.json(sala).status(200);
});

export { sala };
