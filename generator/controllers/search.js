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

/*
 * Searches for Locations
 * pre:
 *      term - search conditions,
 *      callback - function to call when search is complete
 * post: runs callback
 */
Search.prototype.locations = function(term, callback) {
  if (term === undefined || term == '')
    db.query('SELECT * FROM location', callback);
  else if (!isNaN(term)) {
    term = '%' + term + '%';
    db.query('SELECT * FROM location WHERE lat LIKE ? OR lng LIKE ?', [term, term], callback);
  }
  else
  {
    var term = '%' + term + '%';
    db.query('SELECT * FROM location WHERE b_o_w LIKE ?' +
              'OR state LIKE ? or county LIKE ?', [term, term, term], callback);
  }
}
/*
/*
 * Searches for Artificial Baits
 * pre:
 *      term - search conditions,
 *      callback - function to call when search is complete
 * post: runs callback
 *
Search.prototype.artificial = function(term, callback) {
  if (term === undefined || term == '')
    db.query('select bait.baitName, bait.description, artificial.color,'+
              'artificial.size from bait, artificial' +
              'where bait.baitName = artificial.baitName', callback);
  else if (!isNaN(term)) {
    term = '%' + term + '%';
    db.query('select bait.baitName, bait.description, artificial.color,'+
              'artificial.size from bait, artificial' +
              'where baitName LIKE ?', [term], callback);
  }
  else
  {
    var term = '%' + term + '%';
    db.query('select bait.baitName, bait.description, artificial.color,'+
              'artificial.size from bait, artificial' +
              'where bait.description LIKE ?' +
              'OR artificial.color LIKE ?' +
              'OR artificial.size LIKE ?', [term, term, term], callback);
  }
}
*/
module.exports = new Search();
