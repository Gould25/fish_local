var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var db = require('./../controllers/db.js');
var insertbait = require('./../controllers/insertbait.js');
var insertartificial = require('./../controllers/insertartificial.js');
var insertorganic = require('./../controllers/insertorganic.js');
var multer = require('multer');
var upload = multer({ dest: 'public/images/fish_uploads/' });

router.get('/', function(req, res, next){
  res.render('addbait');
});

router.post('/', upload.single("picture"), function(req, res){
  if ((req.body.orgart == 'a') || (req.body.orgart == 'o')){
    insertbait.insertbait(req, function(err) {
      console.log(' function bait');
      if (err) {
        console.log(err);
        res.render('insert_error');
      }
    });
    if(req.body.orgart === 'a'){
      insertartificial.insertbait(req, function(err) {
        console.log(' function artificial');
      if (err) {
        console.log(err);
        res.render('insert_error');
        }else
          res.render('insert_message');
        });
      }
      if(req.body.orgart === 'o'){
        insertorganic.insertbait(req, function(err) {
          console.log(' function organic');
          if (err) {
            console.log(err);
            res.render('insert_error');
          }else
            res.render('insert_message');
        });
      }
  }else{
    res.render('insert_error');
  }
});

module.exports = router;
