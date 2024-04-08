import express from "express";
import * as productsController from '../controller/productsController';

const router = express.Router();

router
    .get('/products', productsController.getProducts)
    .get('/price/:user_id/:product_name', productsController.ProductPrice)

export default router;