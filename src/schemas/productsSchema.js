const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    nameShoes: {
        type: String,
        required: true
    },
    brandShoes: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Product', ProductSchema);