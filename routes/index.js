const products = require("./products/products.router");

const express = require("express");
const router = express.Router();

const routerAPI = (app) => {

  router.use("/products",products);

  app.use("/api/v1",router);
}

module.exports = routerAPI;
