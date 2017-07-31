/**
 * HeartController
 *
 * @description :: Server-side logic for managing Hearts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var http = require('http');
var CryptoJS = require("crypto-js");
var querystring = require('querystring');
// var actHost = 'http://www.ppmiao.com';
var actHost = '121.40.211.34';
var actId = 17;
var dev = undefined;
module.exports = {
  actInfo: function(request, response, callback) {
    if (dev != undefined) {
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
    GlobalMethods.httpPostPHP(request, response, callback, actHost, '/index.php?c=lottery&a=get_lottery_info', data, 80);
  },
  drawResult: function(request, response, callback) {
    if (dev != undefined) {
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
    GlobalMethods.httpPostPHP(request, response, callback, actHost, '/index.php?c=lottery&a=do_lottery', data, 80);
  },
  winningList: function(request, response, callback) {
    if (dev != undefined) {
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
    GlobalMethods.httpPostPHP(request, response, callback, actHost, '/index.php?c=lottery&a=get_user_lottery_log', data, 80);
  },
  drawTimes: function(request, response, callback) {
    if (dev != undefined) {
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
    GlobalMethods.httpPostPHP(request, response, callback, actHost, '/index.php?c=lottery&a=get_lottery_num', data, 80);
  }
};
