const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({});

module.exports = mongoose.model('products', ProductSchema);