const express = require("express")
const app = express()
const axios = require("axios")

app.get("/first151", async (req, res) => {
  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
  )
  res.json(response.data)
})

app.get("/:id", async (req, res) => {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${req.params.id}`
  )
  res.json(response.data)
})
module.exports = app
