const config = require("../../../../../config");
const boom = require("@hapi/boom");
const validateInvincibleProduct = () => (req,res,next) => {
  const {id} = req.params;

  if(id === config.app.products.defaultProduct.id){
    throw boom.unauthorized("This product its invincible, you can't delete it or modify it");
  }

  next();
}

module.exports = validateInvincibleProduct;
