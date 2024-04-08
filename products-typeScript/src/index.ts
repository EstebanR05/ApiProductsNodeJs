import express from 'express' //ESModules
//const express = require('express'); -> commonJs
import mongoose from 'mongoose';
import productsRoute from './routes/productsRoute';

const app = express();
const urlMongo = "mongodb://drenvio:moM5f3AodwLE5d0A@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.unqyghm.mongodb.net:27017/?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin";
const _PORT = 3000;

app.use(express.json());
app.use('/', productsRoute);

mongoose.connect(urlMongo).then(() => console.log('Conectado a MongoDB')).catch(error => console.error('Error conectando a MongoDB:', error));

app.listen(_PORT, () => {
    console.log(`Server running on port: ${_PORT}`);
});