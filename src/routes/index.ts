import express from "express"
import { participante } from "./participante"
const routes = express.Router()


routes.use(participante)

export {routes}