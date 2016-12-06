var db = require('./../controllers/db.js');

function Family() { }

Family.prototype.insert = function(req, callback) {

  // Add entry to database
   db.query('insert into family (fishName, familyName) VALUES (?, ?)',
    [req.body.fishName, req.body.familyName], callback)
}

module.exports = new Family();
