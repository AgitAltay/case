const productService = require('../services/productService');

async function getAllProducts(req, res) {
  try {
    const products = await productService.getProducts();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

module.exports = { getAllProducts };
