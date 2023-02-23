const express = require('express');
const app = express();

const trendsRouter = require('./trends');
app.use("/trends", trendsRouter);

const ordersRouter = require('./orders');
app.use("/orders", ordersRouter);

const port = 3000;

app.get('/', (req, res) => {
  res.send('Bem-vindo ao Desafio Toro Desenvolvedor Full-Stack e Backend!');
});

app.listen(port, () => {
  console.log(`Servidor está executando na porta ${port}`);
});
