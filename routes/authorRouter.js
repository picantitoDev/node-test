const express = require("express")
const router = express.Router()
const fn = require("../controllers/authorController.js")

router.get("/:id", fn.getAuthorById)

module.exports = router
