var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('./../controllers/db.js');

//  db.query('insert into fish (fishName, ave_wght, picture) VALUES (fish.fishName, fish.ave_wght, fish.picture)')
//;
