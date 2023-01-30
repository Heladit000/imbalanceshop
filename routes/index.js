const products = require("./products.router");

const express = require("express");
const router = express.Router();

const routerAPI = (app) => {

  router.use("/products",products);

  app.use("/api",router);
}

module.exports = routerAPI;
