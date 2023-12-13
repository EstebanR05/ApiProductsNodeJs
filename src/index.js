const express = require('express');
const mongoose = require('mongoose');
const productsRoutes = require('./routes/products');
require('dotenv').config();

const app = express();
const port = process.env.Port || 5000;

app.use(express.json());
app.use('/api', productsRoutes);

app.get('/', (req, res) => res.send("Welcom this is a principal Route"));

mongoose.connect(
    "mongodb://drenvio:moM5f3AodwLE5d0A@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.unqyghm.mongodb.net:27017/?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin"
).then(() => console.log("conected to MongoDB")).catch((error) => console.log(error));

app.listen(port, () => console.log("server Listen in the port: ", port));