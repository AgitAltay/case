const fs = require('fs').promises;
const path = require('path');

const productsFilePath = path.join(__dirname, '../../data/products.json');

async function getAllProducts() {
  const data = await fs.readFile(productsFilePath, 'utf-8');
  return JSON.parse(data);
}

module.exports = { getAllProducts };
