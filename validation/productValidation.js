const Joi = require('joi');

const productSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    imageUrl: Joi.string().uri().optional()
});

module.exports = { productSchema };
