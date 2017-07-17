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
       token: GlobalMethods.tokenDes(request.body.token)
     });
     GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/message/checkRaiseSalaryInfo.json', data);
   },
   claimRaiseSalaryInterestCoupon: function(request, response, callback) {
     var data = querystring.stringify({
			//  versionName: request.body.versionName,
       token: GlobalMethods.tokenDes(request.body.token),
			//  id: request.body.id
     });
     GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/message/claimRaiseSalaryInterestCoupon.json', data);
   },
	 getUserRaiseSalaryInvestAward: function(request, response, callback) {
     var data = querystring.stringify({
       token: GlobalMethods.tokenDes(request.body.token)
     });
     GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/message/getUserRaiseSalaryInvestAward.json', data);
   }
 };
