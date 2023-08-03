const Joi = require("joi");

exports.schemas = {

  RegistrationSchema : Joi.object({
    name: Joi.string().min(3).max(31).required(),
    age: Joi.number().required(),
    // languages : Joi.array().items(Joi.string()).required(),
    // languages : Joi.array().items(Joi.string().valid('a', 'b')),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(8).required(),
    confirmPassword: Joi.ref("password"),
    dob: Joi.date().greater(new Date("1990-01-01")).required(),
  }),
  
  LoginSchema : Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).max(8).required(),
    })
}