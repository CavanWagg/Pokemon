var orm = require("../config/orm.js");


var pokemon = {
  all: function(cb) {
    orm.all("pokemon", function(res) {
      cb(res);
    })
  },
  // create: function(cols, vals, cb) {
  //   orm.insertOne("pokemon", cols, vals, function(res) {
  //     cb(res);
  //   });
  // },

};


module.exports = pokemon;

// get all the pokemon 













module.exports = pokemon.js;