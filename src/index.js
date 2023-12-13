const express = require('express');
const mongoose = require('mongoose');
const productsRoutes = require('./routes/products');

const app = express();
const port = process.env.Port || 5000;
const urlMongo = "mongodb://drenvio:moM5f3AodwLE5d0A@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.unqyghm.mongodb.net:27017/?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin";

app.use(express.json());
app.use('/api', productsRoutes);

app.get('/', (req, res) => res.send("Welcom this is a principal Route"));

mongoose.connect(urlMongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error Conexion in MongoDB:'));
db.once('open', () => { console.log('Conected base of data') });

app.listen(port, () => console.log("server Listen in the port: ", port));