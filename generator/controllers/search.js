var db = require('./../controllers/db.js');

/*
 * Prototype for searching
 */
function Search() { }

/*
 * Searches for fish
 * pre: 
 *      term - search conditions, 
 *      callback - function to call when search is complete
 * post: runs callback
 */
Search.prototype.fish = function (term, callback) {
  if (term == '')
    db.query('SELECT * FROM fish', callback);
  else if (!isNaN(term)) {
    term = '%' + term + '%';
    db.query('SELECT * FROM fish WHERE ave_wght LIKE ?', [term], callback);
  }
  else
  {
    term = '%' + term + '%';
    db.query('SELECT * FROM fish WHERE fishName LIKE ?', [term], callback);
  }
}

module.exports = new Search();