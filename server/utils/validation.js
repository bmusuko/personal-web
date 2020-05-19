const Joi = require('@hapi/joi');

const registerValidation = (data) => {
    const registerSchema = Joi.object({
        name: Joi.string()
            .min(6)
            .max(255)
            .required(),
        email:Joi.string()
            .min(6)
            .max(255)
            .email()
            .required(),
        password: Joi.string()
            .min(6)
            .max(255)
            .required(),
    });
    return registerSchema.validate(data);
}

const loginValidation = (data) => {
    const loginSchema = Joi.object({
        email:Joi.string()
            .min(6)
            .max(255)
            .email()
            .required(),
        password: Joi.string()
            .min(6)
            .max(255)
            .required(),
    });
    return loginSchema.validate(data);
}


module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;