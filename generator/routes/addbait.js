var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var db = require('./../controllers/db.js');

router.get('/', function(req, res, next){
  res.render('addbait');
});

router.post('/', function(req, res){

  var bait = {
    baitName:req.body.baitName,
    description:req.body.description
  };

  var organic = {
    baitName:req.body.baitName,
  };
  var artificial = {
    baitName:req.body.baitName,
    size:req.body.size,
    color:req.body.color
  };

  db.query('insert into bait set ?', bait , function(err, info){
    if (err) {
      res.render('insert_error');
    }
  });

  if (req.body.org === "y"){
    db.query('insert into organic set ?', organic , function(err, info){
      if (err) {
        res.render('insert_error');
      }
      else{
        res.render('insert_message');
      }
    });
  }
  else {
    db.query('insert into artificial set ?', artificial , function(err, info){
      if (err) {
        res.render('insert_error');
      }
      else{
        res.render('insert_message');
      }
    });

  }
  console.log(bait);
});





module.exports = router;
