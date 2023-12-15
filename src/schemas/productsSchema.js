const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    __id: String,
    name: String,
    inStock: Boolean,
    basePrice: Number,
    brand: String,
    __v: Number
});

module.exports = mongoose.model('Product', ProductSchema);