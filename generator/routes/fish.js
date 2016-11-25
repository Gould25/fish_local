var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('./../controllers/db.js');



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

router.get('/search/:term', function(req, res, next) {
  var term = '%' + req.params.term + '%';
  db.query('SELECT * FROM fish WHERE fishName LIKE ?', [term], 
    function(err, rows) {
      if (err)
        throw err;
      console.log("Rows: " + rows);
      res.json(rows);
      res.end();
  });
});

module.exports = router;
