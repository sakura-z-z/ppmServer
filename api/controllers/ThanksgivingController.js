/**
 * ThanksgivingController
 *
 * @description :: Server-side logic for managing Thanksgivings
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var querystring = require('querystring');
module.exports = {
	getRanking: function(request, response, callback) {
       var data = querystring.stringify({keyName: request.body.keyName, top: request.body.top, durationDay: request.body.durationDay});
       console.log(GlobalVal.apiHost);
       GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/activity/getRanking.json', data);
   },
	getMyRank: function(request, response, callback) {
       var data = querystring.stringify({ token: GlobalMethods.tokenDes(request.body.token),keyName: request.body.keyName, top: request.body.top, durationDay: request.body.durationDay});
       console.log(GlobalVal.apiHost);
       GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/activity/getRanking.json', data);
   },
	queryThanksGiving: function(request, response, callback) {
       var data = querystring.stringify({ token: GlobalMethods.tokenDes(request.body.token)});
       console.log(GlobalVal.apiHost);
       GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/activity/queryThanksGiving.json', data);
   },
	exchangeThanksAward: function(request, response, callback) {
       var data = querystring.stringify({ token: GlobalMethods.tokenDes(request.body.token), amount: request.body.amount, lotteryAwardId: request.body.lotteryAwardId});
       console.log(GlobalVal.apiHost);
       GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/activity/exchangeThanksAward.json', data);
     }
};
