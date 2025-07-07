const axios = require('axios');

const API_KEY = 'goldapi-1kihsmcq450o4-io'; // goldapi.io’dan aldığın API key’i buraya yaz

async function getGoldPricePerGram() {
  try {
    // goldapi.io endpoint (gram altın fiyatı için)
    // Döviz olarak USD ve gram cinsinden altın fiyatı talep edeceğiz
    const response = await axios.get('https://www.goldapi.io/api/XAU/USD', {
      headers: {
        'x-access-token': API_KEY,
        'Content-Type': 'application/json'
      }
    });

    // response.data.price değeri ons fiyatı (USD/oz)
    // 1 ons = 31.1035 gram olduğu için gram fiyatını hesaplayalım
    const pricePerOunce = response.data.price;
    const pricePerGram = pricePerOunce / 31.1035;

    return pricePerGram;
  } catch (error) {
    console.error('GoldAPI den altın fiyatı alınamadı:', error.message);
    // Hata durumunda fallback sabit değer döndür
    return 60.50;
  }
}

module.exports = { getGoldPricePerGram };
