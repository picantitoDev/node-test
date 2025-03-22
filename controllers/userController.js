module.exports = {
  get: (req, res) => {
    res.send("User: Piero Arturo")
  },

  post: (req, res) => {
    console.log("Post Request to Users")
  },

  put: (req, res) => {
    console.log("Put Request to Users")
  },

  delete: (req, res) => {
    console.log("Delete Request to Users")
  },
}
