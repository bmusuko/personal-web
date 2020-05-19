const secret = Buffer.from(process.env.SECRET).toString('base64');
const jwt = require('express-jwt');
const token = require('jsonwebtoken');
const responseGenerator = require('../utils/responseGenerator');

// token : Bearer <JWT_TOKEN>
const jwtMiddleware = jwt({ 
    secret: secret,
    getToken: function fromHeaderOrQuerystring (req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    } else if (req.query && req.query.token) {
        return req.query.token;
    }
    return null;
}
})

const sign = (data) =>{ 
    return token.sign(data, secret, {
        expiresIn: '1h'
    });
}

const authError = (err, req, res, next) => {
    console.log(err);
    console.log('hit');
    if(err.name === 'UnauthorizedError') {
        return responseGenerator(res,err.status,err.message);
    }
    next();
};


module.exports.jwtMiddleware = jwtMiddleware
module.exports.sign = sign
module.exports.authError = authError