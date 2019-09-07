const express = require('express');
const router = express.Router();

router.use("/question",require("./game"));
router.use("/user",require("./user"));
module.exports = router;