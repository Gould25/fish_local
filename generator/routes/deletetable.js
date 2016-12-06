var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var db = require('./../controllers/db.js');
var removetable = require('./../controllers/removetable.js');
var multer = require('multer');
var upload = multer({ dest: 'public/images/fish_uploads/' });

router.get('/', function(req, res, next){
  res.render('deletetable');
});

router.post('/',upload.single("picture"), function(req, res){
    console.log(req.body);
    removetable.deletetable(req, function(err) {
      if (err) {
        console.log(err);
        res.render('insert_error');
      } else  {
        res.render('insert_message');
      }
    });
});
module.exports = router;
