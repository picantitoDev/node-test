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

// const os = require("os")

// var totalMemory = os.totalmem()
// var freeMemory = os.freemem()

// console.log(`Total Memory: ${totalMemory}, Free Memory: ${freeMemory}`)

// const fs = require("fs")
// const files = fs.readdirSync("./")
// console.log(files)

// fs.readdir("$", function (err, files) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(files)
//   }
// })

// import EventEmitter from "events"

// const emitter = new EventEmitter()

// emitter.emit("messageLogged")

// import { request } from "https"

// const options = {
//   hostname: "example.com",
//   port: 443,
//   path: "/todos",
//   method: "GET",
// }

// const req = request(options, (res) => {
//   console.log(`statusCode: ${res.statusCode}`)

//   res.on("data", (d) => {
//     process.stdout.write(d)
//   })
// })

// req.on("error", (error) => {
//   console.error(error)
// })

// req.end()

// const https = require("https")

// const data = JSON.stringify({
//   todo: "Buy the milk",
// })

// const options = {
//   hostname: "whatever.com",
//   port: 443,
//   path: "/todos",
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Content-Length": data.length,
//   },
// }

// const req = https.request(options, (res) => {
//   console.log(`statusCode: ${res.statusCode}`)

//   res.on("data", (d) => {
//     process.stdout.write(d)
//   })
// })

// req.on("error", (error) => {
//   console.error(error)
// })

// req.write(data)
// req.end()

// import fs from "fs"

// fs.mkdir("test", { recursive: true }, (err) => {
//   if (err) {
//     return console.error(err)
//   }
//   console.log("Directory created successfully!")
// })

// fs.rename("app.txt", "app.json", (err) => {
//   if (err) {
//     return console.error(err)
//   }

//   // done
// })
// import EventEmitter from "node:events"

// const eventEmitter = new EventEmitter()

// eventEmitter.on("start", (start, mid, end) => {
//   console.log(`started from ${start}, stopped at ${mid} and ended up on ${end}`)
// })
// eventEmitter.emit("start", 1, 50, 100)
import { createServer } from "http"
import { myDateTime } from "./myfirstmodule.js"

createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" })
  res.write("The date and time are currently: " + myDateTime())
  res.end()
}).listen(8080)
