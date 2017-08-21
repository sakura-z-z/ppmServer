/**
 * HeartController
 *
 * @description :: Server-side logic for managing Hearts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var http = require('http');
var CryptoJS = require("crypto-js");
var querystring = require('querystring');
var actHost = '118.178.229.154';
var actId = 33;
module.exports = {
  actInfo: function(request, response, callback) {
    if (request.body.dev != undefined) {
      var data = querystring.stringify({
        token: request.body.token,
        lotteryId: actId,
        versionName: request.body.versionName
      });
    } else {
      var data = querystring.stringify({
        token: GlobalMethods.tokenDes(request.body.token),
        lotteryId: actId,
        versionName: request.body.versionName
      });
    }
    GlobalMethods.httpPostPHP(request, response, callback, actHost, '/index.php?c=lottery&a=get_lottery_info', data, 81);
  },
  drawResult: function(request, response, callback) {
    if (request.body.dev != undefined) {
      var data = querystring.stringify({
        token: request.body.token,
        lotteryId: actId,
        versionName: request.body.versionName
      });
    } else {
      var data = querystring.stringify({
        token: GlobalMethods.tokenDes(request.body.token),
        lotteryId: actId,
        versionName: request.body.versionName
      });
    }
    GlobalMethods.httpPostPHP(request, response, callback, actHost, '/index.php?c=lottery&a=do_lottery', data, 81);
  },
  winningList: function(request, response, callback) {
    if (request.body.dev != undefined) {
      var data = querystring.stringify({
        token: request.body.token,
        lotteryId: actId,
        versionName: request.body.versionName,
        type: request.body.type,
      });
    } else {
      var data = querystring.stringify({
        token: GlobalMethods.tokenDes(request.body.token),
        lotteryId: actId,
        versionName: request.body.versionName,
        type: request.body.type,
        count: request.body.count
      });
    }
    GlobalMethods.httpPostPHP(request, response, callback, actHost, '/index.php?c=lottery&a=get_user_lottery_log', data, 81);
  },
  drawTimes: function(request, response, callback) {
    if (request.body.dev != undefined) {
      var data = querystring.stringify({
        token: request.body.token,
        lotteryId: actId,
        versionName: request.body.versionName
      });
    } else {
      var data = querystring.stringify({
        token: GlobalMethods.tokenDes(request.body.token),
        lotteryId: actId,
        versionName: request.body.versionName
      });
    }
    GlobalMethods.httpPostPHP(request, response, callback, actHost, '/index.php?c=lottery&a=get_lottery_num', data, 81);
  }
};
