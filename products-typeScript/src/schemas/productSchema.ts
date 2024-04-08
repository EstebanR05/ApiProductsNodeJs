import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    __id: String || null,
    name: String || null,
    inStock: Boolean || null,
    basePrice: Number || null,
    brand: String || null,
    stock: Boolean || null,
    __v: Number || null
});

export default mongoose.model('Product', ProductSchema);