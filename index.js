//Express hello world

const express = require("express");
const routerAPI = require('./routes');

const port = 3001;

const App = express();

//middleware to use Json in request
App.use(express.json());

routerAPI(App);

App.listen(port, () => {
  //eslint warn because its not good practise send
  console.log(`The app running in ${port} port`);
})

