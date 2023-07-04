const express = require("express");
const { create, index } = require("./controller");
const router = express();

router.post("/sub-categories", create);
router.get("/sub-categories", index);

module.exports = router;
