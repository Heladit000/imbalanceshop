const { faker } = require('@faker-js/faker');
const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  //search id params in all (req.params) params
  const { id } = req.params;
  res.json({
    id,
    name: faker.commerce.productName(),
    image: faker.image.abstract(),
    price: faker.commerce.price()
  })
})


router.get("/", (req, res) => {
  const { size } = req.query;

  const limit = size || 10;

  const products = [];

  for (let i = 0; i < limit; i++) {
    products.push({
      id: faker.database.mongodbObjectId(),
      name: faker.commerce.productName(),
      image: faker.image.abstract(),
      price: faker.commerce.price()
    })
  }

  res.json(products);

})


router.post("/", (req, res) => {
  const body = req.body;

  res.json({
    message: "created",
    data: body
  })
})

module.exports = router;
