/**
 * MemberController
 *
 * @description :: Server-side logic for managing members
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var http = require('http');
var querystring = require('querystring');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'rm-uf6cm0kpb0rm130szo.mysql.rds.aliyuncs.com',
  user: 'pptang_123',
  password: 'E8b9J7TjPs0u4Nf',
  port: '3306',
  database: 'ppmiao_test',
});
module.exports = {
  userType: function(request, response, callback) {
    connection.connect(function(err) {
      if (err) {
        console.log('[query] - :' + err);
        return;
      }
      console.log('[connection connect]  succeed!');
    });
    var userAddSql_Params = "select sum(due_capital) from s_user_due_detail where user_id = 66425 and due_capital > 5000 and start_time > '2017-07-29 00:00:00'";
    connection.query(userAddSql_Params, function(err, rows, fields) {
      if (err) {
        console.log('[query] - :' + err);
        return;
      }
      var result = rows[0]['sum(due_capital)'];
      result = [{str: rows[0]['sum(due_capital)']}];
      response.send(result);
    });
    //关闭connection
    connection.end(function(err) {
      if (err) {
        return;
      }
      console.log('[connection end] succeed!');
    });
},
  getTime: function(request, response, callback) {
      if (request.body.dev != undefined) {
        var data = querystring.stringify({
          token: request.body.token,
          key:'coinExchangeCash',
          versionName: request.body.versionName
        });
      } else {
        var data = querystring.stringify({
          token: GlobalMethods.tokenDes(request.body.token),
          key:'coinExchangeCash',
          versionName: request.body.versionName
        });
      }
      GlobalMethods.httpPost(request, response, callback, 'api.test.ppmiao.com', '/user/getExchangeTimes.json', data);
  },
  coinExchangeCash: function(request, response, callback) {
      if (request.body.dev != undefined) {
        var data = querystring.stringify({
          token: request.body.token,
          amount: request.body.amount,
          versionName: request.body.versionName
        });
      } else {
        var data = querystring.stringify({
          token: GlobalMethods.tokenDes(request.body.token),
          amount: request.body.amount,
          versionName: request.body.versionName
        });
      }
      GlobalMethods.httpPost(request, response, callback, 'api.test.ppmiao.com', '/user/coinExchangeCash.json', data);
  }
};
