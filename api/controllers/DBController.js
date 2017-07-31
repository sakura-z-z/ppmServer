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

  },
  updateUserType: function(request, response, callback) {
    let data = ''
    if (request.body.versionName != null) {
      data = querystring.stringify({
        risk: request.body.risk,
        versionName: request.body.versionName,
        token: GlobalMethods.tokenDes(request.body.token)
      });
    } else {
      data = querystring.stringify({
        risk: request.body.risk,
        token: GlobalMethods.tokenDes(request.body.token)
      });
    }
    var options = {
      hostname: 'api.ppmiao.cn',
      path: '/user/updateUserRisk.json',
      method: 'POST',
      agent: false,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': data.length,
      }
    };
    let body = '';
    var req = http.request(options, (res) => {
      res.setEncoding('utf8');
      res.on('data', (chunk) => {
        body += chunk;
      }).on('end', (chunk) => {
        console.log(body);
        if (res.statusCode == 200) {
          let resp = JSON.parse(body); 
          console.log(resp);
          if (resp.isEnc == 'Y') {
            response.send(GlobalMethods.responseDes(resp));
          } else {
            response.send(JSON.parse(resp.resText));
          }
        }
      });
    });
    req.on('error', function(e) {
      if (callback) {
        callback(e, null);
      }
      console.log('problem with request: ' + e.message);
    });
    req.write(data);
    req.end();
  },
  UserInfo: function(request, response, callback) {
    let data = ''
    if (request.body.versionName != null) {
      data = querystring.stringify({
        token: GlobalMethods.tokenDes(request.body.token),
        versionName: request.body.versionName,
      });
    } else {
      data = querystring.stringify({
        token: GlobalMethods.tokenDes(request.body.token)
        // token: request.body.token
      });
    }
    var options = {
      hostname: 'api.ppmiao.cn',
      path: '/user/userInfo.json',
      method: 'POST',
      agent: false,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': data.length,
      }
    };
    let body = '';
    var req = http.request(options, (res) => {
      res.setEncoding('utf8');
      res.on('data', (chunk) => {
        body += chunk;
      }).on('end', (chunk) => {
           console.log(body);
        if (res.statusCode == 200) {
          let resp = JSON.parse(body); 
          if (resp.isEnc == 'Y') {
            resp = GlobalMethods.responseDes(resp);
            console.log(resp);
            // response.send(GlobalMethods.responseDes(resp));
            // resp.resText = JSON.parse(resp.resText); 
            if (resp.code == "0") {
              resp = {
                code: resp.code,
                errorMsg: resp.errorMsg,
                errorType: resp.errorType,
                result: {
                  risk: resp.result.risk,
                  riskAuth: resp.result.riskAuth,
                },
                success: resp.success
              }
              response.send(resp);
            } else {
              response.send(resp);
            }
          } else {
            resp.resText = JSON.parse(resp.resText); 
            if (resp.resText.code == "0") {
              resp.resText = {
                code: resp.resText.code,
                errorMsg: resp.resText.errorMsg,
                errorType: resp.resText.errorType,
                result: {
                  risk: resp.resText.result.risk,
                  riskAuth: resp.resText.result.riskAuth,
                },
                success: resp.resText.success
              }
              response.send(resp.resText);
            } else {
              response.send(resp.resText);
            }
          }
        }
      });
    });
    req.on('error', function(e) {
      if (callback) {
        callback(e, null);
      }
      console.log('problem with request: ' + e.message);
    });
    req.write(data);
    req.end();
  },
};
