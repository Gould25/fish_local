var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var db = require('./../controllers/db.js');
var fish = require('./../controllers/fish.js');
var alias = require('./../controllers/alias.js');
var family = require('./../controllers/family.js');
var multer = require('multer');
var upload = multer({ dest: 'public/images/fish_uploads/' });

router.get('/', function(req, res, next){
  res.render('addfish');
});


router.post('/', upload.single("picture"), function(req, res){
    console.log(req.body);
    console.log(req.file);
    fish.insert(req, function(err) {
      if (err) {
        console.log(err);
        res.render('insert_error');
      } else  {
        family.insert(req, function(err) {
          if (err) {
            console.log(err);
            res.render('insert_error');
          } else {
            if (req.body.aliasName != '') {
              alias.insert(req, function(err) {
                if (err) {
                  console.log(err);
                  res.render('insert_error');
                }
                else
                  res.render('insert_message');
              });
            } else {
              res.render('insert_message');
            }
          }
        });
      }
    });
});





module.exports = router;
