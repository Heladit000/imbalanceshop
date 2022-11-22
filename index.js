//Express hello world

const express = require("express");

const App = express();

const port = 3001;

App.get("/", (req, res)=> {
  //send this in petition
  res.send("Hello World! :D");
})

//new route
App.get("/new-route", (req, res)=> {
  res.send("Hello!, this is my new route");
})

//data type json
App.get("/products", (req, res)=> {
  res.json([{
    name: "Product1",
    price: 1000
  },{
    name: "Product2",
    price: 1000
  }])
})

App.get("/products/:id", (req, res)=> {
  //search id params in all (req.params) params
  const {id} = req.params;
  res.json({
    id,
    name: "Product",
    price: 1000
  })
})


App.get("/users/:userId/products/:productId", (req, res)=> {
  const {userId, productId} = req.params;
  res.json({
    id: productId,
    name: "Product",
    price: 1000
  })
})

App.listen(port, () => {
  //eslint warn because its not good practise send
  console.log(`The app running in ${port} port`);
})

