var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('./../controllers/db.js');
//var search = require ('./../controllers/search.js');
//var artificial = require('./../controllers/artificial.js');

// read table
var fish = {};
router.get('/', function(req, res){
  db.query('select bait.baitName, bait.description, artificial.color,'+
            'artificial.size from bait, artificial where bait.baitName = artificial.baitName',function(err,rows){
    if(err){
      throw err;
    } else {
      fish = {print: rows};
      res.render('artificial', fish);
    }
  });
});
/*
router.get('/all', function(req, res) {
  artificial.get_all(function(err, rows) {
    if (err) {
      throw err;
    }

    res.send(rows);
    res.end();
  });
});

router.get('/search', function(req, res, next) {
  var term = req.query.term;
  var callback = function(err, rows) {
    if (err)
      throw err;
      console.log("Rows: " + rows);
    var fish = { print: rows, layout: false };
    res.render("artificial_search", fish);
    res.end();
  }

  search.artificial(term, callback);

});
*/
module.exports = router;
