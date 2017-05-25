var sqlite3 = require('sqlite3').verbose();

var connSqlite3 = function() {
  return new sqlite3.Database('./database.db');
}

module.exports = function() {
  return connSqlite3;
}
