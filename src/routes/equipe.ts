import express, {Request, Response} from 'express';
import {prisma} from '../prisma';
const equipe = express.Router();
equipe.get('/equipes', async (req: Request, res: Response) => {
    const equipes = await prisma.equipe.findMany();
    return res.json(equipes).status(200)
})
equipe.get('/equipe/:id', async (req: Request, res: Response) => {
    const {id} = req.params;
    const equipe = await prisma.equipe.findUnique({
        where: {
            id: Number(id)
        }
    })
    return res.json(equipe).status(200)
})
equipe.post('/equipe', async (req: Request, res: Response) => {
    const {nome, participanteId, saladaId} = req.body;
    const equipe = await prisma.equipe.create({
        data: {
            nome,
            participanteId,
            saladaId
        }
    })
    return res.json(equipe).status(201)
})
export {equipe}