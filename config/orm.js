var connection = require("../config/connection.js");

// SQL helper functions

// create an array of question marks and turn it into a string
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		arr.push(key + "=" + ob[key]);
	}

	return arr.toString();
}


var orm = {
all: function(tableInput, cb) {
  var queryString = "SELECT * FROM " + tableInput + ";";
  connection.query(queryString, function(err, result) {
    if (err) {
      throw err;
    }
    cb(result);
    // console.log(result);
  });
},
create: function(table, cols, vals, cb) {
  var queryString = "INSERT INTO " + table;

  queryString += " (";
  queryString += cols.toString();
  queryString += ") ";
  queryString += "VALUES (";
  queryString += printQuestionMarks(vals.length);
  queryString += ") ";
  console.log('queryTest', queryString);
  console.log('columns', cols);
  connection.query(queryString, vals, function(err, result) {
    if (err) {
      throw err;
    }
    cb(result);
    console.log(result);
  })
},
update: function(table, objColVals, condition, cb) {
  var queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`
  console.log(queryString);
  connection.query(queryString, function(err, result) {
    if (err) {
      throw err;
    }

    cb(result);
  });
}
};
// orm.selectAll('pokemon');

// insertOne()

// updateOne()


module.exports = orm;