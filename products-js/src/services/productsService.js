const productSchema = require('../schemas/productsSchema');

const getProductsService = async (req, res) => {
    try {
        const products = await productSchema.find({ $or: [{ inStock: true }, { stock: true }] });
        res.json(products);
    } catch (error) {
        handleError(res, error, 'Error in get Products');
    }
};

const ProductPriceService = async (req, res) => {
    try {
        const product = (await productSchema.find({})).find(item => item._id == req.params.user_id && item.name == req.params.product_name);
        res.json(product || {});
    } catch (error) {
        handleError(res, error, 'Error in Price Products');
    }
};

const handleError = (res, error, message) => {
    console.error(message, error);
    res.status(500).json({ error: message });
};

module.exports = { getProductsService, ProductPriceService };
