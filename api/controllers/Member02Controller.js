/**
 * Member02Controller
 *
 * @description :: Server-side logic for managing member02s
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var querystring = require('querystring');
module.exports = {
	getIntegraM2: function(request, response, callback) {
		var data = querystring.stringify({
			token: GlobalMethods.tokenDes(request.body.token)
		});
		GlobalMethods.httpPostPHP(request, response, callback, GlobalVal.apiHostPHP, '/Home/Activity/JfExchangeMoney/get_integration', data);
	},
	exchangeIntegraM2: function(request, response, callback) {
		var data = querystring.stringify({
			token: GlobalMethods.tokenDes(request.body.token),
			amount: request.body.amount,
			jf_val: request.body.jf_val
		});
		GlobalMethods.httpPostPHP(request, response, callback, GlobalVal.apiHostPHP, '/Home/Activity/JfExchangeMoney/exchange', data);
	},
};
