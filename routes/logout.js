const express = require('express');
const router = express();
const isAuth = require('../auth');

router.get('/', isAuth, (req, res) => {
    if(req.auth){
        res.clearCookie('auth_token');
    }
    console.log('req: ', req.headers.referer);
    if(req.headers.referer){
        res.redirect(req.headers.referer);
    }
    else {
        res.redirect('/login');
    }
});

module.exports = router;