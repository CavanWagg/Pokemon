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

  // loop through keys, push key/value pair as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Mr. Mime => 'Mr. Mime')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
       // e.g. {name: 'Mr. Mime'} => ["name='Mr. Mime'"]
      // e.g. {captured: true} => ["captured=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
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
create: function(table, cols, vals, cb){
  var queryString = `INSERT INTO ${table} (${cols.toString()})  VALUES (${printQuestionMarks(vals.length)})`;
  console.log(queryString);
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