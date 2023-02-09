const express = require("express");
const { catchErrors, catchBoomErrors } = require("./src/middlewares/error.handler");
const routerAPI = require('./src/routes');
const { corsWhiteList } = require("./src/middlewares/cors.handler");
const path = require("path");
const config = require("./config");

const port = config.app.port;

const App = express();

//Global middlewares pre-request
App.use(express.json());
App.use(corsWhiteList(config.app.whitelist.hosts, config.app.whitelist.enable));

routerAPI(App);

//access to docs files
//App.use(express.static(path.join("public/docs")))

//Global middlewares post-request
App.use(catchBoomErrors);
App.use(catchErrors);

App.listen(port);

