var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('./../controllers/db.js');

// read table
var fish = {};
router.get('/', function(req, res){
  db.query('SELECT * FROM record',function(err,rows){
    if(err){
      throw err;
    } else {
      fish = {print: rows};
      res.render('records', fish);
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
    res.render("records_search", fish);
    res.end();
  }
  if (term === undefined)
    db.query('SELECT * FROM record', callback);
  else
  {
    var term = '%' + term + '%';
    db.query('SELECT * FROM record WHERE fishName LIKE ?', [term], callback);
  }
});

module.exports = router;
