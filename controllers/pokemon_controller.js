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
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/pokemon", function(req, res) {
  pokemon.create([
    'pokemon_name'
  ], [
    req.body.pokemon_name
  ], function(data) {
    res.redirect('/');
  });
});

router.put("/api/cats/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  pokemon.update(
    {
      captured: req.body.captured
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // if no rows were changed, then ID does not exist
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

module.exports = router;