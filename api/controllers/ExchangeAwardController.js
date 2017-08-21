/**
 * ExchangeAwardController
 *
 * @description :: Server-side logic for managing exchangeawards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var querystring = require('querystring');
module.exports = {
	exchangeAward: function(request, response, callback) {
		var data = querystring.stringify({
			lotteryAwardId: request.body.lotteryAwardId,
			expdate: request.body.expdate,
			mobile: request.body.mobile
		});
      GlobalMethods.httpPostSimple(request, response, callback, 'api.test.ppmiao.com', '/payment/activity/inviteFriend/checkActivity.htm', data);
  },
	checkActivity: function(request, response, callback) {
	  var data = querystring.stringify({
		keyName: request.body.keyName
	  });
      GlobalMethods.httpPostSimple(request, response, callback,'api.test.ppmiao.com', '/payment/activity/inviteFriend/checkActivity.htm', data);
    }
};
