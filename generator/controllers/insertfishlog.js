var db = require('./../controllers/db.js');

function fishlog() { }

// Insert location
fishlog.prototype.insert = function(req, callback) {

  // Add entry to database
  db.query('insert into fishlog (fishName, loc_id, wght, length, baitName, notes) VALUES (?, ?, ?, ?, ?, ?)',
    [req.body.fishName, req.body.loc_id, req.body.wght, req.body.length, req.body.baitName, req.body.notes], callback);
}

module.exports = new fishlog();
