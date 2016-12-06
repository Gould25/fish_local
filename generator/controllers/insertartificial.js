var db = require('./../controllers/db.js');

function artificial() { }

// Insert location
artificial.prototype.insertbait = function(req, callback) {

  // Add entry to database
  db.query('insert into artificial (baitName, size, color) VALUES (?, ?, ?)',
    [req.body.baitName, req.body.size, req.body.color], callback);
}

module.exports = new artificial();
