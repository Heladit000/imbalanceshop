//Express hello world

const express = require("express");
const routerAPI = require('./routes');

const App = express();

const port = 3001;

routerAPI(App);

App.listen(port, () => {
  //eslint warn because its not good practise send
  console.log(`The app running in ${port} port`);
})

