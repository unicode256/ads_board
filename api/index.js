const express = require('express');
const app = express();
const citiesRouter = require('./routes/cities');
const carsRouter = require('./routes/cars');

app.use('/cities', citiesRouter);
app.use('/cars', carsRouter);

module.exports = app;