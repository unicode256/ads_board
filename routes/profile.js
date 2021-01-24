const express = require('express');
const router = express();
const isAuth = require('../auth');

const User = require('../models/user');

router.get('/', isAuth, (req, res) => {
    console.log(req.auth);
    if(req.auth){
        res.render('profile', {
            title: 'Профиль',
            isAuth: true,
            name: req.user.id
        });
    }
    else {
        res.redirect('/login');
    }
});

module.exports = router;