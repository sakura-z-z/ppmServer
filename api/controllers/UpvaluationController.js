/**
 * UpvaluationController
 *
 * @description :: Server-side logic for managing Upvaluations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var http = require('http');
var CryptoJS = require("crypto-js");
var querystring = require('querystring');
module.exports = {
  checkRaiseSalaryInfo: function(request, response, callback) {
    var data = querystring.stringify({
      token: GlobalMethods.tokenDes(request.body.token),
      versionName: request.body.versionName,
			userId:58
    });
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/stone-rest/rest/message/checkRaiseSalaryInfo.json', data);
  },
  claimRaiseSalaryInterestCoupon: function(request, response, callback) {
    var data = querystring.stringify({
      versionName: request.body.versionName,
      token: GlobalMethods.tokenDes(request.body.token),
			userId:58
      //  id: request.body.id
    });
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/stone-rest/rest/message/claimRaiseSalaryInterestCoupon.json', data);
  },
  getUserRaiseSalaryInvestAward: function(request, response, callback) {
    var data = querystring.stringify({
      token: GlobalMethods.tokenDes(request.body.token),
      versionName: request.body.versionName,
			userId:58
    });
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/stone-rest/rest/message/getUserRaiseSalaryInvestAward.json', data);
  }
};