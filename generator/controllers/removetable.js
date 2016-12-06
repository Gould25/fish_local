var db = require('./../controllers/db.js');

function deletetable() { }

// Insert location
deletetable.prototype.deletetable = function(req, callback) {
  if (req.body.table == 'fish'){
    db.query('drop table family',callback);
    db.query('drop table alias',callback);
    db.query('drop table record',callback);
    db.query('drop table fish',callback);


  }
  if (req.body.table == 'location'){
    db.query('drop table location',callback);
  }
  if (req.body.table == 'bait'){
    db.query('drop table organic',callback);
    db.query('drop table artificial',callback);
    db.query('drop table bait',callback);

  }
  if (req.body.table == 'fishlog'){
    db.query('drop table fishlog',callback);
  }
}

module.exports = new deletetable();
