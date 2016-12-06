var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var search = require('./../controllers/search.js');
var db = require('./../controllers/db.js');
var fish = require('./../controllers/fish.js');




router.get('/', function(req, res){
  // read table
  var fish = {};
  db.query('SELECT * FROM fish',function(err,rows){
    if(err){
      throw err;
    } else {
      fish = {print: rows};
      res.render('fish', fish);
      console.log(fish);
    }
  });
});

router.get('/search', function(req, res, next) {
  var term = req.query.term;
  var callback = function(err, rows) {
    if (err)
      throw err;
    console.log("Rows: " + rows);
    var fish = { print: rows, layout: false };
    res.render("fish-search", fish);
    res.end();
  }
  search.fish(term, callback);
});

router.get('/get/:fishName', function(req, res) {
  var fish_name = req.params.fishName;
  fish.get(fish_name, function(err, rows) {
    if (err) {
      throw err;
    }

    var output = { detail: rows, layout: false }
    console.log(output);
    res.render("fish-detail", output);
    res.end();
  });
});

module.exports = router;
