var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var sql = require('./../controllers/sql.js');


// define connection
var con = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'gibson82',
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
router.get('/', function(req, res){
  con.query('SELECT * FROM fish',function(err,rows){
    if(err){
      throw err;
    } else {
      fish = {print: rows};
      res.render('fish', fish);
      console.log(fish);
    }
  });
});

module.exports = router;
