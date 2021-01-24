const express = require('express');
const router = express();
const isAuth = require('../auth');
const jwt = require('jsonwebtoken');
const TOKEN_SECRET = require('../config').TOKEN_SECRET;

const User = require('../models/user');

router.get('/', isAuth,(req, res) => {
    if(!req.auth){

        res.render('login', {
            title: 'Вход',
        });
    }
    else {
        res.redirect('/profile');
    }
});

router.post('/', async (req, res) => {
    if(!req.auth){

        const user = await User.findOne({
            attributes: ['id', 'password'],
            where: {
                email: req.body.email
            }
        });
    
        console.log(1);
    
        if(!user){
            res.render('login', {
                title: 'Вход',
                error: 'Неверный E-mail или пароль'
            });
            console.log(2);
        }
        else {
            if(!user.validPassword(req.body.password)){
                console.log(3);
                console.log(req.body.password);
                console.log(user.password);
                
                res.render('login', {
                    title: 'Вход',
                    error: 'Неверный E-mail или пароль'
                });
            }
            else {
                console.log(3);
                const token = jwt.sign({id: user.id}, TOKEN_SECRET, {expiresIn: '48h'});
                res.cookie('auth_token', token);
                res.redirect('/profile');
            }
        }
    }
});

module.exports = router;