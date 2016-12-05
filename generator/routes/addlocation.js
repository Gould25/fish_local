var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var db = require('./../controllers/db.js');

router.get('/', function(req, res, next){
  res.render('addlocation');
});

router.post('/', function(req, res){

  var location = {
    lat:req.body.lat,
    lng:req.body.lng,
    b_o_w:req.body.b_o_w,
    state:req.body.state,
    county:req.body.county
  };

  db.query('insert into location set ?', location , function(err, info){
    if (err) {
      res.render('insert_error');
    }else{
      res.render('insert_message');
    }
  });
});
module.exports = router;
