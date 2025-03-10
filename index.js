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

const https = require("https")

const data = JSON.stringify({
  todo: "Buy the milk",
})

const options = {
  hostname: "whatever.com",
  port: 443,
  path: "/todos",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": data.length,
  },
}

const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on("data", (d) => {
    process.stdout.write(d)
  })
})

req.on("error", (error) => {
  console.error(error)
})

req.write(data)
req.end()
