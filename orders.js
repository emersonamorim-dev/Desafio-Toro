// orders.js
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { symbol, amount } = req.body;
  // lógica para criar a ordem
  res.send({ message: 'Ordem criada com sucesso' });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const { symbol, amount } = req.body;
  // lógica para atualizar a ordem com o id especificado
  res.send({ message: `Ordem com id ${id} atualizada com sucesso` });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  // lógica para deletar a ordem com o id especificado
  res.send({ message: `Ordem com id ${id} deletada com sucesso` });
});

module.exports = router;
