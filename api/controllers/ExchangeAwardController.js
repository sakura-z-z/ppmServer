/**
 * ExchangeAwardController
 *
 * @description :: Server-side logic for managing exchangeawards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var querystring = require('querystring');
module.exports = {
  exchangeAward: function(request, response, callback) {
    var data = querystring.stringify({lotteryAwardId: request.body.lotteryAwardId, expdate: request.body.expdate, mobile: request.body.mobile});
    console.log(GlobalVal.apiHost);
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/payment/activity/inviteFriend/exchangeAward.htm', data);
  },
  checkActivity: function(request, response, callback) {
    var data = querystring.stringify({keyName: request.body.keyName});
    console.log(GlobalVal.apiHost);
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/payment/activity/inviteFriend/checkActivity.htm', data);
  },
  getLotteryLogByLotteryAwardId: function(request, response, callback) {
    var data = querystring.stringify({lotteryAwardId: request.body.lotteryAwardId, mobile: request.body.mobile});
    console.log(GlobalVal.apiHost);
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/payment/activity/inviteFriend/getLotteryLogByLotteryAwardId.htm', data);
  },
  getCurryTimes: function(request, response, callback) {
      console.log(GlobalVal.apiHost);
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/payment/activity/inviteFriend/getCurryTimes.htm');
  },
  queryInvcAmount: function(request, response, callback) {
      console.log(GlobalVal.apiHost);
    var data = querystring.stringify({
      token: GlobalMethods.tokenDes(request.body.token),
      duration: request.body.duration,
      beginDate: request.body.beginDate
    });
    GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/user/queryInvcAmount.json', data);
  }
};
