let express = require('express');
let router = express();
const isAuth = require('../auth');

const carsController = require('../controllers/carsController');

router.get('/all', isAuth, carsController.allCarsAdsList);

router.get('/:car_mark/all', isAuth, carsController.specifiedCarsAdsList);

router.get('/add', isAuth, carsController.showAdCreator);

router.post('/add', isAuth, carsController.addAd);

module.exports = router;