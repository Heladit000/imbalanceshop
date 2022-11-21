//Express hello world

const express = require("express");

const App = express();

const port = 3001;

App.get("/", (req, res)=> {
  //send this in petition
  res.send("Hello World! :D");
})

App.listen(port, () => {
  //eslint warn because its not good practise send
  console.log(`The app running in ${port} port`);
})
