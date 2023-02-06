const { isBoom } = require("@hapi/boom");

const logErrors = (error, req, res, next) => {
  console.error(error);
  next(error);
}

const catchErrors = (error, req, res, next) => {
  res.status(500).json({
    message: error.message,
    stack: error.stack
  })
}

const catchBoomErrors = (error, req, res, next ) => {
  if(isBoom(error)){
    res.status(error.output.statusCode).json(error.output.payload);
  }
}

module.exports = { logErrors, catchErrors, catchBoomErrors };


