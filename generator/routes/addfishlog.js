var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var db = require('./../controllers/db.js');

router.get('/', function(req, res, next){
  res.render('addfishlog');
});

router.post('/', function(req, res){

  var fishlog = {
    fishName:req.body.fishName,
    loc_id:req.body.loc_id,
    wght:req.body.wght,
    length:req.body.length,
    baitName:req.body.baitName,
    notes:req.body.notes
  };

  db.query('insert into fishlog set ?', fishlog , function(err, info){
    if (err) {
      res.render('insert_error');
    }
    else{
      res.render('insert_message');
    }
  });
});
module.exports = router;
