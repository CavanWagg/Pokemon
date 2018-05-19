var connection = require("./connection.js");

var orm = {
selectAll: function(tableInput, cb) {
  var queryString = "SELECT * FROM " + tableInput + ";";
  connection.query(queryString, function(err, result) {
    if (err) {
      throw err;
    }
    cb(result);
    // console.log(result);
  });
},
insertOne: function(tableInput, name, cb){
  var queryString = `INSERT INTO ${tableInput}  (${name}) VALUES `
}
// insert 1 pokemon with values(name, id, captured) into pokemon table
}
// orm.selectAll('pokemon');

// insertOne()

// updateOne()


module.exports = orm;