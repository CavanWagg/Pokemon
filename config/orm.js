var connection = require("../config/connection.js");

var orm = {
selectAll: function(tableInput, cb) {
  var queryString = "SELECT * FROM " + tableInput + ";";
  connection.query(queryString, function(err, result) {
    if (err) {
      throw err;
    }
    cb(result);
    console.log(result);
  });
},
insertOne: function(table, cols, vals, cb){
  var queryString = `INSERT INTO ${table} (${cols})  VALUES ${vals})`;
  console.log(queryString);
  connection.query(queryString, vals, function(err, result) {
    if (err) {
      throw err;
    }
    cb(result);
    console.log(result);
  })
}
// insert 1 pokemon with values(name, id, captured) into pokemon table
}
// orm.selectAll('pokemon');

// insertOne()

// updateOne()


module.exports = orm;