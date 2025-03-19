const express = require("express")
const router = express.Router()
const productos = require("../productos.js")

//GET /productos?categoria=ropa&precioMin=30 → Debe devolver solo los productos de la categoría ropa con precio igual o mayor a 30.
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

router.get("/:id", (req, res) => {
  const id = Number(req.params.id)
  const selectedProduct = productos.find((producto) => producto.id === id)
  if (!selectedProduct) {
    return res.status(404).send("<h1> Error 404: Producto no encontrado </h1>")
  }
  res.send(selectedProduct)
})

module.exports = router
