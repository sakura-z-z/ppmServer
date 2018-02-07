/**
 * SpringWealthController
 *
 * @description :: Server-side logic for managing springwealths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var querystring = require('querystring');
module.exports = {
	lotteryNewYear: function(request, response, callback) {
		var data = querystring.stringify({
			token: GlobalMethods.tokenDes(request.body.token),
			keyName: request.body.keyName
		});
		GlobalMethods.httpPost(request, response, callback, GlobalVal.apiHost, '/ppmiao-award/lotteryNewYear.json', data);
	}
};
