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
var production = require('../../config/env/production');
var development = require('../../config/env/development');
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
    let sql = "use ppmiao_coin;select jf_val from ppmiao_coins_user_vip_level where uid = " + userInfo.id + ";";
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
},
  userInvition: function(request, response, callback) {
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
    }
    let userDB = ''
    if (sails.config.environment === 'production') {
         userDB = production.database_User;
    }
    if (sails.config.environment === 'development') {
         userDB = development.database_User;
    }
    // let startTime = "'2017-08-21 00:00:00'";
    // let endTime = "'2017-08-30 23:59:59'";
    let startTime = "'2017-08-25 00:00:00'"; //---------
    let endTime = "'2017-08-30 23:59:59'";  //---------
    let sql1 = "select start_time,end_time from  "+ userDB +".s_lottery_base where key_name='magpie_festival';";
    query(sql1, function(err, rows, fields) {
        if (rows[0] != undefined){
            startTime = moment(rows[0].start_time * 1000).add(1 ,'days').format('YYYY-MM-DD HH:MM:SS');
            endTime = moment(rows[0].end_time * 1000).format('YYYY-MM-DD HH:MM:SS');
            let sql2 = "select sum(due_capital) from  "+ userDB +".s_user_due_detail where user_id = " + userInfo.id + " and start_time > '" + startTime + "';";
            console.log(sql2);
            query(sql2, function(err, rows, fields) {
                console.log(rows);
                if(rows != undefined){
                    if ( rows[0]['sum(due_capital)'] != null ){
                        response.send({result:rows[0]['sum(due_capital)'], code: 1});
                    }
                    else {
                        response.send({result: 0, errMsg: '没有投资记录', code: 0});
                    }
                }
                else {
                    response.send({result: 0, errMsg: '没有投资记录', code: 0});
                }

            });
        }
    });
  }
};
