const express = require("express")
const app = express()
const port = 5000
const gameOfThrones = require("./routes/gameOfThrones")
const pokemon = require("./routes/pokemon")

app.get("/", (req, res) => {
  res.send("GoT / Pokemon API")
})

app.use("/game-of-thrones", gameOfThrones)
app.use("/pokemon", pokemon)

app.listen(port, () => {
  console.log("Server started on port: " + port)
})
