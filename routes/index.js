let express = require('express');
let router = express();

router.get('/', function(req, res) {
  res.render('index', {
      title: 'Сайт продажи тачек',
  });
});

module.exports = router;