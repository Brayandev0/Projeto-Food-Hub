import express from 'express';
import cors from 'cors';

let app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],  // adicionar os métodos que sua API permite
    allowedHeaders: ['Content-Type', 'Authorization','x-api-key'], // adicionar os cabeçalhos que sua API permite
  }));

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello World");
});


app.use((err, req, res, next) => { // evita que o usuario passe valores invalidos, e evita que o erro vaze do servidor 
    if (err instanceof Error ) {
        return res.status(500).json({ msg: "Um erro ocorreu com a sua solicitacao", code: 500 });
    }
    next(); 
});

// Adicione antes do middleware de tratamento de erros
app.use((req, res) => {
    res.status(404).json({ msg: "Rota não encontrada ou metodo HTTP Invalido", code: 404 });
  });


export default app;