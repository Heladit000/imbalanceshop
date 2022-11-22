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
  res.json({
    name: "Product1",
    price: 1000
  })
})

App.listen(port, () => {
  //eslint warn because its not good practise send
  console.log(`The app running in ${port} port`);
})

