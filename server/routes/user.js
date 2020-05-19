const router = require('express').Router();
// const {login,register} = require('../controllers/auth');
const {jwtMiddleware} = require('../utils/jwt');

router.get('/',jwtMiddleware,(req,res)=>{
    res.json("hi!");
});

module.exports = router;