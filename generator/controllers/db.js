/* js file for database connection */

var mysql = require('mysql');

// define connection
var connection = mysql.createConnection({
  host : '127.0.0.1',
  port : 49941,
  user : 'azure',
  password : '6#vWHD_$',
  database : 'localdb',
  multipleStatements: true
});

// establish connection
connection.connect(function(err){
  if(err) throw err;
  else {
    console.log('Connection established\n');
  }
});

module.exports = connection;
