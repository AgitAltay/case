const express = require('express');
const productController = require('./productController');

const router = express.Router();

router.get('/', productController.getAllProducts);


module.exports = router;
