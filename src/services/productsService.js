const productSchema = require('../schemas/productsSchema');

const getProductsService = async (req, res) => {
    try {
        const results = await productSchema.find({});
        res.json(results);
    } catch (error) {
        console.error('Error in get products:', error);
        res.status(500).json({ error: 'Error in get Products' });
    }
};

const ProductPriceService = async (req, res) => {
    try {
        const results = await productSchema.find({});
        let product = {};

        for (let index = 0; index < results.length; index++) {
            if (results[index]._id == req.params.user_id && results[index].name == req.params.product_name) {
                product = results[index];
            }
        }

        res.json(product);
    } catch (error) {
        console.error('Error in price products:', error);
        res.status(500).json({ error: 'Error in Price Products' });
    }
};

module.exports = { getProductsService, ProductPriceService };