const productSchema = require('../schemas/productsSchema');

const createProductService = async (req, res) => {
    try {

    } catch (error) {
        console.error('Error in create products:', error);
        res.status(500).json({ error: 'Error in create Products' });
    }
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
    try {

    } catch (error) {
        console.error('Error in update products:', error);
        res.status(500).json({ error: 'Error in Update Products' });
    }
};

const deleteProductService = async (req, res) => {
    try {

    } catch (error) {
        console.error('Error in delete products:', error);
        res.status(500).json({ error: 'Error in delete Products' });
    }
};

const ProductPriceService = async (req, res) => {
    try {

    } catch (error) {
        console.error('Error in price products:', error);
        res.status(500).json({ error: 'Error in Price Products' });
    }
};

module.exports = {
    createProductService,
    getProductsService,
    updateProductService,
    deleteProductService,
    ProductPriceService,
};