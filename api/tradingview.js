// Vercel: api/proxy.js
export default async function handler(req, res) {
  const { url } = req.query;
  if (!url) {
    res.status(400).json({ error: 'Missing url parameter' });
    return;
  }

  try {
    const response = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    const contentType = response.headers.get('content-type');
    res.setHeader('content-type', contentType);
    const data = await response.text();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data', details: error.message });
  }
}
