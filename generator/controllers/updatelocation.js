var db = require('./../controllers/db.js');

function Updatelocation() { }

Updatelocation.prototype.Updatelocation = function(req, callback) {
  console.log("Got here update!!!")

  if (req.body.lat != ''){
    db.query('update location SET lat = ? Where loc_id = ?',
      [req.body.lat, req.body.loc_id], callback);
    }
  if (req.body.lng != ''){
    db.query('update location SET lng = ? Where loc_id = ?',
      [req.body.lng, req.body.loc_id], callback);
    }
  if (req.body.b_o_w != ''){
    db.query('update location SET b_o_w = ? Where loc_id = ?',
      [req.body.b_o_w, req.body.loc_id], callback);
    }
  if (req.body.state != ''){
    db.query('update location SET state = ? Where loc_id = ?',
      [req.body.state, req.body.loc_id], callback);
    }
  if (req.body.county != ''){
    db.query('update location SET county = ? Where loc_id = ?',
      [req.body.county, req.body.loc_id], callback);
    }
}
module.exports = new Updatelocation();
