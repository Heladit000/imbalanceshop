const express = require("express");
const router = express.Router();

const ProductsService = require("./products.service");
const productsService = new ProductsService();

router.get("/:id", async (req, res, next) => {

  //search id params in all (req.params) params
  const { id } = req.params;

  try {
    const foundProduct = await productsService.findOne(id);
    res.status(200).json(foundProduct);
  } catch (error) {
    next(error);
  }

})


router.get("/", async (req, res) => {

  const { size } = req.query;

  const productsList = await productsService.list(size);

  res.status(200).json(productsList);

})


router.post("/", async (req, res) => {
  const body = req.body;

  const newProduct = await productsService.create(body);

  res.status(201).json(newProduct);
})

router.patch("/:id", async (req, res, next) => {
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


router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await productsService.delete(id);
    res.json(deletedProduct)
  }
  catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
})

module.exports = router;
