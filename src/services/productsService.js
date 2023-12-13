const productSchema = require('../schemas/productsSchema');

const createProductService = async (req, res) => {
    return;
};

const getProductsService = async (req, res) => {
    try {
        const results = await productSchema.find({});
        res.json(results);
    } catch (error) {
        console.error('Error in get products:', error);
        res.status(500).json({ error: 'Error in get Products' });
    }
};

const updateProductService = async (req, res) => {
    return;
};

const deleteProductService = async (req, res) => {
    return;
};

const ProductPriceService = async (req, res) => {
    return;
};

module.exports = {
    createProductService,
    getProductsService,
    updateProductService,
    deleteProductService,
    ProductPriceService,
};