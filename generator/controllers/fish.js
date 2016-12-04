var db = require('./../controllers/db.js');
var uploader = require('./../controllers/uploader.js');

var fish = function() { }

// Insert fish
fish.insert = function(body) {
  console.log("Got here!!!")
  // Upload picture to filesystem
  var path = uploader.upload_fish(body.picture);

  // Add entry to database
  db.query('insert into fish (fishName, ave_wght, picture) VALUES (?, ?, ?)', [body.fishName, body.wght, path]);
}

module.exports = fish;


