var db = require('./../controllers/db.js');

var Fish = function() { }

// Insert fish
Fish.prototype.insert = function(req) {
  console.log("Got here!!!")
  // Upload picture to filesystem
  var path = req.file.path.replace('public', '');

  // Add entry to database
  db.query('insert into fish (fishName, ave_wght, picture) VALUES (?, ?, ?)', [req.body.fishName, req.body.wght, path]);
}

module.exports = new Fish();


