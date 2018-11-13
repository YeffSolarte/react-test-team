'use strict';

const fs = require("fs");
const cors = require('cors');
const bodyParser = require("body-parser");
const _ = require('lodash');
const express = require('express');
const app = express();
const api = express.Router();


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Prueba');
});

api.get('/products/:category?', (req, res) => {
    const dataFile = JSON.parse(fs.readFileSync('./assets/aU44UDjV.json', 'utf8'));
    const category = req.params.category.toLowerCase() || 'all';
    const products = category === 'all' ? dataFile : dataFile.filter(product => (
        product.categories
            .map(cat => cat.toLowerCase())
            .includes(category)
    ));
    const count = products.length;
    const hideCount = dataFile.length - products.length;
    setTimeout(() => {
        res.send({ data: products, count, hideCount });
    }, 1500);

});

api.get('/categories', (req, res)  => {
    const file = JSON.parse(fs.readFileSync('./assets/aU44UDjV.json', 'utf8'));
    const categories = _.concat(
        _.uniq(
            _.flatten(
                file.map(product => product.categories)
            )
        )
    );
    res.send({ data: categories });
});

api.post('/contact', (req, res) => {
    console.log(req.body);
    const { firstName, lastName } = req.body;
    setTimeout(() => {
        res.send({ message: `Hi ${firstName} ${lastName}, your message have been sent correctly` });
    }, 1500);

});

app.use('/api', api);

module.exports = app;