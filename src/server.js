const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const routes = require('../src/routes');
const PORT = process.env || 3000;

mongoose.connect('mongodb+srv://willian_leman:American1995@to-do-list-jnnww.mongodb.net/to-do-list', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);