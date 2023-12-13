const productsSchema = require('../schemas/productsSchema')

const getProductsService = (req, res) => {
    const product = productsSchema.find({});
    return product;
};

const ProductPriceService = (req, res) => {
    return;
};

module.exports = { getProductsService, ProductPriceService };