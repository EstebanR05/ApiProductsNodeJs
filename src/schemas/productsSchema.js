const mongoose = require('mongoose');

const ProductSchema = mongoose.model('ProductSchema', mongoose.Schema({}, { strict: false }));

module.exports = ProductSchema;