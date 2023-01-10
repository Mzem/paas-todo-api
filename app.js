require("dotenv").config()
const express = require("express")
const app = express()
app.use(express.json())

app.get("/", function (req, res) {
  res.send(`Hello World! Je suis une review app`)
})

const port = process.env.PORT
app.listen(port, function () {
  console.log(`ToDo API listening on port ${port}`)
})
