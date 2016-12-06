var db = require('./../controllers/db.js');

function UpdateFish() { }

// Insert fish
UpdateFish.prototype.UpdateFish = function(req, callback) {

  // Upload picture to filesystem
  var path = null;
  if (req.file != null){
    path = req.file.path.replace('public', '');

    db.query('update fish SET picture = ? Where fishName = ?',
      [path, req.body.fishName], callback);
  }
  // Add entry to database
  if (req.body.wght != null){

    db.query('update fish SET ave_wght = ? Where fishName = ?',
      [req.body.wght, req.body.fishName], callback);
    }
}
module.exports = new UpdateFish();
