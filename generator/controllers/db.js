/* js file for database connection */

var mysql = require('mysql');

// define connection
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '1205',
  database : 'Fish_local'
});

// establish connection
connection.connect(function(err){
  if(err) throw err;
  else {
    console.log('Connection established\n');
  }
});

module.exports = connection;
