var db = require('./../controllers/db.js');

function Updatefishlog() { }

Updatefishlog.prototype.Updatefishlog = function(req, callback) {

  if (req.body.fishName != ''){
    db.query('update fishlog SET fishName = ? Where logNum = ?',
      [req.body.fishName, req.body.logNum], callback);
  }
  if (req.body.loc_id != ''){
    db.query('update fishlog SET loc_id = ? Where logNum = ?',
      [req.body.loc_id, req.body.logNum], callback);
  }
  if (req.body.wght != ''){
    db.query('update fishlog SET wght = ? Where logNum = ?',
      [req.body.wght, req.body.logNum], callback);
  }
  if (req.body.length != ''){
    db.query('update fishlog SET length = ? Where logNum = ?',
      [req.body.length, req.body.logNum], callback);
  }
  if (req.body.baitName != ''){
    db.query('update fishlog SET baitName = ? Where logNum = ?',
      [req.body.baitName, req.body.logNum], callback);
  }
  if (req.body.notes != ''){
    db.query('update fishlog SET notes = ? Where logNum = ?',
      [req.body.notes, req.body.logNum], callback);
  }
}
module.exports = new Updatefishlog();
