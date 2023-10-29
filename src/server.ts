import cors from 'cors';
import express from 'express';
import { routes } from './routes/';

const app = express();
app.use(express.json());
app.use(cors())
app.use(routes)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3333, '0.0.0.0',() => {
    console.log("HTTP running: in http://localhost:3333")
})