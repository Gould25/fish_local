var db = require('./../controllers/db.js');

function Location() { }

/*
 * Gets all locations in the database and returns them as JSON
 * pre: callback - function to execute on completion
 * post: runs callback after querying database
 */
Location.prototype.get_all = function (callback) {
  db.query("SELECT * from location", function(err, rows) {
    callback(err, rows);
  });
}

module.exports = new Location();