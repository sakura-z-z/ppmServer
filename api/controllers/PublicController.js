/**
 * PublicController
 *
 * @description :: Server-side logic for managing Publics
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var querystring = require('querystring');
module.exports = {
	getLotteryLogByLotteryAwardId: function(request, response, callback) {
      var data = querystring.stringify({lotteryAwardId: request.body.lotteryAwardId, mobile: request.body.mobile});
      console.log(GlobalVal.apiHost);
      GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/payment/activity/inviteFriend/getLotteryLogByLotteryAwardId.htm', data);
    },
	checkActivity: function(request, response, callback) {
       var data = querystring.stringify({keyName: request.body.keyName});
       console.log(GlobalVal.apiHost);
       GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/activity/checkActivty.json', data);
     },
	 exchangeAward: function(request, response, callback) {
       var data = querystring.stringify({lotteryAwardId: request.body.lotteryAwardId, expdate: request.body.expdate, mobile: request.body.mobile, times: request.body.times});
       console.log(GlobalVal.apiHost);
       GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/payment/activity/inviteFriend/exchangeAward.htm', data);
     },
     exchangePrize: function(request, response, callback) {
       if (request.body.dev != undefined) {
         var data = querystring.stringify({token: request.body.token, keyName: request.body.keyName, versionName: request.body.versionName});
       } else {
         var data = querystring.stringify({
           token: GlobalMethods.tokenDes(request.body.token),
           keyName: request.body.keyName,
           versionName: request.body.versionName
         });
       }
       console.log(data);
       GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/activity/lottery.json', data);
     },
	 getCurryTimes: function(request, response, callback) {
        var data = querystring.stringify({});
        console.log(GlobalVal.apiHost);
        GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/payment/activity/inviteFriend/getCurryTimes.htm', data);
      },
};
