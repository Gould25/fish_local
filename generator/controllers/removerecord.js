var db = require('./../controllers/db.js');

function deleterecord() { }

// Insert location
deleterecord.prototype.deleterecord = function(req, callback) {

  if (req.body.fishName != ''){
    db.query('delete from fish where fishName = ?',
      [req.body.fishName], callback);
  }
  if (req.body.loc_id != ''){
    db.query('delete from location where loc_id = ?',
      [req.body.loc_id], callback);
  }
  if (req.body.baitName != ''){
    db.query('delete from bait where baitName = ?',
      [req.body.baitName], callback);
  }
  if (req.body.fishlog != ''){
    db.query('delete from fishlog where logNum = ?',
      [req.body.fishlog], callback);
  }
}

module.exports = new deleterecord();
