const express = require("express")
const app = express()
const productos = require("./productos")

app.get("/", (req, res) => {
  res.send("<h1> WTF </h1>")
})

app.get("/productos/:id", (req, res) => {
  const id = Number(req.params.id)
  const selectedProduct = productos.find((producto) => producto.id === id)
  if (!selectedProduct) {
    return res.status(404).send("<h1> Error 404: Producto no encontrado </h1>")
  }
  res.send(selectedProduct)
})

//GET /productos?categoria=ropa&precioMin=30 → Debe devolver solo los productos de la categoría ropa con precio igual o mayor a 30.
app.get("/productos", (req, res) => {
  const { categoria, precioMin } = req.query

  let newProds = [...productos]
  console.log(newProds)
  if (categoria) {
    newProds = productos.filter((p) => p.categoria === categoria)
  }

  if (precioMin) {
    newProds = newProds.filter((p) => p.precio >= Number(precioMin))
  }
  res.json(newProds)
})

app.listen(8080, () => {
  console.log("Servidor corriendo en http://localhost:8080")
})
