import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = 8000;

type dadoParams = {
    lados: number
}

app.use(cors());

// Descartei a ideia de passar os lados para o endpoint pela route pois achei que não encaixaria nos requisitos do desafio, apesar de ser mais simples.

// app.get("/api/rolar/:lados", async (req: Request<dadoParams>, res: Response) => {
//    function gerarAleatorio(max: number): number{
//        return Math.floor(Math.random() * max) + 1;
//    }
//    const roll = gerarAleatorio(req.params.lados);
//    res.send(roll.toString());
// })

function gerarAleatorio(max: number): number{
    return Math.floor(Math.random() * max) + 1;
}

app.get("/api/D6", async (req: Request, res: Response) => {
    const roll = gerarAleatorio(6);
    res.send(roll.toString());
})

app.get("/api/D10", async (req: Request, res: Response) => {
    const roll = gerarAleatorio(10);
    res.send(roll.toString());
})

app.get("/api/D12", async (req: Request, res: Response) => {
    const roll = gerarAleatorio(12);
    res.send(roll.toString());
})

app.get("/api/D20", async (req: Request, res: Response) => {
    const roll = gerarAleatorio(20);
    res.send(roll.toString());
})


app.listen(PORT, function () {
    console.log("Servidor rodando na porta: " + PORT);
});

