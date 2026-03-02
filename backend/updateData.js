const fs = require('fs');
const path = require('path');
const { fetchRealData, fetchCorrelationData, fetchMarketBreadth, fetchEconomicEvents } = require('./server-fetch');

async function updateData() {
  // Exemplo: US30, HK50, 15m
  const indices = ['US30', 'HK50'];
  const timeframe = '15m';
  const allData = {};

  for (const symbol of indices) {
    allData[symbol] = {};
    allData[symbol].candles = await fetchRealData(symbol, timeframe);
    allData[symbol].correlations = await fetchCorrelationData(symbol);
    const breadth = await fetchMarketBreadth(symbol);
    allData[symbol].breadthSummary = breadth.summary;
    allData[symbol].breadthDetails = breadth.details;
  }

  allData.economicEvents = await fetchEconomicEvents();

  fs.writeFileSync(path.join(__dirname, '../data/market-data.json'), JSON.stringify(allData, null, 2));
  console.log('Dados atualizados em data/market-data.json');
}

updateData();
