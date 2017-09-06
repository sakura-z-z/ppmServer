/**
 * CircleController
 *
 * @description :: Server-side logic for managing circles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var http = require('http');
var querystring = require('querystring');
var mysql = require('mysql');
var moment = require('moment');
var query = require('../models/pool');
var production = require('../../config/env/production');
var development = require('../../config/env/development');
module.exports = {
  userJFVal: function(request, response, callback) {
    let mocktoken = ''
    if (request.body.dev != undefined) {
      mocktoken = request.body.token;
    } else {
      mocktoken = GlobalMethods.tokenDes(request.body.token);
    }
    let token = GlobalMethods.base64decode(mocktoken);
    if (token == '') {
      response.send('token解析失败');
      return;
    }
    let tokenArr = token.split("_");
    let userInfo = {
      id: tokenArr[2],
      salt: tokenArr[3]
    };
    let userDB = ''
    if (sails.config.environment === 'production') {
      userDB = production.database_Member;
    }
    if (sails.config.environment === 'development') {
      userDB = development.database_Member;
    }
    let sql = "select jf_val from " + userDB + ".s_user_vip_level where uid = " + userInfo.id + ";";
    query(sql, function(err, rows, fields) {
      if (err) {
        console.log('[query] - :' + err);
        return;
      }
      if (rows != '') {
        response.send({jf: rows[0]['jf_val']
        });
      } else {
        response.send({jf: 0});
      }
    });
  },
  setJFVal: function(request, response, callback) {
    if (request.body.dev != undefined) {
      var data = querystring.stringify({token: request.body.token, keyName: request.body.keyName, versionName: request.body.versionName});
    } else {
      var data = querystring.stringify({
        token: GlobalMethods.tokenDes(request.body.token),
        keyName: request.body.keyName,
        versionName: request.body.versionName
      });
    }
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/activity/lottery.json', data);
  },
  isExchange: function(request, response, callback) {
    let mocktoken = ''
    if (request.body.dev != undefined) {
      mocktoken = request.body.token;
    } else {
      mocktoken = GlobalMethods.tokenDes(request.body.token);
    }
    let token = GlobalMethods.base64decode(mocktoken);
    if (token == '') {
      response.send('token解析失败');
      return;
    }
    let tokenArr = token.split("_");
    let userInfo = {
      id: tokenArr[2],
      salt: tokenArr[3]
    };
    let userDB = ''
    if (sails.config.environment === 'production') {
      userDB = production.database_User;
    }
    if (sails.config.environment === 'development') {
      userDB = development.database_User;
    }
    let sql = "select COUNT(*) from  " + userDB + ".s_lottery_log where user_id = " + userInfo.id + " and lottery_id = 22;";
    console.log(sql);
    query(sql, function(err, rows, fields) {
      if (err) {
        console.log('[query] - :' + err);
        return;
      }
      console.log(rows);
      if (rows != '') {
        response.send({count: rows[0]['COUNT(*)']
        });
      } else {
        response.send({count: 0});
      }
    });
  }
}
