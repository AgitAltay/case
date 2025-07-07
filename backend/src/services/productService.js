const productRepository = require('../repositories/productRepository');
const { getGoldPricePerGram } = require('../utils/goldPriceFetcher');

async function getProducts() {
  const products = await productRepository.getAllProducts();

  const goldPrice = await getGoldPricePerGram();


  const productsWithPrice = products.map(product => {
    const price = ((product.popularityScore + 1) * product.weight * goldPrice);
    return { ...product, price: price.toFixed(2) }; 
  });

  return productsWithPrice;
}

module.exports = { getProducts };
