var db = require('./../controllers/db.js');

function Updatebait() { }

// Update baut
Updatebait.prototype.Updatebait = function(req, callback) {

  if (req.body.description != ''){
    db.query('update bait SET description = ? Where baitName = ?',
      [req.body.description, req.body.baitName], callback);
    }
  if (req.body.size != ''){
    db.query('update artificial SET size = ? Where baitName = ?',
      [req.body.size, req.body.baitName], callback);
    }
  if (req.body.color != ''){
    db.query('update artificial SET color = ? Where baitName = ?',
      [req.body.color, req.body.baitName], callback);
    }
}
module.exports = new Updatebait();
