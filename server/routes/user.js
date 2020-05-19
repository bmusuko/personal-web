const router = require('express').Router();
const User = require('../models/User');
const responseGenerator = require('../utils/responseGenerator');

router.get('/login',(req,res)=>{
    responseGenerator(res,200,"test!");
})

module.exports = router;