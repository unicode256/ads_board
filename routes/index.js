let express = require('express');
let router = express();

router.get('/', (req, res) => {
  res.render('index', {
      title: 'Сайт продажи тачек',
  });
});

module.exports = router;