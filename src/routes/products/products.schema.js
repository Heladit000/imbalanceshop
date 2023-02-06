const Joi = require("joi");

const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(2).max(20);
const price = Joi.number().integer();
const imageURL = Joi.string().uri();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
})

const updatedProductSchema = Joi.object({
  id: id.required(),
  name: name,
  price: price,
})
