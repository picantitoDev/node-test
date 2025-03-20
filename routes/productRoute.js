const express = require("express")
const router = express.Router()
const productos = require("../productos.js")
const getProductById = require("../controllers/productController.js")

router.get("/", (req, res) => {
  const { categoria, precioMin } = req.query

  let newProds = [...productos]
  console.log(req.query)
  if (categoria) {
    newProds = productos.filter((p) => p.categoria === categoria)
  }

  if (precioMin) {
    newProds = newProds.filter((p) => p.precio >= Number(precioMin))
  }
  res.json(newProds)
})

router.get("/:id", getProductById)

module.exports = router
