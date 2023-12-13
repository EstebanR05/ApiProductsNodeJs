const express = require('express');
const productsController = require('../controller/productsController')
const router = express.Router();

router
    .post('/CreateProducts', productsController.createProduct)
    .get('/products', productsController.getProducts)
    .put('/update/:id', productsController.updateProduct)
    .delete('/delete/:id', productsController.deleteProduct)
    .get('/price/:id/:nameProduct', productsController.ProductPrice)

module.exports = router;