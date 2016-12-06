var db = require('./../controllers/db.js');

var insertlocation = function() { }

// Insert location
insertlocation.prototype.insertlocation = function(req, callback) {

  // Add entry to database
  db.query('insert into location (lat, lng, b_o_w, state, county) VALUES (?, ?, ?, ?, ?)',
    [req.body.lat, req.body.lng, req.body.b_o_w, req.body.state, req.body.county], callback);
}

module.exports = new insertlocation();
