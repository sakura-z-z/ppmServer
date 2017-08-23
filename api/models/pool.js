var mysql = require('mysql');
var production = require('../../config/env/production');
var development = require('../../config/env/development');
if (sails.config.environment === 'production') {
    var pool = mysql.createPool({
      host: production.DBhost,
      user: production.DBuser,
      password: production.DBpassword,
      port: '3306',
      database: 'ppmiao_online',
      multipleStatements: true,
      waitForConnections: true,
      queueLimit:10,
      connectionLimit:10,
      acquireTimeout:1000
    });
}
if (sails.config.environment === 'development') {
    var pool = mysql.createPool({
      host: development.DBhost,
      user: development.DBuser,
      password: development.DBpassword,
      port: '3306',
      database: 'ppmiao_test',
      multipleStatements: true,
      waitForConnections: true,
      queueLimit:10,
      connectionLimit:10,
      acquireTimeout:1000
    });
}

var query = function(sql, options, callback) {
  pool.query(sql, options ,function(err,rows){});
  // pool.getConnection(function(err, connection) {
  //   connection.query(sql, options, function (error, results, fields) {
  //     connection.release();
  //     if (error) throw error;
  //   });
  // });
};

module.exports = query;
