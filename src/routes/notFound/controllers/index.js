const boom = require("@hapi/boom");
const path = require("path")
const sendBoomError = () => {
  const rootPath = path.resolve("./");
  throw boom.notFound(`Not found, try ${rootPath}/api/v1/products`);
}

module.exports = sendBoomError;
