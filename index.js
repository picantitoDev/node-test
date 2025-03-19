const express = require("express")
const app = express()
const productRouter = require("./routes/Productos")

app.get("/", (req, res) => {
  res.send("<h1> WTF </h1>")
})

app.use("/productos", productRouter)

app.listen(8080, () => {
  console.log("Servidor corriendo en http://localhost:8080")
})
