const express = require("express");
const { findProductSchema, createProductSchema, updatedProductSchema } = require("./schemas");
const validateSchema = require("../../middlewares/schema.validator.handler");
const router = express.Router();

const ProductsService = require("./controllers");
const productsService = new ProductsService();


router.get("/", async (req, res) => {

  const { size } = req.query;

  const productsList = await productsService.list(size);

  res.status(200).json(productsList);

})

router.get("/:id", validateSchema(findProductSchema, "params"), async (req, res, next) => {

  //search id params in all (req.params) params
  const { id } = req.params;

  try {
    const foundProduct = await productsService.findOne(id);
    res.status(200).json(foundProduct);
  } catch (error) {
    next(error);
  }

})



router.post("/", validateSchema(createProductSchema, "body"), async (req, res) => {
  const body = req.body;

  const newProduct = await productsService.create(body);

  res.status(201).json(newProduct);
})

router.patch("/:id", validateSchema(findProductSchema, "params"), validateSchema(updatedProductSchema, "body"), async (req, res, next) => {
  const body = req.body;
  const { id } = req.params;


  try {
    const updatedProduct = await productsService.update(id, body);
    res.json(updatedProduct)
  }
  catch (error) {
    next(error);
  }
})



router.delete("/:id", validateSchema(findProductSchema, "params"), async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedProduct = await productsService.delete(id);
    res.json(deletedProduct)
  }
  catch (error) {
    next(error);
  }
})

module.exports = router;
