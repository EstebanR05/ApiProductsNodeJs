const express = require('express');
const productsController = require('../controller/productsController')
const router = express.Router();

router
    .get('/products', productsController.getProducts)
    .get('/price/:user_id/:product_name', productsController.ProductPrice)

module.exports = router;