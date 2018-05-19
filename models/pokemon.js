var orm = require('orm');


var pokemon = {
  all: function(cb) {
    orm.selectAll("pokemon", function( res) {
      cb(res)
    })
  }
}


module.exports = pokemon

// get all the pokemon 













module.exports = pokemon.js;