var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var db = require('./../controllers/db.js');
var updatefish = require('./../controllers/updatefish.js');
var multer = require('multer');
var upload = multer({ dest: 'public/images/fish_uploads/' });

router.get('/', function(req, res, next){
  res.render('updatefish');
});


router.post('/', upload.single("picture"), function(req, res){
    console.log(req.body);
    console.log(req.file);
    updatefish.UpdateFish(req, function(err) {
      if (err) {
        console.log(err);
        res.render('insert_error');
      } else  {
        res.render('insert_message');
      }
    });
});





module.exports = router;
