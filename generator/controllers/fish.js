var db = require('./../controllers/db.js');

var Fish = function() { }

// Insert fish
Fish.prototype.insert = function(req, callback) {
  console.log("Got here!!!")
  // Upload picture to filesystem
  var path = null;
  if (req.file != null) {
    path = req.file.path.replace('public', '');

    // Fix slashes on Windows
    path = path.replace(/\\/g, '/');
  }


  // Add entry to database
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
}

Fish.prototype.get = function(fish_name, callback) {
  var fish;
  var aliases;
  var family;
  db.query("SELECT fishName, ave_wght, picture FROM fish WHERE fishName = ?", [fish_name], 
    function(err, rows) {
      if (err)
        throw (err);
      fish = rows[0];
      db.query('SELECT familyName FROM family WHERE fishName = ?', [fish_name], 
        function(err, rows) {
          if (err) {
            throw (err);
          }
          family = rows[0];
          db.query('SELECT aliasName FROM alias WHERE fishName = ?', [fish_name],
            function(err, rows) {
              if (err)
                throw (err);
              aliases = rows;
              var detail = { fish: fish, family: family, aliases: aliases }
              callback(err, detail);
            });
        });
  });
}
module.exports = new Fish();


