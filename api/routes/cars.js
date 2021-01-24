const express = require('express');
const router = express();

const carsController = require('../controllers/carsController');

router.get('/models', carsController.getCarModelsByCarMark);

module.exports = router;