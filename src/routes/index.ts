import express from "express"
import { participante } from "./participante"
import { sala } from "./sala"
const routes = express.Router()


routes.use(participante)
routes.use(sala)

export {routes}