/**
 * MemberController
 *
 * @description :: Server-side logic for managing members
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var http = require('http');
var querystring = require('querystring');
var mysql = require('mysql');
var moment = require('moment');
var connection = mysql.createConnection({
  // host: 'rm-uf6s86ucfa1mvy1m8o.mysql.rds.aliyuncs.com',
   host: 'rm-uf6s86ucfa1mvy1m8.mysql.rds.aliyuncs.com',
  user: 'pptang_123',
  password: 'E8b9J7TjPs0u4Nf',
  port: '3306',
  database: 'ppmiao_test',
  multipleStatements: true,
  useConnectionPooling: true
});
module.exports = {
  userType: function(request, response, callback) {
      let mocktoken = ''
      if (request.body.dev != undefined) {
          mocktoken = request.body.token;
      } else {
          mocktoken = GlobalMethods.tokenDes(request.body.token);
      }
      let token = GlobalMethods.base64decode(mocktoken);
      if (token == '') {
        response.send('token解析失败');
      }
      let tokenArr = token.split("_");
      let userInfo = {
        id: tokenArr[2],
        salt: tokenArr[3]
      }
    connection.connect(function(err) {
      if (err) {
        console.log('[query] - :' + err);
        return;
      }
    });
    let sql = "select jf_val from s_user_vip_level where uid = "+ userInfo.id +";select due_capital,start_time from s_user_due_detail where user_id = "+ userInfo.id +" and due_capital > 100 and start_time between '2017-07-29 00:00:00' and start_time < '2017-08-04 23:59:59';"
    connection.query(sql, function(err, rows, fields) {
      if (err) {
        console.log('[query] - :' + err);
        return;
      }
      var result0 = [null]
      if (rows[0][0] != undefined) {
          result0 = [{
            jf: rows[0][0]['jf_val']
          }];
      }
      let rowsResult = [];
      let result1 = null;
      if (rows[1] != undefined) {
          for (let i = 0; i < rows[1].length; i++) {
            rowsResult.push(moment(rows[1][i]['start_time']).format('YYYYMMDD'));
            result1 = [0, 0, 0, 0, 0, 0, 0];
          }
      }
      for (let i = 0; i < rowsResult.length; i++) {
        if (rowsResult[i].indexOf('20170729') > -1) {
          result1[0] = 1
        }
        if (rowsResult[i].indexOf('20170730') > -1) {
          result1[1] = 1
        }
        if (rowsResult[i].indexOf('20170731') > -1) {
          result1[2] = 1
        }
        if (rowsResult[i].indexOf('20170801') > -1) {
          result1[3] = 1
        }
        if (rowsResult[i].indexOf('20170802') > -1) {
          result1[4] = 1
        }
        if (rowsResult[i].indexOf('20170803') > -1) {
          result1[5] = 1
        }
        if (rowsResult[i].indexOf('20170804') > -1) {
          result1[6] = 1
        }
      }
      var rowsfinal = [result0[0],result1];
      response.send(rowsfinal);
    });
    //关闭connection
    // connection.end(function(err) {
    //   if (err) {
    //     return;
    //   }
    // });
  },
  getTime: function(request, response, callback) {
    if (request.body.dev != undefined) {
      var data = querystring.stringify({
        token: request.body.token,
        storeId: request.body.storeId,
        versionName: request.body.versionName
      });
    } else {
      var data = querystring.stringify({
        token: GlobalMethods.tokenDes(request.body.token),
        storeId: request.body.storeId,
        versionName: request.body.versionName
      });
    }
    GlobalMethods.httpPost(request, response, callback, 'api.test.ppmiao.com', '/ppmiao-coin/getexchangeTimes', data);
  },
  coinExchangeCash: function(request, response, callback) {
    if (request.body.dev != undefined) {
      var data = querystring.stringify({
        token: request.body.token,
        amount: request.body.amount,
        storeId: request.body.storeId,
        versionName: request.body.versionName
      });
    } else {
      var data = querystring.stringify({
        token: GlobalMethods.tokenDes(request.body.token),
        amount: request.body.amount,
        storeId: request.body.storeId,
        versionName: request.body.versionName
      });
    }
    GlobalMethods.httpPost(request, response, callback, 'api.test.ppmiao.com', '/ppmiao-coin/exchangeCash', data);
  }
};
