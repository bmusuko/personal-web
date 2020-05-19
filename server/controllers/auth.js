const bcrypt = require('bcryptjs');
const User = require('../models/User');
const responseGenerator = require('../utils/responseGenerator');
const {registerValidation,loginValidation} = require('../utils/validation');
const {sign} = require('../utils/jwt');

async function login(req,res){
    const {error} = loginValidation(req.body);
    if (error){
        return responseGenerator(res,400,error.details[0].message);
    }
    const user = await User.findOne({
        email:req.body.email
    })
    if(!user){
        return responseGenerator(res,400,"email or password wrong");
    }
    const checkPassword = await bcrypt.compare(req.body.password,user.password);
    if(!checkPassword){
        return responseGenerator(res,400,"email or password wrong");
    }
    const token = sign({
        _id: user._id
    });


    return responseGenerator(res,200,"all good",token);
}
async function regiter(req,res){
    const {error} = registerValidation(req.body);
    if (error){
        return responseGenerator(res,400,error.details[0].message);
    }
    const emailExist = await User.findOne({
        email:req.body.email
    })
    if(emailExist){
        return responseGenerator(res,400,"email already exist");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password,salt);
    const user = new User({
        name:req.body.name,
        email:req.body.email,
        password:hashedPassword
    })
    try {
        const savedUser = await user.save();
        return responseGenerator(res,201,"success created user",savedUser);
    } catch (err){
        responseGenerator(res,500,"failed saved user",err);
    }
}

module.exports.login = login;
module.exports.register = regiter;