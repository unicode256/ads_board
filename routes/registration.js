const express = require('express');
const router = express();
const isAuth = require('../auth');

const User = require('../models/user')

router.get('/', isAuth,(req, res) => {
    if(!req.auth){

        res.render('registration', {
            title: 'Регистрация',
            message: false
        });
    }
    else {
        res.redirect('/profile');
    }
});

router.post('/', isAuth, async (req, res) => {
    if(!req.auth){

        const emailExist = await User.findOne({
            where: {
                email: req.body.email
            }
        })
    
        if(emailExist) {
            res.render('registration', {
                title: 'Регистрация',
                error: 'Этот адрес уже зарегистрирован'
            });
        }
        else {
            User.create({
                name: req.body.name,
                city: req.body.city,
                phone_number: req.body.phone_number,
                email: req.body.email,
                password: req.body.password
            }).then(() => {
                res.render('registration', {
                    title: 'Регистрация',
                    message: 'Вы зарегистрировались, теперь вы можете войти'
                });
            }).catch((err) => {
                console.log('sorry, error has occured', err);
            });
            
        }
    }
});

module.exports = router;