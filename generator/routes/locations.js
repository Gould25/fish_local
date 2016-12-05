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
router.get('/search', function(req, res, next) {
  var term = req.query.term;
  var callback = function(err, rows) {
    if (err)
      throw err;
    console.log("Rows: " + rows);
    var fish = { print: rows, layout: false };
    res.render("location_search", fish);
    res.end();
  }
  if (term === undefined)
    db.query('SELECT * FROM location', callback);
  else
  {
    var term = '%' + term + '%';
    db.query('SELECT * FROM location WHERE b_o_w LIKE ?', [term], callback);
  }
});

module.exports = router;
