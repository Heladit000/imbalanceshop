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

module.exports = { logErrors, catchErrors };


