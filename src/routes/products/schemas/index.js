const Joi = require("joi");
const config = require("../../../../config");

const defaultProductSchema = {
  id: Joi.string().length(24).invalid(config.app.products.defaultProduct.id),
  name: Joi.string().min(2).max(20),
  price: Joi.number().integer().min(100),
  image: Joi.string().uri(),
}

const createProductSchema = Joi.object({
  name: defaultProductSchema.name.required(),
  price: defaultProductSchema.price.required(),
  image: defaultProductSchema.image.required(),
})

const findProductSchema = Joi.object({
  id: defaultProductSchema.id.required()
})

const updatedProductSchema = Joi.object({
  ...defaultProductSchema,
  id: defaultProductSchema.id.required()
})

const deleteProductSchema = Joi.object({
  id: defaultProductSchema.id.required()
})


module.exports = { createProductSchema, findProductSchema, updatedProductSchema, deleteProductSchema };
