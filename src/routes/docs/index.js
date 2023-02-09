const express = require("express");
const path = require("path");
const router = express.Router();

//access to docs files in endpoint
router.use(express.static(path.join("public/docs")));

router.use("/", (req,res)=>{
  res.sendFile(path.join(__dirname,"../../../public/docs/index.html"))
})

module.exports = router;
