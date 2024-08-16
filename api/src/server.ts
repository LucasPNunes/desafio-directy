import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = 8000;

type dadoParams = {
    lados: number
}

app.use(cors());
function gerarAleatorio(max: number): number{
    return Math.floor(Math.random() * max) + 1;
}

app.get("/api/rolar/:lados", async (req: Request<dadoParams>, res: Response) => {
    const roll = gerarAleatorio(req.params.lados);
    res.send(roll.toString());
 })

app.listen(PORT, function () {
    console.log("Servidor rodando na porta: " + PORT);
});

