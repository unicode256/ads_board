const jwt = require('jsonwebtoken');
const jwt_decode = require('jwt-decode');
const TOKEN_SECRET = require('./config').TOKEN_SECRET;

const isAuth = (req, res, next) => {
    const token = req.cookies.auth_token;
    if(!token){
        req.auth = false;
        next();
    }
    else {
        console.log(jwt_decode(token).exp);
        try {
            const verified = jwt.verify(token, TOKEN_SECRET);
            req.user = verified;
            req.auth = true;
            next();
        }
        catch {
            req.auth = false;
            next();
        }
    }
}

module.exports = isAuth;