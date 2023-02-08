//Express hello world

const express = require("express");
const { logErrors, catchErrors, catchBoomErrors } = require("./src/middlewares/error.handler.middleware");
const routerAPI = require('./src/routes');

const port = 3001;

const App = express();

//middleware to use Json in request
App.use(express.json());



routerAPI(App);

//App.use(logErrors);
App.use(catchBoomErrors);
App.use(catchErrors);

App.listen(port, () => {
  //eslint warn because its not good practise send
  console.log(`The app running in ${port} port`);
})

