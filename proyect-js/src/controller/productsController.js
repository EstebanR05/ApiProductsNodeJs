const productService = require('../services/productsService');

const getProducts = async (req, res) => {
    return await productService.getProductsService(req, res);
};

const ProductPrice = async (req, res) => {
    return await productService.ProductPriceService(req, res);
};

module.exports = { getProducts, ProductPrice };