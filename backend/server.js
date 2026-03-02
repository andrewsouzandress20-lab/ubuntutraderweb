const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 4000;

// Exemplo de endpoint para proxy TradingView
app.get('/api/tradingview', async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: 'URL obrigatória' });
  try {
    const response = await fetch(url);
    const data = await response.text();
    res.send(data);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar dados', details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Backend rodando em http://localhost:${PORT}`);
});
