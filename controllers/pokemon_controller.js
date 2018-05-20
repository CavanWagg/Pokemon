var express = require("express");
var router = express.Router();
var pokemons = require("../models/pokemon.js");

router.get("/pokemon", function(req, res) {
  pokemons.all(function(pokeData) {
    var hbsObject = {
      poke_data: pokeData
    }
    res.render("index", hbsObject);
    console.log('yoyoyoyo')
  })
})

module.exports = router;