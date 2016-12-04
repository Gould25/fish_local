var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('./../controllers/db.js');



router.get('/', function(req, res){
  // read table
  var fish = {};
  db.query('SELECT * FROM fish JOIN family',function(err,rows){
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
  if (term === undefined)
    db.query('SELECT * FROM fish', callback);
  else
  {
    var term = '%' + term + '%';
    db.query('SELECT * FROM fish WHERE fishName LIKE ?', [term], callback);
  }
});

module.exports = router;
