const express = require("express")
const app = express()
const productos = require("./productos")

app.get("/", (req, res) => {
  res.send("<h1> WTF </h1>")
})

app.get("/productos/:id", (req, res) => {
  const id = Number(req.params.id)
  const selectedProduct = productos.filter((producto) => producto.id === id)
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
    newProds = newProds.filter((p) => p.precio >= precioMin)
  }
  res.json(newProds)
})

app.listen(8080)
