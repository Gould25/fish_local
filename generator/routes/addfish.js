var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var db = require('./../controllers/db.js');

router.get('/', function(req, res, next){
  res.render('addfish');
});

router.post('/', function(req, res){

  var fish = {
    fishName:req.body.fishName,
    ave_wght:req.body.ave_wght
  };
  var family = {
    fishName:req.body.fishName,
    familyName:req.body.familyName
  };
  var alias = {
    fishName:req.body.fishName,
    aliasName:req.body.aliasName
  };

  db.query('insert into fish set ?', fish , function(err, info){
    if (err) {
      res.render('insert_error');
    }
  });

  db.query('insert into family set ?', family , function(err, info){
    if (err) {
      res.render('insert_error');
    }
  });

  db.query('insert into alias set ?', alias , function(err, info){
    if (err) {
      res.render('insert_error');
    }
    else{
      res.render('insert_message');
    }
  });
  console.log(fish);
});





module.exports = router;
