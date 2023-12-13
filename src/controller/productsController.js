const productService = require('../services/productsService');

const getProducts = (req, res) => {
    const data = productService.getProductsService; 
    res.send("this is getProducts");
};

const ProductPrice = (req, res) => {
    res.send("we have in ", req.params.nameProduct, "whith id: ", req.params.id);
};

module.exports = { getProducts, ProductPrice };