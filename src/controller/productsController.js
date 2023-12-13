const productService = require('../services/productsService');
const productSchema = require('../schemas/productsSchema');

const createProduct = async (req, res) => {
    return await productService.createProductService(req, res);
};

const getProducts = async (req, res) => {
    return await productService.getProductsService(req, res);
};

const updateProduct = async (req, res) => {
    return await productService.updateProductService(req, res);
};

const deleteProduct = async (req, res) => {
    return await productService.deleteProductService(req, res);
};

const ProductPrice = async (req, res) => {
   return await productService.ProductPriceService(req, res);
};

module.exports = {
    createProduct,
    getProducts,
    updateProduct,
    deleteProduct,
    ProductPrice,
};