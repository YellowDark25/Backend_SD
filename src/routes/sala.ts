import express from "express";
import { prisma } from "../prisma";

const sala = express.Router();

sala.get("/salas", async (req, res) => {
  const salas = await prisma.sala.findMany();

  return res.json(salas).status(200);
});
sala.get("/sala/:id", async (req, res) => {
    const { id } = req.params;
    const sala = await prisma.sala.findUnique({
        where: {
        id: Number(id),
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
        participanteId
        },
    });
    
    return res.json(sala).status(201);
})


export { sala };
