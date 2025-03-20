const asyncHandler = require("express-async-handler")
const CustomNotFoundError = require("../errors/CustomNotFoundError.js")
const db = require("../db.js")

const getAuthorById = asyncHandler(async (req, res) => {
  const authorId = Number(req.params.id) // Convert string to number

  const author = await db.getAuthorById(authorId)

  if (!author) {
    throw new CustomNotFoundError("Author not found")
  }

  res.send(`Author Name: ${author.name}`)
})

module.exports = { getAuthorById }
