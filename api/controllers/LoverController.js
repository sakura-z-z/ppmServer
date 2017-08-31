/**
 * LoverController
 *
 * @description :: Server-side logic for managing lovers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var http = require('http');
var CryptoJS = require("crypto-js");
var querystring = require('querystring');
var actHost = 'cg.ppmiao.com';
// var actHost = '121.40.211.34';
var actId = 24;
module.exports = {
  actInfo: function(request, response, callback) {
  var data = querystring.stringify({
    mobile: request.body.mobile,
    lotteryId: actId,
    versionName: request.body.versionName
  });
    GlobalMethods.httpPostPHP(request, response, callback, actHost, '/index.php?c=lottery&a=get_lottery_info', data);
  },
  drawResult: function(request, response, callback) {
      var data = querystring.stringify({
        mobile: request.body.mobile,
        lotteryId: actId,
        versionName: request.body.versionName
      });
    GlobalMethods.httpPostPHP(request, response, callback, actHost, '/index.php?c=lottery&a=do_lottery', data);
  },
  winningList: function(request, response, callback) {
      var data = querystring.stringify({
        mobile: request.body.mobile,
        lotteryId: actId,
        versionName: request.body.versionName,
        type: request.body.type,
      });
    GlobalMethods.httpPostPHP(request, response, callback, actHost, '/index.php?c=lottery&a=get_user_lottery_log', data);
  },
  drawTimes: function(request, response, callback) {
      var data = querystring.stringify({
        mobile: request.body.mobile,
        lotteryId: actId,
        versionName: request.body.versionName
      });
    GlobalMethods.httpPostPHP(request, response, callback, actHost, '/index.php?c=lottery&a=get_lottery_num', data);
  }
};
