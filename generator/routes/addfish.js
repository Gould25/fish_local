var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var db = require('./../controllers/db.js');
var fish = require('./../controllers/fish.js');



router.get('/', function(req, res, next){
  res.render('addfish');
});

router.post('/', function(req, res){
  res.render('addfish');
    console.log(req.body);
    fish.insert(req.body);
    res.send("recieved your request!");
});
router.post('/show_message', function(req, res){
  var fish = req.body;
  if (!fish.fishName || !fish.wght || !fish.picture){
    res.render('show_message', {message: "Sorry, you provided worng info", type: "error"});
  }
  else{
  mysql.query('insert into Fish_local (fishName, wght, picture) values (fish.fishName, fish.wght, fish.picture')
    if(err)
      res.render('show_message', {message: "Database error", type: "error"});
      else
      res.render('show_message', {message: "New fish added", type: "success", person: fish});
  };
});

module.exports = router;
