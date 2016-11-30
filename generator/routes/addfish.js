var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var db = require('./../controllers/db.js');

router.get('/', function(req, res){
  res.render('addfish');
});

router.post('/', function(req, res){
  var fishName = req.body.fishName;
  var wght = req.body.wght;
  var picture = req.body.picture;
  var values = [fishName, wght, picture];
//  var familyName = req.body.familyName;

db.beginTransaction(function(err) {
if (err) { throw err; }
db.query('INSERT INTO fish SET values=?', [values], function(err, result) {
  if (err) {
    return connection.rollback(function() {
      throw err;
    });
  }
});
});
});

module.exports = router;
