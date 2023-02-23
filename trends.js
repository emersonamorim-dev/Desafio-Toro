// trends.js
const express = require('express');
const router = express.Router();

const trends = [
  { symbol: 'PETR4', currentPrice: 28.44 },
  { symbol: 'MGLU3', currentPrice: 25.91 },
  { symbol: 'VVAR3', currentPrice: 25.91 },
  { symbol: 'SANB11', currentPrice: 40.77 },
  { symbol: 'TORO4', currentPrice: 115.98 },
];

router.get('/', (req, res) => {
  res.send(trends);
});

module.exports = router;