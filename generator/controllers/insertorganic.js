var db = require('./../controllers/db.js');

function organic() { }

// Insert location
organic.prototype.insertbait = function(req, callback) {

  // Add entry to database
  db.query('insert into organic (baitName) VALUES (?)',
    [req.body.baitName], callback);
}

module.exports = new organic();
