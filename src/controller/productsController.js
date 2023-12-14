const productService = require('../services/productsService');
const productSchema = require('../schemas/productsSchema');


const createProduct = (req, res) => {
    res.json(req.body)

    // const product = productSchema(req.body);
    // product.save()
    //     .then((p) => res.body(p))
    //     .catch((error) => res.json({ message: error }));
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