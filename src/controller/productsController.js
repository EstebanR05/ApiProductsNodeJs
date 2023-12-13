const productService = require('../services/productsService');

const getProducts = (req, res) => {
    const products = productService.getProductsService(req, res);
    console.log(products); 
    res.send("this is getProducts");
};

const ProductPrice = (req, res) => {
    const servicePrice = productService.ProductPriceService(req, res) 
    res.send("we have in ", req.params.nameProduct, "whith id: ", req.params.id);
};

module.exports = { getProducts, ProductPrice };