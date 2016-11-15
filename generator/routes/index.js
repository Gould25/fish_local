var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var sql = require('./../controllers/sql.js');

/* GET home page. */
router.get('/', function(req, res) {
  var hello = "Fish_local"
  hello = sql.hello(hello);
  res.render('index', { title: hello });
});

module.exports = router;
