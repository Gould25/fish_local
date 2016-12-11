var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var db = require('./../controllers/db.js');

router.get('/', function(req, res, next){
  res.render('admin/addrecord');
});

router.post('/', function(req, res){

  var record = {
    fishName:req.body.fishName,
    b_o_w:req.body.b_o_w,
    wght:req.body.wght,
    date_caught:req.body.date_caught
  };


  db.query('insert into record set ?', record , function(err, info){
    if (err) {
      res.render('insert_error');
    }
    else{
      res.render('insert_message');
    }
  });
  console.log(record);
});





module.exports = router;
