const path = require('path');
const express = require('express');
const app = express();
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const store = require('./store');

// const User = require('./models/user');
// const Ad = require('./models/ad');
// const BodyType = require('./models/bodyType');
// const City = require('./models/city');
// const Color = require('./models/color');
// const Currency = require('./models/currency');
// const DriveUnit = require('./models/driveUnit');
// const InteriorColor = require('./models/interiorColor');
// const InteriorTrimMaterial = require('./models/interiorTrimMaterial');
// const Region = require('./models/region');
// const State = require('./models/state');
// const FuelType = require('./models/fuelType');
// const SellerType = require('./models/sellerType');
// const TransmissionType = require('./models/transmissionType');
// const ExchangeVariant = require('./models/exchangeVariant');
// const carModel = require('./models/carModel');

let indexRouter = require('./routes/index');
let carsRouter = require('./routes/cars')
let registrationRouter = require('./routes/registration');
let loginRouter = require('./routes/login');
let profileRouter = require('./routes/profile');
let logoutRouter = require('./routes/logout');

let apiController = require('./api/index');

const port = process.env.PORT || 3000;

app.engine('.hbs', exphbs({
    defaultLayout: 'layout',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/public', express.static(__dirname + '/public'));

app.use('/', indexRouter);
app.use('/cars', carsRouter);
app.use('/login', loginRouter);
app.use('/registration', registrationRouter);
app.use('/profile', profileRouter);
app.use('/logout', logoutRouter);
app.use('/api', apiController);

app.listen(port, () => {
    console.log(`Express web app available at localhost: ${port}`);
});