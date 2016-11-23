var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('./../controllers/db.js');

// read table
var fish = {};
router.get('/', function(req, res){
  db.query('SELECT * FROM location',function(err,rows){
    if(err){
      throw err;
    } else {
      fish = {print: rows};
      res.render('locations', fish);
      console.log(fish);
    }
  });
});

module.exports = router;
