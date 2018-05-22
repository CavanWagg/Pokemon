var express = require("express");
var router = express.Router();
// import the model (pokemon.js) to use its database functions.
var pokemon = require("../models/pokemon.js");
// Create all routes and set up logic within those routes
router.get("/", function(req, res) {
  pokemon.all(function(pokeData) {
    var hbsObject = {
      poke_data: pokeData
    }
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/pokemon/create", function(req, res) {
  console.log('test', req.body);
  pokemon.create(['pokemon_name'], [req.body.pokemon_name], function(result) {

   console.log('hello', result);
   
    res.redirect('/');
  });
});

router.put('/pokemon/create/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  pokemon.update({
    captured: true
  }, condition, function(data) {
    res.redirect('/');
  });
});

module.exports = router;