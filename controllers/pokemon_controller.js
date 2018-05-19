var express = require("express")
var router = express.Router()
var pokemon = require("./models/pokemon.js")

router.get("/pokemon", function(req, res) {
  pokemon.all(function(pokeData){
    res.render("index", { poke_data: pokeData})
  })
})

module.exports = router