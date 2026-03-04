// Vercel: api/proxy.js
const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: 'URL obrigatória' });
  try {
    const response = await fetch(url);
    const data = await response.text();
    res.send(data);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar dados', details: err.message });
  }
};
