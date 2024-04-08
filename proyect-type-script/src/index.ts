import express from 'express';
import mongoose from 'mongoose';
//import productSchema from './productsSchema';

const app = express();
const port = 5000;
const urlMongo = "mongodb://drenvio:moM5f3AodwLE5d0A@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.unqyghm.mongodb.net:27017/?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin";

app.use(express.json());

app.get('/ping', (_req, _res) => {
    try {
        //const products = await productSchema.find({ $or: [{ inStock: true }, { stock: true }] });
        const products = {};
        _res.json(products || {});
    } catch (error) {
        handleError(_res, error, 'Error in get Products');
    }
});

app.get('/ping', (_req, _res) => {
    try {
        //const product = (await productSchema.find({})).find(item => item._id == req.params.user_id && item.name == req.params.product_name);
        const product = {};
        _res.json(product || {});
    } catch (error) {
        handleError(_res, error, 'Error in Price Products');
    }
});

const handleError = (_res: any, error: any, message: string) => {
    console.error(message, error);
    _res.status(500).json({ error: message });
};

mongoose.connect(urlMongo)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error: Error) => console.error('Error connecting to MongoDB:', error));

app.listen(port, () => console.log("Server listening on port:", port));
