var db = require('./../controllers/db.js');

var Fish = function() { }

// Insert fish
Fish.prototype.insert = function(req, callback) {

  // Upload picture to filesystem
  var path = null;
  if (req.file != null)
    path = req.file.path.replace('public', '');

  // Add entry to database
<<<<<<< HEAD
  db.beginTransaction(function() {
    db.query('insert into fish (fishName, ave_wght, picture) VALUES (?, ?, ?)', 
      // Write fish record
      [req.body.fishName, req.body.wght, path], function(err) {
      if (err) {
        console.log(err);
        db.rollback();
        callback(err);
      } else  {
        // Write family record
        db.query('insert into family (fishName, familyName) VALUES (?, ?)', 
          [req.body.fishName, req.body.familyName], function(err) {
          if (err) {
            console.log(err);
            db.rollback();
            callback(err);
          } else {
            if (req.body.aliasName != '') {
              db.query('insert into alias (fishName, aliasName) VALUES (?, ?)', 
                [req.body.fishName, req.body.aliasName], function(err) {
                if (err) {
                  console.log(err);
                  db.rollback();
                  callback(err);
                } else {
                  db.commit();
                  callback(null);
                }
              });
            } else {
              db.commit();
              callback(null);
            }
          } 
        });
      }
    });
  });
=======
  db.query('insert into fish (fishName, ave_wght, picture) VALUES (?, ?, ?)',
    [req.body.fishName, req.body.wght, path], callback);
>>>>>>> recordup
}
module.exports = new Fish();
