const express = require("express");
const sendBoomError = require("./controllers");
const router = express.Router();

router.use("*", (req,res,next)=>{
  next(sendBoomError());
})

module.exports = router;
