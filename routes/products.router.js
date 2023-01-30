const { faker } = require('@faker-js/faker');
const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  //search id params in all (req.params) params
  const { id } = req.params;

  if (id === "errorid") {
    res.status(404).json({
      message: "NOT FOUND"
    })
  } else {
    res.status(200).json({
      id,
      name: faker.commerce.productName(),
      image: faker.image.abstract(),
      price: faker.commerce.price()
    })
  }


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

  res.status(201).json({
    message: "created",
    data: body
  })
})

router.patch("/", (req, res) => {
  const body = req.body;

  res.json({
    message: "updated",
    data: body
  })
})


router.delete("/:id", (req, res) => {
  const { id } = req.params;

  res.json({
    message: "Deleted",
    id,
  })
})

module.exports = router;
