const express = require("express");
const sendBoomError = require("./controllers");
const router = express.Router();

router.use("*", (req,res,next)=>{
  next(sendBoomError(req.protocol,req.headers.host));
})

module.exports = router;
