// const { createServer } = require("node:http")
// const hostname = "127.0.0.1"
// const port = 3000
// const server = createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader("Content-Type", "text/plain")
//   res.end("Hello World")
// })
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`)
// })

const os = require("os")

var totalMemory = os.totalmem()
var freeMemory = os.freemem()

console.log(`Total Memory: ${totalMemory}, Free Memory: ${freeMemory}`)

const fs = require("fs")
const files = fs.readdirSync("./")
console.log(files)

fs.readdir("$", function (err, files) {
  if (err) {
    console.log(err)
  } else {
    console.log(files)
  }
})
