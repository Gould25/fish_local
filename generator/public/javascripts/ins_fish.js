/*
***** creating fish table, insert 4 fish, read fish table
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

// listing fish
var fishes = [
  ["Channel Catfish", "2-12 lbs",1,"/images/Channel-Catfish.jpg"],
  ["Blue Catfish", "35-135 lbs",1,"/images/Blue-Catfish.jpg"],
  ["Flathead Catfish", "2-20 lbs",1,"/images/Flathead-Catfish.jpg"],
  ["Black Bullhead Catfish", "<2 lbs",1,"/image/bullhead_catfish.jpg"]
];

// ***** Body *****

// establish connection
con.connect(function(err){
  if(err) throw err;
  else {
    console.log('Connection established\n');
  }
});

//insert fish
con.query('INSERT INTO fish_table VALUES ?',[fishes], function(err,res){
  if(err) throw err;
    console.log("Fish added\n");
});

con.end(function(err){
  // connection terminated
  console.log("Connection Terminated\n");
});
