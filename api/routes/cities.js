const express = require('express');
const router = express();

const citiesController = require('../controllers/citiesController');

router.get('/', citiesController.getCitiesByRegion);

module.exports = router;