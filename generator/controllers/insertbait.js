var db = require('./../controllers/db.js');

function insertbait() { }

// Insert location
insertbait.prototype.insertbait = function(req, callback) {

  // Add entry to database
  db.query('insert into bait (baitName, description) VALUES (?, ?)',
    [req.body.baitName, req.body.description], callback);
}

module.exports = new insertbait();
