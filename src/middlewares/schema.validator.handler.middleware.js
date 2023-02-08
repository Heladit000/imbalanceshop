
//TODO: describe funcion in vscode

const boom = require("@hapi/boom");

const validateSchema = (schema, dataType) => {

  const nextMidleware = (req, res, next) => {
    const data = req[dataType];
    const schemaValidation = schema.validate(data);

    if (schemaValidation.error) {

      boom.badRequest(schemaValidation.error);

    }

    next();

  }

  return nextMidleware;
}

module.exports = validateSchema;
