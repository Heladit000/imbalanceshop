const boom = require("@hapi/boom");

const sendBoomError = (protocol,host) => {
  throw boom.notFound(`Not found, try ${protocol}://${host}/api/v1/products`);
}

module.exports = sendBoomError;
