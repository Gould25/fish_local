var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home', { title: 'home' });
});

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
      res.render('fish', fish);
      console.log(fish);
    }
/*
    console.log('Data received from Db:\n');
    for(var i=0;i<rows.length; i++){
    //  fish[i]=rows[i];
      console.log(rows[i].fishName + " " +
      rows[i].ave_wgt + " " + rows[i].picture);
    }*/
  });
});
/*
con.end(function(err){
  // connection terminated
  console.log("Connection Terminated\n");
});

/*
router.get('/home', function(req, res) {
  res.render('home', { title: 'home' });
});

router.get('/fish', function(req, res) {
  res.render('fish', { title: 'fish' });
});


//router.get('/home', function(req, res) {
//info = functioncall();
//  res.render('home', { fishinfo: info });
//});
*/
module.exports = router;
