const express = require('express');
const mongoose = require('mongoose');
const productsRoutes = require('./routes/products');

const app = express();
const port = process.env.Port || 5000;
const urlMongo = "mongodb://drenvio:moM5f3AodwLE5d0A@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.unqyghm.mongodb.net:27017/?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin";
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/', productsRoutes);

mongoose.connect(urlMongo, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('Error connecting to MongoDB:', error));

app.listen(port, () => console.log("Server listening on port:", port));
