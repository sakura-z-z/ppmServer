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
var query = require('../models/pool');
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
    let sql = "use ppmiao_coin;select jf_val from s_user_vip_level where uid = " + userInfo.id + ";select * from s_member_store_user where user_id = " + userInfo.id + " and store_id = 76;use ppmiao_online;select inv_succ,add_time from s_investment_detail where user_id = " + userInfo.id + " and inv_succ > 99 and add_time between '2017-08-11 00:00:00' and add_time < '2017-08-17 23:59:59';"
    query(sql, function(err, rows, fields) {
      if (err) {
        console.log('[query] - :' + err);
        return;
      }
      var result0 = [null];
      if (rows[1][0] != undefined) {
        result0 = [{
          jf: rows[1][0]['jf_val']
        }];
      }
      let rowsResult = [];
      let result1 = null;
      if (rows[4] != undefined) {
        for (let i = 0; i < rows[4].length; i++) {
          rowsResult.push(moment(rows[4][i]['add_time']).format('YYYYMMDD'));
          result1 = [0, 0, 0, 0, 0, 0, 0];
        }
      }
      for (let i = 0; i < rowsResult.length; i++) {
        if (rowsResult[i].indexOf('20170811') > -1) {
          result1[0] = 1
        }
        if (rowsResult[i].indexOf('20170812') > -1) {
          result1[1] = 1
        }
        if (rowsResult[i].indexOf('20170813') > -1) {
          result1[2] = 1
        }
        if (rowsResult[i].indexOf('20170814') > -1) {
          result1[3] = 1
        }
        if (rowsResult[i].indexOf('20170815') > -1) {
          result1[4] = 1
        }
        if (rowsResult[i].indexOf('20170816') > -1) {
          result1[5] = 1
        }
        if (rowsResult[i].indexOf('20170817') > -1) {
          result1[6] = 1
        }
      }
      var rowsfinal = [result0[0], result1, rows[2] == ''];
      response.send(rowsfinal);
    });
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
    GlobalMethods.httpPost(request, response, callback, 'api.ppmiao.com', '/ppmiao-coin/getexchangeTimes', data);
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
    GlobalMethods.httpPost(request, response, callback, 'api.ppmiao.com', '/ppmiao-coin/exchangeCash', data);
  }
};
