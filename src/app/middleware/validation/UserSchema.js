
const Joi = require('joi');

const schemas = {
  signInDetails: Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required()
  }),
  signUpDetails: {
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    age: Joi.number().required(),
    email:Joi.string().email().required(),
    phone: Joi.string().max(10).required(),
    password: Joi.string().max(16).min(8).required()
  },
  userUpdateDetails: {
    username: Joi.string().required(),
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    phone: Joi.number().max(10).required(),
    password: Joi.string().max(16).min(8).required()
  }
};

module.exports = schemas;