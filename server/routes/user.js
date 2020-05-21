const router = require('express').Router();
const responseGenerator = require('../utils/responseGenerator');
// const {login,register} = require('../controllers/auth');
const {jwtMiddleware} = require('../utils/jwt');

router.get('/',jwtMiddleware,(req,res)=>{
    responseGenerator(res,200,"hi!",req.user);
});

module.exports = router;