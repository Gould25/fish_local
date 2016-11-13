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

// ***** Body *****
// establish connection
con.connect(function(err){
  if(err) throw err;
  else {
    console.log('Connection established\n');
  }
});

// read table
var fish = {};
router.get('/fish', function(req, res){
  con.query('SELECT * FROM fish_table',function(err,rows){
    if(err){
      throw err;
    } else {
      fish = {print: rows};
      res.render('print', fish);
    }

    console.log('Data received from Db:\n');
    for(var i=0;i<rows.length; i++){
      fish[i]=rows[i];
      console.log(rows[i].fishName + " " +
      rows[i].ave_wgt + " " + rows[i].picture);
    }
  });
});

con.end(function(err){
  // connection terminated
  console.log("Connection Terminated\n");
});
