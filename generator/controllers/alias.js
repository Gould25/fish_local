var db = require('./../controllers/db.js');

function Alias() { }

Alias.prototype.insert = function(req, callback) {
  console.log("Got here!!!")

  // Add entry to database
   db.query('insert into alias (fishName, aliasName) VALUES (?, ?)', 
    [req.body.fishName, req.body.aliasName], callback)
}

module.exports = new Alias();