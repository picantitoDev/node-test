const express = require("express")
const app = express()
const productRouter = require("./routes/productRoute.js")
const fn = require("./routes/authorRouter.js")
const userRoute = require("./routes/userRoute.js")
const path = require("./path")

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.send("<h1> WTF </h1>")
})

app.use("/users", userRoute)

app.use("/productos", productRouter)

app.use("/authors", fn)

app.listen(8080, () => {
  console.log("Servidor corriendo en http://localhost:8080")
})
