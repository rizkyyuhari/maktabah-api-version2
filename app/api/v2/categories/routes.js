const express = require("express");
const { create, index } = require("./controller");
const router = express();

router.post("/categories", create);
router.get("/categories", index);

module.exports = router;
