let express = require('express');
let router = express();
let store = require('../store');

router.get('/all', function(req, res) {
  res.render('cars', {
      title: 'Все тачки',
      arrayOfAdsData: store.ads
  });
});

module.exports = router;