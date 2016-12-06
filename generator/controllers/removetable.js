var db = require('./../controllers/db.js');

function deletetable() { }

// Insert location
deletetable.prototype.deletetable = function(req, callback) {
  if (req.body.table == 'yes'){
    db.query('drop table fishlog',callback);
    db.query('drop table family',callback);
    db.query('drop table alias',callback);
    db.query('drop table record',callback);
    db.query('drop table fish',callback);
    db.query('drop table location',callback);
    db.query('drop table organic',callback);
    db.query('drop table artificial',callback);
    db.query('drop table bait',callback);
  }else{
    res.render('insert_error');
  }
}

module.exports = new deletetable();
