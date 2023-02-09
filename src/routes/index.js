const products = require("./products");
const notFound = require("./notFound");

//const docs = require("./docs");


const express = require("express");
const router = express.Router();

const routerAPI = (app) => {

  router.use("/products",products);
  //router.use("/",docs);

  app.use("/api/v1",router);

  app.use("*", notFound)
}

module.exports = routerAPI;
