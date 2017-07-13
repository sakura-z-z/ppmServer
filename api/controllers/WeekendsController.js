/**
 * WeekendsController
 *
 * @description :: Server-side logic for managing weekends
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 var http = require('http');
 var CryptoJS = require("crypto-js");
 var querystring = require('querystring');
 module.exports = {
   checkWeekends: function(request, response, callback) {
     var data = querystring.stringify({
			 versionName: request.body.versionName,
       token: GlobalMethods.tokenDes(request.body.token)
     });
     GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/stone-rest/rest/message/checkWeekendRedCoupons.json', data);
   },
   claimWeekends: function(request, response, callback) {
     var data = querystring.stringify({
			 versionName: request.body.versionName,
       token: GlobalMethods.tokenDes(request.body.token),
			 id: request.body.id
     });
     GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/stone-rest/rest/message/claimWeekendRedCoupons.json', data);
   }
 };
