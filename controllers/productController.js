const productos = require("../productos.js")

async function getProductById(req, res) {
  const id = Number(req.params.id)
  const selectedProduct = productos.find((producto) => producto.id === id)
  if (!selectedProduct) {
    return res.status(404).send("<h1> Error 404: Producto no encontrado </h1>")
  }
  res.send(selectedProduct)
}

module.exports = getProductById
