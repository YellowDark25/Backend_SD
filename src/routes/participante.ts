import express,{ Request, Response} from 'express'
import {prisma} from '../prisma'
const participante = express.Router();

participante.get('/participantes', async (req: Request, res: Response) => {
    const participantes = await prisma.participante.findMany();

    return res.json(participantes).status(200)
})
participante.post('/participante', async (req: Request, res: Response) => {
    const {nome, vida, vidaMaxima} = req.body;
    const participante = await prisma.participante.create({
        data: {
            nome,
            vida,
            vidaMaxima,
            
        }
    })

    return res.json(participante).status(201)
})
participante.get('/participante/:id', async (req: Request, res: Response) => {
    const {id} = req.params;
    const participante = await prisma.participante.findUnique({
        where: {
            id: Number(id)
        }
    })

    return res.json(participante).status(200)
})

export {participante}