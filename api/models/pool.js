var mysql = require('mysql');
var pool = mysql.createPool({
  // host: 'rm-uf6s86ucfa1mvy1m8o.mysql.rds.aliyuncs.com',
  // host: 'rm-uf6s86ucfa1mvy1m8.mysql.rds.aliyuncs.com',
  host: 'rm-uf6cm0kpb0rm130szo.mysql.rds.aliyuncs.com',
  user: 'pptang_123',
  password: 'E8b9J7TjPs0u4Nf',
  //正式
  // host: 'rdsx68knfa04yf50mj51.mysql.rds.aliyuncs.com',
  // user: 'ppmiao_online',
  // password: 'knfa04yF5',
  port: '3306',
  database: 'ppmiao_test',
  multipleStatements: true,
  waitForConnections: true,
  queueLimit:10,
  connectionLimit:10,
  acquireTimeout:1000
});

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
