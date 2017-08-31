/**
 * Weekend3Controller
 *
 * @description :: Server-side logic for managing Weekend3s
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var querystring = require('querystring');
module.exports = {
	checkUsedAndExchanged: function(request, response, callback) {
		var data = querystring.stringify({
			keyName: request.body.keyName,
			mobile: request.body.mobile
		});
		GlobalMethods.httpPost(request, response, callback,GlobalVal.apiHost, '/payment/activity/inviteFriend/checkUsedAndExchanged.htm', data);
	},
	exchangeWeekend3Award: function(request, response, callback) {
		var data = querystring.stringify({
			lotteryAwardId: request.body.lotteryAwardId,
			mobile: request.body.mobile
		});
		GlobalMethods.httpPost(request, response, callback,GlobalVal.apiHost, '/payment/activity/inviteFriend/exchangeWeekend3Award.htm', data);
	},
};
