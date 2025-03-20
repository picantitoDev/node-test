const express = require("express")
const app = express()
const productRouter = require("./routes/productRoute.js")
const fn = require("./routes/authorRouter.js")

app.get("/", (req, res) => {
  res.send("<h1> WTF </h1>")
})

app.use("/productos", productRouter)

app.use("/authors", fn)

app.listen(8080, () => {
  console.log("Servidor corriendo en http://localhost:8080")
})
