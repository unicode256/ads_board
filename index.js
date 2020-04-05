const path = require('path')
const express = require('express');
const app = express();
const exphbs = require('express-handlebars')
let store = require('./store');

let indexRouter = require('./routes/index');
let carsRouter = require('./routes/cars');

const port = process.env.PORT || 3000;

app.engine('.hbs', exphbs({
    defaultLayout: 'layout',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

app.use('/', indexRouter);
app.use('/cars', carsRouter);

app.get('/', (req, res) => {
    res.send('main pagee');
})

// app.get('/cars/all', (reg, res) => {

// })

app.listen(port, () => {
    console.log(`Express web app available at localhost: ${port}`);
});