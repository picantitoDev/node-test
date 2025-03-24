const express = require("express")
const app = express()
const path = require("path")
const layouts = require("express-ejs-layouts")
app.use(layouts)
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.render(
    "index",
    (people = [
      {
        name: "Deigo",
      },
      {
        name: "Mari",
      },
      {
        name: "Pals",
      },
      {
        name: "Gabriel",
      },
      {
        name: "Lourdes",
      },
      {
        name: "Valcra",
      },
      {
        name: "Pedro",
      },
    ])
  )
})

app.get("/about", (req, res) => {
  res.render("about")
})

console.log(app)
app.listen(8080, () => {
  console.log("Listening on port 8080...")
})
