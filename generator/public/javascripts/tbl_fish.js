/*
***** creating fish table
***** for developement of app
*/

// ***** declarations *****

var mysql = require('mysql');

// define connection
var con = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '1205',
  database : 'Fish_local'
});

// sql querries

// create table
var fishes_tbl = "CREATE TABLE fish_table(fishName varchar(25),"+
    "ave_wgt varchar(25) NOT NULL,"+
    "regNum int(4) DEFAULT NULL,"+
    "picture varchar(255) NOT NULL,"+
    "PRIMARY KEY (fishName))";

// ***** Body *****
// establish connection
con.connect(function(err){
  if(err) throw err;
  else {
    console.log('Connection established\n');
  }
});

// generate table
con.query(fishes_tbl, function(err,res){
  if(err) throw err;
  else {
    console.log('Table Created\n');
  }
});

con.end(function(err){
  // connection terminated
  console.log("Connection Terminated\n");
});
