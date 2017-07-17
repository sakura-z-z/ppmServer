/**
 * DBController
 *
 * @description :: Server-side logic for managing DBS
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var http = require('http');
var querystring = require('querystring');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '213',
  port: '3306',
  database: 'my_new_test',
});
module.exports = {
  userType: function(request, response, callback) {
    console.log(request.body.type);
    connection.connect();
    var userAddSql = 'INSERT INTO node_use(id,name,age) VALUES(0,?,?)';
    var userAddSql_Params = ['Wilson', 55];
    //增 add
    connection.query(userAddSql, userAddSql_Params, function(err, result) {
      if (err) {
        console.log('[INSERT ERROR] - ', err.message);
        return;
      }
      console.log('-------INSERT----------');
      //console.log('INSERT ID:',result.insertId);
      console.log('INSERT ID:', result);
      console.log('#######################');
    });
    connection.end();

  }
};
