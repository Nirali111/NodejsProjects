const Joi = require('joi');

const registerSchema = Joi.object({
    username: Joi.string()
    .min(3).   // At least 3 characters
    required(),
    password: Joi.string()
  .min(8) // At least 8 characters
  .pattern(new RegExp('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')) // At least one letter and one number
  .required()
});

const loginSchema = Joi.object({
    username: Joi.string()
    .min(3).   // At least 3 characters
    required(),
    password: Joi.string()
    .min(8) // At least 8 characters
    .pattern(new RegExp('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')) // At least one letter and one number
    .required()
});

module.exports = { registerSchema, loginSchema };
